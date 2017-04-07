var elements = document.querySelectorAll( '.lazyload' );
// background-image: url('images/home-slides/home-products-solution-1-image.png)
// background-image: url('/images/home-slides/ontdek.png');
// var ll = $('div');
// var
var pictureHeight = [];
var windowScroll = 0;
var windowHeight = window.document.documentElement.clientHeight;
var nav = document.querySelector( '.pu-header-desktop' );

function update_offsets() {
  for ( i = 0; i < elements.length; i++ ) {
    var elementTop = elements[ i ].offsetTop;
    pictureHeight.push( elementTop );
  }
}
update_offsets();
// console.log( elements[ 4 ].offsetTop );
function lazyLoad() {
  windowScroll = window.pageYOffset;
  if ( windowScroll > windowHeight - 150 ) {
    nav.classList.remove( "pu-header--is-transparent" );
  } else {
    nav.classList.add( "pu-header--is-transparent" );
  }
  for ( i = 0; i < pictureHeight.length; i++ ) {
    for ( i = 0; i < elements.length; i++ ) {
      if ( elements[ i ].getBoundingClientRect().top <= windowScroll + ( windowHeight - 700 ) ) {
        // if ( elements[ i ] === elements[ 0 ] && elements[ 0 ].style.backgroundImage === '' ) {
        //   elements[ 0 ].style.backgroundImage = "url(/images/home-slides/ontdek.png)";
        // }
        // if ( elements[ i ] === elements[ 1 ] && elements[ 1 ].style.backgroundImage === '' ) {
        //   elements[ 1 ].style.backgroundImage = "url(/images/home-slides/agile.png)";
        // }
        // if ( elements[ i ] === elements[ 2 ] && elements[ 2 ].style.backgroundImage === '' ) {
        //   elements[ 2 ].style.backgroundImage = "url(/images/home-slides/projecten.png)";
        // }
        if ( elements[ i ] === elements[ 3 ] && elements[ 3 ].style.backgroundImage === '' ) {
          elements[ 3 ].style.backgroundImage = "url(/images/home-slides/chat.png)";
        }
        if ( elements[ i ] === elements[ 4 ] && elements[ 4 ].src === 'http://localhost:3009/' ) {
          elements[ 4 ].src = "/images/home-slides/appstore.png";
        }
        if ( elements[ i ] === elements[ 5 ] && elements[ 5 ].src === 'http://localhost:3009/' ) {
          elements[ 5 ].src = "/images/home-slides/playstore.png";
        }
        if ( elements[ i ] === elements[ 6 ] && elements[ 6 ].style.backgroundImage === '' ) {
          elements[ 6 ].style.backgroundImage = "url(/images/home-slides/home-products-solution-1-image.png)";
        }
        if ( elements[ i ] === elements[ 7 ] && elements[ 7 ].src === 'http://localhost:3009/' ) {
          elements[ 7 ].src = "/images/projectpartners/logo-cb-achmea.png";
          if ( elements[ 7 ].classList ) {
            elements[ 7 ].classList.remove( "hide" );
          }
          console.log( elements[ 7 ] );
        }
        if ( elements[ i ] === elements[ 8 ] && elements[ 8 ].src === 'http://localhost:3009/' ) {
          elements[ 8 ].src = "/images/projectpartners/logo-min-financien.png";
          console.log( elements[ 8 ] );
          if ( elements[ 8 ].classList ) {
            elements[ 8 ].classList.remove( "hide" );
          }
        }
        if ( elements[ i ] === elements[ 9 ] && elements[ 9 ].src === 'http://localhost:3009/' ) {
          elements[ 9 ].src = "/images/projectpartners/logo-philadelphia.png";
          if ( elements[ 9 ].classList ) {
            elements[ 9 ].classList.remove( "hide" );
          }
        }
      }
    }
  }
}
// }/images/home-slides/appstore.png
// /images/home-slides/playstore.png
//images/projectpartners/logo-philadelphia.png
//images/projectpartners/logo-philadelphia.png
// images/projectpartners/logo-cb-achmea.png
// Page Load
//David Walsh debounce function like underscore.js
function debounce( func, wait, immediate ) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if ( !immediate ) func.apply( context, args );
    };
    var callNow = immediate && !timeout;
    clearTimeout( timeout );
    timeout = setTimeout( later, wait );
    if ( callNow ) func.apply( context, args );
  };
}
var myEfficientFn = debounce( function( event ) {
  lazyLoad();
}, 250 );
window.addEventListener( 'scroll', myEfficientFn );