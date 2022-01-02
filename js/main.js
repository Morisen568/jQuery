'use strict';

let slideImg = $('.slide_imgBox');

    slideImg.hide(2000);

function slideShow() {

  if($(slideImg).hasClass('company')) {

    slideImg.show(2000);
    slideImg.css('background-image', 'url(img/news.png)');
    slideImg.removeClass('company');
    slideImg.addClass('news');
  }


  else if($(slideImg).hasClass('news')) {
    slideImg.show(2000);
    slideImg.css('background-image', 'url(img/office.png)');
    slideImg.removeClass('news');
    slideImg.addClass('office');
  }

  else{
    slideImg.show(2000);
    slideImg.css('background-image', 'url(img/company.png)');
    slideImg.removeClass('office');
    slideImg.addClass('company');
  }

    slideImg.hide(2000);

}

setInterval(slideShow, 4000);