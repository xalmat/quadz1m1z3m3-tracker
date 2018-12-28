class OverworldRupoor extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "Rupoor") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Rupoor","Unnamed Rupoor 1",	 400/Z1FACTOR,	  16/Z1FACTOR,regionName),	// 0x01	// charge1
		new Location("Rupoor","Unnamed Rupoor 2",	 880/Z1FACTOR,	  64/Z1FACTOR,regionName),	// 0x03	// charge2
		new Location("Rupoor","Unnamed Rupoor 3",	1952/Z1FACTOR,	  64/Z1FACTOR,regionName),	// 0x07	// charge3
		new Location("Rupoor","Unnamed Rupoor 4",	1216/Z1FACTOR,	 192/Z1FACTOR,regionName),	// 0x14	// charge4
		new Location("Rupoor","Unnamed Rupoor 5",	3776/Z1FACTOR,	 192/Z1FACTOR,regionName),	// 0x1E	// charge5
		new Location("Rupoor","Unnamed Rupoor 6",	 863/Z1FACTOR,	1151/Z1FACTOR,regionName),	// 0x63	// charge6
		new Location("Rupoor","Unnamed Rupoor 7",	2079/Z1FACTOR,	1151/Z1FACTOR,regionName),	// 0x68	// charge7
		new Location("Rupoor","Unnamed Rupoor 8",	2751/Z1FACTOR,	1151/Z1FACTOR,regionName),	// 0x6A	// charge8
		new Location("Rupoor","Unnamed Rupoor 9",	3424/Z1FACTOR,	1248/Z1FACTOR,regionName)	// 0x7D	// charge9
	],this);
  }

  initNoMajorGlitches() {
	  this.locations["Unnamed Rupoor 6"].glitchless =
	  this.locations["Unnamed Rupoor 7"].glitchless =
	  this.locations["Unnamed Rupoor 8"].glitchless = function() {
		  return canLightBushes();
	  }
  }
}
