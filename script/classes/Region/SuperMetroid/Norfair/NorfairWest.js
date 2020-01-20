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
	this.locations["Ice Beam"].normalLogic = function() {
		return canOpenGreenDoors() && canPassBombPassages() && heatProof() && canDashSM();
	}
	this.locations["Missile (below Ice Beam)"].normalLogic = function() {
		return canOpenGreenDoors() && canUsePowerBombs() && heatProof() && canDashSM();
	}
	this.locations["Energy Tank (Hi-Jump Boots)"].normalLogic = function() {
		return canOpenRedDoors();
	}
	this.locations["Hi-Jump Boots"].normalLogic = function() {
		return canOpenRedDoors() && canPassBombPassages();
	}
	this.locations["Missile (Hi-Jump Boots)"].normalLogic = function() {
		return canOpenRedDoors() && canMorph();
	}

    this.canEnter.normalLogic = function() {
		return ((canDestroyBombWalls() || canDashSM())
			&& (canOpenGreenDoors() && canMorph()))
			|| canAccessNorfairPortal();
	}
  }

  initTournament() {
    this.initCasual();

    this.locations["Ice Beam"].hardLogic = function() {
		return canOpenGreenDoors() && canMorph() && (heatProof() || hasEnergyReserves(3));
	}
	this.locations["Missile (below Ice Beam)"].hardLogic = function() {
		return (canOpenGreenDoors() && canUsePowerBombs() && (hasEnergyReserves(3) || heatProof())) || (heatProof() && canDashSM() && canOpenGreenDoors());
	}
	this.locations["Energy Tank (Hi-Jump Boots)"].hardLogic = function() {
		return canOpenRedDoors();
	}
	this.locations["Hi-Jump Boots"].hardLogic = function() {
		return canOpenRedDoors() && canPassBombPassages();
	}
	this.locations["Missile (Hi-Jump Boots)"].hardLogic = function() {
		return canOpenRedDoors() && canMorph();
	}
  }
}
