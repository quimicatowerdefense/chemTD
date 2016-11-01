"use strict";
/*
 * Global constants
 */
var constants = {
	ticks: 25,
	money : 30,
	hitpoints : 5,
	towerBuildNumber : 100000,
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
		{ name : 'BaseInsoluble', value : 'Content/sprites/BaseInsoluble.png' },
		{ name : 'metalls', value : 'Content/sprites/metalls.png' },
		{ name : 'SalSoluble', value : 'Content/sprites/SalSoluble.png' },
		{ name : 'SalInsoluble', value : 'Content/sprites/SalInsoluble.png' },
		{ name : 'AcidInsoluble', value : 'Content/sprites/AcidInsoluble.png' },
		{ name : 'TemperatureShot', value : 'Content/sprites/TemperatureShot.png' },
		{ name : 'TemperatureTower', value : 'Content/sprites/TemperatureTower.png' },
		{ name : 'BaseTower', value : 'Content/sprites/BaseTower.png' },
		{ name : 'BaseShot', value : 'Content/sprites/BaseShot.png' },
		{ name : 'AcidShot', value : 'Content/sprites/AcidShot.png' },
		{ name : 'AcidTower', value : 'Content/sprites/AcidTower.png' },
		{ name : 'OxidShot', value : 'Content/sprites/OxidShot.png' },
		{ name : 'OxidTower', value : 'Content/sprites/OxidTower.png' },
		{ name : 'WaterTower', value : 'Content/sprites/WaterTower.png' },
		{ name : 'WaterShot', value : 'Content/sprites/WaterShot.png' },
		{ name : 'rock', value : 'Content/sprites/rock_drawing.png' },
		{ name : 'loser', value : 'Content/loser.jpg'},
		{ name : 'inici', value : 'Content/INICI_DE_PANTALLA.jpg'},
		
		/*{ name : 'shellshot', value : 'Content/sprites/shellshot.png' },*/
		/*{ name : 'suns', value : 'Content/sprites/suns.png' },*/
		/*{ name : 'sunshot', value : 'Content/sprites/sunshot.png' },*/
		/*{ name : 'canontower', value : 'Content/sprites/canontower.png' },*/
	],
	sounds : [
		{ name : 'hold_the_line', value : { ogg : 'Content/music/hold_the_line.ogg', mp3 : 'Content/music/hold_the_line.mp3' }},
		{ name : 'burn_them_down', value : { ogg : 'Content/music/TheElementSong.ogg', mp3 : 'Content/music/TheElementSong.mp3' }},
		{ name : 'ak47-1', value : { ogg : 'Content/effects/ak47-1.ogg', mp3 : 'Content/effects/ak47-1.mp3' }},
		/*{ name : 'artillery', value : { ogg : 'Content/effects/artillery.ogg', mp3 : 'Content/effects/artillery.mp3' }},*/
		{ name : 'explosion', value : { ogg : 'Content/effects/explosion.ogg', mp3 : 'Content/effects/explosion.mp3' }},
		{ name : 'TemperatureShot', value : { ogg : 'Content/effects/TemperatureShot.ogg', mp3 : 'Content/effects/TemperatureShot.mp3' }},
		{ name : 'BaseShot', value : { ogg : 'Content/effects/BaseShot.ogg', mp3 : 'Content/effects/BaseShot.mp3' }},
		{ name : 'humm', value : { ogg : 'Content/effects/humm.ogg', mp3 : 'Content/effects/humm.mp3' }},
		{ name : 'AcidShot', value : { ogg : 'Content/effects/AcidShot.ogg', mp3 : 'Content/effects/AcidShot.mp3' }},
		{ name : 'OxidShot', value : { ogg : 'Content/effects/OxidShot.ogg', mp3 : 'Content/effects/OxidShot.mp3' }},
		{ name : 'laugh', value : { ogg : 'Content/effects/laugh.ogg', mp3 : 'Content/effects/laugh.mp3' }},
		{ name : 'WaterShot', value : { ogg : 'Content/effects/WaterShot.ogg', mp3 : 'Content/effects/WaterShot.mp3' }},
		{ name : 'wowpulse', value : { ogg : 'Content/effects/wowpulse.ogg', mp3 : 'Content/effects/wowpulse.mp3' }},
	],
}