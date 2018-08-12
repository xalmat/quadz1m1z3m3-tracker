class DungeonsLevel9 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level9") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","Death Mountain",1326/Z1FACTOR,0,regionName), // Ganon
	],this);
  }

  initNoMajorGlitches() {
	  this.canEnter.glitchless = function() {
		  let ret = true;

		  for(let i = 1; i <= 8; i++) {
			  if(! has("triforcepiece" + i)) {
				  ret = false;
			  }
		  }

		  return ret;
	  }
  }
}
