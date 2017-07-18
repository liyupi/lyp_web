var xmlhttp=new XMLHttpRequest();
xmlhttp.open("get","love.json",true);
xmlhttp.send();
xmlhttp.onreadystatechange=function(){
	if(xmlhttp.readyState==4){
		var jo=eval("("+xmlhttp.responseText+")");
		document.getElementById('icon').src="images/love/"+jo.sport+".png";
		document.getElementById('sport').innerHTML="I love "+jo.sportname+"!";
		document.getElementById('progress').innerHTML="love level:"+jo.progress;
		document.getElementById('icon').className="show";
		document.getElementById('sport').className="show";
		document.getElementById('progress').className="show";
		document.getElementById('loading').className="hide";
	}
};