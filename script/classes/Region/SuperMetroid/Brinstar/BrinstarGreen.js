class BrinstarGreen extends Brinstar {
  constructor(name = "Brinstar", subname = "Green") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chozo","Power Bomb (green Brinstar bottom)",133,475,regionName,{equipment:"%%morph%%"}),
		new Location("","Missile (green Brinstar below super missile)",115,421,regionName,{equipment:"%%missile%%"}),
		new Location("","Super Missile (green Brinstar top)",97,403,regionName),
		new Location("Chozo","Reserve Tank, Brinstar",151,421,regionName),
		new Location("Hidden","Missile (green Brinstar behind missile)",169,406,regionName,{equipment:"%%missile%%%%morph%%"}),
		new Location("","Missile (green Brinstar behind reserve tank)",169,421,regionName,{equipment:"%%missile%%%%morph%%"}),
		new Location("","Energy Tank, Etecoons",25,529,regionName,{equipment:"%%powerbomb%%"}),
		new Location("","Super Missile (green Brinstar bottom)",7,529,regionName,{equipment:"%%powerbomb%%%%supermissile%%"})
	],this);
  }

  initCasual() {
	this.locations["Power Bomb (green Brinstar bottom)"].casualLogic = function() {
		return canUsePowerBombs();
	}
	this.locations["Missile (green Brinstar below super missile)"].casualLogic = function() {
		return canPassBombPassages() && canOpenRedDoors();
	}
	this.locations["Super Missile (green Brinstar top)"].casualLogic = function() {
		return canDashSM() && canOpenRedDoors();
	}
	this.locations["Reserve Tank, Brinstar"].casualLogic = function() {
		return canDashSM() && canOpenRedDoors();
	}
	this.locations["Missile (green Brinstar behind missile)"].casualLogic = function() {
		return canDashSM() && canPassBombPassages() && canOpenRedDoors();
	}
	this.locations["Missile (green Brinstar behind reserve tank)"].casualLogic = function() {
		return canDashSM() && canOpenRedDoors() && canMorph();
	}
	this.locations["Energy Tank, Etecoons"].casualLogic = function() {
		return canUsePowerBombs();
	}
	this.locations["Super Missile (green Brinstar bottom)"].casualLogic = function() {
		return canUsePowerBombs() && canOpenGreenDoors();
	}

    this.canEnter.casualLogic = function() {
      return canDestroyBombWalls() || canDashSM();
    }
  }

  initTournament() {
    this.initCasual();

	this.locations["Super Missile (green Brinstar top)"].tourneyLogic = function() {
		return (canDashSM() || canDestroyBombWalls())
			&& canOpenRedDoors()
			&& (canMorph() || canDashSM());
	}
	this.locations["Reserve Tank, Brinstar"].tourneyLogic = function() {
		return (canDashSM() || canDestroyBombWalls())
			&& canOpenRedDoors()
			&& (canMorph() || canDashSM());
	}
	this.locations["Missile (green Brinstar behind missile)"].tourneyLogic = function() {
		return canPassBombPassages() && canOpenRedDoors();
	}
	this.locations["Missile (green Brinstar behind reserve tank)"].tourneyLogic = function() {
		return canOpenRedDoors() && canMorph();
	}
  }
}
