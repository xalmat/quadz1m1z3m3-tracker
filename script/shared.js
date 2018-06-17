String.prototype.ucfirst = function () {
	return this.substr(0,1).toUpperCase() + this.slice(1);
}

const blueCrystal = 0;
const redCrystal = 1;
const badPendant = 2;
const greenPendant = 3;

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
var chests = {zelda3:[],metroid3:[]};
var dungeons = {zelda3:[],metroid3:[]};
var regionNames = {};
chests[selectedGame] = [];
dungeons[selectedGame] = [];

var roomid = "smalttpr";
var authAttempted = false;

function destroyFirebase() {
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
	};
	if(names[ret]) {
		ret = names[ret];
	}

	if((ret.indexOf("boss") === 0) || (ret.indexOf("chest") === 0)) {
		var start = ret.indexOf("boss") === 0 ? 4 : 5;
		ret = dungeons[selectedGame][ret.slice(start)].titleStripped;
	}
	var beams = ["charge","ice","wave","plasma","grappling"];
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
	ret = ret.ucfirst();
	return ret;
}

function build_img_url(item) {
    var misc = ["blank","highlighted","poi"];
    var useGame = selectedGame;

    var zelda3items = gameItems.zelda3;
    var metroid3items = gameItems.metroid3;

    if((item.indexOf("boss") == -1) && (item.indexOf("chest") == -1)) {
        if(item == "bomb") {
            useGame = "zelda3";
        } else if(item == "bombs") {
            useGame = "metroid3";
        } else if(zelda3items.indexOf(item) > -1 || zelda3items.indexOf(item.substr(0,item.length-1)) > -1) {
            useGame = "zelda3";
        } else if(metroid3items.indexOf(item) > -1 || metroid3items.indexOf(item.substr(0,item.length-1)) > -1) {
            useGame = "metroid3";
        }
    }

    var globalReplaceItem = {
		bomb:		"bomb1",
		bomb0:		"bomb1",
		boomerang0:	"boomerang1",
		glove0:		"glove1",
		medallion1:	"bombos",
		medallion2:	"ether",
		medallion3:	"quake",
		pendant0:	"dungeon" + greenPendant,
		shield0:	"shield1",
		sword0:		"sword1",
	};
	globalReplaceItem["blueCrystal"] = "dungeon" + blueCrystal;
	globalReplaceItem["redCrystal"] = "dungeon" + redCrystal;

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
	globalReplaceTitle["dungeon" + greenPendant] = "Pendant of Courage";
	globalReplaceTitle["dungeon" + blueCrystal] = "Blue Crystal";
	globalReplaceTitle["dungeon" + redCrystal] = "Red Crystal";

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