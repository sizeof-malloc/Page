function recogerdatos(){
	var usua = document.getElementById("usuario").value;
	var nomb = document.getElementById("nombre").value;
	var apei = document.getElementById("apellido").value;
	var tele = document.getElementById("telefono").value;
	var IP = document.getElementById("ip").value;
	var MAC = document.getElementById("mac").value;
	var tex = document.querySelector('h3')
	var tex4 = document.querySelector('h4')
	var tex5 = document.querySelector('h5')
	var tex6 = document.querySelector('h6')
	var tex7 = document.querySelector('h7')
	var tex8 = document.querySelector('h8')
	if(  usua.length < 4 || usua.length > 8  ) {		
		tex.innerHTML = '<b> No. de usuario: Error </b>'
	}
	else
		tex.innerHTML = '<b> No. de usuario: Verificado </b>'
	
	if( /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nomb) ) {
		tex4.innerHTML = '<b> Nombre: Verificado correctamente </b>'
	}	
	else
		tex4.innerHTML = '<b> Nombre: Error al ingresar datos </b>'
	
	if( /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(apei) ) {
		tex5.innerHTML = '<b> Apellido: Verificado correctamente </b>'
	}	
	else
		tex5.innerHTML = '<b> Apellido: Error al ingresar datos </b>'
	
	if( tele.length == 10 && /\d{10}/.test(tele) ) {
		tex6.innerHTML = '<b> Telefono: Verificado correctamente </b>'
	}	
	else
		tex6.innerHTML = '<b> Telefono: Error al ingresar datos  </b>'
	
	if( IP.length == 12 && /\d{3}[.]\d{3}[.]\d{1}[.]\d{2}/.test(IP) ) {
		tex7.innerHTML = '<b> Direccion IP: Verificado correctamente </b>'
	}	
	else
		tex7.innerHTML = '<b> Direccion IP: Error al ingresar datos </b>'
	
	if( MAC.length == 17 && /\w{2}[:]\w{2}[:]\w{2}[:]\w{2}[:]\w{2}[:]\w{2}/.test(MAC) ) {
		tex8.innerHTML = '<b> Direccion MAC: Verificado correctamente </b>'
	}	
	else
		tex8.innerHTML = '<b> Direccion MAC: Error al ingresar datos </b>'

}
