class LightWorldSouth extends LightWorld {
  constructor(name = "LightWorld", subname = "South") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
	],this);
  }

  initNoMajorGlitches() {
	this.canEnter.glitchless = function() {
		return true;
	}
  }
}
