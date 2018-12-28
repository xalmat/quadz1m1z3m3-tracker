class OverworldPotions extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "Potions") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Potions","Unnamed Potions 1",	1216/Z1FACTOR,	  16/Z1FACTOR,regionName),	// 0x04	// potions1
		new Location("Potions","Unnamed Potions 2",	3472/Z1FACTOR,	  16/Z1FACTOR,regionName),	// 0x0D	// potions2
		new Location("Potions","Unnamed Potions 3",	2016/Z1FACTOR,	 368/Z1FACTOR,regionName),	// 0x27	// potions3
		new Location("Potions","Unnamed Potions 4",	 928/Z1FACTOR,	 544/Z1FACTOR,regionName),	// 0x33	// potions4
		new Location("Potions","Unnamed Potions 5",	2991/Z1FACTOR,	 735/Z1FACTOR,regionName),	// 0x4B	// potions5
		new Location("Potions","Unnamed Potions 6",	2111/Z1FACTOR,	1327/Z1FACTOR,regionName)	// 0x64	// potions6
	],this);
  }

  initNoMajorGlitches() {
	  this.locations["Unnamed Potions 5"].glitchless = function() {
		  return canLightBushes();
	  }
  }
}
