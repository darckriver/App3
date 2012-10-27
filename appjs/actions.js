// JavaScript Document
function deviceInfo(){
		$('#device table td').eq(1).text(device.name);
		$('#device table td').eq(3).text(device.cordova);
		$('#device table td').eq(5).text(device.plataform);
		$('#device table td').eq(7).text(device.version);
		$('#device table td').eq(9).text(device.uuid);	
}

$(document).ready(function(){
    
	document.addEventListener("deviceready",function(){
		deviceInfo();
	}, false);
});