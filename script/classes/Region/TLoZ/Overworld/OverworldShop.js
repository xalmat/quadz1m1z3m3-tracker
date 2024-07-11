class OverworldShop extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "Shop") {
    super(name,subname);
    let regionName = name + subname;
    let locCollection = [];

    // Both Quests
    locCollection = [
        new Location("Shop","Shop Next to Level 5",                3200/Z1FACTOR,   16/Z1FACTOR,regionName),                            // 0x0C    // shop01/shop01
        new Location("Shop","Unnamed Shop 1",                      640/Z1FACTOR,  192/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),    // 0x12    // shop02/shop04
        new Location("Shop","Shop Just East of Bracelet Armos",    1440/Z1FACTOR,  368/Z1FACTOR,regionName),                            // 0x25    // shop03/shop06
        new Location("Shop","Unnamed Shop 2",                    1584/Z1FACTOR,  368/Z1FACTOR,regionName),                            // 0x26    // shop04/shop07
        new Location("Shop","Shop South of Blue Ring Shop",        1088/Z1FACTOR,  720/Z1FACTOR,regionName),                            // 0x44    // shop06/shop08
        new Location("Shop","Unnamed Shop 3",                    1680/Z1FACTOR,  816/Z1FACTOR,regionName,{equipment:"%%candle%%"}),    // 0x46    // shop07/shop09
        new Location("Shop","Shop South of Desert",                2736/Z1FACTOR,  720/Z1FACTOR,regionName),                            // 0x4A    // shop08/shop10
        new Location("Shop","Unnamed Shop 4",                    3456/Z1FACTOR,  792/Z1FACTOR,regionName,{equipment:"%%candle%%"}),    // 0x4D    // shop09/shop11
        new Location("Shop","Shop Northeast of Level 8",        3696/Z1FACTOR,  896/Z1FACTOR,regionName),                            // 0x5E    // shop10/shop12
        new Location("Shop","East Shore Shop",                    3888/Z1FACTOR, 1072/Z1FACTOR,regionName)                            // 0x6F    // shop12/shop14
    ];
    if(true) {
        // Quad
        locCollection.push(
            new Location("Portal","ALttP Portal: Kakariko Fortune Teller",1648/Z1FACTOR, 1072/Z1FACTOR,regionName),// 0x66    // shop11/shop13
        );
    } else {
        // Z1M1
        locCollection.push(
            new Location("Shop","Shop Northwest of Start",            1648/Z1FACTOR, 1072/Z1FACTOR,regionName),                            // 0x66    // shop11/shop13
        );
    }

    // Only First Quest
    if(questid == 1) {
      locCollection.push(
        new Location("Shop","Blue Ring Shop",                    1088/Z1FACTOR,  592/Z1FACTOR,regionName),                            // 0x34    // shop05/xxxx
        new Location("Shop","Unnamed Shop 5",                    2176/Z1FACTOR, 1320/Z1FACTOR,regionName,{equipment:"%%candle%%"})    // 0x78    // shop13/xxxx
      );
    }

    // Only Second Quest
    if(questid == 2) {
      locCollection.push(
        new Location("Shop","Unnamed Shop 6",        3664/Z1FACTOR,      64/Z1FACTOR,regionName),    // 0x0E // xxxx/shop02
        new Location("Shop","Unnamed Shop 7",        3968/Z1FACTOR,      64/Z1FACTOR,regionName),    // 0x0F // xxxx/shop03
        new Location("Shop","Unnamed Shop 8",        1440/Z1FACTOR,     368/Z1FACTOR,regionName),    // 0x15 // xxxx/shop05
        new Location("Shop","Unnamed Shop 9",        1152/Z1FACTOR,    1320/Z1FACTOR,regionName)    // 0x74 // xxxx/shop15
      );
    }

    this.locations = new LocationCollection(locCollection,this);
  }

  initNoMajorGlitches() {
      this.locations["Unnamed Shop 1"].glitchless = function() {
          return has("bomb");
      }
      this.locations["Unnamed Shop 3"].glitchless =
      this.locations["Unnamed Shop 4"].glitchless = function() {
          return canLightBushes();
      }

      if(questid == 1) {
          this.locations["Unnamed Shop 5"].glitchless = function() {
              return canLightBushes();
          }
      }
      if(questid == 2) {
      }
  }
}
