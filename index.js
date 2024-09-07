const fs = require('fs');

const array = [2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false]


const funcion = (array, condicion) => {

    let retorno

    try {
        let arrayUnico = []
        if(condicion != null && condicion ==="string" ||condicion ==="boolean" ||condicion ==="number"){
            const nuevoArray = array.filter(e => typeof e === condicion)
        
             arrayUnico = [...new Set(nuevoArray)]

            arrayUnico.sort((a,b) => {

                if(typeof a ==="string" && typeof b ==="string"){
                    return  a.localeCompare(b)
                }
                return a - b
            })
      
        
        }else{
            console.log("ESE TIPO DE DATO NO EXISTE")
        }

        
        retorno = arrayUnico



    } catch (error) {
        console.log("ERROR: ", error.message)
        retorno = []
    }

    return retorno
}


const arrayFinal = funcion(array, "number")

console.log(arrayFinal)

fs.promises.writeFile("archivo.txt", JSON.stringify(arrayFinal),"utf-8")
.then(()=>{
    console.log("ARCHIVO ESCRITO CORRECTAMENTE")
})
.catch(err=>{
    console.log("ERROR AL ESCRIBIR EL ARCHIVO",err)
})
