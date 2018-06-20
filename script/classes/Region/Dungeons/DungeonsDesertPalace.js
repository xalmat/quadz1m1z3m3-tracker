class DungeonsDesertPalace extends Dungeons {
  constructor(name = "Dungeons", subname = "DesertPalace") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("BigChest","Desert Palace - Big Chest","","",regionName),
		new Location("Chest","Desert Palace - Map Chest","","",regionName),
		new Location("Dash","Desert Palace - Torch","","",regionName),
		new Location("Chest","Desert Palace - Big Key Chest","","",regionName),
		new Location("Chest","Desert Palace - Compass Chest","","",regionName),
		new Location("Boss","Desert Palace - Lanmolas","","",regionName)
	],this);

	this.boss = new BossLanmolas();
  }

  initNoMajorGlitches() {
	this.locations["Desert Palace - Big Chest"].glitchless = function() {
		return has("bigkey");
	}
	this.locations["Desert Palace - Big Key Chest"].glitchless =
	this.locations["Desert Palace - Compass Chest"].glitchless = function() {
		return has("key");
	}
	this.locations["Desert Palace - Torch"].glitchless = function() {
		return canDash();
	}
	this.locations["Desert Palace - Lanmolas"].glitchless = function() {
		return canLiftRocks() && canLightTorches()
			&& has("bigkey") && has("key")
			&& this.boss.canBeat();
	}

	this.canEnter.glitchless = function() {
		return (canRead()
			|| (has("mirror") && canLiftDarkRocks() && canFly())
			|| (canAccessMiseryMirePortal() && has("mirror"))
		);
	}
	this.canComplete.glitchless = function() {
		return this.locations["Desert Palace - Lanmolas"].glitchless();
	}
  }

  initOverworldGlitches() {
	this.initNoMajorGlitches();

	this.locations["Desert Palace - Lanmolas"].owglitches = function() {
		let dwm = new DarkWorldMire();
		dwm.initOverworldGlitches();

		return canLightTorches()
			&& has("bigkey") && has("key")
			&& this.boss.canBeat()
			&& ((canRead() && canLiftRocks())
				|| canDash()
				|| (has("mirror") && dwm.canEnter.owglitches()));
	}

	this.canEnter.owglitches = function() {
		let dwm = new DarkWorldMire();
		dwm.initOverworldGlitches();

		return (canRead()
			|| canDash()
			|| (has("mirror") && dwm.canEnter.owglitches()));
	}
  }
}
