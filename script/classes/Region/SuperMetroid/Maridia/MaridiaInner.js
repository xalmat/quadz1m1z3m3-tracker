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
	this.locations["Super Missile (yellow Maridia)"].normalLogic =
	this.locations["Missile (yellow Maridia super missile)"].normalLogic =
	this.locations["Missile (yellow Maridia false wall)"].normalLogic = function() {
		return canPassBombPassages();
	}
	this.locations["Plasma Beam"].normalLogic = function() {
		return has("draygon")
			&& (has("screw") || has("plasma"))
			&& (canHiJump() || canFlySM());
	}
	this.locations["Missile (left Maridia sand pit room)"].normalLogic =
	this.locations["Reserve Tank, Maridia"].normalLogic = function() {
		return canPassBombPassages();
	}
	this.locations["Missile (pink Maridia)"].normalLogic =
	this.locations["Super Missile (pink Maridia)"].normalLogic = function() {
		return canDashSM();
	}
	this.locations["Spring Ball"].normalLogic = function() {
		return canUsePowerBombs() && (canGrappleSM() && (has("space") || canHiJump()));
	}
	this.locations["Missile (Draygon)"].normalLogic =
	this.locations["Energy Tank, Botwoon"].normalLogic = function() {
		return canDefeatBotwoon();
	}
	this.locations["Space Jump"].normalLogic = function() {
		return has("draygon") && canDefeatDraygon() && (canFlySM() || (canDashSM() && canHiJump()));
	}
	this.locations["Botwoon"].normalLogic = function() {
		return canDefeatBotwoon();
	}
	this.locations["Draygon"].normalLogic = function() {
		return canDefeatDraygon() && (canFlySM() || (canDashSM() && canHiJump()));
	}

    this.canEnter.normalLogic = function() {
		let nw = new NorfairWest("","",false);
		nw.initCasual();

		return ((nw.canEnter.normalLogic()
				&& canUsePowerBombs()
				&& (canFlySM() || canDashSM() || canGrappleSM()))
				|| canAccessMaridiaPortal())
			&& canSwimSM();
    }
    this.canComplete.normalLogic = function() {
		return canDefeatBotwoon() && canDefeatDraygon();
    }
  }

  initTournament() {
	this.initCasual();

	this.locations["Super Missile (yellow Maridia)"].hardLogic =
	this.locations["Missile (yellow Maridia super missile)"].hardLogic =
	this.locations["Missile (yellow Maridia false wall)"].hardLogic = function() {
		return canPassBombPassages() && (canSwimSM() || has("ice") || (canHiJump() && canSpringBallJump()));
	}
	this.locations["Plasma Beam"].hardLogic = function() {
		return has("draygon")
			&& ((has("charge") && hasEnergyReserves(3)) || has("screw") || has("plasma") || canDashSM())
			&& (canHiJump() || canSpringBallJump() || canFlySM() || canDashSM());
	}
	this.locations["Missile (left Maridia sand pit room)"].hardLogic =
	this.locations["Reserve Tank, Maridia"].hardLogic = function() {
		return (canHiJump() && (has("space") || canSpringBallJump())) || canSwimSM();
	}
	this.locations["Missile (right Maridia sand pit room)"].hardLogic = function() {
		return canHiJump() || canSwimSM();
	}
	this.locations["Power Bomb (right Maridia sand pit room)"].hardLogic = function() {
		return (canHiJump() && canSpringBallJump()) || canSwimSM();
	}
	this.locations["Missile (pink Maridia)"].hardLogic =
	this.locations["Super Missile (pink Maridia)"].hardLogic = function() {
		return canSwimSM();
	}
	this.locations["Spring Ball"].hardLogic = function() {
		return canGrappleSM()
			&& canUsePowerBombs()
			&& ((canSwimSM() && (canFlySM() || canHiJump()))
			|| (canHiJump() && canSpringBallJump() && has("space")));
	}
	this.locations["Missile (Draygon)"].hardLogic = function() {
		return canDefeatBotwoon() && canSwimSM();
	}
	this.locations["Space Jump"].hardLogic = function() {
		return has("draygon") && canDefeatDraygon();
	}

	this.canEnter.hardLogic = function() {
		let nw = new NorfairWest("","",false);
		nw.initTournament();

		return nw.canEnter.hardLogic()
			&& canUsePowerBombs()
			&& (canSwimSM() || (canHiJump() && (has("ice") || canSpringBallJump()) && canGrappleSM()))
			|| canAccessMaridiaPortal();
	}
  }
}
