class OverworldRupoor extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "Rupoor") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Rupoor","Unnamed Rupoor 1",	0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x01	// charge1
		new Location("Rupoor","Unnamed Rupoor 2",	0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x03	// charge2
		new Location("Rupoor","Unnamed Rupoor 3",	0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x07	// charge3
		new Location("Rupoor","Unnamed Rupoor 4",	0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x14	// charge4
		new Location("Rupoor","Unnamed Rupoor 5",	0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x1E	// charge5
		new Location("Rupoor","Unnamed Rupoor 6",	0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x63	// charge6
		new Location("Rupoor","Unnamed Rupoor 7",	0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x68	// charge7
		new Location("Rupoor","Unnamed Rupoor 8",	0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x6A	// charge8
		new Location("Rupoor","Unnamed Rupoor 9",	0000/Z1FACTOR, 0000/Z1FACTOR,regionName)	// 0x7D	// charge9
	],this);
  }

  initMinorGlitches() {
	  this.locations["Unnamed Rupoor 6"].minorGlitches =
	  this.locations["Unnamed Rupoor 7"].minorGlitches =
	  this.locations["Unnamed Rupoor 8"].minorGlitches = function() {
		  return canLightBushes();
	  }
  }
}
