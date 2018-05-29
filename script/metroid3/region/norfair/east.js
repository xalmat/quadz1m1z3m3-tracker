// Norfair: East
function canEnterNorfairEast() {
	return (((canDestroyBombWalls() || trackerData[selectedGame].speed)
		&& (canOpenGreenDoors() && canMorph()))
		|| canAccessNorfairPortal())
		&& (trackerOptions.mapLogic == "casualLogic" ? has("varia") : canHellRun())
		&& (canFlySM() || trackerData[selectedGame].hijump || (canDashSM() && canUsePowerBombs()) || (heatProof() && (trackerData[selectedGame].ice || canDashSM())));
}
chests.metroid3[55] = {
	name: "Missile (lava room) " + mini("morph"),
	x: "763",
	y: "763",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairEast() && canMorph()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[56] = {
	name: "Reserve Tank, Norfair",
	x: "799",
	y: "727",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(
			canEnterNorfairEast()
			&& canMorph()
			&& canOpenGreenDoors()
			&& (canFlySM() || canGrappleSM() || trackerData[selectedGame].hijump || trackerData[selectedGame].ice)
		) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[57] = {
	name: "Missile (Norfair Reserve Tank)",
	x: "814",
	y: "727",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(
			canEnterNorfairEast()
			&& canMorph()
			&& canOpenGreenDoors()
			&& (canFlySM() || canGrappleSM() || trackerData[selectedGame].hijump || trackerData[selectedGame].ice)
		) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[58] = {
	name: "Missile (bubble Norfair green door)",
	x: "853",
	y: "727",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(
			canEnterNorfairEast()
			&& canOpenGreenDoors()
			&& (canFlySM() || canGrappleSM() || trackerData[selectedGame].hijump || trackerData[selectedGame].ice)
		) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[59] = {
	name: "Missile (bubble Norfair)",
	x: "889",
	y: "781",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairEast()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[60] = {
	name: "Missile (Speed Booster)",
	x: "1123",
	y: "727",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairEast()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[61] = {
	name: "Speed Booster",
	x: "1141",
	y: "727",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairEast()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[62] = {
	name: "Missile (Wave Beam)",
	x: "950",
	y: "763",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairEast()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[63] = {
	name: "Wave Beam",
	x: "997",
	y: "763",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairEast()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};

