class OverworldSecretCaves extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "SecretCaves") {
    super(name,subname);
    let regionName = name + subname;
    let locCollection = [];

    // Both Quests
    locCollection = [
        new Location("BombableCave","Bombable 30-Rupee Cave",         798/Z1FACTOR,    192/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),    // 0x13 // Bomb      30-Rupee Cave        // secret02/secret01
        new Location("BurnableCave","Burnable 30-Rupee Cave",        2256/Z1FACTOR,    448/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x28 // Fire      30-Rupee Cave        // secret03/secret03
        new Location("BombableCave","Bombable 30-Rupee Cave 2",        3392/Z1FACTOR,    368/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),    // 0x2D // Bomb      30-Rupee Cave 2    // secret04/secret05
        new Location("ArmosCave",    "Armos 30-Rupee Cave",            3472/Z1FACTOR,    592/Z1FACTOR,regionName),                            // 0x3D // Armos     30-Rupee Cave        // secret05/secret06
        new Location("BurnableCave","Burnable 30-Rupee Cave 2",        2256/Z1FACTOR,    736/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x48 // Fire      30-Rupee Cave 2    // secret06/secret07
        new Location("ArmosCave",    "Armos 10-Rupee Cave",            3744/Z1FACTOR,    768/Z1FACTOR,regionName),                            // 0x4E // Armos     10-Rupee Cave        // secret07/secret08
        new Location("BurnableCave","Burnable 10-Rupee Cave",         400/Z1FACTOR,    977/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x51 // Fire      10-Rupee Cave        // secret08/secret09
        new Location("BurnableCave","Burnable 10-Rupee Cave 2",        1696/Z1FACTOR,    976/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x56 // Fire      10-Rupee Cave 2    // secret09/secret11
        new Location("BurnableCave","Burnable 10-Rupee Cave 3",        2848/Z1FACTOR,    976/Z1FACTOR,regionName,{equipment:"%%candle%%"})    // 0x5B // Fire      10-Rupee Cave 3    // secret10/secret13
    ];

    // Only First Quest
    if(questid == 1) {
      locCollection.push(
        new Location("SecretCave",    "Open 100-Rupee Cave",            3968/Z1FACTOR,     64/Z1FACTOR,regionName),                            // 0x0F // Open     100-Rupee Cave        // secret01/xxxx
        new Location("BurnableCave","Burnable 100-Rupee Cave",         640/Z1FACTOR,   1104/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x62 // Fire     100-Rupee Cave        // secret11/xxxx
        new Location("BombableCave","Bombable 30-Rupee Cave 3",        1904/Z1FACTOR,   1072/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),    // 0x67 // Bomb      30-Rupee Cave 3    // secret12/xxxx
        new Location("BurnableCave","Burnable 100-Rupee Cave 2",    2944/Z1FACTOR,   1152/Z1FACTOR,regionName,{equipment:"%%candle%%"}),// 0x6B // Fire     100-Rupee Cave 2    // secret13/xxxx
        new Location("BombableCave","Bombable 30-Rupee Cave 4",         334/Z1FACTOR,   1248/Z1FACTOR,regionName,{equipment:"%%bomb%%"})    // 0x71 // Bomb      30-Rupee Cave 4    // secret14/xxxx
      );
    }

    // Only Second Quest
    if(questid == 2) {
      locCollection.push(
        new Location("Secret","Unnamed Secret 1",         640/Z1FACTOR,     440/Z1FACTOR,regionName),                                // 0x22 // xxxx/secret02
        new Location("Secret","Unnamed Secret 2",        2912/Z1FACTOR,     432/Z1FACTOR,regionName),                                // 0x2B // xxxx/secret04
        new Location("Secret","Unnamed Secret 3",         864/Z1FACTOR,     976/Z1FACTOR,regionName,{equipment:"%%candle%%"}),        // 0x53 // xxxx/secret10
        new Location("Secret","Unnamed Secret 4",        2144/Z1FACTOR,     960/Z1FACTOR,regionName,{equipment:"%%recorder%%"}),    // 0x58 // xxxx/secret12
        new Location("Secret","Unnamed Secret 5",        3680/Z1FACTOR,    1136/Z1FACTOR,regionName,{equipment:"%%recorder%%"})    // 0x6E // xxxx/secret14
      );
    }

    this.locations = new LocationCollection(locCollection,this);
  }

  initNoMajorGlitches() {
      this.locations["Burnable 30-Rupee Cave"].glitchless =
      this.locations["Burnable 30-Rupee Cave 2"].glitchless =
      this.locations["Burnable 10-Rupee Cave"].glitchless =
      this.locations["Burnable 10-Rupee Cave 2"].glitchless =
      this.locations["Burnable 10-Rupee Cave 3"].glitchless = function() {
          return canLightBushes();
      }

      if(questid == 1) {
          this.locations["Burnable 100-Rupee Cave"].glitchless =
          this.locations["Burnable 100-Rupee Cave 2"].glitchless = function() {
              return canLightBushes();
          }
      }

      if(questid == 2) {
          this.locations["Unnamed Secret 3"].glitchless = function() {
              return canLightBushes();
          }
          this.locations["Unnamed Secret 4"].glitchless =
          this.locations["Unnamed Secret 5"].glitchless = function() {
              return has("recorder");
          }
      }
  }
}
