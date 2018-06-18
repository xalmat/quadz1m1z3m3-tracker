class MaridiaOuter extends Maridia {
  constructor(name = "Maridia", subname = "Outer") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Missile (green Maridia shinespark)",601,565,regionName,{equipment:"%%gravity%%%%speed%%"}),
		new Location("","Super Missile (green Maridia)",619,547,regionName),
		new Location("","Energy Tank, Mama turtle",745,565,regionName),
		new Location("Hidden","Missile (green Maridia tatori)",763,583,regionName)
	],this);
  }

  initCasual() {
	this.locations["Missile (green Maridia shinespark)"].casualLogic = function() {
		return canDashSM();
	}
	this.locations["Energy Tank, Mama turtle"].casualLogic = function() {
		return canFlySM() || canDashSM() || canGrappleSM();
	}

	this.canEnter.casualLogic = function() {
		var nw = new NorfairWest();
		nw.initCasual();
		return nw.canEnter.casualLogic()
			&& canUsePowerBombs()
			&& canSwimSM();
	}
    this.canComplete.casualLogic = function() {
		return canDefeatBotwoon() && canDefeatDraygon();
    }
  }

  initTournament() {
	this.initCasual();

	this.locations["Missile (green Maridia shinespark)"].tourneyLogic = function() {
		return canSwimSM() && canDashSM();
	}

	this.canEnter.tourneyLogic = function() {
		var nw = new NorfairWest();
		nw.initTournament();
		return nw.canEnter.casualLogic()
			&& canUsePowerBombs()
			&& (canSwimSM()
				|| (canHiJump() && (canSpringBall() || has("ice"))));
	}
  }
}
