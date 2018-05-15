// Brinstar: Blue
function canEnterBrinstarBlue() {
	return true;
}
chests.metroid3[12] = {
	name: "Morphing Ball",
	x: "367",
	y: "529",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarBlue()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[13] = {
	name: "Power Bomb (blue Brinstar) " + mini("powerbomb"),
	x: "331",
	y: "529",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarBlue() && canOpenYellowDoors()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[14] = {
	name: "Missile (blue Brinstar middle) " + mini("morph"),
	x: "493",
	y: "529",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarBlue() && canMorph()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[15] = {
	name: "Energy Tank, Brinstar Ceiling",
	x: "473",
	y: "529",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability;
		if(canEnterBrinstarBlue() && (canHiJump() || has("ice"))) {
			availability.casualLogic = "available";
		}
		if(canEnterBrinstarBlue() && canDamageBoostJump()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[16] = {
	name: "Missile (blue Brinstar bottom) " + mini("morph"),
	x: "421",
	y: "547",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarBlue() && canMorph()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[17] = {
	name: "Missile (blue Brinstar top) (2 items) " + mini("powerbomb"),
	x: "439",
	y: "493",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarBlue() && canOpenYellowDoors()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};

