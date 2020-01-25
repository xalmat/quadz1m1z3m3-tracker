class KurMain extends Kur {
  constructor(name = "Kur", subname = "Main", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			new Location("","Clay Tablet (Kur top)",1027,505,regionName),
			new Location("","Power Node Fragment (Kur)",973,541,regionName),
			new Location("","Power Node (Kur top)",1189,541,regionName),
			new Location("","Clay Tablet (Kur middle)",973,559,regionName),
			new Location("","Reflector",1099,559,regionName),
			new Location("","Enhanced Drone Launch",1081,577,regionName),
			new Location("","Health Node Fragment (Kur top right)",1189,577,regionName),
			new Location("","Health Node Fragment (Kur top left)",1063,595,regionName),
			new Location("","Grapple",1189,595,regionName),
			new Location("","Clay Tablet (Kur bottom)",1045,613,regionName),
			new Location("","Health Node Fragment (Kur middle left)",955,667,regionName),
			new Location("","Health Node (Kur)",1063,667,regionName),
			new Location("","Ion Beam",973,685,regionName),
			new Location("","Remote Drone",1009,685,regionName),
			new Location("","Hypo-Atomizer",991,739,regionName),
			new Location("","Health Node Fragment (Kur middle right)",1009,739,regionName),
			new Location("","Power Node (Kur bottom)",901,847,regionName),
			new Location("","Health Node Fragment (Kur bottom)",991,847,regionName),
			new Location("","Firewall",973,865,regionName),
			new Location("","Address Disrupter 2",919,901,regionName),
			new Location("","Field Disruptor",991,901,regionName),
			new Location("","Tethered Charge",1063,901,regionName)
		],this);
	}
  }

  initNoMajorGlitches() {
  }
}
