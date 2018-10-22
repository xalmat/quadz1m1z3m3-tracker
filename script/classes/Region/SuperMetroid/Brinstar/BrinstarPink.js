class BrinstarPink extends Brinstar {
  constructor(name = "Brinstar", subname = "Pink") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
		new Location("Chozo","Super Missile (pink Brinstar)",349,511,regionName,{equipment:"%%bombs%%%%supermissile%%"}),
		new Location("","Missile (pink Brinstar top)",229,475,regionName),
		new Location("","Missile (pink Brinstar bottom)",223,529,regionName),
		new Location("Chozo","Charge Beam",223,547,regionName,{equipment:"%%bombs%%"}),
		new Location("","Power Bomb (pink Brinstar)",187,493,regionName,{equipment:"%%powerbomb%%%%supermissile%%"}),
		new Location("","Missile (green Brinstar pipe)",313,547,regionName,{equipment:"%%morph%%"}),
		new Location("","Energy Tank, Waterway",61,583,regionName,{equipment:"%%powerbomb%%%%missile%%%%speed%%"}),
		new Location("","Energy Tank, Brinstar Gate",295,493,regionName,{equipment:"%%powerbomb%%"}),
		new Location("Event","Spore Spawn",303,384,regionName)
	],this);
  }

  initCasual() {
	this.locations["Super Missile (pink Brinstar)"].casualLogic = function() {
		return canPassBombPassages() && canOpenGreenDoors();
	}
	this.locations["Charge Beam"].casualLogic = function() {
		return canPassBombPassages();
	}
	this.locations["Power Bomb (pink Brinstar)"].casualLogic = function() {
		return canUsePowerBombs() && canOpenGreenDoors() && hasEnergyReserves(1);
	}
	this.locations["Missile (green Brinstar pipe)"].casualLogic = function() {
		return canMorph() && (canOpenYellowDoors() || canOpenGreenDoors() || canAccessNorfairPortal());
	}
	this.locations["Energy Tank, Waterway"].casualLogic = function() {
		return canUsePowerBombs() && canOpenRedDoors() && canDashSM() && (hasEnergyReserves(1) || canSwimSM());
	}
	this.locations["Energy Tank, Brinstar Gate"].casualLogic = function() {
		return canUsePowerBombs() && has("wave") && hasEnergyReserves(1);
	}
	this.locations["Spore Spawn"].casualLogic = function() {
		return canPassBombPassages() && canOpenGreenDoors();
	}

    this.canEnter.casualLogic = function() {
		return (canOpenRedDoors() && (canDestroyBombWalls() || canDashSM()))
			|| canUsePowerBombs()
			|| (canAccessNorfairPortal() && canMorph() && has("wave") && (has("ice") || canHiJump() || has("space")));
    }
    this.canComplete.casualLogic = function() {
      return this.locations["Spore Spawn"].casualLogic();
    }
  }

  initTournament() {
    this.initCasual();

	this.locations["Power Bomb (pink Brinstar)"].tourneyLogic = function() {
		return canUsePowerBombs() && canOpenGreenDoors();
	}
    this.locations["Energy Tank, Brinstar Gate"].tourneyLogic = function() {
		return canUsePoewrBombs() && (has("wave") || canOpenGreenDoors());
	}

	this.canEnter.tourneyLogic = function() {
		return (canOpenRedDoors() && (canDestroyBombWalls() || canDashSM()))
			|| canUsePowerBombs()
			|| (canAccessNorfairPortal() && canMorph() && (has("ice") || canHiJump() || canSpringBallJump() || canFlySM()));
	}
  }
}
