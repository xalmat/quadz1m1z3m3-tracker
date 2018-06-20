class DungeonsMiseryMire extends Dungeons {
  constructor(name = "Dungeons", subname = "MiseryMire") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("BigChest","Misery Mire - Big Chest","","",regionName),
		new Location("Chest","Misery Mire - Main Lobby","","",regionName),
		new Location("Chest","Misery Mire - Big Key Chest","","",regionName),
		new Location("Chest","Misery Mire - Compass Chest","","",regionName),
		new Location("Chest","Misery Mire - Bridge Chest","","",regionName),
		new Location("Chest","Misery Mire - Map Chest","","",regionName),
		new Location("Chest","Misery Mire - Spike Chest","","",regionName),
		new Location("Boss","Vitreous","","",regionName)
	],this);

	this.boss = new BossVitreous();
  }

  initNoMajorGlitches() {
	this.locations["Misery Mire - Big Chest"].glitchless = function() {
		return has("bigkey");
	}
	this.locations["Misery Mire - Spike Chest"].glitchless = function() {
		return (!has("variation.ohko"))										// FIXME: OHKO
			|| canInvul();
	}
	this.locations["Misery Mire - Main Lobby"].glitchless =
	this.locations["Misery Mire - Map Chest"].glitchless = function() {
		return has("key") || has("bigkey");
	}
	this.locations["Misery Mire - Big Key Chest"].glitchless =
	this.locations["Misery Mire - Compass Chest"].glitchless = function() {
		return canLightTorches()
			&& has("key",3);
	}

	this.locations["Vitreous"].glitchless = function() {
		return has("somaria") && has("lantern")
			&& has("bigkey")
			&& this.boss.canBeat();
	}

	this.canEnter.glitchless = function() {
		let dwm = new DarkWorldMire();
		dwm.initNoMajorGlitches();

		return (has("miremedallion") && canActivateMedallions())
			&& has("moonpearl") && (canDash() || canGrapple())
			&& canKillMostThings(8)
			&& dwm.canEnter.glitchless();
	}
	this.canComplete.glitchless = function() {
		return this.locations["Vitreous"].glitchless();
	}
  }

  initMajorGlitches() {
	  this.initOverworldGlitches();

	  this.canEnter.majorglitches = function() {
		  let dwm = new DarkWorldMire();

		  return (has("miremedallion") && canActivateMedallions())
		  	&& (has("moonpearl") || (has("bottle") && canDash()))
		  	&& (canDash() || canGrapple())
		  	&& dwm.canEnter.majorglitches();
	  }
	  this.canComplete.majorglitches = function() {
		  let toh = new DungeonsTowerOfHera();
		  toh.initMajorGlitches();

		  let sp = new DungeonsSwampPalace();
		  sp.initMajorGlitches();

		  return (this.canEnter.majorglitches()
		  	&& has("somaria") && has("lantern")
		  	&& has("bigkey") && (
					hasSword() || has("hammer") || canShootArrows()
			))
			|| has("key",3)
			&& (toh.locations["Tower of Hera - Moldorm"].majorglitches()
				|| sp.locations["Swamp Palace - Arrghus"].majorglitches())
			);
	  }
  }
}
