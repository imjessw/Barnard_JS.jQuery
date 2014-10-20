$(document).ready(function(){
  console.log("OMG JAVASCRIPT");
    $('#celebs tr:even').addClass('zebra');
 
		$('#toggleButton').click(function(){
			$('#disclaimer').toggle();
			if ($('#disclaimer').is(':visible')) {
				$(this).val('hide');
			}
			else{
				$(this).val('show');
			}
		})	
		$("<input type='button' id='toggleButton' value='toggle'/>").insertAfter('#disclaimer');
		$('#toggleButton').click(function(){
			$('#disclaimer').toggle("slow");
			alert("TOGGEL DONE!!!!")
		});
		$('<strong>START</strong>').prependTo('#disclaimer')
		$('<strong>END</strong>').appendTo('#disclaimer')

});