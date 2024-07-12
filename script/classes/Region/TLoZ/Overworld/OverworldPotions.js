class OverworldPotions extends Overworld {
  // Z1M1.Zelda/Resources/Q1/Caves.xml
  constructor(name = "Overworld", subname = "Potions") {
    super(name,subname);
    let regionName = name + subname;
    let locCollection = [];

    // Both Quests
    locCollection = [
        new Location("Potions","Unnamed Potions 1",        1216/Z1FACTOR,      16/Z1FACTOR,regionName),                            // 0x04 // potions1/potions2
        new Location("Potions","Unnamed Potions 2",        3472/Z1FACTOR,      16/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),    // 0x0D // potions2/potions3
        new Location("Potions","Unnamed Potions 3",         928/Z1FACTOR,     544/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),    // 0x33 // potions4/potions6
        new Location("Potions","Unnamed Potions 4",        2992/Z1FACTOR,     736/Z1FACTOR,regionName,{equipment:"%%candle%%"}),    // 0x4B // potions5/potions7
        new Location("Potions","Unnamed Potions 5",        1136/Z1FACTOR,    1072/Z1FACTOR,regionName)                            // 0x64 // potions6/potions8
    ];

    // Only First Quest
    if(questid == 1) {
      locCollection.push(
        new Location("Potions","Unnamed Potions 6",        2016/Z1FACTOR,     368/Z1FACTOR,regionName,{equipment:"%%bomb%%"})    // 0x27 // potions3/xxxx
      );
    }

    // Only Second Quest
    if(questid == 2) {
      locCollection.push(
        new Location("Potions","Unnamed Potions 7",         608/Z1FACTOR,      64/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),        // 0x02 // xxxx/potions1
        new Location("Potions","Unnamed Potions 8",        2240/Z1FACTOR,     224/Z1FACTOR,regionName,{equipment:"%%bomb%%"}),        // 0x18 // xxxx/potions4
        new Location("Potions","Unnamed Potions 9",        2400/Z1FACTOR,     432/Z1FACTOR,regionName,{equipment:"%%recorder%%"}),    // 0x29 // xxxx/potions5
        new Location("Potions","Unnamed Potions 10",    2112/Z1FACTOR,    1328/Z1FACTOR,regionName,{equipment:"%%candle%%"})        // 0x78 // xxxx/potions9
      );
    }

    this.locations = new LocationCollection(locCollection,this);
  }

  initNoMajorGlitches() {
      this.locations["Unnamed Potions 2"].glitchless =
      this.locations["Unnamed Potions 3"].glitchless = function() {
          return has("bomb");
      }
      this.locations["Unnamed Potions 4"].glitchless = function() {
          return canLightBushes();
      }

      if(questid == 1) {
          this.locations["Unnamed Potions 6"].glitchless = function() {
              return has("bomb");
          }
      }
      if(questid == 2) {
          this.locations["Unnamed Potions 7"].glitchless =
          this.locations["Unnamed Potions 8"].glitchless = function() {
              return has("bomb");
          }
          this.locations["Unnamed Potions 9"].glitchless = function() {
              return has("recorder");
          }
          this.locations["Unnamed Potions 10"].glitchless = function() {
              return canLightBushes();
          }
      }
  }
}
