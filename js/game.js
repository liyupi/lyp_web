window.onload=function(){
	var bto=document.getElementById("button");
	var word=document.getElementById("text");
	var player;
	bto.addEventListener("click",function(){
		if(word.value==""){
			alert("Don't kid me!");
		}else{
			alert("Welcome! "+word.value+" !");
			player=word.value;
			document.getElementById("game").className="show";
		}
	});
//canvas
	var man={};
	var dou={};
	var douimg=document.getElementById("dou");
	var canvas=document.getElementById("mycanvas");
	var context=canvas.getContext("2d");
	var bilix=window.innerWidth*0.8/300;
	var biliy=window.innerHeight*0.8/150;
	man.vx=0;
	man.vy=0;
	man.x=50;
	man.y=50;
	var img=new Image();
	img.src="images/game/player.png";
	dou.x=Math.random()*window.innerWidth*0.8;
	dou.y=Math.random()*window.innerHeight*0.8;
	douimg.style.left=dou.x+"px";
	douimg.style.top=dou.y+"px";
	function run(e){
		if(Math.abs(dou.y-man.y*biliy)<30&&Math.abs(dou.x-man.x*bilix)<30){
			dou.x=Math.random()*window.innerWidth*0.8;
			dou.y=Math.random()*window.innerHeight*0.8;
			douimg.style.left=dou.x+"px";
			douimg.style.top=dou.y+"px";
		}
		man.x+=man.vx;
		man.y+=man.vy;
		if(man.x>canvas.width)
			man.x=-30;
		if(man.x<-30)
			man.x=canvas.width;
		if(man.y>canvas.height)
			man.y=-30;
		if(man.y<-30)
			man.y=canvas.height;
		context.clearRect(0,0,canvas.width,canvas.height);
		context.drawImage(img,man.x,man.y);
	}
	setInterval(run,50);
	document.onkeydown=function(e){
		if(e.keyCode==68){
			man.vx=5;
		}else if(e.keyCode==65){
			man.vx=-5;
		}else if(e.keyCode==83){
			man.vy=5;
		}else if(e.keyCode==87){
			man.vy=-5;
		}
	};
	document.onkeyup=function(e){
		man.vx=0;
		man.vy=0;
	}
};


