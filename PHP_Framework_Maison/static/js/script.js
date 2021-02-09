var path = location.protocol + "//" + location.host + "/my_framework/";
console.log($('#subi'));
$("#part").click(function() {
	$.ajax({
		url : path + "default/ajaxConnexion",
		dataType : "html",
       success : function(data, statut){
          $("#rend").replaceWith(data);
          $('#subi').click(function() {
             $.post(
                path + "connexion",
                {
                   log: $("#log").val()
               },
               function(data, statut) {
                   $('#hi').replaceWith("<p id='hi'>Bonjour " + $("#log").val() + "</p>");
               },
               "html"
               );
         });
      },
      error : function(resultat, statut, erreur){
          console.log(resultat);
          console.log(statut);
          console.log(erreur);
      }
  });
});

$('#subi').click(function() {
 $.post(
    path + "connexion",
    {
       log: $("#log").val()
   },
   function(data, statut) {
       $('#hi').replaceWith("<p id='hi'>Bonjour " + $("#log").val() + "</p>");
   },
   "html"
   );
});
