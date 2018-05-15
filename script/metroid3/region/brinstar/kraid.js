// Brinstar: Kraid
function canEnterBrinstarKraid() {
	return (canDestroyBombWalls() || canDashSM() || canAccessNorfairPortal())
		&& (canOpenGreenDoors() && canMorph())
		&& canPassBombPassages();
}
function canCompleteBrinstarKraid() {
  canEnterBrinstarKraid();
}
chests.metroid3[25] = {
	name: "Energy Tank, Kraid",
	x: "691",
	y: "691",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarKraid()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[26] = {
	name: "Varia Suit " + mini("kraid"),
	x: "943",
	y: "691",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarKraid()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};
chests.metroid3[27] = {
	name: "Missile (Kraid) " + mini("powerbomb"),
	x: "763",
	y: "673",
	isOpened: false,
	isAvailable: function () {
		const availability = new Availability();
		if(canEnterBrinstarKraid() && canOpenYellowDoors()) {
			availability.tourneyLogic = "available";
		}
		return availability;
	}
};

