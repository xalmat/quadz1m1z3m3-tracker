class DeathMountainWest extends DeathMountain {
  constructor(name = "DeathMountain", subname = "West", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("NPC","Old Man","20.8%","20.4%",regionName),
			new Location("Standing","Spectacle Rock Cave","24.3%","14.8%",regionName),
			new Location("Tablet","Ether Tablet","21.0%","3.0%",regionName,{equipment:"%%sword2%%%%book%%"}),
			new Location("Standing","Spectacle Rock","25.4%","8.5%",regionName,{equipment:"%%mirror%%"})
		],this);
	}
  }

  initNoMajorGlitches() {
	if(this.buildLocations) {
		this.locations["Old Man"].glitchless = function() {
			return has("lantern");
		}
		this.locations["Ether Tablet"].glitchless = function() {
			return canActivateTablets()
				&& (has("mirror") || (has("hammer") && canGrapple()));
		}
		this.locations["Spectacle Rock"].glitchless = function() {
			return has("mirror");
		}
	}

	this.canEnter.glitchless = function() {
		return (canFly()
			|| (canLiftRocks() && has("lantern"))
			|| canAccessDeathMountainPortal());
	}
  }

  initMinorGlitches() {
	this.initNoMajorGlitches();

	if(this.buildLocations) {
		this.locations["Old Man"].minorGlitches = function() {
			let ret = this.glitchless();

			if(ret) {
				return ret;
			}
			if(canDarkNav()) {
				return "glitchavailable";
			}
		}
		this.locations["Ether Tablet"].minorGlitches = function() {
			let ret = this.glitchless();

			if(ret) {
				return ret;
			}
			if(canDarkNav() && has("mirror")) {
				if(canActivateTablets()) {
					return "glitchavailable";
				}
				if(canRead()) {
					return "glitchviewable";
				}
			}
		}
		this.locations["Spectacle Rock"].minorGlitches = function() {
			let ret = this.glitchless();

			if(ret) {
				return ret;
			}
			if(canDarkNav()) {
				return "glitchviewable";
			}
		}
	}

	this.canEnter.minorGlitches = function() {
		let ret = this.glitchless();

		if(ret) {
			return ret;
		}
		if(canLiftRocks() && canDarkNav()) {
			return "glitchavailable";
		}
	}
  }

  initOverworldGlitches() {
    this.initMinorGlitches();

	if(this.buildLocations) {
	    this.locations["Ether Tablet"].owGlitches = function() {
			let toh = new DungeonsTowerOfHera("","",false);
			toh.canEnter.owGlitches();

			return canActivateTablets()
				&& toh.canEnter.owGlitches();
	    }
	    this.locations["Spectacle Rock"].owGlitches = function() {
			return canDash()
				|| has("mirror");
	    }
	}

    this.canEnter.owGlitches = function() {
		return (canDash()
			|| canFly() || (canLiftRocks() && has("lantern")));
    }
  }

  initmajorGlitches() {
	this.initOverworldGlitches();

	this.canEnter.majorGlitches = function() {
		return (canDashSM() || has("bottle")
			|| canFly() || (canLiftRocks() && has("lantern")));
	}
  }
}
