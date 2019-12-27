class DungeonsPyramidOfPower extends Dungeons {
  constructor(name = "Dungeons", subname = "PyramidOfPower", buildLocations = true) {
    super(name, subname, buildLocations);
    let regionName = name + subname;
    if (this.buildLocations) {
      this.locations = new LocationCollection([
        new Location("Event", "Pyramid of Power - Ganon", "75.0%", "40.0%", regionName)
      ], this);
    }

    this.boss = new BossGanon();
  }

  initNoMajorGlitches() {
    let boss = this.boss;

    this.canEnter.glitchless = function () {
      return true;
    }

    this.canComplete.glitchless = function () {
      return boss.canBeat();
    }
  }
}
