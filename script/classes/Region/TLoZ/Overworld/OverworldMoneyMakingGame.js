class OverworldMoneyMakingGame extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "MoneyMakingGame") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Money Making Game","Unnamed Money Making Game 1",	0/Z1FACTOR, 0/Z1FACTOR,regionName),	// 0x10	// mmg1
		new Location("Money Making Game","Unnamed Money Making Game 2",	0/Z1FACTOR, 0/Z1FACTOR,regionName),	// 0x16	// mmg2
		new Location("Money Making Game","Unnamed Money Making Game 3",	0/Z1FACTOR, 0/Z1FACTOR,regionName),	// 0x1F	// mmg3
		new Location("Money Making Game","Unnamed Money Making Game 4",	0/Z1FACTOR, 0/Z1FACTOR,regionName),	// 0x76	// mmg4
		new Location("Money Making Game","Unnamed Money Making Game 5",	0/Z1FACTOR, 0/Z1FACTOR,regionName)	// 0x7C	// mmg5
	],this);
  }
}
