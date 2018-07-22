class LowerNorfairEast extends LowerNorfair {
  constructor(name = "LowerNorfair", subname = "East") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Missile (Mickey Mouse room)",979,871,regionName,{spicy:true}),
		new Location("","Missile (lower Nofair above fire flea room)",1105,781,regionName),
		new Location("","Power Bomb (lower Norfair above fire flea room)",1141,799,regionName,{spicy:true}),
		new Location("","Power Bomb (Power Bombs of shame)",1051,943,regionName,{spicy:true}),
		new Location("","Missile (lower Norfair near Wave Beam)",997,781,regionName),
		new Location("Hidden","Energy Tank, Ridley",871,997,regionName,{spicy:true}),
		new Location("","Energy Tank, Firefleas",1141,889,regionName),
		new Location("Event","Ridley",889,996,regionName,{spicy:true})
	],this);
  }

  initCasual() {
	this.locations["Power Bomb (Power Bombs of shame)"].casualLogic = function() {
		return canUsePowerBombs();
	}
	this.locations["Energy Tank, Ridley"].casualLogic = function() {
		return has("ridley") && canUsePowerBombs() && canOpenGreenDoors() && has("charge");
	}
	this.locations["Ridley"].casualLogic = function() {
		return canUsePowerBombs() && canOpenGreenDoors() && has("charge");
	}

    this.canEnter.casualLogic = function() {
		let ne = new NorfairEast();
		ne.initCasual();
		return heatProof()
			&& ((ne.canEnter.casualLogic()
					&& canUsePowerBombs()
					&& (has("space") && canSwimSM()))
				|| (canAccessLowerNorfairPortal()
					&& canDestroyBombWalls()
					&& canOpenGreenDoors()
					&& canUsePowerBombs()
					&& (canFlySM() || canDashSM())))
			&& (canFlySM() || canHiJump());
    }
    this.canComplete.casualLogic = function() {
      return this.locations["Ridley"].casualLogic();
    }
  }

  initTournament() {
    this.initCasual();

	this.canEnter.tourneyLogic = function() {
		let ne = new NorfairEast();
		ne.initTournament();

		return heatProof()
			&& ((ne.canEnter.tourneyLogic()
				&& canUsePowerBombs()
				&& (canHiJump() || canSwimSM()))
			|| (canAccessLowerNorfairPortal()
				&& canDestroyBombWalls()
				&& (canFlySM() || canSpringBallJump() || canDashSM())))
			&& (canFlySM() || canHiJump() || canSpringBallJump() || (has("ice") && has("charge")))
			&& (canPassBombPassages() || (has("screw") && has("space")));
	}
  }
}
