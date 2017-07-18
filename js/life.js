//life
window.onload=function(){
	var top=document.getElementById("top");
	window.onscroll=function(){
		if(document.body.scrollTop>200){
			top.className="show";
		}else{
			top.className="";
		}
	};
	top.onclick=function(){
		document.body.scrollTop=0;
	};
};