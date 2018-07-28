class DarkWorldNorthWest extends DarkWorld {
  constructor(name = "DarkWorld", subname = "NorthWest", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("Chest","Brewery","55.4%","57.8%",regionName,{equipment:"%%bomb%%"}),
			new Location("Chest","C-Shaped House","60.8%","47.9%",regionName),
			new Location("Chest","Chest Game","52.1%","46.4%",regionName,{equipment:"- 30 Rupees"}),
			new Location("Standing","Hammer Pegs","65.8%","60.1%",regionName,{equipment:"%%hammer%%".repeat(8) + "!".repeat(8)}),
			new Location("Standing","Bumper Cave","67.1%","15.2%",regionName,{equipment:"%%cape%%"}),
			new Location("NPC","Blacksmith","15.2%","51.8%",regionName,{equipment:"(%%mirror%% or save and quit)"}),
			new Location("NPC","Purple Chest","65.2%","52.2%",regionName,{equipment:"(%%mirror%% or save and quit)"})
		],this);
	}
  }

  initNoMajorGlitches() {
	if(this.buildLocations) {
		this.locations["Hammer Pegs"].glitchless = function() {
			return canLiftDarkRocks() && has("hammer");
		}
		this.locations["Bumper Cave"].glitchless = function() {
			return canLiftRocks() && has("cape");
		}
		this.locations["Blacksmith"].glitchless =
		this.locations["Purple Chest"].glitchless = function() {
			return canLiftDarkRocks();
		}
	}

	this.canEnter.glitchless = function() {
		let nedw = new DarkWorldNorthEast("","",false);
		nedw.initNoMajorGlitches();

		return has("moonpearl")
			&& ((nedw.canEnter.glitchless()
				&& (canGrapple() && (canSwim() || canLiftRocks() || has("hammer"))))
				|| (has("hammer") && canLiftRocks())
				|| canLiftDarkRocks());
	}
  }

  initMinorGlitches() {
	this.initNoMajorGlitches();

	if(this.buildLocations) {
		this.locations["Bumper Cave"].minorGlitches = function() {
			let ret = this.glitchless();

			if(ret) {
				return ret;
			}

			if(has("agahnim")) {
				return "viewable";
			}
		}
	}

	this.canEnter.minorGlitches = function() {
		let ret = this.glitchless();

		if(ret) {
			return ret;
		}

		let nedw = new DarkWorldNorthEast("","",false);
		nedw.initMinorGlitches();

		if(has("moonpearl")
			&& ((nedw.canEnter.minorGlitches()
				&& (canGrapple() && (canSwim() || canLiftRocks() || has("hammer"))))
				|| (has("hammer") && canLiftRocks())
				|| canLiftDarkRocks())) {
			return nedw.canEnter.minorGlitches();
		}
	}
  }

  initOverworldGlitches() {
	this.initMinorGlitches();

	if(this.buildLocations) {
		let locations = this.locations;

		this.locations["Brewery"].owGlitches = function() {
			return has("moonpearl");
		}
		this.locations["Hammer Pegs"].owGlitches = function() {
			let nedw = new DarkWorldNorthEast("","",false);
			nedw.initOverworldGlitches();

			return has("hammer") && has("moonpearl")
				&& (canLiftDarkRocks()
					|| (canDash()
						&& nedw.canEnter.owGlitches()));
		}
		this.locations["Bumper Cave"].owGlitches = function() {
			return has("moonpearl")
				&& (canDash()
					|| (canLiftRocks() && has("cape")));
		}
		this.locations["Blacksmith"].owGlitches = function() {
			return has("moonpearl") && canLiftDarkRocks();
		}
		this.locations["Purple Chest"].owGlitches = function() {
			let nedw = new DarkWorldNorthEast("","",false);
			nedw.initOverworldGlitches();

			return locations["Blacksmith"].owGlitches()
				&& (has("moonpearl")
					&& (canLiftDarkRocks()
						|| (canDash()
						&& nedw.canEnter.owGlitches())));
		}
	}

	  this.canEnter.owGlitches = function() {
		  let wdm = new DeathMountainWest("","",false);
		  wdm.initOverworldGlitches();

		  return ((has("moonpearl")
		  	&& (canLiftDarkRocks()
		  		|| (has("hammer") && canLiftRocks())
		  		|| (has("agahnim") && canGrapple()
		  			&& (has("hammer") || canLiftRocks() || canSwim()))))
		  	|| ((has("mirror") || (canDash() && has("moonpearl")))
		  		&& wdm.canEnter.owGlitches()));
	  }
  }

  initMajorGlitches() {
	  this.initOverworldGlitches();

	if(this.buildLocations) {
		  let locations = this.locations;

		  this.locations["Brewery"].majorGlitches = function() {
			  return glitchedLinkInDarkWorld();
		  }
		  this.locations["Hammer Pegs"].majorGlitches = function() {
			  return has("hammer") && glitchedLinkInDarkWorld();
		  }
		  this.locations["Bumper Cave"].majorGlitches = function() {
			  return glitchedLinkInDarkWorld()
			  	&& (canDash()
			  		|| (canLiftRocks() && has("cape")));
		  }
		  this.locations["Blacksmith"].majorGlitches = function() {
			  return glitchedLinkInDarkWorld() && canLiftDarkRocks();
		  }
		  this.locations["Purple Chest"].majorGlitches = function() {
			  let nedw = new DarkWorldNorthEast("","",false);
			  nedw.initMajorGlitches();

			  return locations["Blacksmith"].majorGlitches()
			  	&& (has("mirror")
			  		|| (glitchedLinkInDarkWorld() && canLiftDarkRocks())
			  		|| (canDash() && glitchedLinkInDarkWorld()
			  			&& nedw.canEnter.majorGlitches()));
		  }
	  }

	  this.canEnter.majorGlitches = function() {
		  let wdm = new DeathMountainWest("","",false);
		  wdm.initMajorGlitches();

		  return ((has("moonpearl")
		  	&& (canLiftDarkRocks()
		  		|| (has("hammer") && canLiftRocks())
		  		|| (has("agahnim") && canGrapple()
		  			&& (has("hammer") || canLiftRocks() || canSwim()))))
		  	|| wdm.canEnter.majorGlitches());
	  }
  }
}
