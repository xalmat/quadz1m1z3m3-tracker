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
  	this.locations["X-Ray Scope"].normalLogic = function() { // Different for Hard Logic
      // Open Door from Red Tower
      // Open Door inside to X-Ray Scope
      // Traverse room
  		return canUsePowerBombs()
  			&& canOpenRedDoors()
  			&& (canGrappleSM() || has("space"));
  	}
  	this.locations["Power Bomb (red Brinstar sidehopper room)"].normalLogic = function() {
      // Green Door from Short Red Tower
      // Power Bombs to open floor
  		return canUsePowerBombs() && canOpenGreenDoors();
  	}
  	this.locations["Power Bomb (red Brinstar spike room)"].normalLogic = function() { // Different for Hard Logic
      // Green Door from Short Red Tower
      // Powers || Ice to defeat enemies
  		return (canUsePowerBombs() || has("ice")) && canOpenGreenDoors();
  	}
  	this.locations["Missile (red Brinstar spike room)"].normalLogic = function() {
      // Green Door from Short Red Tower
      // Powers to access Missile
  		return canUsePowerBombs() && canOpenGreenDoors();
  	}
  	this.locations["Spazer"].normalLogic = function() {
      // Bomb passage to get toward room
      // Red Door to open room
  		return canPassBombPassages() && canOpenGreenDoors();
  	}

    this.canEnter.normalLogic = function() {
      // From Crateria:West and Brinstar:Green
      // From Z3->M3 portal from Death Mountain
      //  Through Brinstar:Red: Ice || HiJumps || Springball || IBJ
      return (canDestroyBombWalls() || canDashSM())
      	&& (canOpenGreenDoors() && canMorph())
      	|| (canAccessNorfairPortal() && (has("ice") || canHiJump() || has("space")));
    }
  }

  initHard() {
    this.initNormal();

  	this.locations["X-Ray Scope"].hardLogic = function() {
      // Tons of strange strats to preserve health
  		return canUsePowerBombs()
  			&& canOpenRedDoors()
  			&& (canGrappleSM()
  				|| has("space")
  				|| (heatProof() && hasEnergyReserves(3) && (canIbj() || (canHiJump() && canDashSM()) || canSpringBallJump()))
  				|| (hasEnergyReserves(5) && (canIbj() || (canHiJump() && canDashSM()) || canSpringBallJump())));
  	}
  	this.locations["Power Bomb (red Brinstar spike room)"].hardLogic = function() {
      // Skip defeating enemies
  		return canOpenGreenDoors();
  	}

  	this.canEnter.hardLogic = function() {
      // From Crateria:West and Brinstar:Green
      // From Z3->M3 portal from Death Mountain
      //  Through Brinstar:Red: Ice || HiJumps || Springball || IBJ
  		return ((canDestroyBombWalls() || canDashSM())
  			&& (canOpenGreenDoors() && canMorph()))
  			|| (canAccessNorfairPortal() && (has("ice") || canSpringBallJump() || canHiJump() || canFlySM()));
  	}
  }
}
