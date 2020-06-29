 

    $(document).ready(function(){
        console.log("Reservation.js");
        $("#but_submit2").click(function(){
            var taillpillow = $("#taillpillow").val();
            var nom = $("#nom").val();
            var nbr = $("#nbr").val();
             if( taillpillow != "" && nom != "" && nbr != "" ){
                 $.ajax({
                    url:'/Reservation',
                    type:'post',
                    data:{taillpillow,nom,nbr},
                    success:function(response){
                        if(response.request){
                                        
                                    
                                        console.log(response)
                                        window.location.href="index.html"; 
           

      
    }else{
     
        window.location.href="Reservation.html"; 

    }


},
error:function(){
    window.location.href="Reservation.html"; 
}
});
}else{
    window.location.href="Reservation.html"; 
}
});   
}); 