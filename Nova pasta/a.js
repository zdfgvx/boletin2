




//for(let i= 0; i < materias.length; i++){

//let materia = materias[i];

//let primeiroTri = materia.querySelector('.primeiroTri');











function pegarValor(){

    //----------pega o valor do input ------//

    let primeiroTri = document.getElementById("primeiroTri").value;
    console.log(primeiroTri);
    
    let segundoTri = document.getElementById("segundoTri").value;
    console.log(segundoTri);

    let terceiroTri = document.getElementById("terceiroTri").value;
    console.log(terceiroTri);

    //---------transforma de text para numero o valor do input--------//

    let notaUmTri = parseFloat(primeiroTri);
    console.log(notaUmTri);

    let notaDoisTri = parseFloat(segundoTri);
    console.log(notaDoisTri);

    let notaTresTri = parseFloat(terceiroTri);
    console.log(notaTresTri)
    
    //-----------calcula a media----------------//
    
    let mediaFinal = (notaUmTri + notaDoisTri + notaTresTri) / 3;
    console.log(mediaFinal.toFixed(2))
    
    //-----------a media para o calculado----------//

    let media = parseFloat(document.querySelector('.media').textContent = (mediaFinal.toFixed(2)));
    console.log(media);

   //-----------muda a cor do valor dependendendo da nota--------//

    media.style.color = 'blue';

    }
//}







