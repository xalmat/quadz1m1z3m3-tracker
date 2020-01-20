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

  initNormal() {
	this.locations["Missile (lower Norfair near Wave Beam)"].normalLogic = function() {
		return canMorph() && canDestroyBombWalls();
	}
	this.locations["Missile (Mickey Mouse room)"].normalLogic = function() {
		return canMorph() && canDestroyBombWalls();
	}
	this.locations["Power Bomb (lower Norfair above fire flea room)"].normalLogic = function() {
		return canPassBombPassages();
	}
	this.locations["Power Bomb (Power Bombs of shame)"].normalLogic = function() {
		return canUsePowerBombs();
	}
	this.locations["Energy Tank, Ridley"].normalLogic = function() {
		return has("ridley") && canUsePowerBombs() && canOpenGreenDoors() && has("charge");
	}
	this.locations["Ridley"].normalLogic = function() {
		return canUsePowerBombs() && canOpenGreenDoors() && has("charge");
	}

    this.canEnter.normalLogic = function() {
		let ne = new NorfairEast("","",false);
		ne.initNormal();

		return heatProof()
			&& ((ne.canEnter.normalLogic()
					&& canUsePowerBombs()
					&& (has("space") && canSwimSM()))
				|| (canAccessLowerNorfairPortal()
					&& canDestroyBombWalls()
					&& canOpenGreenDoors()
					&& canUsePowerBombs()
					&& (canFlySM() || canDashSM())))
			&& (canFlySM() || canHiJump());
    }
    this.canComplete.normalLogic = function() {
      return this.locations["Ridley"].normalLogic();
    }
  }

  initHard() {
    this.initNormal();

	this.canEnter.hardLogic = function() {
		let ne = new NorfairEast("","",false);
		ne.initHard();

		return heatProof()
			&& ((ne.canEnter.hardLogic()
				&& canUsePowerBombs()
				&& (canHiJump() || canSwimSM()))
			|| (canAccessLowerNorfairPortal()
				&& canDestroyBombWalls()
				&& canOpenGreenDoors()
				&& (canFlySM() || canSpringBallJump() || canDashSM())))
			&& (canFlySM() || canHiJump() || canSpringBallJump() || (has("ice") && has("charge")))
			&& (canPassBombPassages() || (has("screw") && has("space")))
			&& (canMorph() || hasEnergyReserves(5));
	}
  }
}
