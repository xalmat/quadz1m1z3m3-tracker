class ZebesPortalsMain extends ZebesPortals {
  constructor(name = "ZebesPortals", subname = "Main", buildLocations = true) {
    super(name,subname,buildLocations);
    let regionName = name + subname;
    if(this.buildLocations) {
        this.locations = new LocationCollection([
            new Location("Portal","SM Portal: Crateria Map Room","32.5%","79.6%","LightWorldSouth"),
            new Location("Portal","SM Portal: Norfair Map Room","26.7%","15.6%","DeathMountainWest"),
            new Location("Portal","SM Portal: Maridia Missile Refill","95.6%","76.7%","DarkWorldSouth"),
            new Location("Portal","SM Portal: Lower Norfair Golden Torizo Energy Refill","59.8%","82.1%","DarkWorldMire"),
            new Location("Portal","Z1 Portal: NW of Start","9.3%","31.36%","LightWorldNorthWest"),
            new Location("Portal","M1 Portal: E of Start","16.6%","5.2%","LightWorldNorthWest")
        ],this);
    }
  }

  initNoMajorGlitches() {
    if(this.buildLocations) {
        this.locations["SM Portal: Crateria Map Room"].glitchless = function() {
            let lws = new LightWorldSouth("","",false);
            lws.initNoMajorGlitches();

            return (lws.canEnter.glitchless() && canAccessCrateriaPortal()) || canAccessLightWorldPortal();
        }
        this.locations["SM Portal: Norfair Map Room"].glitchless = function() {
            let dmw = new DeathMountainWest("","",false);
            dmw.initNoMajorGlitches();

            return (dmw.canEnter.glitchless() && canAccessNorfairPortal()) || canAccessDeathMountainPortal();
        }
        this.locations["SM Portal: Maridia Missile Refill"].glitchless = function() {
            let dws = new DarkWorldSouth("","",false);
            dws.initNoMajorGlitches();

            return (dws.canEnter.glitchless() && canAccessMaridiaPortal()) || canAccessDarkWorldPortal();
        }
        this.locations["SM Portal: Lower Norfair Golden Torizo Energy Refill"].glitchless = function() {
            let dwm = new DarkWorldMire("","",false);
            dwm.initNoMajorGlitches();

            return (dwm.canEnter.glitchless() && canAccessLowerNorfairPortal()) || canAccessMiseryMirePortal();
        }
        this.locations["Z1 Portal: NW of Start"].glitchless = function() {
            let lwnw = new LightWorldNorthWest("","",false);
            lwnw.initNoMajorGlitches();

            return (lwnw.canEnter.glitchless() && canAccessCrateriaPortal()) || canAccessLightWorldPortal();
        }
        this.locations["M1 Portal: E of Start"].glitchless = function() {
            let lwnw = new LightWorldNorthWest("","",false);
            lwnw.initNoMajorGlitches();

            return (lwnw.canEnter.glitchless() && canAccessCrateriaPortal()) || canAccessLightWorldPortal();
        }
    }

    this.canEnter.glitchless = function() {
        return true;
    }
  }
}
