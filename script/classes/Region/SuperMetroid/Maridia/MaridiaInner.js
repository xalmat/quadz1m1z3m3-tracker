class MaridiaInner extends Maridia {
  constructor(name = "Maridia", subname = "Inner") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Super Missile (yellow Maridia)",630,457,regionName),
		new Location("","Missile (yellow Maridia super missile)",645,457,regionName),
		new Location("","Missile (yellow Maridia false wall)",781,457,regionName),
		new Location("Chozo","Plasma Beam",925,385,regionName),
		new Location("","Missile (left Maridia sand pit room)",781,601,regionName),
		new Location("Chozo","Reserve Tank, Maridia",799,601,regionName),
		new Location("","Missile (right Maridia sand pit room)",835,601,regionName),
		new Location("","Power Bomb (right Maridia sand pit room)",853,601,regionName,{equipment:"%%gravity%%"}),
		new Location("","Missile (pink Maridia)",853,511,regionName,{equipment:"%%gravity%%%%speed%%"}),
		new Location("","Super Missile (pink Maridia)",871,511,regionName),
		new Location("Chozo","Spring Ball",1015,619,regionName,{equipment:"%%gravity%%%%grappling%%"}),
		new Location("Hidden","Missile (Draygon)",1177,475,regionName),
		new Location("","Energy Tank, Botwoon",943,493,regionName),
		new Location("Chozo","Space Jump",1105,529,regionName),
		new Location("Event","Botwoon",853,476,regionName),
		new Location("Event","Draygon",1123,511,regionName)
	],this);
  }

  initCasual() {
	this.locations["Super Missile (yellow Maridia)"].casualLogic =
	this.locations["Missile (yellow Maridia super missile)"].casualLogic =
	this.locations["Missile (yellow Maridia false wall)"].casualLogic = function() {
		return canPassBombPassages();
	}
	this.locations["Plasma Beam"].casualLogic = function() {
		return canDefeatDraygon()
			&& (has("screw") || has("plasma"))
			&& (canHiJump() || canFlySM());
	}
	this.locations["Missile (left Maridia sand pit room)"].casualLogic =
	this.locations["Reserve Tank, Maridia"].casualLogic = function() {
		return canPassBombPassages();
	}
	this.locations["Missile (pink Maridia)"].casualLogic =
	this.locations["Super Missile (pink Maridia)"].casualLogic = function() {
		return canDashSM();
	}
	this.locations["Spring Ball"].casualLogic = function() {
		return canUsePowerBombs() && (canGrappleSM() && (has("space") || canHiJump()));
	}
	this.locations["Missile (Draygon)"].casualLogic =
	this.locations["Energy Tank, Botwoon"].casualLogic = function() {
		return canDefeatBotwoon();
	}
	this.locations["Space Jump"].casualLogic = function() {
		return has("draygon") && canDefeatDraygon() && (canFlySM() || (canDashSM() && canHiJump()));
	}
	this.locations["Botwoon"].casualLogic = function() {
		return canDefeatBotwoon();
	}
	this.locations["Draygon"].casualLogic = function() {
		return canDefeatDraygon() && (canFlySM() || (canDashSM() && canHiJump()));
	}

    this.canEnter.casualLogic = function() {
		let nw = new NorfairWest("","",false);
		nw.initCasual();

		return ((nw.canEnter.casualLogic()
				&& canUsePowerBombs()
				&& (canFlySM() || canDashSM() || canGrappleSM()))
				|| canAccessMaridiaPortal())
			&& canSwimSM();
    }
    this.canComplete.casualLogic = function() {
		return canDefeatBotwoon() && canDefeatDraygon();
    }
  }

  initTournament() {
	this.initCasual();

	this.locations["Super Missile (yellow Maridia)"].tourneyLogic =
	this.locations["Missile (yellow Maridia super missile)"].tourneyLogic =
	this.locations["Missile (yellow Maridia false wall)"].tourneyLogic = function() {
		return canPassBombPassages() && (canSwimSM() || has("ice") || (canHiJump() && canSpringBallJump()));
	}
	this.locations["Plasma Beam"].tourneyLogic = function() {
		return canDefeatDraygon()
			&& ((has("charge") && hasEnergyReserves(3)) || has("screw") || has("plasma") || canDashSM())
			&& (canHiJump() || canSpringBallJump() || canFlySM() || canDashSM());
	}
	this.locations["Missile (left Maridia sand pit room)"].tourneyLogic =
	this.locations["Reserve Tank, Maridia"].tourneyLogic = function() {
		return (canHiJump() && (has("space") || canSpringBallJump())) || canSwimSM();
	}
	this.locations["Missile (right Maridia sand pit room)"].tourneyLogic = function() {
		return canHiJump() || canSwimSM();
	}
	this.locations["Power Bomb (right Maridia sand pit room)"].tourneyLogic = function() {
		return (canHiJump() && canSpringBallJump()) || canSwimSM();
	}
	this.locations["Missile (pink Maridia)"].tourneyLogic =
	this.locations["Super Missile (pink Maridia)"].tourneyLogic = function() {
		return canSwimSM();
	}
	this.locations["Spring Ball"].tourneyLogic = function() {
		return canGrappleSM()
			&& canUsePowerBombs()
			&& ((canSwimSM() && (canFlySM() || canHiJump()))
			|| (canHiJump() && canSpringBallJump() && has("space")));
	}
	this.locations["Missile (Draygon)"].tourneyLogic = function() {
		return canDefeatBotwoon() && canSwimSM();
	}
	this.locations["Space Jump"].tourneyLogic = function() {
		return has("draygon") && canDefeatDraygon();
	}

	this.canEnter.tourneyLogic = function() {
		let nw = new NorfairWest("","",false);
		nw.initTournament();

		return nw.canEnter.tourneyLogic()
			&& canUsePowerBombs()
			&& (canSwimSM() || (canHiJump() && (has("ice") || canSpringBallJump()) && canGrappleSM()))
			|| canAccessMaridiaPortal();
	}
  }
}
