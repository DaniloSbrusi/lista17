import _ from 'lodash';

console.log('Métodos da biblioteca lodash');
console.log('============================');
console.log(_.camelCase('Olá Mundo!'));

console.log('------');

const animais = ['cachorro', 'gato', 'passarinho'];
const sons = ['late', 'mia', 'canta'];

//  Método zip
for (const elemento of _.zip(animais, sons)) {
    console.log(elemento[0], elemento[1]);
}

console.log('------');

//  Unpacking / destructuring
for (const [animal, som] of _.zip(animais, sons)) {
    console.log(animal, som);
}

console.log('------');

const objetos = _.zipObject(animais, sons);
console.log(objetos);