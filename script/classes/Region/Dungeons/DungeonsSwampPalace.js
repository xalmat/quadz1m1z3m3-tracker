class DungeonsSwampPalace extends Dungeons {
  constructor(name = "Dungeons", subname = "SwampPalace") {
	super(name,subname);
	let regionName = name + subname;
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

	this.boss = new BossArrghus();
  }

  initNoMajorGlitches() {
	let boss = this.boss;

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
	this.locations["Swamp Palace - Arrghus"].glitchless = function() {
		return has("key")
			&& has("hammer")
			&& canGrapple()
			&& boss.canBeat();
	}

	this.canEnter.glitchless = function() {
		let sdw = new DarkWorldSouth();
		sdw.initNoMajorGlitches();

		return has("moonpearl") && has("mirror") && canSwim()
			&& sdw.canEnter.glitchless();
	}
	this.canComplete.glitchless = function() {
		return this.locations["Swamp Palace - Arrghus"].glitchless();
	}
  }

  initMajorGlitches() {
	  this.initOverworldGlitches();

	  let sdw = new DarkWorldSouth();
	  sdw.initMajorGlitches();

	  let toh = new DungeonsTowerOfHera();
	  toh.initMajorGlitches();

	  let mm = new DungeonsMiseryMire();
	  mm.initMajorGlitches();

	  let main = function() { return has("moonpearl") && has("mirror") && canSwim() && sdw.canEnter.majorglitches(); };
	  let hera = function() { toh.locations["Tower of Hera - Big Chest"].majorglitches(); };
	  let mire = function() { has("key",3) && mm.canEnter.majorglitches(); };

	  this.locations["Swamp Palace - Compass Chest"].majorglitches =
	  this.locations["Swamp Palace - Big Key Chest"].majorglitches =
	  this.locations["Swamp Palace - West Chest"].majorglitches = function() {
		  return has("key") && canSwim()
		  	&& (mire()
		  		|| (main() && has("hammer")));
	  }
	  this.locations["Swamp Palace - Big Chest"].majorglitches = function() {
		  return has("key") && canSwim()
		  	&& (mire() && (has("bigkey") || has("bigkey") || has("bigkey"))
		  		|| (main() && has("hammer") && has("bigkey")));
	  }
	  this.locations["Swamp Palace - Flooded Room - Left"].majorglitches =
	  this.locations["Swamp Palace - Flooded Room - Right"].majorglitches =
	  this.locations["Swamp Palace - Waterfall Room"].majorglitches = function() {
		  return has("key") && canGrapple() && canSwim()
		  	&& (mire()
		  		|| (main() && has("hammer")));
	  }
	  this.locations["Swamp Palace - Arrghus"].majorglitches = function() {
		  return has("key") && canGrapple() && canSwim()
		  	&& (mire()
		  		|| (main() && has("hammer")))
		  	&& (hasSword() || has("hammer")
		  		|| ((canShootArrows() || canExtendMagic())
		  			&& (has("firerod") || has("icerod"))));
	  }

	  this.canEnter.majorglitches = function() {
		  return (main()
		  	|| mire());
	  }
	  this.canComplete.majorglitches = function() {
		  return main && has("key") && canGrapple()
		  	&& (has("hammer") || mire())
		  	&& this.locations["Swamp Palace - Arrghus"].majorglitches();
	  }
  }
}
