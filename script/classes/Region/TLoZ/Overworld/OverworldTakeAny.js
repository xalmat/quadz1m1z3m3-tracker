class OverworldTakeAny extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "TakeAny") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Take Any","Monocole Rock 'Take Any' Cave",3216/Z1FACTOR,  448/Z1FACTOR,regionName),							// 0x2C	// takeany1
		new Location("Take Any","Spooky Island 'Take Any' Cave",3936/Z1FACTOR,  416/Z1FACTOR,regionName,{equipment:"%%raft%%"}),	// 0x2F	// takeany2
		new Location("Take Any","Candle Row 'Take Any' Cave",	1968/Z1FACTOR,  816/Z1FACTOR,regionName,{equipment:"%%candle%%"}),	// 0x47	// takeany3
		new Location("Take Any","South Shore 'Take Any' Cave",	2960/Z1FACTOR, 1248/Z1FACTOR,regionName)							// 0x7B	// takeany4
	],this);
  }

  initMinorGlitches() {
	  this.locations["Spooky Island 'Take Any' Cave"].minorGlitches = function() {
		  return canSwimZ1();
	  }
	  this.locations["Candle Row 'Take Any' Cave"].minorGlitches = function() {
		  return canLightBushes();
	  }
  }
}
