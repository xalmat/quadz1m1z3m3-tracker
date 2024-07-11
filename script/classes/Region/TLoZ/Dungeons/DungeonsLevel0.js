class DungeonsLevel0 extends Dungeons {
  // Z1M1.Zelda/Resources/Q1/Level0.xml
  constructor(name = "Dungeons", subname = "Level0") {
    super(name,subname);
    let regionName = name + subname;
    this.locations = new LocationCollection([
        new Location("","At Bracelet Armos",    1248/Z1FACTOR,    416/Z1FACTOR,regionName),                            // 0x24
        new Location("","Off the East Shore",    4032/Z1FACTOR,  960/Z1FACTOR,regionName,{equipment:"%%ladder%%"})    // 0x5F
    ],this);
  }

  initMinorGlitches() {
      this.locations["Off the East Shore"].minorGlitches = function() {
          let ret = has("ladder");

          if(ret) {
              return ret;
          } else {
              return "viewable";
          }
      }
  }
}
