class OverworldFreeHint extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "FreeHint") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Free Hint","Unnamed Free Hint 1",	0/Z1FACTOR, 0/Z1FACTOR,regionName),	// 0x1C	// freehint1
		new Location("Free Hint","Unnamed Free Hint 2",	0/Z1FACTOR, 0/Z1FACTOR,regionName),	// 0x75	// freehint2
	],this);
  }
}
