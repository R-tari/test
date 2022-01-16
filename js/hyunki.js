$(function()
      {

        $('.slider').bxSlider();
       
          $('.btn-nav').on(
              {
                  'click':function()
                  {
                      $('.nav').toggleClass('show-nav');
                  }
              }
          );

          $('.nav li').on(
              {
                  'click':function()
                  {
                      $('.nav').removeClass('show-nav');
                  }
              }
          )

              
         
   
      })