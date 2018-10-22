class DungeonsHyruleCastleTower extends Dungeons {
  constructor(name = "Dungeons", subname = "HyruleCastleTower", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("Chest","Castle Tower - Room 03","","",regionName),
			new Location("Chest","Castle Tower - Dark Maze","","",regionName),
			new Location("Event","Castle Tower - Agahnim","23%","36%",regionName)
		],this);
	}

	this.boss = new BossAgahnim();
  }

  initNoMajorGlitches() {
	if(this.buildLocations) {
		this.locations["Castle Tower - Dark Maze"].glitchless = function() {
			return has("lantern") && has("key");
		}
	}

	this.canEnter.glitchless = function() {
		if(has("state.inverted")) {
			// Agahnim's Castle Tower has moved to Ganon's Tower on top of Death Mountain
			let dwdmw = new DarkWorldDeathMountainWest("","",false);
			dwdmw.initNoMajorGlitches();

			return dwdmw.canEnter.glitchless();
		} else {
			return canKillMostThings(8)
				&& (has("cape")
					|| hasSword(2));
		}
	}
	this.canComplete.glitchless = function() {
		return has("lantern") && (hasSword()
				|| (has("swords.swordless") && (has("hammer") || has("net"))));		// FIXME: Swordless
	}
  }
}
