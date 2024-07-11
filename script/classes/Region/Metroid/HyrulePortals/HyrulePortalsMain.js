class HyrulePortalsMain extends HyrulePortals {
  constructor(name = "HyrulePortals", subname = "Main") {
    super(name,subname);
    let regionName = name + subname;
    this.locations = new LocationCollection([
        new Location("Portal","TLoZ Portal: Morph Ball Exit",18,234,"BrinstarMain"),    // 0x010E, Exit left
        new Location("Portal","TLoZ Portal: Brinstar Exit",558,90,"BrinstarMain"),        // 0x1E06, Due east of Waver Central, exit Right
        new Location("Portal","TLoZ Portal: Kraid Exit",234,504,"KraidMain"),            // 0x0C1C, Bottom-right corner, exit Right
        new Location("Portal","TLoZ Portal: Norfair Exit",558,162,"NorfairMain"),        // 0x1E10, Due east of Upper Right Area Top Floor, exit Right
        new Location("Portal","TLoZ Portal: Ridley Exit",558,486,"RidleyMain"),            // 0x1E1C, Due east of Ridley, exit Right
        new Location("Portal","TLoZ Portal: Tourian Exit",18,18,"TourianMain")            // Tourian exit elevator
    ],this);
  }

  initCasual() {
      this.locations["TLoZ Portal: Kraid Exit"].casualLogic = function() {
          return (has("ice") && canMorph()) || canUseMorphBombs();
      }
      this.locations["TLoZ Portal: Norfair Exit"].casualLogic = function() {
          return canHiJump() || (has("ice") && canUseMorphBombs());
      }
      this.locations["TLoZ Portal: Tourian Exit"].casualLogic = function() {
          return canMorph() && has("ice") && has("kraidtotem") && has("ridleytotem");
      }
  }
}
