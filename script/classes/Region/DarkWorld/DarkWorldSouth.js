class DarkWorldSouth extends DarkWorld {
  constructor(name = "DarkWorld", subname = "South") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
	],this);
  }

  initNoMajorGlitches() {
	this.canEnter.glitchless = function() {
		var dwne = new DarkWorldNorthEast();
		dwne.initNoMajorGlitches();
		return has("moonpearl")
			&& ((dwne.canEnter.glitchless() && (has("hammer")
				|| (canGrapple() && (canSwim() || canLiftRocks()))))
				|| (has("hammer") && canLiftRocks())
				|| canLiftDarkRocks());
	}
  }
}
