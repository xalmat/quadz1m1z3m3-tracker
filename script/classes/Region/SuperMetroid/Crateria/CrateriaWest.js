class CrateriaWest extends Crateria {
  constructor(name = "Crateria", subname = "West") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("","Energy Tank, Terminator",187,115,regionName),
		new Location("","Energy Tank, Gauntlet",277,43,regionName,{equipment:"%%powerbomb%%%%missile%%"}),
		new Location("","Missile (Crateria gauntlet right)",177,61,regionName,{equipment:"%%powerbomb%%%%missile%%"}),
		new Location("","Missile (Crateria gauntlet left)",162,61,regionName,{equipment:"%%powerbomb%%%%missile%%"})
	],this);
  }

  initCasual() {
	this.locations["Energy Tank, Gauntlet"].normalLogic = function() {
		return canEnterAndLeaveGauntlet() && hasEnergyReserves(1);
	}
	this.locations["Missile (Crateria gauntlet right)"].normalLogic =
	this.locations["Missile (Crateria gauntlet left)"].normalLogic = function() {
		return canEnterAndLeaveGauntlet() && canPassBombPassages() && hasEnergyReserves(2);
	}

    this.canEnter.normalLogic = function() {
      return canDestroyBombWalls() || canDashSM();
    }
  }

  initTournament() {
    this.initCasual();

    this.locations["Energy Tank, Gauntlet"].hardLogic = function() {
		return canEnterAndLeaveGauntlet();
	}
	this.locations["Missile (Crateria gauntlet right)"].hardLogic =
	this.locations["Missile (Crateria gauntlet left)"].hardLogic = function () {
		return canEnterAndLeaveGauntlet() && canPassBombPassages();
	}
  }
}
