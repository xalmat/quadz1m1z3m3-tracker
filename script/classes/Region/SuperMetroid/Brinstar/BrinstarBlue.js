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

  initCasual() {
	this.locations["Power Bomb (blue Brinstar)"].casualLogic = function() {
		return canUsePowerBombs();
	}
	this.locations["Missile (blue Brinstar middle)"].casualLogic = function() {
		return canMorph();
	}
	this.locations["Missile (blue Brinstar bottom)"].casualLogic = function() {
		return canMorph();
	}
	this.locations["Missile (blue Brinstar top)"].casualLogic = function() {
		return canOpenYellowDoors();
	}
	this.locations["Missile (blue Brinstar behind missile)"].casualLogic = function() {
		return canOpenYellowDoors();
	}
	this.locations["Energy Tank, Brinstar Ceiling"].casualLogic = function() {
		return canFlySM() || has("hijump") || canDashSM() || has("ice");
	}
  }

  initTournament() {
    this.initCasual();

	this.locations["Energy Tank, Brinstar Ceiling"].tourneyLogic = function() {
		return true;
	};
  }
}
