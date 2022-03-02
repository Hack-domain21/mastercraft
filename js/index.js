$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionSelector: '.lb-scrolling',
        slideSelector: '.lb-carousel',
        navigation: true,
        keyboardScrolling: true,

        afterLoad: function(anchorLink, index) {
         

          var heroRight = $('.lb-hero').find('.slide-right');
          var slideUp = $('.lb-scrolling').find('.slide-up');


               heroRight.addClass('active-slide');
               slideUp.eq(0).addClass('active-slide');

               if (index == 1 && $('.lb-story').hasClass('active-slide')){
                   $('.lb-story.slide-up.active-slide').removeClass('active-slide');
                  }



        },

        onLeave: function(index, nextIndex, direction) {

          var heroRight = $('.lb-hero').find('.slide-right');
          var slideRight = $('.lb-scrolling').find('.slide-right');
          var slideUp = $('.lb-scrolling').find('.slide-up');
          var slideDown = $('.lb-scrolling').find('.slide-down');


          var lbScroll = $('.lb-scrolling').find('.lb-story');


          var slideRemove = $('.slide-right.active-slide');
          var upRemove = $('.slide-up.active-slide');
          var downRemove = $('.slide-down.active-slide');



          if (nextIndex == 1 && direction === "up"){
             slideUp.eq(0).addClass('active-slide');
           } 

           if (index == 0 && direction === "down"){
            var slideUp2 = $('.lb-scrolling').find('.slide-up-2x');


                slideRight.eq(1).addClass('active-slide');
                slideUp.eq(1).addClass('active-slide');
                slideUp2.eq(0).addClass('active-slide');
                // lbScroll.eq(0).removeClass('slide-up');
                // lbScroll.eq(0).addClass('slide-down');
              if( $('.slide-right').hasClass('active-slide')){
               slideRemove.removeClass('<ac></ac>tive-slide');
              }
              if( $('.lb-story').hasClass('active-slide')){
               upRemove.removeClass('active-slide');
               // downRemove.removeClass('active-slide');
              }
            }


           if (index == 1 && direction === "down"){
            var slideUp2 = $('.lb-scrolling').eq(1).find('.slide-up-2x');

                slideRight.eq(1).addClass('active-slide');
                slideUp.eq(1).addClass('active-slide');
                slideUp2.addClass('active-slide');
                // lbScroll.eq(0).removeClass('slide-up');
                // lbScroll.eq(0).addClass('slide-down');
              if( $('.slide-right').hasClass('active-slide')){
               slideRemove.removeClass('active-slide');
              }
              if( $('.lb-story').hasClass('active-slide')){
               upRemove.removeClass('active-slide');
               // downRemove.removeClass('active-slide');
              }
            }

            if (nextIndex == 2 && direction === "up"){
                 slideRight.eq(1).addClass('active-slide');
                 slideUp.eq(1).addClass('active-slide');
               if( $('.slide-right').hasClass('active-slide')){
                slideRemove.removeClass('active-slide');
               }
               if( $('.lb-story').hasClass('active-slide')){
                upRemove.removeClass('active-slide');
                // downRemove.removeClass('active-slide');
               }
             }

             if (index == 2 && direction === "down"){
              var slideUp2 = $('.lb-scrolling').eq(2).find('.slide-up-2x');
              var slideUp3 = $('.lb-scrolling').eq(2).find('.slide-up-3x');


                  slideRight.eq(2).addClass('active-slide');
                  slideUp.eq(2).addClass('active-slide');
                  slideUp2.addClass('active-slide');
                  slideUp3.addClass('active-slide');

                  // lbScroll.eq(1).removeClass('slide-up');
                  // lbScroll.eq(1).addClass('slide-down');
                if( $('.slide-right').hasClass('active-slide')){
                 slideRemove.removeClass('active-slide');
                }
                if( $('.lb-story').hasClass('active-slide')){
                 upRemove.removeClass('active-slide');
                 // downRemove.removeClass('active-slide');
                }
              }

             if (nextIndex == 3 && direction === "up"){
                slideRight.eq(2).addClass('active-slide');
                slideUp.eq(2).addClass('active-slide');
               if( $('.slide-right').hasClass('active-slide') ){
                slideRemove.removeClass('active-slide');
               }
               if( $('.lb-story').hasClass('active-slide')){
                upRemove.removeClass('active-slide');
                // downRemove.removeClass('active-slide');
               }
             } 

             if (index == 3 && direction === "down"){
              var slideUp2 = $('.lb-scrolling').eq(3).find('.slide-up-2x');


                  slideRight.eq(3).addClass('active-slide');
                  slideUp.eq(3).addClass('active-slide');
                  slideUp2.addClass('active-slide');
                  // lbScroll.eq(2).removeClass('slide-up');
                  // lbScroll.eq(2).addClass('slide-down');
                  if( $('.slide-right').hasClass('active-slide')){
                   slideRemove.removeClass('active-slide');
                  }
                  if( $('.lb-story').hasClass('active-slide')){
                   upRemove.removeClass('active-slide');
                   // downRemove.removeClass('active-slide');
                  }
              }

            if (nextIndex == 4 && direction === "up"){
                slideRight.eq(3).addClass('active-slide');
                slideUp.eq(3).addClass('active-slide');
               if( $('.slide-right').hasClass('active-slide')){
                slideRemove.removeClass('active-slide');
               }
               if( $('.lb-story').hasClass('active-slide')){
                upRemove.removeClass('active-slide');
                // downRemove.removeClass('active-slide');
               }
             } 

             if (index == 4 && direction === "down"){
              var slideUp2 = $('.lb-scrolling').find('.slide-up-2x');
                  slideRight.eq(4).addClass('active-slide');
                  slideUp.eq(4).addClass('active-slide');
                  slideUp2.eq(3).addClass('active-slide');

                  // lbScroll.eq(3).removeClass('slide-up');
                  // lbScroll.eq(3).addClass('slide-down');
                  if( $('.slide-right').hasClass('active-slide')){
                   slideRemove.removeClass('active-slide');
                  }
                  if( $('.lb-story').hasClass('active-slide')){
                   upRemove.removeClass('active-slide');
                   // downRemove.removeClass('active-slide');
                  }
              }

             if (nextIndex == 5 && direction === "up"){
                slideRight.eq(4).addClass('active-slide');
               slideUp.eq(4).addClass('active-slide');
               if( $('.slide-right').hasClass('active-slide') ){
                slideRemove.removeClass('active-slide');
               }
               if( $('.lb-story').hasClass('active-slide')){
                upRemove.removeClass('active-slide');
                // downRemove.removeClass('active-slide');
               }
             }

             if (index == 5 && direction === "down"){
              var slideUp2 = $('.lb-scrolling').find('.slide-up-2x');
                  slideRight.eq(5).addClass('active-slide');
                  slideUp.eq(5).addClass('active-slide');
                  slideUp2.eq(4).addClass('active-slide');

                  // lbScroll.eq(4).removeClass('slide-up');
                  // lbScroll.eq(4).addClass('slide-down');
                  if( $('.slide-right').hasClass('active-slide')){
                   slideRemove.removeClass('active-slide');
                  }
                  if( $('.lb-story').hasClass('active-slide')){
                   upRemove.removeClass('active-slide');
                   // downRemove.removeClass('active-slide');
                  }
              }

        }



    });
});