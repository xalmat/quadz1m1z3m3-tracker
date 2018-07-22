String.prototype.ucfirst = function () {
	return this.substr(0,1).toUpperCase() + this.slice(1);
}

const CRYSTAL = 0;
const OJCRYSTAL = 1;
const OFFPENDANT = 2;
const GREENPENDANT = 3;
const Z1FACTOR = 4;

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}

var selectedGame = (getParameterByName("game",window.location) != null) ? getParameterByName("game",window.location) : "zelda3";
var gameNames = [];

if(selectedGame == "zelda3" || selectedGame == "metroid3") {
	gameNames = ["zelda3","metroid3"];
} else if(selectedGame == "zelda1" || selectedGame == "metroid1") {
	gameNames = ["zelda1","metroid1"];
}

var chests = {};
var dungeons = {};
var cookieDefault = {};
var regionObjects = {};
var regionNames = {};
var zeldaMode = (getParameterByName("zeldaMode",window.location) != null) ? getParameterByName("zeldaMode",window.location) : "oldstyle";
var metroidMode = (getParameterByName("metroidMode",window.location) != null) ? getParameterByName("metroidMode",window.location) : "";
for(var gameName in gameNames) {
	gameName = gameNames[gameName];
	chests[gameName] = [];
	dungeons[gameName] = [];
	cookieDefault[gameName] = {};
}

var roomid = getParameterByName("roomid",window.location);
if(roomid === null) {
	if(selectedGame == "zelda3" || selectedGame == "metroid3") {
		roomid = "smalttpr";
	} else if(["zelda1","metroid1"].indexOf(selectedGame) > -1) {
		roomid = "lozmx";
	}
}
var authAttempted = false;

function destroyFirebase() {
}

function tokenize(input) {
	let output = input;
	let replacements = {
		' ': '-',
		'"': '',
		"'": ''
	};
	for(let search in replacements) {
		let replace = replacements[search];
		output = output.replace(search,replace);
	}
	return output.toLowerCase();
}

function fix_itemlabel(item) {
	var ret = item;
	var names = {
		"firerod":		"Fire Rod",
		"icerod":		"Ice Rod",
		"moonpearl":	"Moon Pearl",
		"mpupgrade":	"Magic Upgrade",
		"etank":		"Energy Tank",
		"hijump":		"Hi-Jump Boots",
		"morph":		"Morph Ball",
		"powerbomb":	"Power Bomb",
		"rtank":		"Reserve Tank",
		"screw":		"Screw Attack",
		"space":		"Space Jump",
		"speed":		"Speed Booster",
		"springball":	"Spring Ball",
		"supermissile": "Super Missile",
		"xray":			"X-Ray Scope",
		"kraidtotem":	"Kraid Totem",
		"ridleytotem":	"Ridley Totem",
		"triforcepiece":"Triforce Piece",
	};
	if(names[ret]) {
		ret = names[ret];
	}

	if((ret.indexOf("boss") === 0) || (ret.indexOf("chest") === 0)) {
		var start = ret.indexOf("boss") === 0 ? 4 : 5;
		if(dungeons[selectedGame][ret.slice(start)]) {
			ret = dungeons[selectedGame][ret.slice(start)].titleStripped;
		}
	}
	var beams = ["charge","ice","wave","plasma","grappling","long"];
	if(beams.indexOf(ret) > -1) {
		ret += " Beam";
	}
	if(ret == "varia" || ret == "gravity") {
		ret += " Suit";
	}
	if(ret.indexOf("heart") === 0) {
		ret = ret.replace("heart","Heart ");
		ret = ret.split(" ");
		ret[1] = ret[1].ucfirst();
		ret = ret.join(" ");
	}
	if(ret.indexOf("triforcepiece") === 0) {
		ret = "Triforce Piece " + ret.substr(-1);
	}
	ret = ret.ucfirst();
	return ret;
}

function build_img_url(item) {
    var misc = ["blank","highlighted","poi"];
    var useGame = selectedGame;

    var zelda3items = gameItems.zelda3;
    var zelda1items = gameItems.zelda1;
    var metroid3items = gameItems.metroid3;
    var metroid1items = gameItems.metroid1;

    if((item.indexOf("boss") == -1) && (item.indexOf("chest") == -1)) {
        if(item == "bomb") {
            useGame = "zelda3";
        } else if(item == "bombs") {
            useGame = "metroid3";
        } else if(metroid3items.indexOf(item) > -1 || metroid3items.indexOf(item.substr(0,item.length-1)) > -1) {
            useGame = "metroid3";
        } else if(metroid1items.indexOf(item) > -1 || metroid1items.indexOf(item.substr(0,item.length-1)) > -1) {
            useGame = "metroid1";
        } else if(selectedGame == "zelda1") {
            useGame = "zelda1";
        } else if(zelda3items.indexOf(item) > -1 || zelda3items.indexOf(item.substr(0,item.length-1)) > -1) {
            useGame = "zelda3";
        }
    }

    var globalReplaceItem = {
		agahnim:	"agahnim1",
		bomb:		"bomb1",
		bomb0:		"bomb1",
		boomerang0:	"boomerang1",
		bottle:		"bottle0",
		candle0:	"candle1",
		crystal5:	"dungeon" + OJCRYSTAL,
		crystal6:	"dungeon" + OJCRYSTAL,
		glove0:		"glove1",
		lamp:		"lantern",
		medallion1:	"bombos",
		medallion2:	"ether",
		medallion3:	"quake",
		pendant0:	"dungeon" + GREENPENDANT,
		ring0:		"ring1",
		shield0:	"shield1",
		sword0:		"sword1",
	};
	globalReplaceItem["blueCrystal"] = "dungeon" + CRYSTAL;
	globalReplaceItem["redCrystal"] = "dungeon" + OJCRYSTAL;

	if(globalReplaceItem[item]) {
		item = globalReplaceItem[item];
	}

	var category = "inventory";
	if(item.indexOf("boss") === 0) {
		category = "bosses";
	} else if(item.indexOf("chest") === 0) {
		category = "chests";
	} else if(item.indexOf("medallion") === 0) {
		category = "medallions";
	} else if(item.indexOf("dungeon") === 0 || item.indexOf("pendant") === 0) {
		category = "prizes";
	} else if(misc.indexOf(item) > -1) {
		category = "misc";
	}

	var url = "images/";
	if(category != "misc") {
		url += useGame + '/';
	}
	url += category + '/' + item + ".png";
    return url;
}

function mini(item) {
	var title	= item.ucfirst();

	var globalReplaceTitle = {
		pendant1:	"Pendant of Power",
		pendant2:	"Pendant of Wisdom",
	};
	globalReplaceTitle["dungeon" + GREENPENDANT] = "Pendant of Courage";
	globalReplaceTitle["dungeon" + CRYSTAL] = "Blue Crystal";
	globalReplaceTitle["dungeon" + OJCRYSTAL] = "Red Crystal";

	if(globalReplaceTitle[item]) {
		title = globalReplaceTitle[item].ucfirst();
	}

	for(var i = 0; i < 10; i++) {
		title = title.replace(i,"");
	}
	return '<img src="' + build_img_url(item) + '" title="' + title + '" class="mini" />';
}

function init(callback,arguments) {
    callback(arguments);
}