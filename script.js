const calculadoraDeMedia = () => {
    const form = document.querySelector('#form-atividade');
    const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando"> ';
    const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji trsite"> ';

    const atividades = [];
    const notas = [];

    const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
    const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

    const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

    let linhas = '';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        adicionaLinha();
        atualizaTabela();
        atualizaMediaFinal();
    });

    function adicionaLinha() {
        const inputNomeAtividade = document.querySelector('#nome-atividade');
        const inputNotaAtividade = document.querySelector('#nota-atividade');

        // Se atividade existir não vai adicionar no array
        // E vai enviar um alerta para o usuário
        if (atividades.includes(inputNomeAtividade.value)) {
            alert(`A atividade: ${inputNomeAtividade.value} já foi inserida.`);
        } else {

            atividades.push(inputNomeAtividade.value);
            notas.push(parseFloat(inputNotaAtividade.value));

            let linha = '<tr>';
            linha += `<td>${inputNomeAtividade.value}</td>`;
            linha += `<td>${inputNotaAtividade.value}</td>`;
            linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
            linha += '</tr>';

            linhas += linha;
            
        }
        
        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }

    function atualizaMediaFinal() {
        const mediaFinal = calculaMediaFinal();

        document.querySelector('#media-final-valor').innerHTML = mediaFinal.toFixed(2); // toFixed(2) --> Limita as casa decimais em 2
        document.querySelector('#media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

    }

    function calculaMediaFinal() {
        let somaDasNotas = 0;

        for (let i = 0; i < notas.length; i++) {
            somaDasNotas += notas[i];
        }

        return somaDasNotas / notas.length;
    }
}

calculadoraDeMedia();