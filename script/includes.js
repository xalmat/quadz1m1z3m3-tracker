function fix_region(str) {
	var replace = [
					"world",
					"east",
					"west",
					"death",
					"mountain",
					"palace",
					"tower",
					"castle",
					"escape",
					"mire",
					"of",
					"darkness",
					"woods",
					"town",
					"hera",
					"rock",
					"norfair",
					"ship",
					"portals",
	];
	for(var check in replace) {
		check = replace[check];
		str = str.replace(check,check.ucfirst());
	}
	if(str.toLowerCase().indexOf("crocomire") > -1) {
		str = str.replace("crocoMire","Crocomire");
	}
	if(str.toLowerCase().indexOf("overworld") > -1) {
		str = str.replace("overWorld","Overworld");
	}
	return str.ucfirst();
}

var scripts = [
	"script/items.js",
	"script/shared-access.js",
	"script/" + selectedGame + "/items.js",
];

var sheets = [
];

scripts.push("script/classes/Boss.js");

var bosses = {
	zelda3: [
		"ArmosKnights",
		"Lanmolas",
		"Moldorm",
		"Agahnim",
		"HelmasaurKing",
		"Arrghus",
		"Mothula",
		"Blind",
		"Kholdstare",
		"Vitreous",
		"Trinexx"
	],
};

for(var gameName in bosses) {
	list = bosses[gameName];
	for(var boss in list) {
		boss = list[boss];
		scripts.push("script/classes/Boss/Boss" + boss + ".js");
	}
}

scripts.push("script/classes/Location.js");
scripts.push("script/classes/LocationCollection.js");
scripts.push("script/classes/Region.js");

if(selectedGame == "metroid1" || selectedGame == "zelda1") {
	scripts.push("script/classes/Region/TLoZ.js");
	scripts.push("script/classes/Region/Metroid.js");
	scripts.push("script/zelda3/item-limits.js");
	scripts.push("script/zelda1/item-limits.js");
	scripts.push("script/metroid3/item-limits.js");
} else if(selectedGame == "metroid3" || selectedGame == "zelda3") {
	scripts.push("script/classes/Region/ALttP.js");
	scripts.push("script/classes/Region/SuperMetroid.js");
	scripts.push("script/zelda3/item-limits.js");
	scripts.push("script/metroid3/item-limits.js");
}

let universe = selectedGame.substr(0,selectedGame.length - 1);
sheets.push("css/" + universe + '/' + universe.substr(0,1) + selectedGame.substr(-1) + '/' + universe + selectedGame.substr(-1) + ".css");

if(selectedGame != "zelda3") {
	sheets.push("css/zelda/notzelda3.css");
}
if(selectedGame != "metroid3") {
	sheets.push("css/metroid/notmetroid3.css");
}
if(selectedGame != "metroid1") {
	sheets.push("css/metroid/notmetroid1.css");
}
if(universe == "metroid") {
	sheets.push("css/metroid/metroid.css");
} else {
	sheets.push("css/metroid/notmetroid.css");
}

scripts.push("script/classes/init.js");

var regionNames = {
	zelda1: {
		overworld:		["caves","items","shops"],
	},
	zelda3: {
		dungeons:		["main"],
		overworld:		["main"],
		zebes:			["z3-m3"],
	},
	metroid1: {
		brinstar:		["main"],
		kraid:			["main"],
		norfair:		["main"],
		ridley:			["main"],
		tourian:		["main"],
		hyruleportals:	["main"],
	},
	metroid3: {
		crateria:		["central","east","west"],
		brinstar:		["blue","green","pink","red","kraid"],
		norfair:		["crocomire","east","west"],
		wreckedship:	["main"],
		maridia:		["inner","outer"],
		lowernorfair:	["west","east"],
		tourian:		["main"],
		hyruleportals:	["main"],
	}
};

if(zeldaMode == "regions") {
	regionNames.zelda3 = {
		dungeons:		[
						 "easternpalace",
						 "desertpalace",
						 "towerofhera",
						 "palaceofdarkness",
						 "swamppalace",
						 "skullwoods",
						 "thievestown",
						 "icepalace",
						 "miserymire",
						 "turtlerock",
						 "ganonstower",
						 "hyrulecastleescape",
						 "hyrulecastletower",
		],
		darkworld:		["mire","northeast","northwest","south"],
		darkworlddeathmountain:	["east","west"],
		deathmountain:	["east","west"],
		lightworld:		["northeast","northwest","south"],
		zebesportals:	["main"],
	}
}

for(var gameName in regionNames) {
	if(gameName == selectedGame) {
		game = regionNames[gameName];
		for(var regionName in game) {
			region = game[regionName];
			for(var segment in region) {
				var segmentName = region[segment];
				var url = "";

				if(gameName == "metroid3" || (gameName == "zelda3" && zeldaMode == "regions") || gameName == "metroid1" || gameName == "zelda1") {
					url += "script/classes/Region/";

					let dirs = {
						zelda3:		"ALttP",
						metroid3:	"SuperMetroid",
						zelda1:		"TLoz",
						metroid1:	"Metroid",
					};

					url += dirs[selectedGame] + '/';

					url += fix_region(regionName) + '/' + fix_region(regionName) + fix_region(segmentName) + ".js";
				} else if(gameName == "zelda3" && zeldaMode == "oldstyle") {
					url += "script/zelda3/region/" + regionName + '/' + segmentName + ".js";
				}

				scripts.push(url);
			}
		}
    }
}

scripts.push("https://unpkg.com/vue/dist/vue.min.js");
scripts.push("script/main.js");

LazyLoad.css(sheets, function () {
});

LazyLoad.js(scripts, function () {
	init(initClasses,selectedGame);
	init(initTracker,selectedGame);
	if(selectedGame == "zelda3") {
		document.body.classList.add("zelda3-" + zeldaMode);
	} else if(selectedGame == "metroid3" && metroidMode != "") {
		document.body.classList.add("metroid3-" + metroidMode);
	}
});
