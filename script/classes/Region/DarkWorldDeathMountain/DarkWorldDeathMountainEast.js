class DarkWorldDeathMountainEast extends DarkWorldDeathMountain {
  constructor(name = "DarkWorldDeathMountain", subname = "East") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chest","Superbunny Cave - Top","92.8%","14.7%",regionName),
		new Location("Chest","Superbunny Cave - Bottom","92.8%","14.7%",regionName),
		new Location("Chest","Hookshot Cave - Top Right","91.6%","3.4%",regionName),
		new Location("Chest","Hookshot Cave - Top Left","91.6%","3.4%",regionName),
		new Location("Chest","Hookshot Cave - Bottom Left","91.6%","3.4%",regionName),
		new Location("Chest","Hookshot Cave - Bottom Right","91.6%","8.6%",regionName)
	],this);
  }

  initNoMajorGlitches() {
	this.locations["Superbunny Cave - Top"].glitchless =
	this.locations["Superbunny Cave - Bottom"].glitchless = function() {
		return has("moonpearl");
	}
	this.locations["Hookshot Cave - Top Right"].glitchless =
	this.locations["Hookshot Cave - Top Left"].glitchless =
	this.locations["Hookshot Cave - Bottom Left"].glitchless = function() {
		return has("moonpearl") && canGrapple();
	}
	this.locations["Hookshot Cave - Bottom Right"].glitchless = function() {
		return has("moonpearl") && (canGrapple() || canDash());
	}

	this.canEnter.glitchless = function() {
		var edm = new DeathMountainEast();
		edm.initNoMajorGlitches();

		return canLiftDarkRocks()
			&& edm.canEnter.glitchless();
	}
  }

  initOverworldGlitches() {
	this.locations["Hookshot Cave - Top Right"].owglitches =
	this.locations["Hookshot Cave - Top Left"].owglitches =
	this.locations["Hookshot Cave - Bottom Left"].owglitches = function() {
		return canLiftRocks() && has("moonpearl") && canGrapple();
	}
	this.locations["Hookshot Cave - Bottom Right"].owglitches = function() {
		return canLiftRocks() && has("moonpearl") && (canGrapple() || canDash());
	}

	this.canEnter.owglitches = function() {
		var wdm = new DeathMountainWest();
		wdm.initOverworldGlitches();
		var edm = new DeathMountainEast();
		edm.initOverworldGlitches();

		return ((canDash() && has("moonpearl"))
			|| (has("mirror") && wdm.canEnter.owglitches())
			|| ((canLiftDarkRocks() || (has("hammer") && canDash()))
				&& edm.canEnter.owglitches()));
	}
  }

  initMajorGlitches() {
	initOverworldGlitches();

	this.canEnter.majorglitches = function() {
		var edm = new DeathMountainEast();
		edm.initMajorGlitches();
		var wdm = new DeathMountainWest();
		wdm.initMajorGlitches();

		return ((has("moonpearl") || (has("bottle") && canDash()))
			|| ((canLiftDarkRocks() || (has("hammer") && canDash()))
				&& edm.canEnter.majorglitches())
			|| (has("mirror") && wdm.canEnter.majorglitches()));
	}
  }
}
