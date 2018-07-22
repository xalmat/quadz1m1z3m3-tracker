class NorfairCrocomire extends Norfair {
  constructor(name = "Norfair", subname = "Crocomire") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Energy Tank, Crocomire",817,871,regionName),
		new Location("","Missile (above Crocomire)",687,799,regionName,{spicy:true}),
		new Location("","Power Bomb (Crocomire)",637,871,regionName,{spicy:true}),
		new Location("","Missile (below Crocomire)",727,961,regionName),
		new Location("","Missile (Grapple Beam)",619,961,regionName),
		new Location("Chozo","Grapple Beam",529,979,regionName),
		new Location("Event","Crocomire",736,871,regionName)
	],this);
  }

  initCasual() {
	this.locations["Energy Tank, Crocomire"].casualLogic = function() {
		return hasEnergyReserves(1) || has("space") || canGrappleSM();
	}
	this.locations["Missile (above Crocomire)"].casualLogic = function() {
		return (canFlySM() || canGrappleSM() || (canHiJump() && canDashSM()));
	}
	this.locations["Missile (below Crocomire)"].casualLogic = function() {
		return canMorph();
	}
	this.locations["Missile (Grapple Beam)"].casualLogic =
	this.locations["Grapple Beam"].casualLogic = function() {
		return canMorph() && (canFlySM() || (canDashSM() && canUsePowerBombs()));
	}
	this.locations["Power Bomb (Crocomire)"].casualLogic = function() {
		return (canFlySM() || canHiJump() || canGrappleSM());
	}

    this.canEnter.casualLogic = function() {
		return (((canDestroyBombWalls() || canDashSM())
			&& (canOpenGreenDoors() && canMorph()))
			|| canAccessNorfairPortal())
			&& heatProof()
				&& canOpenGreenDoors()
				&& ((canUsePowerBombs() && canDashSM()) || (canDashSM() && has("wave")) || (canMorph() && (canFlySM() || canHiJump()) && has("wave")));
    }
    this.canComplete.casualLogic = function() {
      return this.locations["Crocomire"].casualLogic();
    }
  }

  initTournament() {
    this.initCasual();

    this.locations["Missile (above Crocomire)"].tourneyLogic = function() {
		return (canFlySM() || canGrappleSM() || (canHiJump() && (canDashSM() || canSpringBallJump() || (heatProof() && has("ice"))))) && canHellRun();
	}
	this.locations["Missile (Grapple Beam)"].tourneyLogic = function() {
		return (canFlySM() || canDashSM() || canGrappleSM()) && canMorph();
	}
	this.locations["Grapple Beam"].tourneyLogic = function() {
		return (canFlySM() || canHiJump() || canGrappleSM() || canMorph());
	}

	this.canEnter.tourneyLogic = function() {
		return (((canDestroyBombWalls() || canDashSM())
			&& (canOpenGreenDoors() && canMorph()))
			|| canAccessNorfairPortal())
			&& canOpenGreenDoors()
			&& (hasEnergyReserves(2) && canDashSM() || canHellRun())
				&& ((canFlySM() || canHiJump() || canSpringBallJump() || (heatProof() && has("ice"))) || canDashSM())
				&& (canPassBombPassages() || canDashSM() || (heatProof() && canMorph()));
	}
  }
}
