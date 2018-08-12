class BossGleeok extends Boss {
  constructor() {
    super("Gleeok");
  }

  canBeat() {
	  // return hasSword();
	  return canSwimZ1() && (hasSword() || has("magicalrod"));
  }
}
