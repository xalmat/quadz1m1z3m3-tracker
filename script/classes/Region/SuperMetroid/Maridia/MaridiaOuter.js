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

  initNormal() {
  	this.locations["Missile (green Maridia shinespark)"].normalLogic = function() {
  		return canDashSM();
  	}
  	this.locations["Energy Tank, Mama turtle"].normalLogic = function() {
  		return canFlySM() || canDashSM() || canGrappleSM();
  	}

  	this.canEnter.normalLogic = function() {
  		let nw = new NorfairWest("","",false);
  		nw.initNormal();

  		return ((nw.canEnter.normalLogic()
  				&& canUsePowerBombs())
  				|| canAccessMaridiaPortal())
  			&& canSwimSM();
  	}
    this.canComplete.normalLogic = function() {
  		return canDefeatDraygon();
    }
  }

  initHard() {
  	this.initNormal();

  	this.locations["Missile (green Maridia shinespark)"].hardLogic = function() {
  		return canSwimSM() && canDashSM();
  	}
    this.locations["Energy Tank, Mama turtle"].hardLogic = function() {
  		return canFlySM() || canDashSM() || canGrappleSM() || canSpringBallJump();
  	}

  	this.canEnter.hardLogic = function() {
  		let nw = new NorfairWest("","",false);
  		nw.initHard();

  		return (nw.canEnter.hardLogic()
  			&& canUsePowerBombs()
  			&& (canDashSM()
  				|| (canHiJump() && (canSpringBallJump() || has("ice")))))
  			|| canAccessMaridiaPortal();
  	}
  }
}
