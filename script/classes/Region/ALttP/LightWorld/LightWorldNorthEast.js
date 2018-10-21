class LightWorldNorthEast extends LightWorld {
  constructor(name = "LightWorld", subname = "NorthEast", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
//			new Location("Chest","Sahasrahla's Hut - Left","40.7%","41.4%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
//			new Location("Chest","Sahasrahla's Hut - Middle","40.7%","41.4%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
//			new Location("Chest","Sahasrahla's Hut - Right","40.7%","41.4%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
			new Location("Chest","Sahasrahla's Hut (3)","40.7%","41.4%",regionName,{equipment:"%%bomb%%/%%boots%%"}),
			new Location("NPC","Sahasrahla","40.7%","46.7%",regionName,{equipment:"%%pendant0%%"}),
			new Location("NPC","King Zora","47.5%","12.1%",regionName,{equipment:"- 500 Rupees"}),
			new Location("NPC","Potion Shop","40.8%","32.5%",regionName,{equipment:"%%mushroom%%"}),
			new Location("Standing","Zora Ledge","47.5%","17.3%",regionName,{equipment:"%%flippers%%"}),
//			new Location("Chest","Waterfall Fairy - Left","44.9%","14.7%",regionName,{equipment:"%%flippers%%"}),
//			new Location("Chest","Waterfall Fairy - Right","44.9%","14.7%",regionName,{equipment:"%%flippers%%"}),
			new Location("Chest","Waterfall Fairy","44.9%","14.7%",regionName,{equipment:"%%flippers%%"})
		],this);
	}
  }

  initNoMajorGlitches() {
	let region = this;

	if(this.buildLocations) {
		this.locations["Sahasrahla"].glitchless = function() {
			return has("pendantgreen");
		}
		this.locations["King Zora"].glitchless = function() {
			// Bunny can't swim
			return (canLiftRocks() || canSwim()) && !isBunny(region.name);
		}
		this.locations["Potion Shop"].glitchless = function() {
			return has("mushroom");
		}
		this.locations["Zora Ledge"].glitchless = function() {
			// Bunny can't swim
			return canSwim() && !isBunny(region.name);
		}
//		this.locations["Waterfall Fairy - Left"].glitchless =
//		this.locations["Waterfall Fairy - Right"].glitchless =
		this.locations["Waterfall Fairy"].glitchless = function() {
			// Bunny can't swim
			return canSwim() && !isBunny(region.name);
		}
	}

	this.canEnter.glitchless = function() {
		return canAccessLightWorld();
	}
  }

  initMinorGlitches() {
	this.initNoMajorGlitches();

	if(this.buildLocations) {
		let region = this;

		this.locations["King Zora"].minorGlitches = function() {
			let ret = this.glitchless();

			if(ret) {
				return ret;
			}
			if(canFakeFlipper()) {
				return "glitchavailable";
			}
		}
		this.locations["Zora Ledge"].minorGlitches = function() {
			let ret = this.glitchless();
			let kz = region.locations["King Zora"].minorGlitches();

			if(ret) {
				return ret;
			}
			if(canWaterwalkStored()) {
				return "glitchavailable";
			}
			if(kz) {
				if(typeof kz == "boolean") {
					return "viewable";
				} else if(typeof kz == "string" && kz.indexOf("glitch") > -1) {
					return "glitchviewable";
				}
			}
		}
//		this.locations["Waterfall Fairy - Left"].minorglitches =
//		this.locations["Waterfall Fairy - Right"].minorglitches =
		this.locations["Waterfall Fairy"].minorGlitches = function() {
			let ret = this.glitchless();

			if(ret) {
				return ret;
			}
			if(canWaterwalk()) {
				return "glitchavailable";
			}
		}
	}
  }

  initOverworldGlitches() {
	this.initMinorGlitches();

	if(this.buildLocations) {
		this.locations["King Zora"].owGlitches = function() {
			return true;
		}
		this.locations["Zora Ledge"].owGlitches = function() {
			return canSwim()
				|| (canDash() && has("moonpearl"));
		}
//		this.locations["Waterfall Fairy - Left"].owGlitches =
//		this.locations["Waterfall Fairy - Right"].owGlitches =
		this.locations["Waterfall Fairy"].owGlitches = function() {
			return canSwim() || has("moonpearl");
		}
	}
  }
}
