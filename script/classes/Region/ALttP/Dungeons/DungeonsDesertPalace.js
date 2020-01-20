class DungeonsDesertPalace extends Dungeons {
  constructor(name = "Dungeons", subname = "DesertPalace", buildLocations = true) {
    super(name, subname, buildLocations);
    let regionName = name + subname;
    this.locations = new LocationCollection([
      new Location("BigChest", "Desert Palace - Big Chest", "", "", regionName),
      new Location("Chest", "Desert Palace - Map Chest", "", "", regionName),
      new Location("Dash", "Desert Palace - Torch", "", "", regionName),
      new Location("Chest", "Desert Palace - Big Key Chest", "", "", regionName),
      new Location("Chest", "Desert Palace - Compass Chest", "", "", regionName),
      new Location("Event", "Desert Palace - Boss", "3.8%", "78.4%", regionName)
    ], this);

    this.boss = new BossLanmolas();
  }

  initNoMajorGlitches() {
    let boss = this.boss;
    let dungeon = this;

    if (this.buildLocations) {
      this.locations["Desert Palace - Big Chest"].glitchless = function () {
        return has("bigkeyp2");
      }
      this.locations["Desert Palace - Big Key Chest"].glitchless =
        this.locations["Desert Palace - Compass Chest"].glitchless = function () {
          return has("keyp2");
        }
      this.locations["Desert Palace - Torch"].glitchless = function () {
        return canDash();
      }
    }
    this.locations["Desert Palace - Boss"].glitchless = function () {
      // Lift rocks into entrance
      // Mirror from Mire into rocks
      // Need torches to move wall
      return (canLiftRocks() || (canAccessMiseryMirePortal() && has("mirror"))) && canLightTorches() &&
        has("bigkeyp2") && has("keyp2") &&
        boss.canBeat();
    }

    this.canEnter.glitchless = function () {
      let lws = new LightWorldSouth("", "", false);
      lws.initNoMajorGlitches();
      let mire = new DarkWorldMire("", "", false);
      mire.initNoMajorGlitches();
      return (canRead() && lws.canEnter.glitchless()) || // Vanilla entry
        mire.canEnter.glitchless() && has("mirror"); // Desert Palace backdoor
    }
    this.canComplete.glitchless = function () {
      return dungeon.locations["Desert Palace - Boss"].glitchless();
    }
    this.canGetChest.glitchless = function () {
      let mychests = trackerData.zelda3.dungeonchests[1];
      if (
        canDash() &&
        (mychests === 2 ||
          (boss.canBeat() &&
            canLightTorches() &&
            canLiftRocks()
          )
        )
      ) {
        return "available";
      } else {
        return "partial";
      }
    }
  }
}
