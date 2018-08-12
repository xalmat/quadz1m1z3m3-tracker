class DungeonsLevel4 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level4") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Snake",1346/Z1FACTOR,724/Z1FACTOR,regionName), // Gleeok
	],this);
  }

  initNoMajorGlitches() {
	  this.canEnter.glitchless = function() {
		  return canSwimZ1();
	  }
  }
}
