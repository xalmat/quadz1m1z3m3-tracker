class DungeonsThievesTown extends Dungeons {
  constructor(name = "Dungeons", subname = "ThievesTown", buildLocations = true) {
    super(name, subname, buildLocations);
    let regionName = name + subname;
    if (this.buildLocations) {
      this.locations = new LocationCollection([
        new Location("Chest", "Thieves' Town - Attic", "", "", regionName),
        new Location("Chest", "Thieves' Town - Big Key Chest", "", "", regionName),
        new Location("Chest", "Thieves' Town - Map Chest", "", "", regionName),
        new Location("Chest", "Thieves' Town - Compass Chest", "", "", regionName),
        new Location("Chest", "Thieves' Town - Ambush Chest", "", "", regionName),
        new Location("BigChest", "Thieves' Town - Big Chest", "", "", regionName),
        new Location("Chest", "Thieves' Town - Blind's Cell", "", "", regionName),
        new Location("Event", "Thieves' Town - Boss", "56.4%", "47.9%", regionName)
      ], this);
    }

    this.boss = new BossBlind();
  }

  initNoMajorGlitches() {
    let boss = this.boss;
    let dungeon = this;

    if (this.buildLocations) {
      this.locations["Thieves' Town - Attic"].glitchless = function () {
        return has("keyd4") && has("bigkeyd4");
      }
      this.locations["Thieves' Town - Big Chest"].glitchless = function () {
        return has("hammer") && has("keyd4") && has("bigkeyd4");
      }
      this.locations["Thieves' Town - Blind's Cell"].glitchless = function () {
        return has("bigkeyd4");
      }
    }

    this.locations["Thieves' Town - Boss"].glitchless = function () {
      return has("keyd4") && has("bigkeyd4") &&
        boss.canBeat();
    }

    this.canEnter.glitchless = function () {
      let nwdw = new DarkWorldNorthWest("", "", false);
      nwdw.initNoMajorGlitches();

      return (!isBunny(dungeon.subname)) && nwdw.canEnter.glitchless();
    }
    this.canComplete.glitchless = function () {
      return dungeon.locations["Thieves' Town - Boss"].glitchless();
    }
  }

  initMinorGlitches() {
    this.initNoMajorGlitches();

    let boss = this.boss;
    let dungeon = this;

    this.canEnter.minorGlitches = function () {
      let dwnw = new DarkWorldNorthWest("", "", false);
      dwnw.initMinorGlitches();

      if ((!isBunny(dungeon.subname))) {
        if (dwnw.canEnter.minorGlitches()) {
          return dwnw.canEnter.minorGlitches();
        }
      }
    }
    this.canGetChest.minorGlitches = function () {
      let mychests = trackerData.zelda3.dungeonchests[6];

      if (dungeon.canEnter.glitchless()) {
        if (has("hammer") ||
          mychests >= 3 ||
          (boss.canBeat() && mychests >= 2)) {
          return true;
        } else {
          return "partial";
        }
      } else if (dungeon.canEnter.minorGlitches()) {
        return dungeon.canEnter.minorGlitches();
      }
    }
  }

  initMajorGlitches() {
    this.initOverworldGlitches();

    this.canEnter.majorGlitches = function () {
      let nwdw = new DarkWorldNorthWest("", "", false);
      nwdw.initMajorGlitches();

      return glitchedLinkInDarkWorld() &&
        nwdw.canEnter.majorGlitches();
    }
  }
}
