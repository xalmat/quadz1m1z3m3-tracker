class DungeonsLevel3 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level3") {
    super(name,subname);
    let regionName = name + subname;
    let x = 0;
    let y = 0;
    if(questid == 1) {
        x = 1088;
        y = 1248;
    } else if(questid == 2) {
        x = 1048,
        y =  562;
    }
    this.locations = new LocationCollection([
        new Location("Event","The Manji",x/Z1FACTOR,y/Z1FACTOR,regionName), // Manhandla
    ],this);

    this.boss = new BossManhandla();
  }

  initNoMajorGlitches() {
      let boss = this.boss;
      let dungeon = this;

      this.locations["The Manji"].glitchless = function() {
          return boss.canBeat();
      }

      this.canComplete.glitchless = function() {
          return dungeon.locations["The Manji"].glitchless();
      }
  }
}
