  

// Мобильное меню

  $('.burger').on('click', function () {
    $('.main-nav').slideToggle();
  });

  //Табы на странице контактов
$('.tabs-link').on('click', function (e) {
  e.preventDefault();
  const activeClass = 'active';
  let index = $(this).index('.tabs-link');

  $('.tabs-link').removeClass(activeClass);
  $(this).addClass(activeClass);
  $('.contacts-content').removeClass(activeClass);
  $('.contacts-content').eq(index).addClass(activeClass);
});

// Фильтр

$('.filter-link').on('click', function (e) {
  e.preventDefault();
  let dataFilter = $(this).data('filter');

  $('.filter-link').removeClass('active');
  $(this).addClass('active');

  if (dataFilter === 'all') {
    $('.services-item').show();
    return;
  }

  $('.services-item').each(function () {
    let dataType = $(this).data('type');

    if (dataFilter === dataType) {
      $(this).show();
      return;
    }

    $(this).hide();
  });

});

 //Аккордеон
 let prevIndex;
 $('.accordeon-question').on('click', function () {
   const currentIndex = $(this).index('.accordeon-question');

   if (prevIndex === currentIndex) {
     $(this).next().slideToggle();
     return;
   }

   $('.accordeon-answer').slideUp();
   $(this).next().slideDown();

   prevIndex = currentIndex;
 });

 //Отзывы

 if ($('.slider').length) {
  $('.slider').slick({
    dots: true
  });
}