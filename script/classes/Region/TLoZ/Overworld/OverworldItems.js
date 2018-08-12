class OverworldItems extends Overworld {
  constructor(name = "Overworld", subname = "Items") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","At Bracelet Armos",	1248/Z1FACTOR,	416/Z1FACTOR,regionName),	// 0x24
		new Location("","Off the East Shore",	4032/Z1FACTOR,  960/Z1FACTOR,regionName,{equipment:"%%ladder%%"})	// 0x5F
	],this);
  }

  initMinorGlitches() {
	  this.locations["Off the East Shore"].glitchless = function() {
		  let ret = has("ladder");

		  if(ret) {
			  return ret;
		  } else {
			  return "viewable";
		  }
	  }
  }
}
