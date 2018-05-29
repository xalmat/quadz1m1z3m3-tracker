// Brinstar: Green
function canEnterBrinstarGreen() {
	return canDestroyBombWalls() || canDashSM();
}
chests.metroid3[18] = {
	name: "Power Bomb (green Brinstar bottom) " + mini("powerbomb"),
	x: "133",
	y: "475",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarGreen() && canOpenYellowDoors()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[19] = {
	name: "Missile (green Brinstar below Super Missile) " + mini("missile"),
	x: "115",
	y: "421",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarGreen() && canPassBombPassages() && canOpenRedDoors()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[20] = {
	name: "Super Missile (green Brinstar top)",
	x: "97",
	y: "403",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(
			canEnterBrinstarGreen()
			&& (canDashSM() || canDestroyBombWalls())
			&& canOpenRedDoors()
			&& (canMachball() || canDashSM())
		) {
			availability.tourneyLogic = "available";
		}
		if(
			canEnterBrinstarGreen()
			&& canDashSM()
			&& canOpenRedDoors()
		) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[21] = {
	name: "Reserve Tank, Brinstar",
	x: "151",
	y: "421",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(
			canEnterBrinstarGreen()
			&& (canDashSM() || canDestroyBombWalls())
			&& canOpenRedDoors()
			&& (canMachball() || canDashSM())
		) {
			availability.tourneyLogic = "available";
		}
		if(
			canEnterBrinstarGreen()
			&& canDashSM()
			&& canOpenRedDoors()
		) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[22] = {
	name: "Missile (green Brinstar behind Reserve Tank) (2 items) " + mini("missile") + mini("morph"),
	x: "169",
	y: "421",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarGreen() && canOpenRedDoors() && canMachball()) {
			availability.tourneyLogic = "available";
		}
		if(
			canEnterBrinstarGreen()
			&& canDashSM()
			&& canOpenRedDoors()
			&& canMorph()
		) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[23] = {
	name: "Energy Tank, Etecoons " + mini("powerbomb"),
	x: "25",
	y: "529",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarGreen() && canOpenYellowDoors()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[24] = {
	name: "Super Missile (green Brinstar bottom) " + mini("powerbomb") + mini("supermissile"),
	x: "7",
	y: "529",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarGreen() && canOpenYellowDoors() && canOpenGreenDoors()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
