class DungeonsLevel7 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level7") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Demon",572/Z1FACTOR,720/Z1FACTOR,regionName), // Aquamentus
	],this);
  }

  initNoMajorGlitches() {
	  this.canEnter.glitchless = function() {
		  return has("flute");
	  }
  }
}
