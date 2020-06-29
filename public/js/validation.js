 

    $(document).ready(function(){
        console.log("validation.js");
        $("#but_submit1").click(function(){
            var username = $("#username").val();
            var email = $("#email").val();
            var password = $("#password").val();
            var password2 = $("#password2").val();

             if( username != "" && email != "" && password != "" && password2 != "" ){
                 $.ajax({
                    url:'/validation',
                    type:'post',
                    data:{username,email,password},
                    success:function(response){
                        if(response.request){
                                        
                                    
                                        console.log(response)
                                        
                                        window.location.href="index.html"; 
           

      
                         }else{
       
                        window.location.href="validation.html"; 

                        }


                                             },
error:function(){
    window.location.href="validation.html"; 
}
});
}else{
    window.location.href="validation.html"; 
}
});   
}); 