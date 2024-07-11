class OverworldRupoor extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "Rupoor") {
	super(name,subname);
	let regionName = name + subname;
	let locCollection = [];

	// Both Quests
	locCollection = [
		new Location("Rupoor","Unnamed Rupoor 1",	 400/Z1FACTOR,	  16/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),		// 0x01	// charge1/charge01
		new Location("Rupoor","Unnamed Rupoor 2",	 880/Z1FACTOR,	  64/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),		// 0x03	// charge2/charge02
		new Location("Rupoor","Unnamed Rupoor 3",	1952/Z1FACTOR,	  64/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),		// 0x07	// charge3/charge03
		new Location("Rupoor","Unnamed Rupoor 4",	1216/Z1FACTOR,	 192/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),		// 0x14	// charge4/charge04
		new Location("Rupoor","Unnamed Rupoor 5",	3776/Z1FACTOR,	 192/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),		// 0x1E	// charge5/charge05
		new Location("Rupoor","Unnamed Rupoor 6",	 863/Z1FACTOR,	1151/Z1FACTOR,regionName,{equipment:"%%recorder%%"}),	// 0x63	// charge6/charge06
		new Location("Rupoor","Unnamed Rupoor 7",	2079/Z1FACTOR,	1151/Z1FACTOR,regionName,{equipment:"%%candle%%"}),		// 0x68	// charge7/charge07
		new Location("Rupoor","Unnamed Rupoor 8",	2751/Z1FACTOR,	1151/Z1FACTOR,regionName,{equipment:"%%candle%%"}),		// 0x6A	// charge8/charge08
		new Location("Rupoor","Unnamed Rupoor 9",	3424/Z1FACTOR,	1248/Z1FACTOR,regionName,{equipment:"%%bomb%%"})		// 0x7D	// charge9/charge10
	];

	// Only Second Quest
	if(questid == 2) {
	  locCollection.push(
		new Location("Rupoor","Unnamed Rupoor 10",		 608/Z1FACTOR,	1312/Z1FACTOR,regionName,{equipment:"%%recorder%%"}),	// 0x72 // xxxx/charge09
	  );
	}

	this.locations = new LocationCollection(locCollection,this);
  }

  initNoMajorGlitches() {
	  this.locations["Unnamed Rupoor 1"].glitchless =
	  this.locations["Unnamed Rupoor 2"].glitchless =
	  this.locations["Unnamed Rupoor 3"].glitchless =
	  this.locations["Unnamed Rupoor 4"].glitchless =
	  this.locations["Unnamed Rupoor 5"].glitchless = function() {
		  return has("bomb");
	  }

	  this.locations["Unnamed Rupoor 6"].glitchless = function() {
		  return has("recorder");
	  }

	  this.locations["Unnamed Rupoor 7"].glitchless =
	  this.locations["Unnamed Rupoor 8"].glitchless = function() {
		  return canLightBushes();
	  }

	  this.locations["Unnamed Rupoor 9"].glitchless = function() {
		  return has("bomb");
	  }

	  if(questid == 2) {
		  this.locations["Unnamed Rupoor 10"].glitchless = function() {
			  return has("recorder");
		  }
	  }
  }
}
