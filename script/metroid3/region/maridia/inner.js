// Maridia: Inner
function canEnterMaridiaInner() {
	let ret = canEnterMaridiaOuter();
	if(trackerOptions.mapLogic == "casualLogic") {
		ret = ret && (canFlySM() || canGrappleSM() || canDashSM() || canAccessMaridiaPortal());
	} else {
		ret = ret && (canSwimSM() || (canGrappleSM() && canHiJump() && has("ice")));
	}
	return ret;
}
chests.metroid3[73] = {
	name: "Super Missile (yellow Maridia) (2 items)",
	x: "637",
	y: "457",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[74] = {
	name: "Missile (yellow Maridia false wall)",
	x: "781",
	y: "457",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[75] = {
	name: "Plasma Beam",
	x: "925",
	y: "385",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner() && canDefeatDraygon() && (canDashSM() || ((has("charge") || has("screw")) && (canFlySM() || canHiJump())))) {
			availability.tourneyLogic = "available";
		}
		if(canEnterMaridiaInner() && canDefeatDraygon() && (has("plasma") || has("screw")) && (canFlySM() || canHiJump())) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[76] = {
	name: "Missile (left Maridia sand pit room)",
	x: "781",
	y: "601",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[77] = {
	name: "Reserve Tank, Maridia",
	x: "799",
	y: "601",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[78] = {
	name: "Missile (right Maridia sand pit room)",
	x: "835",
	y: "601",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[79] = {
	name: "Power Bomb (right Maridia sand pit room) " + mini("gravity"),
	x: "853",
	y: "601",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner() && canSwimSM()) {
			availability.tourneyLogic = "available";
		}
		if(canEnterMaridiaInner()) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[80] = {
	name: "Missile (pink Maridia) " + mini("gravity") + mini("speed"),
	x: "853",
	y: "511",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner() && canSwimSM() && canDashSM()) {
			availability.tourneyLogic = "available";
		}
		if(canEnterMaridiaInner() && canDashSM()) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[81] = {
	name: "Super Missile (pink Maridia) " + mini("gravity") + mini("speed"),
	x: "871",
	y: "511",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner() && canSwimSM() && canDashSM()) {
			availability.tourneyLogic = "available";
		}
		if(canEnterMaridiaInner() && canDashSM()) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[82] = {
	name: "Spring Ball " + mini("gravity") + mini("grappling"),
	x: "1015",
	y: "619",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner() && canSwimSM() && canGrappleSM() && (canFlySM() || canHiJump())) {
			availability.tourneyLogic = "available";
		}
		if(canEnterMaridiaInner() && (canGrappleSM() && (has("space") || canHiJump()))) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[83] = {
	name: "Missile (Draygon)",
	x: "1177",
	y: "475",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner() && canDefeatBotwoon()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[84] = {
	name: "Energy Tank, Botwoon",
	x: "943",
	y: "493",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner() && canDefeatBotwoon()) {
			availability.tourneyLogic = "available";
			availability.casualLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[85] = {
	name: "Space Jump",
	x: "1105",
	y: "529",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterMaridiaInner() && canDefeatDraygon()) {
			availability.tourneyLogic = "available";
		}
		if(canEnterMaridiaInner() && canDefeatDraygon() && (canFlySM() || (canDashSM() && canHiJump()))) {
			availability.casualLogic = "available";
		}
		return availability;
	}
};

