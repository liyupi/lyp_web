//join
var text=["bucuo","mo dalao","wawa","how to add?","cool","junk","shit","please pay attention to your words","999+","Yupi a","duang~"];
window.onload=function(){
	function danmu(){
		for(var i=0;i<text.length;i++){
			var a=document.getElementById("rowm").childNodes[i+1];
			a.innerHTML=text[Math.floor(Math.random()*11)];
			if(i==0){
				a.style.paddingTop=1+"%";
			}else{
				a.style.paddingTop=Math.floor(Math.random()*5)+"%";
			}
			a.style.paddingLeft=Math.floor(Math.random()*40)+"%";
			a.style.color="rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
		}
	}
	setTimeout(danmu,0);
	setInterval(danmu,6500);
};
