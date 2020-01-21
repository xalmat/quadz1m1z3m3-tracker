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

  initNormal() {
  	this.locations["Missile (Gold Torizo)"].normalLogic = function() {
  		return canUsePowerBombs() && has("space") && canOpenGreenDoors();
  	}
  	this.locations["Super Missile (Gold Torizo)"].normalLogic =
  	this.locations["Screw Attack"].normalLogic = function() {
  		return canDestroyBombWalls()
  			&& (canAccessLowerNorfairPortal() || (has("space") && canUsePowerBombs()));
  	}
  	this.locations["Gold Torizo"].normalLogic = function() {
  		return this.locations["Missile (Gold Torizo)"].normalLogic();
  	}

    this.canEnter.normalLogic = function() {
		let ne = new NorfairEast("","",false);
		ne.initNormal();

		return heatProof()
				&& ((ne.canEnter.normalLogic()
			&& canUsePowerBombs()
			&& (canSwimSM() && has("space")))
			|| (canAccessLowerNorfairPortal() && canDestroyBombWalls()));
    }
    this.canComplete.normalLogic = function() {
  		return this.locations["Gold Torizo"].normalLogic();
    }
  }

  initHard() {
    this.initNormal();

    this.locations["Missile (Gold Torizo)"].hardLogic = function() {
  		return canUsePowerBombs()
  			&& has("space")
  			&& heatProof()
  			&& (canHiJump() || canSwimSM()
  				|| (canAccessLowerNorfairPortal() &&
  					(canFlySM() || canSpringBallJump() || canDashSM())));
  	}

  	this.locations["Super Missile (Gold Torizo)"].hardLogic = function() {
  		return canDestroyBombWalls() && heatProof();
  	}

  	this.locations["Screw Attack"].hardLogic = function() {
  		return canDestroyBombWalls()
  			&& (heatProof() || canAccessLowerNorfairPortal());
  	}

    this.locations["Gold Torizo"].hardLogic = function() {
  		return this.locations["Missile (Gold Torizo)"].hardLogic();
  	}
  	this.canEnter.hardLogic = function() {
  		let ne = new NorfairEast("","",false);
  		ne.initHard();

  		return ne.canEnter.hardLogic()
  			&& canUsePowerBombs()
  			&& (heatProof() && (canHiJump() || canSwimSM()))
  			|| (canAccessLowerNorfairPortal() && canDestroyBombWalls());
  	}
  }
}
