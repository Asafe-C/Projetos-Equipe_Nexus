function nomedomes(mes) {
    const meses = [
        'Seu mês é janeiro',
        'Seu mês é fevereiro',
        'Seu mês é março',
        'Seu mês é abril',
        'Seu mês é maio',
        'Seu mês é junho',
        'Seu mês é julho',
        'Seu mês é agosto',
        'Seu mês é setembro',
        'Seu mês é outubro',
        'Seu mês é novembro',
        'Seu mês é dezembro'
      ];
      if (mes >= 1 && mes <= 12) {
        return meses[mes-1];
      } else {
        return 'Número inválido. Insira um número entre 1 e 12.';
      }
    }
console.log(nomedomes(2))