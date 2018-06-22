class DarkWorldDeathMountainWest extends DarkWorldDeathMountain {
  constructor(name = "DarkWorldDeathMountain", subname = "West") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chest","Spike Cave","78.6%","14.9%",regionName)
	],this);
  }

  initNoMajorGlitches() {
	  this.locations["Spike Cave"].glitchless = function() {
		let wdm = new DeathMountainWest();
		wdm.initNoMajorGlitches();

		return has("moonpearl") && has("hammer") && canLiftRocks()
			&& ((canExtendMagic() && has("cape"))
				|| (((! has("cantTakeDamage")) || canExtendMagic()) && has("byrna")))
			&& wdm.canEnter.glitchless();
	  }
  }

  initMajorGlitches() {
	this.initOverworldGlitches();

	this.locations["Spike Cave"].majorglitches = function() {
		let wdm = new DeathMountainWest();
		wdm.initMajorGlitches();

		return has("hammer") && canLiftRocks()
			&& (has("moonpearl") || (has("bottle") && canDash()))
			&& ((canExtendMagic() && has("cape"))
				|| (((! has("cantTakeDamage")) || canExtendMagic()) && has("byrna")))
			&& wdm.canEnter.majorglitches();
	}
  }
}
