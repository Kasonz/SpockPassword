// A $( document ).ready() block.
$(document).ready(function () {
  new ClipboardJS('.btn');
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});



Array.prototype.remove = function () {
  var what, a = arguments,
    L = a.length,
    ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};

function generatePassword(length, up_on, low_on, num_on, sym_on, sim_off) {
  var characters = [];
  var symbols = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?'];
  var similars = ['1', 'i', 'l', 'I', '0', 'O', 'o', '|'];
  var uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (up_on == true) {
    characters = characters.concat(uppers);
  }
  if (low_on == true) {
    characters = characters.concat(lowers);
  }
  if (num_on == true) {
    characters = characters.concat(numbers);
  }
  if (sym_on == true) {
    characters = characters.concat(symbols);
  }
  if (sim_off == true) {
    for (var i = 0; i < similars.length; i++) {
      characters.remove(similars[i]);
    }
  }

  // Generate Password
  var password = "";
  for (var j = 0; j < length; j++) {
    var index = Math.floor((Math.random() * characters.length) + 0);
    password = password + characters[index];
  }
  // debug
  console.log(characters.length);

  return password;
}

$('#generate').click(function (e) {
  e.preventDefault();
  newPass();
});

function newPass() {
  var len = $('#passwordLength').val(),
    up = false,
    low = false,
    num = false,
    symb = false,
    sim = false;
  if ($('#uppercase').prop("checked") == true) {
    up = true;
  }
  if ($('#lowercase').prop("checked") == true) {
    low = true;
  }
  if ($('#numbers').prop("checked") == true) {
    num = true;
  }
  if ($('#symbols').prop("checked") == true) {
    symb = true;
  }
  if ($('#similar').prop("checked") == true) {
    sim = true;
  }
  $('#result').val(generatePassword(len, up, low, num, symb, sim));
}