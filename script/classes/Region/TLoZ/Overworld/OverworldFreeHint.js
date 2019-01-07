class OverworldFreeHint extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "FreeHint") {
	super(name,subname);
	let regionName = name + subname;

	// Both Quests
	this.locations = new LocationCollection([
		new Location("Free Hint","Unnamed Free Hint 1",	3248/Z1FACTOR,	 240/Z1FACTOR,regionName),	// 0x1C	// freehint1
		new Location("Free Hint","Unnamed Free Hint 2",	1312/Z1FACTOR,	1248/Z1FACTOR,regionName),	// 0x75	// freehint2
	],this);
  }
}
