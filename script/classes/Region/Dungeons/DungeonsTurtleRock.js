class DungeonsTurtleRock extends Dungeons {
  constructor(name = "Dungeons", subname = "TurtleRock", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("SpawnableChest","Turtle Rock - Chain Chomps","","",regionName),
			new Location("Chest","Turtle Rock - Compass Chest","","",regionName),
			new Location("Chest","Turtle Rock - Roller Room - Left","","",regionName),
			new Location("Chest","Turtle Rock - Roller Room - Right","","",regionName),
			new Location("BigChest","Turtle Rock - Big Chest","","",regionName),
			new Location("Chest","Turtle Rock - Big Key Chest","","",regionName),
			new Location("Chest","Turtle Rock - Crystaroller Room","","",regionName),
			new Location("Chest","Turtle Rock - Eye Bridge - Bottom Left","","",regionName),
			new Location("Chest","Turtle Rock - Eye Bridge - Bottom Right","","",regionName),
			new Location("Chest","Turtle Rock - Eye Bridge - Top Left","","",regionName),
			new Location("Chest","Turtle Rock - Eye Bridge - Top Right","","",regionName),
			new Location("Event","Turtle Rock - Trinexx","96.9%","7.0%",regionName,{equipment:"%%medallion0%%%%lantern%%"})
		],this);
	}

	this.boss = new BossTrinexx();
  }

  initNoMajorGlitches() {
	let boss = this.boss;
	let region = this;

	if(this.buildLocations) {
		this.locations["Turtle Rock - Chain Chomps"].glitchless = function() {
			return has("key");
		}
		this.locations["Turtle Rock - Roller Room - Left"].glitchless =
		this.locations["Turtle Rock - Roller Room - Right"].glitchless = function() {
			return has("firerod") && has("somaria");
		}
		this.locations["Turtle Rock - Compass Chest"].glitchless = function() {
			return has("somaria");
		}
		this.locations["Turtle Rock - Big Chest"].glitchless = function() {
			return (has("somaria") || has("hookshot"))
				&& has("bigkey") && has("key",2);
		}
		this.locations["Turtle Rock - Big Key Chest"].glitchless = function() {
			return has("key",2);
		}
		this.locations["Turtle Rock - Crystaroller Room"].glitchless = function() {
			return has("bigkey") && has("key",2);
		}
		this.locations["Turtle Rock - Eye Bridge - Bottom Left"].glitchless =
		this.locations["Turtle Rock - Eye Bridge - Bottom Right"].glitchless =
		this.locations["Turtle Rock - Eye Bridge - Top Left"].glitchless =
		this.locations["Turtle Rock - Eye Bridge - Top Right"].glitchless = function() {
			return has("lantern") && has("somaria") && has("bigkey") && has("key",3)
				&& (canInvul() || canBlockLasers());
		}

	}

	this.locations["Turtle Rock - Trinexx"].glitchless = function() {
		return has("key",4)
			&& has("lantern")
			&& has("bigkey") && has("somaria")
			&& boss.canBeat();
	}

	this.canEnter.glitchless = function() {
		let edm = new DeathMountainEast("","",false);
		edm.initNoMajorGlitches();

		return (has("trockmedallion") && canActivateMedallions())
			&& has("moonpearl") && has("somaria")
			&& canLiftDarkRocks() && has("hammer")
			&& edm.canEnter.glitchless();
	}
	this.canComplete.glitchless = function() {
		return region.locations["Turtle Rock - Trinexx"].glitchless();
	}
  }

  initMinorGlitches() {
	  this.initNoMajorGlitches();

	  let boss = this.boss;
	  let dungeon = this;

	  this.hasMedallion = function() {
		  let medallions = ["medallion0","bombos","ether","quake"];
		  let myMedallion = medallions[trackerData.zelda3.medallions[9]];
		  return has(myMedallion) || (has("bombos") && has("ether") && has("quake"));
	  }
	  this.mayHaveMedallion = function() {
		  let myMedallion = trackerData.zelda3.medallions[9];
		  return  !(myMedallion === 1 && !has("bombos"))
		  		|| (myMedallion === 2 && !has("ether"))
		  		|| (myMedallion === 3 && !has("quake"))
		  		|| (!has("bombos") && !has("ether") && !has("quake"));
	  }


	  let lower = function() {
		  // Do nothing until Major Glitches
		  return false;
	  }
	  let middle = function() {
		  // Glitchless does nothing
		  return false;
	  }
	  let upperCan = function() {
		  let ret = dungeon.hasMedallion()
		  	&& hasSword()
		  	&& has("moonpearl")
		  	&& has("somaria")
		  	&& canLiftDarkRocks();
		  let edm = new DeathMountainEast("","",false);
		  edm.initMinorGlitches();

		  if(ret) {
			  if(dungeon.canEnter.glitchless()) {
				  return ret;
			  } else if(dungeon.canEnter.minorGlitches()) {
				  return dungeon.canEnter.minorGlitches();
			  }
		  }
	  }
	  let upperMay = function() {
		  let ret = dungeon.mayHaveMedallion()
		  	&& hasSword()
		  	&& has("moonpearl")
		  	&& has("somaria")
		  	&& canLiftDarkRocks();
		  let edm = new DeathMountainEast();
		  edm.initMinorGlitches();

		  if(ret) {
			  if(dungeon.canEnter.glitchless()) {
				  return ret;
			  } else if(dungeon.canEnter.minorGlitches()) {
				  return dungeon.canEnter.minorGlitches();
			  }
		  }
	  }

	  this.canEnter.minorGlitches = function() {
		  return upperCan();
	  }
	  this.mayEnter.minorGlitches = function() {
		  return upperMay();
	  }
	  this.canGetChest.minorGlitches = function() {
		  let mychests = trackerData.zelda3.dungeonchests[9];
		  if(dungeon.canEnter.glitchless()) {
			  if(has("firerod")) {
				  if(has("lantern") && (canInvul() || canBlockLasers())) {
					  if(mychests >= 2 || dungeon.isBeatable().glitchless === "available") {
						  return true;
					  } else {
						  return "partial";
					  }
				  } else if(mychests >= 2) {
					  return "partial";
				  } else {
					  return "glitchpartial";
				  }
			  } else {
				  if(has("lantern") && (canInvul() || canBlockLasers())) {
					  return "partial";
				  } else if(mychests >= 4) {
					  return "partial";
				  } else {
					  return "glitchpartial";
				  }
			  }
		  } else if(dungeon.mayEnter.glitchless()) {
			  if(has("firerod")) {
				  if(has("lantern") && canInvul() || canBlockLasers()) {
					  return "possible";
				  } else if(mychests >= 4) {
					  return "possible";
				  } else {
					  return "glitchpossible";
				  }
			  }
		  } else if(dungeon.canEnter.minorGlitches()) {
			  if(has("firerod")) {
				  if(mychests >= 2
				  	|| dungeon.isBeatable().glitchless === "available"
				  	|| dungeon.isBeatable().glitchless === "glitchavailable") {
						return "glitchavailable";
				  } else {
					  return "glitchpartial";
				  }
			  } else {
				  return "glitchpartial";
			  }
		  }
	  }
  }

  initOverworldGlitches() {
	this.initMinorGlitches();

	let edwdm = new DarkWorldDeathMountainEast("","",false);
	edwdm.initOverworldGlitches();

	let edm = new DeathMountainEast("","",false);
	edm.initOverworldGlitches();

	let middle = function() {
		return (has("mirror") || (has("moonpearl") && canSpinSpeed()))
		&& (canDash() || has("somaria") || canGrapple()
			|| has("variation.ohko")										// FIXME: OHKO
				&& canInvul())
		&& edwdm.canEnter.owGlitches();
	};

	let upper = function() {
		return has("trockmedallion")
		&& has("moonpearl") && has("somaria")
		&& has("hammer") && (canLiftDarkRocks() || canDash())
		&& edm.canEnter.owGlitches();
	};

	if(this.buildLocations) {
		this.locations["Turtle Rock - Chain Chomps"].owGlitches = function() {
			return (upper() && has("key"))
				|| middle();
		}
		this.locations["Turtle Rock - Roller Room - Left"].owGlitches =
		this.locations["Turtle Rock - Roller Room - Right"].owGlitches =
		this.locations["Turtle Rock - Compass Chest"].owGlitches = function() {
			return has("firerod") && has("somaria")
				&& (upper()
					|| (middle() && has("key",2)
						|| has("key",4)));
		}
		this.locations["Turtle Rock - Big Chest"].owGlitches =
		this.locations["Turtle Rock - Crystaroller Room"].owGlitches = function() {
			return has("bigkey") && ((upper() && has("key",2))
				|| middle());
		}
	}

	this.canEnter.owGlitches = function() {
		return upper() || middle();
	}
  }

  initmajorGlitches() {
	this.initOverworldGlitches();

	let wdm = new DeathMountainWest("","",false);
	wdm.initmajorGlitches();

	let edwdm = new DarkWorldDeathMountainEast("","",false);
	edwdm.initmajorGlitches();

	let edm = new DeathMountainEast("","",false);
	edm.initmajorGlitches();

	let lower = function() {
		return has("mirror") && (has("moonpearl")
			|| (has("bottle") && canDash()))
		&& wdm.canEnter.majorGlitches();
	};

	let middle = function() {
		return (has("mirror") || (glitchedLinkInDarkWorld() && canSpinSpeed()))
		&& (canDash() || has("somaria") || canGrapple()
			|| has("variation.ohko")											// FIXME: OHKO
				&& canInvul())
		&& edwdm.canEnter.majorGlitches();
	};

	let upper = function() {
		return has("trockmedallion")
		&& (has("moonpearl") || (has("bottle") && canDash()))
		&& has("somaria") && has("hammer")
		&& (canLiftDarkRocks() || canDash())
		&& edm.canEnter.majorGlitches();
	}

	if(this.buildLocations) {
		this.locations["Turtle Rock - Chain Chomps"].majorGlitches = function() {
			return (upper() && has("key"))
				|| middle()
				|| (lower() && has("lantern") && has("somaria"));
		}
		this.locations["Turtle Rock - Roller Room - Left"].majorGlitches =
		this.locations["Turtle Rock - Roller Room - Right"].majorGlitches =
		this.locations["Turtle Rock - Compass Chest"].majorGlitches = function() {
			return has("firerod") && has("somaria")
				&& (upper()
					|| (middle() && has("key",2)
						|| has("key",4)))
					|| (lower() && has("lantern") && has("key",4));
		}
		this.locations["Turtle Rock - Big Chest"].majorGlitches = function() {
			return has("bigkey")
				&& ((upper() && has("key",2))
					|| (middle() && (canGrapple() || has("somaria")))
					|| (lower() && has("lantern") && has("somaria")));
		}
		this.locations["Turtle Rock - Big Key Chest"].majorGlitches = function() {
			return ((upper() || middle()) && has("key",2))
				|| (lower() && has("lantern") && has("somaria") && has("key",4));
		}
		this.locations["Turtle Rock - Crystaroller Room"].majorGlitches = function() {
			return has("bigkey") && ((upper() && has("key",2))
				|| middle()
				|| (lower() & has("lantern") && has("somaria")));
		}
		this.locations["Turtle Rock - Eye Bridge - Bottom Left"].majorGlitches =
		this.locations["Turtle Rock - Eye Bridge - Bottom Right"].majorGlitches =
		this.locations["Turtle Rock - Eye Bridge - Top Left"].majorGlitches =
		this.locations["Turtle Rock - Eye Bridge - Top Right"].majorGlitches = function() {
			return (lower()
				|| ((upper() || middle()) &&
					has("lantern") && has("somaria") && has("bigkey") && has("key",3)))
				&& (canInvul() || canBlockLasers());
		}
	}

	this.canEnter.majorGlitches = function() {
		return (lower()
			|| middle()
			|| upper());
	}
	this.canComplete.majorGlitches = function() {
		return has("firerod") && has("icerod")
			&& has("bigkey") && has("somaria")
			&& (has("hammer") || hasSword(2))
			&& has("key",4);
	}
  }
}
