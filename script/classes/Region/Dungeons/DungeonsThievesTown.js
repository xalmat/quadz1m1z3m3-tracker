class DungeonsThievesTown extends Dungeons {
  constructor(name = "Dungeons", subname = "ThievesTown", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("Chest","Thieves' Town - Attic","","",regionName),
			new Location("Chest","Thieves' Town - Big Key Chest","","",regionName),
			new Location("Chest","Thieves' Town - Map Chest","","",regionName),
			new Location("Chest","Thieves' Town - Compass Chest","","",regionName),
			new Location("Chest","Thieves' Town - Ambush Chest","","",regionName),
			new Location("BigChest","Thieves' Town - Big Chest","","",regionName),
			new Location("Chest","Thieves' Town - Blind's Cell","","",regionName),
			new Location("Event","Thieves' Town - Blind","56.4%","47.9%",regionName)
		],this);
	}

	this.boss = new BossBlind();
  }

  initNoMajorGlitches() {
	let boss = this.boss;

	if(this.buildLocations) {
		this.locations["Thieves' Town - Attic"].glitchless = function() {
			return has("key") && has("bigkey");
		}
		this.locations["Thieves' Town - Big Chest"].glitchless = function() {
			return has("hammer") && has("key") && has("bigkey");
		}
		this.locations["Thieves' Town - Blind's Cell"].glitchless = function() {
			return has("bigkey");
		}
		this.locations["Thieves' Town - Blind"].glitchless = function() {
			return has("key") && has("bigkey")
				&& boss.canBeat();
		}
	}

	this.canEnter.glitchless = function() {
		let nwdw = new DarkWorldNorthWest("","",false);
		nwdw.initNoMajorGlitches();

		return has("moonpearl") && nwdw.canEnter.glitchless();
	}
	this.canComplete.glitchless = function() {
		return this.locations["Thieves' Town - Blind"].glitchless();
	}
  }

  initMajorGlitches() {
	  this.initNoMajorGlitches();

	  this.canEnter.majorglitches = function() {
		  let nwdw = new DarkWorldNorthWest("","",false);
		  nwdw.initMajorGlitches();

		  return glitchedLinkInDarkWorld()
		  	&& nwdw.canEnter.majorglitches();
	  }
  }
}
