(function($) {
	$.fn.puissance = function(options) {
		this.append("<table id='tabuleau' style='background-color: blue;'></table>");
		this.wrap("<div id='content' style='margin-top: 150px; margin-left:34%;'></div>");
		$('#content').before("<h1 style='position:absolute; text-align:center; top: 20px;\
			left: 38%; font-family:score;'>Puissance 4 low cost</h1>");
		$('body').css('background-color', 'blue');
		var start = {
			taille: [7, 6],
			color: ["red", "yellow"]
		};
		var newStyle = document.createElement('style');
		newStyle.appendChild(document.createTextNode("\
			@font-face {\
				font-family: 'score';\
				src: url('scoreboard.ttf');\
			}\
			"));

		document.head.appendChild(newStyle);
		var joueur = 1;
		var scoreJ1 = 0;
		var scoreJ2 = 0;
		var tour = "Joueur" + joueur;
		var settings = $.extend(start, options);
		if(typeof options != 'undefined' && settings["taille"].length > 2) {
			alert("Indiquez la taille du Y et de X pour le plateau de jeu");
			return false;
		}
		if(typeof options != 'undefined' && settings["color"].length > 2) {
			alert("Veuillez choisir la couleur du joueur 1 & 2");
			return false;
		}
		if(settings["color"][0] == settings["color"][1]) {
			alert("Couleurs identiques, veuillez choisir une couleur differente de votre partenaire de jeu.");
			return false;
		}
		this.each(function() {
			for(var i = 0; i < settings["taille"][1]; i++) {
				var mo = "mo" + i;
				$('#tabuleau').append("<tr id='" + mo + "'></tr>");
				for(var j = 0; j < settings["taille"][0]; j++) {
					var yo = "yo" + j;
					$("#" + mo).append("<td id='"+ mo + "-" + yo + "' style='position:relative;\
						border-radius: 50%; background-color: white; width: 70px; height: 70px;'></td>");
				}
			}
			var colorJ1 = settings['color'][0];
			var colorJ2 = settings['color'][1];
			if(joueur == 1) {
				var myColor = colorJ1;
			}
			else {
				var myColor = colorJ2;
			}
			var taillex = 74 * settings["taille"][0] +2;
			var tailley = 74 * settings["taille"][1] +2;
			$('#tabuleau').after("<div style=' height: auto; font-family:score;\
				background-color:black; color:white; width:"+taillex+"px; padding-top:7px; padding-bottom:7px;'\
				id='score'><span style='float:left; margin-left:20%;'> J1 : </span><span style='background-color: grey;\
				color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ1 +"</strong></span>\
				<div style='float:right; margin-right:20%;'><span> J2 : </span><span style='background-color: grey;\
				color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ2 + "</strong>\
				</span></div></div>");
			$('#score').after("<div id='tour' style='padding-bottom: 1px;\
				background-color:black;width:"+taillex+"px; color:"+ myColor +";\
				margin-top:-19px; font-family: score;'>\
				<h3 id='ma' style=' width:60%; background-color:white; padding:5px;\
				text-align:center; margin-left:auto; margin-right:auto; '>Au tour du  "+ tour +"</h3></div>");
			$("#tour").after("<div id='mop' style='position:absolute; top:-"+tailley+"px;\
				background-color: rgba(132,142,141,0.97); width: "+taillex+"px;\
				height: "+tailley+"px;'><button id='replay' style='margin-left:40%;\
				padding:10px; margin-top:40%; font-family:score; font-size:20px;\
				font-weight:bold; color:blue;'>Replay</button></div>");
			var tabVerifh1 = new Array();
			var tabVerifh2 = new Array();
			var tabVerifv1 = new Array();
			var tabVerifv2 = new Array();
			function blink(){
				$("#ma").animate({opacity:0},"fast").animate({opacity:1}, "fast");
				setTimeout(blink(),2000);
			}
			function horiVerif() {
				for(var a = 0; a < settings["taille"][1]; a++) {
					tabVerif1 = new Array();
					tabVerif2 = new Array();

					for(var z = 0; z < settings["taille"][0]; z++) {
						if($("#mo" + a + "-yo" + z).children().length != 0) {
							if($("#mo" + a + "-yo" + z).children().attr('class') == 'J1') {
								tabVerif1.push("ok");
								tabVerif2 = new Array();
							}
							else {
								tabVerif2.push("ok");
								tabVerif1 = new Array();
							}
						}
						if(tabVerif1.length == 4) {
							removeLo();
							scoreJ1 = scoreJ1 + 1;
							$('#score').replaceWith("<div style=' height: auto; font-family:score;\
								background-color:black; color:white; width:"+taillex+"px; padding-top:7px; padding-bottom:7px;'\
								id='score'><span style='float:left; margin-left:20%;'> J1 : </span><span style='background-color: grey;\
								color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ1 +"</strong></span>\
								<div style='float:right; margin-right:20%;'><span> J2 : </span><span style='background-color: grey;\
								color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ2 + "</strong>\
								</span></div></div>");
							$("#tour").replaceWith("<div id='tour' style='padding-bottom: 1px;\
								background-color:black;width:"+taillex+"px; color:"+ myColor +";\
								margin-top:-19px; font-family: score;'>\
								<h3 id='ma' style=' width:60%; background-color:white; padding:5px;\
								text-align:center; margin-left:auto; margin-right:auto; '>\
								Joueur 1 à gagné !</h3></div>");
							$("#mop").animate({top:'150px'}, "slow");
							blink();
							return;
						}
						if(tabVerif2.length == 4) {
							removeLo();
							scoreJ2 = scoreJ2 + 1;
							$('#score').replaceWith("<div style=' height: auto; font-family:score;\
								background-color:black; color:white; width:"+taillex+"px; padding-top:7px; padding-bottom:7px;'\
								id='score'><span style='float:left; margin-left:20%;'> J1 : </span><span style='background-color: grey;\
								color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ1 +"</strong></span>\
								<div style='float:right; margin-right:20%;'><span> J2 : </span><span style='background-color: grey;\
								color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ2 + "</strong>\
								</span></div></div>");
							$("#tour").replaceWith("<div id='tour' style='padding-bottom: 1px;\
								background-color:black;width:"+taillex+"px; color:"+ myColor +";\
								margin-top:-19px; font-family: score;'>\
								<h3 id='ma' style=' width:60%; background-color:white; padding:5px;\
								text-align:center; margin-left:auto; margin-right:auto; '>\
								Joueur 2 à gagné !</h3></div>");
							$("#mop").animate({top:'150px'}, "slow");
							blink();
							return;
						}
						if($("#mo" + a + "-yo" + z).children().length == 0) {
							tabVerif1 = new Array();
							tabVerif2 = new Array();
						}
					}
				}	
			}
			function vertiVerif() {
				for(var e = 0; e < settings["taille"][0]; e++) {
					tabVerifv1 = new Array();
					tabVerifv2 = new Array();
					for(var r = 0; r < settings["taille"][1]; r++) {
						if($("#mo" + r + "-yo" + e).children().length != 0) {
							if($("#mo" + r + "-yo" + e).children().attr('class') == 'J1') {
								tabVerifv1.push("ok");
								tabVerifv2 = new Array();
							}
							else {
								tabVerifv2.push("ok");
								tabVerifv1 = new Array();
							}
						}
						if(tabVerifv1.length == 4) {
							removeLa();
							scoreJ1 = scoreJ1 + 1;
							$('#score').replaceWith("<div style=' height: auto; font-family:score;\
								background-color:black; color:white; width:"+taillex+"px; padding-top:7px; padding-bottom:7px;'\
								id='score'><span style='float:left; margin-left:20%;'> J1 : </span><span style='background-color: grey;\
								color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ1 +"</strong></span>\
								<div style='float:right; margin-right:20%;'><span> J2 : </span><span style='background-color: grey;\
								color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ2 + "</strong>\
								</span></div></div>");
							$("#tour").replaceWith("<div id='tour' style='padding-bottom: 1px;\
								background-color:black;width:"+taillex+"px; color:"+ myColor +";\
								margin-top:-19px; font-family: score;'>\
								<h3 id='ma' style=' width:60%; background-color:white; padding:5px;\
								text-align:center; margin-left:auto; margin-right:auto; '>\
								Joueur 1 à gagné !</h3></div>");
							$("#mop").animate({top:'150px'}, "slow");
							blink();
							return;
						}
						if(tabVerifv2.length == 4) {
							removeLa();
							scoreJ2 = scoreJ2 + 1;
							$('#score').replaceWith("<div style=' height: auto; font-family:score;\
								background-color:black; color:white; width:"+taillex+"px; padding-top:7px; padding-bottom:7px;'\
								id='score'><span style='float:left; margin-left:20%;'> J1 : </span><span style='background-color: grey;\
								color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ1 +"</strong></span>\
								<div style='float:right; margin-right:20%;'><span> J2 : </span><span style='background-color: grey;\
								color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ2 + "</strong>\
								</span></div></div>");
							$("#tour").replaceWith("<div id='tour' style='padding-bottom: 1px;\
								background-color:black;width:"+taillex+"px; color:"+ myColor +";\
								margin-top:-19px; font-family: score;'>\
								<h3 id='ma' style=' width:60%; background-color:white; padding:5px;\
								text-align:center; margin-left:auto; margin-right:auto; '>\
								Joueur 2 à gagné !</h3></div>");
							$("#mop").animate({top:'150px'}, "slow");
							blink();
							return;
						}
						if($("#mo" + r + "-yo" + e).children().length == 0) {
							tabVerifv1 = new Array();
							tabVerifv2 = new Array();
						}
					}
				}
			}
			function diagVerif1(attr, tob, J) {
				var att = attr.split("-");
				var tabp = att[0].split('o');
				var tabu = att[1].split('o');
				var d = parseInt(tabp[1]) - 1;
				var c = parseInt(tabu[1]) - 1;
				var text = "#mo"+ d + "-yo" + c;
				for(p = 0; p <= 3; p++) { 
					if($(text).children().length != 0 && $(text).children().attr('class') == J) {
						text = "#mo"+ d + "-yo" + c;
						tob.push("ok");
						d = d - 1;
						c = c - 1;
					}
					else {
						break;
					}
					if(tob.length == 4) {
						if(J == "J1") {
							var player = "Joueur 1";
							scoreJ1 = scoreJ1 + 1;
							myColor = colorJ1;
						}
						else {
							var player = "Joueur 2";
							scoreJ2 = scoreJ2 + 1;
							myColor = colorJ2;
						}
						removeLa();
						$('#score').replaceWith("<div style=' height: auto; font-family:score;\
							background-color:black; color:white; width:"+taillex+"px; padding-top:7px; padding-bottom:7px;'\
							id='score'><span style='float:left; margin-left:20%;'> J1 : </span><span style='background-color: grey;\
							color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ1 +"</strong></span>\
							<div style='float:right; margin-right:20%;'><span> J2 : </span><span style='background-color: grey;\
							color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ2 + "</strong>\
							</span></div></div>");
						$("#tour").replaceWith("<div id='tour' style='padding-bottom: 1px;\
							background-color:black;width:"+taillex+"px; color:"+ myColor +";\
							margin-top:-19px; font-family: score;'>\
							<h3 id='ma' style=' width:60%; background-color:white; padding:5px;\
							text-align:center; margin-left:auto; margin-right:auto; '>\
							"+player+" à gagné !</h3></div>");
						$("#mop").animate({top:'150px'}, "slow");
						blink();
						return;
					}
				}
				diagVerif2(attr, tob, J);
			}
			function diagVerif2(attr, tob, J) {
				var att = attr.split("-");
				var tabp = att[0].split('o');
				var tabu = att[1].split('o');
				var d = parseInt(tabp[1]) + 1;
				var c = parseInt(tabu[1]) + 1;
				var text = "#mo"+ d + "-yo" + c;
				for(p = 0; p <= 3; p++) { 
					if($(text).children().length != 0 && $(text).children().attr('class') == J) {
						text = "#mo"+ d + "-yo" + c;
						tob.push("ok");
						d = d + 1;
						c = c + 1;
					}
					else {
						break;
					}
					if(tob.length == 4) {
						if(J == "J1") {
							var player = "Joueur 1";
							scoreJ1 = scoreJ1 + 1;
							myColor = colorJ1;
						}
						else {
							var player = "Joueur 2";
							scoreJ2 = scoreJ2 + 1;
							myColor = colorJ2;
						}
						removeLa();
						$('#score').replaceWith("<div style=' height: auto; font-family:score;\
							background-color:black; color:white; width:"+taillex+"px; padding-top:7px; padding-bottom:7px;'\
							id='score'><span style='float:left; margin-left:20%;'> J1 : </span><span style='background-color: grey;\
							color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ1 +"</strong></span>\
							<div style='float:right; margin-right:20%;'><span> J2 : </span><span style='background-color: grey;\
							color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ2 + "</strong>\
							</span></div></div>");
						$("#tour").replaceWith("<div id='tour' style='padding-bottom: 1px;\
							background-color:black;width:"+taillex+"px; color:"+ myColor +";\
							margin-top:-19px; font-family: score;'>\
							<h3 id='ma' style=' width:60%; background-color:white; padding:5px;\
							text-align:center; margin-left:auto; margin-right:auto; '>\
							"+player+" à gagné !</h3></div>");
						$("#mop").animate({top:'150px'}, "slow");
						blink();
						return;
					}
				}
			}
			function diagVerif3(attr, tob, J) {
				var att = attr.split("-");
				var tabp = att[0].split('o');
				var tabu = att[1].split('o');
				var d = parseInt(tabp[1]) + 1;
				var c = parseInt(tabu[1]) - 1;
				var text = "#mo"+ d + "-yo" + c;
				for(p = 0; p <= 3; p++) { 
					if($(text).children().length != 0 && $(text).children().attr('class') == J) {
						text = "#mo"+ d + "-yo" + c;
						tob.push("ok");
						d = d + 1;
						c = c - 1;
					}
					else {
						break;
					}
					if(tob.length == 4) {
						if(J == "J1") {
							var player = "Joueur 1";
							scoreJ1 = scoreJ1 + 1;
							myColor = colorJ1;
						}
						else {
							var player = "Joueur 2";
							scoreJ2 = scoreJ2 + 1;
							myColor = colorJ2;
						}
						removeLa();
						$('#score').replaceWith("<div style=' height: auto; font-family:score;\
							background-color:black; color:white; width:"+taillex+"px; padding-top:7px; padding-bottom:7px;'\
							id='score'><span style='float:left; margin-left:20%;'> J1 : </span><span style='background-color: grey;\
							color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ1 +"</strong></span>\
							<div style='float:right; margin-right:20%;'><span> J2 : </span><span style='background-color: grey;\
							color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ2 + "</strong>\
							</span></div></div>");
						$("#tour").replaceWith("<div id='tour' style='padding-bottom: 1px;\
							background-color:black;width:"+taillex+"px; color:"+ myColor +";\
							margin-top:-19px; font-family: score;'>\
							<h3 id='ma' style=' width:60%; background-color:white; padding:5px;\
							text-align:center; margin-left:auto; margin-right:auto; '>\
							"+player+" à gagné !</h3></div>");
						$("#mop").animate({top:'150px'}, "slow");
						blink();
						return;
					}
				}
				diagVerif4(attr, tob, J);
			}
			function diagVerif4(attr, tob, J) {
				var att = attr.split("-");
				var tabp = att[0].split('o');
				var tabu = att[1].split('o');
				var d = parseInt(tabp[1]) - 1;
				var c = parseInt(tabu[1]) + 1;
				var text = "#mo"+ d + "-yo" + c;
				for(p = 0; p <= 3; p++) { 
					if($(text).children().length != 0 && $(text).children().attr('class') == J) {
						text = "#mo"+ d + "-yo" + c;
						tob.push("ok");
						d = d - 1;
						c = c + 1;
					}
					else {
						break;
					}
					if(tob.length == 4) {
						if(J == "J1") {
							var player = "Joueur 1";
							scoreJ1 = scoreJ1 + 1;
							myColor = colorJ1;
						}
						else {
							var player = "Joueur 2";
							scoreJ2 = scoreJ2 + 1;
							myColor = colorJ2;
						}
						removeLa();
						$('#score').replaceWith("<div style=' height: auto; font-family:score;\
							background-color:black; color:white; width:"+taillex+"px; padding-top:7px; padding-bottom:7px;'\
							id='score'><span style='float:left; margin-left:20%;'> J1 : </span><span style='background-color: grey;\
							color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ1 +"</strong></span>\
							<div style='float:right; margin-right:20%;'><span> J2 : </span><span style='background-color: grey;\
							color:red; padding:5px; font-size:20px; border-radius:15%;'><strong>" + scoreJ2 + "</strong>\
							</span></div></div>");
						$("#tour").replaceWith("<div id='tour' style='padding-bottom: 1px;\
							background-color:black;width:"+taillex+"px; color:"+ myColor +";\
							margin-top:-19px; font-family: score;'>\
							<h3 id='ma' style=' width:60%; background-color:white; padding:5px;\
							text-align:center; margin-left:auto; margin-right:auto; '>\
							"+player+" à gagné !</h3></div>");
						$("#mop").animate({top:'150px'}, "slow");
						blink();
						return;
					}
				}
			}
			function removeLo() {
				for(var a = 0; a < settings['taille'][1]; a++) {
					for(var z = 0; z < settings['taille'][0]; z++) {
						if($("#mo" + a + "-yo" + z).children().length != 0) {
							$("#mo" + a + "-yo" + z).children().remove();
						}
					}
				}
			}
			function removeLa() {
				for(var e = 0; e < settings['taille'][0]; e++) {
					for(var r = 0; r < settings['taille'][1]; r++) {
						if($("#mo" + r + "-yo" + e).children().length != 0) {
							$("#mo" + r + "-yo" + e).children().remove();
						}
					}
				}
			}
			$('#replay').click(function() {
				$('#mop').animate({top: "-"+tailley+"px"}, "slow");
				removeLa();
				removeLo();
				tour = "Joueur" + joueur;
				if(joueur == 1) {
					myColor = colorJ1;
				}
				else {
					myColor = colorJ2;
				}
				$('#tour').replaceWith("<div id='tour' style='padding-bottom: 1px;\
					background-color:black;width:"+taillex+"px; color:"+ myColor +";\
					margin-top:-19px; font-family: score;'>\
					<h3 style=' width:60%; background-color:white; padding:5px;\
					text-align:center; margin-left:auto; margin-right:auto; '>Au tour du  "+ tour +"</h3></div>");
			});
			$('td').click(function() {
				var att = $(this).attr("id");
				var array = att.split('-');
				for(var o = settings["taille"][1] - 1; o != -1; o--) {
					if($("#mo" + o + "-" + array[1]).children().length == 0) {
						if(joueur == 1) {
							$("#mo" + o + "-" + array[1]).append("<div class='J1' \
								id='mo" + o + "-" + array[1] +"' style='border-radius: 50%;\
								background-color: " + colorJ1 + "; width: 70px; height: 70px;\
								position:absolute; top:-400px;'></div>");
							joueur = 2;
							tour = "Joueur" + joueur;
							var myColor = colorJ2;
							var tob = new Array();
							$('#tour').replaceWith("<div id='tour' style='padding-bottom: 1px;\
								background-color:black;width:"+taillex+"px; color:"+ myColor +";\
								margin-top:-19px; font-family: score;'>\
								<h3 style=' width:60%; background-color:white; padding:5px;\
								text-align:center; margin-left:auto; margin-right:auto; '>Au tour du  "+ tour +"</h3></div>");
							$("#mo" + o + "-" + array[1]).children().animate({top: '1px'}, "normal", function() {
								vertiVerif();
								horiVerif();
								diagVerif1("mo" + o + "-" + array[1], tob, "J1");
								tob = new Array();
								diagVerif3("mo" + o + "-" + array[1], tob, "J1");
								return;
							});
						}
						else {
							$("#mo" + o + "-" + array[1]).append("<div class='J2' \
								id='mo" + o + "-" + array[1] +"' style='border-radius: 50%;\
								background-color: " + colorJ2 +"; width: 70px; height: 70px;\
								position:absolute; top:-400px;'></div>");
							joueur = 1;
							tour = "Joueur" + joueur;
							var myColor = colorJ1;
							var tob = new Array();
							$('#tour').replaceWith("<div id='tour' style='padding-bottom: 1px;\
								background-color:black;width:"+taillex+"px; color:"+ myColor +";\
								margin-top:-19px; font-family: score;'>\
								<h3 style=' width:60%; background-color:white; padding:5px;\
								text-align:center; margin-left:auto; margin-right:auto; '>Au tour du  "+ tour +"</h3></div>");
							$("#mo" + o + "-" + array[1]).children().animate({top: '1px'}, "normal", function() {
								vertiVerif();
								horiVerif();
								diagVerif1("mo" + o + "-" + array[1], tob, "J2");
								tob = new Array();
								diagVerif3("mo" + o + "-" + array[1], tob, "J2");
								return;
							});
						}
						return;
					}
				}
			});
		})
}
})(jQuery);