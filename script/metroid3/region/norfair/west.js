// Norfair: West
function canEnterNorfairWest() {
	return ((canDestroyBombWalls() || canDashSM()) && (canOpenGreenDoors() && canMorph())) || canAccessNorfairPortal();
}
chests.metroid3[64] = {
	name: "Ice Beam",
	x: "565",
	y: "727",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairWest() && canMorph() && (heatProof() || hasEnergyReserves(3))) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[65] = {
	name: "Missile (below Ice Beam)",
	x: "511",
	y: "763",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairWest() && (canUsePowerBombs() && canHellRun()) || (heatProof() && canDashSM())) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[66] = {
	name: "Hi-Jump Boots",
	x: "601",
	y: "799",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairWest() && canPassBombPassages()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[67] = {
	name: "Missile (Hi-Jump Boots)",
	x: "619",
	y: "781",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairWest() && canPassBombPassages()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[68] = {
	name: "Energy Tank (Hi-Jump Boots)",
	x: "637",
	y: "781",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairWest()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};

