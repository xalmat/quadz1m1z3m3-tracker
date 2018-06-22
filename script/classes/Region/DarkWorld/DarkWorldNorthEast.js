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
			new Location("Chest","Pyramid Fairy","73.5%","48.5%",regionName,{equipment:"%%crystal5%%%%crystal6%%"}),
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
		return (has("agahnim")
			|| (has("hammer") && canLiftDarkRocks() && has("moonpearl"))
			|| (canLiftDarkRocks() && canSwim() && has("moonpearl"))
			|| (canAccessDarkWorldPortal() && canSwim() && has("moonpearl")));
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

  initOverworldGlitches() {
	  this.initNoMajorGlitches();

	if(this.buildLocations) {
		  this.locations["Catfish"].owglitches = function() {
			  return has("moonpearl")
			  	&& (canLiftDarkRocks() || canDash());
		  }
//		this.locations["Pyramid Fairy - Left"].owglitches =
//		this.locations["Pyramid Fairy - Right"].owglitches = function() {
		this.locations["Pyramid Fairy"].owglitches = function() {
			  let sdw = new DarkWorldSouth("","",false);
			  sdw.initOverworldGlitches();

			  return (has("mirror") && canSpinSpeed())
			  	|| has("crystal5") && has("crystal6")	// FIXME: Need items for Crystals 5 & 6
			  		&& sdw.canEnter.owglitches()
			  			&& ((has("hammer") && has("moonpearl"))
			  				|| (has("mirror") && has("agahnim")));
		  }
	  }

	  this.canEnter.owglitches = function() {
		  let wdm = new DeathMountainWest("","",false);
		  wdm.initOverworldGlitches();

		  return (has("agahnim")
		  	|| (has("moonpearl")
		  		&& ((canLiftDarkRocks() && (canDash() || canSwim()))
		  			|| (has("hammer") && canLiftRocks())))
		  	|| (((has("mirror") && canSpinSpeed())
		  		|| (has("moonpearl") && (has("mirror") || canDash())))
		  			&& wdm.canEnter.owglitches()));
	  }
  }

  initMajorGlitches() {
	  this.initOverworldGlitches();

	if(this.buildLocations) {
		  this.locations["Catfish"].majorglitches = function() {
			  return glitchedLinkInDarkWorld()
			  	&& (canLiftRocks() || canDash());
		  }
//		this.locations["Pyramid Fairy - Left"].majorglitches =
//		this.locations["Pyramid Fairy - Right"].majorglitches = function() {
		this.locations["Pyramid Fairy"].majorglitches = function() {
			  let sdw = new DarkWorldSouth("","",false);
			  sdw.initMajorGlitches();

			  return (has("mirror") && canSpinSpeed())
			  	|| (has("crystal5") && has("crystal6")
			  		&& sdw.canEnter.majorglitches()
			  			&& ((has("hammer") && glitchedLinkInDarkWorld())
			  				|| (has("mirror") && has("agahnim"))));
		  }
	  }

	  this.canEnter.majorglitches = function() {
		  let wdm = new DeathMountainWest("","",false);
		  wdm.initMajorGlitches();

		  return (has("agahnim")
		  	|| (has("moonpearl")
		  		&& ((canLiftDarkRocks() && (canDash() || canSwim()))
		  			|| (has("hammer") && canLiftRocks())))
		  	|| ((has("bottle")
		  		|| (has("mirror") && canSpinSpeed())
		  		|| (has("moonpearl") && (has("mirror") || canDash())))
		  			&& wdm.canEnter.majorglitches()))
	  }
  }
}
