import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

const Animation = () => {
  const canvasRef = useRef();

  var width,
    height,
    largeHeader,
    points,
    target,
    animateHeader = true;

  const initHeader = useCallback(() => {
    width = window.innerWidth;
    height = window.innerHeight;
    target = { x: width / 2, y: height / 2 };

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    // create points
    points = [];
    for (var x = 0; x < width; x = x + width / 30) {
      for (var y = 0; y < height; y = y + height / 30) {
        var px = x + (Math.random() * width) / 30;
        var py = y + (Math.random() * height) / 30;
        var p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // for each point find the 5 closest points
    for (var i = 0; i < points.length; i++) {
      var closest = [];
      var p1 = points[i];
      for (var j = 0; j < points.length; j++) {
        var p2 = points[j];
        if (!(p1 == p2)) {
          var placed = false;
          for (var k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] == undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (var k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for (var i in points) {
      var c = new Circle(
        points[i],
        2 + Math.random() * 2,
        'rgba(255,255,255,0.3)'
      );
      points[i].circle = c;
    }
  }, []);

  const mouseMove = useCallback(
    (e) => {
      var [posx, posy] = [0, 0];
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    },
    [target]
  );

  const scrollCheck = useCallback(() => {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
  }, []);

  const resize = useCallback(() => {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = height + 'px';
    canvas.width = width;
    canvas.height = height;
  }, []);

  // Event handling
  const addListeners = useCallback(() => {
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', mouseMove);
    }
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
  }, [mouseMove, resize, scrollCheck]);

  // Canvas manipulation
  const drawLines = useCallback((p) => {
    if (!p.active) return;
    for (var i in p.closest) {
      const context = canvasRef.current.getContext('2d');
      context.beginPath();
      context.moveTo(p.x, p.y);
      context.lineTo(p.closest[i].x, p.closest[i].y);
      context.strokeStyle = 'rgba(37, 99, 235,' + p.active + ')'; //Change lines
      context.stroke();
    }
  }, []);

  const animate = useCallback(() => {
    if (animateHeader) {
      canvasRef.current.getContext('2d').clearRect(0, 0, width, height);
      for (var i in points) {
        // detect points in range
        if (Math.abs(getDistance(target, points[i])) < 10000) {
          points[i].active = 0.3;
          points[i].circle.active = 0.6;
        } else if (Math.abs(getDistance(target, points[i])) < 40000) {
          points[i].active = 0.1;
          points[i].circle.active = 0.3;
        } else if (Math.abs(getDistance(target, points[i])) < 70000) {
          points[i].active = 0.02;
          points[i].circle.active = 0.1;
        } else {
          points[i].active = 0;
          points[i].circle.active = 0;
        }

        drawLines(points[i]);
        points[i].circle.draw();
      }
    }
    requestAnimationFrame(animate);
  }, [animateHeader, drawLines, height, points, target, width]);

  const shiftPoint = useCallback((p) => {
    gsap.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 50,
      y: p.originY - 50 + Math.random() * 50,
      ease: 'circ.easeInOut',
      onComplete: function () {
        shiftPoint(p);
      },
    });
  }, []);

  // animation
  const initAnimation = useCallback(() => {
    animate();
    for (var i in points) {
      shiftPoint(points[i]);
    }
  }, [animate, points, shiftPoint]);

  function Circle(pos, rad, color) {
    var _this = this;

    // constructor
    (function () {
      _this.pos = pos || null;
      _this.radius = rad || null;
      _this.color = color || null;
    })();

    this.draw = function () {
      if (!_this.active) return;
      const context = canvasRef.current.getContext('2d');
      context.beginPath();
      context.arc(
        _this.pos.x,
        _this.pos.y,
        _this.radius,
        0,
        2 * Math.PI,
        false
      );
      context.fillStyle = 'rgba(37, 99, 235,' + _this.active + ')'; //Change points
      context.fill();
    };
  }

  // Util
  function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    initHeader();
    initAnimation();
    addListeners();
  }, [addListeners, initAnimation, initHeader]);

  return (
    <div id='large-header' className='overflow-hidden relative'>
      <canvas id='demo-canvas' ref={canvasRef}></canvas>
      <h1
        className='text-xl sm:text-3xl md:text-6xl text-center text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        lang='en'
      >
        Hello I&#39;m <span className='text-orange-600'>Camilo</span>, <br />a{' '}
        <span className='text-orange-600'>full stack</span> web developer
      </h1>
      <h1
        className='text-xl sm:text-3xl md:text-6xl text-center text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        lang='es'
      >
        Hola soy <span className='text-orange-600'>Camilo</span>, <br />
        un desarrollador web <span className='text-orange-600'>full stack</span>
      </h1>
    </div>
  );
};

export default Animation;
