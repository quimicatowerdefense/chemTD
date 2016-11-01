"use strict";

/*
 * A shot from the Water Tower
 */
var WaterShot = Shot.extend({
	init: function() {
		this._super(WaterShot.speed, 25, WaterShot.damage, WaterShot.waterdamage, WaterShot.tempdamage, WaterShot.aciddamage, WaterShot.basedamage, WaterShot.oxiddamage, WaterShot.impactRadius);
		this.createVisual(WaterShot.sprite, [1, 1, 1, 1], 0.3);
		this.playSound('WaterShot');
	},
}, function(water) {
	water.nickName = 'Water Shot';
	water.description = '';
	water.sprite = 'WaterShot';
	water.frames = 4;
	water.speed = 8.0;
	water.damage = 1;
	water.waterdamage = 2;
	water.tempdamage = 0;
	water.aciddamage = 0;
	water.basedamage = 0;
	water.oxiddamage = 0;
	water.impactRadius = 0.5;
	water.rating = Math.log(water.speed + 1) * water.damage * Math.log(water.impactRadius + 1);
	types.shots['WaterShot'] = water;
});

/*
 * The Temperature
 */
var TemperatureShot = Shot.extend({
	init: function() {
		this._super(TemperatureShot.speed, 100, TemperatureShot.damage, TemperatureShot.waterdamage, TemperatureShot.tempdamage, TemperatureShot.aciddamage, TemperatureShot.basedamage, TemperatureShot.oxiddamage, TemperatureShot.impactRadius);
		this.createVisual(TemperatureShot.sprite, [8]);
		this.playSound('TemperatureShot');
	},
}, function(temperature) {
	temperature.nickName = 'Temperature';
	temperature.description = "";
	temperature.sprite = 'TemperatureShot';
	temperature.frames = 8;
	temperature.speed = 4.5;
	temperature.damage = 1;
	temperature.waterdamage = 0;
	temperature.tempdamage = 2;
	temperature.aciddamage = 0;
	temperature.basedamage = 0;
	temperature.oxiddamage = 0;
	temperature.impactRadius = 0.5;
	temperature.rating = Math.log(temperature.speed + 1) * temperature.damage * Math.log(temperature.impactRadius + 1);
	types.shots['TemperatureShot'] = temperature;
});

/*
 * The shot from hell
 */
var BaseShot = Shot.extend({
	init: function() {
		this._super(BaseShot.speed, 75, BaseShot.damage, BaseShot.waterdamage, BaseShot.tempdamage, BaseShot.aciddamage, BaseShot.basedamage, BaseShot.oxiddamage, BaseShot.impactRadius);
		this.createVisual(BaseShot.sprite, [12]);
		this.playSound('BaseShot');
	},
}, function(base) {
	base.nickName = 'Base';
	base.description = '';
	base.sprite = 'BaseShot';
	base.frames = 12;
	base.speed = 10.0;
	base.impactRadius = 0.5;
	base.damage = 1;
	base.waterdamage = 0;
	base.tempdamage = 0;
	base.aciddamage = 0;
	base.basedamage = 4;
	base.oxiddamage = 0;
	base.rating = Math.log(base.speed + 1) * base.damage * Math.log(base.impactRadius + 1);
	types.shots['BaseShot'] = base;
});

/*
 * The Acid Shot
 */
var AcidShot = Shot.extend({
	init: function() {
		this._super(AcidShot.speed, 200, AcidShot.damage, AcidShot.waterdamage, AcidShot.tempdamage, AcidShot.aciddamage, AcidShot.basedamage, AcidShot.oxiddamage, AcidShot.impactRadius);
		this.createVisual(AcidShot.sprite, [4]);
		this.playSound('AcidShot');
	},
}, function(acid) {
	acid.nickName = 'Acid';
	acid.description = '';
	acid.sprite = 'AcidShot';
	acid.frames = 4;
	acid.speed = 4.0;
	acid.impactRadius = 0.5;
	acid.damage = 1;
	acid.waterdamage = 0;
	acid.tempdamage = 0;
	acid.aciddamage = 3;
	acid.basedamage = 0;
	acid.oxiddamage = 0;
	acid.rating = Math.log(acid.speed + 1) * acid.damage * Math.log(acid.impactRadius + 1);
	types.shots['AcidShot'] = acid;
});

/*
 * An Oxid Shot
 */
var OxidShot = Shot.extend({
	init: function() {
		this._super(OxidShot.speed, 25, OxidShot.damage, OxidShot.waterdamage, OxidShot.tempdamage, OxidShot.aciddamage, OxidShot.basedamage, OxidShot.oxiddamage, OxidShot.impactRadius);
		this.createVisual(OxidShot.sprite, [6, 6, 6, 6]);
		this.playSound('OxidShot');
	},
}, function(oxid) {
	oxid.nickName = 'OxidShot';
	oxid.description = '';
	oxid.sprite = 'OxidShot';
	oxid.frames = 24;
	oxid.speed = 9.5;
	oxid.impactRadius = 0.5;
	oxid.damage = 1;
	oxid.waterdamage = 0;
	oxid.tempdamage = 0;
	oxid.aciddamage = 0;
	oxid.basedamage = 0;
	oxid.oxiddamage = 1;
	oxid.rating = Math.log(oxid.speed + 1) * oxid.damage * Math.log(oxid.impactRadius + 1);
	types.shots['OxidShot'] = oxid;
});



/*
 * The standard shot
 */
/*var StandardShot = Shot.extend({
	init: function() {
		this._super(StandardShot.speed, 15, StandardShot.damage, StandardShot.impactRadius);
		this.createVisual(StandardShot.sprite, [1], 0.25);
		this.playSound('wowpulse');
	},
}, function(std) {
	std.nickName = 'Standard';
	std.description = 'Just an ordinary shot with no special ability.';
	std.sprite = 'sunshot';
	std.frames = 1;
	std.speed = 10;
	std.damage = 1;
	std.impactRadius = 0.5;
	std.rating = Math.log(std.speed + 1) * std.damage * Math.log(std.impactRadius + 1);
	//types.shots['StandardShot'] = std;
});*/


/*
 * The shell shot
 */
/*var ShellShot = Shot.extend({
	init: function() {
		this._super(ShellShot.speed, 25, ShellShot.damage, ShellShot.impactRadius);
		this.createVisual(ShellShot.sprite, [1, 1, 1, 1], 0.3);
		this.playSound('artillery');
	},
}, function(shell) {
	shell.nickName = 'Shell';
	shell.description = 'Hardened steel projectile that is no joke.';
	shell.sprite = 'shellshot';
	shell.frames = 4;
	shell.speed = 40;
	shell.damage = 15;
	shell.impactRadius = 0.5;
	shell.rating = Math.log(shell.speed + 1) * shell.damage * Math.log(shell.impactRadius + 1);
	types.shots['ShellShot'] = shell;
});*/