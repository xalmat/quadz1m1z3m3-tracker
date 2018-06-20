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
class Dungeons extends Hyrule {
	constructor(name,subname) {
		super(name,subname);
		this.boss = new Boss();
	}
}
