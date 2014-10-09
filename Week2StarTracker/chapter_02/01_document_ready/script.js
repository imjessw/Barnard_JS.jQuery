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


});