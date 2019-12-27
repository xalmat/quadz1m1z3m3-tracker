class DungeonsMiseryMire extends Dungeons {
  constructor(name = "Dungeons", subname = "MiseryMire", buildLocations = true) {
    super(name, subname, buildLocations);
    let regionName = name + subname;
    if (this.buildLocations) {
      this.locations = new LocationCollection([
        new Location("BigChest", "Misery Mire - Big Chest", "", "", regionName),
        new Location("SpawnableChest", "Misery Mire - Main Lobby", "", "", regionName),
        new Location("Chest", "Misery Mire - Big Key Chest", "", "", regionName),
        new Location("Chest", "Misery Mire - Compass Chest", "", "", regionName),
        new Location("Chest", "Misery Mire - Bridge Chest", "", "", regionName),
        new Location("Chest", "Misery Mire - Map Chest", "", "", regionName),
        new Location("SpawnableChest", "Misery Mire - Spike Chest", "", "", regionName),
        new Location("Event", "Misery Mire - Boss", "55.8%", "82.9%", regionName, {
          equipment: "%%medallion0%%%%lantern%%"
        })
      ], this);
    }

    this.boss = new BossVitreous();
  }

  initNoMajorGlitches() {
    let boss = this.boss;
    let dungeon = this;

    if (this.buildLocations) {
      this.locations["Misery Mire - Big Chest"].glitchless = function () {
        return has("bigkeyd6");
      }
      this.locations["Misery Mire - Spike Chest"].glitchless = function () {
        return (!has("variation.ohko")) ||
          canInvul();
      }
      this.locations["Misery Mire - Main Lobby"].glitchless =
        this.locations["Misery Mire - Map Chest"].glitchless = function () {
          return has("keyd6") || has("bigkeyd6");
        }
      this.locations["Misery Mire - Big Key Chest"].glitchless =
      this.locations["Misery Mire - Compass Chest"].glitchless = function () {
        return canLightTorches() &&
          has("keyd6", 3);
      }
    }

    this.locations["Misery Mire - Boss"].glitchless = function () {
      return has("somaria") && has("lantern") &&
        has("bigkeyd6") &&
        boss.canBeat();
    }

    this.canEnter.glitchless = function () {
      let dwm = new DarkWorldMire("", "", false);
      dwm.initNoMajorGlitches();

      return (has("miremedallion") && canActivateMedallions()) &&
        (!isBunny(dungeon.subname)) && gapCheck() &&
        canKillMostThings(8) &&
        dwm.canEnter.glitchless();
    }
    this.canComplete.glitchless = function () {
      return dungeon.locations["Misery Mire - Boss"].glitchless();
    }
  }

  initMinorGlitches() {
    this.initNoMajorGlitches();

    let boss = this.boss;
    let dungeon = this;

    this.hasMedallion = function () {
      let medallions = ["medallion0", "bombos", "ether", "quake"];
      let myMedallion = medallions[trackerData.zelda3.medallions[8]];
      return has(myMedallion) || (has("bombos") && has("ether") && has("quake"));
    }
    this.mayHaveMedallion = function () {
      let myMedallion = trackerData.zelda3.medallions[8];
      return !(myMedallion === 1 && !has("bombos")) ||
        (myMedallion === 2 && !has("ether")) ||
        (myMedallion === 3 && !has("quake")) ||
        (!has("bombos") && !has("ether") && !has("quake"));
    }
    this.canEnter.minorGlitches = function () {
      let dwm = new DarkWorldMire("", "", false);
      dwm.initMinorGlitches();

      if (dungeon.hasMedallion() &&
        canActivateMedallions() &&
        (!isBunny(dungeon.subname)) &&
        gapCheck()) {
        if (dwm.canEnter.glitchless()) {
          return true;
        } else if (dwm.canEnter.minorGlitches()) {
          return dwm.canEnter.minorGlitches();
        }
      }
    }
    this.mayEnter.minorGlitches = function () {
      let dwm = new DarkWorldMire("", "", false);
      dwm.initMinorGlitches();

      if (dungeon.mayHaveMedallion() &&
        canActivateMedallions() &&
        (!isBunny(dungeon.subname)) &&
        gapCheck()) {
        if (dwm.canEnter.glitchless()) {
          return true;
        } else if (dwm.canEnter.minorGlitches()) {
          return dwm.canEnter.minorGlitches();
        }
      }
    }
    this.canGetChest.minorGlitches = function () {
      let mychests = trackerData.zelda3.dungeonchests[8];

      let dwm = new DarkWorldMire("", "", false);
      dwm.initMinorGlitches();

      if (dungeon.canEnter.glitchless()) {
        if (canLightTorches()) {
          if (mychests === 2 &&
            (canInvul() ||
              (has("somaria") && boss.canBeat()))) {
            return true;
          } else if (mychests == 1 &&
            canInvul() &&
            has("somaria") &&
            boss.canBeat()) {
            return true;
          } else {
            return "partial";
          }
        } else {
          return "partial";
        }
      } else if (dwm.canEnter.minorGlitches()) {
        return dwm.canEnter.minorGlitches();
      }
    }
  }
}
