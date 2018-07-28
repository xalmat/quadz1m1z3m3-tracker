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
					|| (((! has("variation.ohko")) || canExtendMagic()) && has("byrna")))
				&& wdm.canEnter.glitchless();
		  }
	  }
  }

  initMinorGlitches() {
	this.initNoMajorGlitches();

	if(this.buildLocations) {
		this.locations["Spike Cave"].minorGlitches = function() {
			let ret = this.glitchless();

			if(ret) {
				return ret;
			}

			let wdm = new DeathMountainWest("","",false);
			wdm.initMinorGlitches();

			if(has("moonpearl") && has("hammer") && canLiftRocks()
				&& ((canExtendMagic() && has("cape"))
					|| (((! has("variation.ohko")) || canExtendMagic()) && has("byrna")))
				&& wdm.canEnter.minorGlitches()) {

				return wdm.canEnter.minorGlitches();
			}
		}
	}
  }

  initMajorGlitches() {
	this.initOverworldGlitches();

	if(this.buildLocations) {
		this.locations["Spike Cave"].majorGlitches = function() {
			let wdm = new DeathMountainWest("","",false);
			wdm.initMajorGlitches();

			return has("hammer") && canLiftRocks()
				&& (has("moonpearl") || (has("bottle") && canDash()))
				&& ((canExtendMagic() && has("cape"))
					|| (((! has("variation.ohko")) || canExtendMagic()) && has("byrna")))
				&& wdm.canEnter.majorGlitches();
		}
	}
  }
}
