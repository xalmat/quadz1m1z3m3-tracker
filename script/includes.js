function fix_region(str) {
	return str.ucfirst().replace("norfair","Norfair").replace("ship","Ship");
}

var scripts = [
	"script/items.js",
	"script/shared-access.js",
	"script/" + selectedGame + "/items.js",
	"script/zelda3/item-limits.js",
	"script/metroid3/item-limits.js"
];

if(selectedGame == "metroid3") {
	scripts.push("script/classes/Location.js");
	scripts.push("script/classes/LocationCollection.js");
	scripts.push("script/classes/Region.js");
	scripts.push("script/classes/Region/SuperMetroid.js");
	scripts.push("script/classes/init.js");
}

var regionNames = {
	zelda3: {
		overworld:		["main"],
		dungeons:		["main"],
		zebes:			["z3-m3"],
	},
	metroid3: {
		crateria:		["central","east","west"],
		brinstar:		["blue","green","pink","red","kraid"],
		norfair:		["crocomire","east","west"],
		wreckedship:	["main"],
		maridia:		["inner","outer"],
		lowernorfair:	["west","east"],
		tourian:		["main"],
		hyrule:			["main"],
	}
};

for(var gameName in regionNames) {
	if(gameName == selectedGame) {
		game = regionNames[gameName];
		for(var regionName in game) {
			region = game[regionName];
			for(var segment in region) {
				var segmentName = region[segment];
				var url = "";
				if(selectedGame == "metroid3") {
					url += "script/classes/Region/SuperMetroid/" + fix_region(regionName) + '/' + fix_region(regionName) + segmentName.ucfirst() + ".js";
				} else {
					url += "script/" + gameName + "/region/" + regionName + "/" + segmentName + ".js";
				}
				scripts.push(url);
			}
		}
    }
}

scripts.push("https://unpkg.com/vue/dist/vue.min.js");
scripts.push("script/main.js");

LazyLoad.js(scripts, function () {
	if(selectedGame == "metroid3") {
		init(initClasses);
	}
	init(initTracker);
});
