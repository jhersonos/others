


function funx(){
if (this.scrollY > 50) {
  document.getElementById('cabeza').classList.add('nav-white');
  // document.getElementById('static').classList.add('top');
}else{
      document.getElementById('cabeza').classList.remove('nav-white');
      // document.getElementById('static').classList.remove('top');
    }
    if (this.scrollY >1800) {
    	document.getElementById('static').classList.add('bottom');
    }else{
    	document.getElementById('static').classList.remove('bottom');
    }
}
window.addEventListener('scroll',function(){
	funx()
})
funx()

/*mobile*/
$('.actividad-slick').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    autoplay:false,
    slidesToShow: 4,
    // slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          dots: false,
          slidesToShow: 4,
          speed: 300,
          arrows: true,
          autoplay:false,
          // slidesToScroll: 1,
          arrows: false,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 4,
          speed: 300,
          arrows: true,
          autoplay:false,
          // slidesToScroll: 1,
          arrows: false,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          speed: 300,
          arrows: true,
          autoplay:false,
          // slidesToScroll: 1,
          arrows: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 2,
          speed: 300,
          arrows: true,
          autoplay:false,
          // slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });