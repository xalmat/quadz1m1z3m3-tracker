class OverworldCaves extends Overworld {
  constructor(name = "Overworld", subname = "Caves") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Cave","White Sword Cave",					2592/Z1FACTOR,   16/Z1FACTOR,regionName),	// 0x0A
		new Location("Cave","Letter Cave",						3664/Z1FACTOR,   64/Z1FACTOR,regionName),	// 0x0E
		new Location("Cave","Magical Sword Cave",				 400/Z1FACTOR,  432/Z1FACTOR,regionName),	// 0x21
		new Location("Take Any","Monocole Rock 'Take Any' Cave",3216/Z1FACTOR,  448/Z1FACTOR,regionName),	// 0x2C
		new Location("Take Any","Spooky Island 'Take Any' Cave",3936/Z1FACTOR,  416/Z1FACTOR,regionName,{equipment:"%%raft%%"}),	// 0x2F
		new Location("Take Any","Candle Row 'Take Any' Cave",	1968/Z1FACTOR,  816/Z1FACTOR,regionName,{equipment:"%%candle%%"}),	// 0x47
		new Location("Cave","Wooden Sword Cave",				1856/Z1FACTOR, 1248/Z1FACTOR,regionName),	// 0x77
		new Location("Take Any","South Shore 'Take Any' Cave",	2960/Z1FACTOR, 1248/Z1FACTOR,regionName)	// 0x7B
	],this);
  }

  initNoMajorGlitches() {
	  this.locations["White Sword Cave"].glitchless = function() {
		  return has("heartcontainer",3+2);
	  }
	  this.locations["Magical Sword Cave"].glitchless = function() {
		  return has("heartcontainer",3+9);
	  }
	  this.locations["Spooky Island 'Take Any' Cave"].glitchless = function() {
		  return canSwimZ1();
	  }
	  this.locations["Candle Row 'Take Any' Cave"].glitchless = function() {
		  return canLightBushes();
	  }
  }
}
