var destino;

destino = new Vue({
	el:'#active',
	data:{
		all:[]
	},
	methods:{
		getactividades:function(fell){
			// console.log(fell.currentTarget.id)
			$("#active .head ul li").removeClass('active')
			$('#'+fell.currentTarget.id).addClass('active')
			var fel = fell.currentTarget.id;
			var ubigeo = $('#ubigeo').val()
			var self = this;
			self.$http.get('http://128.199.229.185:3000/experiences?feel='+fel+'&ubigeo='+ubigeo).then(response=>{
				self.all = response.body
				console.log(self.all)
				var count = 1;
				$('.body .art').html(" ")
				self.all.forEach(function(res){
				var description = JSON.parse(res.user_description)
				var des = description[0].ES.substring(0,25)
					if (count<=4) {
						console.log(count)
						$('.body .art').append("<div class='tall'><div class='box-actividad'><a href='../actividades/actividades.html' class='top-box art-1' style='display:block;background-image:url("+res.activity_image+")'></a></div><div class='author-content'>"+
							"<div class='author avatar' style='background-image:url("+res.user_image+")'></div><div class='author-text'><div class='title'>"+res.user_name+"</div><div class='cont'>"+des+"</div></div></div>")
					}else if(count>4 && count <9){
						//$('.body .content .row-md-2 .exp').append("<div class='experiencia'><img src="+res.activity_image+"></div>")
					}else{
						console.log('no hay espacio, has una animacion')
					}
					count = count+1
				})
			},response=>{
				console.log(response)
			});
		}
	}
})

function funx(){
if (this.scrollY > 50) {
  document.getElementById('cabeza').classList.add('nav-white');
  $('.cabeza nav ul li a').addClass('black')
}else{
      document.getElementById('cabeza').classList.remove('nav-white');
      $('.cabeza nav ul li a').removeClass('black')
    }
}
window.addEventListener('scroll',function(){
	funx()
})
funx()
setInterval(()=>{
  $( ".container .mouse" ).toggleClass('bottom');
},1000)
/*mobile*/
// $('.actividad-slick').slick({
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 300,
//     autoplay:false,
//     slidesToShow: 4,
//     // slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1300,
//         settings: {
//           dots: false,
//           slidesToShow: 4,
//           speed: 300,
//           arrows: true,
//           autoplay:false,
//           // slidesToScroll: 1,
//           arrows: false,
//           infinite: false,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           dots: false,
//           slidesToShow: 4,
//           speed: 300,
//           arrows: true,
//           autoplay:false,
//           // slidesToScroll: 1,
//           arrows: false,
//           infinite: true,
//           dots: false
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           dots: false,
//           speed: 300,
//           arrows: true,
//           autoplay:false,
//           // slidesToScroll: 1,
//           arrows: false,
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           dots: false,
//           slidesToShow: 2,
//           speed: 300,
//           arrows: true,
//           autoplay:false,
//           // slidesToScroll: 1,
//           arrows: true,
//         }
//       }
//     ]
//   });