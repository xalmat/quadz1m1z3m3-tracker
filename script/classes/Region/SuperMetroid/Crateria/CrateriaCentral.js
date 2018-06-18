class CrateriaCentral extends Crateria {
  constructor(name = "Crateria", subname = "Central") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Power Bomb (Crateria surface)",565,25,regionName,{equipment:"%%powerbomb%%"}),
		new Location("","Missile (Crateria middle)",259,133,regionName),
		new Location("","Missile (Crateria bottom)",331,331,regionName),
		new Location("","Super Missile (Crateria)",403,169,regionName),
		new Location("Chozo","Bombs",421,115,regionName),
		new Location("Event","Torizo",439,105,regionName)
	],this);
  }

  initCasual() {
	this.locations["Power Bomb (Crateria surface)"].casualLogic = function() {
		return canUsePowerBombs() && (canDashSM() || canFlySM());
	}
	this.locations["Missile (Crateria middle)"].casualLogic = function() {
		return canPassBombPassages();
	}
	this.locations["Missile (Crateria bottom)"].casualLogic = function() {
		return canDestroyBombWalls();
	}
	this.locations["Super Missile (Crateria)"].casualLogic = function() {
		return canUsePowerBombs() && hasEnergyReserves(2) && canDashSM();
	}
	this.locations["Bombs"].casualLogic = function() {
		return canPassBombPassages() && canOpenRedDoors();
	}
	this.locations["Torizo"].casualLogic = function() {
		return canPassBombPassages() && canOpenRedDoors();
	}

    this.canComplete.casualLogic = function() {
      return this.locations["Torizo"].casualLogic();
    }
  }

  initTournament() {
    this.initCasual();

	this.locations["Bombs"].tourneyLogic = function() {
		return canMorph() && canOpenRedDoors();
	}
	this.locations["Torizo"].tourneyLogic = function() {
		return canMorph() && canOpenRedDoors();
	}

	this.canComplete.tourneyLogic = function() {
		return this.locations["Torizo"].tourneyLogic();
	}
  }
}
