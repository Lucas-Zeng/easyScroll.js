;( function (factory) {

    typeof define === 'function' && define.amd ? define( [] , function() {

    	return factory();

    }) : factory();

}( function( global ) {

	window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function( cb ){ return window.setTimeout( cb , 1000 / 60 ); };

	return window.easyScroll = function( Y , timeout ) {

		var a  = function( t, b , c , d ) { return ( t /= d / 2 ) < 1 ? c / 2 * t * t + b : - c / 2 * ( ( --t ) * ( t - 2 ) - 1 ) + b; },

			c  = window.scrollY,

			d  = c > Y,

			m  = document.body.scrollHeight - screen.availHeight,

			t  = 0,

			Y  = Y < m && Y > 0 ? Y : ( Y > m && m ) || 0, 					

			o  = window.requestAnimationFrame( function() {

				var currentY = window.scrollY;

				window.scrollTo( 0 , a( t , c , Y - c , +timeout && timeout || 30  ) );

				if( ( d && currentY <= Y ) || ( !d && currentY >= Y - 2) || ( !d && currentY >= m ) || ( currentY <= 0 && d ) ) {

					window.scrollTo( 0 , Y );

					window.cancelAnimationFrame( o );

				} else {

					t++;

					requestAnimationFrame( arguments.callee );

				}

			})

	}

}));