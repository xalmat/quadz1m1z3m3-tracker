class DarkWorldDeathMountainEast extends DarkWorldDeathMountain {
  constructor(name = "DarkWorldDeathMountain", subname = "East") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
//		new Location("Chest","Superbunny Cave - Top","92.8%","14.7%",regionName),
//		new Location("Chest","Superbunny Cave - Bottom","92.8%","14.7%",regionName),
		new Location("Chest","Superbunny Cave","92.8%","14.7%",regionName,{equipment:"(2)"}),
//		new Location("Chest","Hookshot Cave - Top Right","91.6%","3.4%",regionName,{equipment:"%%hookshot%%"}),
//		new Location("Chest","Hookshot Cave - Top Left","91.6%","3.4%",regionName,{equipment:"%%hookshot%%"}),
//		new Location("Chest","Hookshot Cave - Bottom Left","91.6%","3.4%",regionName,{equipment:"%%hookshot%%"}),
//		new Location("Chest","Hookshot Cave - Bottom Right","91.6%","8.6%",regionName,{equipment:"%%hookshot%%/%%boots%%"})
		new Location("Chest","Hookshot Cave","91.6%","3.4%",regionName,{equipment:"(3) %%hookshot%%"}),
		new Location("Chest","Hookshot Cave - Bonk Chest","91.6%","8.6%",regionName,{equipment:"%%hookshot%%/%%boots%%"})
	],this);
  }

  initNoMajorGlitches() {
//	this.locations["Superbunny Cave - Top"].glitchless =
//	this.locations["Superbunny Cave - Bottom"].glitchless = function() {
	this.locations["Superbunny Cave"].glitchless = function() {
		return has("moonpearl");
	}
//	this.locations["Hookshot Cave - Top Right"].glitchless =
//	this.locations["Hookshot Cave - Top Left"].glitchless =
//	this.locations["Hookshot Cave - Bottom Left"].glitchless = function() {
	this.locations["Hookshot Cave"].glitchless = function() {
		return has("moonpearl") && canGrapple();
	}
//	this.locations["Hookshot Cave - Bottom Right"].glitchless = function() {
	this.locations["Hookshot Cave - Bonk Chest"].glitchless = function() {
		return has("moonpearl") && (canGrapple() || canDash());
	}

	this.canEnter.glitchless = function() {
		let edm = new DeathMountainEast();
		edm.initNoMajorGlitches();

		return canLiftDarkRocks()
			&& edm.canEnter.glitchless();
	}
  }

  initOverworldGlitches() {
	this.initNoMajorGlitches();

//	this.locations["Hookshot Cave - Top Right"].owglitches =
//	this.locations["Hookshot Cave - Top Left"].owglitches =
//	this.locations["Hookshot Cave - Bottom Left"].owglitches = function() {
	this.locations["Hookshot Cave"].owglitches = function() {
		return canLiftRocks() && has("moonpearl") && canGrapple();
	}
//	this.locations["Hookshot Cave - Bottom Right"].owglitches = function() {
	this.locations["Hookshot Cave - Bonk Chest"].owglitches = function() {
		return canLiftRocks() && has("moonpearl") && (canGrapple() || canDash());
	}

	this.canEnter.owglitches = function() {
		let wdm = new DeathMountainWest();
		wdm.initOverworldGlitches();
		let edm = new DeathMountainEast();
		edm.initOverworldGlitches();

		return ((canDash() && has("moonpearl"))
			|| (has("mirror") && wdm.canEnter.owglitches())
			|| ((canLiftDarkRocks() || (has("hammer") && canDash()))
				&& edm.canEnter.owglitches()));
	}
  }

  initMajorGlitches() {
	this.initOverworldGlitches();

	this.canEnter.majorglitches = function() {
		let edm = new DeathMountainEast();
		edm.initMajorGlitches();
		let wdm = new DeathMountainWest();
		wdm.initMajorGlitches();

		return ((has("moonpearl") || (has("bottle") && canDash()))
			|| ((canLiftDarkRocks() || (has("hammer") && canDash()))
				&& edm.canEnter.majorglitches())
			|| (has("mirror") && wdm.canEnter.majorglitches()));
	}
  }
}
