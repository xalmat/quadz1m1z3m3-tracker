dungeons.metroid3[0] = {
    name: "Torizo",
    label: "T",
    x: "421",
    y: "115",
    image: "boss02.png",
    isBeatable: function() {
        const availability = new Availability();
        if(canUseMorphBombs() && canOpenRedDoors()) {
                availability.tourneyLogic = 'available';
        }
        return availability;
    },
    canGetChest: function() {
		return this.isBeatable();
	},
};

dungeons.metroid3[1] = {
    name: "Spore Spawn",
    label: "SS",
    x: "313",
    y: "384",
    image: "boss12.png",
    isBeatable: function () {
        const availability = new Availability();
        if(canUseMorphBombs() && canOpenRedDoors()) {
			availability.casualLogic = 'available';
			availability.tourneyLogic = 'available';
		}
        return availability;
    },
    canGetChest: function() {
		return this.isBeatable();
	},
};

dungeons.metroid3[2] = {
    name: "Kraid",
    label: "K",
    x: "907",
    y: "673",
    image: "boss22.png",
    isBeatable: function () {
        const availability = new Availability();
		if(canOpenGreenDoors() && canUseMorphBombs() && canOpenYellowDoors()) {
			availability.casualLogic = 'available';
			availability.tourneyLogic = 'available';
		}
        return availability;
    },
    canGetChest: function() {
		return this.isBeatable();
	},
};

dungeons.metroid3[3] = {
	name: "Crocomire",
	label: "C",
	x: "743",
	y: "871",
	image: "boss32.png",
	isBeatable: function () {
		const availability = new Availability();
		if(canDashSM() && canOpenGreenDoors()) {
			availability.casualLogic = 'available';
			availability.tourneyLogic = 'available';
		}
		return availability;
	},
	canGetChest: function () {
		return this.isBeatable();
	},
};

dungeons.metroid3[4] = {
	name: "Phantoon",
	label: "PT",
	x: "925",
	y: "169",
	image: "boss42.png",
	isBeatable: function () {
		const availability = new Availability();
		if(canOpenGreenDoors() && canOpenYellowDoors()) {
			availability.casualLogic = 'available';
			availability.tourneyLogic = 'available';
		}
		return availability;
	},
	canGetChest: function () {
		return this.isBeatable();
	},
};

dungeons.metroid3[5] = {
	name: "Botwoon",
	label: "BT",
	x: "853",
	y: "493",
	image: "boss52.png",
	isBeatable: function () {
		const availability = new Availability();
		// Beat Wrecked Ship
		if(canSwimSM() && canOpenGreenDoors() && canOpenYellowDoors() && trackerData.items.phantoon) {
			availability.casualLogic = 'available';
			availability.tourneyLogic = 'available';
		}
		// Crateria -> Brinstar -> Maridia
		if(canSwimSM() && canOpenRedDoors() && canOpenGreenDoors() && canOpenYellowDoors()) {
			availability.casualLogic = 'available';
			availability.tourneyLogic = 'available';
		}
		return availability;
	},
	canGetChest: function () {
		return this.isBeatable();
	},
};

dungeons.metroid3[6] = {
	name: "Draygon",
	label: "DG",
	x: "1123",
	y: "511",
	image: "boss62.png",
	isBeatable: function () {
		const availability = new Availability();
		// Beat Wrecked Ship
		if(canSwimSM() && canOpenGreenDoors() && canOpenYellowDoors() && trackerData.items.phantoon) {
			availability.casualLogic = 'available';
			availability.tourneyLogic = 'available';
		}
		// Crateria -> Brinstar -> Maridia
		if(canSwimSM() && canOpenRedDoors() && canOpenGreenDoors() && canOpenYellowDoors()) {
			availability.casualLogic = 'available';
			availability.tourneyLogic = 'available';
		}
		return availability;
	},
	canGetChest: function () {
		return this.isBeatable();
	},
};

dungeons.metroid3[7] = {
	name: "Gold Torizo",
	label: "GT",
	x: "799",
	y: "979",
	image: "boss72.png",
	isBeatable: function () {
		const availability = new Availability();
		if(canDashSM() && canOpenYellowDoors()) {
			availability.casualLogic = 'available';
			availability.tourneyLogic = 'available';
		}
		return availability;
	},
	canGetChest: function () {
		return this.isBeatable();
	},
};

dungeons.metroid3[8] = {
	name: "Ridley",
	label: "RD",
	x: "889",
	y: "996",
	image: "boss82.png",
	isBeatable: function () {
		const availability = new Availability();
		if(canOpenRedDoors() && canOpenGreenDoors() && canOpenYellowDoors()) {
			availability.casualLogic = 'available';
			availability.tourneyLogic = 'available';
		}
		return availability;
	},
	canGetChest: function () {
		return this.isBeatable();
	},
};

dungeons.metroid3[9] = {
	name: "Mother Brain",
	label: "MB",
	x: "133",
	y: "349",
	image: "boss92.png",
	isBeatable: function () {
		const availability = new Availability();
		if(canOpenRedDoors() && trackerData.items.kraid && trackerData.items.phantoon && trackerData.items.draygon && trackerData.items.ridley) {
			availability.casualLogic = 'available';
			availability.tourneyLogic = 'available';
		}
		return availability;
	},
	canGetChest: function () {
		return this.isBeatable();
	},
};
