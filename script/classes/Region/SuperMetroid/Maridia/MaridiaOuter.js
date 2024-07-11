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
		let nw = new NorfairWest("","",false);
		nw.initCasual();

		return ((nw.canEnter.casualLogic()
				&& canUsePowerBombs())
				|| canAccessMaridiaPortal())
			&& canSwimSM();
	}
    this.canComplete.casualLogic = function() {
		return canDefeatDraygon();
    }
  }

  initTournament() {
	this.initCasual();

	this.locations["Missile (green Maridia shinespark)"].tourneyLogic = function() {
		return canSwimSM() && canDashSM();
	}
    this.locations["Energy Tank, Mama turtle"].tourneyLogic = function() {
		return canFlySM() || canDashSM() || canGrappleSM() || canSpringBallJump();
	}

	this.canEnter.tourneyLogic = function() {
		let nw = new NorfairWest("","",false);
		nw.initTournament();

		return (nw.canEnter.tourneyLogic()
			&& canUsePowerBombs()
			&& (canDashSM()
				|| (canHiJump() && (canSpringBallJump() || has("ice")))))
			|| canAccessMaridiaPortal();
	}
  }
}
