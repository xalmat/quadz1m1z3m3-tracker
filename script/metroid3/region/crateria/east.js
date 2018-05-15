// Crateria: East
function canEnterCrateriaEast() {
	return canOpenYellowDoors() && canOpenGreenDoors();
}
chests.metroid3[8] = {
	name: "Missile (outside Wrecked Ship bottom)",
	x: "655",
	y: "97",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterCrateriaEast()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[9] = {
	name: "Missile (outside Wrecked Ship top)",
	x: "671",
	y: "7",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterCrateriaEast()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[10] = {
	name: "Missile (outside Wrecked Ship middle)",
	x: "655",
	y: "42",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterCrateriaEast()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[11] = {
	name: "Missile (Crateria Moat)",
	x: "619",
	y: "79",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterCrateriaEast()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};

