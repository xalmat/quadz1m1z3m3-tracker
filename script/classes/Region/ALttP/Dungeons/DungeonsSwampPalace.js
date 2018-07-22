class DungeonsSwampPalace extends Dungeons {
  constructor(name = "Dungeons", subname = "SwampPalace", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("SpawnableChest","Swamp Palace - Entrance","","",regionName),
			new Location("BigChest","Swamp Palace - Big Chest","","",regionName),
			new Location("Chest","Swamp Palace - Big Key Chest","","",regionName),
			new Location("Chest","Swamp Palace - Map Chest","","",regionName),
			new Location("Chest","Swamp Palace - West Chest","","",regionName),
			new Location("SpawnableChest","Swamp Palace - Compass Chest","","",regionName),
			new Location("Chest","Swamp Palace - Flooded Room - Left","","",regionName),
			new Location("Chest","Swamp Palace - Flooded Room - Right","","",regionName),
			new Location("SpawnableChest","Swamp Palace - Waterfall Room","","",regionName),
			new Location("Event","Swamp Palace - Arrghus","73.5%","91.0%",regionName,{equipment:"%%mirror%%"})
		],this);
	}

	this.boss = new BossArrghus();
  }

  initNoMajorGlitches() {
	let boss = this.boss;
	let dungeon = this;

	if(this.buildLocations) {
		this.locations["Swamp Palace - Big Chest"].glitchless = function() {
			return has("key")
				&& has("hammer")
				&& has("bigkey");
		}
		this.locations["Swamp Palace - Big Key Chest"].glitchless = function() {
			return has("key")
				&& has("hammer");
		}
		this.locations["Swamp Palace - Map Chest"].glitchless = function() {
			return has("key");
		}
		this.locations["Swamp Palace - West Chest"].glitchless =
		this.locations["Swamp Palace - Compass Chest"].glitchless = function() {
			return has("key")
				&& has("hammer");
		}
		this.locations["Swamp Palace - Flooded Room - Left"].glitchless =
		this.locations["Swamp Palace - Flooded Room - Right"].glitchless =
		this.locations["Swamp Palace - Waterfall Room"].glitchless = function() {
			return has("key")
				&& has("hammer")
				&& canGrapple();
		}
	}

	this.locations["Swamp Palace - Arrghus"].glitchless = function() {
		return has("key")
			&& has("hammer")
			&& canGrapple()
			&& boss.canBeat();
	}

	this.canEnter.glitchless = function() {
		let sdw = new DarkWorldSouth("","",false);
		sdw.initNoMajorGlitches();

		return has("moonpearl") && has("mirror") && canSwim()
			&& sdw.canEnter.glitchless();
	}
	this.canComplete.glitchless = function() {
		return dungeon.locations["Swamp Palace - Arrghus"].glitchless();
	}
  }

  initMinorGlitches() {
	  this.initNoMajorGlitches();

	  let dungeon = this;

	  this.canEnter.minorGlitches = function() {
		  let sdw = new DarkWorldSouth("","",false);
		  sdw.initMinorGlitches();

		  if(has("moonpearl")
		  	&& has("mirror")
		  	&& canSwim()) {
				if(sdw.canEnter.minorGlitches()) {
					return sdw.canEnter.minorGlitches();
				}
		  }
	  }

	  this.canGetChest.minorGlitches = function() {
		  let mychests = trackerData.zelda3.dungeonchests[4];

		  if(dungeon.canEnter.glitchless()) {
			  if(has("hammer")) {
				  if(canGrapple() || mychests >= 5) {
					  return true;
				  } else if(mychests >= 3) {
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

	  let sdw = new DarkWorldSouth("","",false);
	  sdw.initMajorGlitches();

	  let toh = new DungeonsTowerOfHera();
	  toh.initMajorGlitches();

	  let mm = new DungeonsMiseryMire("","",false);
	  mm.initMajorGlitches();

	  let main = function() { return has("moonpearl") && has("mirror") && canSwim() && sdw.canEnter.majorGlitches(); };
	  let hera = function() { toh.locations["Tower of Hera - Big Chest"].majorGlitches(); };
	  let mire = function() { has("key",3) && mm.canEnter.majorGlitches(); };

	  if(this.buildLocations) {
		  this.locations["Swamp Palace - Compass Chest"].majorGlitches =
		  this.locations["Swamp Palace - Big Key Chest"].majorGlitches =
		  this.locations["Swamp Palace - West Chest"].majorGlitches = function() {
			  return has("key") && canSwim()
			  	&& (mire()
			  		|| (main() && has("hammer")));
		  }
		  this.locations["Swamp Palace - Big Chest"].majorGlitches = function() {
			  return has("key") && canSwim()
			  	&& (mire() && (has("bigkey") || has("bigkey") || has("bigkey"))
			  		|| (main() && has("hammer") && has("bigkey")));
		  }
		  this.locations["Swamp Palace - Flooded Room - Left"].majorGlitches =
		  this.locations["Swamp Palace - Flooded Room - Right"].majorGlitches =
		  this.locations["Swamp Palace - Waterfall Room"].majorGlitches = function() {
			  return has("key") && canGrapple() && canSwim()
			  	&& (mire()
			  		|| (main() && has("hammer")));
		  }
	  }
	  this.locations["Swamp Palace - Arrghus"].majorGlitches = function() {
		  return has("key") && canGrapple() && canSwim()
		  	&& (mire()
		  		|| (main() && has("hammer")))
		  	&& (hasSword() || has("hammer")
		  		|| ((canShootArrows() || canExtendMagic())
		  			&& (has("firerod") || has("icerod"))));
	  }

	  this.canEnter.majorGlitches = function() {
		  return (main()
		  	|| mire());
	  }
	  this.canComplete.majorGlitches = function() {
		  return main && has("key") && canGrapple()
		  	&& (has("hammer") || mire())
		  	&& this.locations["Swamp Palace - Arrghus"].majorGlitches();
	  }
  }
}
