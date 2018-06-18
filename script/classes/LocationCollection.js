class LocationCollection {
  constructor(locations = [],region) {
	  this.region = region,
	  this.items = [];
	  for(var loc in locations) {
		  loc = locations[loc];
		  this.items[loc.name] = loc;
	  }
	  return this.items;
  }
}
