// apenas após o carregamento completo do objeto DOM
$(document).ready(function(){


	// ao pressionar uma tecla
	$("#alimento").keyup(function(){

		// o elemento #alimento recebe o valor digitado nele mesmo minúsculo
		$(this).val($(this).val( ).toLowerCase() );
	
	} );

	// ação de clique do botão
	$("#btn-calcular").click(function() {

		// validação de campos
		if ($("#carboidratos").val() === "") {
			$("#mensagem").html("O campo carboidratos é obrigatório");
			return;
		}

		if ($("#proteína").val() === "") {
			$("#mensagem").html("O campo proteína é obrigatório");
			return;
		}

		if ($("#gordura").val() === "") {
			$("#mensagem").html("O campo gordura é obrigatório");
			return;
		}


		// recupera os valores informados
		var carboidratos = $("#carboidratos").val();
		carboidratos = carboidratos.replace(",", ".");
		carboidratos = parseFloat(carboidratos);

		var proteina = $("#proteina").val();
		proteina = proteina.replace(",", ".");
		proteina = parseFloat(proteina);

		var gordura = $("#gordura").val();
		gordura = gordura.replace(",", ".");
		gordura = parseFloat(gordura);

		// calcula calorias
		var calorias = (carboidratos * 4) + (proteina * 4) + (gordura * 9);

		// exibe mensagem na tela
		$("#mensagem").html(
			$("#alimento").val() + " possui " + calorias.toFixed(2) + " calorias."
		);
	} );

} );