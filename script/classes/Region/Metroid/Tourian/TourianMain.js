class TourianMain extends Tourian {
  constructor(name = "Tourian", subname = "Main") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Event","Mother Brain",21,213,regionName)
	],this);
  }

  initCasual() {
	  this.locations["Mother Brain"].casualLogic = function() {
		  return canMorph() && has("ice") && has("kraidtotem") && has("ridleytotem");
	  }
  }
}
