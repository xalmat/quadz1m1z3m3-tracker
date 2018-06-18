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

  initCasual() {
	this.locations["Missile (lava room)"].casualLogic = function() {
		return canMorph();
	}
	this.locations["Reserve Tank, Norfair"].casualLogic = function() {
		return canMorph()
			&& canOpenGreenDoors()
			&& (canFlySM() || canGrappleSM() || canHiJump() || has("ice"));
	}
	this.locations["Missile (Norfair Reserve Tank)"].casualLogic = function() {
		return canMorph()
			&& canOpenGreenDoors()
			&& (canFlySM() || canGrappleSM() || canHiJump() || has("ice"));
	}
	this.locations["Missile (bubble Norfair green door)"].casualLogic = function() {
		return canOpenGreenDoors()
			&& (canFlySM() || canGrappleSM() || canHiJump() || has("ice"));
	}
	this.locations["Wave Beam"].casualLogic = function() {
		return (canOpenGreenDoors() && canMorph() && (canGrappleSM() || canFlySM())
			&& canHiJump() || has("ice"));
	}

    this.canEnter.casualLogic = function() {
      return (((canDestroyBombWalls() || canDashSM())
      	&& (canOpenGreenDoors() && canMorph()))
      	|| canAccessNorfairPortal())
      	&& heatProof()
      	&& (canFlySM() || canHiJump() || (canDashSM() && canUsePowerBombs()) || (heatProof() && (has("ice") || canDashSM())));
    }
  }

  initTournament() {
    this.initCasual();

    this.locations["Wave Beam"].tourneyLogic = function() {
		return canOpenGreenDoors()
			&& (canMorph() || canGrappleSM())
			&& (canFlySM() || canHiJump() || has("ice"));
	}

	this.canEnter.tourneyLogic = function() {
		return (((canDestroyBombWalls() || canDashSM())
			&& (canOpenGreenDoors() && canMorph()))
			|| canAccessNorfairPortal())
			&& canHellRun()
			&& (canFlySM() || canHiJump() || (canDashSM() && canUsePowerBombs()) || (heatProof() && (has("ice") || canDashSM())));
	}
  }
}
