class EKurMahMain extends EKurMah {
  constructor(name = "EKurMah", subname = "Main", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("","Power Node (E-Kur-Mah)",1135,451,regionName),
			new Location("","Sudran Key",1207,469,regionName),
			new Location("","Clay Tablet (E-Kur-Mah top right)",1225,487,regionName),
			new Location("","Clay Tablet (E-Kur-Mah top left)",1135,505,regionName),
			new Location("","Clay Tablet (E-Kur-Mah bottom)",1225,577,regionName),
			new Location("","Quantum Veriegator",1153,721,regionName),
			new Location("","Health Node Fragment (E-Kur-Mah)",1189,739,regionName),
			new Location("","Red Coat",1153,793,regionName),
			new Location("","Power Node Fragment (E-Kur-Mah)",1171,811,regionName)
		],this);
	}
  }

  initNoMajorGlitches() {
  }
}
