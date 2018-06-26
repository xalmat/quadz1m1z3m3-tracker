class BossMothula extends Boss {
  constructor() {
    super("Mothula");
  }

  canBeat() {
	  return hasSword() || has("hammer")
	  	|| (canExtendMagic(2) && (has("firerod") || has("somaria")
	  		|| has("byrna")))
	  	|| canGetGoodBee();
  }
}
