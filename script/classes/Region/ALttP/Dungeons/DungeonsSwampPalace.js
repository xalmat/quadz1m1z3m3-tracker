class DungeonsSwampPalace extends Dungeons {
  constructor(name = "Dungeons", subname = "SwampPalace", buildLocations = true) {
    super(name, subname, buildLocations);
    let regionName = name + subname;
    if (this.buildLocations) {
      this.locations = new LocationCollection([
        new Location("SpawnableChest", "Swamp Palace - Entrance", "", "", regionName),
        new Location("BigChest", "Swamp Palace - Big Chest", "", "", regionName),
        new Location("Chest", "Swamp Palace - Big Key Chest", "", "", regionName),
        new Location("Chest", "Swamp Palace - Map Chest", "", "", regionName),
        new Location("Chest", "Swamp Palace - West Chest", "", "", regionName),
        new Location("SpawnableChest", "Swamp Palace - Compass Chest", "", "", regionName),
        new Location("Chest", "Swamp Palace - Flooded Room - Left", "", "", regionName),
        new Location("Chest", "Swamp Palace - Flooded Room - Right", "", "", regionName),
        new Location("SpawnableChest", "Swamp Palace - Waterfall Room", "", "", regionName),
        new Location("Event", "Swamp Palace - Boss", "73.5%", "91.0%", regionName, {equipment: "%%mirror%%"})
      ], this);
    }

    this.boss = new BossArrghus();
  }

  initNoMajorGlitches() {
    let boss = this.boss;
    let dungeon = this;

    if (this.buildLocations) {
      this.locations["Swamp Palace - Big Chest"].glitchless = function () {
        return has("keyd2") &&
          canSwim() &&
          has("hammer") &&
          has("bigkeyd2");
      }
      this.locations["Swamp Palace - Big Key Chest"].glitchless = function () {
        return has("keyd2") &&
          canSwim() &&
          has("hammer");
      }
      this.locations["Swamp Palace - Map Chest"].glitchless = function () {
        return has("keyd2");
      }
      this.locations["Swamp Palace - West Chest"].glitchless =
      this.locations["Swamp Palace - Compass Chest"].glitchless = function () {
        return has("keyd2") &&
          canSwim() &&
          has("hammer");
      }
      this.locations["Swamp Palace - Flooded Room - Left"].glitchless =
      this.locations["Swamp Palace - Flooded Room - Right"].glitchless =
      this.locations["Swamp Palace - Waterfall Room"].glitchless = function () {
        return has("keyd2") &&
          has("hammer") &&
          canGrapple() &&
          canSwim();
      }
    }

    this.locations["Swamp Palace - Boss"].glitchless = function () {
      return has("keyd2") &&
        canSwim() &&
        has("hammer") &&
        canGrapple() &&
        boss.canBeat();
    }

    this.canEnter.glitchless = function () {
      let sdw = new DarkWorldSouth("", "", false);
      sdw.initNoMajorGlitches();

      return (!isBunny(dungeon.subname)) && has("mirror") && canSwim() &&
        sdw.canEnter.glitchless();
    }
    this.canComplete.glitchless = function () {
      return dungeon.locations["Swamp Palace - Boss"].glitchless();
    }
  }

  initMinorGlitches() {
    this.initNoMajorGlitches();

    let dungeon = this;

    this.canEnter.minorGlitches = function () {
      let sdw = new DarkWorldSouth("", "", false);
      sdw.initMinorGlitches();

      if ((!isBunny(dungeon.subname)) &&
        has("mirror") &&
        canSwim()) {
        if (sdw.canEnter.minorGlitches()) {
          return sdw.canEnter.minorGlitches();
        }
      }
    }

    this.canGetChest.minorGlitches = function () {
      let mychests = trackerData.zelda3.dungeonchests[4];

      if (dungeon.canEnter.glitchless()) {
        if (has("hammer")) {
          if (canGrapple() || mychests >= 5) {
            return true;
          } else if (mychests >= 3) {
            return "partial";
          }
        } else {
          return "partial";
        }
      } else if (dungeon.canEnter.minorGlitches()) {
        return dungeon.canEnter.minorGlitches();
      }
    }
  }
}
