class DarkWorldSouth extends DarkWorld {
  constructor(name = "DarkWorld", subname = "South") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
//		new Location("Chest","Hype Cave - Top","80.0%","77.1%",regionName,{equipment:"%%bomb%% (NPC + 4 %%bomb%%)"}),
//		new Location("Chest","Hype Cave - Middle Right","80.0%","77.1%",regionName,{equipment:"%%bomb%% (NPC + 4 %%bomb%%)"}),
//		new Location("Chest","Hype Cave - Middle Left","80.0%","77.1%",regionName,{equipment:"%%bomb%% (NPC + 4 %%bomb%%)"}),
//		new Location("Chest","Hype Cave - Bottom","80.0%","77.1%",regionName,{equipment:"%%bomb%% (NPC + 4 %%bomb%%)"}),
		new Location("NPC","Stumpy","65.5%","68.6%",regionName),
//		new Location("NPC","Hype Cave - NPC","80.0%","77.1%",regionName,{equipment:"(+4)%%bomb%%"}),
		new Location("NPC","Hype Cave","80.0%","77.1%",regionName,{equipment:"(+4)%%bomb%%"}),
		new Location("Dig","Digging Game","52.9%","69.2%",regionName,{equipment:"- 80 Rupees"})
	],this);
  }

  initNoMajorGlitches() {
	this.canEnter.glitchless = function() {
		let dwne = new DarkWorldNorthEast();
		dwne.initNoMajorGlitches();

		return has("moonpearl")
			&& ((dwne.canEnter.glitchless() && (has("hammer")
				|| (canGrapple() && (canSwim() || canLiftRocks()))))
				|| (has("hammer") && canLiftRocks())
				|| canLiftDarkRocks());
	}
  }

  initOverworldGlitches() {
	this.initNoMajorGlitches();

	for(var loc in this.locations) {
		this.locations[loc].owglitches = function() {
			return has("moonpearl");
		}
	}

	this.canEnter.owglitches = function() {
		let wdm = new DeathMountainWest();
		wdm.initOverworldGlitches();

		return ((has("moonpearl")
			&& (canLiftDarkRocks()
				|| (has("hammer") && canLiftRocks())
				|| (has("agahnim") && (has("hammer")
					|| (canGrapple() && (canLiftRocks() || canSwim()))))))
			|| ((has("mirror") || (canDash() && has("moonpearl")))
				&& wdm.canEnter.owglitches()));
	}
  }

  initMajorGlitches() {
	this.initOverworldGlitches();

	for(var loc in this.locations) {
		this.locations[loc].majorglitches = function() {
			return glitchedLinkInDarkWorld();
		}
	}

	this.canEnter.majorglitches = function() {
		let wdm = new DeathMountainWest();
		wdm.initOverworldGlitches();

		return ((has("moonpearl")
			&& (canLiftDarkRocks()
				|| (has("hammer") && canLiftRocks())
				|| (has("agahnim") && (has("hammer")
					|| (canGrapple() && (canLiftRocks() || canSwim()))))))
			|| wdm.canEnter.owglitches());
	}
  }
}
