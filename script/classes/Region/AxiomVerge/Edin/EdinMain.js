class EdinMain extends Edin {
  constructor(name = "Edin", subname = "Main", buildLocations = true) {
    super(name,subname,buildLocations);
    let regionName = name + subname;
    if(this.buildLocations) {
        this.locations = new LocationCollection([
            new Location("","Drone Teleport",577,631,regionName),
            new Location("","Clay Tablet (Edin)",631,667,regionName),
            new Location("","Distortion Field",721,667,regionName),
            new Location("","Power Node Fragment (Edin top)",631,685,regionName),
            new Location("","Health Node Fragment (Edin top)",703,685,regionName),
            new Location("","Health Node (Edin)",595,703,regionName),
            new Location("","Rusalka Tablet (Edin)",649,739,regionName),
            new Location("","Digital Paper (Edin top)",703,739,regionName),
            new Location("","Health Node Fragment (Edin left)",523,757,regionName),
            new Location("","Bioflux Accelerator",577,757,regionName),
            new Location("","Digital Paper (Edin bottom)",721,757,regionName),
            new Location("","Health Node Fragment (Edin right) (2 items)",757,757,regionName),
            new Location("","Shards",631,793,regionName),
            new Location("","Range Node (Edin)",667,793,regionName),
            new Location("","Address Bomb",775,793,regionName)
        ],this);
    }
  }

  initNoMajorGlitches() {
  }
}
