class DungeonsThievesTown extends Dungeons {
  constructor(name = "Dungeons", subname = "ThievesTown") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chest","Thieves' Town - Attic","","",regionName),
		new Location("Chest","Thieves' Town - Big Key Chest","","",regionName),
		new Location("Chest","Thieves' Town - Map Chest","","",regionName),
		new Location("Chest","Thieves' Town - Compass Chest","","",regionName),
		new Location("Chest","Thieves' Town - Ambush Chest","","",regionName),
		new Location("BigChest","Thieves' Town - Big Chest","","",regionName),
		new Location("Chest","Thieves' Town - Blind's Cell","","",regionName),
		new Location("Boss","Thieves' Town - Blind","","",regionName)
	],this);

	this.boss = new BossBlind();
  }

  initNoMajorGlitches() {
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
			&& this.boss.canBeat();
	}

	this.canEnter.glitchless = function() {
		let nwdw = new DarkWorldNorthWest();
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
		  let nwdw = new DarkWorldNorthWest();
		  nwdw.initMajorGlitches();

		  return glitchedLinkInDarkWorld()
		  	&& nwdw.canEnter.majorglitches();
	  }
  }
}
