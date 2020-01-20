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
	this.locations["Missile (outside Wrecked Ship bottom)"].normalLogic = function() {
		return (canDashSM() || canGrappleSM() || has("space") || canSpringBallJump() || canAccessMaridiaPortal());
	}
	this.locations["Missile (outside Wrecked Ship top)"].normalLogic = function() {
		return ((canOpenGreenDoors() && (canDashSM() || canGrappleSM() || has("space") || canSpringBallJump())) || canAccessMaridiaPortal())
			&& (canHiJump() || canFlySM() || canDashSM()) && has("phantoon");
	}
	this.locations["Missile (outside Wrecked Ship middle)"].normalLogic = function() {
		return (canDashSM() || canGrappleSM() || has("space") || canSpringBallJump() || canAccessMaridiaPortal()) && canOpenGreenDoors() && has("phantoon");
	}

    this.canEnter.normalLogic = function() {
		return (canUsePowerBombs() && canOpenGreenDoors())
			|| (canAccessNorfairPortal() && canUsePowerBombs() && (has("ice") || canHiJump() || has("space")))
			|| (canAccessMaridiaPortal() && canSwimSM() && canOpenGreenDoors());
    }
  }

  initTournament() {
    this.initCasual();

    this.locations["Missile (outside Wrecked Ship bottom)"].hardLogic = function() {
		return true;
	}

	this.locations["Missile (outside Wrecked Ship top)"].hardLogic =
	this.locations["Missile (outside Wrecked Ship middle)"].hardLogic = function() {
		return canOpenGreenDoors() && canPassBombPassages() && has("phantoon");
	}

    this.canEnter.hardLogic = function() {
		return (canUsePowerBombs() && canOpenGreenDoors())
			|| (canAccessNorfairPortal() && canUsePowerBombs() && (has("ice") || canSpringBallJump() || canHiJump() || canFlySM()))
			|| (canAccessMaridiaPortal() && canHiJump() && canOpenGreenDoors());
	}
  }
}
