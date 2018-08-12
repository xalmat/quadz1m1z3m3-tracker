class BossDigdogger extends Boss {
  constructor() {
    super("Digdogger");
  }

  canBeat() {
	  // return has("flute") && hasSword();
	  return has("flute") && canSwimZ1() && (hasSword() || has("magicalrod"));
  }
}
