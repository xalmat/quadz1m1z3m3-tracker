// Norfair: Crocomire
function canEnterNorfairCrocomire() {
	return (((canDestroyBombWalls() || canDashSM())
		&& (canOpenGreenDoors() && canMorph()))
		|| canAccessNorfairPortal())
		&& (hasEnergyReserves(3) || heatProof())
		&& canOpenGreenDoors()
		&& (((canFlySM() || trackerData.items.hijump) && canMorph()) || canDashSM());
}
chests.metroid3[49] = {
	name: "Energy Tank, Crocomire",
	x: "817",
	y: "871",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairCrocomire()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[50] = {
	name: "Missile (above Crocomire)",
	x: "687",
	y: "799",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairCrocomire() && (canFlySM() || canGrappleSM() || (trackerData.items.hijump && canDashSM())) && canHellRun()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[51] = {
	name: "Power Bomb (Crocomire)",
	x: "637",
	y: "871",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairCrocomire()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[52] = {
	name: "Missile (below Crocomire)",
	x: "727",
	y: "961",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairCrocomire()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[53] = {
	name: "Missile (Grapple Beam)",
	x: "619",
	y: "961",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairCrocomire() && (canFlySM() || canDashSM() || canGrappleSM()) && canMorph()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[54] = {
	name: "Grapple Beam",
	x: "529",
	y: "979",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterNorfairCrocomire() && (canFlySM() || trackerData.items.hijump || canGrappleSM() || canMorph())) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};

