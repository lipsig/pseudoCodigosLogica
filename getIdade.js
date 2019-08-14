function getIdade(dataNasc) {

    var nascimento = dataNasc;
    nascimento = nascimento.funçãoRemoveCaracteres();

    hoje = pegarDatadeHoje.funçãoRemoveCaracteres();

    //idade aproximada igual a ano hoje menos ano nascimento

    i = hoje[0] - nascimento[0];

    //se mes de nascimento é maior que mes atual
    // usuario não fez anivesario ainda
    // idade aproximada (menos 1)
    if (nascimento[1] > hoje[1]) {
        i--;
    }

    //se mes de nascimento é o mesmo que mes atual e o dia de nascimento é maior que o dia atual
    // usuario nao fez aniversario ainda

    if (nascimento[1] == hoje[1] && nascimento[2] > hoje[2]) {
        i--;
    }
    return i;
}

var idade = getIdade()


//JAVASCRIPT
function getIdade() {

    var nascimento = dataNasc;
    nascimento = nascimento.split('-');

    hoje = moment().format('YYYY/MM/DD').split('/');
    b = hoje[0] - nascimento[0];

    if (nascimento[1] > hoje[1]) {
        b--;
    }

    if (nascimento[1] == hoje[1] && nascimento[2] > hoje[2]) {
        b--;
    }
    return b;
}

var idade = getIdade()