effectiveVersion = "v2.1.0.16";

class TLoZ extends Region {
}
class Overworld extends TLoZ {
}
class ZebesPortals extends TLoZ {
}
class Dungeons extends TLoZ {
	constructor(name,subname) {
		super(name,subname);
		Dungeons.prototype.boss = new Boss();
		this.canGetChest = {
			glitchless: function() { return true; },
			minorGlitches: function() { return this.glitchless(); },
			owGlitches: function() { return this.minorGlitches(); },
			majorGlitches: function() { return this.owGlitches(); }
		}
		this.hasMedallion = function() { return false; };
		this.mayHaveMedallion = function() { return false; };
		this.mayEnter = {
			glitchless: function() { return false; },
			minorGlitches: function() { return this.glitchless(); },
			owGlitches: function() { return this.minorGlitches(); },
			majorGlitches: function() { return this.owGlitches(); }
		};
	}
}
