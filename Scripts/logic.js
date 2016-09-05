"use strict";
/*
 * The gamestate enumeration
 */
var GameState = {
	unstarted : 0,
	building : 1,
	waving : 2,
	finished : 3,
};

/* 
 * Global objects
 */
var types = {
	units : {},
	towers : {},
	shots : {},
};

/*
 * The GAME
 */
var GameLogic = Base.extend({
	init: function(view, mazeWidth, mazeHeight) {
		var me = this;
		me._super();

		me.towers = [];
		me.units  = [];
		me.shots  = [];


		me.maxTowerNumber   = constants.towerBuildNumber;
	

		me.view          = view;
		me.player        = new Player();
		me.state         = GameState.unstarted;
		me.maze          = new Maze(new Size(mazeWidth || 20, mazeHeight || 11));
		me.view.mazeSize = me.getMazeSize();
		me.waves         = new WaveList();
		me.currentWave   = new Wave();

		me.player.addEventListener(events.playerDefeated, function(e) {
			me.triggerEvent(events.playerDefeated, e);
			me.finish();
			this.createLoser();
		});

		me.player.addEventListener(events.moneyChanged, function(e) {
			me.triggerEvent(events.moneyChanged, e);
		});

		me.player.addEventListener(events.healthChanged, function(e) {
			me.triggerEvent(events.healthChanged, e);
		});

		me.registerEvent(events.refreshed);
		me.registerEvent(events.waveDefeated);
		me.registerEvent(events.waveFinished);
		me.registerEvent(events.playerDefeated);
		me.registerEvent(events.moneyChanged);
		me.registerEvent(events.healthChanged);
		me.registerEvent(events.waveCreated);
		me.registerEvent(events.unitSpawned);
		me.registerEvent(events.towerNumberChanged);
	},
	start: function() {		
		if (this.state === GameState.unstarted) {
			this.player.setHitpoints(constants.hitpoints);
			this.player.setMoney(constants.money);
			this.triggerEvent(events.towerNumberChanged, {
				current: this.getNumShooting(),
				maximum: this.maxTowerNumber,
			});
			this.state = GameState.building;
		}

		if (!this.gameLoop) {
			var me = this;
			this.view.start();
			this.gameLoop = setInterval(function() {
				me.tick();
			}, constants.ticks);	
		}
	},
	pause: function() {
		if (this.gameLoop) {
			this.view.pause();
			clearInterval(this.gameLoop);
			this.gameLoop = undefined;	
		}
	},
	update: function(objects) {
		for (var i = objects.length; i--; )
			objects[i].update();
	},
	tick: function() {
		if (this.state !== GameState.building && this.state !== GameState.waving)
			return;

		this.update(this.towers);

		if (this.state === GameState.waving) {
			this.update(this.shots);
			this.update(this.units);
			this.removeDeadObjects();
			var newUnits = this.currentWave.update();

			for (var i = newUnits.length; i--; ) {
				var unit = newUnits[i];
				var path = this.maze.getPath(unit.strategy);
				unit.mazeCoordinates = this.maze.start;
				unit.path = new Path(path);
				this.addUnit(unit);
			}
		}
	},
	finish: function() {
		this.state = GameState.finished;
	},
	getViewSize: function() {
		return this.view.getSize();
	},
	getNumShooting: function() {
		return this.towers.filter(function(tower) {
			return (tower instanceof Rock) === false;
		}).length;
	},
	getMazeSize: function() {
		return this.maze.gridDim;
	},
	transformCoordinates: function(screenX, screenY) {
		var x = screenX * this.maze.gridDim.width / this.view.width;
		var y = screenY * this.maze.gridDim.height / this.view.height;
		return new Point(~~x, ~~y);
	},
	removeTower: function(tower) {
		tower.removeEventListener(events.shot);
		this.towers.splice(this.towers.indexOf(tower), 1);
		this.view.remove(tower);
	},
	addTower: function(tower) {
		var me = this;
		tower.addEventListener(events.shot, function(shot) {
			me.addShot(shot);
		});
		me.towers.push(tower);
		me.view.add(tower);
	},
	addShot: function(shot) {
		this.shots.push(shot);
		this.view.add(shot);
	},
	addUnit: function(unit) {
		var me = this;
		unit.addEventListener(events.accomplished, function(unt) {
			me.player.hit(unt);
		});
		unit.playInitSound();
		me.units.push(unit);
		me.view.add(unit);
	},
	removeDead: function(objects) {
		for (var i = objects.length; i--; ) {
			if (objects[i].dead) {
				this.view.remove(objects[i]);
				objects.splice(i, 1);
			}
		}
	},
	removeDeadObjects: function() {
		this.removeDead(this.towers);
		this.removeDead(this.shots);
		this.removeDead(this.units);

		if (this.currentWave.finished && this.units.length === 0)
			this.endWave();
	},
	endWave: function() {
		this.player.addMoney(this.currentWave.prizeMoney);
		this.state = GameState.building;

		for (var i = this.shots.length; i--; ) {
			this.view.remove(this.shots[i]);
			this.shots.splice(i, 1);
		}

		this.triggerEvent(events.waveDefeated, this.currentWave);
	},
	beginWave: function() {
		if (this.state === GameState.building) {
			var me = this;
			
			this.createRocks();
			
			me.state = GameState.waving;
			var wave = me.waves.next();
			wave.addEventListener(events.waveFinished, function() {
				me.triggerEvent(events.waveFinished);
				wave.removeEventListener(events.waveFinished);
				wave.removeEventListener(events.unitSpawned);
			});
			wave.addEventListener(events.unitSpawned, function(e) {
				me.triggerEvent(events.unitSpawned, e);
			});
			me.triggerEvent(events.waveCreated, wave);
			me.currentWave = wave;
		}
	},
	buildTower: function(pt, type) {
		var newTower = new type();
		var isrock = newTower instanceof Rock;
		var numShooting = this.getNumShooting();

		if (this.state === GameState.building && type.cost <= this.player.money && (isrock || (numShooting < this.maxTowerNumber))) {
			newTower.mazeCoordinates = pt;
			newTower.cost = type.cost;
			newTower.targets = this.units;

			if (this.maze.tryBuild(pt, newTower.mazeWeight)) {
				this.player.addMoney(-type.cost);
				this.addTower(newTower);

				if (!isrock) {
					this.triggerEvent(events.towerNumberChanged, {
						current: numShooting + 1,
						maximum: this.maxTowerNumber,
					});	
				}

				return true;
			}
		}

		return false;
	},
	destroyTower: function(pt) {
		if (this.state == GameState.building) {
			var towerToRemove = this.towers.filter(function(t) {
				return t.mazeCoordinates.x === pt.x && t.mazeCoordinates.y === pt.y;
			})[0];

			if (towerToRemove) {
				this.player.addMoney(0.5 * towerToRemove.cost);
				this.removeTower(towerToRemove);
				this.maze.tryRemove(pt);

				if (!(towerToRemove instanceof Rock)) {
					this.triggerEvent(events.towerNumberChanged, {
						current: this.getNumShooting(),
						maximum: this.maxTowerNumber,
					});
				}
			}
		}
	},
	
	createRocks: function(){
    var numRocks = 212;
    var x = [[1,0],[1,1],[1,2],[1,3],[1,4],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],[2,4],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[3,4],[3,12],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,13],[5,11],[5,14],[6,12],[6,14],[7,14],[7,12],[7,11],[7,10],[7,9],[7,8],[7,7],[7,6],[7,5],[7,4],[7,3],[7,2],[7,1],[8,0],[8,0],[8,14],[9,13],[9,12],[9,11],[9,10],[9,9],[9,8],[9,7],[9,6],[9,5],[9,4],[9,3],[9,2],[9,0],[10,0],[10,2],[11,0],[11,2],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],[11,12],[11,13],[11,14],[12,0],[12,2],[12,4],[13,0],[13,2],[13,4],[13,6],[13,7],[13,8],[13,9],[13,10],[13,11],[13,12],[13,13],[14,0],[14,2],[14,4],[14,6],[14,12],[14,13],[15,0],[15,2],[15,4],[15,6],[15,8],[15,9],[15,10],[15,12],[15,13],[16,0],[16,2],[16,3],[16,4],[16,6],[16,8],[16,9],[16,10],[16,12],[16,13],[17,0],[17,6],[17,8],[17,10],[17,12],[17,13],[18,1],[18,2],[18,3],[18,4],[18,5],[18,6],[18,8],[18,10],[18,12],[18,13],[19,6],[19,8],[19,9],[19,10],[19,12],[19,13],[20,1],[20,2],[20,3],[20,4],[20,5],[20,6],[20,10],[20,12],[20,13],[21,0],[21,6],[21,7],[21,8],[21,10],[22,0],[22,2],[22,3],[22,4],[22,6],[22,7],[22,8],[22,10],[22,11],[22,12],[22,13],[22,14],[23,0],[23,2],[23,4],[23,10],[23,12],[23,13],[23,14],[24,0],[24,2],[24,5],[24,6],[24,7],[24,8],[24,9],[24,11],[25,2],[25,6],[25,7],[25,8],[25,9],[25,10],[25,13],[26,1],[26,5],[26,12],[26,13],[27,1],[27,2],[27,3],[27,4],[27,5],[27,7],[27,8],[27,9],[27,10],[27,11],[27,12],[27,13],[28,7],[28,11],[29,0],[29,1],[29,2],[29,3],[29,4],[29,5],[29,6],[29,11],[29,13],[29,14],[29,13],[29,14]];
    for (var i=0; i< numRocks; i++) {
        var pos=new Point(x[i][0],x[i][1]);
        this.buildTower(pos,types.towers['Rock']);
		}
	},
	
	/*createRocks: function(){
		var numRocks= 137;
		for (var i=0; i< numRocks; i++){
			var x=Math.random()*this.maze.gridDim.width;
			var y=Math.random()*this.maze.gridDim.height;
			var pos = new Point(~~x, ~~y);
			this.buildTower(pos,types.towers['Rock']);
		}
	},*/
	
	
	createLoser: function(){
		var numRocks=50;
		for (var i=0; i< numRocks; i++){
			var x=Math.random()*this.maze.gridDim.width;
			var y=Math.random()*this.maze.gridDim.height;
			var pos = new Point(~~x, ~~y);
			this.buildTower(pos,types.towers['Rock']);
		}
	},
});

/*
 * The WAVELIST
 */
var WaveList = Class.extend({
	init: function() {
		this.waves = [];
		this.index = 0;
		this.unitNames = Object.keys(types.units);
	},
	random: function() {
		var wave = new Wave();
		var n = rand(Math.max(~~(this.index * 0.5), 1), this.index);
		var maxtime = 1300 * n;
		wave.prizeMoney = n;

		for (var i = 0; i < n; ++i) {
			var j = rand(0, Math.min(this.unitNames.length, ~~(this.index * 0.2) + 1));
			var name = this.unitNames[j];
			var unit = new (types.units[name])();
			wave.add(unit, i === 0 ? 0 : rand(0, maxtime));
		}

		return wave;
	},
	next: function() {
		if (this.index < this.waves.length)
			return this.waves[this.index++];

		++this.index;
		return this.random();
	},
});

/*
 * The WAVE
 */
var Wave = Base.extend({
	init: function() {
		this._super();
		this.startTime = 0;
		this.units = [];
		this.prizeMoney = 0;
		this.finished = false;
		this.registerEvent(events.unitSpawned)
		this.registerEvent(events.waveFinished);
	},
	add: function(unit, time) {
		this.units.push({
			time: time,
			unit: unit
		});
	},
	update: function() {
		var unitsToSpawn = [];

		if (!this.finished) {
			for (var i = this.units.length; i--; ) {
				if (this.units[i].time < this.startTime) {
					unitsToSpawn.push(this.units[i].unit);
					this.units.splice(i, 1);
				}
			}

			if (this.units.length === 0) {
				this.finished = true;
				this.triggerEvent(events.waveFinished);
			}

			if (unitsToSpawn.length > 0) {
				var remaining = this.units.length;
				this.triggerEvent(events.unitSpawned, remaining); 				
			}

			this.startTime += constants.ticks;
		}

		return unitsToSpawn;
	},
});