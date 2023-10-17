//Array 
const pessoas = [
    { nome: "Cainã", idade: 20 },
    { nome: "Maria", idade: 25 },
    { nome: "Carlos", idade: 35 },
    { nome: "João", idade: 28 },
    { nome: "Charles", idade: 26 },
  ];
  
  //Filtrando nomes que começam com a primeira letra do meu nome
  const primeiraLetra = "C"; 
  const nomesComPrimeiraLetra = pessoas
    .filter(pessoa => pessoa.nome.charAt(0) === primeiraLetra)
    .map(pessoa => pessoa.nome);
  
  console.log(`Nomes que começam com ${primeiraLetra}: ${nomesComPrimeiraLetra}`);
  
  // Calculando a média das idades das pessoas com a primeira letra do meu nome
  const pessoasComPrimeiraLetra = pessoas.filter(pessoa => pessoa.nome.charAt(0) === primeiraLetra);
  if (pessoasComPrimeiraLetra.length > 0) {
    const totalIdades = pessoasComPrimeiraLetra.reduce((acumulador, pessoa) => acumulador + pessoa.idade, 0);
    const mediaIdades = totalIdades / pessoasComPrimeiraLetra.length;
    console.log(`Média das idades: ${mediaIdades.toFixed(2)}`);
  } else {
    console.log(`Não há pessoas com nomes que começam com ${primeiraLetra}.`);
  }
  