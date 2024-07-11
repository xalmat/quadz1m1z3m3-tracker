class ZiMain extends Zi {
  constructor(name = "Zi", subname = "Main", buildLocations = true) {
    super(name,subname,buildLocations);
    let regionName = name + subname;
    if(this.buildLocations) {
        this.locations = new LocationCollection([
            new Location("","Power Node Fragment (Zi top)",847,901,regionName),
            new Location("","Health Node (Zi)",811,919,regionName),
            new Location("","Modified Lab Coat",865,919,regionName),
            new Location("","Digital Paper (Zi)",775,955,regionName),
            new Location("","Health Node Fragment (Zi)",811,973,regionName),
            new Location("","Rusalka Tablet (Zi)",667,991,regionName),
            new Location("","Voranj",721,1009,regionName),
            new Location("","Power Node Fragment (Zi)",649,1045,regionName),
            new Location("","Size Node (Zi)",793,1045,regionName),
            new Location("","Bioflux Accelerator",685,1063,regionName),
            new Location("","Health Node Fragment (Zi middle)",829,1063,regionName),
            new Location("","Health Node Fragment (Zi bottom)",739,1081,regionName),
            new Location("","Range Node (Zi)",703,1099,regionName),
            new Location("","Passcode Tool",793,1117,regionName),
            new Location("","Digital Paper (Zi)",829,1117,regionName)
        ],this);
    }
  }

  initNoMajorGlitches() {
  }
}
