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
			new Location("Chest","Pyramid Fairy","73.5%","48.5%",regionName,{equipment:"%%crystal5%%%%crystal6%%%%bomb2%%"})
		],this);
	}
  }

  initNoMajorGlitches() {
	let region = this;

	if(this.buildLocations) {
		this.locations["Catfish"].glitchless = function() {
			return (! isBunny(region.name)) && canLiftRocks();
		}
//		this.locations["Pyramid Fairy - Left"].glitchless =
//		this.locations["Pyramid Fairy - Right"].glitchless = function() {
		this.locations["Pyramid Fairy"].glitchless = function() {
			let sdw = new DarkWorldSouth("","",false);
			sdw.initNoMajorGlitches();

			return has("crystal5") && has("crystal6") && (! isBunny(region.name))
				&& sdw.canEnter.glitchless()
					&& (has("hammer")
						|| (has("mirror") && has("agahnim")));
		}
	}

	this.canEnter.glitchless = function() {
		if(! has("state.inverted")) {
			let warps = new HyruleWarpsMain();
			warps.initNoMajorGlitches();

			return (warps.locations["Castle Gate (Dark)"].glitchless()							// Castle Gate Warp
				|| warps.locations["South Hyrule Teleporter (Dark)"].glitchless()				// Swamp Warp
				|| (warps.locations["Kakariko Teleporter (Dark)"].glitchless() && canSwim())	// Kakariko Warp, swim across east river
				|| (canAccessDarkWorldPortal() && canSwim() && (! isBunny(region.name))));		// From Maridia, swim through lake
		} else if(has("state.inverted")) {
			return has("hammer") ||									// From Link's House
				(canSwim() && (has("hammer") || canLiftRocks()));	// From Dark Sanctuary
		}
	}

	this.canComplete.glitchless = function() {
		return ((! has("config.requireBetterBow")) || canShootArrows(2))	// FIXME: Silvers required in Swordless
			&& (
				(hasSword())
					|| ((! has("config.requireBetterSword")) &&			// FIXME: No swords in Swordless
						(hasSword(2) && (has("lantern") || (has("firerod") && canExtendMagic(3)))))
					|| (hasSword(3) && (has("lantern") || (has("firerod") && canExtendMagic(2))))
				);

	}
  }

  initMinorGlitches() {
	let region = this;

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

			if(has("crystal5") && has("crystal6") && (! isBunny(region.name))
				&& sdw.canEnter.minorGlitches()
					&& (has("hammer")
						|| (has("mirror") && aga1))) {
				return aga1;
			}
		}
	}

	this.canEnter.minorGlitches = function() {
		let region = this;

		let ret = this.glitchless();

		if(ret) {
			return ret;
		}

		if(! has("state.inverted")) {
			let warps = new HyruleWarpsMain();
			warps.initNoMajorGlitches();
			let aga1 = canBeatAga1("minor") || warps.locations["Castle Gate (Dark)"].glitchless();

			if(aga1																				// Castle Gate Warp
				|| warps.locations["South Hyrule Teleporter (Dark)"].glitchless()				// Swamp Warp
				|| (warps.locations["Kakariko Teleporter (Dark)"].glitchless() && canSwim())	// Kakariko Warp, swim across east river
				|| (canAccessDarkWorldPortal() && canSwim() && (! isBunny(region.name)))) {		// From Maridia, swim through lake
				if(aga1) {
					return aga1;
				} else {
					return "glitchavailable";
				}
			}
		} else if(has("state.inverted")) {
			return canFly()												// Flute to DW 2 or DW 5
				|| has("hammer")										// From Link's House
				|| (canSwim() && (has("hammer") || canLiftRocks()));	// From Dark Sanctuary
		}
	}
  }

  initOverworldGlitches() {
	let region = this;

	this.initMinorGlitches();

	if(this.buildLocations) {
		  this.locations["Catfish"].owGlitches = function() {
			  return (! isBunny(region.name))
			  	&& (canLiftDarkRocks() || canDash());
		  }
//		this.locations["Pyramid Fairy - Left"].owGlitches =
//		this.locations["Pyramid Fairy - Right"].owGlitches = function() {
		this.locations["Pyramid Fairy"].owGlitches = function() {
			  let sdw = new DarkWorldSouth("","",false);
			  sdw.initOverworldGlitches();

			  return (has("mirror") && canSpinSpeed())
			  	|| has("crystal5") && has("crystal6")
			  		&& sdw.canEnter.owGlitches()
			  			&& ((has("hammer") && (! isBunny(region.name)))
			  				|| (has("mirror") && has("agahnim")));
		  }
	  }

	  this.canEnter.owGlitches = function() {
		  let wdm = new DeathMountainWest("","",false);
		  wdm.initOverworldGlitches();

		  return (has("agahnim")
		  	|| ((! isBunny(region.name))
		  		&& ((canLiftDarkRocks() && (canDash() || canSwim()))
		  			|| (has("hammer") && canLiftRocks())))
		  	|| (((has("mirror") && canSpinSpeed())
		  		|| ((! isBunny(region.name)) && (has("mirror") || canDash())))
		  			&& wdm.canEnter.owGlitches()));
	  }
  }

  initMajorGlitches() {
	  let region = this;

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
			  sdw.initMajorGlitches();

			  return (has("mirror") && canSpinSpeed())
			  	|| (has("crystal5") && has("crystal6")
			  		&& sdw.canEnter.majorGlitches()
			  			&& ((has("hammer") && glitchedLinkInDarkWorld())
			  				|| (has("mirror") && has("agahnim"))));
		  }
	  }

	  this.canEnter.majorGlitches = function() {
		  let wdm = new DeathMountainWest("","",false);
		  wdm.initMajorGlitches();

		  return (has("agahnim")
		  	|| ((! isBunny(region.name))
		  		&& ((canLiftDarkRocks() && (canDash() || canSwim()))
		  			|| (has("hammer") && canLiftRocks())))
		  	|| ((has("bottle")
		  		|| (has("mirror") && canSpinSpeed())
		  		|| ((! isBunny(region.name)) && (has("mirror") || canDash())))
		  			&& wdm.canEnter.majorGlitches()))
	  }
  }
}
