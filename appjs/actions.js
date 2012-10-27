// JavaScript Document
function deviceInformacion(){
		$('#devic table td').eq(1).text(device.name);		
}

$(document).ready(function(){    
	document.addEventListener("deviceready",deviceInformacion(), false);
});