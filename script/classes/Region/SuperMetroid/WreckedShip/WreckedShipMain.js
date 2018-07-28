class WreckedShipMain extends WreckedShip {
  constructor(name = "WreckedShip", subname = "Main") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Missile (Wrecked Ship middle)",799,115,regionName),
		new Location("Chozo","Reserve Tank, Wrecked Ship",835,25,regionName,{equipment:"%%speed%%"}),
		new Location("","Missile (Gravity Suit)",817,61,regionName),
		new Location("","Missile (Wrecked Ship top)",961,7,regionName),
		new Location("","Energy Tank (Wrecked Ship)",907,61,regionName),
		new Location("","Super Missile (Wrecked Ship left)",853,133,regionName),
		new Location("","Right Super, Wrecked Ship",961,133,regionName),
		new Location("Chozo","Gravity Suit",763,61,regionName),
		new Location("Event","Phantoon",925,160,regionName)
	],this);
  }

  initCasual() {
	this.locations["Missile (Wrecked Ship top)"].casualLogic =
	this.locations["Super Missile (Wrecked Ship left)"].casualLogic =
	this.locations["Right Super, Wrecked Ship"].casualLogic = function() {
		return has("phantoon");
	}
	this.locations["Reserve Tank, Wrecked Ship"].casualLogic = function() {
		return has("phantoon") && (canDashSM()
			&& canUsePowerBombs()
			&& (canGrappleSM() || has("space") || (heatProof() && hasEnergyReserves(2)) || hasEnergyReserves(3)));
	}
	this.locations["Missile (Gravity Suit)"].casualLogic =
	this.locations["Gravity Suit"].casualLogic = function() {
		return has("phantoon") && (canGrappleSM() || has("space") || (heatProof() && hasEnergyReserves(2)) || hasEnergyReserves(3));
	}
	this.locations["Energy Tank (Wrecked Ship)"].casualLogic = function() {
		return has("phantoon")
			&& (
				canHiJump()
				|| has("space")
				|| canDashSM()
				|| canSwimSM()
			);
	}

    this.canEnter.casualLogic = function() {
		return canOpenGreenDoors() &&
			((canUsePowerBombs() && (canDashSM() || canGrappleSM() || has("space") || canSpringBallJump()))
				|| (canAccessMaridiaPortal() && canSwimSM() && canPassBombPassages()));
    }
    this.canComplete.casualLogic = function() {
      return this.locations["Phantoon"].casualLogic();
    }
  }

  initTournament() {
	this.initCasual();

	this.locations["Reserve Tank, Wrecked Ship"].tourneyLogic = function() {
		return has("phantoon") && (canUsePowerBombs() && canDashSM() && (heatProof() || hasEnergyReserves(2)));
	}
	this.locations["Missile (Gravity Suit)"].tourneyLogic = function() {
		return has("phantoon") && (heatProof() || hasEnergyReserves(1));
	}
	this.locations["Gravity Suit"].tourneyLogic = function() {
		return has("phantoon") && (heatProof() || hasEnergyReserves(1));
	}
	this.locations["Energy Tank (Wrecked Ship)"].tourneyLogic = function() {
		return has("phantoon")
		&& (
			canUseMorphBombs()
			|| canUsePowerBombs()
			|| canHiJump()
			|| has("space")
			|| canDashSM()
			|| canSpringBallJump()
			|| canSwimSM()
		);
	}

	this.canEnter.tourneyLogic = function() {
		return canOpenGreenDoors() && (canUsePowerBombs() || (canAccessMaridiaPortal() && (canHiJump() || canSwimSM()) && canPassBombPassages()));
	}
  }
}
