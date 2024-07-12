class OverworldItem extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "Item") {
    super(name,subname);
    let regionName = name + subname;

    // First Quest
    if(questid == 1) {
    this.locations = new LocationCollection([
        new Location("Cave",    "Letter Cave",            3664/Z1FACTOR,   64/Z1FACTOR,regionName),                                    // 0x0E    // item1
        new Location("Cave",    "Wooden Sword Cave",    1856/Z1FACTOR, 1248/Z1FACTOR,regionName),                                    // 0x77    // item2
        new Location("Cave",    "White Sword Cave",        2592/Z1FACTOR,   16/Z1FACTOR,regionName,{equipment:"%%heartcontainer%%"}),    // 0x0A    // item3
        new Location("Cave",    "Magical Sword Cave",     400/Z1FACTOR,  432/Z1FACTOR,regionName,{equipment:"%%heartcontainer%%"})    // 0x21    // item4
    ],this);
    }

    // Second Quest
    if(questid == 2) {
    this.locations = new LocationCollection([
        new Location("Cave",    "Letter Cave",             400/Z1FACTOR,     256/Z1FACTOR,regionName,{equipment:"%%bracelet%%"}),        // 0x11 // item1
        new Location("Cave",    "Wooden Sword Cave",    1856/Z1FACTOR,    1248/Z1FACTOR,regionName),                                    // 0x77 // item2
        new Location("Cave",    "White Sword Cave",        2592/Z1FACTOR,      16/Z1FACTOR,regionName,{equipment:"%%heartcontainer%%"}),    // 0x0A // item3
        new Location("Cave",    "Magical Sword Cave",    2448/Z1FACTOR,      80/Z1FACTOR,regionName,{equipment:"%%bracelet%%"})        // 0x09 // item4
    ],this);
    }
  }

  initNoMajorGlitches() {
      this.locations["White Sword Cave"].glitchless = function() {
          return has("heartcontainer",3+2);
      }

      if(questid == 1) {
          this.locations["Magical Sword Cave"].glitchless = function() {
              return has("heartcontainer",3+9);
          }
      }

      if(questid == 2) {
          this.locations["Letter Cave"].glitchless =
          this.locations["Magical Sword Cave"].glitchless = function() {
              return has("bracelet");
          }
      }
  }
}
