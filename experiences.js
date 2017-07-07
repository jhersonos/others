//vue
var exp = new Vue({
	el:'#experiences',
	data:{
		all:[]
	},
	methods:{
		getexperience:function(ubigeos){
			if (ubigeos && ubigeos!="") {

			}else{
				var ubigeos = 15;
			}
			// console.log(ubigeos)
			$("#experiences .head ul li").removeClass('active')
			$('#'+ubigeos).addClass('active')
			var ubigeo = ubigeos;
			var fel = $('#fel').val()
			var self = this;
			self.$http.get('http://128.199.229.185:3000/experiences?feel='+fel+'&ubigeo='+ubigeo).then(response=>{
				self.all = response.body
				console.log(self.all)
				var count = 1;
				$('.body .content .row-md-1 .exp').html(" ")
				self.all.forEach(function(res){
				var description = JSON.parse(res.user_description)
				var des = description[0].ES.substring(0,25)
					if (count<=4) {
						console.log(count)
						$('.body .content .row-md-1 .exp').append("<div class='experiencia'><div class='box-img'><a class='img' href='actividades/actividades.html' style='display:block;background-image:url("+res.activity_image+")'></a></div><div class='avatar-box'>"+
							"<div class='avatar-experiencia'><img src="+res.user_image+"></div><div class='avatar-info'><div class='name'>"+res.user_name+"</div><div class='description'>"+des+"</div></div>")
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
//exec
exp.getexperience();
function expe(id){
	// console.log(id.id)
	exp.getexperience(id.id)
}

function funx(){
if (this.scrollY > 50) {
  document.getElementById('cabeza').classList.add('nav-white');
  $('.cabeza nav ul li a').addClass('black')
  $('.cabeza nav').addClass('-top')
  $('.cabeza').addClass('nav-height')
}else{
      document.getElementById('cabeza').classList.remove('nav-white');
      $('.cabeza nav ul li a').removeClass('black')
      $('.cabeza nav').removeClass('-top')
      $('.cabeza').removeClass('nav-height')
    }
}
window.addEventListener('scroll',function(){
	funx()
})
funx()
setInterval(()=>{
  $( ".container .mouse" ).toggleClass('bottom');
},1000)