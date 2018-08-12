class DungeonsLevel8 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level8") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","The Lion",3392/Z1FACTOR,1072/Z1FACTOR,regionName), // Gleeok
	],this);
  }

  initNoMajorGlitches() {
	  this.canEnter.glitchless = function() {
		  return canLightBushes();
	  }
  }
}
