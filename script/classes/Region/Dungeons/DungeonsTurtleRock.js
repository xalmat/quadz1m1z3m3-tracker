class DungeonsTurtleRock extends Dungeons {
  constructor(name = "Dungeons", subname = "TurtleRock") {
	super(name,subname);
	let regionName = name + subname;
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

	this.boss = new BossTrinexx();
  }

  initNoMajorGlitches() {
	let boss = this.boss;

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

	this.locations["Turtle Rock - Trinexx"].glitchless = function() {
		return has("key",4)
			&& has("lantern")
			&& has("bigkey") && has("somaria")
			&& boss.canBeat();
	}

	this.canEnter.glitchless = function() {
		let edm = new DeathMountainEast();
		edm.initNoMajorGlitches();

		return (has("trockmedallion") && canActivateMedallions())
			&& has("moonpearl") && has("somaria")
			&& canLiftDarkRocks() && has("hammer")
			&& edm.canEnter.glitchless();
	}
	this.canComplete.glitchless = function() {
		return this.locations["Turtle Rock - Trinexx"].glitchless();
	}
  }

  initOverworldGlitches() {
	this.initNoMajorGlitches();

	let edwdm = new DarkWorldDeathMountainEast();
	edwdm.initOverworldGlitches();

	let edm = new DeathMountainEast();
	edm.initOverworldGlitches();

	let middle = function() {
		return (has("mirror") || (has("moonpearl") && canSpinSpeed()))
		&& (canDash() || has("somaria") || canGrapple()
			|| has("variation.ohko")										// FIXME: OHKO
				&& canInvul())
		&& edwdm.canEnter.owglitches();
	};

	let upper = function() {
		return has("trockmedallion")
		&& has("moonpearl") && has("somaria")
		&& has("hammer") && (canLiftDarkRocks() || canDash())
		&& edm.canEnter.owglitches();
	};

	this.locations["Turtle Rock - Chain Chomps"].owglitches = function() {
		return (upper() && has("key"))
			|| middle();
	}
	this.locations["Turtle Rock - Roller Room - Left"].owglitches =
	this.locations["Turtle Rock - Roller Room - Right"].owglitches =
	this.locations["Turtle Rock - Compass Chest"].owglitches = function() {
		return has("firerod") && has("somaria")
			&& (upper()
				|| (middle() && has("key",2)
					|| has("key",4)));
	}
	this.locations["Turtle Rock - Big Chest"].owglitches =
	this.locations["Turtle Rock - Crystaroller Room"].owglitches = function() {
		return has("bigkey") && ((upper() && has("key",2))
			|| middle());
	}

	this.canEnter.owglitches = function() {
		return upper() || middle();
	}
  }

  initMajorGlitches() {
	this.initOverworldGlitches();

	let wdm = new DeathMountainWest();
	wdm.initMajorGlitches();

	let edwdm = new DarkWorldDeathMountainEast();
	edwdm.initMajorGlitches();

	let edm = new DeathMountainEast();
	edm.initMajorGlitches();

	let lower = function() {
		return has("mirror") && (has("moonpearl")
			|| (has("bottle") && canDash()))
		&& wdm.canEnter.majorglitches();
	};

	let middle = function() {
		return (has("mirror") || (glitchedLinkInDarkWorld() && canSpinSpeed()))
		&& (canDash() || has("somaria") || canGrapple()
			|| has("variation.ohko")											// FIXME: OHKO
				&& canInvul())
		&& edwdm.canEnter.majorglitches();
	};

	let upper = function() {
		return has("trockmedallion")
		&& (has("moonpearl") || (has("bottle") && canDash()))
		&& has("somaria") && has("hammer")
		&& (canLiftDarkRocks() || canDash())
		&& edm.canEnter.majorglitches();
	}

	this.locations["Turtle Rock - Chain Chomps"].majorglitches = function() {
		return (upper() && has("key"))
			|| middle()
			|| (lower() && has("lantern") && has("somaria"));
	}
	this.locations["Turtle Rock - Roller Room - Left"].majorglitches =
	this.locations["Turtle Rock - Roller Room - Right"].majorglitches =
	this.locations["Turtle Rock - Compass Chest"].majorglitches = function() {
		return has("firerod") && has("somaria")
			&& (upper()
				|| (middle() && has("key",2)
					|| has("key",4)))
				|| (lower() && has("lantern") && has("key",4));
	}
	this.locations["Turtle Rock - Big Chest"].majorglitches = function() {
		return has("bigkey")
			&& ((upper() && has("key",2))
				|| (middle() && (canGrapple() || has("somaria")))
				|| (lower() && has("lantern") && has("somaria")));
	}
	this.locations["Turtle Rock - Big Key Chest"].majorglitches = function() {
		return ((upper() || middle()) && has("key",2))
			|| (lower() && has("lantern") && has("somaria") && has("key",4));
	}
	this.locations["Turtle Rock - Crystaroller Room"].majorglitches = function() {
		return has("bigkey") && ((upper() && has("key",2))
			|| middle()
			|| (lower() & has("lantern") && has("somaria")));
	}
	this.locations["Turtle Rock - Eye Bridge - Bottom Left"].majorglitches =
	this.locations["Turtle Rock - Eye Bridge - Bottom Right"].majorglitches =
	this.locations["Turtle Rock - Eye Bridge - Top Left"].majorglitches =
	this.locations["Turtle Rock - Eye Bridge - Top Right"].majorglitches = function() {
		return (lower()
			|| ((upper() || middle()) &&
				has("lantern") && has("somaria") && has("bigkey") && has("key",3)))
			&& (canInvul() || canBlockLasers());
	}

	this.canEnter.majorglitches = function() {
		return (lower()
			|| middle()
			|| upper());
	}
	this.canComplete.majorglitches = function() {
		return has("firerod") && has("icerod")
			&& has("bigkey") && has("somaria")
			&& (has("hammer") || hasSword(2))
			&& has("key",4);
	}
  }
}
