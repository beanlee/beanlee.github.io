function Vector(a, b) {
  this.x = a;
  this.y = b
}
Vector.prototype = {
  rotate: function(b) {
    var a = this.x;
    var c = this.y;
    this.x = Math.cos(b) * a - Math.sin(b) * c;
    this.y = Math.sin(b) * a + Math.cos(b) * c;
    return this
  },
  mult: function(a) {
    this.x *= a;
    this.y *= a;
    return this
  },
  clone: function() {
    return new Vector(this.x, this.y)
  },
  length: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  },
  subtract: function(a) {
    this.x -= a.x;
    this.y -= a.y;
    return this
  },
  set: function(a, b) {
    this.x = a;
    this.y = b;
    return this
  }
};
function Petal(a, f, b, e, c, d) {
  this.stretchA = a;
  this.stretchB = f;
  this.startAngle = b;
  this.angle = e;
  this.bloom = d;
  this.growFactor = c;
  this.r = 1;
  this.isfinished = false
}
Petal.prototype = {
  draw: function() {
    var a = this.bloom.garden.ctx;
    var e, d, c, b;
    e = new Vector(0, this.r).rotate(Garden.degrad(this.startAngle));
    d = e.clone().rotate(Garden.degrad(this.angle));
    c = e.clone().mult(this.stretchA);
    b = d.clone().mult(this.stretchB);
    a.strokeStyle = this.bloom.c;
    a.beginPath();
    a.moveTo(e.x, e.y);
    a.bezierCurveTo(c.x, c.y, b.x, b.y, d.x, d.y);
    a.stroke()
  },
  render: function() {
    if (this.r 