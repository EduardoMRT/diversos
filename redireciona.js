		let pagina = window.location.pathname;
		let paginaEspecifica = pagina.slice(22);
		var url = paginaEspecifica.split("/");
		var comoEmitir = document.getElementById("comoEmitir");
	
		if (url[1].includes("login.xhtml")) {
		    comoEmitir.style.display = "none";
		} else {
		    comoEmitir.style.display = "inherit";
		}
	
		function Ajuda() {
		    window.alert(url[0]);
		    if (url[0] == "protected") {
		        if (url[1] == "alvara_funcionamento.xhtml") {
		            window.open("https://youtu.be/kzfxbUGp-48");
		        }
		    } else if (url[0] == "public") {
		        window.alert(url[1]);
		        if (url[1] == "extrato_mobiliario_externo.xhtml") {
		            window.open("https://youtu.be/DzeGKyYKhUA?si=zlrQGBa23Gxt2h1E");
		        }
		    }
		}