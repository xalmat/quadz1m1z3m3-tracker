class BrinstarRed extends Brinstar {
  constructor(name = "Brinstar", subname = "Red") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chozo","X-Ray Scope",331,619,regionName,{equipment:"%%powerbomb%%%%missile%%"}),
		new Location("","Power Bomb (red Brinstar sidehopper room)",547,493,regionName,{equipment:"%%powerbomb%%%%supermissile%%"}),
		new Location("Chozo","Power Bomb (red Brinstar spike room)",547,547,regionName,{equipment:"%%supermissile%%"}),
		new Location("","Missile (red Brinstar spike room)",529,547,regionName,{equipment:"%%powerbomb%%%%supermissile%%"}),
		new Location("Chozo","Spazer",601,655,regionName,{equipment:"%%supermissile%%"})
	],this);
  }

  initNormal() {
	this.locations["X-Ray Scope"].normalLogic = function() {
		return canUsePowerBombs()
			&& canOpenRedDoors()
			&& (canGrappleSM() || has("space"));
	}
	this.locations["Power Bomb (red Brinstar sidehopper room)"].normalLogic = function() {
		return canUsePowerBombs() && canOpenGreenDoors();
	}
	this.locations["Power Bomb (red Brinstar spike room)"].normalLogic = function() {
		return (canUsePowerBombs() || has("ice")) && canOpenGreenDoors();
	}
	this.locations["Missile (red Brinstar spike room)"].normalLogic = function() {
		return canUsePowerBombs() && canOpenGreenDoors();
	}
	this.locations["Spazer"].normalLogic = function() {
		return canPassBombPassages() && canOpenGreenDoors();
	}

    this.canEnter.normalLogic = function() {
      return (canDestroyBombWalls() || canDashSM())
      	&& (canOpenGreenDoors() && canMorph())
      	|| (canAccessNorfairPortal() && (has("ice") || canHiJump() || has("space")));
    }
  }

  initHard() {
    this.initNormal();

	this.locations["X-Ray Scope"].hardLogic = function() {
		return canUsePowerBombs()
			&& canOpenRedDoors()
			&& (canGrappleSM()
				|| has("space")
				|| (heatProof() && hasEnergyReserves(3) && (canIbj() || (canHiJump() && canDashSM()) || canSpringBallJump()))
				|| (hasEnergyReserves(5) && (canIbj() || (canHiJump() && canDashSM()) || canSpringBallJump())));
	}
	this.locations["Power Bomb (red Brinstar spike room)"].hardLogic = function() {
		return canOpenGreenDoors();
	}

	this.canEnter.hardLogic = function() {
		return ((canDestroyBombWalls() || canDashSM())
			&& (canOpenGreenDoors() && canMorph()))
			|| (canAccessNorfairPortal() && (has("ice") || canSpringBallJump() || canHiJump() || canFlySM()));
	}
  }
}
