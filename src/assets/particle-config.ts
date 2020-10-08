export const ParticlesConfig = {
  // particles: {
  //   number: {
  //     value: 70,
  //     density: {
  //       enable: true,
  //       value_area: 1400
  //     }
  //   },
  //   color: {
  //     value: '#283593'
  //   },
  //   shape: {
  //     type: 'polygon',
  //     stroke: {
  //       width: 1,
  //       color: '#283593'
  //     },
  //     polygon: {
  //       nb_sides: 6
  //     }
  //   },
  //   opacity: {
  //     value: 1,
  //     random: true,
  //     anim: {
  //       enable: true,
  //       speed: 0.8,
  //       opacity_min: 0.25,
  //       sync: true
  //     }
  //   },
  //   size: {
  //     value: 2,
  //     random: true,
  //     anim: {
  //       enable: true,
  //       speed: 10,
  //       size_min: 1.25,
  //       sync: true
  //     }
  //   },
  //   line_linked: {
  //     enable: true,
  //     distance: 150,
  //     color: '#283593',
  //     opacity: 1,
  //     width: 1
  //   },
  //   move: {
  //     enable: true,
  //     speed: 8,
  //     direction: 'none',
  //     random: true,
  //     straight: false,
  //     out_mode: 'out',
  //     bounce: true,
  //     attract: {
  //       enable: true,
  //       rotateX: 2000,
  //       rotateY: 2000
  //     }
  //   }
  // },
  // interactivity: {
  //   detect_on: 'canvas',
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: 'grab'
  //     },
  //     onclick: {
  //       enable: true,
  //       mode: 'repulse'
  //     },
  //     resize: true
  //   },
  //   modes: {
  //     grab: {
  //       distance: 200,
  //       line_linked: {
  //         opacity: 3
  //       }
  //     },
  //     repulse: {
  //       distance: 250,
  //       duration: 2
  //     }
  //   }
  // },
  // retina_detect: true



  "particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ff9800"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ff9800"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": true
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#979dac",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 5
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};