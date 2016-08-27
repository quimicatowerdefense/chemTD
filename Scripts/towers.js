"use strict";

/*
 * A stupid rock
 */
var Rock = Tower.extend({
	init: function() {
		this._super(Rock.speed, 200, Rock.range);
		this.createVisual(Rock.sprite, [1]);
	},
}, function(rock) {
	rock.description = "Just a rock ... a big ROCK. If you can't boulder you have to go around.";
	rock.nickName = 'Rock';
	rock.sprite = 'rock';
	rock.frames = 1;
	rock.shotType = {};
	rock.speed = 0;
	rock.range = 0;
	rock.rating = 0;
	rock.cost = 0;
	types.towers['Rock'] = rock;
});

/*
 * The efficient WaterTower
 */
var WaterTower = Tower.extend({
	init: function() {
		this._super(WaterTower.speed, 25, WaterTower.range, WaterTower.shotType);
		this.createVisual(WaterTower.sprite, [1]);
	},
}, function(water) {
	water.description = 'The Water Tower is cheap but powerful. It can help you a lot against low armored elements.';
	water.nickName = 'Water Tower';
	water.sprite = 'WaterTower';
	water.frames = 1;
	water.shotType = WaterShot;
	water.speed = 4.0;
	water.range = 4.0;
	water.rating = water.speed * Math.log(water.range + 1.0) * water.shotType.rating;
	water.cost = Math.round(water.rating / 6.0 + 1.0);
	types.towers['watertower'] = water;
});


/*
 * The TemperatureTower
 */
var TemperatureTower = Tower.extend({
	init: function() {
		this._super(TemperatureTower.speed, 200, TemperatureTower.range, TemperatureTower.shotType);
		this.createVisual(TemperatureTower.sprite, [4]);
	},
}, function(temperature) {
	temperature.description = 'Burn them down but a bit faster ... Excellent for slow armored enemies, but fails against strong armored elements.';
	temperature.nickName = 'Temperature Tower';
	temperature.sprite = 'TemperatureTower';
	temperature.frames = 4;
	temperature.shotType = TemperatureShot;
	temperature.speed = 6.0;
	temperature.range = 2.0;
	temperature.rating = temperature.speed * Math.log(temperature.range + 1.0) * temperature.shotType.rating;
	temperature.cost = Math.round(temperature.rating / 6.0 + 1.0);
	types.towers['TemperatureTower'] = temperature;
});

/*
 * The famous gate to hell
 */
var BaseTower = Tower.extend({
	init: function() {
		this._super(BaseTower.speed, 200, BaseTower.range, BaseTower.shotType);
		this.createVisual(BaseTower.sprite, [1]);
	},
}, function(base) {
	base.description = 'Paint rules! This is the ultimate weapon of war, but it will not kill high speed units.';
	base.nickName = 'Base Tower';
	base.sprite = 'BaseTower';
	base.frames = 1;
	base.shotType = BaseShot;
	base.speed = 1.0;
	base.range = 2.0;
	base.rating = base.speed * Math.log(base.range + 1.0) * base.shotType.rating;
	base.cost = Math.round(base.rating / 6.0 + 1.0);
	types.towers['BaseTower'] = base;
});


/*
 * The canon tower
 */
/*var CanonTower = Tower.extend({
	init: function() {
		this._super(CanonTower.speed, 50, CanonTower.range, CanonTower.shotType);
		this.createVisual(CanonTower.sprite, [1, 1, 1, 1]);
	},
}, function(canon) {
	canon.description = 'The backbone in war! It has an amazing range and shoots shells, however, the firing speed could be better.';
	canon.nickName = 'Canon';
	canon.sprite = 'canontower';
	canon.frames = 4;
	canon.shotType = ShellShot;
	canon.speed = 1.0;
	canon.range = 8.0;
	canon.rating = canon.speed * Math.log(canon.range + 1.0) * canon.shotType.rating;
	canon.cost = Math.round(canon.rating / 6.0 + 1.0);
	types.towers['CanonTower'] = canon;
});
*/


/*
 * The AcidTower
 */
var AcidTower = Tower.extend({
	init: function() {
		this._super(AcidTower.speed, 200, AcidTower.range, AcidTower.shotType);
		this.createVisual(AcidTower.sprite, [1]);
	},
}, function(acid) {
	acid.description = 'Cool. Slow shots, but with high efficiency. The right choice against slow strongly armored units.';
	acid.nickName = 'Acid Tower';
	acid.sprite = 'AcidTower';
	acid.frames = 1;
	acid.shotType = AcidShot;
	acid.speed = 2.0;
	acid.range = 6.0;
	acid.rating = acid.speed * Math.log(acid.range + 1.0) * acid.shotType.rating;
	acid.cost = Math.round(acid.rating / 6.0 + 1.0);
	types.towers['AcidTower'] = acid;
});

/*
 * The OxidTower
 */
var OxidTower = Tower.extend({
	init: function() {
		this._super(OxidTower.speed, 25, OxidTower.range, OxidTower.shotType);
		this.createVisual(OxidTower.sprite, [1]);
	},
}, function(oxid) {
	oxid.description = "Won't play with you, but does it with high efficiency. Really fast low damage shots.";
	oxid.nickName = 'Oxid Tower';
	oxid.sprite = 'OxidTower';
	oxid.frames = 1;
	oxid.shotType = OxidShot;
	oxid.speed = 3.0;
	oxid.range = 5.0;
	oxid.rating = oxid.speed * Math.log(oxid.range + 1.0) * oxid.shotType.rating;
	oxid.cost = Math.round(oxid.rating / 6.0 + 1.0);
	types.towers['OxidTower'] = oxid;
});

