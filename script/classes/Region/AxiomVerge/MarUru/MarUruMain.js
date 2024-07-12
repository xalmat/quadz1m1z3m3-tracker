class MarUruMain extends MarUru {
  constructor(name = "MarUru", subname = "Main", buildLocations = true) {
    super(name,subname,buildLocations);
    let regionName = name + subname;
    if(this.buildLocations) {
        this.locations = new LocationCollection([
            new Location("","Digital Paper (MarUru top)",379,145,regionName),
            new Location("","Digital Paper (MarUru bottom)",361,199,regionName),
            new Location("","Reverse Slicer",343,235,regionName),
            new Location("","Size Node (MarUru)",415,235,regionName),
            new Location("","Health Node (MarUru)",361,325,regionName),
            new Location("","Power Node Fragment (MarUru top)",397,325,regionName),
            new Location("","Clay Tablet (MarUru) (2 items)",397,343,regionName)
        ],this);
    }
  }

  initNoMajorGlitches() {
  }
}
