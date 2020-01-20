class DeathMountainWest extends DeathMountain {
  constructor(name = "DeathMountain", subname = "West", buildLocations = true) {
    super(name, subname, buildLocations);
    let regionName = name + subname;
    if (this.buildLocations) {
      this.locations = new LocationCollection([
        new Location("NPC", "Old Man", "20.8%", "20.4%", regionName),
        new Location("Standing", "Spectacle Rock Cave", "24.3%", "14.8%", regionName),
        new Location("Tablet", "Ether Tablet", "21.0%", "3.0%", regionName, {equipment: "%%sword2%%%%book%%"}),
        new Location("Standing", "Spectacle Rock", "25.4%", "8.5%", regionName, {equipment: "%%mirror%%"})
      ], this);
    }
  }

  initNoMajorGlitches() {
    let region = this;

    if (this.buildLocations) {
      this.locations["Old Man"].glitchless = function () {
        return has("lantern");
      }
      this.locations["Ether Tablet"].glitchless = function () {
        if (!has("state.inverted")) {
          // Mirror from Spec Rock
          // Hookshot across the bottom, climb up, Hammer back to Hera
          return (!isBunny(region.name)) && canActivateTablets() &&
            (has("mirror") || (has("hammer") && canGrapple()));
        } else if (has("state.inverted")) {
          let warps = new HyruleWarpsMain();
          warps.initNoMajorGlitches();
          return warps.locations["Turtle Rock Teleporter (Light)"].glitchless() && (!isBunny(region.name)) && canActivateTablets();
        }
      }
      this.locations["Spectacle Rock"].glitchless = function () {
        if (!has("state.inverted")) {
          return has("mirror");
        } else if (has("state.inverted")) {
          let warps = new HyruleWarpsMain();
          warps.initNoMajorGlitches();
          return warps.locations["Turtle Rock Teleporter (Light)"].glitchless();
        }
      }
    }

    this.canEnter.glitchless = function () {
      if (!has("state.inverted")) {
        // Flute 1
        // Old Man Cave
        // M3->Z3 portal from Norfair
        return (canFly() ||
          (canLiftRocks() && has("lantern")) ||
          canAccessDeathMountainPortal());
      } else if (has("state.inverted")) {
        // Old Man Cave
        return has("lantern") && canLiftRocks();
      }
    }
  }

  initMinorGlitches() {
    let region = this;

    this.initNoMajorGlitches();

    if (this.buildLocations) {
      this.locations["Old Man"].minorGlitches = function () {
        let ret = this.glitchless();

        if (ret) {
          return ret;
        }
        if (canDarkNav()) {
          return "glitchavailable";
        }
      }
      this.locations["Ether Tablet"].minorGlitches = function () {
        let ret = this.glitchless();

        if (ret) {
          return ret;
        }

        let warps = new HyruleWarpsMain();
        warps.initNoMajorGlitches();

        let isInverted = has("state.inverted");

        // If it's not Inverted
        // If it is Inverted and we can get to the Light TR Teleporter
        if ((!isInverted) || (isInverted && warps.locations["Turtle Rock Teleporter (Light)"].glitchless())) {
          // If we're not a Bunny
          if ((!isBunny(region.name))) {
            // Need Mirror if not Inverted
            if (has("mirror") || isInverted) {
              // Can Activate Tablets
              if (canActivateTablets()) {
                // Dark Nav requirement?
                if (canDarkNav()) {
                  return "glitchavailable";
                } else if (has("lantern")) {
                  return "available";
                }
              }
              // Can't activate but can Read Tablets
              if (canRead()) {
                // Dark Nav requirement?
                if (canDarkNav()) {
                  return "glitchviewable";
                } else if (has("lantern")) {
                  return "viewable";
                }
              }
            }
          }
        }
      }
      this.locations["Spectacle Rock"].minorGlitches = function () {
        let ret = this.glitchless();

        if (ret) {
          return ret;
        }
        if (has("lantern")) {
          return "viewable";
        }
        if (canDarkNav()) {
          return "glitchviewable";
        }
      }
    }

    this.canEnter.minorGlitches = function () {
      let ret = this.glitchless();

      if (ret) {
        return ret;
      }
      if (canLiftRocks() && canDarkNav()) {
        return "glitchavailable";
      }
    }
  }
}
