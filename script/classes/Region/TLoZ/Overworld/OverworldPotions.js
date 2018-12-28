class OverworldPotions extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "Potions") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Potions","Unnamed Potions 1",		0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x04	// potions1
		new Location("Potions","Unnamed Potions 2",		0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x0D	// potions2
		new Location("Potions","Unnamed Potions 3",		0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x27	// potions3
		new Location("Potions","Unnamed Potions 4",		0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x33	// potions4
		new Location("Potions","Unnamed Potions 5",		0000/Z1FACTOR, 0000/Z1FACTOR,regionName),	// 0x4B	// potions5
		new Location("Potions","Unnamed Potions 6",		0000/Z1FACTOR, 0000/Z1FACTOR,regionName)	// 0x64	// potions6
	],this);
  }

  initMinorGlitches() {
	  this.locations["Unnamed Potions 5"].minorGlitches = function() {
		  return canLightBushes();
	  }
  }
}
