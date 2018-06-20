class BossKholdstare extends Boss {
  constructor() {
    super("Kholdstare");
  }

  canBeat() {
	  return canMeltThings() && (has("hammer") || hasSword()
	  	|| (canExtendMagic(3) && has("firerod"))
	  	|| (canExtendMagic(2) && has("firerod") && has("bombos")));
  }
}
