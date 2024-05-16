let count =1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},2500);

function nextImage(){
    count++;
    if(count>4){
        count =1;
    }

    document.getElementById("radio"+count).checked = true;
}



ScrollReveal().reveal('.texto-cabecalho h3' ,{
    distance:'-90px',
    duration:1000,
});
ScrollReveal().reveal('.slider' ,{
    scale:0.1,
    duration:1000,
    
});
ScrollReveal().reveal('.texto-entrada-passeios h3' ,{
    delay:500,
    distance:'-90px',
    duration:1000,
    
});
ScrollReveal().reveal('.p1' ,{
    delay:800,
    distance:'290px',
    origin: 'left',
    duration:1000,
    
});
ScrollReveal().reveal('.p2' ,{
    delay:1000,
    distance:'290px',
    origin: 'left',
    duration:1000,
    
});
ScrollReveal().reveal('.abertura-servicos h2' ,{
    delay:200,
    distance:'-90px',
    duration:1000,
    
});

ScrollReveal().reveal('.servicos-oferecidos',{
    delay:800,
    distance:'290px',
    origin: 'left',
    duration:1000,
});  
ScrollReveal().reveal('.localizacao h3',{
    delay:800,
    distance:'-90px',
   
    duration:1000,
});  
ScrollReveal().reveal('.localizacao iframe',{
    delay:900,
    scale:0.1,
    duration:1000,
});  
 