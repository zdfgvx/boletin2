


let materias = document.querySelectorAll('.materias');
console.log(materias)

for(let i= 0; i < materias.length; i++){

let materia = materias[i];

let primeiroTri = materia.querySelector('.primeiroTri');


let segundoTri = materia.querySelector('.segundoTri');


let terceiroTri = materia.querySelector('.terceiroTri');

let media = materia.querySelector('.media')

//pega o valor do imput

function pegarValor(){
    
    let nota = document.getElementById("meuImput").value;
    console.log(pegarValor);
    
}

//----------------------------------------------------//

let notaUmTri = parseFloat(primeiroTri.textContent);
console.log(notaUmTri);

let notaDoisTri = parseFloat(segundoTri.textContent);
console.log(notaDoisTri);

let notaTresTri = parseFloat(terceiroTri.textContent);
console.log(notaTresTri)

let mediaFinal = (notaUmTri + notaDoisTri + notaTresTri) / 3;
console.log(mediaFinal.toFixed(2))

//----------------------------------------------------//

media.textContent = mediaFinal.toFixed(2);

if (mediaFinal >= 6 ){
    media.style.color = 'blue';
}
else{
    media.style.color = 'red';
}

}


