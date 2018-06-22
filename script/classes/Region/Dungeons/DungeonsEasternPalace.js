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

	if(this.buildLocations) {
		this.locations["Eastern Palace - Big Chest"].glitchless = function() {
			return has("bigkey");
		}
		this.locations["Eastern Palace - Big Key Chest"].glitchless = function() {
			return has("lantern");
		}
		this.locations["Eastern Palace - Armos Knights"].glitchless = function() {
			return canShootArrows()
				&& has("lantern") && has("bigkey")
				&& boss.canBeat();
		}
	}

	this.canEnter.glitchless = function() {
		return true;
	}
	this.canComplete.glitchless = function() {
		return this.locations["Eastern Palace - Armos Knights"].glitchless();
	}
  }
}
