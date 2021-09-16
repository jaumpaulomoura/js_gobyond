function salarioTotal() {
    var vendedor = {
      nome: "joão",
      salarioFixo: 1400,
      totalVendas: 7000,
      comissao: 15
    };
  
    let comissao = parseFloat(vendedor.totalVendas * (15 / 100));
    let salario = parseFloat(vendedor.salarioFixo + comissao);
  
    return `O salário do vendedor ${vendedor.nome} foi de R$ ${salario.toFixed(2)} no final do mês, sendo ${vendedor.salarioFixo} de fixo + ${comissao} de comissao`;
  }
  
  console.log(salarioTotal());
  
  
  
  
  
  






