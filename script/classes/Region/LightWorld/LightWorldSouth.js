class LightWorldSouth extends LightWorld {
  constructor(name = "LightWorld", subname = "South") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chest","Floodgate Chest","23.4%","93.4%",regionName),
		new Location("Chest","Link's House","27.4%","67.9%",regionName),
		new Location("Chest","Aginah's Cave","10.0%","82.6%",regionName,{equipment:"%%bomb%%"}),
		new Location("Chest","Mini Moldorm Cave - Far Left","32.6%","93.4%",regionName,{equipment:"%%bomb%%"}),
		new Location("Chest","Mini Moldorm Cave - Left","32.6%","93.4%",regionName,{equipment:"%%bomb%%"}),
		new Location("Chest","Mini Moldorm Cave - Right","32.6%","93.4%",regionName,{equipment:"%%bomb%%"}),
		new Location("Chest","Mini Moldorm Cave - Far Right","32.6%","93.4%",regionName,{equipment:"%%bomb%%"}),
		new Location("Chest","Ice Rod Cave","44.7%","76.9%",regionName,{equipment:"%%bomb%%"}),
		new Location("NPC","Hobo","35.4%","69.7%",regionName),
		new Location("Tablet","Bombos","11.0%","92.2%",regionName),
		new Location("Standing","Cave 45","14.1%","84.1%",regionName),
		new Location("Standing","Checkerboard Cave","8.8%","77.3%",regionName),
		new Location("NPC","Mini Moldorm Cave - NPC","32.6%","93.4%",regionName,{equipment:"%%bomb%%"}),
		new Location("Dash","Library","7.7%","65.9%",regionName),
		new Location("Standing","Maze Race","1.8%","69.8%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
		new Location("Standing","Desert Ledge","1.5%","91.0%",regionName,{equipment:"%%book%%/%%mirror%%"}),
		new Location("Standing","Lake Hylia Island","36.1%","82.9%",regionName),
		new Location("Standing","Sunken Treasure","23.4%","93.4%",regionName),
		new Location("Dig","Flute Spot","14.4%","66.2%",regionName,{equipment:"%%shovel%%"})
	],this);
  }

  initNoMajorGlitches() {
	this.locations["Hobo"].glitchless = function() {
		return canSwim();
	}
	this.locations["Bombos Tablet"].glitchless = function() {
		var sdw = new DarkWorldSouth();
		sdw.initNoMajorGlitches();

		return canActivateTablets()
			&& has("mirror") && sdw.canEnter.glitchless();
	}
	this.locations["Cave 45"].glitchless = function() {
		var sdw = new DarkWorldSouth();
		sdw.initNoMajorGlitches();

		return has("mirror") && sdw.canEnter.glitchless();
	}
	this.locations["Checkerboard Cave"].glitchless = function() {
		return canFly() && canLiftDarkRocks() && has("mirror");
	}
	this.locations["Library"].glitchless = function() {
		return canDash();
	}
	this.locations["Desert Ledge"].glitchless = function() {
		var dp = new DesertPalace();
		dp.initNoMajorGlitches();

		return dp.canEnter.glitchless();
	}
	this.locations["Lake Hylia Island"].glitchless = function() {
		var sdw = new DarkWorldSouth();
		sdw.initNoMajorGlitches();

		var nedw = new DarkWorldNorthEast();
		nedw.initNoMajorGlitches();

		return canSwim() && has("moonpearl") && has("mirror")
			&& (sdw.canEnter.glitchless()
				|| nedw.canEnter.glitchless());
	}
	this.locations["Flute Spot"].glitchless = function() {
		return has("shovel");
	}

	this.canEnter.glitchless = function() {
		return true;
	}
  }

  initOverworldGlitches() {
	this.initNoMajorGlitches();

	this.locations["Hobo"].owglitches = function() {
		return true;
	}
	this.locations["Bombos Tablet"].owglitches = function() {
		var sdw = new DarkWorldSouth();
		sdw.initOverworldGlitches();

		return canActivateTablets()
			&& (canDash()
				|| (has("mirror") && sdw.canEnter.owglitches()));
	}
	this.locations["Cave 45"].owglitches = function() {
		var sdw = new DarkWorldSouth();
		sdw.initOverworldGlitches();

		return canDash()
			|| (has("mirror") && sdw.canEnter.owglitches());
	}
	this.locations["Checkerboard Cave"].owglitches = function() {
		var dwm = new DarkWorldMire();
		return canLiftRocks()
			&& (canDash()
				|| (has("mirror") && dwm.canEnter.owglitches()));
	}
	this.locations["Lake Hylia Island"].owglitches = function() {
		var sdw = new DarkWorldSouth();
		sdw.initOverworldGlitches();

		var nedw = new DarkWorldNorthEast();
		nedw.initOverworldGlitches();

		return canDash()
			|| (canSwim() && has("mirror")
				&& ((has("moonpearl") && sdw.canEnter.owglitches())
					|| nedw.canEnter.owglitches()));
	}
  }

  initMajorGlitches() {
	this.initOverworldGlitches();

	this.locations["Lake Hylia Island"].majorglitches = function() {
		var nedw = new DarkWorldNorthEast();
		nedw.initMajorGlitches();

		return canDash()
			|| (canSwim() && has("mirror")
				&& (glitchedLinkInDarkWorld()
					|| nedw.canEnter.majorglitches()));
	}
  }
}
