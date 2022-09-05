/*fetch('FormulasX.wasm').then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    WebAssembly.instantiate(bytes)
  ).then(results => {
    console.log(results.instance.exports);
    console.log("mulSum(1,2,3): "+results.instance.exports.mulSum(1,2,3));
    console.log("divRes(1,8,2): "+results.instance.exports.divRes(1,8,2));
    console.log("mod(11,3): "+results.instance.exports.mod(11,3));
    console.log("inc(2): "+results.instance.exports.inc(2));
});*/
/*fetch('PruebasInt.wasm').then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    WebAssembly.instantiate(bytes)
  ).then(results => {
    console.log(results.instance.exports);
    console.log("getM1024(): "+results.instance.exports.getM1024());
    console.log("getM128(): "+results.instance.exports.getM128());
    console.log("getM60(): "+results.instance.exports.getM60());
    console.log("getM1(): "+results.instance.exports.getM1());
    console.log("get0(): "+results.instance.exports.get0());
    console.log("get64(): "+results.instance.exports.get64());
    console.log("get128(): "+results.instance.exports.get128());
    console.log("get10000011(): "+results.instance.exports.get10000011());
});*/
/*fetch('VariablesLocales.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => {
  console.log(results.instance.exports);
  console.log("func1(12,13):"+results.instance.exports.func1(12,13))
});*/
/*fetch('TablaDeVerdad.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => {
  let prueba = results.instance.exports;
  console.log(prueba);
  console.log("and(false,false): "+prueba.and(false,false));
  console.log("or(true,false): "+prueba.or(true,false));
  console.log("neg(false): "+prueba.neg(false));
  console.log("igual(1,1): "+prueba.igual(1,1));
  console.log("igual(1,2): "+prueba.igual(1,2));
  console.log("noIgual(1,1): "+prueba.noIgual(1,1));
  console.log("noIgual(1,2): "+prueba.noIgual(1,2));
  console.log("mayor(1,2): "+prueba.mayor(1,2));
  console.log("mayor(3,2): "+prueba.mayor(3,2));
  console.log("mayorIgual(1,2): "+prueba.mayorIgual(1,2));
  console.log("mayorIgual(2,2): "+prueba.mayorIgual(2,2));
  console.log("mayorIgual(3,2): "+prueba.mayorIgual(3,2));
  console.log("menor(1,2): "+prueba.menor(1,2));
  console.log("menor(3,1): "+prueba.menor(3,2));
  console.log("menorIgual(1,2): "+prueba.menorIgual(1,2));
  console.log("menorIgual(2,2): "+prueba.menorIgual(2,2));
  console.log("menorIgual(3,1): "+prueba.menorIgual(3,2));
});*/
/*fetch('IfThenElse.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => {
  let prueba = results.instance.exports;
  console.log(prueba);
  console.log("condicional1(10): "+prueba.condicional1(10));
  console.log("condicional2(12): "+prueba.condicional2(12));
  console.log("condicional3(14): "+prueba.condicional3(14));
});*/
/*fetch('IfAnidado.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => {
  let prueba = results.instance.exports;
  console.log(prueba);
  console.log("ifAnidado(3,5): "+prueba.ifAnidado(3,5));
  console.log("ifAnidado(4,6): "+prueba.ifAnidado(4,6));
  console.log("ifAnidado(4,5): "+prueba.ifAnidado(4,5));
});*/

/*fetch('For.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => { 
  let prueba = results.instance.exports;
  console.log(prueba);
  console.log("ciclo1(10): "+prueba.ciclo1(10));
  console.log("ciclo2(10,12): "+prueba.ciclo2(10,12));
});
fetch('While.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => { 
  let prueba = results.instance.exports;
  console.log(prueba);
  console.log("loop1(10,10): "+prueba.loop1(10));
  console.log("loop2(10,12,14): "+prueba.loop2(10,12,14));
});*/
/*fetch('LlamadaFunciones.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => { 
  let prueba = results.instance.exports;
  console.log(prueba);
  console.log("f1(12,4): "+prueba.f1(12,4));
  console.log("f1(4,10): "+prueba.f1(4,12));
});*/
/*fetch('Recursividad.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => { 
  let prueba = results.instance.exports;
  console.log(prueba);
  console.log("factorial(12): "+prueba.factorial(12));
});*/
/*fetch('IfAnidado.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => {
  console.log(results.instance.exports.ifAnidado(2,3));
});*/

fetch('Persona.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => {
  let prueba = results.instance.exports;
  console.log(prueba);
  
  prueba.setAnioNacimiento(1980);
  console.log("setAnioNacimiento(1980)");
  console.log("getAnioNacimiento(): "+prueba.getAnioNacimiento());

  prueba.setAnioInscripcion(1999);
  console.log("setAnioInscripcion(1999)");
  console.log("getAnioInscripcion(): "+prueba.getAnioInscripcion());

  prueba.setAltura(180);
  console.log("setAltura(180)");
  console.log("getAltura(): "+prueba.getAltura());

  console.log("mayorDeEdadInscripcion(): "+prueba.getMayorEdadInscripcion());
});

