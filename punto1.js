function secret(arreglo, funcion, clave)
{
    for (let i = 0; i < arreglo.length; i++){

        arreglo[i] = funcion(arreglo[i], clave)
    }
    return arreglo;
}

function encrypt(num, clave)
{
    return num + clave;
}

function decrypt(num, clave)
{
    return num - clave;
}