class Hyrule extends Region {
}
class DarkWorld extends Hyrule {
}
class DeathMountain extends Hyrule {
}
class LightWorld extends Hyrule {
}
class DarkWorldDeathMountain extends DarkWorld {
}
class ZebesPortals extends Hyrule {
}
class Dungeons extends Hyrule {
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
