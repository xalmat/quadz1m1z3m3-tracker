class BrinstarBlue extends Brinstar {
  constructor(name = "Brinstar", subname = "Blue") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Morphing Ball",367,529,regionName),
		new Location("","Power Bomb (blue Brinstar)",331,529,regionName,{equipment:"%%powerbomb%%"}),
		new Location("","Missile (blue Brinstar middle)",493,529,regionName,{equipment:"%%morph%%"}),
		new Location("Hidden","Energy Tank, Brinstar Ceiling",473,529,regionName),
		new Location("Chozo","Missile (blue Brinstar bottom)",421,547,regionName,{equipment:"%%morph%%"}),
		new Location("","Missile (blue Brinstar top)",439,493,regionName,{equipment:"%%powerbomb%%"}),
		new Location("Hidden","Missile (blue Brinstar behind missile)",424,493,regionName,{equipment:"%%powerbomb%%"})
	],this);
  }

  initNormal() {
  	this.locations["Power Bomb (blue Brinstar)"].normalLogic = function() {
  		return canUsePowerBombs();
  	}
  	this.locations["Missile (blue Brinstar middle)"].normalLogic = function() {
  		return canMorph();
  	}
  	this.locations["Energy Tank, Brinstar Ceiling"].normalLogic = function() { // Different for Hard Logic
  		return canFlySM() || canHiJump() || canDashSM() || has("ice");
  	}
  	this.locations["Missile (blue Brinstar bottom)"].normalLogic = function() {
  		return canMorph();
  	}
  	this.locations["Missile (blue Brinstar top)"].normalLogic = function() {
  		return canUsePowerBombs();
  	}
  	this.locations["Missile (blue Brinstar behind missile)"].normalLogic = function() {
  		return canUsePowerBombs();
  	}
  }

  initHard() {
    this.initNormal();

  	this.locations["Energy Tank, Brinstar Ceiling"].hardLogic = function() {
      // DBoost
  		return true;
  	};
  }
}
