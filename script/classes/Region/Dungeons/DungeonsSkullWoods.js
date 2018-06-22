class DungeonsSkullWoods extends Dungeons {
  constructor(name = "Dungeons", subname = "SkullWoods") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("BigChest","Skull Woods - Big Chest","","",regionName),
		new Location("Chest","Skull Woods - Big Key Chest","","",regionName),
		new Location("Chest","Skull Woods - Map Chest","","",regionName),
		new Location("Chest","Skull Woods - Bridge Room","","",regionName),
		new Location("Chest","Skull Woods - Pot Prison","","",regionName),
		new Location("Chest","Skull Woods - Pinball Room","","",regionName),
		new Location("Event","Skull Woods - Mothula","53.3%","5.4%",regionName)
	],this);

	this.boss = new BossMothula();
  }

  initNoMajorGlitches() {
	let boss = this.boss;

	this.locations["Skull Woods - Big Chest"].glitchless = function() {
		return has("bigkey");
	}
	this.locations["Skull Woods - Bridge Room"].glitchless = function() {
		return has("moonpearl") && has("firerod");
	}
	this.locations["Skull Woods - Mothula"].glitchless = function() {
		return has("moonpearl")
			&& has("firerod")
			&& (has("swords.swordless") || hasSword())						// FIXME: Swordless
			&& has("key",3)
			&& boss.canBeat();
	}

	this.canEnter.glitchless = function() {
		let nwdw = new DarkWorldNorthWest();
		nwdw.initNoMajorGlitches();

		return has("moonpearl") && nwdw.canEnter.glitchless();
	}
	this.canComplete.glitchless = function() {
		return this.locations["Skull Woods - Mothula"].glitchless();
	}
  }

  initOverworldGlitches() {
	  this.initNoMajorGlitches();

	  this.canEnter.owglitches = function() {
		  let nwdw = new DarkWorldNorthWest();
		  nwdw.initOverworldGlitches();

		  return nwdw.canEnter.owglitches();
	  }
  }
}
