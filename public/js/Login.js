 

    $(document).ready(function(){
        console.log("Login.js");
        $("#but_submit").click(function(){
            var username = $("#name").val();
            var password = $("#pass").val();
             if( username != "" && password != "" ){
                 $.ajax({
                    url:'/login',
                    type:'post',
                    data:{username:username,password:password},
                    success:function(response){
                        if(response.request){
                                        // password correct
                                        console.log(response)
                                        window.location.href="acceuil.html"; 
                                       

                        }else{
                            //password incorrect
                            $("#alert").css('visibility', 'visible');

                        }


                    },
                    error:function(){
                        $("#alert").css('visibility', 'visible');
                    }
                });
            }else{
                $("#alert").css('visibility', 'visible');
            }
        });   
      }); 