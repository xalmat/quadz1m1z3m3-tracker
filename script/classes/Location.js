class Location {
  constructor(type = "Visible",name,x,y,region,extra = {}) {
    if(type == "") {
      type = "Visible";
    }
    this.type = type;
    this.name = name;
    this.x = x;
    this.y = y;
    this.casualLogic = function() { return true; },
    this.tourneyLogic = function() { return this.casualLogic(); },
    this.glitchless = function() { return true; },
    this.owGlitches = function() { return this.glitchless(); },
    this.majorGlitches = function() { return this.owGlitches(); },
    this.region = region;
    this.spicy = typeof extra.spicy !== "undefined";
    this.equipment = typeof extra.equipment !== "undefined" ? extra.equipment : "";
  }
}
