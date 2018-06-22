class Hyrule extends Region {
}
class DarkWorld extends Hyrule {
}
class DeathMountain extends Hyrule {
}
class LightWorld extends Hyrule {
}
class DarkWorldDeathMountain extends DarkWorld {
}
class ZebesPortals extends Hyrule {
}
class Dungeons extends Hyrule {
	constructor(name,subname) {
		super(name,subname);
		Dungeons.prototype.boss = new Boss();
	}
}
