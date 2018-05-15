// SM -> ALttP Portals
chests.metroid3[chests.metroid3.length] = {
	name: "ALttPR Portal: Link's Fortune Teller",		// Link's Fortune Teller -> Crateria
	x: "331",
	y: "133",
	isAvailable: function () {
		const availability = new Availability();
		if(canAccessLightWorldPortal() || canAccessCrateriaPortal()) {
			availability.casualLogic	= "portal portal-zelda3 active";
			availability.tourneyLogic	= "portal portal-zelda3 active";
		} else {
			availability.casualLogic	= "portal portal-zelda3 inactive";
			availability.tourneyLogic	= "portal portal-zelda3 inactive";
		}
		return availability;
	},
};
chests.metroid3[chests.metroid3.length] = {
	name: "ALttPR Portal: Death Mountain Cave",			// Death Mountain Cave -> Norfair Map Room
	x: "637",
	y: "763",
	isAvailable: function () {
		const availability = new Availability();
		if(canAccessDeathMountainPortal() || canAccessNorfairPortal()) {
			availability.casualLogic	= "portal portal-zelda3 active";
			availability.tourneyLogic	= "portal portal-zelda3 active";
		} else {
			availability.casualLogic	= "portal portal-zelda3 inactive";
			availability.tourneyLogic	= "portal portal-zelda3 inactive";
		}
		return availability;
	}
};
chests.metroid3[chests.metroid3.length] = {
	name: "ALttPR Portal: Misery Mire East 'Entrance'",	// Misery Mire -> Lower Norfair Golden Torizo Energy Refill
	x: "853",
	y: "961",
	isAvailable: function () {
		const availability = new Availability();
		if(canAccessMiseryMirePortal() || canAccessLowerNorfairPortal()) {
			availability.casualLogic	= "portal portal-zelda3 active";
			availability.tourneyLogic	= "portal portal-zelda3 active";
		} else {
			availability.casualLogic	= "portal portal-zelda3 inactive";
			availability.tourneyLogic	= "portal portal-zelda3 inactive";
		}
		return availability;
	}
};
chests.metroid3[chests.metroid3.length] = {
	name: "ALttPR Portal: Dark World Ice Cave Right",	// Dark World Ice Cave Right -> Maridia Missile Refill
	x: "1105",
	y: "493",
	isAvailable: function () {
		const availability = new Availability();
		if(canAccessDarkWorldPortal() || canAccessMaridiaPortal()) {
			availability.casualLogic	= "portal portal-zelda3 active";
			availability.tourneyLogic	= "portal portal-zelda3 active";
		} else {
			availability.casualLogic	= "portal portal-zelda3 inactive";
			availability.tourneyLogic	= "portal portal-zelda3 inactive";
		}
		return availability;
	}
};
