
fetch('MRUV.wasm').then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    WebAssembly.instantiate(bytes)
  ).then(results => {
    console.log(results.instance.exports.vfNd(1,2,3))
});

fetch('For.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => {
  console.log(results.instance.exports.ciclo1(5));
  console.log(results.instance.exports.ciclo2(1,2));
  
});

fetch('IfAnidado.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => {
  console.log(results.instance.exports.ifAnidado(2,3));
});
/*
fetch('IfThenElse.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => {
  console.log(results.instance.exports.codicional2(10));
});*/

fetch('TablaDeVerdad.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => {
  console.log(results.instance.exports.and(true,false));
});
fetch('While.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes)
).then(results => {
  console.log(results.instance.exports.loop2(1,2,4));
});