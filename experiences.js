var exp = new Vue({
	el:'#cabeza',
	data:{
		all:[]
	},
	methods:{
		getexperience:function(){
			var self = this;
			self.$http.get('http://128.199.229.185:3000/experiences').then(response=>{
				self.all = response.body
				console.log(self.all)
				var count = 1;
				self.all.forEach(function(res){
				var description = JSON.parse(res.user_description)
					if (count<=4) {
						console.log(count)
						$('.body .content .row-md-1 .exp').append("<div class='experiencia'><img src="+res.activity_image+"><div class='avatar-box'>"+
							"<div class='avatar-experiencia'><img src="+res.user_image+"></div><div class='avatar-info'><div class='name'>"+res.user_name+"</div><div class='description'>"+description[0].ES+"</div></div>")
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

function funx(){
if (this.scrollY > 50) {
  document.getElementById('cabeza').classList.add('nav-white');
}else{
      document.getElementById('cabeza').classList.remove('nav-white');
    }
}
window.addEventListener('scroll',function(){
	funx()
})
funx()
setInterval(()=>{
  $( ".container .mouse" ).toggleClass('bottom');
},1000)