class DungeonsLevel1 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level1") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Eagle",1856/Z1FACTOR, 556/Z1FACTOR,regionName), // Aquamentus
	],this);
  }

  initMinorGlitches() {
	  this.canEnter.minorGlitches = function() {
		  return true;
	  }
  }
}
