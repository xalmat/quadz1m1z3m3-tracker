class OverworldRoad extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "Road") {
	super(name,subname);
	let regionName = name + subname;

	// Both Quests
	this.locations = new LocationCollection([
		new Location("Road","Unnamed Road 1",		3408/Z1FACTOR,	 224/Z1FACTOR,regionName,{equipment:"%%bracelet%%"}),	// 0x1D // road1
		new Location("Road","Unnamed Road 2",		 832/Z1FACTOR,	 432/Z1FACTOR,regionName,{equipment:"%%bracelet%%"}),	// 0x23 // road2
		new Location("Road","Unnamed Road 3",		2384/Z1FACTOR,	 752/Z1FACTOR,regionName,{equipment:"%%bracelet%%"}),	// 0x49 // road3
		new Location("Road","Unnamed Road 4",		2448/Z1FACTOR,	1312/Z1FACTOR,regionName,{equipment:"%%bracelet%%"})	// 0x79 // road4
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
