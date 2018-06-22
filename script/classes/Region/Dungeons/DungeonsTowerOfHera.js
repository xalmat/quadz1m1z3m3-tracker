class DungeonsTowerOfHera extends Dungeons {
  constructor(name = "Dungeons", subname = "TowerOfHera", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("SpawnableChest","Tower of Hera - Big Key Chest","","",regionName),
			new Location("Standing","Tower of Hera - Basement Cage","","",regionName),
			new Location("Chest","Tower of Hera - Map Chest","","",regionName),
			new Location("Chest","Tower of Hera - Compass Chest","","",regionName),
			new Location("BigChest","Tower of Hera - Big Chest","","",regionName),
			new Location("Event","Tower of Hera - Moldorm","31.0%","5.5%",regionName)
		],this);
	}

	this.boss = new BossMoldorm();
  }

  initNoMajorGlitches() {
	let boss = this.boss;

	if(this.buildLocations) {
		this.locations["Tower of Hera - Big Key Chest"].glitchless = function() {
			return canLightTorches() && has("key");
		}
		this.locations["Tower of Hera - Compass Chest"].glitchless =
		this.locations["Tower of Hera - Big Chest"].glitchless = function() {
			return has("bigkey");
		}
		this.locations["Tower of Hera - Moldorm"].glitchless = function() {
			return has("key") && has("bigkey")
				&& boss.canBeat();
		}
	}

	this.canEnter.glitchless = function() {
		let wdm = new DeathMountainWest("","",false);
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
		  let wdm = new DeathMountainWest("","",false);
		  wdm.initOverworldGlitches();

		  return (canDash()
		  	|| ((has("mirror") || (canGrapple() && has("hammer")))
		  		&& wdm.canEnter.owglitches()));
	  }
  }

  initMajorGlitches() {
	  let boss = this.boss;

	  this.initOverworldGlitches();

	  let wdm = new DeathMountainWest("","",false);
	  wdm.initMajorGlitches();

	  let mm = new DungeonsMiseryMire("","",false);
	  mm.initMajorGlitches();

	  let main = function() {
		  return canDash()
	  	|| ((has("mirror") || (canGrapple() && has("hammer")))
	  		&& wdm.canEnter.majorglitches());
	  };

	  let mire = function() {
		  return ((has("key",2) || has("key",3))
	  	&& mm.canEnter.majorglitches());
	  };

	  if(this.buildLocations) {
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
			  	&& boss.canBeat();
		  }
	  }

	  this.canEnter.majorglitches = function() {
		  return (main()
		  	|| mire());
	  }
	  this.canComplete.majorglitches = function() {
		  let sp = new DungeonsSwampPalace("","",false);
		  sp.initMajorGlitches();

		  return (((main() && has("bigkey"))
		  		|| (mire() && (has("bigkey") || has("bigkey"))))
		  	&& (hasSword() || has("hammer")))
		  || (this.locations["Tower of Hera - Big Chest"].majorglitches()
		  	&& sp.locations["Swamp Palace - Arrghus"].majorglitches());
	  }
  }
}
