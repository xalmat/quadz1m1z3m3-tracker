class DarkWorldMire extends DarkWorld {
  constructor(name = "DarkWorld", subname = "Mire") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chest","Mire Shed - Left","51.7%","79.5%",regionName),
		new Location("Chest","Mire Shed - Right","51.7%","79.5%",regionName),
	],this);
  }

  initNoMajorGlitches() {
	this.locations["Mire Shed - Left"].glitchless =
	this.locations["Mire Shed - Right"].glitchless = function() {
		return has("moonpearl");
	}

	this.canEnter.glitchless = function() {
		return ((canFly() && canLiftDarkRocks()) || canAccessMiseryMirePortal());
	}
  }

  initOverworldGlitches() {
	this.locations["Mire Shed - Left"].owglitches =
	this.locations["Mire Shed - Right"] = function() {
		return has("moonpearl") || has("mirror");
	}

	this.canEnter.owglitches = function() {
		var sdw = new DarkWorldSouth();
		sdw.initOverworldGlitches();

		return ((canLiftDarkRocks() && (canFly() || canDash()))
			|| (has("moonpearl") && canDash()
				&& sdw.canEnter.owglitches()));
	}
  }

  initMajorGlitches() {
	var wdm = new DeathMountainWest();
	wdm.initMajorGlitches();
	var sdw = new DarkWorldSouth();
	sdw.initMajorGlitches();

	this.canEnter.majorglitches = function() {
		return ((has("bottle") && wdm.canEnter.majorglitches())
			|| (canLiftDarkRocks() && (canFly() || has("bottle") || canDash()))
			|| glitchedLinkInDarkWorld() && canDash()
				&& sdw.canEnter.majorglitches()));
	}
  }
}
