class OverworldShops extends Overworld {
  constructor(name = "Overworld", subname = "Shops") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Shop","Shop Next to Level 5",		3200/Z1FACTOR,   16/Z1FACTOR,regionName),
		new Location("Shop","Shop Next to Bracelet",	1440/Z1FACTOR,  368/Z1FACTOR,regionName),
		new Location("Shop","Blue Ring Shop",			1088/Z1FACTOR,  592/Z1FACTOR,regionName),
		new Location("Shop","Shop West of Level 4",		1088/Z1FACTOR,  720/Z1FACTOR,regionName),
		new Location("Shop","Shop South of Desert",		2736/Z1FACTOR,  720/Z1FACTOR,regionName),
		new Location("Shop","Shop Northeast of Level 8",3696/Z1FACTOR,  896/Z1FACTOR,regionName),
		new Location("Shop","Shop Northwest of Start",	1648/Z1FACTOR, 1072/Z1FACTOR,regionName),
		new Location("Shop","East Shore Shop",			3888/Z1FACTOR, 1072/Z1FACTOR,regionName)
	],this);
  }
}
