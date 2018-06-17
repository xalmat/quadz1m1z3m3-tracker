class DarkWorldNorthEast extends DarkWorld {
  constructor(name = "DarkWorld", subname = "NorthEast") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
	],this);
  }

  initNoMajorGlitches() {
	this.canEnter.glitchless = function() {
		return (has("agahnim")
			|| (has("hammer") && canLiftDarkRocks() && has("moonpear"))
			|| (canLiftDarkRocks() && canSwim() && has("moonpearl"))
			|| (canAccessDarkWorldPortal() && canSwim() && has("moonpearl")));
	}
  }
}
