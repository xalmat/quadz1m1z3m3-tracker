class OverworldShop extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "Shop") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Shop","Shop Next to Level 5",				3200/Z1FACTOR,   16/Z1FACTOR,regionName),	// 0x0C	// shop01
		new Location("Shop","Unnamed Shop 1",					0000/Z1FACTOR,	000/Z1FACTOR,regionName),	// 0x12	// shop02
		new Location("Shop","Shop Just East of Bracelet Armos",	1440/Z1FACTOR,  368/Z1FACTOR,regionName),	// 0x25	// shop03
		new Location("Shop","Unnamed Shop 2",					0000/Z1FACTOR,	000/Z1FACTOR,regionName),	// 0x26	// shop04
		new Location("Shop","Blue Ring Shop",					1088/Z1FACTOR,  592/Z1FACTOR,regionName),	// 0x34	// shop05
		new Location("Shop","Shop South of Blue Ring Shop",		1088/Z1FACTOR,  720/Z1FACTOR,regionName),	// 0x44	// shop06
		new Location("Shop","Unnamed Shop 3",					0000/Z1FACTOR,	000/Z1FACTOR,regionName,{equipment:"%%candle%%"}),	// 0x46	// shop07
		new Location("Shop","Shop South of Desert",				2736/Z1FACTOR,  720/Z1FACTOR,regionName),	// 0x4A	// shop08
		new Location("Shop","Unnamed Shop 4",					0000/Z1FACTOR,	000/Z1FACTOR,regionName,{equipment:"%%candle%%"}),	// 0x4D	// shop09
		new Location("Shop","Shop Northeast of Level 8",		3696/Z1FACTOR,  896/Z1FACTOR,regionName),	// 0x5E	// shop10
		new Location("Shop","Shop Northwest of Start",			1648/Z1FACTOR, 1072/Z1FACTOR,regionName),	// 0x66	// shop11
		new Location("Shop","East Shore Shop",					3888/Z1FACTOR, 1072/Z1FACTOR,regionName)	// 0x6F	// shop12
		new Location("Shop","Unnamed Shop 5",					0000/Z1FACTOR,	000/Z1FACTOR,regionName,{equipment:"%%candle%%"})	// 0x78	// shop13
	],this);
  }

  initMinorGlitches() {
	  this.locations["Unnamed Shop 3"].minorGlitches =
	  this.locations["Unnamed Shop 4"].minorGlitches =
	  this.locations["Unnamed Shop 5"].minorGlitches = function() {
		  return canLightBushes();
	  }
  }
}
