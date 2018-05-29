// Brinstar: Pink
function canEnterBrinstarPink() {
	return (canDestroyBombWalls() || canDashSM())
		&& (canOpenRedDoors() || (canDestroyBombWalls() && canOpenYellowDoors()));
}
chests.metroid3[28] = {
	name: "Super Missile (pink Brinstar) " + mini("bombs") + mini("supermissile"),
	x: "349",
	y: "511",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarPink() && canPassBombPassages() && canOpenGreenDoors()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[29] = {
	name: "Missile (pink Brinstar top)",
	x: "229",
	y: "475",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarPink()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[30] = {
	name: "Missile (pink Brinstar bottom)",
	x: "223",
	y: "529",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarPink()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[31] = {
	name: "Charge Beam " + mini("bombs"),
	x: "223",
	y: "547",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarPink() && canPassBombPassages()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[32] = {
	name: "Power Bomb (pink Brinstar) " + mini("powerbomb") + mini("supermissile"),
	x: "187",
	y: "493",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarPink() && canOpenYellowDoors() && canOpenGreenDoors()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[33] = {
	name: "Missile (green Brinstar pipe) " + mini("morph"),
	x: "313",
	y: "547",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarPink() && canMorph() && (canOpenYellowDoors() || canOpenGreenDoors())) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[34] = {
	name: "Energy Tank, Waterway " + mini("powerbomb") + mini("missile") + mini("speed"),
	x: "61",
	y: "583",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarPink() && canOpenYellowDoors() && canOpenRedDoors() && canDashSM()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[35] = {
	name: "Energy Tank, Brinstar Gate " + mini("powerbomb"),
	x: "295",
	y: "493",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarPink() && canOpenYellowDoors() && (has("wave") || (canOpenGreenDoors() && canHiJump()))) {
			availability.tourneyLogic = "available";
		}
		if(canEnterBrinstarPink() && canOpenYellowDoors() && has("wave")) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};

