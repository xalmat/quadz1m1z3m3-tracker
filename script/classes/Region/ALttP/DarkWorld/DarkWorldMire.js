class DarkWorldMire extends DarkWorld {
  constructor(name = "DarkWorld", subname = "Mire", buildLocations = true) {
    super(name, subname, buildLocations);
    let regionName = name + subname;
    if (this.buildLocations) {
      this.locations = new LocationCollection([
        //			new Location("Chest","Mire Shed - Left","51.7%","79.5%",regionName),
        //			new Location("Chest","Mire Shed - Right","51.7%","79.5%",regionName),
        new Location("Chest", "Mire Shed", "51.7%", "79.5%", regionName)
      ], this);
    }
  }

  initNoMajorGlitches() {
    let region = this;

    if (this.buildLocations) {
      //		this.locations["Mire Shed - Left"].glitchless =
      //		this.locations["Mire Shed - Right"].glitchless = function() {
      this.locations["Mire Shed"].glitchless = function () {
        return (!isBunny(region.name));
      }
    }

    this.canEnter.glitchless = function () {
      if (!has("state.inverted")) {
        let warps = new HyruleWarpsMain();
        warps.initNoMajorGlitches();

        return warps.locations["Dark Desert Teleporter (Dark)"].glitchless() || canAccessMiseryMirePortal();
      } else if (has("state.inverted")) {
        return canAccessLightWorld() && has("mirror");
      }
    }
  }

  initMinorGlitches() {
    this.initNoMajorGlitches();

    if (this.buildLocations) {
      //		this.locations["Mire Shed - Left"].minorGlitches =
      //		this.locations["Mire Shed - Right"].minorGlitches = function() {
      this.locations["Mire Shed"].minorGlitches = function () {
        let ret = this.glitchless();

        if (ret) {
          return ret;
        }
        if (has("mirror")) {
          return "glitchavailable";
        }
      }
    }
  }
}
