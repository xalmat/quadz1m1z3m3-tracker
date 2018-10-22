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
		return canOpenGreenDoors() && canPassBombPassages() && heatProof() && canDashSM();
	}
	this.locations["Missile (below Ice Beam)"].casualLogic = function() {
		return canOpenGreenDoors() && canUsePowerBombs() && heatProof() && canDashSM();
	}
	this.locations["Energy Tank (Hi-Jump Boots)"].casualLogic = function() {
		return canOpenRedDoors();
	}
	this.locations["Hi-Jump Boots"].casualLogic = function() {
		return canOpenRedDoors() && canPassBombPassages();
	}
	this.locations["Missile (Hi-Jump Boots)"].casualLogic = function() {
		return canOpenRedDoors() && canMorph();
	}

    this.canEnter.casualLogic = function() {
		return ((canDestroyBombWalls() || canDashSM())
			&& (canOpenGreenDoors() && canMorph()))
			|| canAccessNorfairPortal();
	}
  }

  initTournament() {
    this.initCasual();

    this.locations["Ice Beam"].tourneyLogic = function() {
		return canOpenGreenDoors() && canMorph() && (heatProof() || hasEnergyReserves(3));
	}
	this.locations["Missile (below Ice Beam)"].tourneyLogic = function() {
		return (canOpenGreenDoors() && canUsePowerBombs() && (hasEnergyReserves(3) || heatProof())) || (heatProof() && canDashSM() && canOpenGreenDoors());
	}
	this.locations["Energy Tank (Hi-Jump Boots)"].tourneyLogic = function() {
		return canOpenRedDoors();
	}
	this.locations["Hi-Jump Boots"].tourneyLogic = function() {
		return canOpenRedDoors() && canPassBombPassages();
	}
	this.locations["Missile (Hi-Jump Boots)"].tourneyLogic = function() {
		return canOpenRedDoors() && canMorph();
	}
  }
}
