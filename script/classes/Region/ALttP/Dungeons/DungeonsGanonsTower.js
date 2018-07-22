class DungeonsGanonsTower extends Dungeons {
  constructor(name = "Dungeons", subname = "GanonsTower", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("Dash","Ganon's Tower - Bob's Torch","","",regionName),
			new Location("Chest","Ganon's Tower - DMs Room - Top Left","","",regionName),
			new Location("Chest","Ganon's Tower - DMs Room - Top Right","","",regionName),
			new Location("Chest","Ganon's Tower - DMs Room - Bottom Left","","",regionName),
			new Location("Chest","Ganon's Tower - DMs Room - Bottom Right","","",regionName),
			new Location("Chest","Ganon's Tower - Randomizer Room - Top Left","","",regionName),
			new Location("Chest","Ganon's Tower - Randomizer Room - Top Right","","",regionName),
			new Location("Chest","Ganon's Tower - Randomizer Room - Bottom Left","","",regionName),
			new Location("Chest","Ganon's Tower - Randomizer Room - Bottom Right","","",regionName),
			new Location("Chest","Ganon's Tower - Firesnake Room","","",regionName),
			new Location("Chest","Ganon's Tower - Map Chest","","",regionName),
			new Location("BigChest","Ganon's Tower - Big Chest","","",regionName),
			new Location("Chest","Ganon's Tower - Hope Room - Left","","",regionName),
			new Location("Chest","Ganon's Tower - Hope Room - Right","","",regionName),
			new Location("Chest","Ganon's Tower - Bob's Chest","","",regionName),
			new Location("SpawnableChest","Ganon's Tower - Tile Room","","",regionName),
			new Location("Chest","Ganon's Tower - Compass Room - Top Left","","",regionName),
			new Location("Chest","Ganon's Tower - Compass Room - Top Right","","",regionName),
			new Location("Chest","Ganon's Tower - Compass Room - Bottom Left","","",regionName),
			new Location("Chest","Ganon's Tower - Compass Room - Bottom Right","","",regionName),
			new Location("Chest","Ganon's Tower - Big Key Chest","","",regionName),
			new Location("Chest","Ganon's Tower - Big Key Room - Left","","",regionName),
			new Location("Chest","Ganon's Tower - Big Key Room - Right","","",regionName),
			new Location("Chest","Ganon's Tower - Mini Helmasaur Room - Left","","",regionName),
			new Location("Chest","Ganon's Tower - Mini Helmasaur Room - Right","","",regionName),
			new Location("Chest","Ganon's Tower - Pre-Moldorm Chest","","",regionName),
			new Location("Chest","Ganon's Tower - Moldorm Chest","","",regionName),
			new Location("Boss","Ganon's Tower - Armos Knights2","","",regionName),	// FIXME: Basement Refight, not Enemizer-compatible
			new Location("Boss","Ganon's Tower - Lanmolas2","","",regionName),		// FIXME: Ascent Refight, not Enemizer-compatible
			new Location("Boss","Ganon's Tower - Moldorm2","","",regionName),		// FIXME: Top Refight, not Enemizer-compatible
			new Location("Event","Ganon's Tower - Agahnim2","77.0%","5.5%",regionName)
		],this);
	}

	this.boss = new BossAgahnim();
	this.boss_bottom = new BossArmosKnights();
	this.boss_middle = new BossLanmolas();
	this.boss_top = new BossMoldorm();
  }

  initNoMajorGlitches() {
	let boss = this.boss;
	let boss_bottom = this.boss_bottom;
	let boss_middle = this.boss_middle;
	let boss_top = this.boss_top;
	let dungeon = this;

	if(this.buildLocations) {
		this.locations["Ganon's Tower - Bob's Torch"].glitchless = function() {
			return canDash();
		}
		this.locations["Ganon's Tower - DMs Room - Top Left"].glitchless =
		this.locations["Ganon's Tower - DMs Room - Top Right"].glitchless =
		this.locations["Ganon's Tower - DMs Room - Bottom Left"].glitchless =
		this.locations["Ganon's Tower - DMs Room - Bottom Right"].glitchless = function () {
			return has("hammer") && canGrapple();
		}
		this.locations["Ganon's Tower - Randomizer Room - Top Left"].glitchless =
		this.locations["Ganon's Tower - Randomizer Room - Top Right"].glitchless =
		this.locations["Ganon's Tower - Randomizer Room - Bottom Left"].glitchless =
		this.locations["Ganon's Tower - Randomizer Room - Bottom Right"].glitchless = function() {
			return has("hammer") && canGrapple() && has("key",4);
		}
		this.locations["Ganon's Tower - Firesnake Room"].glitchless = function() {
			return has("hammer") && canGrapple() && has("key",3);
		}
		this.locations["Ganon's Tower - Map Chest"].glitchless = function() {
			return has("hammer") && (canDash() || canGrapple())
				&& has("key",4);
		}
		this.locations["Ganon's Tower - Big Chest"].glitchless = function() {
			return has("bigkey") && has("key",3)
				&& ((has("hammer") && canGrapple()) || (has("firerod") && has("somaria")));
		}
		this.locations["Ganon's Tower - Bob's Chest"].glitchless = function() {
			return ((has("hammer") && canGrapple())
				|| (has("firerod") && has("somaria")))
				&& has("key",3);
		}
		this.locations["Ganon's Tower - Tile Room"].glitchless = function() {
			return has("somaria");
		}
		this.locations["Ganon's Tower - Compass Room - Top Left"].glitchless =
		this.locations["Ganon's Tower - Compass Room - Top Right"].glitchless =
		this.locations["Ganon's Tower - Compass Room - Bottom Left"].glitchless =
		this.locations["Ganon's Tower - Compass Room - Bottom Right"].glitchless = function(){
			return has("firerod") && has("somaria")
				&& has("key",4);
		}
		this.locations["Ganon's Tower - Big Key Chest"].glitchless =
		this.locations["Ganon's Tower - Big Key Room - Left"].glitchless =
		this.locations["Ganon's Tower - Big Key Room - Right"].glitchless = function() {
			return ((has("hammer") && canGrapple())
				|| (has("firerod") && has("somaria")))
				&& has("key",3)
				&& boss_bottom.canBeat();
		}
		this.locations["Ganon's Tower - Mini Helmasaur Room - Left"].glitchless =
		this.locations["Ganon's Tower - Mini Helmasaur Room - Right"].glitchless = function() {
			return canShootArrows() && canLightTorches()
				&& has("bigkey") && has("key",3)
				&& boss_middle.canBeat();
		}
		this.locations["Ganon's Tower - Pre-Moldorm Chest"].glitchless = function() {
			return canShootArrows() && canLightTorches()
				&& has("bigkey") && has("key",3)
				&& boss_middle.canBeat();
		}
		this.locations["Ganon's Tower - Moldorm Chest"].glitchless = function() {
			return canGrapple()
				&& canShootArrows() && canLightTorches()
				&& has("bigkey") && has("key",4)
				&& boss_middle.canBeat()
				&& boss_top.canBeat();
		}
	}

	this.canEnter.glitchless = function() {
		let dwdme = new DarkWorldDeathMountainEast("","",false);
		dwdme.initNoMajorGlitches();

		return has("moonpearl")
			&& has("crystal1")
			&& has("crystal2")
			&& has("crystal3")
			&& has("crystal4")
			&& has("crystal5")
			&& has("crystal6")
			&& has("crystal7")
			&& has("motherbrain")
			&& dwdme.canEnter.glitchless();
	}
	this.canComplete.glitchless = function() {
		return dungeon.locations["Ganon's Tower - Moldorm Chest"].glitchless()
			&& boss.canBeat();
	}
  }

  initMinorGlitches() {
	  this.initNoMajorGlitches();

	  let dungeon = this;

	  this.canEnter.minorGlitches = function() {
		  let crystalCount = 0;
		  for(let k = 0; k < 10; k++) {
			  if(((trackerData.zelda3.prizes[k] === OJCRYSTAL) || (trackerData.zelda3.prizes[k] === CRYSTAL)) && trackerData.zelda3.items["boss" + k] === 2) {
				  crystalCount++;
				  if(crystalCount === 7) {
					  break;
				  }
			  }
		  }
		  let ret = crystalCount === 7 && has("moonpearl");
		  let dwdme = new DarkWorldDeathMountainEast("","",false);
		  dwdme.initMinorGlitches();

		  if(ret) {
			  if(dwdme.canEnter.minorGlitches()) {
				  return dwdme.canEnter.minorGlitches();
			  }
		  }
	  }
	  this.canGetChest.minorGlitches = function() {
		  let smallKeysNeeded = 0;
		  let bigKeyNeeded = 0;
		  let bigKeyGuaranteed = 0;

		  // Hope Room x2
		  let minAvailableChests = 2;
		  let maxAvailableChests = 2;

		  // Bob's Torch
		  if(canDash()) {
			  minAvailableChests++;
			  maxAvailableChests++;
		  }

		  //DMs Room x4 + Randomizer Room x4 + Firesnake Room
		  if (has("hammer") && canGrapple()) {
			  minAvailableChests += 9;
			  maxAvailableChests += 9;
			  smallKeysNeeded = 4;
		  }

		  // Map Chest
		  if (has("hammer")
		  	&& (canDash() || canGrapple())) {
				minAvailableChests++;
				maxAvailableChests++;
		  }

		  // Bob's Chest + Big Key Room x3
		  if ((has("hammer") && canGrapple())
		  	|| (has("firerod") && has("somaria"))) {
				minAvailableChests += 4;
				maxAvailableChests += 4;
				smallKeysNeeded = Math.max(3, smallKeysNeeded);
		  }

		  // Tile Room
		  if (has("somaria")) {
			  minAvailableChests++;
			  maxAvailableChests++;
		  }

		  // Compass Room x4
		  if (has("firerod") && has("somaria")) {
			  minAvailableChests += 4;
			  maxAvailableChests += 4;
			  smallKeysNeeded = Math.max(4, smallKeysNeeded);
 		  }

 		  // Big Chest
 		  if (has("hammer")
 		  	&& canDash()
 		  	&& canGrapple()
 		  	&& has("somaria")
 		  	&& has("firerod")) {
				minAvailableChests++;
				maxAvailableChests++;
				bigKeyNeeded = 1;
				bigKeyGuaranteed = true;
		  }

		  // Mini Helmasaur Room x2 + Pre-Moldorm Chest
		  if (has("bow") && canLightTorches()) {
			  if (bigKeyGuaranteed) {
				  minAvailableChests += 3;
			  }
			  maxAvailableChests += 3;
			  smallKeysNeeded = Math.max(3, smallKeysNeeded);
			  bigKeyNeeded = 1;
		  }

		  // Moldorm Chest
		  if (canGrapple()
		  	&& has("bow")
		  	&& canLightTorches()
		  	&& (has("hammer") || hasSword())) {
				if (bigKeyGuaranteed) {
					minAvailableChests++;
				}
				maxAvailableChests++;
				smallKeysNeeded = Math.max(4, smallKeysNeeded);
				bigKeyNeeded = 1;
		  }

		  let maxItemsAvailable = Math.min(20, maxAvailableChests - smallKeysNeeded - bigKeyNeeded);

		  // 4 keys + big key + map + compass

		  let minItemsAvailable = Math.max(0, minAvailableChests - 7);

		  let mychests = trackerData.zelda3.dungeonchests[10];

		  if(dungeon.canEnter.glitchless()) {
			  if(mychests > (20 - minItemsAvailable)) {
				  return true;
			  } else if(mychests > (20 - maxItemsAvailable)) {
				  return "partial";
			  }
		  } else if(dungeon.canEnter.minorGlitches()) {
			  if(mychests > (20 - minItemsAvailable)) {
				  return "glitchavailable";
			  } else if(mychests > (20 - maxItemsAvailable)) {
				  return "glitchpartial";
			  }
		  }
	}
  }

  initOverworldGlitches() {
	  this.initMinorGlitches();

	  this.canEnter.owGlitches = function() {
		  return canDash() && has("moonpearl");
	  }
  }

  initMajorGlitches() {
	  this.initOverworldGlitches();

	  this.canEnter.majorGlitches = function() {
		  let dmw = new DeathMountainWest("","",false);

		  return dmw.canEnter.majorGlitches();
	  }
  }
}
