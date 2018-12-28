class LowerNorfairWest extends LowerNorfair {
  constructor(name = "LowerNorfair", subname = "West") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Missile (Gold Torizo)",799,961,regionName,{spicy:true}),
		new Location("Hidden","Super Missile (Gold Torizo)",817,961,regionName,{spicy:true}),
		new Location("Chozo","Screw Attack",835,979,regionName,{spicy:true}),
		new Location("Event","Gold Torizo",784,979,regionName,{spicy:true})
	],this);
  }

  initCasual() {
	this.locations["Missile (Gold Torizo)"].casualLogic = function() {
		return canUsePowerBombs() && has("space") && canOpenGreenDoors();
	}
	this.locations["Super Missile (Gold Torizo)"].casualLogic =
	this.locations["Screw Attack"].casualLogic = function() {
		return canDestroyBombWalls()
			&& (canAccessLowerNorfairPortal() || (has("space") && canUsePowerBombs()));
	}
	this.locations["Gold Torizo"].casualLogic = function() {
		return this.locations["Missile (Gold Torizo)"].casualLogic();
	}

    this.canEnter.casualLogic = function() {
		let ne = new NorfairEast("","",false);
		ne.initCasual();

		return heatProof()
				&& ((ne.canEnter.casualLogic()
			&& canUsePowerBombs()
			&& (canSwimSM() && has("space")))
			|| (canAccessLowerNorfairPortal() && canDestroyBombWalls()));
    }
    this.canComplete.casualLogic = function() {
		return this.locations["Gold Torizo"].casualLogic();
    }
  }

  initTournament() {
    this.initCasual();

    this.locations["Missile (Gold Torizo)"].tourneyLogic = function() {
		return canUsePowerBombs()
			&& has("space")
			&& heatProof()
			&& (canHiJump() || canSwimSM()
				|| (canAccessLowerNorfairPortal() &&
					(canFlySM() || canSpringBallJump() || canDashSM())));
	}

	this.locations["Super Missile (Gold Torizo)"].tourneyLogic = function() {
		return canDestroyBombWalls() && heatProof();
	}

	this.locations["Screw Attack"].tourneyLogic = function() {
		return canDestroyBombWalls()
			&& (heatProof() || canAccessLowerNorfairPortal());
	}

    this.locations["Gold Torizo"].tourneyLogic = function() {
		return this.locations["Missile (Gold Torizo)"].tourneyLogic();
	}
	this.canEnter.tourneyLogic = function() {
		let ne = new NorfairEast("","",false);
		ne.initTournament();

		return ne.canEnter.tourneyLogic()
			&& canUsePowerBombs()
			&& (heatProof() && (canHiJump() || canSwimSM()))
			|| (canAccessLowerNorfairPortal() && canDestroyBombWalls());
	}
  }
}
