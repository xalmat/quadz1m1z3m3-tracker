class AbsuMain extends Absu {
  constructor(name = "Absu", subname = "Main", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("","Health Node Fragment (Absu top)",505,901,regionName),
			new Location("","Power Node Fragment (Absu top 1)",361,919,regionName),
			new Location("","Power Node Fragment (Absu top 2)",379,919,regionName),
			new Location("","Power Node Fragment (Absu top 3)",325,937,regionName),
			new Location("","Power Node Fragment (Absu top 4)",343,937,regionName),
			new Location("","Health Node Fragment (Absu middle 1)",307,955,regionName),
			new Location("","Health Node Fragment (Absu middle 2)",271,1009,regionName),
			new Location("","Address Disruptor 1",433,1009,regionName),
			new Location("","Power Node Fragment (Absu middle left)",199,1027,regionName),
			new Location("","Health Node (Absu)",469,1027,regionName),
			new Location("","Kilver",343,1045,regionName),
			new Location("","Inertial Pulse",631,1045,regionName),
			new Location("","Digital Paper (Absu top)",235,1063,regionName),
			new Location("","Rusalka Tablet (Absu top right)",523,1063,regionName),
			new Location("","Rusalka Tablet (Absu top left)",325,1081,regionName),
			new Location("","Size Node (Absu)",469,1081,regionName),
			new Location("","Health Node Fragment (Absu bottom)",577,1081,regionName),
			new Location("","Data Bomb",253,1099,regionName),
			new Location("","Range Node (Absu left)",325,1099,regionName),
			new Location("","Digital Paper (Absu bottom)",433,1099,regionName),
			new Location("","Range Node (Absu right)",505,1099,regionName),
			new Location("","Rusalka Tablet (Absu bottom right)",541,1117,regionName),
			new Location("","Power Node (Absu)",631,1117,regionName),
			new Location("","Power Node Fragment (Absu bottom)",595,1135,regionName),
			new Location("","Rusalka Tablet (Absu bottom left)",325,1153,regionName)
		],this);
	}
  }

  initNoMajorGlitches() {
  }
}
