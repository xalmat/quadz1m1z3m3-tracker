class DungeonsTowerOfHera extends Dungeons {
  constructor(name = "Dungeons", subname = "TowerOfHera") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("SpawnableChest","Tower of Hera - Big Key Chest","","",regionName),
		new Location("Standing","Tower of Hera - Basement Cage","","",regionName),
		new Location("Chest","Tower of Hera - Map Chest","","",regionName),
		new Location("Chest","Tower of Hera - Compass Chest","","",regionName),
		new Location("BigChest","Tower of Hera - Big Chest","","",regionName),
		new Location("Boss","Tower of Hera - Moldorm","","",regionName)
	],this);

	this.boss = new BossMoldorm();
  }

  initNoMajorGlitches() {
	this.locations["Tower of Hera - Big Key Chest"].glitchless = function() {
		return canLightTorches() && has("key");
	}
	this.locations["Tower of Hera - Compass Chest"].glitchless =
	this.locations["Tower of Hera - Big Chest"].glitchless = function() {
		return has("bigkey");
	}
	this.locations["Tower of Hera - Moldorm"].glitchless = function() {
		return has("key") && has("bigkey")
			&& this.boss.canBeat();
	}

	this.canEnter.glitchless = function() {
		let wdm = new DeathMountainWest();
		wdm.initNoMajorGlitches();

		return (has("mirror") || (canGrapple() && has("hammer")))
			&& wdm.canEnter.glitchless();
	}
	this.canComplete.glitchless = function() {
		return this.locations["Tower of Hera - Moldorm"].glitchless();
	}
  }

  initOverworldGlitches() {
	  this.initNoMajorGlitches();

	  this.canEnter.owglitches = function() {
		  let wdm = new DeathMountainWest();
		  wdm.initOverworldGlitches();

		  return (canDash()
		  	|| ((has("mirror") || (canGrapple() && has("hammer")))
		  		&& wdm.canEnter.owglitches()));
	  }
  }

  initMajorGlitches() {
	  this.initOverworldGlitches();

	  let wdm = new DeathMountainWest();
	  wdm.initMajorGlitches();

	  let mm = new DungeonsMiseryMire();
	  mm.initMajorGlitches();

	  let main = function() {
		  return canDash()
	  	|| ((has("mirror") || (canGrapple() && has("hammer")))
	  		&& wdm.canEnter.majorglitches();
	  };

	  let mire = function() {
		  return ((has("key",2) || has("key",3))
	  	&& mm.canEnter.majorglitches();
	  };

	  this.locations["Tower of Hera - Big Key Chest"].majorglitches = function() {
		  return canLightTorches() && has("key");
	  }
	  this.locations["Tower of Hera - Compass Chest"].majorglitches = function() {
		  return (main() && has("bigkey"))
		  	|| mire();
	  }
	  this.locations["Tower of Hera - Big Chest"].majorglitches = function() {
		  return (main() && has("bigkey"))
		  	|| (mire() && (has("bigkey") || has("bigkey")));
	  }
	  this.locations["Tower of Hera - Moldorm"].majorglitches = function() {
		  return ((main() && has("bigkey"))
		  		|| mire())
		  	&& this.boss.canBeat();
	  }

	  this.canEnter.majorglitches = function() {
		  return (main()
		  	|| mire());
	  }
	  this.canComplete.majorglitches = function() {
		  let sp = new DungeonsSwampPalace();
		  sp.initMajorGlitches();

		  return (((main() && has("bigkey"))
		  		|| (mire() && (has("bigkey") || has("bigkey"))))
		  	&& (hasSword() || has("hammer")))
		  || (this.locations["Tower of Hera - Big Chest"].majorglitches()
		  	&& sp.locations["Swamp Palace - Arrghus"].majorglitches());
	  }
  }
}
