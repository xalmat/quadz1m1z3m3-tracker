class DungeonsEasternPalace extends Dungeons {
  constructor(name = "Dungeons", subname = "EasternPalace", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("Chest","Eastern Palace - Compass Chest","","",regionName),
			new Location("BigChest","Eastern Palace - Big Chest","","",regionName),
			new Location("Chest","Eastern Palace - Cannonball Chest","","",regionName),
			new Location("Chest","Eastern Palace - Big Key Chest","","",regionName),
			new Location("Chest","Eastern Palace - Map Chest","","",regionName),
			new Location("Event","Eastern Palace - Armos Knights","46.8%","38.8%",regionName,{equipment:"%%lantern%%"})
		],this);
	}

	this.boss = new BossArmosKnights();
  }

  initNoMajorGlitches() {
	let boss = this.boss;
	let dungeon = this;

	if(this.buildLocations) {
		this.locations["Eastern Palace - Big Chest"].glitchless = function() {
			return has("bigkey");
		}
		this.locations["Eastern Palace - Big Key Chest"].glitchless = function() {
			return has("lantern");
		}
	}
	this.locations["Eastern Palace - Armos Knights"].glitchless = function() {
		return canShootArrows()
		&& has("lantern") && has("bigkey")
		&& boss.canBeat();
	}

	this.canEnter.glitchless = function() {
		if(has("state.inverted")) {
			let warps = new HyruleWarpsMain();
			warps.initNoMajorGlitches();

			let desert = warps.locations["Dark Desert Teleporter (Dark)"].glitchless();
			let south = warps.locations["South Hyrule Teleporter (Dark)"].glitchless();
			let east = warps.locations["East Hyrule Teleporter (Dark)"].glitchless();
			let west = warps.locations["Kakariko Teleporter (Dark)"].glitchless();

			if(
				desert ||
				south ||
				east ||
				west
			) {
				return (! isBunny(dungeon.subname));
			}
		} else {
			return true;
		}
	}
	this.canComplete.glitchless = function() {
		return dungeon.locations["Eastern Palace - Armos Knights"].glitchless();
	}
	this.canGetChest.glitchless = function() {
		let mychests = trackerData.zelda3.dungeonchests[0];
		if(has("lantern")) {
			if(canShootArrows()) {
				return true;
			} else if(mychests >= 2) {
				return true;
			} else {
				return "partial";
			}
		} else if(mychests === 3) {
			return true;
		} else {
			return "partial";
		}
	}
  }

  initMinorGlitches() {
	  this.initNoMajorGlitches();

	  let boss = this.boss;
	  let dungeon = this;

	  this.locations["Eastern Palace - Armos Knights"].minorGlitches = function() {
		  let ret = this.glitchless();

		  if(ret) {
			  return ret;
		  }
		  if(canShootArrows() && has("bigkey") && boss.canBeat()) {
			  return "glitchavailable";
		  }
	  }
	  this.canComplete.minorGlitches = function() {
		  return dungeon.locations["Eastern Palace - Armos Knights"].minorGlitches();
	  }
  }
}
