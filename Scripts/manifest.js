"use strict";
/*
 * Global constants
 */
var constants = {
	ticks: 25,
	money : 5,
	hitpoints : 10,
	towerBuildNumber : 1000,
};

/*
 * A list of possible events
 */
var events = {
	click: 'click',
	mousemove: 'mousemove',
	mouseover: 'mouseover',
	mouseout: 'mouseout',
	contextmenu: 'contextmenu',
	died: 'died',
	shot: 'shot',
	hit: 'hit',
	accomplished : 'accomplished',
	playerDefeated : 'playerDefeated',
	moneyChanged : 'moneyChanged',
	waveCreated : 'waveCreated',
	waveFinished : 'waveFinished',
	waveDefeated : 'waveDefeated',
	healthChanged : 'healthChanged',
	unitSpawned : 'unitSpawned',
	towerNumberChanged : 'towerNumberChanged',
};

/*
 * The images to load
 */
var resources = {
	images : [
		{ name : 'background', value : 'Content/background.jpg' },
		{ name : 'metallsNobles', value : 'Content/sprites/metallsNobles.png' },
		{ name : 'MateriaOrganica', value : 'Content/sprites/MateriaOrganica.png' },
		{ name : 'canontower', value : 'Content/sprites/canontower.png' },
		{ name : 'BaseInsoluble', value : 'Content/sprites/BaseInsoluble.png' },
		{ name : 'metalls', value : 'Content/sprites/metalls.png' },
		{ name : 'flameshot', value : 'Content/sprites/flameshot.png' },
		{ name : 'flametower', value : 'Content/sprites/flametower.png' },
		{ name : 'gatetohell', value : 'Content/sprites/gatetohell.png' },
		{ name : 'hellshot', value : 'Content/sprites/hellshot.png' },
		{ name : 'iceshot', value : 'Content/sprites/iceshot.png' },
		{ name : 'icetower', value : 'Content/sprites/icetower.png' },
		{ name : 'lasershot', value : 'Content/sprites/lasershot.png' },
		{ name : 'lasertower', value : 'Content/sprites/lasertower.png' },
		{ name : 'mgnest', value : 'Content/sprites/mgnest.png' },
		{ name : 'mgshot', value : 'Content/sprites/mgshot.png' },
		{ name : 'AcidInsoluble', value : 'Content/sprites/AcidInsoluble.png' },
		{ name : 'rock', value : 'Content/sprites/rock_drawing.png' },
		{ name : 'SalInsoluble', value : 'Content/sprites/SalInsoluble.png' },
		{ name : 'shellshot', value : 'Content/sprites/shellshot.png' },
		{ name : 'suns', value : 'Content/sprites/suns.png' },
		{ name : 'sunshot', value : 'Content/sprites/sunshot.png' },
		{ name : 'SalSoluble', value : 'Content/sprites/SalSoluble.png' },
	],
	sounds : [
		{ name : 'hold_the_line', value : { ogg : 'Content/music/hold_the_line.ogg', mp3 : 'Content/music/hold_the_line.mp3' }},
		{ name : 'burn_them_down', value : { ogg : 'Content/music/heathens.ogg', mp3 : 'Content/music/heathens.mp3' }},
		{ name : 'ak47-1', value : { ogg : 'Content/effects/ak47-1.ogg', mp3 : 'Content/effects/ak47-1.mp3' }},
		{ name : 'artillery', value : { ogg : 'Content/effects/artillery.ogg', mp3 : 'Content/effects/artillery.mp3' }},
		{ name : 'explosion', value : { ogg : 'Content/effects/explosion.ogg', mp3 : 'Content/effects/explosion.mp3' }},
		{ name : 'flames', value : { ogg : 'Content/effects/flames.ogg', mp3 : 'Content/effects/flames.mp3' }},
		{ name : 'hellshot', value : { ogg : 'Content/effects/hellshot.ogg', mp3 : 'Content/effects/hellshot.mp3' }},
		{ name : 'humm', value : { ogg : 'Content/effects/humm.ogg', mp3 : 'Content/effects/humm.mp3' }},
		{ name : 'icy', value : { ogg : 'Content/effects/icy.ogg', mp3 : 'Content/effects/icy.mp3' }},
		{ name : 'laser', value : { ogg : 'Content/effects/laser.ogg', mp3 : 'Content/effects/laser.mp3' }},
		{ name : 'laugh', value : { ogg : 'Content/effects/laugh.ogg', mp3 : 'Content/effects/laugh.mp3' }},
		{ name : 'mgnest', value : { ogg : 'Content/effects/mgnest.ogg', mp3 : 'Content/effects/mgnest.mp3' }},
		{ name : 'wowpulse', value : { ogg : 'Content/effects/wowpulse.ogg', mp3 : 'Content/effects/wowpulse.mp3' }},
	],
}