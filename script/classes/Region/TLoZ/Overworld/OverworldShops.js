class OverworldShops extends Overworld {
  constructor(name = "Overworld", subname = "Shops") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Shop","Shop Next to Level 5",				3200/Z1FACTOR,   16/Z1FACTOR,regionName),	// 0x0C
		new Location("Shop","Shop Just East of Bracelet Armos",	1440/Z1FACTOR,  368/Z1FACTOR,regionName),	// 0x25
		new Location("Shop","Blue Ring Shop",					1088/Z1FACTOR,  592/Z1FACTOR,regionName),	// 0x34
		new Location("Shop","Shop South of Blue Ring Shop",		1088/Z1FACTOR,  720/Z1FACTOR,regionName),	// 0x44
		new Location("Shop","Shop South of Desert",				2736/Z1FACTOR,  720/Z1FACTOR,regionName),	// 0x4A
		new Location("Shop","Shop Northeast of Level 8",		3696/Z1FACTOR,  896/Z1FACTOR,regionName),	// 0x5E
		new Location("Shop","Shop Northwest of Start",			1648/Z1FACTOR, 1072/Z1FACTOR,regionName),	// 0x66
		new Location("Shop","East Shore Shop",					3888/Z1FACTOR, 1072/Z1FACTOR,regionName)	// 0x6F
	],this);
  }
}
