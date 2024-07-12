class DarkWorldSouth extends DarkWorld {
  constructor(name = "DarkWorld", subname = "South", buildLocations = true) {
    super(name,subname,buildLocations);
    let regionName = name + subname;
    if(this.buildLocations) {
        this.locations = new LocationCollection([
//            new Location("Chest","Hype Cave - Top","80.0%","77.1%",regionName,{equipment:"%%bomb%% (NPC + 4 %%bomb%%)"}),
//            new Location("Chest","Hype Cave - Middle Right","80.0%","77.1%",regionName,{equipment:"%%bomb%% (NPC + 4 %%bomb%%)"}),
//            new Location("Chest","Hype Cave - Middle Left","80.0%","77.1%",regionName,{equipment:"%%bomb%% (NPC + 4 %%bomb%%)"}),
//            new Location("Chest","Hype Cave - Bottom","80.0%","77.1%",regionName,{equipment:"%%bomb%% (NPC + 4 %%bomb%%)"}),
            new Location("NPC","Stumpy","65.5%","68.6%",regionName),
//            new Location("NPC","Hype Cave - NPC","80.0%","77.1%",regionName,{equipment:"(+4)%%bomb%%"}),
            new Location("NPC","Hype Cave","80.0%","77.1%",regionName,{equipment:"(+4)%%bomb%%"}),
            new Location("Dig","Digging Game","52.9%","69.2%",regionName,{equipment:"- 80 Rupees"})
        ],this);
    }
  }

  initNoMajorGlitches() {
    let region = this;

    this.canEnter.glitchless = function() {
        if(! has("state.inverted")) {
            let dwne = new DarkWorldNorthEast("","",false);
            dwne.initNoMajorGlitches();
            let warps = new HyruleWarpsMain();
            warps.initNoMajorGlitches();

            return (! isBunny(region.name))
                && ((dwne.canEnter.glitchless() && (has("hammer")
                    || (canGrapple() && (canSwim() || canLiftRocks()))))
                    || warps.locations["Kakariko Teleporter (Dark)"].glitchless());
        } else if(has("state.inverted")) {
            return true;
        }
    }
  }

  initMinorGlitches() {
    let region = this;

    this.initNoMajorGlitches();

    if(this.buildLocations) {
    }
    this.canEnter.minorGlitches = function() {
        let ret = this.glitchless();

        if(ret) {
            return ret;
        }

        if(! has("state.inverted")) {
            let dwne = new DarkWorldNorthEast("","",false);
            dwne.initMinorGlitches();
            let warps = new HyruleWarpsMain();
            warps.initNoMajorGlitches();

            if((! isBunny(region.name))
                && ((dwne.canEnter.minorGlitches() && (has("hammer")
                    || (canGrapple() && (canSwim() || canLiftRocks()))))
                    || warps.locations["Kakariko Teleporter (Dark)"].glitchless())) {
                return dwne.canEnter.minorGlitches();
            }
        } else if(has("state.inverted")) {
            return true;
        }
    }
  }

  initOverworldGlitches() {
    let region = this;

    this.initMinorGlitches();

    if(this.buildLocations) {
        for(var loc in this.locations) {
            this.locations[loc].owGlitches = function() {
                return has("moonpearl");
            }
        }
    }

    this.canEnter.owGlitches = function() {
        let wdm = new DeathMountainWest("","",false);
        wdm.initOverworldGlitches();

        return (((! isBunny(region.name))
            && (canLiftDarkRocks()
                || (has("hammer") && canLiftRocks())
                || (has("agahnim") && (has("hammer")
                    || (canGrapple() && (canLiftRocks() || canSwim()))))))
            || ((has("mirror") || (canDash() && (! isBunny(region.name))))
                && wdm.canEnter.owGlitches()));
    }
  }

  initMajorGlitches() {
    let region = this;

    this.initOverworldGlitches();

    if(this.buildLocations) {
        for(var loc in this.locations) {
            this.locations[loc].majorGlitches = function() {
                return glitchedLinkInDarkWorld();
            }
        }
    }

    this.canEnter.majorglitches = function() {
        let wdm = new DeathMountainWest("","",false);
        wdm.initOverworldGlitches();

        return (((! isBunny(region.name))
            && (canLiftDarkRocks()
                || (has("hammer") && canLiftRocks())
                || (has("agahnim") && (has("hammer")
                    || (canGrapple() && (canLiftRocks() || canSwim()))))))
            || wdm.canEnter.owGlitches());
    }
  }
}
