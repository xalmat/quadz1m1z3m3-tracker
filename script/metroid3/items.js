defaultItemGrid.metroid3 = [
	[
		"missile",
		"supermissile",
		"powerbomb",
		"grappling",
		"xray",
	],
	[
		"charge",
		"ice",
		"wave",
		"spazer",
		"plasma",
	],
	[
		"varia",
		"morph",
		"bombs",
		"space",
		"hijump",
	],
	[
		"gravity",
		"springball",
		"screw",
		"speed",
		"etank",
	],
	[
		"kraid",
		"phantoon",
		"draygon",
		"ridley",
		"rtank",
	],
];

itemsInit.metroid3 = {
	charge: false,
	ice: false,
	wave: false,
	spazer: false,
	plasma: false,
	varia: false,
	gravity: false,
	morph: false,
	bombs: false,
	springball: false,
	screw: false,
	hijump: false,
	space: false,
	speed: false,
	missile: 0,
	supermissile: 0,
	powerbomb: 0,
	grappling: false,
	xray: false,
	kraid: false,
	phantoon: false,
	draygon: false,
	ridley: false,
	etank:0,
	rtank:0,

	boss0: 2,
	boss1: 2,
	boss2: 2,
	boss3: 2,
	boss4: 2,
	boss5: 2,
	boss6: 2,
	boss7: 2,
	boss8: 2,
	boss9: 2,

	blank: false,
};

dungeonchestsInit.metroid3 = {};
dungeonbeatenInit.metroid3 = [false,false,false,false,false,false,false,false,false,false];
prizesInit.metroid3 = [];
medallionsInit.metroid3 = [];

var iMin = {
	boss0:2,
	boss1:2,
	boss2:2,
	boss3:2,
	boss4:2,
	boss5:2,
	boss6:2,
	boss7:2,
	boss8:2,
	boss9:2,
	missile:0,
	supermissile:0,
	powerbomb:0,
	etank:0,
	rtank:0
};
itemsMin = extend(itemsMin,iMin);

var iMax = {
	boss0:2,
	boss1:2,
	boss2:2,
	boss3:2,
	boss4:2,
	boss5:2,
	boss6:2,
	boss7:2,
	boss8:2,
	boss9:2,
	missile:230/5,
	supermissile:50/5,
	powerbomb:50/5,
	etank:14,
	rtank:4
};
itemsMax = extend(itemsMax,iMax);
