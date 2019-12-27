class DungeonsTurtleRock extends Dungeons {
  constructor(name = "Dungeons", subname = "TurtleRock", buildLocations = true) {
    super(name, subname, buildLocations);
    let regionName = name + subname;
    if (this.buildLocations) {
      this.locations = new LocationCollection([
        new Location("SpawnableChest", "Turtle Rock - Chain Chomps", "", "", regionName),
        new Location("Chest", "Turtle Rock - Compass Chest", "", "", regionName),
        new Location("Chest", "Turtle Rock - Roller Room - Left", "", "", regionName),
        new Location("Chest", "Turtle Rock - Roller Room - Right", "", "", regionName),
        new Location("BigChest", "Turtle Rock - Big Chest", "", "", regionName),
        new Location("Chest", "Turtle Rock - Big Key Chest", "", "", regionName),
        new Location("Chest", "Turtle Rock - Crystaroller Room", "", "", regionName),
        new Location("Chest", "Turtle Rock - Eye Bridge - Bottom Left", "", "", regionName),
        new Location("Chest", "Turtle Rock - Eye Bridge - Bottom Right", "", "", regionName),
        new Location("Chest", "Turtle Rock - Eye Bridge - Top Left", "", "", regionName),
        new Location("Chest", "Turtle Rock - Eye Bridge - Top Right", "", "", regionName),
        new Location("Event", "Turtle Rock - Boss", "96.9%", "7.0%", regionName, {equipment: "%%medallion0%%%%lantern%%"})
      ], this);
    }

    this.boss = new BossTrinexx();
  }

  initNoMajorGlitches() {
    let boss = this.boss;
    let dungeon = this;

    if (this.buildLocations) {
      this.locations["Turtle Rock - Chain Chomps"].glitchless = function () {
        return has("keyd7");
      }
      this.locations["Turtle Rock - Roller Room - Left"].glitchless =
      this.locations["Turtle Rock - Roller Room - Right"].glitchless = function () {
        return has("firerod") && has("somaria");
      }
      this.locations["Turtle Rock - Compass Chest"].glitchless = function () {
        return has("somaria");
      }
      this.locations["Turtle Rock - Big Chest"].glitchless = function () {
        return (has("somaria") || has("hookshot")) &&
          has("bigkeyd7") && has("keyd7", 2);
      }
      this.locations["Turtle Rock - Big Key Chest"].glitchless = function () {
        return has("keyd7", 2);
      }
      this.locations["Turtle Rock - Crystaroller Room"].glitchless = function () {
        return has("bigkeyd7") && has("keyd7", 2);
      }
      this.locations["Turtle Rock - Eye Bridge - Bottom Left"].glitchless =
      this.locations["Turtle Rock - Eye Bridge - Bottom Right"].glitchless =
      this.locations["Turtle Rock - Eye Bridge - Top Left"].glitchless =
      this.locations["Turtle Rock - Eye Bridge - Top Right"].glitchless = function () {
        return has("lantern") && has("somaria") && has("bigkeyd7") && has("keyd7", 3) &&
          (canInvul() || canBlockLasers());
      }
    }

    this.locations["Turtle Rock - Boss"].glitchless = function () {
      return has("key", 4) &&
        has("lantern") &&
        has("bigkeyd7") && has("somaria") &&
        boss.canBeat();
    }

    this.canEnter.glitchless = function () {
      let edm = new DeathMountainEast("", "", false);
      edm.initNoMajorGlitches();

      return (has("trockmedallion") && canActivateMedallions()) &&
        (!isBunny(dungeon.subname)) && has("somaria") &&
        canLiftDarkRocks() && has("hammer") &&
        edm.canEnter.glitchless();
    }
    this.canComplete.glitchless = function () {
      return dungeon.locations["Turtle Rock - Boss"].glitchless();
    }
  }

  initMinorGlitches() {
    this.initNoMajorGlitches();

    let boss = this.boss;
    let dungeon = this;

    this.hasMedallion = function () {
      let medallions = ["medallion0", "bombos", "ether", "quake"];
      let myMedallion = medallions[trackerData.zelda3.medallions[9]];
      return has(myMedallion) || (has("bombos") && has("ether") && has("quake"));
    }
    this.mayHaveMedallion = function () {
      let myMedallion = trackerData.zelda3.medallions[9];
      return !(myMedallion === 1 && !has("bombos")) ||
        (myMedallion === 2 && !has("ether")) ||
        (myMedallion === 3 && !has("quake")) ||
        (!has("bombos") && !has("ether") && !has("quake"));
    }


    let lower = function () {
      // Do nothing until Major Glitches
      return false;
    }
    let middle = function () {
      // Glitchless does nothing
      return false;
    }
    let upperCan = function () {
      let ret = dungeon.hasMedallion() &&
        canActivateMedallions() &&
        (!isBunny(dungeon.subname)) &&
        has("somaria") &&
        canLiftDarkRocks();
      let edm = new DeathMountainEast("", "", false);
      edm.initMinorGlitches();

      if (ret) {
        let TRGlitchless = dungeon.canEnter.glitchless();
        let TRMinors = ret && edm.canEnter.minorGlitches();
        if (TRGlitchless) {
          return ret;
        } else if (TRMinors) {
          return TRMinors;
        }
      }
    }
    let upperMay = function () {
      let ret = dungeon.mayHaveMedallion() &&
        canActivateMedallions() &&
        (!isBunny(dungeon.subname)) &&
        has("somaria") &&
        canLiftDarkRocks();
      let edm = new DeathMountainEast();
      edm.initMinorGlitches();

      if (ret) {
        if (dungeon.canEnter.glitchless()) {
          return ret;
        } else if (dungeon.canEnter.minorGlitches()) {
          return dungeon.canEnter.minorGlitches();
        }
      }
    }

    this.canEnter.minorGlitches = function () {
      return upperCan() ||
        (
          has("state.inverted") &&
          (canLiftRocks() && canDarkNav()) &&
          (
            dungeon.hasMedallion() ||
            dungeon.mayHaveMedallion()
          )
        );
    }
    this.mayEnter.minorGlitches = function () {
      return upperMay();
    }
    this.canGetChest.minorGlitches = function () {
      let mychests = trackerData.zelda3.dungeonchests[9];
      if (dungeon.canEnter.glitchless()) {
        if (has("firerod")) {
          if (has("lantern") && (canInvul() || canBlockLasers())) {
            if (mychests >= 2 || dungeon.isBeatable().glitchless === "available") {
              return true;
            } else {
              return "partial";
            }
          } else if (mychests >= 2) {
            return "partial";
          } else {
            return "glitchpartial";
          }
        } else {
          if (has("lantern") && (canInvul() || canBlockLasers())) {
            return "partial";
          } else if (mychests >= 4) {
            return "partial";
          } else {
            return "glitchpartial";
          }
        }
      } else if (dungeon.mayEnter.glitchless()) {
        if (has("firerod")) {
          if (has("lantern") && canInvul() || canBlockLasers()) {
            return "possible";
          } else if (mychests >= 4) {
            return "possible";
          } else {
            return "glitchpossible";
          }
        }
      } else if (dungeon.canEnter.minorGlitches()) {
        if (has("firerod")) {
          if (mychests >= 2 ||
            dungeon.isBeatable().glitchless === "available" ||
            dungeon.isBeatable().glitchless === "glitchavailable") {
            return "glitchavailable";
          } else {
            return "glitchpartial";
          }
        } else {
          return "glitchpartial";
        }
      }
    }
  }
}
