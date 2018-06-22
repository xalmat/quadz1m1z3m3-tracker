class DungeonsHyruleCastleTower extends Dungeons {
  constructor(name = "Dungeons", subname = "HyruleCastleTower") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chest","Castle Tower - Room 03","","",regionName),
		new Location("Chest","Castle Tower - Dark Maze","","",regionName),
		new Location("Boss","Castle Tower - Agahnim","","",regionName)
	],this);

	this.boss = new BossAgahnim();
  }

  initNoMajorGlitches() {
	this.locations["Castle Tower - Dark Maze"].glitchless = function() {
		return has("lantern") && has("key");
	}

	this.canEnter.glitchless = function() {
		return canKillMostThings(8)
			&& (has("cape")
				|| hasSword(2));
	}
	this.canComplete.glitchless = function() {
		return has("lantern") && (hasSword()
				|| (has("swords.swordless") && (has("hammer") || has("net"))));		// FIXME: Swordless
	}
  }
}
