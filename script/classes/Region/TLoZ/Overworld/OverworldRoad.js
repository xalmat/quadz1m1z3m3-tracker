class OverworldRoad extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "Road") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Road","Unnamed Road 1",	0/Z1FACTOR, 0/Z1FACTOR,regionName),	// 0x1D	// road1
		new Location("Road","Unnamed Road 2",	0/Z1FACTOR, 0/Z1FACTOR,regionName),	// 0x23	// road2
		new Location("Road","Unnamed Road 3",	0/Z1FACTOR, 0/Z1FACTOR,regionName),	// 0x49	// road3
		new Location("Road","Unnamed Road 4",	0/Z1FACTOR, 0/Z1FACTOR,regionName)	// 0x79	// road4
	],this);
  }

  initNoMajorGlitches() {
	  this.locations["Unnamed Road 1"].glitchless =
	  this.locations["Unnamed Road 2"].glitchless =
	  this.locations["Unnamed Road 3"].glitchless =
	  this.locations["Unnamed Road 4"].glitchless = function() {
		  return has("bracelet");
	  }
  }
}
