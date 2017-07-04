$(document).ready(function(){
        $(".cabeza nav ul li a").click(function() {
          var at = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(at).offset().top
            }, 800);
        }); 
          var container   = document.getElementById('container').clientHeight * 0.5;
          var sectiontext = document.getElementById('container').clientHeight*0.7;
          var categories  = document.getElementById('container').clientHeight+document.getElementById('sectiontext').clientHeight + (document.getElementById('categories').clientHeight * 0.5);
          var mankivideo  = document.getElementById('container').clientHeight+document.getElementById('sectiontext').clientHeight + document.getElementById('categories').clientHeight+(document.getElementById('mankivideo').clientHeight * 0.5);
          var destinos    = document.getElementById('container').clientHeight+document.getElementById('sectiontext').clientHeight + document.getElementById('categories').clientHeight * 0.5+document.getElementById('mankivideo').clientHeight+document.getElementById('destinos').clientHeight;
          var actividades = document.getElementById('actividades').clientHeight * 0.5;
          window.addEventListener('scroll',function(){
            if (this.scrollY > 50) {
              document.getElementById('cabeza').classList.add('nav-white');
              $('.cabeza nav ul li a').addClass('black');
            }else{
              document.getElementById('cabeza').classList.remove('nav-white');
              $('.cabeza nav ul li a').removeClass('black');
            }
            if(this.scrollY > container){
              document.getElementById('sectiontext').classList.remove('opacity-none')
              document.getElementById('sectiontext').classList.add('w3-animate-bottom')
            }
            if(this.scrollY > sectiontext){
              document.getElementById('categories').classList.remove('opacity-none')
              document.getElementById('categories').classList.add('w3-animate-bottom')
            }
            if(this.scrollY > categories){
              document.getElementById('mankivideo').classList.remove('opacity-none')
              document.getElementById('mankivideo').classList.add('w3-animate-bottom')
            }
            if(this.scrollY > mankivideo){
              document.getElementById('destinos').classList.remove('opacity-none')
              document.getElementById('destinos').classList.add('w3-animate-bottom')
            }
            if(this.scrollY > destinos){
              document.getElementById('actividades').classList.remove('opacity-none')
              document.getElementById('actividades').classList.add('w3-animate-bottom')
            }
            if(this.scrollY > actividades){
              //document.getElementById('').classList.add('opacity-1')
            }
          })

            $(".background > div:gt(0)").hide();

            setInterval(function() {
              $('.background > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('.background');
            }, 3000);

            setInterval(()=>{
              $( ".container .mouse" ).toggleClass('bottom');
            },1000)

            $('.slick-art-mobile').slick({
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
                      slidesToShow: 3,
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
                      slidesToShow: 3,
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
                      arrows: true,
                    }
                  }
                ]
              });
            $('.art-mobile').slick({
                dots: false,
                arrows: true,
                infinite: true,
                speed: 300,
                autoplay:false,
                slidesToShow: 4,
                // slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      dots: false,
                      slidesToShow: 4,
                      speed: 300,
                      arrows: true,
                      autoplay:false,
                      // slidesToScroll: 1,
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
                      slidesToShow: 3,
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
                    }
                  }
                ]
              });
        })