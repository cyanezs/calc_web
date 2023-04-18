$(document).ready(function() {
    var oper1 = "";
    var oper2 = "";
    var operador = "";
  
    $(".numero").on("click", function() {
      var numero = $(this).val();
      if (operador === "") {
        oper1 += numero;
        $(".display input").val(oper1);
      } else {
        oper2 += numero;
        $(".display input").val(oper2);
      }
    });
    
    $(".operador").on("click", function() {
      operador = $(this).val();
    });
    
    $(".igual").on("click", function() {
      var result = 0;
      switch (operador) {
        case "+":
          result = parseFloat(oper1) + parseFloat(oper2);
          break;
        case "-":
          result = parseFloat(oper1) - parseFloat(oper2);
          break;
        case "*":
          result = parseFloat(oper1) * parseFloat(oper2);
          break;
        case "/":
          result = parseFloat(oper1) / parseFloat(oper2);
          break;
        case "%":
          result = (parseFloat(oper1) * parseFloat(oper2))/100;
          break;
        default:
          result = 0;
      }
      $(".display input").val(result);
      oper1 = result.toString();
      oper2 = "";
      operador = "";
    });
    
    $(".clear").on("click", function() {
      oper1 = "";
      oper2 = "";
      operador = "";
      $(".display input").val("");
    });
    
    $(".decimal").on("click", function() {
      var decimal = $(this).val();
      if (operador === "") {
        if (oper1.indexOf(decimal) === -1) {
          oper1 += decimal;
          $(".display input").val(oper1);
        }
      } else {
        if (oper2.indexOf(decimal) === -1) {
          oper2 += decimal;
          $(".display input").val(oper2);
        }
      }
    });


    $(document).on('keydown', function(event) {
        var key = event.keyCode;
        var value = '';
    
        // Verifica si la tecla presionada es un número o un operador
        if (key >= 48 && key <= 57) {
            value = key - 48; // 0-9

            var numero = $(this).val();
            if (operador === "") {
                oper1 += numero;
                $(".display input").val(oper1);
            } else {
                oper2 += numero;
                $(".display input").val(oper2);
            }


        } else if (key >= 96 && key <= 105) {
            value = key - 96; // 0-9 (numpad)
        } else if (key === 106) {
            value = '*'; // multiplicación
        } else if (key === 107) {
            value = '+'; // suma
        } else if (key === 109) {
            value = '-'; // resta
        } else if (key === 111) {
            value = '/'; // división
        } else if (key === 13) {
            value = '='; // igual
        } else if (key === 27) {
            value = 'C'; // limpiar
        }
    
        // Si se presionó una tecla válida, realiza la acción correspondiente
        if (value !== '') {
            // Realiza la acción correspondiente en la calculadora
            // ...
        }
    });
    



  });