class IndiMain extends UkkinNa {
  constructor(name = "Indi", subname = "Main", buildLocations = true) {
    super(name,subname,buildLocations);
    let regionName = name + subname;
    if(this.buildLocations) {
        this.locations = new LocationCollection([
            new Location("","Rusalka Tablet (Indi)",703,829,regionName),
            new Location("","Digital Paper (Indi)",289,847,regionName)
        ],this);
    }
  }

  initNoMajorGlitches() {
  }
}
