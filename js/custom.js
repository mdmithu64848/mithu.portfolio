$(document).ready(function(){
    
    'use strict';

class TypeWriter {
  constructor(el) {
    this.el = el;
    this.txt = '';
    this.isDeletingText = false;
    this.time = el.dataset.time;
    this.change = JSON.parse(el.dataset.change);
    this.activeWord = 0;
    this.defaultTempo = 200;
    this.start();
  }
  
  start() {
      this.play();
  }
 
  play() {
    setTimeout(() => {
      this.tick();      
    },this.defaultTempo)
  }
  
  tick() {
    setTimeout(() => {
      let fullText = this.change[this.activeWord];
    if (!this.isDeletingText) {
      this.txt = fullText.substring(0, this.txt.length + 1);
      if (this.txt === fullText) this.isDeletingText = true;
      
    } else {
      this.defaultTempo = 50;
      this.txt = fullText.substring(0, this.txt.length - 1);
      if (this.txt === '') {
        this.nextWord();
        this.isDeletingText = false;
      } 
    }
    this.el.innerText = this.txt;  
    }, this.defaultTempo);
    this.play();
  }
  
  nextWord() {
    this.defaultTempo = 200;
    if (this.activeWord === this.change.length - 1) {
      this.activeWord = 0;
    } else {
      this.activeWord += 1;      
    }
  }
}

let span = document.querySelector('span.type-writer');

let writer = new TypeWriter(span);
console.log(writer);
    
//    banner close
    
    var options = {
            offset: '#showHere',
            offsetSide: 'top',
            classes: {
                clone:   'header--clone',
                stick:   'header--stick',
                unstick: 'header--unstick'
            }
        };

        // Initialise with options
        var banner = new Headhesive('.header', options);
    
    
//    header
    
    $('.img-slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  prevArrow:'.prev-arrow',
  nextArrow:'.next-arrow',
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//   arrow 
    
    $('.venobox').venobox(); 
    
//    venobox
    
    $('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 2000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
    
//    count
    
     new WOW().init();
    
//    wow

})