class DarkWorldMire extends DarkWorld {
  constructor(name = "DarkWorld", subname = "Mire") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
	],this);
  }

  initNoMajorGlitches() {
	this.canEnter.glitchless = function() {
		return ((canFly() && canLiftDarkRocks()) || canAccessMiseryMirePortal());
	}
  }
}
