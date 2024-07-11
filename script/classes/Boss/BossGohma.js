class BossGohma extends Boss {
  constructor() {
    super("Gohma");
  }

  canBeat() {
      return canShootArrowsZ1();
  }
}
