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
		return (has("space") || canDashSM() || canGrappleSM());
	}
	this.locations["Missile (outside Wrecked Ship top)"].casualLogic = function() {
		return (has("space") || canDashSM() || canGrappleSM())
			&& hasEnergyReserves(2);
	}
	this.locations["Missile (outside Wrecked Ship middle)"].casualLogic = function() {
		return (has("space") || canDashSM() || canGrappleSM())
			&& hasEnergyReserves(2);
	}

    this.canEnter.casualLogic = function() {
		return canOpenYellowDoors() && canOpenGreenDoors();
    }
  }

  initTournament() {
    this.initCasual();
  }
}
