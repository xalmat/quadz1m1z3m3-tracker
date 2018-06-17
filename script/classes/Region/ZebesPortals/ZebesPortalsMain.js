class ZebesPortalsMain extends Region {
  constructor(name = "ZebesPortals", subname = "Main") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Portal","SM Portal: Crateria Map Room","32.5%","79.6%","LightWorldSouth"),
		new Location("Portal","SM Portal: Norfair Map Room","26.7%","15.6%","DeathMountainWest"),
		new Location("Portal","SM Portal: Maridia Missile Refill","95.6%","76.7%","DarkWorldSouth"),
		new Location("Portal","SM Portal: Lower Norfair Golden Torizo Energy Refill","59.8%","82.1%","DarkWorldMire")
	],this);
  }

  initNoMajorGlitches() {
	this.locations["SM Portal: Crateria Map Room"].glitchless = function() {
		var lws = new LightWorldSouth();
		lws.initNoMajorGlitches();
		return (lws.canEnter.glitchless() && canAccessCrateriaPortal()) || canAccessLightWorldPortal();
	}
	this.locations["SM Portal: Norfair Map Room"].glitchless = function() {
		var dmw = new DeathMountainWest();
		dmw.initNoMajorGlitches();
		return (dmw.canEnter.glitchless() && canAccessNorfairPortal()) || canAccessDeathMountainPortal();
	}
	this.locations["SM Portal: Maridia Missile Refill"].glitchless = function() {
		var dws = new DarkWorldSouth();
		dws.initNoMajorGlitches();
		return (dws.canEnter.glitchless() && canAccessMaridiaPortal()) || canAccessDarkWorldPortal();
	}
	this.locations["SM Portal: Lower Norfair Golden Torizo Energy Refill"].glitchless = function() {
		var dwm = new DarkWorldMire();
		dwm.initNoMajorGlitches();
		return (dwm.canEnter.glitchless() && canAccessLowerNorfairPortal()) || canAccessMiseryMirePortal();
	}

	this.canEnter.glitchless = function() {
		return true;
	}
  }
}
