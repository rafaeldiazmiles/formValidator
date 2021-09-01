/*
function quitar(l, e) { retorne todos los elementos de l que no estan en e }
for x in l : encontre = false for w in e if (x === w) encontre = true.... afuera if not encontre agrego x al resultado
*/


function quitar(l, e){
    let listaRetorno = [];
    for (let x = 0; x < l.length; i++) { //recorre l 
        let encontre = false;//establece en false para cada iteracion en la lista l
        const elementInL = l[x].name;//toma posicion del iterador en l para recorrer e en busca de coincidencia
        let i = 0;
        while ( i < e.length && !encontre ) { //utilizo el booleano para cortar el for si encuentre coincidencia... en clase me enseñaron a utilizar while en este caso 
            const elementInE = e [i].name;//toma posicion del iterador en e, recorre e
            if(elementInL === elementInE){//los compara
                encontre === true;// si encuentra coincidencia el booleano se vuelve true
            }
            i++;
        }
        if(!encontre){ // si encontro no entra, si no encontro pushea el nuevo elemento, vuelve al primer for y repite con el siguiente elementto de l
            listaRetorno.push(elementInL);
        }
    }
    return listaRetorno;
}