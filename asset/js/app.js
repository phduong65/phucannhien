$('.list_news').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    
    margin: 12,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        }
        
      },{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        }
        
      }
      
    ]
  });