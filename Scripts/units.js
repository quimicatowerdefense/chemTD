"use strict";
/*
 * The SalSoluble unit
 */
var SalSoluble = Unit.extend({
	init: function() {
		this._super(SalSoluble.speed, 100, MazeStrategy.manhattan, SalSoluble.hitpoints);
		this.createVisual(SalSoluble.sprite, [1,1,1,1]);
	},
}, function(enemy) {
	enemy.speed = 2.0;
	enemy.hitpoints = 10;
	enemy.description = 'You have to be careful with that plumber.';
	enemy.nickName = 'SalSoluble';
	enemy.sprite = 'SalSoluble';
	enemy.rating = enemy.speed * enemy.hitpoints;
	types.units['SalSoluble'] = enemy;
});

/*
 * The SalInsoluble unit
 */
var SalInsoluble = Unit.extend({
	init: function() {
		this._super(SalInsoluble.speed, 80, MazeStrategy.euclideanNoSQR, SalInsoluble.hitpoints);
		this.createVisual(SalInsoluble.sprite, [1, 1, 1, 1]);
	},
}, function(SalInsoluble) {
	SalInsoluble.speed = 2.0;
	SalInsoluble.hitpoints = 20;
	SalInsoluble.description = 'An ugly SalInsoluble that tries to conquer the zone. Watch out when they mass up!';
	SalInsoluble.nickName = 'SalInsoluble';
	SalInsoluble.sprite = 'SalInsoluble';
	SalInsoluble.rating = SalInsoluble.speed * SalInsoluble.hitpoints;
	types.units['SalInsoluble'] = SalInsoluble;
});

/*
 * A derived AcidInsoluble
 */
var AcidInsoluble = Unit.extend({
	init: function() {
		this._super(AcidInsoluble.speed, 25, MazeStrategy.diagonalShortCut, AcidInsoluble.hitpoints);
		this.createVisual(AcidInsoluble.sprite, [1, 1, 1, 1]);
	},
}, function(AcidInsoluble) {
	AcidInsoluble.speed = 5.0;
	AcidInsoluble.hitpoints = 200;
	AcidInsoluble.description = 'This AcidInsoluble is just a single blob. It is ultra fast and has quite some armor. It will give you some trouble.';
	AcidInsoluble.nickName = 'AcidInsoluble';
	AcidInsoluble.sprite = 'AcidInsoluble';
	AcidInsoluble.rating = AcidInsoluble.speed * AcidInsoluble.hitpoints;
	types.units['AcidInsoluble'] = AcidInsoluble;
});


/*
 * The BaseInsoluble unit
 */
var BaseInsoluble = Unit.extend({
	init: function() {
		this._super(BaseInsoluble.speed, 80, MazeStrategy.euclideanNoSQR, BaseInsoluble.hitpoints);
		this.createVisual(BaseInsoluble.sprite, [1, 1, 1, 1]);
	},
}, function(BaseInsoluble) {
	BaseInsoluble.speed = 2.5;
	BaseInsoluble.hitpoints = 150;
	BaseInsoluble.description = 'The BaseInsoluble is an ancient warrier that takes quite some hits. His speed is superior to most other units.';
	BaseInsoluble.nickName = 'BaseInsoluble';
	BaseInsoluble.sprite = 'BaseInsoluble';
	BaseInsoluble.rating = BaseInsoluble.speed * BaseInsoluble.hitpoints;
	types.units['BaseInsoluble'] = BaseInsoluble;
});

/*
 * The metalls unit
 */
var metalls = Unit.extend({
	init: function() {
		this._super(metalls.speed, 70, MazeStrategy.manhattan, metalls.hitpoints);
		this.createVisual(metalls.sprite, [1,1, 1, 1] );
	},
}, function(metalls) {
	metalls.speed = 3.0;
	metalls.hitpoints = 30;
	metalls.description = 'The metalls with the fire robe is quite fast, but does not take very much.';
	metalls.nickName = 'metalls';
	metalls.sprite = 'metalls';
	metalls.rating = metalls.speed * metalls.hitpoints;
	types.units['metalls'] = metalls;
});

/*
 * The big metallsNobles unit
 */
var metallsNobles = Unit.extend({
	init: function() {
		this._super(metallsNobles.speed, 125, MazeStrategy.euclidean, metallsNobles.hitpoints);
		this.createVisual(metallsNobles.sprite, [1, 1, 1, 1]);
	},
}, function(metallsNobles) {
	metallsNobles.speed = 1.0;
	metallsNobles.hitpoints = 600;
	metallsNobles.description = 'The unit is actually called metallsNobles and not Armor, however, Armor would have been a good name as well. You will need some fire power to bring him down.';
	metallsNobles.nickName = 'metallsNobles';
	metallsNobles.sprite = 'metallsNobles';
	metallsNobles.rating = metallsNobles.speed * metallsNobles.hitpoints;
	types.units['metallsNobles'] = metallsNobles;
});


/*
 * The big MateriaOrganica unit
 */
var MateriaOrganica = Unit.extend({
	init: function() {
		this._super(MateriaOrganica.speed, 125, MazeStrategy.euclidean, MateriaOrganica.hitpoints);
		this.createVisual(MateriaOrganica.sprite, [1, 1, 1, 1]);
	},
}, function(MateriaOrganica) {
	MateriaOrganica.speed = 2.5;
	MateriaOrganica.hitpoints = 600;
	MateriaOrganica.description = 'The unit is actually called MateriaOrganica and not Armor, however, Armor would have been a good name as well. You will need some fire power to bring him down.';
	MateriaOrganica.nickName = 'MateriaOrganica';
	MateriaOrganica.sprite = 'MateriaOrganica';
	MateriaOrganica.rating = MateriaOrganica.speed * MateriaOrganica.hitpoints;
	types.units['MateriaOrganica'] = MateriaOrganica;
});