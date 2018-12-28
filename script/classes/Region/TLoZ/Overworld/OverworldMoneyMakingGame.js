class OverworldMoneyMakingGame extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "MoneyMakingGame") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Money Making Game","Unnamed Money Making Game 1",	 144/Z1FACTOR,	 192/Z1FACTOR,regionName),	// 0x10	// mmg1
		new Location("Money Making Game","Unnamed Money Making Game 2",	1632/Z1FACTOR,	 192/Z1FACTOR,regionName),	// 0x16	// mmg2
		new Location("Money Making Game","Unnamed Money Making Game 3",	3936/Z1FACTOR,	 240/Z1FACTOR,regionName),	// 0x1F	// mmg3
		new Location("Money Making Game","Unnamed Money Making Game 4",	1632/Z1FACTOR,	1248/Z1FACTOR,regionName),	// 0x76	// mmg4
		new Location("Money Making Game","Unnamed Money Making Game 5",	3168/Z1FACTOR,	1248/Z1FACTOR,regionName)	// 0x7C	// mmg5
	],this);
  }
}
