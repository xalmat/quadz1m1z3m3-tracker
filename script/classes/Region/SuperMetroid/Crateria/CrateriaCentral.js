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
		new Location("Event","Torizo",439,106,regionName)
	],this);
  }

  initNormal() {
	this.locations["Power Bomb (Crateria surface)"].normalLogic = function() {
		return canUsePowerBombs() && (canDashSM() || canFlySM());
	}
	this.locations["Missile (Crateria middle)"].normalLogic = function() {
		return canPassBombPassages();
	}
	this.locations["Missile (Crateria bottom)"].normalLogic = function() {
		return canDestroyBombWalls();
	}
	this.locations["Super Missile (Crateria)"].normalLogic = function() {
		return canUsePowerBombs() && hasEnergyReserves(2) && canDashSM();
	}
	this.locations["Bombs"].normalLogic = function() {
		return canPassBombPassages() && canOpenRedDoors();
	}
	this.locations["Torizo"].normalLogic = function() {
		return canPassBombPassages() && canOpenRedDoors();
	}

    this.canComplete.normalLogic = function() {
      return this.locations["Torizo"].normalLogic();
    }
  }

  initHard() {
    this.initNormal();

	this.locations["Bombs"].hardLogic = function() {
		return canMorph() && canOpenRedDoors();
	}
	this.locations["Torizo"].hardLogic = function() {
		return canMorph() && canOpenRedDoors();
	}

	this.canComplete.hardLogic = function() {
		return this.locations["Torizo"].hardLogic();
	}
  }
}
