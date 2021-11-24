$(document).ready(function(e){
    
    $('#body').bind('keypress', function(e) {
        console.log(e.keyCode);

        if(e.keyCode==105){
            location.hash = '#' + "inicio";
        }
        
        if(e.keyCode==116){
            location.hash = '#' + "tecnologias";
        }

        if(e.keyCode==103){
            location.hash = '#' + "gobierno";
        }

        if(e.keyCode==110){
            location.hash = '#' + "noticias";
        }        

        if(e.keyCode==49){
            $('.carousel-control-prev').click();
        } 

        if(e.keyCode==50){
            $('.carousel-control-next').click();
        } 

    });    

});
