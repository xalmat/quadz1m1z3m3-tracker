class DungeonsSkullWoods extends Dungeons {
  constructor(name = "Dungeons", subname = "SkullWoods", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("BigChest","Skull Woods - Big Chest","","",regionName),
			new Location("Chest","Skull Woods - Big Key Chest","","",regionName),
			new Location("Chest","Skull Woods - Map Chest","","",regionName),
			new Location("Chest","Skull Woods - Bridge Room","","",regionName),
			new Location("Chest","Skull Woods - Pot Prison","","",regionName),
			new Location("Chest","Skull Woods - Pinball Room","","",regionName),
			new Location("Event","Skull Woods - Mothula","53.3%","5.4%",regionName)
		],this);
	}

	this.boss = new BossMothula();
  }

  initNoMajorGlitches() {
	let boss = this.boss;
	let region = this;

	if(this.buildLocations) {
		this.locations["Skull Woods - Big Chest"].glitchless = function() {
			return has("bigkey");
		}
		this.locations["Skull Woods - Bridge Room"].glitchless = function() {
			return has("moonpearl") && has("firerod");
		}
	}

	this.locations["Skull Woods - Mothula"].glitchless = function() {
		return has("moonpearl")
			&& has("firerod")
			&& hasSword()
			&& has("key",3)
			&& boss.canBeat();
	}

	this.canEnter.glitchless = function() {
		let nwdw = new DarkWorldNorthWest("","",false);
		nwdw.initNoMajorGlitches();

		return has("moonpearl") && nwdw.canEnter.glitchless();
	}
	this.canComplete.glitchless = function() {
		return region.locations["Skull Woods - Mothula"].glitchless();
	}
  }

  initMinorGlitches() {
	  this.initNoMajorGlitches();

	  let dungeon = this;

	  this.canEnter.minorGlitches = function() {
		  let nwdw = new DarkWorldNorthWest("","",false);
		  nwdw.initMinorGlitches();

		  if(has("moonpearl")) {
			  if(nwdw.canEnter.minorGlitches()) {
				  return nwdw.canEnter.minorGlitches();
			  }
		  }
	  }

	  this.canGetChest.minorGlitches = function() {
		  let mychests = trackerData.zelda3.dungeonchests[5];

		  if(dungeon.canEnter.glitchless()) {
			  if(has("moonpearl")
			  	&& has("firerod")
			  	&& (hasSword() || mychests === 2)) {
				  return true;
			  } else {
				  return "partial";
			  }
		  }
		  if(dungeon.canEnter.minorGlitches()) {
			  return dungeon.canEnter.minorGlitches();
		  }
	  }
  }

  initOverworldGlitches() {
	  this.initMinorGlitches();

	  this.canEnter.owGlitches = function() {
		  let nwdw = new DarkWorldNorthWest("","",false);
		  nwdw.initOverworldGlitches();

		  return nwdw.canEnter.owGlitches();
	  }
  }
}
