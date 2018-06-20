class DungeonsHyruleCastleEscape extends Dungeons {
  constructor(name = "Dungeons", subname = "HyruleCastleEscape") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chest","Sanctuary","","",regionName),
		new Location("Chest","Sewers - Secret Room - Left","","",regionName),
		new Location("Chest","Sewers - Secret Room - Middle","","",regionName),
		new Location("Chest","Sewers - Secret Room - Right","","",regionName),
		new Location("Chest","Sewers - Dark Cross","","",regionName),
		new Location("Chest","Hyrule Castle - Boomerang Chest","","",regionName),
		new Location("Chest","Hyrule Castle - Map Chest","","",regionName),
		new Location("Chest","Hyrule Castle - Zelda's Cell","","",regionName),
		new Location("NPC","Link's Uncle","","",regionName),
		new Location("Chest","Secret Passage","","",regionName)
	],this);
  }

  initNoMajorGlitches() {
	this.locations["Sanctuary"].glitchless = function() {
		if(has("state.open")) {												// FIXME: Open State
			return true;
		}
		return canKillMostThings() && has("key");
	}
	this.locations["Sewers - Secret Room - Left"].glitchless =
	this.locations["Sewers - Secret Room - Middle"].glitchless =
	this.locations["Sewers - Secret Room - Right"].glitchless = function() {
		if(has("state.open")) {												// FIXME: Open State
			return canLiftRocks() || (has("lantern") && has("key"));
		}

		return canKillMostThings() && has("key");
	}
	this.locations["Hyrule Castle - Boomerang Chest"].glitchless =
	this.locations["Hyrule Castle - Map Chest"].glitchless =
	this.locations["Hyrule Castle - Zelda's Cell"].glitchless = function() {
		if(has("state.open")) {												// FIXME: Open State
			return has("key");
		}

		return canKillMostThings();
	}
	this.locations["Secret Passage"].glitchless = function() {
		if(has("state.open")) {												// FIXME: Open State
			return true;
		}

		return canKillMostThings();
	}
	this.locations["Link's Uncle"].glitchless = function() {
		return this.locations["Sanctuary"].glitchless();
	}

	this.canEnter.glitchless = function() {
		return true;
	}
	this.canComplete.glitchless = function() {
		if(has("state.open")) {												// FIXME: Open State
			return true;
		}

		return this.locations["Sanctuary"].glitchless();
	}
  }
}
