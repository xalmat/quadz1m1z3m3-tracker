class DungeonsMiseryMire extends Dungeons {
  constructor(name = "Dungeons", subname = "MiseryMire", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("BigChest","Misery Mire - Big Chest","","",regionName),
			new Location("SpawnableChest","Misery Mire - Main Lobby","","",regionName),
			new Location("Chest","Misery Mire - Big Key Chest","","",regionName),
			new Location("Chest","Misery Mire - Compass Chest","","",regionName),
			new Location("Chest","Misery Mire - Bridge Chest","","",regionName),
			new Location("Chest","Misery Mire - Map Chest","","",regionName),
			new Location("SpawnableChest","Misery Mire - Spike Chest","","",regionName),
			new Location("Event","Misery Mire - Vitreous","55.8%","82.9%",regionName,{equipment:"%%medallion0%%%%lantern%%"})
		],this);
	}

	this.boss = new BossVitreous();
  }

  initNoMajorGlitches() {
    let boss = this.boss;

	if(this.buildLocations) {
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
		this.locations["Misery Mire - Vitreous"].glitchless = function() {
			return has("somaria") && has("lantern")
				&& has("bigkey")
				&& boss.canBeat();
		}
	}

	this.canEnter.glitchless = function() {
		let dwm = new DarkWorldMire("","",false);
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
		  let dwm = new DarkWorldMire("","",false);

		  return (has("miremedallion") && canActivateMedallions())
		  	&& (has("moonpearl") || (has("bottle") && canDash()))
		  	&& (canDash() || canGrapple())
		  	&& dwm.canEnter.majorglitches();
	  }
	  this.canComplete.majorglitches = function() {
		  let toh = new DungeonsTowerOfHera("","",false);
		  toh.initMajorGlitches();

		  let sp = new DungeonsSwampPalace("","",false);
		  sp.initMajorGlitches();

		  return (this.canEnter.majorglitches()
		  	&& has("somaria") && has("lantern")
		  	&& has("bigkey") && (
					hasSword() || has("hammer") || canShootArrows()
			))
			|| has("key",3)
			&& (toh.locations["Tower of Hera - Moldorm"].majorglitches()
				|| sp.locations["Swamp Palace - Arrghus"].majorglitches());
	  }
  }
}
