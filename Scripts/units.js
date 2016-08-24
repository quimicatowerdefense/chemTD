"use strict";
/*
 * The SalSoluble unit
 */
var SalSoluble = Unit.extend({
	init: function() {
		this._super(SalSoluble.speed, 100, MazeStrategy.manhattan, SalSoluble.hitpoints, SalSoluble.waterhealth, SalSoluble.temphealth, SalSoluble.acidhealth, SalSoluble.basehealth, SalSoluble.oxidhealth);
		this.createVisual(SalSoluble.sprite, [1,1,1,1]);
	},
}, function(SalSoluble) {
	SalSoluble.speed = 3.0;
	SalSoluble.hitpoints = 1.5;
	SalSoluble.description = 'You have to be careful with that plumber.';
	SalSoluble.nickName = 'SalSoluble';
	SalSoluble.sprite = 'SalSoluble';
	SalSoluble.waterhealth = 32;
	SalSoluble.temphealth = 0;
	SalSoluble.basehealth = 0;
	SalSoluble.acidhealth = 0;
	SalSoluble.oxidhealth = 0;	
	SalSoluble.rating = SalSoluble.speed * SalSoluble.hitpoints;
	types.units['SalSoluble'] = SalSoluble;
});

/*
 * The SalInsoluble unit
 */
var SalInsoluble = Unit.extend({
	init: function() {
		this._super(SalInsoluble.speed, 80, MazeStrategy.euclideanNoSQR, SalInsoluble.hitpoints, SalInsoluble.waterhealth, SalInsoluble.temphealth, SalInsoluble.acidhealth, SalInsoluble.basehealth, SalInsoluble.oxidhealth);
		this.createVisual(SalInsoluble.sprite, [1, 1, 1, 1]);
	},
}, function(SalInsoluble) {
	SalInsoluble.speed = 2.0;
	SalInsoluble.hitpoints = 20;
	SalInsoluble.description = 'An ugly SalInsoluble that tries to conquer the zone. Watch out when they mass up!';
	SalInsoluble.nickName = 'SalInsoluble';
	SalInsoluble.sprite = 'SalInsoluble';
	SalInsoluble.waterhealth = 28;
	SalInsoluble.temphealth = 36;
	SalInsoluble.basehealth = 0;
	SalInsoluble.acidhealth = 0;
	SalInsoluble.oxidhealth = 0;
	SalInsoluble.rating = SalInsoluble.speed * SalInsoluble.hitpoints;
	types.units['SalInsoluble'] = SalInsoluble;
});

/*
 * A derived AcidInsoluble
 */
var AcidInsoluble = Unit.extend({
	init: function() {
		this._super(AcidInsoluble.speed, 25, MazeStrategy.diagonalShortCut, AcidInsoluble.hitpoints, AcidInsoluble.waterhealth, AcidInsoluble.temphealth, AcidInsoluble.acidhealth, AcidInsoluble.basehealth, AcidInsoluble.oxidhealth);
		this.createVisual(AcidInsoluble.sprite, [1, 1, 1, 1]);
	},
}, function(AcidInsoluble) {
	AcidInsoluble.speed = 4.5;
	AcidInsoluble.hitpoints = 200;
	AcidInsoluble.description = 'This AcidInsoluble is just a single blob. It is ultra fast and has quite some armor. It will give you some trouble.';
	AcidInsoluble.nickName = 'AcidInsoluble';
	AcidInsoluble.sprite = 'AcidInsoluble';
	AcidInsoluble.waterhealth = 20;
	AcidInsoluble.temphealth = 0;
	AcidInsoluble.basehealth = 42;
	AcidInsoluble.acidhealth = 0;
	AcidInsoluble.oxidhealth = 0;
	AcidInsoluble.rating = AcidInsoluble.speed * AcidInsoluble.hitpoints;
	types.units['AcidInsoluble'] = AcidInsoluble;
});


/*
 * The BaseInsoluble unit
 */
var BaseInsoluble = Unit.extend({
	init: function() {
		this._super(BaseInsoluble.speed, 80, MazeStrategy.euclideanNoSQR, BaseInsoluble.hitpoints, BaseInsoluble.waterhealth, BaseInsoluble.temphealth, BaseInsoluble.acidhealth, BaseInsoluble.basehealth, BaseInsoluble.oxidhealth);
		this.createVisual(BaseInsoluble.sprite, [1, 1, 1, 1]);
	},
}, function(BaseInsoluble) {
	BaseInsoluble.speed = 3.5;
	BaseInsoluble.hitpoints = 150;
	BaseInsoluble.description = 'The BaseInsoluble is an ancient warrier that takes quite some hits. His speed is superior to most other units.';
	BaseInsoluble.nickName = 'BaseInsoluble';
	BaseInsoluble.sprite = 'BaseInsoluble';
	BaseInsoluble.waterhealth = 24;
	BaseInsoluble.temphealth = 0;
	BaseInsoluble.basehealth = 0;
	BaseInsoluble.acidhealth = 48;
	BaseInsoluble.oxidhealth = 0;
	BaseInsoluble.rating = BaseInsoluble.speed * BaseInsoluble.hitpoints;
	types.units['BaseInsoluble'] = BaseInsoluble;
});

/*
 * The metalls unit
 */
var metalls = Unit.extend({
	init: function() {
		this._super(metalls.speed, 70, MazeStrategy.manhattan, metalls.hitpoints, metalls.waterhealth, metalls.temphealth, metalls.acidhealth, metalls.basehealth, metalls.oxidhealth);
		this.createVisual(metalls.sprite, [1,1, 1, 1] );
	},
}, function(metalls) {
	metalls.speed = 3.0;
	metalls.hitpoints = 30;
	metalls.description = 'The metalls with the fire robe is quite fast, but does not take very much.';
	metalls.nickName = 'metalls';
	metalls.sprite = 'metalls';
	metalls.waterhealth = 16;
	metalls.temphealth = 0;
	metalls.basehealth = 0;
	metalls.acidhealth = 72;
	metalls.oxidhealth = 0;
	metalls.rating = metalls.speed * metalls.hitpoints;
	types.units['metalls'] = metalls;
});

/*
 * The big metallsNobles unit
 */
var metallsNobles = Unit.extend({
	init: function() {
		this._super(metallsNobles.speed, 125, MazeStrategy.euclidean, metallsNobles.hitpoints, metallsNobles.waterhealth, metallsNobles.temphealth, metallsNobles.acidhealth, metallsNobles.basehealth, metallsNobles.oxidhealth);
		this.createVisual(metallsNobles.sprite, [1, 1, 1, 1]);
	},
}, function(metallsNobles) {
	metallsNobles.speed = 1.0;
	metallsNobles.hitpoints = 600;
	metallsNobles.description = 'The unit is actually called metallsNobles and not Armor, however, Armor would have been a good name as well. You will need some fire power to bring him down.';
	metallsNobles.nickName = 'metallsNobles';
	metallsNobles.sprite = 'metallsNobles';
	metallsNobles.waterhealth = 28
	metallsNobles.temphealth = 0;
	metallsNobles.basehealth = 0;
	metallsNobles.acidhealth = 64;
	metallsNobles.oxidhealth = 26;
	metallsNobles.rating = metallsNobles.speed * metallsNobles.hitpoints;
	types.units['metallsNobles'] = metallsNobles;
});


/*
 * The big MateriaOrganica unit
 */
var MateriaOrganica = Unit.extend({
	init: function() {
		this._super(MateriaOrganica.speed, 125, MazeStrategy.euclidean, MateriaOrganica.hitpoints, MateriaOrganica.waterhealth, MateriaOrganica.temphealth, MateriaOrganica.acidhealth, MateriaOrganica.basehealth, MateriaOrganica.oxidhealth);
		this.createVisual(MateriaOrganica.sprite, [1, 1, 1, 1]);
	},
}, function(MateriaOrganica) {
	MateriaOrganica.speed = 2.5;
	MateriaOrganica.hitpoints = 600;
	MateriaOrganica.description = 'The unit is actually called MateriaOrganica and not Armor, however, Armor would have been a good name as well. You will need some fire power to bring him down.';
	MateriaOrganica.nickName = 'MateriaOrganica';
	MateriaOrganica.sprite = 'MateriaOrganica';
	MateriaOrganica.waterhealth = 12;
	MateriaOrganica.temphealth = 0;
	MateriaOrganica.basehealth = 0;
	MateriaOrganica.acidhealth = 0;
	MateriaOrganica.oxidhealth = 30;
	MateriaOrganica.rating = MateriaOrganica.speed * MateriaOrganica.hitpoints;
	types.units['MateriaOrganica'] = MateriaOrganica;
});