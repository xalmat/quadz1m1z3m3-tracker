class Region {
  constructor(name,subname) {
    Region.prototype.name = name;
    Region.prototype.subname = subname;
    this.canEnter = {
		glitchless: function() { return true; },
		owglitches: function() { return this.glitchless(); },
		majorglitches: function() { return this.owglitches(); },
		casualLogic: function() { return true; },
		tourneyLogic: function() { return this.casualLogic(); }
	};
    this.canComplete = {
		glitchless: function() { return canEnter.glitchless(); },
		owglitches: function() { return this.glitchless(); },
		majorglitches: function() { return this.owglitches(); },
		casualLogic: function() { return canEnter.casualLogic(); },
		tourneyLogic: function() { return this.casualLogic(); }
	};
    Region.prototype.initNone = function() { };
    Region.prototype.initNoMajorGlitches = function() { };
    Region.prototype.initOverworldGlitches = function() { initNoMajorGlitches(); };
    Region.prototype.initMajorGlitches = function() { initOverworldGlitches(); };
    Region.prototype.initCasual = function() { };
    Region.prototype.initTournament = function() { initCasual(); };
    this.locations = [];
  }
}
