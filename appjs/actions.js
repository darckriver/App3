// JavaScript Document
function deviceInfo(){
		$('#device table td').eq(1).text('android luis');
		//$('#device table td').eq(3).text(device.cordova);
		$('#device table td').eq(5).text(windows.device.name + ' Hola');
		//$('#device table td').eq(7).text(device.version);
		//$('#device table td').eq(9).text(device.uuid);	
}

$(document).ready(function(){    
	document.addEventListener("deviceready",deviceInfo(), false);
});