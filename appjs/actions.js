// JavaScript Document
function deviceInfo(){
var s='Esto es otra prueba';
		$('#devic table td').eq(1).text('android luis');
		//$('#device table td').eq(3).text(device.cordova);
		$('#devic table td').eq(5).text(device.name + ' Hola');
		$('#devic table td').eq(7).text('Adios');
		$('#devic table td').eq(9).text(s);	
}

$(document).ready(function(){    
	document.addEventListener("deviceready",deviceInfo(), false);
});