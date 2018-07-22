class DungeonsPalaceOfDarkness extends Dungeons {
  constructor(name = "Dungeons", subname = "PalaceOfDarkness") {
	super(name,subname);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("Chest","Palace of Darkness - Shooter Room","","",regionName),
			new Location("Chest","Palace of Darkness - Big Key Chest","","",regionName),
			new Location("Chest","Palace of Darkness - The Arena - Ledge","","",regionName),
			new Location("Chest","Palace of Darkness - The Arena - Bridge","","",regionName),
			new Location("Chest","Palace of Darkness - Stalfos Basement","","",regionName),
			new Location("Chest","Palace of Darkness - Map Chest","","",regionName),
			new Location("BigChest","Palace of Darkness - Big Chest","","",regionName),
			new Location("Chest","Palace of Darkness - Compass Chest","","",regionName),
			new Location("Chest","Palace of Darkness - Harmless Hellway","","",regionName),
			new Location("Chest","Palace of Darkness - Dark Basement - Left","","",regionName),
			new Location("Chest","Palace of Darkness - Dark Basement - Right","","",regionName),
			new Location("Chest","Palace of Darkness - Dark Maze - Top","","",regionName),
			new Location("Chest","Palace of Darkness - Dark Maze - Bottom","","",regionName),
			new Location("Event","Palace of Darkness - Helmasaur King","97.0%","40.0%",regionName,{equipment:"%%lantern%%"})
		],this);
	}

	this.boss = new BossHelmasaurKing();
  }

  initNoMajorGlitches() {
	let boss = this.boss;
	let dungeon = this;

	if(this.buildLocations) {
		this.locations["Palace of Darkness - The Arena - Ledge"].glitchless = function() {
			return canShootArrows();
		}
		this.locations["Palace of Darkness - Big Key Chest"].glitchless = function() {
			return (has("hammer") && canShootArrows() && has("lantern"));	// FIXME: Has key settings
		}
		this.locations["Palace of Darkness - The Arena - Bridge"].glitchless = function() {
			return (canShootArrows() && has("hammer"));	// FIXME: Has key settings
		}
		this.locations["Palace of Darkness - Big Chest"].glitchless = function() {
			return has("lantern") && has("bigkey") && (has("hammer") && canShootArrows());	// FIXME: Has key settings
		}
		this.locations["Palace of Darkness - Compass Chest"].glitchless = function() {
			return (has("hammer") && canShootArrows() && has("lantern"));	// FIXME: Has key settings
		}
		this.locations["Palace of Darkness - Harmless Hellway"].glitchless = function() {
			return (has("hammer") && canShootArrows() && has("lantern"));	// FIXME: Has key settings
		}
		this.locations["Palace of Darkness - Stalfos Basement"].glitchless = function() {
			return (canShootArrows() && has("hammer"));	// FIXME: Has key settings
		}
		this.locations["Palace of Darkness - Dark Basement - Left"].glitchless =
		this.locations["Palace of Darkness - Dark Basement - Right"].glitchless = function() {
			return has("lantern") && (has("hammer") && canShootArrows());	// FIXME: Has key settings
		}
		this.locations["Palace of Darkness - Map Chest"].glitchless = function() {
			return canShootArrows();
		}
		this.locations["Palace of Darkness - Dark Maze - Top"].glitchless =
		this.locations["Palace of Darkness - Dark Maze - Bottom"].glitchless = function() {
			return has("lantern") && (has("hammer") && canShootArrows());	// FIXME: Has key settings
		}
	}

	this.locations["Palace of Darkness - Helmasaur King"].glitchless = function() {
		return boss.canBeat()
			&& has("hammer") && has("lantern") && canShootArrows()
			&& has("bigkey") && has("key",6);
	}

	this.canEnter.glitchless = function() {
		let nedw = new DarkWorldNorthEast("","",false);
		nedw.initNoMajorGlitches();

		return has("moonpearl") && nedw.canEnter.glitchless();
	}
	this.canComplete.glitchless = function() {
		return dungeon.locations["Palace of Darkness - Helmasaur King"].glitchless();
	}
  }

  initMinorGlitches() {
	  this.initNoMajorGlitches();

	  let dungeon = this;

	  this.canEnter.minorGlitches = function() {
		  let nedw = new DarkWorldNorthEast("","",false);
		  nedw.initMinorGlitches();

		  if(has("moonpearl") && nedw.canEnter.minorGlitches()) {
			  return nedw.canEnter.minorGlitches();
		  }
	  }

	  this.canGetChest.minorGlitches = function() {
		  let mychests = trackerData.zelda3.dungeonchests[3];
		  if(dungeon.canEnter.glitchless()) {
			  if(has("bow") && (mychests >=2 || has("hammer"))) {
				  if(has("lantern")) {
					  return "available";
				  } else {
					  return "partial";
				  }
			  } else {
				  return "partial";
			  }
		  } else if(dungeon.canEnter.minorGlitches()) {
			  return dungeon.canEnter.minorGlitches();
		  }
	  }
  }

  initMajorGlitches() {
	  this.initOverworldGlitches();

	  this.canEnter.majorGlitches = function() {
		  let nedw = new DarkWorldNorthEast("","",false);
		  nedw.initMajorGlitches();

		  let wdm = new DeathMountainWest("","",false);
		  wdm.initMajorGlitches();

		  return (glitchedLinkInDarkWorld()
		  	&& nedw.canEnter.majorGlitches()
		  	|| wdm.canEnter.majorGlitches());
	  }
  }
}
