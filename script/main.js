var trackerOptions = {};
trackerOptions[selectedGame] = {
  showchests: true,
  showprizes: true,
  showmedals: true,
  showlabels: true,
  mapLogic: 'glitchless',
  openmode: false,
  editmode: false,
  selected: {}
};

var spicyChests = [56,57,58,60,61,65,55,62,50,91,51,89,92,86,87,88,94];

var chestsopenedInit = {};
chestsopenedInit[selectedGame] = [];
for(var i = 0; i < chests[selectedGame].length; i++) {
    chestsopenedInit[selectedGame].push(false);
    var d = document.createElement("div");
    d.innerHTML = chests[selectedGame][i].name;
    var title = d.textContent.trim() || d.innerText.trim() || d.innerHTML.trim();
    var remove = ['+','/'];
    for(var search in remove) {
      title = title.replace(remove[search],"");
	}
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
    dungeons[selectedGame][i].titleStripped = title.trim();
}

var trackerData = {};
trackerData[selectedGame] = {
  items: itemsInit[selectedGame],
  dungeonchests: dungeonchestsInit[selectedGame],
  dungeonbeaten: dungeonbeatenInit[selectedGame],
  prizes: prizesInit[selectedGame],
  medallions: medallionsInit[selectedGame],
  chestsopened: chestsopenedInit[selectedGame]
};

function setCookie(obj) {
    window.localStorage.setItem(roomid, JSON.stringify(obj));
}

function getCookie() {
    var str = window.localStorage.getItem(roomid);
    if(!str) return {};
    return JSON.parse(str);
}

var cookiekeys = ['ts', 'map', 'iZoom', 'mZoom', 'mOrien', 'mPos', 'mapLogic', 'openmode', 'chest', 'prize', 'medal', 'label', 'items'];
var cookieDefault = {
    ts:94,
    map:1,
    iZoom:100,
    mZoom:50,
    mOrien:0,
    mapLogic:'glitchless',
    openmode:0,
    mPos:0,
    chest:1,
    prize:1,
    medal:1,
    label:1
};
if(selectedGame == "zelda3") {
	cookieDefault.mOrien = 1;
	cookieDefault.mPos = 1;
	cookieDefault.mZoom = 80;
}
if(selectedGame == "metroid3") {
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
    document.getElementsByName('mapposition')[configobj.mPos].click();
//    var defaultLogic = (selectedGame == "metroid3") ? "casualLogic" : "glitchless";
//    document.querySelector('input[value="' + (configobj.mapLogic || defaultLogic) + '"]').click();

    document.getElementsByName('openmode')[0].checked = !!configobj.openmode;
    document.getElementsByName('openmode')[0].onchange();
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
    configobj.ts = (new Date()).getTime();

    configobj.map = document.getElementsByName('showmap')[0].checked ? 1 : 0;
    configobj.iZoom = document.getElementsByName('itemdivsize')[0].value;
    configobj.mZoom = document.getElementsByName('mapdivsize')[0].value;

    configobj.mOrien = document.getElementsByName('maporientation')[1].checked ? 1 : 0;
    configobj.mPos = document.getElementsByName('mapposition')[1].checked ? 1 : 0;
    configobj.mapLogic = document.querySelector('input[name="maplogic"]:checked').value;
    configobj.chestSkin = document.querySelector('input[name="chestskin"]:checked').value;

    configobj.openmode = document.getElementsByName('openmode')[0].checked ? 1 : 0;
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
    document.getElementById("caption").innerHTML = selectGame + ' | ' + chests[selectedGame][x].name + ' ]';
}

function unhighlight(x){
    document.getElementById(x).style.backgroundImage = "url(" + build_img_url("poi") + ")";
//    document.getElementById("caption").innerHTML = selectGame;
}

// Highlights a chest location and shows the name as caption (but for dungeons)
function highlightDungeon(x){
    document.getElementById("dungeon"+x).style.backgroundImage = "url(" + build_img_url("highlighted") + ")";
    document.getElementById("caption").innerHTML = selectGame + ' | ' + dungeons[selectedGame][x].name + ' ]';
}

function unhighlightDungeon(x){
    document.getElementById("dungeon"+x).style.backgroundImage = "url(" + build_img_url("poi") + ")";
//    document.getElementById("caption").innerHTML = selectGame;
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

function setOrder(H) {
    if (H) {
        document.getElementById('layoutdiv').classList.remove('flexcontainer');
    }
    else {
        document.getElementById('layoutdiv').classList.add('flexcontainer');
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

function setOpenMode(sender) {
	if(selectedGame != "zelda3") { return; }

    trackerOptions[selectedGame].openmode = sender.checked;
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

        sender.innerHTML = '🔧';
        saveCookie();
    } else {
        var x = document.getElementById("settings");
        if (!x.style.display || x.style.display === 'none') {
            x.style.display = 'initial';
            sender.innerHTML = 'X';
        } else {
            x.style.display = 'none';
            sender.innerHTML = '🔧';
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

function populateMapdiv() {
    var mapdiv = document.getElementById('mapdiv');

    // Initialize all chests on the map
    for(k=0; k<chests[selectedGame].length; k++){
        var s = document.createElement('span');
        s.style.backgroundImage = 'url(' + build_img_url("poi") + ')';
        s.style.color = 'black';
        s.id = k;
        var d = document.createElement('div');
        if(chests[selectedGame][k]) {
		  chests[selectedGame][k].isImportant = false;
		  s.title = chests[selectedGame][k].titleStripped;
          s.onclick = new Function('toggleChest('+k+')');
          s.onmouseover = new Function('highlight('+k+')');
          s.onmouseout = new Function('unhighlight('+k+')');
          s.style.left = chests[selectedGame][k].x;
          s.style.top = chests[selectedGame][k].y;
        } else {
          console.log("Can't find Chest #" + k);
        }
        if(trackerData[selectedGame].chestsopened[k])
            s.className = "mapspan chest opened";
        else
            s.className = "mapspan chest " + chests[selectedGame][k].isAvailable().getClassName();
        mapdiv.appendChild(s);
    }

    // Dungeon bosses & chests
    for(k=0; k<dungeons[selectedGame].length; k++){
        var s = document.createElement('span');
        s.style.backgroundImage = 'url(' + build_img_url("boss" + k + itemsMax["boss" + k]) + ')';
        s.id = 'bossMap' + k;
        s.title = dungeons[selectedGame][k].titleStripped;
        s.onmouseover = new Function('highlightDungeon('+k+')');
        s.onmouseout = new Function('unhighlightDungeon('+k+')');
        s.style.left = dungeons[selectedGame][k].x;
        s.style.top = dungeons[selectedGame][k].y;
        s.className = "mapspan boss " + dungeons[selectedGame][k].isBeatable().getClassName();
        mapdiv.appendChild(s);

        s = document.createElement('span');
        s.style.backgroundImage = 'url(' + build_img_url("poi") + ')';
        s.id = 'dungeon' + k;
        s.title = dungeons[selectedGame][k].titleStripped;
        s.onmouseover = new Function('highlightDungeon('+k+')');
        s.onmouseout = new Function('unhighlightDungeon('+k+')');
        s.style.left = dungeons[selectedGame][k].x;
        s.style.top = dungeons[selectedGame][k].y;
        s.className = "mapspan dungeon " + dungeons[selectedGame][k].canGetChest().getClassName();
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
        rowitem.style.backgroundSize = '100% 100%';
        rowitem.onclick = new Function('itemConfigClick(this)');
        if((typeof trackerData[selectedGame].items[key]) === "boolean"){
            rowitem.style.backgroundImage = "url(" + build_img_url(key) + ")";
        }
        else if(key.indexOf("heart") === 0){
            rowitem.style.backgroundImage = "url(" + build_img_url(key) + ")";
        }
		else {
            rowitem.style.backgroundImage = "url(" + build_img_url(key + itemsMax[key]) + ")";
        }
        if(key.indexOf("boss") === 0){
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
    //createItemTracker(document.getElementById('itemdiv'));
    document.body.classList.add(selectedGame);
    populateMapdiv();
    populateItemconfig();

    loadCookie();
    updateAll();

    var games = {
		zelda3:		"ALttP",
		metroid3:	"Super Metroid",
	};
    var game = games[selectedGame];
    document.title = game + " Item Tracker";
    document.getElementById("mapLogic").innerHTML = game + " Logic Options";
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
      return this.trackerData.items[itemName];
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
      if(this.bossNum && this.trackerOptions[selectedGame] && this.trackerOptions[selectedGame].showlabels) {
        return dungeons[selectedGame][this.bossNum].label;
      }
      return null;
    },
    itemLabel: function() {
		var ret = this.itemName;
		var names = {
			"moonpearl":	"Moon Pearl",

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
		var beams = ["charge","ice","wave","plasma","grappling"];
		if(names[ret]) {
			ret = names[ret];
		}
		if(beams.indexOf(ret) > -1) {
			ret += " Beam";
		}
		if(ret == "varia" || ret == "gravity") {
			ret += " Suit";
		}
		ret = ret.ucfirst();

		return ret;
	},
    textCounter: function() {
      var itemValue = this.trackerData[selectedGame].items[this.itemName];
      if(this.itemName.indexOf('heart') === 0 || this.itemName.indexOf('missile') > -1 || this.itemName.indexOf('powerbomb') === 0 || this.itemName.indexOf('tank') > -1) {
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
      if(this.bossNum && this.trackerOptions[selectedGame] && this.trackerOptions[selectedGame].showchests) {
        return "url(" + build_img_url("chest" + this.trackerData[selectedGame].dungeonchests[this.bossNum]) + ")";
      }
      return null;
    },
    prizeImage: function() {
      if(this.bossNum && this.bossNum !== "10" && this.trackerOptions[selectedGame] && this.trackerOptions[selectedGame].showprizes) {
        return "url(" + build_img_url("dungeon" + this.trackerData[selectedGame].prizes[this.bossNum]) + ")";
      }
      return null;
    },
    medallionImage: function() {
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
      updateAll();
      this.trackerData[selectedGame].prizes.splice(this.bossNum, 1, newPrize);
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
