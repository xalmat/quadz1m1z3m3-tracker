class DarkWorldSouth extends DarkWorld {
  constructor(name = "DarkWorld", subname = "South", buildLocations = true) {
    super(name, subname, buildLocations);
    let regionName = name + subname;
    if (this.buildLocations) {
      this.locations = new LocationCollection([
        //			new Location("Chest","Hype Cave - Top","80.0%","77.1%",regionName,{equipment:"%%bomb%% (NPC + 4 %%bomb%%)"}),
        //			new Location("Chest","Hype Cave - Middle Right","80.0%","77.1%",regionName,{equipment:"%%bomb%% (NPC + 4 %%bomb%%)"}),
        //			new Location("Chest","Hype Cave - Middle Left","80.0%","77.1%",regionName,{equipment:"%%bomb%% (NPC + 4 %%bomb%%)"}),
        //			new Location("Chest","Hype Cave - Bottom","80.0%","77.1%",regionName,{equipment:"%%bomb%% (NPC + 4 %%bomb%%)"}),
        new Location("NPC", "Stumpy", "65.5%", "68.6%", regionName),
        //			new Location("NPC","Hype Cave - NPC","80.0%","77.1%",regionName,{equipment:"(+4)%%bomb%%"}),
        new Location("NPC", "Hype Cave", "80.0%", "77.1%", regionName, {equipment: "(+4)%%bomb%%"}),
        new Location("Dig", "Digging Game", "52.9%", "69.2%", regionName, {equipment: "- 80 Rupees"})
      ], this);
    }
  }

  initNoMajorGlitches() {
    let region = this;

    this.canEnter.glitchless = function () {
      if (!has("state.inverted")) {
        let dwne = new DarkWorldNorthEast("", "", false);
        dwne.initNoMajorGlitches();
        let warps = new HyruleWarpsMain();
        warps.initNoMajorGlitches();

        // NE DW: The Long Way 'Round
        //  Grapple
        //   Glove || Hammer  // Go by land
        //   Swim             // Go by sea
        return (!isBunny(region.name)) &&
          ((dwne.canEnter.glitchless() && (has("hammer") ||
              (canGrapple() && (canSwim() || canLiftRocks())))) ||
            warps.locations["Kakariko Teleporter (Dark)"].glitchless());
      } else if (has("state.inverted")) {
        return true;
      }
    }
  }

  initMinorGlitches() {
    let region = this;

    this.initNoMajorGlitches();

    if (this.buildLocations) {}
    this.canEnter.minorGlitches = function () {
      let ret = this.glitchless();

      if (ret) {
        return ret;
      }

      if (!has("state.inverted")) {
        let dwne = new DarkWorldNorthEast("", "", false);
        dwne.initMinorGlitches();
        let warps = new HyruleWarpsMain();
        warps.initNoMajorGlitches();

        // NE DW: The Long Way 'Round
        //  Grapple
        //   Glove || Hammer  // Go by land
        //   Swim             // Go by sea
        if ((!isBunny(region.name)) &&
          ((dwne.canEnter.minorGlitches() && (has("hammer") ||
              (canGrapple() && (canSwim() || canLiftRocks())))) ||
            warps.locations["Kakariko Teleporter (Dark)"].glitchless())) {
          return dwne.canEnter.minorGlitches();
        }
      } else if (has("state.inverted")) {
        return true;
      }
    }
  }
}
