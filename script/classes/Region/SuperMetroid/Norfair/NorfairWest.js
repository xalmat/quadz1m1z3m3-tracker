class NorfairWest extends Norfair {
  constructor(name = "Norfair", subname = "West") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chozo","Ice Beam",565,727,regionName),
		new Location("Hidden","Missile (below Ice Beam)",511,763,regionName,{spicy:true}),
		new Location("Chozo","Hi-Jump Boots",601,799,regionName),
		new Location("","Missile (Hi-Jump Boots)",619,781,regionName),
		new Location("","Energy Tank (Hi-Jump Boots)",637,781,regionName)
	],this);
  }

  initCasual() {
	this.locations["Ice Beam"].casualLogic = function() {
		return canPassBombPassages() && heatProof() && canDashSM();
	}
	this.locations["Missile (below Ice Beam)"].casualLogic = function() {
		return (canUsePowerBombs() || has("wave")) && heatProof() && canDashSM();
	}
	this.locations["Hi-Jump Boots"].casualLogic = function() {
		return canPassBombPassages();
	}
	this.locations["Missile (Hi-Jump Boots)"].casualLogic = function() {
		return canPassBombPassages();
	}

    this.canEnter.casualLogic = function() {
		return (canDestroyBombWalls() || canDashSM() || canAccessNorfairPortal())
			&& (canOpenGreenDoors() && canMorph())
			|| canAccessNorfairPortal();
    }
  }

  initTournament() {
    this.initCasual();

    this.locations["Ice Beam"].tourneyLogic = function() {
		return canMorph() && (heatProof() || hasEnergyReserves(3));
	}
	this.locations["Missile (below Ice Beam)"].tourneyLogic = function() {
		return (canUsePowerBombs() && canHellRun()) || (heatProof() && canDashSM());
	}
  }
}
