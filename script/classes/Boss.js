class Boss {
  constructor(name) {
    Boss.prototype.name = name;
    Boss.prototype.canBeat = function() { return true; };
  }
}
