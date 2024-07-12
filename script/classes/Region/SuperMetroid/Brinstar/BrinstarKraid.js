class BrinstarKraid extends Brinstar {
  constructor(name = "Brinstar", subname = "Kraid") {
    super(name,subname);
    let regionName = name + subname;
    this.locations = new LocationCollection([
        new Location("Hidden","Energy Tank, Kraid",691,691,regionName),
        new Location("Chozo","Varia Suit",943,691,regionName,{equipment:"%%kraid%%"}),
        new Location("Hidden","Missile (Kraid)",763,673,regionName,{equipment:"%%powerbomb%%"}),
        new Location("Event","Kraid",907,673,regionName)
    ],this);
  }

  initCasual() {
    this.locations["Energy Tank, Kraid"].casualLogic = function() {
        return has("kraid");
    }
    this.locations["Missile (Kraid)"].casualLogic = function() {
        return canUsePowerBombs();
    }
    this.locations["Varia Suit"].casualLogic = function() {
        return has("kraid");
    }

    this.canEnter.casualLogic = function() {
        return (canDestroyBombWalls() || canDashSM() || canAccessNorfairPortal())
            && (canOpenGreenDoors() && canMorph())
            && canPassBombPassages();
    }
    this.canComplete.casualLogic = function() {
      return this.locations["Kraid"].casualLogic();
    }
  }

  initTournament() {
    this.initCasual();
  }
}
