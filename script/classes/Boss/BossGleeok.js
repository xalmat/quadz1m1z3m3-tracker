class BossGleeok extends Boss {
  constructor() {
    super("Gleeok");
  }

  canBeat() {
      return hasSword();
  }
}
