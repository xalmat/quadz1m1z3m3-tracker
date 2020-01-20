class Location {
  constructor(type = "Visible",name,x,y,region,extra = {}) {
    if(type == "") {
      type = "Visible";
    }
    this.type = type;
    this.name = name;
    this.x = x;
    this.y = y;
    this.normalLogic = function() { return true; },                 // metroid3
    this.hardLogic = function() { return this.normalLogic(); },     // metroid3
    this.glitchless = function() { return true; },                  // zelda3
    this.minorGlitches = function() { return this.glitchless(); },  // zelda3
    this.owGlitches = function() { return this.minorGlitches(); },  // zelda3
    this.majorGlitches = function() { return this.owGlitches(); },  // zelda3
    this.region = region;
    this.spicy = typeof extra.spicy !== "undefined";
    this.equipment = typeof extra.equipment !== "undefined" ? extra.equipment : "";
    this.quest = 1;
    this.vanilla = true;

	if(typeof extra.quest !== "undefined") {
		this.quest = extra.quest;
	}
    if(typeof extra.vanilla !== "undefined") {
		this.vanilla = extra.vanilla;
	}
  }
}
