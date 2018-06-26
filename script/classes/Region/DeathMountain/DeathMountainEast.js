class DeathMountainEast extends DeathMountain {
  constructor(name = "DeathMountain", subname = "East", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("Chest","Spiral Cave","39.9%","9.3%",regionName),
			new Location("Chest","Mimic Cave","42.6%","9.3%",regionName,{equipment:"(%%mirror%% outside of Turtle Rock)(Yellow = %%medallion0%% unknown OR possible w/out %%firerod%%)"}),
//			new Location("Chest","Paradox Cave Lower - Far Left","41.4%","17.1%",regionName),
//			new Location("Chest","Paradox Cave Lower - Left","41.4%","17.1%",regionName),
//			new Location("Chest","Paradox Cave Lower - Right","41.4%","17.1%",regionName),
//			new Location("Chest","Paradox Cave Lower - Far Right","41.4%","17.1%",regionName),
//			new Location("Chest","Paradox Cave Upper - Left","41.4%","17.1%",regionName,{equipment:"%%bomb%%"}),
//			new Location("Chest","Paradox Cave Upper - Right","41.4%","17.1%",regionName,{equipment:"%%bomb%%"}),
			new Location("Chest","Paradox Cave","41.4%","17.1%",regionName,{equipment:"(5 + 2 %%bomb%%)"}),
			new Location("Standing","Floating Island","40.2%","3.0%",regionName,{equipment:"%%mirror%%"})
		],this);
	}
  }

  initNoMajorGlitches() {
	if(this.buildLocations) {
		this.locations["Mimic Cave"].glitchless = function() {
			let tr = new DungeonsTurtleRock("","",false);
			tr.initNoMajorGlitches();

			return has("mirror") && has("keyd7",2)
				&& tr.canEnter.glitchless();
		}
		this.locations["Floating Island"].glitchless = function() {
			return has("mirror") && has("pearl")
				&& canLiftDarkRocks();
		}
	}

	this.canEnter.glitchless = function() {
		let wdm = new DeathMountainWest("","",false);
		wdm.initNoMajorGlitches();

		return wdm.canEnter.glitchless()
			&& ((has("hammer") && has("mirror"))
			|| canGrapple());
	}
  }

  initMinorGlitches() {
	this.initNoMajorGlitches();

	if(this.buildLocations) {
		this.locations["Spiral Cave"].minorGlitches =
		this.locations["Paradox Cave"].minorGlitches = function() {
			return true;
		}
		this.locations["Floating Island"].minorGlitches = function() {
			let ret = this.glitchless();

			if(ret) {
				return ret;
			}

			return "glitchviewable";
		}
	}
	this.canEnter.minorGlitches = function() {
		let ret = this.glitchless();
		let wdm = new DeathMountainWest("","",false);
		wdm.initMinorGlitches();

		if(ret) {
			return ret;
		}
		if(wdm.canEnter.minorGlitches()
			&& ((has("hammer") && has("mirror"))
			|| canGrapple())) {
			return wdm.canEnter.minorGlitches();
		}
	}
  }

  initOverworldGlitches() {
    this.initMinorGlitches();

	if(this.buildLocations) {
	    this.locations["Mimic Cave"].owGlitches = function() {
			let edwdm = new DarkWorldDeathMountainEast("","",false);
			edwdm.initOverworldGlitches();

			return has("hammer") && has("mirror")
				&& edwdm.canEnter.owGlitches();
		}
		this.locations["Floating Island"].owGlitches = function() {
			let edwdm = new DarkWorldDeathMountainEast("","",false);
			edwdm.initOverworldGlitches();

			return canDash()
				|| (has("mirror") && has("moonpearl")
					&& canLiftRocks() && edwdm.canEnter.owGlitches());
		}
	}

    this.canEnter.owGlitches = function() {
		let wdm = new DeathMountainWest("","",false);
		wdm.initOverworldGlitches();

		return (canDash()
			|| ((canGrapple() || has("mirror"))
				&& wdm.canEnter.owGlitches()));
    }
  }

  initmajorGlitches() {
	this.initOverworldGlitches();

	if(this.buildLocations) {
		this.locations["Floating Island"].majorGlitches = function() {
			let edwdm = new DarkWorldDeathMountainEast("","",false);
			edwdm.initmajorGlitches();

			return canDash()
				|| (has("mirror") && glitchedLinkInDarkWorld()
					&& canLiftRocks() && edwdm.canEnter.majorGlitches());
		}
	}
  }
}
