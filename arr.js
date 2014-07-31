"use strict"

Array.prototype._rhaboo_originals = Array.prototype._rhaboo_originals || {
  pop : Array.prototype.pop,
  push : Array.prototype.push,
  shift : Array.prototype.shift,
  unshift : Array.prototype.unshift,
  splice : Array.prototype.splice,
  reverse : Array.prototype.reverse,
  sort : Array.prototype.sort
  //fill : Array.prototype.fill,
};

Array.prototype._rhaboo_defensively = function(mutator) {
  return function () { 
    _rhaboo_trace("Overriding "+mutator);
    var old = this;
    var retval = Array.prototype._rhaboo_originals[mutator].apply(this, arguments);
    if (this._rhaboo !== undefined) {
      this._rhaboo.parent._rhaboo_persist(_this._rhaboo.where, this, old);
    }
    return retval;
  }
}

if (true) {
  Array.prototype.push = Array.prototype._rhaboo_defensively("push");
  Array.prototype.pop = Array.prototype._rhaboo_defensively("pop");
  Array.prototype.shift = Array.prototype._rhaboo_defensively("shift");
  Array.prototype.unshift = Array.prototype._rhaboo_defensively("unshift");
  Array.prototype.splice = Array.prototype._rhaboo_defensively("splice");
  Array.prototype.reverse = Array.prototype._rhaboo_defensively("reverse");
  Array.prototype.sort = Array.prototype._rhaboo_defensively("sort");
  //Array.prototype.fill = Array.prototype._rhaboo_defensively("fill");
}

