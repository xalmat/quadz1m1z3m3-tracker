// Crateria: Central
function canEnterCrateriaCentral() {
	return true;
}
chests.metroid3[3] = {
	name: "Power Bomb (Crateria surface) " + mini("powerbomb"),
	x: "565",
	y: "25",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterCrateriaCentral() && canOpenYellowDoors() && (canDashSM() || canFlySM())) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[4] = {
	name: "Missile (Crateria middle)",
	x: "259",
	y: "133",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterCrateriaCentral() && canPassBombPassages()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[5] = {
	name: "Missile (Crateria bottom)",
	x: "331",
	y: "331",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterCrateriaCentral() && canDestroyBombWalls()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[6] = {
	name: "Super Missile (Crateria)",
	x: "403",
	y: "169",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterCrateriaCentral() && canDestroyBombWalls()) {
			availability.tourneyLogic = "available";
		}
		if(canEnterCrateriaCentral() && canOpenYellowDoors() && hasEnergyReserves(2) && canDashSM()) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[7] = {
	name: "Bombs",
	x: "421",
	y: "115",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterCrateriaCentral() && canMorph() && canOpenRedDoors()) {
			availability.tourneyLogic = "available";
		}
		if(canEnterCrateriaCentral() && canPassBombPassages() && canOpenRedDoors()) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};

