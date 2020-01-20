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

  initNormal() {
	this.locations["Energy Tank, Crocomire"].normalLogic = function() {
		return hasEnergyReserves(1) || has("space") || canGrappleSM();
	}
	this.locations["Missile (above Crocomire)"].normalLogic = function() {
		return (canFlySM() || canGrappleSM() || (canHiJump() && canDashSM()));
	}
	this.locations["Missile (below Crocomire)"].normalLogic = function() {
		return canMorph();
	}
	this.locations["Missile (Grapple Beam)"].normalLogic =
	this.locations["Grapple Beam"].normalLogic = function() {
		return canMorph() && (canFlySM() || (canDashSM() && canUsePowerBombs()));
	}
	this.locations["Power Bomb (Crocomire)"].normalLogic = function() {
		return (canFlySM() || canHiJump() || canGrappleSM());
	}

    this.canEnter.normalLogic = function() {
		return (((canDestroyBombWalls() || canDashSM())
			&& (canOpenGreenDoors() && canMorph()))
			|| canAccessNorfairPortal())
			&& heatProof()
				&& canOpenGreenDoors()
				&& ((canUsePowerBombs() && canDashSM()) || (canDashSM() && has("wave")) || (canMorph() && (canFlySM() || canHiJump()) && has("wave")));
    }
    this.canComplete.normalLogic = function() {
      return this.locations["Crocomire"].normalLogic();
    }
  }

  initHard() {
    this.initNormal();

    this.locations["Missile (above Crocomire)"].hardLogic = function() {
		return (canFlySM() || canGrappleSM() || (canHiJump() && (canDashSM() || canSpringBallJump() || (heatProof() && has("ice"))))) && canHellRun();
	}
	this.locations["Missile (Grapple Beam)"].hardLogic = function() {
		return canDashSM() || (canMorph() && (canFlySM() || canGrappleSM()));
	}
	this.locations["Grapple Beam"].hardLogic = function() {
		return (has("space") || canMorph() || canGrappleSM() || (canHiJump() && canDashSM()));
	}

	this.canEnter.hardLogic = function() {
		return (((canDestroyBombWalls() || canDashSM())
			&& (canOpenGreenDoors() && canMorph()))
			|| canAccessNorfairPortal())
			&& canOpenGreenDoors()
			&& (hasEnergyReserves(2) && canDashSM() || canHellRun())
			&& ((canFlySM() || canHiJump() || canSpringBallJump() || (heatProof() && has("ice"))) || canDashSM())
			&& (canPassBombPassages() || canDashSM() || (heatProof() && canMorph()))
		|| (canAccessLowerNorfairPortal() && has("screw") && has("space") && heatProof() && canOpenGreenDoors() && hasEnergyReserves(2));
	}
  }
}
