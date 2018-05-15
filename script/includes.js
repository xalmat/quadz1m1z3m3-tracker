include_js("script/shared-access.js");
include_js("script/" + selectedGame + "/items.js");

var regionNames = {
	zelda3: {
		dungeons:		["main"],
		overworld:		["main"],
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
				include_js(url);
			}
		}
    }
}
