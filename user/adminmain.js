function hideShow(){
  var hold = document.getElementById('arrow');
  var hold2 = document.getElementById('arrowOption');

  if( hold.getAttribute('data-value')==1 ){
    hold.style.transform = "rotateZ(180deg)";
    hold2.style.display = "block";
    hold.setAttribute('data-value', '0');
  }
  else{
    hold.style.transform = "rotateZ(0deg)";
    hold2.style.display = "none";
    hold.setAttribute('data-value', '1');
  }
}



function logout(){
	
	var me = new AJAX("logoutadmin.php", "POST", true, token);
	me.init();
	me.send("logoutadmin=true", function(arg){
		
		
		console.log(arg);
		
		setTimeout(function(){
			location.assign('http://127.0.0.1/final/final_project/');
		
		},2000);
	});
}

function hideShowSections(id){

  for(x=1; x<4; x++){
    if( x==id ) continue;
    document.getElementById("navoption"+x).style.background = "rgba(32,44,170,0.8)";
    document.getElementById("articleSection"+x).style.visibility = "hidden";
  }

  document.getElementById("navoption"+id).style.background = "black";
  document.getElementById("articleSection"+id).style.visibility = "visible";

}