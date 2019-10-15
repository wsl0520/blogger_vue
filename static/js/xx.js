var xx = function (t) {
  var BW = 800; //canvas width
  var BH = 600; //canvas height
  var MAX_STAR_SIZE = 3;
  var MAX_STAR_SPEED = 1;
  var STAR_COUNT = 120;
  var BGCOLOR = "black";
  var ctx;
  var stars = [];

  function rndf(n) {
    return Math.floor(Math.random() * n);
  }

  function rndc(n) {
    return Math.ceil(Math.random() * n);
  }

  function Star() {
    this.reset = function () {
      this.x = 0;
      this.y = rndf(BH);
      this.size = rndc(MAX_STAR_SIZE);
      this.vx = MAX_STAR_SPEED * this.size / MAX_STAR_SIZE;
      this.vy = 0;
      this.color = "rgba(" + rndf(255) + ", " + rndf(255) + ", " + rndf(255) + ", 0.5)";
    };

    this.reset();
    this.x = rndf(BW);
  }
  function render() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
    ctx.fillRect(0, 0, BW, BH);
    ctx.globalCompositeOperation = "lighter";
    for (var i = 0; i < STAR_COUNT; ++i) {
      var p = stars[i];
      ctx.beginPath();
      var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
      gradient.addColorStop(0, "white");
      gradient.addColorStop(0.4, "white");
      gradient.addColorStop(0.4, p.color);
      gradient.addColorStop(1, "black");
      ctx.fillStyle = gradient;
      ctx.arc(p.x, p.y, p.size, Math.PI * 2, false);
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;

      if (p.x <= 0 || p.x >= BW || p.y <= 0 || p.y >= BH) {
        p.reset();
      }
    }
  }
  function init() {
    if (!window.console) {
      console = { log: function () { }, debug: function () { } };
    }
    //create canvas
    var cv = document.createElement('canvas');
    cv.width = BW;
    cv.height = BH;
    cv.style.background = BGCOLOR;
    document.body.appendChild(cv);
    ctx = cv.getContext("2d");
    //create all stars
    for (var i = 0; i < STAR_COUNT; ++i) {
      var s = new Star();
      stars.push(s);
    }
    setInterval(render, 33);
  };

}
