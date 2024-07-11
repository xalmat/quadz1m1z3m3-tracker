class UkkinNaMain extends UkkinNa {
  constructor(name = "UkkinNa", subname = "Main", buildLocations = true) {
    super(name,subname,buildLocations);
    let regionName = name + subname;
    if(this.buildLocations) {
        this.locations = new LocationCollection([
            new Location("","Turbine Pulse",451,451,regionName),
            new Location("","Health Node Fragment (Ukkin-Na top)",415,541,regionName),
            new Location("","Rusalka Tablet (Ukkin-Na top)",325,529,regionName),
            new Location("","Power Node Fragment (Ukkin-Na top)",451,577,regionName),
            new Location("","Health Node (Ukkin-Na)",343,595,regionName),
            new Location("","Trenchcoat",415,613,regionName),
            new Location("","Power Node Fragment (Ukkin-Na middle)",415,685,regionName),
            new Location("","Digital Paper (Ukkin-Na)",397,739,regionName),
            new Location("","Rusalka Tablet (Ukkin-Na bottom) (2 items)",343,757,regionName),
            new Location("","Power Node Fragment (bottom)",433,775,regionName)
        ],this);
    }
  }

  initNoMajorGlitches() {
  }
}
