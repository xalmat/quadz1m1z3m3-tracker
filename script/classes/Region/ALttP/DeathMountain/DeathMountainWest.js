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
	let region = this;

	if(this.buildLocations) {
		this.locations["Old Man"].glitchless = function() {
			return has("lantern");
		}
		this.locations["Ether Tablet"].glitchless = function() {
			if(has("state.inverted")) {
				let warps = new HyruleWarpsMain();
				warps.initNoMajorGlitches();

				// Bunny can't activate tablets
				return warps.locations["Turtle Rock Teleporter (Light)"].glitchless()
					&& !isBunny(region.name,region.subname)
					&& canActivateTablets();
			} else {
				return canActivateTablets()
					&& (has("mirror") || (has("hammer") && canGrapple()));
			}
		}
		this.locations["Spectacle Rock"].glitchless = function() {
			if(has("state.inverted")) {
				let warps = new HyruleWarpsMain();
				warps.initNoMajorGlitches();

				return warps.locations["Turtle Rock Teleporter (Light)"].glitchless();
			} else {
				return has("mirror");
			}
		}
	}

	this.canEnter.glitchless = function() {
		if(has("state.inverted")) {
			// Entrance is at DW Bumper Cave entrance
			// Walking in transports you to Lost Old Man's cave
			// Picking up Lost Old Man and exiting his cave
			//  pops you out onto DW Death Mountain
			// Traverse DW Death Mountain to warp to
			//  Light World Death Mountain
			// Bring Lost Old Man to his house to
			//  become Found Old Man
			return has("lantern") && canLiftRocks();
		} else {
			return (canFly()
				|| (canLiftRocks() && has("lantern"))
				|| canAccessDeathMountainPortal());
		}
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

			let warps = new HyruleWarpsMain();
			warps.initNoMajorGlitches();

			// Not Inverted
			let notInvertedAccess = !has("state.inverted");

			// Yes Inverted
			let invertedAccess = has("state.inverted") && warps.locations["Turtle Rock Teleporter (Light)"].glitchless();

			// Mirror requirement
			let mirror = has("mirror") || has("state.inverted");

			// If we have access
			if(notInvertedAccess || invertedAccess) {
				// Bunny can't get here
				if(!isBunny(region.name,region.subname)) {
					if(mirror) {
						if(canActivateTablets()) {
							if(canDarkNav()) {
								return "glitchavailable";
							} else if(has("lantern")) {
								return "available";
							}
						}
						if(canRead()) {
							if(canDarkNav()) {
								return "glitchviewable";
							} else if(has("lantern")) {
								return "viewable";
							}
						}
					}
				}
			}
		}
		this.locations["Spectacle Rock"].minorGlitches = function() {
			let ret = this.glitchless();

			if(ret) {
				return ret;
			}
			if(has("lantern")) {
				return "viewable";
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

  initMajorGlitches() {
	this.initOverworldGlitches();

	this.canEnter.majorGlitches = function() {
		return (canDashSM() || has("bottle")
			|| canFly() || (canLiftRocks() && has("lantern")));
	}
  }
}
