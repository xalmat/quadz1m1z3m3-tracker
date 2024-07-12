class BossDigdogger extends Boss {
  constructor() {
    super("Digdogger");
  }

  canBeat() {
      return has("recorder") && hasSword();
  }
}
