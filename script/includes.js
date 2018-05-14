include_js("script/shared-access.js");
include_js("script/" + selectedGame + "/items.js");

var regionNames = {
	zelda3: {
		dungeons:		["main"],
		overworld:		["main"],
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
