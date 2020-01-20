class Region {
  constructor(name,subname,buildLocations = true) {
    this.name = name;
    this.subname = subname;
    this.buildLocations = buildLocations;
    this.canEnter = {
		glitchless: function() { return true; },                  // zelda3
		minorGlitches: function() { return this.glitchless(); },  // zelda3
		owGlitches: function() { return this.minorGlitches(); },  // zelda3
		majorGlitches: function() { return this.owGlitches(); },  // zelda3
		normalLogic: function() { return true; },                 // metroid3
		hardLogic: function() { return this.normalLogic(); }      // metroid3
	};
    this.canComplete = {
		glitchless: function() { return false; },                   // zelda3
		minorGlitches: function() { return this.glitchless(); },    // zelda3
		owGlitches: function() { return this.minorGlitches(); },    // zelda3
		majorGlitches: function() { return this.owGlitches(); },    // zelda3
		normalLogic: function() { return canEnter.normalLogic(); }, // metroid3
		hardLogic: function() { return this.normalLogic(); }        // metroid3
	};
    Region.prototype.initNone = function() { };
    Region.prototype.initNoMajorGlitches = function() { };                              // zelda3
    Region.prototype.initMinorGlitches = function() { this.initNoMajorGlitches(); };    // zelda3
    Region.prototype.initOverworldGlitches = function() { this.initMinorGlitches(); };  // zelda3
    Region.prototype.initMajorGlitches = function() { this.initOverworldGlitches(); };  // zelda3
    Region.prototype.initNormal = function() { };                                       // metroid3
    Region.prototype.initHard = function() { this.initNormal(); };                      // metroid3
    this.locations = [];
  }
}
