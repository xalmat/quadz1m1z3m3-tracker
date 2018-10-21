class LocationCollection {
  constructor(locations = [],region) {
	  this.region = region,
	  this.items = [];
	  for(var loc in locations) {
		  loc = locations[loc];
		  let regionName = this.region.name;
		  loc.glitchless = function() { return !isBunny(regionName); }
		  if(loc.type == "NPC" || loc.type == "Standing") {
			  loc.glitchless = function() { return true; }
		  }
		  this.items[loc.name] = loc;
	  }
	  return this.items;
  }
}
