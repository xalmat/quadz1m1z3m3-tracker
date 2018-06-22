class LightWorldNorthEast extends LightWorld {
  constructor(name = "LightWorld", subname = "NorthEast") {
	super(name,subname);
	let regionName = name + subname;
	this.locations = new LocationCollection([
//		new Location("Chest","Sahasrahla's Hut - Left","40.7%","41.4%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
//		new Location("Chest","Sahasrahla's Hut - Middle","40.7%","41.4%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
//		new Location("Chest","Sahasrahla's Hut - Right","40.7%","41.4%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
		new Location("Chest","Sahasrahla's Hut (3)","40.7%","41.4%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
		new Location("NPC","Sahasrahla","40.7%","46.7%",regionName,{equipment:"%%pendant0%%"}),
		new Location("NPC","King Zora","47.5%","12.1%",regionName,{equipment:"- 500 Rupees"}),
		new Location("NPC","Potion Shop","40.8%","32.5%",regionName,{equipment:"%%mushroom%%"}),
		new Location("Standing","Zora Ledge","47.5%","17.3%",regionName,{equipment:"%%flippers%%"}),
//		new Location("Chest","Waterfall Fairy - Left","44.9%","14.7%",regionName,{equipment:"%%flippers%%"}),
//		new Location("Chest","Waterfall Fairy - Right","44.9%","14.7%",regionName,{equipment:"%%flippers%%"}),
		new Location("Chest","Waterfall Fairy","44.9%","14.7%",regionName,{equipment:"%%flippers%%"})
	],this);
  }

  initNoMajorGlitches() {
	this.locations["Sahasrahla"].glitchless = function() {
		return has("pendantgreen");
	}
	this.locations["King Zora"].glitchless = function() {
		return canLiftRocks() || canSwim();
	}
	this.locations["Potion Shop"].glitchless = function() {
		return has("mushroom");
	}
	this.locations["Zora Ledge"].glitchless = function() {
		return canSwim();
	}
//	this.locations["Waterfall Fairy - Left"].glitchless =
//	this.locations["Waterfall Fairy - Right"].glitchless =
	this.locations["Waterfall Fairy"].glitchless = function() {
		return canSwim();
	}

	this.canEnter.glitchless = function() {
		return true;
	}
  }

  initOverworldGlitches() {
	this.initNoMajorGlitches();

	this.locations["King Zora"].owglitches = function() {
		return true;
	}
	this.locations["Zora Ledge"].owglitches = function() {
		return canSwim()
			|| (canDash() && has("moonpearl"));
	}
//	this.locations["Waterfall Fairy - Left"].owglitches =
//	this.locations["Waterfall Fairy - Right"].owglitches =
	this.locations["Waterfall Fairy"].owglitches = function() {
		return canSwim() || has("moonpearl");
	}
  }
}
