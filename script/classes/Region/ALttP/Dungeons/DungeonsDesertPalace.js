class DungeonsDesertPalace extends Dungeons {
  constructor(name = "Dungeons", subname = "DesertPalace", buildLocations = true) {
    super(name,subname,buildLocations);
    let regionName = name + subname;
    this.locations = new LocationCollection([
        new Location("BigChest","Desert Palace - Big Chest","","",regionName),
        new Location("Chest","Desert Palace - Map Chest","","",regionName),
        new Location("Dash","Desert Palace - Torch","","",regionName),
        new Location("Chest","Desert Palace - Big Key Chest","","",regionName),
        new Location("Chest","Desert Palace - Compass Chest","","",regionName),
        new Location("Event","Desert Palace - Lanmolas","3.8%","78.4%",regionName)
    ],this);

    this.boss = new BossLanmolas();
  }

  initNoMajorGlitches() {
    let boss = this.boss;
    let dungeon = this;

    if(this.buildLocations) {
        this.locations["Desert Palace - Big Chest"].glitchless = function() {
            return has("bigkey");
        }
        this.locations["Desert Palace - Big Key Chest"].glitchless =
        this.locations["Desert Palace - Compass Chest"].glitchless = function() {
            return has("key");
        }
        this.locations["Desert Palace - Torch"].glitchless = function() {
            return canDash();
        }
    }
    this.locations["Desert Palace - Lanmolas"].glitchless = function() {
        return (canLiftRocks() || (canAccessMiseryMirePortal() && has("mirror"))) && canLightTorches()
            && has("bigkey") && has("key")
            && boss.canBeat();
    }

    this.canEnter.glitchless = function() {
        return (! isBunny(dungeon.subname)) && (canRead()
            || (has("mirror") && canLiftDarkRocks() && canFly())
            || (canAccessMiseryMirePortal() && has("mirror"))
        );
    }
    this.canComplete.glitchless = function() {
        return dungeon.locations["Desert Palace - Lanmolas"].glitchless();
    }
    this.canGetChest.glitchless = function() {
        let mychests = trackerData.zelda3.dungeonchests[1];
        if(
            canDash()
            && (mychests === 2
                || (boss.canBeat()
                    && canLightTorches()
                    && canLiftRocks()
                )
            )
        ) {
            return "available";
        } else {
            return "partial";
        }
    }
  }

  initOverworldGlitches() {
    let boss = this.boss;

    this.initNoMajorGlitches();

    if(this.buildLocations) {
        this.locations["Desert Palace - Lanmolas"].owGlitches = function() {
            let dwm = new DarkWorldMire("","",false);
            dwm.initOverworldGlitches();

            return canLightTorches()
                && has("bigkey") && has("key")
                && boss.canBeat()
                && ((canRead() && canLiftRocks())
                    || canDash()
                    || (has("mirror") && dwm.canEnter.owGlitches()));
        }
    }

    this.canEnter.owGlitches = function() {
        let dwm = new DarkWorldMire("","",false);
        dwm.initOverworldGlitches();

        return (canRead()
            || canDash()
            || (has("mirror") && dwm.canEnter.owGlitches()));
    }
  }
}
