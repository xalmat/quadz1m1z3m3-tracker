var scripts = [
	"script/items.js",
	"script/shared-access.js",
	"script/" + selectedGame + "/items.js",
	"script/zelda3/item-limits.js",
	"script/metroid3/item-limits.js"
];

var regionNames = {
	zelda3: {
		dungeons:		["main"],
		overworld:		["main"],
		zebes:			["z3-m3"],
	},
	metroid3: {
		dungeons:		["dungeons"],
		brinstar:		["blue","green","kraid","pink","red"],
		crateria:		["east","west"],
		lowernorfair:	["east","west"],
		maridia:		["inner","outer"],
		norfair:		["crocomire","east","west"],
//		tourian:		["main"],
		wreckedship:	["main"],
		hyrule:			["m3-z3"],
	}
};

for(var gameName in regionNames) {
	if(gameName == selectedGame) {
		game = regionNames[gameName];
		for(var regionName in game) {
			region = game[regionName];
			for(var segment in region) {
				var segmentName = region[segment];
				var url = "script/" + gameName + "/region/" + regionName + "/" + segmentName + ".js";
				scripts.push(url);
			}
		}
    }
}

scripts.push("https://unpkg.com/vue/dist/vue.min.js");
scripts.push("script/main.js");

LazyLoad.js(scripts, function () {
	init(initTracker);
});
