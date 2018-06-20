class DungeonsEasternPalace extends Dungeons {
  constructor(name = "Dungeons", subname = "EasternPalace") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chest","Eastern Palace - Compass Chest","","",regionName),
		new Location("BigChest","Eastern Palace - Big Chest","","",regionName),
		new Location("Chest","Eastern Palace - Cannonball Chest","","",regionName),
		new Location("Chest","Eastern Palace - Big Key Chest","","",regionName),
		new Location("Chest","Eastern Palace - Map Chest","","",regionName),
		new Location("Boss","Eastern Palace - Armos Knights","","",regionName)
	],this);

	this.boss = new BossArmosKnights();
  }

  initNoMajorGlitches() {
	this.locations["Eastern Palace - Big Chest"].glitchless = function() {
		return has("bigkey");
	}
	this.locations["Eastern Palace - Big Key Chest"].glitchless = function() {
		return has("lantern");
	}
	this.locations["Eastern Palace - Armos Knights"].glitchless = function() {
		return canShootArrows()
			&& has("lantern") && has("bigkey")
			&& this.boss.canBeat();
	}

	this.canEnter.glitchless = function() {
		return true;
	}
	this.canComplete.glitchless = function() {
		return this.locations["Eastern Palace - Armos Knights"].glitchless();
	}
  }
}
