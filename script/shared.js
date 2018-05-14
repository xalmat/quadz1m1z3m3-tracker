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

var selectedGame = (getParameterByName("game",window.location) != null) ? getParameterByName("game",window.location) : "zelda3";
var chests = {};
var dungeons = {};

var roomid = "hyph";//location.pathname.replace(/\/$/, "").split("/").pop().toLowerCase();
var authAttempted = false;

function destroyFirebase() {
}

function build_img_url(item) {
    var misc = ["blank","highlighted","poi"];

    var globalReplaceItem = {
		bomb:		"bomb1",
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

	var url		= "images/" + category + '/' + item + ".png";
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

function init(callback) {
    callback();   
}