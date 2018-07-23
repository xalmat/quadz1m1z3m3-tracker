class CrateriaEast extends Crateria {
  constructor(name = "Crateria", subname = "East") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Missile (outside Wrecked Ship bottom)",655,97,regionName),
		new Location("","Missile (outside Wrecked Ship top)",671,7,regionName),
		new Location("","Missile (outside Wrecked Ship middle)",655,42,regionName),
		new Location("","Missile (Crateria Moat)",619,79,regionName)
	],this);
  }

  initCasual() {
	this.locations["Missile (outside Wrecked Ship bottom)"].casualLogic = function() {
		return (canDashSM() || canGrappleSM() || has("space") || canSpringBallJump() || canAccessMaridiaPortal());
	}
	this.locations["Missile (outside Wrecked Ship top)"].casualLogic = function() {
		return ((canOpenGreenDoors() && (canDashSM() || canGrappleSM() || has("space") || canSpringBallJump())) || canAccessMaridiaPortal())
			&& (canHiJump() || canFlySM() || canDashSM());
	}
	this.locations["Missile (outside Wrecked Ship middle)"].casualLogic = function() {
		return (canDashSM() || canGrappleSM() || has("space") || canSpringBallJump() || canAccessMaridiaPortal()) && canOpenGreenDoors();
	}

    this.canEnter.casualLogic = function() {
		return (canUsePowerBombs() && canOpenGreenDoors())
			|| (canAccessNorfairPortal() && canUsePowerBombs() && (has("ice") || canHiJump() || has("space")))
			|| (canAccessMaridiaPortal() && canSwimSM() && canOpenGreenDoors());
    }
  }

  initTournament() {
    this.initCasual();

	this.locations["Missile (outside Wrecked Ship top)"].tourneyLogic =
	this.locations["Missile (outside Wrecked Ship middle)"].tourneyLogic = function() {
		return canOpenGreenDoors() && canPassBombPassages();
	}

    this.canEnter.tourneyLogic = function() {
		return (canUsePowerBombs() && canOpenGreenDoors())
			|| (canAccessNorfairPortal() && canUsePowerBombs() && (has("ice") || canSpringBallJump() || canHiJump() || canFlySM()))
			|| (canAccessMaridiaPortal() && canHiJump() && canOpenGreenDoors());
	}
  }
}
