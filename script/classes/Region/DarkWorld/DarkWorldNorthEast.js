class DarkWorldNorthEast extends DarkWorld {
  constructor(name = "DarkWorld", subname = "NorthEast", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("NPC","Catfish","96.0%","17.2%",regionName),
			new Location("Standing","Pyramid","79.0%","43.5%",regionName),
//			new Location("Chest","Pyramid Fairy - Left","73.5%","48.5%",regionName),
//			new Location("Chest","Pyramid Fairy - Right","73.5%","48.5%",regionName),
			new Location("Chest","Pyramid Fairy","73.5%","48.5%",regionName,{equipment:"%%crystal5%%%%crystal6%%%%bomb2%%"}),
//			new Location("Event","Ganon","75.0%","40.0%",regionName)
			new Location("Boss","Ganon","","",regionName)
		],this);
	}
  }

  initNoMajorGlitches() {
	if(this.buildLocations) {
		this.locations["Catfish"].glitchless = function() {
			return has("moonpearl") && canLiftRocks();
		}
//		this.locations["Pyramid Fairy - Left"].glitchless =
//		this.locations["Pyramid Fairy - Right"].glitchless = function() {
		this.locations["Pyramid Fairy"].glitchless = function() {
			let sdw = new DarkWorldSouth("","",false);
			sdw.initNoMajorGlitches();

			return has("crystal5") && has("crystal6") && has("moonpearl")	// FIXME: Need items for Crystals 5 & 6
				&& sdw.canEnter.glitchless()
					&& (has("hammer")
						|| (has("mirror") && has("agahnim")));
		}
	}

	this.canEnter.glitchless = function() {
		return (has("agahnim")													// Castle Gate Warp
			|| (has("hammer") && canLiftRocks() && has("moonpearl"))			// Swamp Warp
			|| (canLiftDarkRocks() && canSwim() && has("moonpearl"))			// Kakariko Warp, swim across east river
			|| (canAccessDarkWorldPortal() && canSwim() && has("moonpearl")));	// From Maridia, swim through lake
	}

	this.canComplete.glitchless = function() {
		return ((! has("config.requireBetterBow")) || canShootArrows(2))	// FIXME: Silvers required in Swordless
			&& (
				(hasSword())					// FIXME: Swordless
					|| ((! has("config.requireBetterSword")) &&			// FIXME: No swords in Swordless
						(hasSword(2) && (has("lantern") || (has("firerod") && canExtendMagic(3)))))
					|| (hasSword(3) && (has("lantern") || (has("firerod") && canExtendMagic(2))))
				);

	}
  }

  initMinorGlitches() {
	this.initNoMajorGlitches();

	if(this.buildLocations) {
//		this.locations["Pyramid Fairy - Left"].minorGlitches =
//		this.locations["Pyramid Fairy - Right"].minorGlitches = function() {
		this.locations["Pyramid Fairy"].minorGlitches = function() {
			let sdw = new DarkWorldSouth("","",false);
			sdw.initMinorGlitches();

			let ret = this.glitchless();

			if(ret) {
				return ret;
			}

			let aga1 = canBeatAga1("minor");

			if(has("crystal5") && has("crystal6") && has("moonpearl")	// FIXME: Need items for Crystals 5 & 6
				&& sdw.canEnter.minorGlitches()
					&& (has("hammer")
						|| (has("mirror") && aga1))) {
				return aga1;
			}
		}
	}

	this.canEnter.minorGlitches = function() {
		let ret = this.glitchless();

		if(ret) {
			return ret;
		}

		let aga1 = canBeatAga1("minor");
		if(aga1																	// Castle Gate Warp
			|| (has("hammer") && canLiftRocks() && has("moonpearl"))			// Swamp Warp
			|| (canLiftDarkRocks() && canSwim() && has("moonpearl"))			// Kakariko Warp, swim across east river
			|| (canAccessDarkWorldPortal() && canSwim() && has("moonpearl"))) {	// From Maridia, swim through lake
			if(aga1) {
				return aga1;
			} else {
				return "glitchavailable";
			}
		}
	}
  }

  initOverworldGlitches() {
	this.initMinorGlitches();

	if(this.buildLocations) {
		  this.locations["Catfish"].owGlitches = function() {
			  return has("moonpearl")
			  	&& (canLiftDarkRocks() || canDash());
		  }
//		this.locations["Pyramid Fairy - Left"].owGlitches =
//		this.locations["Pyramid Fairy - Right"].owGlitches = function() {
		this.locations["Pyramid Fairy"].owGlitches = function() {
			  let sdw = new DarkWorldSouth("","",false);
			  sdw.initOverworldGlitches();

			  return (has("mirror") && canSpinSpeed())
			  	|| has("crystal5") && has("crystal6")	// FIXME: Need items for Crystals 5 & 6
			  		&& sdw.canEnter.owGlitches()
			  			&& ((has("hammer") && has("moonpearl"))
			  				|| (has("mirror") && has("agahnim")));
		  }
	  }

	  this.canEnter.owGlitches = function() {
		  let wdm = new DeathMountainWest("","",false);
		  wdm.initOverworldGlitches();

		  return (has("agahnim")
		  	|| (has("moonpearl")
		  		&& ((canLiftDarkRocks() && (canDash() || canSwim()))
		  			|| (has("hammer") && canLiftRocks())))
		  	|| (((has("mirror") && canSpinSpeed())
		  		|| (has("moonpearl") && (has("mirror") || canDash())))
		  			&& wdm.canEnter.owGlitches()));
	  }
  }

  initmajorGlitches() {
	  this.initOverworldGlitches();

	if(this.buildLocations) {
		  this.locations["Catfish"].majorGlitches = function() {
			  return glitchedLinkInDarkWorld()
			  	&& (canLiftRocks() || canDash());
		  }
//		this.locations["Pyramid Fairy - Left"].majorGlitches =
//		this.locations["Pyramid Fairy - Right"].majorGlitches = function() {
		this.locations["Pyramid Fairy"].majorGlitches = function() {
			  let sdw = new DarkWorldSouth("","",false);
			  sdw.initmajorGlitches();

			  return (has("mirror") && canSpinSpeed())
			  	|| (has("crystal5") && has("crystal6")
			  		&& sdw.canEnter.majorGlitches()
			  			&& ((has("hammer") && glitchedLinkInDarkWorld())
			  				|| (has("mirror") && has("agahnim"))));
		  }
	  }

	  this.canEnter.majorGlitches = function() {
		  let wdm = new DeathMountainWest("","",false);
		  wdm.initmajorGlitches();

		  return (has("agahnim")
		  	|| (has("moonpearl")
		  		&& ((canLiftDarkRocks() && (canDash() || canSwim()))
		  			|| (has("hammer") && canLiftRocks())))
		  	|| ((has("bottle")
		  		|| (has("mirror") && canSpinSpeed())
		  		|| (has("moonpearl") && (has("mirror") || canDash())))
		  			&& wdm.canEnter.majorGlitches()))
	  }
  }
}
