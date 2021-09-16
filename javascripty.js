function salarioTotal(nome, salarioFixo, total, porcentagem) {
    let comissao = parseFloat(total * (porcentagem / 100));
    let salario = parseFloat(salarioFixo + comissao);
  
    return `O salário do vendedor ${nome} foi de R$ ${salario.toFixed(2)} no final do mês, sendo ${salarioFixo} de fixo + ${comissao} de comissao`;
}
  
console.log(salarioTotal('João', 1400, 7000, 15));
  
  
  
  
  
  






