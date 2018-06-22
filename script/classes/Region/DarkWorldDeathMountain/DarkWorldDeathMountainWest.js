class DarkWorldDeathMountainWest extends DarkWorldDeathMountain {
  constructor(name = "DarkWorldDeathMountain", subname = "West", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("Chest","Spike Cave","78.6%","14.9%",regionName)
		],this);
	}
  }

  initNoMajorGlitches() {
	  if(this.buildLocations) {
		  this.locations["Spike Cave"].glitchless = function() {
			let wdm = new DeathMountainWest("","",false);
			wdm.initNoMajorGlitches();

			return has("moonpearl") && has("hammer") && canLiftRocks()
				&& ((canExtendMagic() && has("cape"))
					|| (((! has("cantTakeDamage")) || canExtendMagic()) && has("byrna")))
				&& wdm.canEnter.glitchless();
		  }
	  }
  }

  initMajorGlitches() {
	this.initOverworldGlitches();

	if(this.buildLocations) {
		this.locations["Spike Cave"].majorglitches = function() {
			let wdm = new DeathMountainWest("","",false);
			wdm.initMajorGlitches();

			return has("hammer") && canLiftRocks()
				&& (has("moonpearl") || (has("bottle") && canDash()))
				&& ((canExtendMagic() && has("cape"))
					|| (((! has("cantTakeDamage")) || canExtendMagic()) && has("byrna")))
				&& wdm.canEnter.majorglitches();
		}
	}
  }
}
