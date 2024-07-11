class OverworldTakeAny extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "TakeAny") {
	super(name,subname);
	let regionName = name + subname;
	let locCollection = [];

	// Both Quests
	locCollection = [
		new Location("Take Any","Spooky Island 'Take Any' Cave",3936/Z1FACTOR,  416/Z1FACTOR,regionName,{equipment:"%%raft%%"})		// 0x2F	// takeany2/takeany3
	];

	// Only First Quest
	if(questid == 1) {
	  locCollection.push(
		new Location("Take Any","Monocole Rock 'Take Any' Cave",3216/Z1FACTOR,  448/Z1FACTOR,regionName),							// 0x2C	// takeany1/xxxx
		new Location("Take Any","Candle Row 'Take Any' Cave",	1968/Z1FACTOR,  816/Z1FACTOR,regionName,{equipment:"%%candle%%"}),	// 0x47	// takeany3/xxxx
		new Location("Take Any","South Shore 'Take Any' Cave",	2960/Z1FACTOR, 1248/Z1FACTOR,regionName)							// 0x7B	// takeany4/xxxx
	  );
	}

	// Only Second Quest
	if(questid == 2) {
	  locCollection.push(
		new Location("Take Any","Unnamed Take Any 1",	1632/Z1FACTOR,	  80/Z1FACTOR,regionName,{equipment:"%%recorder%%"}),	// 0x06 // takeany1
		new Location("Take Any","Unnamed Take Any 2",	  96/Z1FACTOR,	 432/Z1FACTOR,regionName),	// 0x20 // takeany2
		new Location("Take Any","Unnamed Take Any 4",	2656/Z1FACTOR,	 608/Z1FACTOR,regionName)	// 0x3A // takeany4
	  );
	}

	this.locations = new LocationCollection(locCollection,this);
  }

  initNoMajorGlitches() {
	  this.locations["Spooky Island 'Take Any' Cave"].glitchless = function() {
		  return canSwimZ1();
	  }

	  if(questid == 1) {
		  this.locations["Candle Row 'Take Any' Cave"].glitchless = function() {
			  return canLightBushes();
		  }
	  }
  }
}
