// A $( document ).ready() block.

// global

var bclick = true;

// end



$(document).ready(function () {
  new ClipboardJS('.btn');

  // show times 



  var passwordInput = document.getElementById("result");


  // Code to render the time returned by HSIMP
  var renderTime = function (time) {
    // timeDiv.innerHTML = time || "";

    if(!bclick){
      console.log(time);

      setTimeout(function () {
        $("#time").html("Compter would take  " + time + " to crack it");
      }, 200);
    
    

   

      $("#time").slideDown();
      

    }
    else{

    }
   
    bclick = true;

  };

  // Setup the HSIMP object
  var attachTo = hsimp({
    options: {
      calculationsPerSecond: 10e9, // 10 billion calculations per second
      good: 31557600e9, // 1 billion years
      ok: 31557600e3 // 1 thousand years
    },
    outputTime: renderTime
  });

  // setup custom values for "instantly"/"forever"
  hsimp.setDictionary({
    "instantly": "Immediately",
    "forever": "Aaaaaaaaaaaaaaaages",
  });

  // Run the HSIMP
  attachTo(passwordInput);
  // show times done


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

function generatePassword(length, up_on, low_on, beginletter_on, num_on, csym_on, ucsymb_on, sim_off) {
  var characters = [];
  var csymbols = ['-', '_', '=', '+', '!', '@', '#', '$', '%', '?', '&', '*', '(', ')', ',', '<', '>', ';', ':', '.'];
  var ucsymbols = ['`', '~', '^', '[', '{', ']', '}', '\\', '|', '\'', '"', '/'];
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
  if (csym_on == true) {
    characters = characters.concat(csymbols);
  }
  if (ucsymb_on == true) {
    characters = characters.concat(ucsymbols);
  }
  if (sim_off == true) {
    for (var i = 0; i < similars.length; i++) {
      characters.remove(similars[i]);
    }
  }


  if (beginletter_on) {

    length = length - 1;

    var arrLetter = [];
    arrLetter = arrLetter.concat(uppers, lowers);

    var rand = arrLetter[Math.floor(Math.random() * arrLetter.length)];
    password = rand;
  } else {

    // Generate Password
    password = "";
  }

  if(characters.length==0){
    return false;
  }

  for (var j = 0; j < length; j++) {
    var index = Math.floor((Math.random() * characters.length) + 0);
    password = password + characters[index];
  }


  return password;
}


$('#generate').click(function (e) {
  e.preventDefault();
  newPass();
});


$('.quick a').click(function (e) {

  var text = this.text;

  var thenum = text.match(/\d+$/)[0];

  $("#passwordLength").val(thenum);

});

function newPass() {
  var len = $('#passwordLength').val(),
    up = false,
    low = false,
    num = false,
    csymb = false,
    ucsymb = false,
    sim = false;
    beginletter_on = false;
  if ($('#uppercase').prop("checked") == true) {
    up = true;
  }
  if ($('#lowercase').prop("checked") == true) {
    low = true;
  }
  if ($('#begin-letter').prop("checked") == true) {
    beginletter_on = true;
  }
  if ($('#numbers').prop("checked") == true) {
    num = true;
  }
  if ($('#csymbols').prop("checked") == true) {
    csymb = true;
  }
  if ($('#ucsymbols').prop("checked") == true) {
    ucsymb = true;
  }
  if ($('#similar').prop("checked") == true) {
    sim = true;
  }

  $("#time").slideUp();

  setTimeout(function () {
    $("#result").click();
  }, 200);


  var password = generatePassword(len, up, low, beginletter_on, num, csymb, ucsymb, sim);

  if(password){
    $('#result').val(password);
    bclick = false;
  
  }


 


}



var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function (e) {
  $('#copy').popover('show');
  setTimeout(function () {
    $('#copy').popover('hide');
  }, 700);
});

clipboard.on('error', function (e) {
  alert("Copy failed")
});