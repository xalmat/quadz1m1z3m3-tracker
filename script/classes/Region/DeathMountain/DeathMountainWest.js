class DeathMountainWest extends DeathMountain {
  constructor(name = "DeathMountain", subname = "West") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
	],this);
  }

  initNoMajorGlitches() {
	this.canEnter.glitchless = function() {
		return (canFly()
			|| (canLiftRocks() && has("lantern"))
			|| canAccessDeathMountainPortal());
	}
  }
}
