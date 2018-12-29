class HyruleWarpsMain extends HyruleWarps {
  constructor(name = "HyruleWarps", subname = "Main", buildLocations = true) {
	super(name,subname,buildLocations);
	let regionName = name + subname;
	if(this.buildLocations) {
		this.locations = new LocationCollection([
			// Light
			new Location("Warp","Turtle Rock Teleporter (Light)","47.5%","6.0%",regionName),
			new Location("Warp","East Death Mountain Teleporter (Light)","39.0%","22.0%",regionName),
			new Location("Warp","Kakariko Teleporter (Light)","4.4%","35.5%",regionName),
			new Location("Warp","Castle Gate (Light)","25.25%","54%",regionName),
			new Location("Warp","East Hyrule Teleporter (Light)","48.5%","71.0%",regionName),
			new Location("Warp","Lake Hylia Central Island Teleporter (Light)","40.1%","86.0%",regionName),
			new Location("Warp","South Hyrule Teleporter (Light)","23.4%","79.0%",regionName),
			new Location("Warp","Dark Desert Teleporter (Light)","2.0%","96.5%",regionName),

			// Dark
			//  TRock Teleporter would be covered by TRock
			new Location("Warp","East Death Mountain Teleporter (Dark)","89.0%","22.0%",regionName),
			new Location("Warp","Kakariko Teleporter (Dark)","54.4%","35.5%",regionName),
			new Location("Warp","East Hyrule Teleporter (Dark)","98.5%","71.0%",regionName),
			new Location("Warp","Castle Gate (Dark)","75.25%","61%",regionName),
			// Lake Hylia Teleporter would be covered by Ice Palace
			new Location("Warp","South Hyrule Teleporter (Dark)","73.4%","79.0%",regionName),
			new Location("Warp","Dark Desert Teleporter (Dark)","52.0%","96.5%",regionName)
		],this);
	}
  }

  initNoMajorGlitches() {
	this.locations["Turtle Rock Teleporter (Light)"].glitchless = function() {
		let edmAccess = (! isBunny()) && ((canLiftRocks() && has("lantern")) || canFly())	// Access Death Mountain
			&& (
				(has("mirror") && has("hammer") && (!has("state.inverted")))				// North
				|| (canGrapple())															// South
			);
		return edmAccess && (! isBunny()) && canLiftDarkRocks() && has("hammer");
	}
	this.locations["East Death Mountain Teleporter (Light)"].glitchless =
	this.locations["East Death Mountain Teleporter (Dark)"].glitchless = function() {
		let edmAccess = (! isBunny()) && ((canLiftRocks() && has("lantern")) || canFly())	// Access Death Mountain
			&& (
				(has("mirror") && has("hammer") && (!has("state.inverted")))				// North
				|| (canGrapple())															// South
			);
		return edmAccess && canLiftDarkRocks();
	}
	this.locations["Kakariko Teleporter (Light)"].glitchless =
	this.locations["Kakariko Teleporter (Dark)"].glitchless = function() {
		return (! isBunny())
			&& ((has("hammer") && canLiftRocks())	// From South
			|| canLiftDarkRocks());					// From North
	}
	this.locations["Castle Gate (Light)"].glitchless =
	this.locations["Castle Gate (Dark)"].glitchless = function() {
		return has("agahnim");
	}
	this.locations["East Hyrule Teleporter (Light)"].glitchless =
	this.locations["East Hyrule Teleporter (Dark)"].glitchless = function() {
		return (! isBunny()) && has("hammer") && canLiftRocks();
	}
	this.locations["Lake Hylia Central Island Teleporter (Light)"].glitchless = function() {
		return (! isBunny()) && canSwim() && canLiftDarkRocks();
	}
	this.locations["South Hyrule Teleporter (Light)"].glitchless =
	this.locations["South Hyrule Teleporter (Dark)"].glitchless = function() {
		return (! isBunny()) && has("hammer") && canLiftRocks();
	}
	this.locations["Dark Desert Teleporter (Light)"].glitchless =
	this.locations["Dark Desert Teleporter (Dark)"].glitchless = function() {
		return (! isBunny()) && canFly() && canLiftDarkRocks();
	}

	this.canEnter.glitchless = function() {
		return true;
	}
  }
}
