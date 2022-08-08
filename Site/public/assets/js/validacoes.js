function validarEmail(email) {
    var resultado = 'OK';

    if (email == undefined) {
        resultado = 'Email está indefinido';

    } else if (email == '') {
        resultado = 'Email é obrigatório';

    } else {
        var posicaoAt = email.indexOf('@');
        if (posicaoAt <= 0) {
            resultado = 'Email em formato inválido';
        } else {
            var posicaoDot = email.indexOf('.', posicaoAt)
            if (posicaoDot <= 2) {
                resultado = 'Email em formato inválido';
            } else {
                var resto = email.slice(posicaoDot, -1);
                if (resto.length < 1) {
                    resultado = 'Email em formato inválido'
                }
            }
        }
    }

    return resultado;
}

function validarSenha(senha) {
    var resultado = 'OK';
  
    if (senha == undefined) {
      resultado = 'Senha está indefinido';
    } else if (senha == '') {
      resultado = 'Senha é obrigatório';
    } else if (senha.length < 8) {
      resultado = 'Senha deve ter no minímo 8 caracteres';
    }
  
    return resultado;
  }