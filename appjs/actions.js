// JavaScript Document
function deviceInfo(){
var s='Esto es otra prueba'
		$('#device table td').eq(1).text('android luis');
		//$('#device table td').eq(3).text(device.cordova);
		$('#device table td').eq(5).text(windows.device.name + ' Hola');
		$('#device table td').eq(7).text('Adios');
		$('#device table td').eq(9).text(s);	
}

$(document).ready(function(){    
	document.addEventListener("deviceready",deviceInfo(), false);
});