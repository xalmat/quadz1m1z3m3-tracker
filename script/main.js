var trackerOptions = {};
trackerOptions[selectedGame] = {
  showchests: true,
  showprizes: true,
  showmedals: true,
  showlabels: true,
  editmode: false,
  mapState: "open",
};
trackerOptions[selectedGame].mapLogic = (selectedGame == "metroid3") ? "casualLogic" : "glitchless";

var chestsopenedInit = {};
chestsopenedInit[selectedGame] = [];
for(var i = 0; i < chests[selectedGame].length; i++) {
    chestsopenedInit[selectedGame].push(false);
    var d = document.createElement("div");
    d.innerHTML = chests[selectedGame][i].name;
    var title = d.textContent.trim() || d.innerText.trim() || d.innerHTML.trim();
    if(title.indexOf('(') > -1) {
	    title = title.substr(0,title.indexOf('('));
	}
    var remove = ['+','/'];
    for(var search in remove) {
      title = title.replace(remove[search],"");
	}
	chests[selectedGame][i].titleEquipment = chests[selectedGame][i].name;
    chests[selectedGame][i].titleStripped = title.trim();
    chests[selectedGame][i].isSpicy = (selectedGame == "metroid3") && (spicyChests.indexOf(i) > -1);
}
for(var i = 0; i < dungeons[selectedGame].length; i++) {
	var d = document.createElement("div");
    d.innerHTML = dungeons[selectedGame][i].name;
    var title = d.textContent.trim() || d.innerText.trim() || d.innerHTML.trim();
    var remove = ['+','/'];
    for(var search in remove) {
      title = title.replace(remove[search],"");
	}
	dungeons[selectedGame][i].titleEquipment = dungeons[selectedGame][i].name;
    dungeons[selectedGame][i].titleStripped = title.trim();
}

var trackerData = {};
trackerData[selectedGame] = {
  items: itemsInit,
  dungeonchests: dungeonchestsInit[selectedGame],
  dungeonbeaten: dungeonbeatenInit[selectedGame],
  prizes: prizesInit[selectedGame],
  medallions: medallionsInit[selectedGame],
  chestsopened: chestsopenedInit[selectedGame]
};

var bosses = 0;
if(selectedGame == "zelda3") {
	bosses = 11;
} else if(selectedGame == "metroid3") {
	bosses = 10;
}
for(var i = 0; i < bosses; i++) {
	trackerData[selectedGame].items["boss" + i] = 1;
}

function setCookie(obj) {
    window.localStorage.setItem(roomid, JSON.stringify(obj));
}

function getCookie() {
    var str = window.localStorage.getItem(roomid);
    if(!str) return {};
    return JSON.parse(str);
}

var cookiekeys = ['gameName', 'ts', 'map', 'iZoom', 'mZoom', 'mOrien', 'mPos', 'mapLogic', 'mapState', 'chest', 'prize', 'medal', 'label', 'items'];
var cookieDefault = {
	gameName: selectedGame,
    ts:94,
    iZoom:100,
    map:1,
    mOrien:0,
    mPos:0
};
if(selectedGame == "zelda3") {
	cookieDefault.mapLogic = "glitchless";
    cookieDefault.mapState = "open";
	cookieDefault.mOrien = 1;
	cookieDefault.mPos = "Side";
	cookieDefault.mZoom = 80;
    cookieDefault.chest = true;
    cookieDefault.prize = true;
    cookieDefault.medal = true;
    cookieDefault.label = true;
}
if(selectedGame == "metroid3") {
	cookieDefault.mapLogic = "casualLogic";
	cookieDefault.mPos = "Above";
	cookieDefault.mZoom = 100;
}
cookieDefault.items = defaultItemGrid[selectedGame];

var cookielock = false;
function loadCookie() {
    if (cookielock)
        return;
    cookielock = true;
    cookieobj = getConfigObjectFromCookie();
    setConfigObject(cookieobj);
    cookielock = false;
}

function setConfigObject(configobj) {
    //initGridRow(JSON.parse(JSON.stringify(configobj.items)));
    //while(itemLayout.length > 0) {itemLayout.length.pop();}
    //itemLayout = configobj.items;
    //Array.prototype.push.apply(itemLayout, configobj.items);
    window.vm.itemRows = configobj.items;

    document.getElementsByName('showmap')[0].checked = !!configobj.map;
    document.getElementsByName('showmap')[0].onchange();
    document.getElementsByName('itemdivsize')[0].value = configobj.iZoom;
    document.getElementsByName('itemdivsize')[0].onchange();
    document.getElementsByName('mapdivsize')[0].value = configobj.mZoom;
    document.getElementsByName('mapdivsize')[0].onchange();

    document.getElementsByName('maporientation')[configobj.mOrien].click();

    var mappositions = ["Above","Below","Side"];
    document.getElementsByName('mapposition')[mappositions.indexOf(configobj.mPos)].click();

    document.getElementsByName('showchest')[0].checked = !!configobj.chest;
    document.getElementsByName('showchest')[0].onchange();
    document.getElementsByName('showcrystal')[0].checked = !!configobj.prize;
    document.getElementsByName('showcrystal')[0].onchange();
    document.getElementsByName('showmedallion')[0].checked = !!configobj.medal;
    document.getElementsByName('showmedallion')[0].onchange();
    document.getElementsByName('showlabel')[0].checked = !!configobj.label;
    document.getElementsByName('showlabel')[0].onchange();
}

function updateConfigFromFirebase(configobj) {
    var existingConfig = getConfigObjectFromCookie();
    if(!existingConfig || !existingConfig.ts || existingConfig.ts < configobj.ts) {
        console.log("Overwriting config with Firebase values");
        setConfigObject(configobj);
        saveCookie();
    }
    else {
        console.log("Ignoring Firebase config values due to older timestamp");
    }
}

function saveConfigToFirebase() {
}

function saveCookie() {
    if (cookielock)
        return;
    cookielock = true;

    cookieobj = getConfigObject();
    setCookie(cookieobj);

    cookielock = false;
}

function getConfigObjectFromCookie() {
    configobj = getCookie();

    cookiekeys.forEach(function (key) {
        if (configobj[key] === undefined) {
            configobj[key] = cookieDefault[key];
        }
    });
    return configobj;
}

function getConfigObject() {
    configobj = {};
    configobj.gameName = selectedGame;
    configobj.ts = (new Date()).getTime();

    configobj.map = document.getElementsByName('showmap')[0].checked ? 1 : 0;
    configobj.iZoom = document.getElementsByName('itemdivsize')[0].value;
    configobj.mZoom = document.getElementsByName('mapdivsize')[0].value;

    configobj.mOrien = document.getElementsByName('maporientation')[1].checked ? 1 : 0;
    configobj.mPos = document.querySelector('input[name="mapposition"]:checked').value;
    configobj.mapLogic = document.querySelector('input[name="maplogic"]:checked').value;
    configobj.chestSkin = document.querySelector('input[name="chestskin"]:checked').value;

    configobj.mapState = document.querySelector('input[name="mapstate"]:checked').value;
    configobj.chest = document.getElementsByName('showchest')[0].checked ? 1 : 0;
    configobj.prize = document.getElementsByName('showcrystal')[0].checked ? 1 : 0;
    configobj.medal = document.getElementsByName('showmedallion')[0].checked ? 1 : 0;
    configobj.label = document.getElementsByName('showlabel')[0].checked ? 1 : 0;

    configobj.items = window.vm.itemRows;

    return configobj;
}

// Event of clicking a chest on the map
function toggleChest(x){
    trackerData[selectedGame].chestsopened[x] = !trackerData[selectedGame].chestsopened[x];
    updateAll();
}

var selectGame = '<span id="selectGame">[ <a href="?game=zelda3">Hyrule</a> | <a href="?game=metroid3">Zebes</a> | <a href="http://github.com/miketrethewey/smalttpr-tracker/">GitHub</a></span>';

// Highlights a chest location and shows the name as caption
function highlight(x){
    document.getElementById(x).style.backgroundImage = "url(" + build_img_url("highlighted") + ")";
    document.getElementById("caption").innerHTML = selectGame + ' | ' + chests[selectedGame][x].titleEquipment + ' ]';
}

function unhighlight(x){
    document.getElementById(x).style.backgroundImage = "url(" + build_img_url("poi") + ")";
//    document.getElementById("caption").innerHTML = selectGame;
}

function toggleImportant(x) {
	var ele = document.getElementById(x);
	var chest = chests[selectedGame][x];
	if(chest.isImportant) {
		chest.isImportant = false;
		ele.classList.remove("important");
	} else {
		chest.isImportant = true;
		ele.classList.add("important");
	}
}

// Highlights a chest location and shows the name as caption (but for dungeons)
function highlightDungeon(x){
    document.getElementById("dungeon"+x).style.backgroundImage = "url(" + build_img_url("highlighted") + ")";
    document.getElementById("caption").innerHTML = selectGame + ' | ' + dungeons[selectedGame][x].titleEquipment + ' ]';
}

function unhighlightDungeon(x){
    document.getElementById("dungeon"+x).style.backgroundImage = "url(" + build_img_url("poi") + ")";
//    document.getElementById("caption").innerHTML = selectGame;
}

var wikiRoomNames = {
	 0: "Crateria Power Bomb Room",
	 1: "The Final Missile",
	 2: "Pit Room",
	 3: "Crateria Super Room",
	 4: "Bomb Torizo Room",
	 5: "West Ocean",
	 6: "West Ocean",
	 7: "West Ocean",
	 8: "The Moat",
	 9: "Terminator Room",
	10: "Gauntlet Energy Tank Room",
	11: "Green Pirates Shaft",
	12: "Green Pirates Shaft",
	13: "Morph Ball Room",
	14: "Morph Ball Room",
	15: "Blue Brinstar Energy Tank Room",
	16: "Blue Brinstar Energy Tank Room",
	17: "First Missile Room",
	18: "Billy Mays Room",
	19: "Billy Mays Room",
	20: "Green Brinstar Main Shaft",
	21: "Early Supers Room",
	22: "Early Supers Room",
	23: "Brinstar Reserve Tank Room",
	24: "Brinstar Reserve Tank Room",
	25: "Brinstar Reserve Tank Room",
	26: "Etecoon Energy Tank Room",
	27: "Etecoon Super Room",
	28: "Spore Spawn Super Room",
	29: "Big Pink",
	30: "Big Pink",
	31: "Big Pink",
	32: "Pink Brinstar Power Bomb Room",
	33: "Green Hill Zone",
	34: "Waterway Energy Tank Room",
	35: "Hopper Energy Tank Room",
	36: "X-Ray Scope Room",
	37: "Beta Power Bomb Room",
	38: "Alpha Power Bomb Room",
	39: "Alpha Power Bomb Room",
	40: "Spazer Room",
	41: "Warehouse Energy Tank Room",
	42: "Varia Suit Room",
	43: "Warehouse Keyhunter Room",
	44: "Crocomire's Room",
	45: "Crocomire Escape",
	46: "Post Crocomire Power Bomb Room",
	47: "Post Crocomire Missile Room",
	48: "Post Crocomire Jump Room",
	49: "Grapple Beam Room",
	50: "Cathedral",
	51: "Norfair Reserve Tank Room",
	52: "Norfair Reserve Tank Room",
	53: "Green Bubbles Missile Room",
	54: "Bubble Mountain",
	55: "Speed Booster Hall",
	56: "Speed Booster Room",
	57: "Double Chamber",
	58: "Wave Beam Room",
	59: "Ice Beam Room",
	60: "Crumble Shaft",
	61: "Hi Jump Boots Room",
	62: "Hi Jump Energy Tank Room",
	63: "Hi Jump Energy Tank Room",
	64: "Wrecked Ship Main Shaft",
	65: "Bowling Alley",
	66: "Bowling Alley",
	67: "Wrecked Ship East Missile Room",
	68: "Wrecked Ship Energy Tank Room",
	69: "Wrecked Ship West Super Room",
	70: "Wrecked Ship East Super Room",
	71: "Gravity Suit Room",
	72: "Watering Hole",
	73: "Watering Hole",
	74: "Pseudo Plasma Spark Room",
	75: "Plasma Room",
	76: "West Sand Hole",
	77: "West Sand Hole",
	78: "East Sand Hole",
	79: "East Sand Hole",
	80: "Aqueduct",
	81: "Aqueduct",
	82: "Spring Ball Room",
	83: "The Precious Room",
	84: "Botwoon Energy Tank Room",
	85: "Space Jump Room",
	86: "Main Street",
	87: "Main Street",
	88: "Mama Turtle Room",
	89: "Mama Turtle Room",
	90: "Golden Torizo's Room",
	91: "Golden Torizo's Room",
	92: "Screw Attack Room",
	93: "Mickey Mouse Room",
	94: "Lower Norfair Spring Ball Maze Room",
	95: "Lower Norfair Escape Power Bomb Room",
	96: "Wasteland",
	97: "Three Musketeers' Room",
	98: "Ridley Tank Room",
	99: "Lower Norfair Fireflea Room",
};

function clickChest(e) {
	var x = e.target.id;
	switch(e.which) {
		// LEFT
		case 1:
			if(e.ctrlKey) {
				toggleImportant(x);
			} else {
				toggleChest(x);
			}
			break;

		// MIDDLE
		case 2:
			e.preventDefault();
			if(selectedGame == "metroid3" && wikiRoomNames[x]) {
				window.open("http://wiki.supermetroid.run/" + wikiRoomNames[x]);
				break;
			} else {
				console.log(x);
				break;
			}

		// RIGHT
		case 3:
			// do nothing
			break;

		// DUNNO
		default:
			// do nothing
			break;
	}
}

function showChest(sender) {
	if(selectedGame != "zelda3") { return; }

    trackerOptions[selectedGame].showchests = sender.checked;
    refreshMap();
    saveCookie();
}

function showCrystal(sender) {
	if(selectedGame != "zelda3") { return; }

    trackerOptions[selectedGame].showprizes = sender.checked;
    refreshMap();
    saveCookie();
}

function showMedallion(sender) {
	if(selectedGame != "zelda3") { return; }

    trackerOptions[selectedGame].showmedals = sender.checked;
    refreshMap();
    saveCookie();
}

function showLabel(sender) {
	if(selectedGame != "zelda3") { return; }

    trackerOptions[selectedGame].showlabels = sender.checked;
    refreshMap();
    saveCookie();
}

function setOrder(mode) {
    if (mode == 1) { // Below
        document.getElementById('layoutdiv').classList.remove('flexcontainer');
        document.getElementById('layoutdiv').classList.remove('flexreverse');
    } else if (mode == 2) { // Side
        document.getElementById('layoutdiv').classList.add('flexcontainer');
        document.getElementById('layoutdiv').classList.remove('flexreverse');
    } else if (mode == 0) { // Above
        document.getElementById('layoutdiv').classList.add('flexcontainer');
        document.getElementById('layoutdiv').classList.add('flexreverse');
	}
    saveCookie();
}

function setZoom(target, sender) {
    document.getElementById(target).style.transform = "scale(" + sender.value / 100 + ")";

    document.getElementById(target + 'size').innerHTML = (sender.value) + '%';
    var offset = -442 * (100 - sender.value) / 100.0;
    if(selectedGame == "metroid3") {
		offset = 0;
	}
    document.getElementById("caption").style.top = offset;
    saveCookie();
}

var prevH = false;
function setMapOrientation(H) {
	if(selectedGame == "metroid3") { return; }

    if (H === prevH) {
        return;
    }
    prevH = H;


    var chest = document.getElementsByClassName("mapspan");
    var i;

    if (H) {
        document.getElementById("mapdiv").classList.remove('mapdiv');
        document.getElementById("mapdiv").classList.add('mapvdiv');
        for (i = 0; i < chest.length; i++) {
            var x = parseFloat(chest[i].style.left) / 100;
            var y = parseFloat(chest[i].style.top) / 100;

            if (x > 0.5) {
                chest[i].style.left = (((x - 0.5) * 2) * 100) + '%';
                chest[i].style.top = (((y / 2) + 0.5) * 100) + '%';
            }
            else {
                chest[i].style.left = ((x  * 2) * 100) + '%';
                chest[i].style.top = ((y / 2) * 100) + '%';
            }
        }
    }
    else {
        document.getElementById("mapdiv").classList.add('mapdiv');
        document.getElementById("mapdiv").classList.remove('mapvdiv');
        for (i = 0; i < chest.length; i++) {
            var x = parseFloat(chest[i].style.left) / 100;
            var y = parseFloat(chest[i].style.top) / 100;

            if (y > 0.5) {
                chest[i].style.left = (((x / 2) + 0.5) * 100) + '%';
                chest[i].style.top = (((y - 0.5) * 2) * 100) + '%';
            }
            else {
                chest[i].style.left = ((x / 2) * 100) + '%';
                chest[i].style.top = ((y * 2) * 100) + '%';
            }
        }
    }
    saveCookie();
}

function setState(state) {
	if(selectedGame != "zelda3") { return; }

    trackerOptions[selectedGame].mapState = state;
    refreshMap();
    saveCookie();
}

function setLogic(logic) {
    trackerOptions[selectedGame].mapLogic = logic;
    refreshMap();
    saveCookie();
}

function setSMChestSkin(skin) {
	document.getElementById("mapdiv").className = ("mapdiv " + skin);
}

function showSettings(sender) {
    if (trackerOptions[selectedGame].editmode) {
        trackerOptions[selectedGame].showchests = document.getElementsByName('showchest')[0].checked;
        trackerOptions[selectedGame].showprizes = document.getElementsByName('showcrystal')[0].checked;
        trackerOptions[selectedGame].showmedals = document.getElementsByName('showmedallion')[0].checked;
        trackerOptions[selectedGame].showlabels = document.getElementsByName('showlabel')[0].checked;
        trackerOptions[selectedGame].editmode = false;
        showTracker('mapdiv', document.getElementsByName('showmap')[0]);
        document.getElementById('itemconfig').style.display = 'none';

        sender.innerHTML = '&#128295;';
        saveCookie();
    } else {
        var x = document.getElementById("settings");
        if (!x.style.display || x.style.display === 'none') {
            x.style.display = 'initial';
            sender.innerHTML = 'X';
        } else {
            x.style.display = 'none';
            sender.innerHTML = '&#128295;';
        }
    }
}

function showTracker(target, sender) {
    if (sender.checked) {
        document.getElementById(target).style.display = '';
    }
    else {
        document.getElementById(target).style.display = 'none';
    }
}

function EditMode() {
    trackerOptions[selectedGame].showchests = false;
    trackerOptions[selectedGame].showprizes = false;
    trackerOptions[selectedGame].showmedals = false;
    trackerOptions[selectedGame].showlabels = false;
    trackerOptions[selectedGame].editmode = true;
    showTracker('mapdiv', {checked:false});
    document.getElementById('settings').style.display = 'none';
    document.getElementById('itemconfig').style.display = '';

    document.getElementById('settingsbutton').innerHTML = 'Exit Edit Mode';
}

function refreshMapMedallions() {
  if(selectedGame != "zelda3") { return; }

  refreshMapMedallion(8);
  refreshMapMedallion(9);
}

function refreshMapMedallion(d) {
	if(selectedGame != "zelda3") { return; }

    // Update availability of dungeon boss AND chests
    if(dungeons[selectedGame][d]) {
	    if(trackerData[selectedGame].dungeonbeaten[d])
	        document.getElementById("bossMap"+d).className = "mapspan boss opened";
	    else
	        document.getElementById("bossMap"+d).className = "mapspan boss " + dungeons[selectedGame][d].isBeatable().getClassName();

	    if(trackerData[selectedGame].dungeonchests[d] > 0)
	        document.getElementById("dungeon"+d).className = "mapspan 1dungeon " + dungeons[selectedGame][d].canGetChest().getClassName();
	    // TRock medallion affects Mimic Cave
	    if(d === 9){
	        refreshChests();
	    }
	    // Change the mouseover text on the map
		    var dungeonName;
	    if(d === 8)
	        dungeonName = "Misery Mire";
	    else
	        dungeonName = "Turtle Rock";
	    dungeons[selectedGame][d].name = dungeonName + " " + mini("medallion" + trackerData[selectedGame].medallions[d]) + mini("lantern");
	}
}

function refreshChests() {
    for(k=0; k<chests[selectedGame].length; k++){
		document.getElementById(k).className = "mapspan chest";
        if(trackerData[selectedGame].chestsopened[k]){
			document.getElementById(k).classList.add("opened");
        } else {
			document.getElementById(k).className += " " + chests[selectedGame][k].isAvailable().getClassName();
		}
		if(chests[selectedGame][k].isSpicy) {
			document.getElementById(k).classList.add("spicy");
		}
    }
}

function refreshMap() {
  refreshMapMedallions();
  refreshChests();

  for(k=0; k<dungeons[selectedGame].length; k++){
      if(trackerData[selectedGame].dungeonbeaten[k])
          document.getElementById("bossMap"+k).className = "mapspan boss opened";
      else
          document.getElementById("bossMap"+k).className = "mapspan boss " + dungeons[selectedGame][k].isBeatable().getClassName();
      if(trackerData[selectedGame].dungeonchests[k])
          document.getElementById("dungeon"+k).className = "mapspan dungeon " + dungeons[selectedGame][k].canGetChest().getClassName();
      else
          document.getElementById("dungeon"+k).className = "mapspan dungeon opened";
  }
}

function itemConfigClick (sender) {
    var item = sender.id;

    if (trackerOptions[selectedGame].selected.item) {
        document.getElementById(trackerOptions[selectedGame].selected.item).style.border = '0px';
        sender.style.border = '3px solid yellow';
        trackerOptions[selectedGame].selected = {item:item};
    } else if (trackerOptions[selectedGame].selected.row !== undefined) {
        itemGrid[selected.row][selected.col]['item'].style.border = '1px solid white';
        var old = itemLayout[selected.row][selected.col];

        if (old === item) {
            selected = {};
            return;
        }

        if (item !== 'blank') {
            sender.style.opacity = 0.25;

            var r,c;
            var found = false;
            for (r = 0; r < 8; r++) {
                for (c = 0; c < 7; c++) {
                    if (itemLayout[r][c] === item) {
                        itemLayout[r][c] = 'blank';
                        updateGridItem(r, c);
                        found = true;
                        break;
                    }
                }

                if (found)
                    break;
            }
        }

        itemLayout[selected.row][selected.col] = item;
        updateGridItem(selected.row, selected.col);

        document.getElementById(old).style.opacity = 1;

        trackerOptions[selectedGame].selected = {};
    } else {
        sender.style.border = '3px solid yellow';
        trackerOptions[selectedGame].selected = {item:item}
    }
}

function populateMapdiv(useGame = "zelda3") {
    var mapdiv = document.getElementById('mapdiv');

    // Initialize all chests on the map
    for(k=0; k<chests[useGame].length; k++){
        var s = document.createElement('span');
        s.style.backgroundImage = 'url(' + build_img_url("poi") + ')';
        s.style.color = 'black';
        s.id = k;
        var d = document.createElement('div');
        if(chests[useGame][k]) {
		  s.title = chests[useGame][k].titleStripped + ((useGame == "metroid3" && (typeof wikiRoomNames[k] != "undefined")) ? "\n" + '"' + wikiRoomNames[k] + '"' : "");
          s.onmousedown = function(e) { clickChest(e); };
          s.onmouseover = new Function('highlight('+k+')');
          s.onmouseout = new Function('unhighlight('+k+')');
          s.style.left = chests[useGame][k].x;
          s.style.top = chests[useGame][k].y;
        } else {
          console.log("Can't find Chest #" + k);
        }
        if(trackerData[useGame] && trackerData[useGame].chestsopened[k])
            s.className = "mapspan chest opened";
        else
            s.className = "mapspan chest " + chests[useGame][k].isAvailable().getClassName();
        mapdiv.appendChild(s);
    }

    // Dungeon bosses & chests
    for(k=0; k<dungeons[useGame].length; k++){
        var s = document.createElement('span');
        s.style.backgroundImage = 'url(' + build_img_url("boss" + k + itemsMax["boss" + k]) + ')';
        s.id = 'bossMap' + k;
        s.title = dungeons[useGame][k].titleStripped;
        s.onmouseover = new Function('highlightDungeon('+k+')');
        s.onmouseout = new Function('unhighlightDungeon('+k+')');
        s.style.left = dungeons[useGame][k].x;
        s.style.top = dungeons[useGame][k].y;
        s.className = "mapspan boss " + dungeons[useGame][k].isBeatable().getClassName();
        mapdiv.appendChild(s);

        s = document.createElement('span');
        s.style.backgroundImage = 'url(' + build_img_url("poi") + ')';
        s.id = 'dungeon' + k;
        s.title = dungeons[useGame][k].titleStripped;
        s.onmouseover = new Function('highlightDungeon('+k+')');
        s.onmouseout = new Function('unhighlightDungeon('+k+')');
        s.style.left = dungeons[useGame][k].x;
        s.style.top = dungeons[useGame][k].y;
        s.className = "mapspan dungeon " + dungeons[useGame][k].canGetChest().getClassName();
        mapdiv.appendChild(s);
    }
}

function populateItemconfig() {
    var grid = document.getElementById('itemconfig');

    var i = 0;

    var row;

    for (var key in trackerData[selectedGame].items) {
        if (i % 10 === 0){
            row = document.createElement('tr');
            grid.appendChild(row);
        }
        i++;

        var rowitem = document.createElement('td');
        rowitem.className = 'corner editcell';
        rowitem.id = key;
        rowitem.title = fix_itemlabel(key);
        rowitem.style.backgroundSize = '100% 100%';
        rowitem.onclick = new Function('itemConfigClick(this)');
        if((typeof trackerData[selectedGame].items[key]) === "boolean"){
            rowitem.style.backgroundImage = "url(" + build_img_url(key) + ")";
        }
        else if(key.indexOf('heart') === 0 || key.indexOf('missile') > -1 || key.indexOf('powerbomb') === 0 || key.indexOf('tank') > -1){
            rowitem.style.backgroundImage = "url(" + build_img_url(key) + ")";
        }
		else {
            rowitem.style.backgroundImage = "url(" + build_img_url(key + itemsMax[key]) + ")";
        }
        if(key.indexOf("boss") === 0 && dungeons[selectedGame][key.substring(4)]){
            rowitem.style.backgroundImage = "url(" + build_img_url(key + itemsMax[key]) + ")";
            rowitem.innerText = dungeons[selectedGame][key.substring(4)].label;
        }
        row.appendChild(rowitem);
    }
}

function enterPasscode() {

}

function createRoom() {
    var editors = {};
    var passcode = document.getElementById('passcodeInput').value;
}

function resetFirebase() {
    trackerData[selectedGame].items = itemsInit[selectedGame];
    trackerData[selectedGame].dungeonchests = dungeonchestsInit[selectedGame];
    trackerData[selectedGame].dungeonbeaten = dungeonbeatenInit[selectedGame];
    trackerData[selectedGame].prizes = prizesInit[selectedGame];
    trackerData[selectedGame].medallions = medallionsInit[selectedGame];
    trackerData[selectedGame].chestsopened = chestsopenedInit[selectedGame];
    updateAll();
}

function useTourneyConfig() {

}


function initTracker() {
	var useGame = arguments[0];
    document.body.classList.add(selectedGame);
    populateMapdiv(useGame);
    populateItemconfig();

    if(! document.querySelector('input[name="maplogic"]:checked')) {
		var defaultLogic = selectedGame == "metroid3" ? "casualLogic" : "glitchless";
		var radios = document.querySelectorAll('input[name="maplogic"]');
		for(var radio in radios) {
			radio = radios[radio];
			if(radio.value == defaultLogic) {
				radio.checked = "checked";
			}
		}
	}

    loadCookie();
    updateAll();

    var games = {
		zelda3:		"ALttP",
		metroid3:	"Super Metroid",
	};
    var game = games[selectedGame];
    document.title = game + " Item Tracker";
    document.getElementById("caption").innerHTML = selectGame + ' ]';
}

function updateAll() {
    if(trackerData[selectedGame].items && trackerData[selectedGame].dungeonchests && trackerData[selectedGame].dungeonbeaten && trackerData[selectedGame].prizes && trackerData[selectedGame].medallions && trackerData[selectedGame].chestsopened) {
      vm.displayVueMap = true;
      refreshMap();
    }
}

function confirmSaveConfigToFirebase() {
    var confirm = window.confirm("Do you want to push your configuration to all other users of your tracker? This will overwrite their settings. (Use this to get a remote browser to match how this browser appears.)");
    if(confirm) {
        saveConfigToFirebase();
    }
}

Vue.component('tracker-table', {
  template: '#tracker-table',
  props: [
    'itemRows',
    'trackerData',
    'trackerOptions'
  ],
  computed: {
    maxRowLength: function() {
      return !this.itemRows.reduce ? 0 : this.itemRows.map(function(i) {return i.length}).reduce(function(a,b) {
          return Math.max(a, b);
      });
    }
  },
  methods: {
    itemFor: function(itemName) {
      if(!this.trackerData || !this.trackerData.items) return null;
      return this.trackerData[selectedGame].items[itemName];
    },
    addRow: function(e) {
      vm.itemRows.push(['blank']);
    },
    addItem: function(rowIndex) {
      vm.itemRows[rowIndex].push('blank');
    },
    removeItem: function(rowIndex) {
      vm.itemRows[rowIndex].pop();
      if(vm.itemRows[rowIndex].length === 0) {
        vm.itemRows.splice(rowIndex,1);
      }
    }
  }
});

Vue.component('tracker-cell', {
  template: '#tracker-cell',
  props: [
    'itemValue',
    'itemName',
    'columnIndex',
    'rowIndex',
    'trackerData',
    'trackerOptions'
  ],
  computed: {
    bossNum: function() {
      if(this.itemName.indexOf("boss") === -1) { return null; }
      return this.itemName.substring(4);
    },
    dungeonLabel: function() {
      if(this.bossNum && this.trackerOptions[selectedGame] && this.trackerOptions[selectedGame].showlabels && dungeons[selectedGame][this.bossNum]) {
        return dungeons[selectedGame][this.bossNum].label;
      }
      return null;
    },
    itemLabel: function() {
		return fix_itemlabel(this.itemName);
	},
    textCounter: function() {
      var itemValue = this.trackerData[selectedGame].items[this.itemName];
      if(this.itemName.indexOf('heart') === 0 || this.itemName.indexOf('missile') > -1 || this.itemName.indexOf('powerbomb') === 0 || this.itemName.indexOf('tank') > -1) {
		if(this.itemName.indexOf('missile') > -1 || this.itemName.indexOf('powerbomb') > -1) {
			itemValue *= 5;
		}
        return itemValue;
      }
      return null;
    },
    backgroundImage: function() {
      var itemValue = this.trackerData[selectedGame].items[this.itemName];
      if(this.itemName === 'blank') {
        return this.trackerOptions[selectedGame].editmode ? 'url(' + build_img_url("blank") + ')' : 'none';
      }
      else if((typeof itemValue) === "boolean") {
        return 'url(' + build_img_url(this.itemName) + ')';
      }
      else if(this.textCounter !== null) {
        return 'url(' + build_img_url(this.itemName) + ')';
      }
      return 'url(' + build_img_url(this.itemName + (this.trackerOptions[selectedGame].editmode ? itemsMax[this.itemName] : (itemValue || '0'))) + ')';
    },
    isActive: function() {
      var itemValue = this.trackerData[selectedGame].items[this.itemName];
      return this.trackerOptions[selectedGame].editmode || itemValue;
    },
    chestImage: function() {
	  if(selectedGame != "zelda3") { return null; }
      if(this.bossNum && this.trackerOptions[selectedGame] && this.trackerOptions[selectedGame].showchests) {
        return "url(" + build_img_url("chest" + this.trackerData[selectedGame].dungeonchests[this.bossNum]) + ")";
      }
      return null;
    },
    prizeImage: function() {
	  if(selectedGame != "zelda3") { return null; }
      if(this.bossNum && this.bossNum !== "10" && this.trackerOptions[selectedGame] && this.trackerOptions[selectedGame].showprizes) {
        return "url(" + build_img_url("dungeon" + this.trackerData[selectedGame].prizes[this.bossNum]) + ")";
      }
      return null;
    },
    medallionImage: function() {
	  if(selectedGame != "zelda3") { return null; }
      if((this.bossNum === "8" || this.bossNum === "9") && this.trackerOptions[selectedGame] && this.trackerOptions[selectedGame].showmedals) {
        return "url(" + build_img_url("medallion" + this.trackerData[selectedGame].medallions[this.bossNum]) + ")";
      }
      return null;
    }
  },
  methods: {
    clickCell: function(amt) {
	  var itemValue = this.trackerData[selectedGame].items[this.itemName];
      if(this.trackerOptions[selectedGame].editmode) {
          Vue.set(vm.itemRows[this.rowIndex], this.columnIndex, this.trackerOptions[selectedGame].selected.item || 'blank');
        return;
      }
      // Non-edit mode clicks
      if(this.bossNum) {
        // Do both this and the below for bosses
        this.trackerData[selectedGame].dungeonbeaten[this.bossNum] = !this.trackerData[selectedGame].dungeonbeaten[this.bossNum];
        updateAll();
      }
      if((typeof itemValue) === "boolean"){
        this.trackerData[selectedGame].items[this.itemName] = !itemValue;
        updateAll();
      }
      else{
        var newVal = (itemValue || 0) + amt;
        if(newVal > itemsMax[this.itemName]){
          newVal = itemsMin[this.itemName];
        }
        if(newVal < itemsMin[this.itemName]){
          newVal = itemsMax[this.itemName];
        }
        this.trackerData[selectedGame].items[this.itemName] = newVal;
        updateAll();
      }
    },
    clickCellForward: function(e) {
      this.clickCell(1);
    },
    clickCellBack: function(e) {
      this.clickCell(-1);
    },
    clickMedallion: function(amt) {
      var newMedallion = (this.trackerData[selectedGame].medallions[this.bossNum] + amt + 4) % 4;
      // need to use splice here instead of just setting it the normal way or vue won't pick up the change
      this.trackerData[selectedGame].medallions.splice(this.bossNum, 1, newMedallion);
      updateAll();
    },
    clickMedallionForward: function(e) {
      this.clickMedallion(1);
    },
    clickMedallionBack: function(e) {
      this.clickMedallion(-1);
    },
    clickChest: function(amt) {
      var chestitem = 'chest' + this.bossNum;
      var modamt = itemsMax[chestitem] + 1;
      var newVal = (this.trackerData[selectedGame].dungeonchests[this.bossNum] + amt + modamt) % modamt;
      this.trackerData[selectedGame].dungeonchests[this.bossNum] = newVal;
      updateAll();
    },
    clickChestForward: function(e) {
      this.clickChest(1);
    },
    clickChestBack: function(e) {
      this.clickChest(-1);
    },
    clickPrize: function(amt) {
      var newPrize = (this.trackerData[selectedGame].prizes[this.bossNum] + amt + 4) % 4;
      // need to use splice here instead of just setting it the normal way or vue won't pick up the change
      this.trackerData[selectedGame].prizes.splice(this.bossNum, 1, newPrize);
      updateAll();
    },
    clickPrizeForward: function(e) {
        this.clickPrize(1);
    },
    clickPrizeBack: function(e) {
        this.clickPrize(-1);
    },
  }
});

var vm = new Vue({
  data:{
      itemRows: [],
      trackerData: window.trackerData,
      trackerOptions: window.trackerOptions,
      displayVueMap: false
  },
  el: '#layoutdiv'
});
