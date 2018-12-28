class OverworldSecretCaves extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "SecretCaves") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("SecretCave",	"Open 100-Rupee Cave",			3968/Z1FACTOR,     64/Z1FACTOR,regionName),							// 0x0F // Open     100-Rupee Cave		// secret01
		new Location("BombableCave","Bombable 30-Rupee Cave",		 798/Z1FACTOR,    192/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),	// 0x13 // Bomb      30-Rupee Cave		// secret02
		new Location("BurnableCave","Burnable 30-Rupee Cave",		2256/Z1FACTOR,    448/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x28 // Fire      30-Rupee Cave		// secret03
		new Location("BombableCave","Bombable 30-Rupee Cave 2",		3392/Z1FACTOR,    368/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),	// 0x2D // Bomb      30-Rupee Cave 2	// secret04
		new Location("ArmosCave",	"Armos 30-Rupee Cave",			3472/Z1FACTOR,    592/Z1FACTOR,regionName),							// 0x3D // Armos     30-Rupee Cave		// secret05
		new Location("BurnableCave","Burnable 30-Rupee Cave 2",		2256/Z1FACTOR,    736/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x48 // Fire      30-Rupee Cave 2	// secret06
		new Location("ArmosCave",	"Armos 10-Rupee Cave",			3744/Z1FACTOR,    768/Z1FACTOR,regionName),							// 0x4E // Armos     10-Rupee Cave		// secret07
		new Location("BurnableCave","Burnable 10-Rupee Cave",		 400/Z1FACTOR,    977/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x51 // Fire      10-Rupee Cave		// secret08
		new Location("BurnableCave","Burnable 10-Rupee Cave 2",		1696/Z1FACTOR,    976/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x56 // Fire      10-Rupee Cave 2	// secret09
		new Location("BurnableCave","Burnable 10-Rupee Cave 3",		2848/Z1FACTOR,    976/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x5B // Fire      10-Rupee Cave 3	// secret10
		new Location("BurnableCave","Burnable 100-Rupee Cave",		 640/Z1FACTOR,   1104/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x62 // Fire     100-Rupee Cave		// secret11
		new Location("BombableCave","Bombable 30-Rupee Cave 3",		1904/Z1FACTOR,   1072/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),	// 0x67 // Bomb      30-Rupee Cave 3	// secret12
		new Location("BurnableCave","Burnable 100-Rupee Cave 2",	2944/Z1FACTOR,   1152/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x6B // Fire     100-Rupee Cave 2	// secret13
		new Location("BombableCave","Bombable 30-Rupee Cave 4",		 334/Z1FACTOR,   1248/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),	// 0x71 // Bomb      30-Rupee Cave 4	// secret14
	],this);
  }

  initMinorGlitches() {
	  this.locations["Burnable 30-Rupee Cave"].minorGlitches =
	  this.locations["Burnable 30-Rupee Cave 2"].minorGlitches =
	  this.locations["Burnable 10-Rupee Cave"].minorGlitches =
	  this.locations["Burnable 10-Rupee Cave 2"].minorGlitches =
	  this.locations["Burnable 10-Rupee Cave 3"].minorGlitches =
	  this.locations["Burnable 100-Rupee Cave"].minorGlitches =
	  this.locations["Burnable 100-Rupee Cave 2"].minorGlitches = function() {
		  return canLightBushes();
	  }
  }
}
