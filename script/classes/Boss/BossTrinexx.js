class BossTrinexx extends Boss {
  constructor() {
    super("Trinexx");
  }

  canBeat() {
	  return has("firerod") && has("icerod")
	  	&& (hasSword(3) || has("hammer")
	  		|| (canExtendMagic(2) && hasSword(2))
	  		|| (canExtendMagic(4) && hasSword()));
  }
}
