let a = 1;
let b = "2";

console.log(a+b);

// Arrays
const array = ['oi', 'tchau', 2, a];
array[10] = 'final';

console.log(array);

// Objects
const pessoa = {
  nome: 'Estevão',
  idade: 17,
  dataNascimento: '21/03/2007'
};
console.log(pessoa.nome);

pessoa.curso = 'Ciência de Dados';
console.log(pessoa.curso);

// Funções

function soma(a, b){
  return a+b;
};

const fatorial = function fatorial(n){
   return n < 2 ? 1 : n * fatorial(n - 1);
};

const fala_oi = () => console.log("oi");

console.log(soma(2, 4));
console.log(fatorial(5));
fala_oi();