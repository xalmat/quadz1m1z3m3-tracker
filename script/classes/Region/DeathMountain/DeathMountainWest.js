class DeathMountainWest extends DeathMountain {
  constructor(name = "DeathMountain", subname = "West") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("NPC","Old Man","20.8%","20.4%",regionName),
		new Location("Standing","Spectacle Rock Cave","24.3%","14.8%",regionName),
		new Location("Tablet","Ether Tablet","21.0%","3.0%",regionName,{equipment:"%%sword2%%%%book%%"}),
		new Location("Standing","Spectacle Rock","25.4%","8.5%",regionName,{equipment:"%%mirror%%"})
	],this);
  }

  initNoMajorGlitches() {
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

	this.canEnter.glitchless = function() {
		return (canFly()
			|| (canLiftRocks() && has("lantern"))
			|| canAccessDeathMountainPortal());
	}
  }

  initOverworldGlitches() {
    initNoMajorGlitches();

    this.locations["Ether Tablet"].owglitches = function() {
		var toh = new TowerOfHera();
		toh.owglitches();

		return canActivateTablets()
			&& toh.canEnter.owglitches();
    }
    this.locations["Spectacle Rock"].owglitches = function() {
		return canDash()
			|| has("mirror");
    }

    this.canEnter.owglitches = function() {
		return (canDash()
			|| canFly() || (canLiftRocks() && has("lantern")));
    }
  }

  initMajorGlitches() {
	initOverworldGlitches();

	this.canEnter.majorglitches = function() {
		return (canDashSM() || has("bottle")
			|| canFly() || (canLiftRocks() && has("lantern")));
	}
  }
}
