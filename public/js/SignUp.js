$(document).ready(function(){
    $("#but_submit2").click(function(){
        var username = $("#name").val();
        var password = $("#pass").val();
        var email = $("#email").val();
        var cin = $("#cin").val();
        var DateDeNaissance = $("#DateDeNaissance").val();
        

        if( username != "" && password != "" && email !="" && cin != "" && DateDeNaissance !="" ){
             $.ajax({
                url:'/SignUp',
                type:'post',
                data:{username,password,email,cin,DateDeNaissance},
                success:function(response){
                    if(response.request){
                                  window.location.href="accueil.html"; 
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