class DungeonsEasternPalace extends Dungeons {
  constructor(name = "Dungeons", subname = "EasternPalace", buildLocations = true) {
    super(name, subname, buildLocations);
    let regionName = name + subname;
    if (this.buildLocations) {
      this.locations = new LocationCollection([
        new Location("Chest", "Eastern Palace - Compass Chest", "", "", regionName),
        new Location("BigChest", "Eastern Palace - Big Chest", "", "", regionName),
        new Location("Chest", "Eastern Palace - Cannonball Chest", "", "", regionName),
        new Location("Chest", "Eastern Palace - Big Key Chest", "", "", regionName),
        new Location("Chest", "Eastern Palace - Map Chest", "", "", regionName),
        new Location("Event", "Eastern Palace - Boss", "46.8%", "38.8%", regionName, {equipment: "%%lantern%%/%%firerod%%"})
      ], this);
    }

    this.boss = new BossArmosKnights();
  }

  initNoMajorGlitches() {
    let boss = this.boss;
    let dungeon = this;

    if (this.buildLocations) {
      this.locations["Eastern Palace - Big Chest"].glitchless = function () {
        return has("bigkeyp1");
      }
      this.locations["Eastern Palace - Big Key Chest"].glitchless = function () {
        return has("lantern");
      }
    }
    this.locations["Eastern Palace - Boss"].glitchless = function () {
      return canShootArrows() &&
        torchCheck() && has("bigkeyp1") &&
        boss.canBeat();
    }

    this.canEnter.glitchless = function () {
      if (!has("state.inverted")) {
        return true;
      } else if (has("state.inverted")) {
        let warps = new HyruleWarpsMain("", "", true);
        warps.initNoMajorGlitches();

        if (
          warps.locations["Kakariko Teleporter (Dark)"].glitchless() ||
          warps.locations["East Hyrule Teleporter (Dark)"].glitchless() ||
          warps.locations["South Hyrule Teleporter (Dark)"].glitchless() ||
          warps.locations["Dark Desert Teleporter (Dark)"].glitchless()
        ) {
          return (!isBunny(dungeon.subname));
        }
      }
    }
    this.canComplete.glitchless = function () {
      return dungeon.locations["Eastern Palace - Boss"].glitchless();
    }
    this.canGetChest.glitchless = function () {
      let mychests = trackerData.zelda3.dungeonchests[0];
      // Nothing:         Cannonball Chest, Map Chest, Compass Chest, Big Chest
      // Lantern:         Big Key Chest
      // Fire Rod && Bow: Boss
      let gettablechests = 6; // Start with 6
      gettablechests -= 3;    // Remove Big Key, Compass, Map
      if(!has("lantern")) {   // Can't get Big Key Chest
        gettablechests -= 1;
      }
      if(!(torchCheck() && has("bow"))) { // Can't get Boss Drop
        gettablechests -= 1;
      }
      if(gettablechests >= mychests) {
        return true;
      } else if(mychests - gettablechests > 0) {
        return "partial";
      } else {
        return false;
      }
    }
  }

  initMinorGlitches() {
    this.initNoMajorGlitches();

    let boss = this.boss;
    let dungeon = this;

    this.locations["Eastern Palace - Boss"].minorGlitches = function () {
      let ret = this.glitchless();

      if (ret) {
        return ret;
      }
      if (canShootArrows() && has("bigkey") && boss.canBeat()) {
        return "glitchavailable";
      }
    }
    this.canComplete.minorGlitches = function () {
      return dungeon.locations["Eastern Palace - Boss"].minorGlitches();
    }
  }
}