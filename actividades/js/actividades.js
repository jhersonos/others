var actividad = new Vue({
  el:'#actividad-container',
  data:{
    all:[]
  },
  methods:{
    showinfo:function(id_exp){
      var self = this 
      self.$http.get('http://128.199.229.185:3000/experiences/'+id_exp).then(response=>{
        self.all = response.body
        console.log(self.all)
      },response=>{
        console.log(response)
      });
    }
  }
});
//{{base_url}}/experiences/530
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
// // image scroll 
// $(document).ready(function(){
//   // var tall = $('#r1').height()
//   // $('#r2').css('height',tall)
//   // $("#static").sticky();  
// })


// function funx(){
//     if (this.scrollY > 50) {
//       document.getElementById('cabeza').classList.add('nav-white');
//         $('.cabeza nav ul li a').addClass('black');
//       }else{
//         document.getElementById('cabeza').classList.remove('nav-white');
//         $('.cabeza nav ul li a').removeClass('black');
//       }
// }
// window.addEventListener('scroll',function(){
//  funx()
// })
// funx()