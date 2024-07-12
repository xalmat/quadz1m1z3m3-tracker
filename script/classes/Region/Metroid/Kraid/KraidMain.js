class KraidMain extends Kraid {
  constructor(name = "Kraid", subname = "Main") {
    super(name,subname);
    let regionName = name + subname;
    this.locations = new LocationCollection([
        new Location("","Upper Right Area Top Floor",171,360,regionName,{vanilla:false}),                // 0x1109
        new Location("","Upper Right Area Middle Floor",171,381,regionName,{vanilla:false}),            // 0x1209
        new Location("","Upper Right Area Bottom Floor",171,402,regionName,{vanilla:false}),            // 0x1309
        new Location("","Left of First Doors",66,444,regionName),                                        // 0x1504
        new Location("","Right of First Doors",171,444,regionName),                                        // 0x1509
        new Location("","Right of Second Doors",192,465,regionName),                                    // 0x160A
        new Location("","Left of Third Doors",84,507,regionName,{vanilla:false}),                        // 0x1805
        new Location("","Room next to Tower of Breakable Blocks",192,528,regionName),                    // 0x190A
        new Location("","Left of Fourth Doors",84,549,regionName,{vanilla:false}),                        // 0x1A05
        new Location("","Left of Second Doors Below Fake Lava then to the Right",84,570,regionName),    // 0x1B05
        new Location("","Room Left of Fake Kraid",46,591,regionName,{vanilla:false}),                    // 0x1C03
        new Location("","Right of Fake Kraid - Left",171,591,regionName,{vanilla:false}),                // 0x1C05
        new Location("","Right of Fake Kraid - Right",192,591,regionName,{vanilla:false}),                // 0x1C07
        new Location("","Kraid's Room",131,612,regionName),                                                // 0x1D08
        new Location("Event","Kraid",149,612,regionName)
    ],this);

    this.locations = new LocationCollection([
        new Location("","Upper Right Area Top Floor",                                         162,     288,regionName),    // 0x1109
        new Location("","Upper Right Area Middle Floor",                                     162,     306,regionName),    // 0x1209
        new Location("","Upper Right Area Bottom Floor",                                     162,     324,regionName),    // 0x1309
        new Location("","Left of First Doors",                                                  72,     360,regionName),    // 0x1504
        new Location("","Right of First Doors",                                                 162,     360,regionName),    // 0x1509
        new Location("","Right of Second Doors",                                             180,     378,regionName),    // 0x160A
        new Location("","Left of Third Doors",                                                  90,     414,regionName),    // 0x1805
        new Location("","Room next to Tower of Breakable Blocks",                             180,     432,regionName),    // 0x190A
        new Location("","Left of Fourth Doors",                                                  90,     450,regionName),    // 0x1A05
        new Location("","Left of Second Doors, then Below Fake Lava, then to the Right",      90,     468,regionName),    // 0x1B05
        new Location("","Room Left of Fake Kraid",                                              54,     486,regionName),    // 0x1C03
        new Location("","Right of Fake Kraid - Left",                                          90,     486,regionName),    // 0x1C05
        new Location("","Right of Fake Kraid - Right",                                         126,     486,regionName),    // 0x1C07
        new Location("","Kraid's Room",                                                         126,     504,regionName),    // 0x1D08
        new Location("Event","Kraid",146,504,regionName)
    ],this);
  }

  initCasual() {
      this.locations["Upper Right Area Top Floor"].casualLogic =
      this.locations["Upper Right Area Middle Floor"].casualLogic =
      this.locations["Upper Right Area Bottom Floor"].casualLogic =
      this.locations["Right of First Doors"].casualLogic = function() {
          return canOpenRedDoors();
      }
      this.locations["Left of First Doors"].casualLogic = function() {
          let ret = false;

          if(canUseMorphBombs()) {
              ret = true;
          }

//          if(canUseMorphBombs() || (has("ice") && canHiJump())) {
//              ret = true;
//          }

//          if(true) {
//              ret = true;
//          }

          return ret;
      }
      this.locations["Right of Second Doors"].casualLogic = function() {
          return canOpenRedDoors() && canUseMorphBombs();
      }
      this.locations["Room next to Tower of Breakable Blocks"].casualLogic = function() {
          let ret = false;

          if(has("ice") && canOpenRedDoors()) {
              ret = true;
          }

//          if(canOpenRedDoors() && canUseMorphBombs()) {
//              ret = true;
//          }

          return ret;
          return has("ice");
      }
      this.locations["Left of Second Doors, then Below Fake Lava, then to the Right"].casualLogic = function() {
          return canOpenRedDoors();
      }
      this.locations["Room Left of Fake Kraid"].casualLogic =
      this.locations["Right of Fake Kraid - Left"].casualLogic =
      this.locations["Right of Fake Kraid - Right"].casualLogic = function() {
          let ret = false;

          if(canUseMorphBombs()) {
              ret = true;
          }

//          if(canMorph()) {
//            ret = true;
//          }

          return ret;
          return canUseMorphBombs();
      }
      this.locations["Kraid's Room"].casualLogic =
      this.locations["Kraid"].casualLogic = function() {
          let ret = false;

          if(canOpenRedDoors() && canMorph() && (has("ice") || has("bombs") || canHiJump())) {
              ret = true;
          }

//          if(canOpenRedDoors() && canMorph()) {
//              ret = true;
//          }

//          if(canMorph()) {
//              ret = true;
//          }

          return ret;
      }
  }
}
