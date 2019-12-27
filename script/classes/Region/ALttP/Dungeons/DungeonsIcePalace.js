class DungeonsIcePalace extends Dungeons {
  constructor(name = "Dungeons", subname = "IcePalace", buildLocations = true) {
    super(name, subname, buildLocations);
    let regionName = name + subname;
    if (this.buildLocations) {
      this.locations = new LocationCollection([
        new Location("Chest", "Ice Palace - Big Key Chest", "", "", regionName),
        new Location("Chest", "Ice Palace - Compass Chest", "", "", regionName),
        new Location("Chest", "Ice Palace - Map Chest", "", "", regionName),
        new Location("SpawnableChest", "Ice Palace - Spike Room", "", "", regionName),
        new Location("SpawnableChest", "Ice Palace - Freezor Chest", "", "", regionName),
        new Location("Chest", "Ice Palace - Iced T Room", "", "", regionName),
        new Location("BigChest", "Ice Palace - Big Chest", "", "", regionName),
        new Location("Event", "Ice Palace - Boss", "89.8%", "85.8%", regionName)
      ], this);
    }

    this.boss = new BossKholdstare();
  }

  initNoMajorGlitches() {
    let boss = this.boss;
    let dungeon = this;

    if (this.buildLocations) {
      this.locations["Ice Palace - Big Key Chest"].glitchless =
      this.locations["Ice Palace - Map Chest"].glitchless =
      this.locations["Ice Palace - Spike Room"].glitchless = function () {
        return has("hammer") && canLiftRocks() &&
          (!has("variation.ohko") ||
            canInvul() || canGrapple()) &&
          (canGrapple() ||
            has("bigkeyd5") ? canGrapple() : has("keyd5"));
      }
      this.locations["Ice Palace - Freezor Chest"].glitchless = function () {
        return canMeltThings();
      }
      this.locations["Ice Palace - Big Chest"].glitchless = function () {
        return has("bigkeyd5");
      }
    }

    this.locations["Ice Palace - Boss"].glitchless = function () {
      return has("hammer") && canLiftRocks() &&
        boss.canBeat() &&
        has("bigkeyd5") && (
          (has("somaria") && has("keyd5")) ||
          has("keyd5", 2)
        );
    }

    this.canEnter.glitchless = function () {
      let canGetToIceIsland = has("state.inverted") || canLiftDarkRocks();
      return (!isBunny(dungeon.subname)) && canSwim() && canGetToIceIsland && canMeltThings();
    }
    this.canComplete.glitchless = function () {
      return dungeon.locations["Ice Palace - Boss"].glitchless();
    }
  }

  initMinorGlitches() {
    this.initNoMajorGlitches();

    let boss = this.boss;
    let dungeon = this;

    this.canEnter.minorGlitches = function () {
      let ret = this.glitchless();
      let canGetToIceIsland = has("state.inverted") || canLiftDarkRocks();

      if (ret) {
        return ret;
      }
      if (canGetToIceIsland && canMeltThings()) {
        if ((!isBunny(dungeon.subname)) && canSwim()) {
          return true;
        } else {
          return "glitchavailable";
        }
      }
    }
    this.canGetChest.minorGlitches = function () {
      let mychests = trackerData.zelda3.dungeonchests[7];

      if (dungeon.canEnter.glitchless()) {
        if (has("hammer") && canLiftRocks()) {
          if (canGrapple()) {
            return true;
          } else if (canInvul()) {
            if (mychests >= 2) {
              return true;
            } else {
              return "partial";
            }
          } else {
            return "partial";
          }
        } else {
          return "partial";
        }
      }
      if (dungeon.canEnter.minorGlitches()) {
        if (has("hammer") && canLiftRocks()) {
          if (canGrapple()) {
            return "glitchavailable";
          } else {
            if (mychests >= 2) {
              return "glitchavailable";
            } else {
              return "glitchpartial";
            }
          }
        } else {
          return "glitchpartial";
        }
      }
    }
  }
}
