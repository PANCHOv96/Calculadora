export default function calcular(cadena){
    var resultado = [];
    for(var i=0;i<cadena.length;i++){
        if(cadena[i] === '(' || cadena[i] === ')'){
            resultado.push(cadena[i])
        }
    }
    var contador = [0,0];
    resultado.forEach(x =>{
        if(x === "("){
            contador[0] = contador[0] + 1
        }else{
            contador[1] = contador[1] + 1
        }
    })
    if(resultado.length === 0 || (resultado[0] === '(' && (contador[0]===contador[1]))){
        return estructurar(cadena)
    }else{
        return 'Error'
    }
}

function estructurar(cadena){
    var cadenaFinal = ''
    while(cadena.includes('(')){
        var cadenaEnviar = '';
        cadenaFinal = cadenaFinal + cadena.slice(0,cadena.indexOf('('));
        if(cadenaFinal[cadenaFinal.length-1] !== '-' && cadenaFinal[cadenaFinal.length-1] !== '+'){
            cadenaFinal = cadenaFinal + '*'
        }
        if(!cadena.includes(')')){
            cadenaEnviar = cadena.slice(cadena.indexOf('(')+1,cadena.length)
            cadena = ''
        }else{
            cadenaEnviar = cadena.slice(cadena.indexOf('(')+1,cadena.indexOf(')'))
            cadenaEnviar = cadenaEnviar === '' ? '0' : cadenaEnviar
            cadena = cadena.slice(cadena.indexOf(')')+1,cadena.length)
            if(cadena.length > 2 && cadena[0] != '-' && cadena[0] != '+'){
                cadenaFinal = cadenaFinal + '*'
            }
        }
        var resultado = estructurar(cadenaEnviar)
        cadenaFinal = cadenaFinal + resultado
    }
    cadenaFinal = cadenaFinal + cadena
    return sumar(cadenaFinal !== '' ? cadenaFinal : cadena)
}

function sumar(cadena){
    var arreglo = eliminarSimbolosDemas(cadena).split('+');
    var resultado = arreglo.reduce((acumulador,elemento) => acumulador + tipoOperaciones(elemento) , 0)
    return resultado
}

function eliminarSimbolosDemas(cadena){
    if(cadena.includes('+-') || cadena.includes('-+') || cadena.includes('--') || cadena.includes('++')){
        cadena = cadena.replace('+-','-');
        cadena = cadena.replace('-+','-');
        cadena = cadena.replace('--','+');
        cadena = cadena.replace('++','+');
        cadena = eliminarSimbolosDemas(cadena);
    }
    return cadena
}

function tipoOperaciones(x){
    x = (x !== '')? x : '0'; 
    if(x.includes('-')){
        if(!(x.includes('*-') || x.includes('/-'))){
            return operaracion(x,'-') 
        }
    }
    if(x.includes('*')){
        return operaracion(x,'*')
    }
    if(x.includes('/')){
        return operaracion(x,'/')
    }
    return parseFloat(x)
}

function operaracion(cadena,tipo){
    var resultado = cadena.split(tipo)
    var ac = tipoOperaciones(resultado.shift());
    resultado = resultado.reduce((acumulador,elemento)=> {
        var cadenaNumero = elemento
        if(elemento.includes('-') || elemento.includes('/') || elemento.includes('*')){
            cadenaNumero = tipoOperaciones(elemento)
        }
        switch(tipo){
            case '*':
                return acumulador * parseFloat(cadenaNumero)
            case '/':
                return acumulador / parseFloat(cadenaNumero)
            default:
                return acumulador - parseFloat(cadenaNumero)
        }
    },ac);
    return resultado;
}
  
// var cadena = '1*2+(3-2)+(2+4)+(59+10+(2-10)-(5+2))';
// // var cadena2= "2-9+2-1-8*-32+8*32+8/32+8/-32"
// // var cadena2= "2-9+2-1-8*32+8*32+8/32-8/32"
// // var cadena2= "-8*-32/10"
// // var cadena2= "2--9"
// // var cadena2= "---9.3+0.3"
// console.log('RESULTADO',calcular(cadena));
