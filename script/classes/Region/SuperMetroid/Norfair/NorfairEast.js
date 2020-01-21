class NorfairEast extends Norfair {
  constructor(name = "Norfair", subname = "East") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Hidden","Missile (lava room)",763,763,regionName,{equipment:"%%morph%%",spicy:true}),
		new Location("Chozo","Reserve Tank, Norfair",799,727,regionName,{spicy:true}),
		new Location("Hidden","Missile (Norfair Reserve Tank)",814,727,regionName,{spicy:true}),
		new Location("","Missile (bubble Norfair green door)",853,727,regionName,{spicy:true}),
		new Location("","Missile (bubble Norfair)",889,781,regionName),
		new Location("Hidden","Missile (Speed Booster)",1123,727,regionName,{spicy:true}),
		new Location("Chozo","Speed Booster",1141,727,regionName,{spicy:true}),
		new Location("","Missile (Wave Beam)",950,763,regionName,{spicy:true}),
		new Location("Chozo","Wave Beam",997,763,regionName)
	],this);
  }

  initNormal() {
  	this.locations["Missile (lava room)"].normalLogic = function() {
  		return canMorph();
  	}
  	this.locations["Reserve Tank, Norfair"].normalLogic =
  	this.locations["Missile (Norfair Reserve Tank)"].normalLogic = function() {
  		return canMorph()
  			&& (canFlySM() || (canGrappleSM() && (canDashSM() || canPassBombPassages()))
        || canHiJump() || has("ice"));
  	}
  	this.locations["Missile (bubble Norfair green door)"].normalLogic = function() {
  		return canFlySM()
        || (canGrappleSM() && canMorph() && (canDashSM() || canPassBombPassages()))
        || canHiJump() || has("ice");
  	}
  	this.locations["Missile (Speed Booster)"].normalLogic =
  	this.locations["Speed Booster"].normalLogic = function() {
  		return canFlySM() || (canMorph() && (canDashSM() || canPassBombPassages()))
        || canHiJump() || has("ice");
  	}
  	this.locations["Wave Beam"].normalLogic = function() {
  		return canMorph()
        && (canFlySM() || (canMorph() && (canDashSM() || canPassBombPassages()))
        || canHiJump() || has("ice"));
  	}
  	this.locations["Missile (Wave Beam)"].normalLogic = function() {
  		return (canFlySM() || (canMorph() && (canDashSM() || canPassBombPassages()))
        || canHiJump() || has("ice"));
  	}

    this.canEnter.normalLogic = function() {
      // From Crateria:West
      //  Through Brinstar:Green
      //  Through Brinstar:Pink
      //  Through Brinstar:Red
      // From Z3->M3 portal from Death Mountain
      // Through Cathedral
  		return (((canDestroyBombWalls() || canDashSM())
  			&& (canOpenGreenDoors() && canMorph()))
  			|| canAccessNorfairPortal())
  			&& heatProof()
  			&& canOpenGreenDoors()
  			&& (canFlySM() || canHiJump() || canDashSM());
      }
  }

  initHard() {
    this.initNormal();

    this.locations["Reserve Tank, Norfair"].hardLogic =
    this.locations["Missile (Norfair Reserve Tank)"].hardLogic = function() {
	  	return canMorph() && canOpenGreenDoors();
  	}
  	this.locations["Missile (bubble Norfair green door)"].hardLogic =
  	this.locations["Missile (Speed Booster)"].hardLogic =
  	this.locations["Speed Booster"].hardLogic = function() {
  		return canOpenGreenDoors();
  	}
    this.locations["Wave Beam"].hardLogic = function() {
		return canOpenRedDoors()
      && (canMorph() || canGrappleSM() || (canHiJump() && heatProof()) || has("space"));
	}

	this.canEnter.hardLogic = function() {
      // From Crateria:West
      //  Through Brinstar:Green
      //  Through Brinstar:Pink
      //  Through Brinstar:Red
      // From Z3->M3 portal from Death Mountain
      // Through Cathedral or Frog Speedway
  		return (((canDestroyBombWalls() || canDashSM())
  			&& (canOpenGreenDoors() && canMorph()))
  			|| canAccessNorfairPortal())
  			&& canHellRun()
  			&& (canOpenGreenDoors() && (canFlySM() || canHiJump() || canSpringBallJump() || (heatProof() && (has("ice") || canDashSM())))
  				|| (canDashSM() && canUsePowerBombs()));
	  }
  }
}
