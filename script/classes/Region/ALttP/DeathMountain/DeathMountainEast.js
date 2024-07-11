class DeathMountainEast extends DeathMountain {
  constructor(name = "DeathMountain", subname = "East", buildLocations = true) {
    super(name,subname,buildLocations);
    let regionName = name + subname;
    if(this.buildLocations) {
        this.locations = new LocationCollection([
            new Location("Chest","Spiral Cave","39.9%","9.3%",regionName),
            new Location("Chest","Mimic Cave","42.6%","9.3%",regionName,{equipment:"(%%mirror%% outside of Turtle Rock)(Yellow = %%medallion0%% unknown OR possible w/out %%firerod%%)"}),
//            new Location("Chest","Paradox Cave Lower - Far Left","41.4%","17.1%",regionName),
//            new Location("Chest","Paradox Cave Lower - Left","41.4%","17.1%",regionName),
//            new Location("Chest","Paradox Cave Lower - Right","41.4%","17.1%",regionName),
//            new Location("Chest","Paradox Cave Lower - Far Right","41.4%","17.1%",regionName),
//            new Location("Chest","Paradox Cave Upper - Left","41.4%","17.1%",regionName,{equipment:"%%bomb%%"}),
//            new Location("Chest","Paradox Cave Upper - Right","41.4%","17.1%",regionName,{equipment:"%%bomb%%"}),
            new Location("Chest","Paradox Cave","41.4%","17.1%",regionName,{equipment:"(5 + 2 %%bomb%%)"}),
            new Location("Standing","Floating Island","40.2%","3.0%",regionName,{equipment:"%%mirror%%"})
        ],this);
    }
  }

  initNoMajorGlitches() {
      let region = this;

    if(this.buildLocations) {
        this.locations["Mimic Cave"].glitchless = function() {
            if(! has("state.inverted")) {
                let tr = new DungeonsTurtleRock("","",false);
                tr.initNoMajorGlitches();

                return has("hammer") && has("mirror") && has("keyd7",2)
                    && tr.canEnter.glitchless();
            } else if(has("state.inverted")) {
                return (! isBunny(region.name)) && has("hammer");
            }
        }
        this.locations["Floating Island"].glitchless = function() {
            return (has("mirror") && has("pearl")
                && canLiftDarkRocks()) || (has("state.inverted"));
        }
    }

    this.canEnter.glitchless = function() {
        if(! has("state.inverted")) {
            let wdm = new DeathMountainWest("","",false);
            wdm.initNoMajorGlitches();

            return wdm.canEnter.glitchless()
                && ((has("hammer") && has("mirror"))
                || canGrapple());
        } else if(has("state.inverted")) {
            let dwdme = new DarkWorldDeathMountainEast("","",false);
            dwdme.initNoMajorGlitches();

            return dwdme.canEnter.glitchless();
        }
    }
  }

  initMinorGlitches() {
      let region = this;

    this.initNoMajorGlitches();

    if(this.buildLocations) {
        this.locations["Spiral Cave"].minorGlitches =
        this.locations["Paradox Cave"].minorGlitches = function() {
            return (! isBunny(region.name));
        }
        this.locations["Floating Island"].minorGlitches = function() {
            let ret = this.glitchless();

            if(ret) {
                return ret;
            }

            return "glitchviewable";
        }
    }
    this.canEnter.minorGlitches = function() {
        if(! has("state.inverted")) {
            let ret = this.glitchless();
            let wdm = new DeathMountainWest("","",false);
            wdm.initMinorGlitches();

            if(ret) {
                return ret;
            }
            if(wdm.canEnter.minorGlitches()
                && ((has("hammer") && has("mirror"))
                || canGrapple())) {
                return wdm.canEnter.minorGlitches();
            }
        } else if(has("state.inverted")) {
            return false;
        }
    }
  }

  initOverworldGlitches() {
    let region = this;

    this.initMinorGlitches();

    if(this.buildLocations) {
        this.locations["Mimic Cave"].owGlitches = function() {
            let edwdm = new DarkWorldDeathMountainEast("","",false);
            edwdm.initOverworldGlitches();

            return has("hammer") && has("mirror")
                && edwdm.canEnter.owGlitches();
        }
        this.locations["Floating Island"].owGlitches = function() {
            let edwdm = new DarkWorldDeathMountainEast("","",false);
            edwdm.initOverworldGlitches();

            return canDash()
                || (has("mirror") && (! isBunny(region.name))
                    && canLiftRocks() && edwdm.canEnter.owGlitches());
        }
    }

    this.canEnter.owGlitches = function() {
        if(! has("state.inverted")) {
            let wdm = new DeathMountainWest("","",false);
            wdm.initOverworldGlitches();

            return (canDash()
                || ((canGrapple() || has("mirror"))
                    && wdm.canEnter.owGlitches()));
        }
    }
  }

  initMajorGlitches() {
    this.initOverworldGlitches();

    if(this.buildLocations) {
        this.locations["Floating Island"].majorGlitches = function() {
            let edwdm = new DarkWorldDeathMountainEast("","",false);
            edwdm.initMajorGlitches();

            return canDash()
                || (has("mirror") && glitchedLinkInDarkWorld()
                    && canLiftRocks() && edwdm.canEnter.majorGlitches());
        }
    }
  }
}
