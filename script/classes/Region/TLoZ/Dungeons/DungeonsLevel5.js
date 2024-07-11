class DungeonsLevel5 extends Dungeons {
  constructor(name = "Dungeons", subname = "Level5") {
    super(name,subname);
    let regionName = name + subname;
    let x = 0;
    let y = 0;
    if(questid == 1) {
        x = 2882;
        y =    0;
    } else if(questid == 2) {
        x = 1343,
        y =  724;
    }
    this.locations = new LocationCollection([
        new Location("Event","The Lizard",x/Z1FACTOR,y/Z1FACTOR,regionName), // Digdogger
    ],this);

    this.boss = new BossDigdogger();
  }

  initNoMajorGlitches() {
      let boss = this.boss;
      let dungeon = this;

      this.locations["The Lizard"].glitchless = function() {
          return boss.canBeat();
      }

      this.canEnter.glitchless = function() {
          return canSwimZ1();
      }
      this.canComplete.glitchless = function() {
          return dungeon.locations["The Lizard"].glitchless();
      }
  }
}
