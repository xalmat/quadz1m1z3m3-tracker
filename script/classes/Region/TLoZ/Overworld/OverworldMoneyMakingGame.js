class OverworldMoneyMakingGame extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "MoneyMakingGame") {
	super(name,subname);
	let regionName = name + subname;
	let locCollection = [];

	// Both Quests
	locCollection = [
		new Location("Money Making Game","Unnamed Money Making Game 1",	 144/Z1FACTOR,	 192/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),	// 0x10	// mmg1
		new Location("Money Making Game","Unnamed Money Making Game 2",	1632/Z1FACTOR,	 192/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),	// 0x16	// mmg2
		new Location("Money Making Game","Unnamed Money Making Game 3",	3936/Z1FACTOR,	 240/Z1FACTOR,regionName),							// 0x1F	// mmg3
		new Location("Money Making Game","Unnamed Money Making Game 4",	1632/Z1FACTOR,	1248/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),	// 0x76	// mmg4/mm5
		new Location("Money Making Game","Unnamed Money Making Game 5",	3168/Z1FACTOR,	1248/Z1FACTOR,regionName,{equipment:"%%bomb%%"})	// 0x7C	// mmg5/mm6
	];

	// Only Second Quest
	if(questid == 2) {
	  locCollection.push(
		new Location("Money Making Game","Unnamed Money Making Game 6",	  96/Z1FACTOR,	1136/Z1FACTOR,regionName,{equipment:"%%recorder%%"})	// 0x60 // xxxx/mmg6
	  );
	}

	this.locations = new LocationCollection(locCollection,this);

  }

  initNoMajorGlitches() {
	  this.locations["Unnamed Money Making Game 1"].glitchless =
	  this.locations["Unnamed Money Making Game 2"].glitchless =
	  this.locations["Unnamed Money Making Game 4"].glitchless =
	  this.locations["Unnamed Money Making Game 5"].glitchless = function() {
		  return has("bomb");
	  }

	  if(questid == 2) {
		  this.locations["Unnamed Money Making Game 6"].glitchless = function() {
			  return has("recorder");
		  }
	  }
  }
}
