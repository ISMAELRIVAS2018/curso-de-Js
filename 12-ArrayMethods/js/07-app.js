const meses = ['Enero', 'Febero', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat
const resultado = meses.concat (meses3, meses2);

console.log(resultado)

// spread operator
const resultado2 = [...meses2, ...meses3, ...meses];
console.log(resultado2)