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

  initNormal() {
  	this.locations["Missile (outside Wrecked Ship bottom)"].normalLogic = function() { // Different for Hard Logic
      // Speed
      // Grapple
      // Space Jump
      // Gravity && (IBJ || HiJumps)
      // From Z3->M3 portal from Dark Ice Cave
  		return (canDashSM() || canGrappleSM() || has("space") || (canSwimSM() && (canFlySM() || canHiJump())) || canAccessMaridiaPortal());
  	}
  	this.locations["Missile (outside Wrecked Ship top)"].normalLogic = function() { // Different for Hard Logic
      // Bomb Passage in Wrecked Ship
      // Phantoon dead
      // Green Door to get into Wrecked Ship
      //  Speed
      //  Grapple
      //  Space Jump
      //  Gravity && (IBJ || HiJumps)
      //  From Z3->M3 portal from Dark Ice Cave
      return canPassBombPassages() && has("phantoon")
        && ((canOpenGreenDoors() && (canDashSM() || canGrappleSM() || has("space") || (canSwim() && (canFlySM() || canHiJump())))) || canAccessMaridiaPortal());
  	}
  	this.locations["Missile (outside Wrecked Ship middle)"].normalLogic = function() { // Different for Hard Logic
      // Bomb Passage in Wrecked Ship
      // Phantoon dead
      // Green Door to get into Wrecked Ship
      //  Speed
      //  Grapple
      //  Space Jump
      //  Gravity && (IBJ || HiJumps)
      //  From Z3->M3 portal from Dark Ice Cave
      return canPassBombPassages() && has("phantoon")
        && ((canOpenGreenDoors() && (canDashSM() || canGrappleSM() || has("space") || (canSwim() && (canFlySM() || canHiJump())))) || canAccessMaridiaPortal());
  	}

    this.canEnter.normalLogic = function() {
      // From Crateria:Central
      // From Z3->M3 portal from Death Mountain
      //  Through Brinstar:Red, Crateria:Central
      // From Z3->M3 portal from Dark Ice Cave
  		return (canUsePowerBombs() && canOpenGreenDoors())
  			|| (canAccessNorfairPortal() && canUsePowerBombs() && (has("ice") || canHiJump() || has("space")))
  			|| (canAccessMaridiaPortal() && canSwimSM() && canOpenGreenDoors() && (canDestroyBombWalls() || canDefeatDraygon()));
    }
  }

  initHard() {
    this.initNormal();

    this.locations["Missile (outside Wrecked Ship bottom)"].hardLogic = function() {
  		return true;
  	}

  	this.locations["Missile (outside Wrecked Ship top)"].hardLogic =
  	this.locations["Missile (outside Wrecked Ship middle)"].hardLogic = function() {
  		return canOpenGreenDoors() && canPassBombPassages() && has("phantoon");
  	}

    this.canEnter.hardLogic = function() {
      // From Crateria:Central
      // From Z3->M3 portal from Death Mountain
      //  Through Brinstar:Red, Crateria:Central
      // From Z3->M3 portal from Dark Ice Cave
  		return (canUsePowerBombs() && canOpenGreenDoors())
  			|| (canAccessNorfairPortal() && canUsePowerBombs() && (has("ice") || canSpringBallJump() || canHiJump() || canFlySM()))
  			|| (canAccessMaridiaPortal() && canHiJump() && canOpenGreenDoors());
  	}
  }
}
