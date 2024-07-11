class EribuMain extends Eribu {
  constructor(name = "Eribu", subname = "Main", buildLocations = true) {
    super(name,subname,buildLocations);
    let regionName = name + subname;
    if(this.buildLocations) {
        this.locations = new LocationCollection([
            new Location("","Health Node (Eribu top)",235,595,regionName),
            new Location("","Nova",271,631,regionName),
            new Location("","Power Node Fragment (Eribu top)",91,649,regionName),
            new Location("","Multi-Disruptor",145,649,regionName),
            new Location("","Flamethrower",19,667,regionName),
            new Location("","Size Node (Eribu)",127,685,regionName),
            new Location("","Note (Eribu)",127,721,regionName),
            new Location("","Laser Drill",271,721,regionName),
            new Location("","Power Node (Eribu)",235,739,regionName),
            new Location("","Health Node Fragment (Eribu top)",19,757,regionName),
            new Location("","Axiom Disruptor",73,757,regionName),
            new Location("","Lightning Gun",163,793,regionName),
            new Location("","Orbital Discharge",181,829,regionName),
            new Location("","Power Node Fragment (Eribu bottom)",253,847,regionName),
            new Location("","Health Node Fragment (Eribu bottom)",199,865,regionName),
            new Location("","Health Node (Eribu bottom)",253,883,regionName)
        ],this);
    }
  }

  initNoMajorGlitches() {
  }
}
