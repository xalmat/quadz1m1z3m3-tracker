class DarkWorldNorthWest extends DarkWorld {
  constructor(name = "DarkWorld", subname = "NorthWest", buildLocations = true) {
    super(name, subname, buildLocations);
    let regionName = name + subname;
    if (this.buildLocations) {
      this.locations = new LocationCollection([
        new Location("Chest", "Brewery", "55.4%", "57.8%", regionName, {equipment: "%%bomb%%"}),
        new Location("Chest", "C-Shaped House", "60.8%", "47.9%", regionName),
        new Location("Chest", "Chest Game", "52.1%", "46.4%", regionName, {equipment: "- 30 Rupees"}),
        new Location("Standing", "Hammer Pegs", "65.8%", "60.1%", regionName, {equipment: "%%hammer%%".repeat(8) + "!".repeat(8)}),
        new Location("Standing", "Bumper Cave", "67.1%", "15.2%", regionName, {equipment: "%%cape%%"}),
        new Location("NPC", "Blacksmith", "15.2%", "51.8%", regionName, {equipment: "(%%mirror%% or save and quit)"}),
        new Location("NPC", "Purple Chest", "65.2%", "52.2%", regionName, {equipment: "(%%mirror%% or save and quit)"})
      ], this);
    }
  }

  initNoMajorGlitches() {
    if (this.buildLocations) {
      this.locations["Hammer Pegs"].glitchless = function () {
        return canLiftDarkRocks() && has("hammer");
      }
      this.locations["Bumper Cave"].glitchless = function () {
        return canLiftRocks() && has("cape");
      }
      this.locations["Blacksmith"].glitchless =
      this.locations["Purple Chest"].glitchless = function () {
        return (!isBunny("light")) && (!isBunny("dark")) && canLiftDarkRocks();
      }
    }

    this.canEnter.glitchless = function () {
      let region = this;

      if (!has("state.inverted")) {
        let nedw = new DarkWorldNorthEast("", "", false);
        nedw.initNoMajorGlitches();
        let warps = new HyruleWarpsMain();
        warps.initNoMajorGlitches();

        return (!isBunny(region.name)) &&
          ((nedw.canEnter.glitchless() &&
              (canGrapple() && (canLiftRocks() || has("hammer") || canSwim()))) ||
            warps.locations["Kakariko Teleporter (Dark)"].glitchless());
      } else if (has("state.inverted")) {
        return true;
      }
    }
  }

  initMinorGlitches() {
    this.initNoMajorGlitches();

    if (this.buildLocations) {
      this.locations["Bumper Cave"].minorGlitches = function () {
        let ret = this.glitchless();

        if (ret) {
          return ret;
        }

        if (has("agahnim") || has("state.inverted")) {
          return "viewable";
        }
      }
    }

    this.canEnter.minorGlitches = function () {
      let region = this;

      if (!has("state.inverted")) {
        let ret = this.glitchless();

        if (ret) {
          return ret;
        }

        let nedw = new DarkWorldNorthEast("", "", false);
        nedw.initMinorGlitches();

        if ((!isBunny(region.name)) &&
          ((nedw.canEnter.minorGlitches() &&
              (canGrapple() && (canSwim() || canLiftRocks() || has("hammer")))) ||
            (has("hammer") && canLiftRocks()) ||
            canLiftDarkRocks())) {
          return nedw.canEnter.minorGlitches();
        }
      } else if (has("state.inverted")) {
        return true;
      }
    }
  }
}
