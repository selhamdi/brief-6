
function validationNom()
{
    var valid;
    var element=$("#nom");
    var reg=new RegExp("^[a-zA-Z ]{3,}$");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function validationPrenom()
{
    var valid;
    var element=$("#prenom");
    var reg=new RegExp("^[a-zA-Z ]{3,}$");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function validationDateNaissance()
{
    var valid;
    var element=$("#inscriptionDateNaissance");
    var date=new Date(element.val()).getFullYear();
    var d = new Date().getFullYear();
    if((d-date)>18)
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function validationCin()
{
    var valid;
    var element=$("#inscriptionCin");
    var reg=new RegExp("^[a-zA-Z]{1,2}[0-9]{4,7}$");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function validationEmail()
{
    var valid;
    var element=$("#inscriptionEmail");
    var reg=new RegExp("^[a-zA-Z0-9._-]{5,}\@[a-z]{5,7}\.[a-z]{2,3}$");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function validationMotDePass()
{
    var valid;
    var element=$("#pwd");
    var reg=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function confirmationMotDePass1()
{
    if(validationMotDePass())
    {
        var valid;
        var element1=$("#pwd");
        var element=$("#pwd2")
        if(element.val()==element1.val())
        {
            valid=true;
            element.css("border-color", "#2893DA");
        }
        else
        {
            valid=false;
            element.css("border-color", "red");
        }
        return valid;
    }
}



function validationConnectionEmail()
{
    var valid;
    var element=$("#ConnectionEmail");
    var reg=new RegExp("^[a-zA-Z0-9._-]{5,}\@[a-z]{5,7}\.[a-z]{2,3}$");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function validationConnectionMotDePass()
{
    var valid;
    var element=$("#ConnectionMotDePass");
    var reg=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
// function inscriptionToConnection()
// {
//     $(".formInscription").css("transform" , "rotateY(90deg)");
//     setTimeout(
//         function() 
//         {
//             $(".formConnection").css("transform" , "rotateY(0deg)");
//         }, 2000);
    
// }

// function connectionToInscription()
// {
//     $(".formConnection").css("transform" , "rotateY(90deg)");
//     setTimeout(
//         function() 
//         {
//             $(".formInscription").css("transform" , "rotateY(0deg)");
//         }, 2000);
    
// }

$('#btnRegister').click(() => {
    if(validationCin() && validationNom() && validationPrenom() && validationDateNaissance() && validationEmail() && validationNumeroDeTelephone() && validationMotDePass())
    {
        $.post('/jsonSave', {
            class:"Client",
            data:{
                cin: $('#cin').val(),
                nom: $('#nom').val(),
                prenom: $('#prenom').val(),
                dateN: $('#DateNaissance').val(),
                email: $('#email').val(),
                motPass: $('#pwd').val()
            }
        }, (response) => {
            if(response=="true")
            {
                sessionStorage.setItem("email", $('#email').val());
                console.log(sessionStorage.getItem("email"));
                document.location.href = '/renseignement';
            }
        });
    }
});
$('#btnconnection').click(() => {
    if(validationConnectionEmail() && validationConnectionMotDePass())
    {
        $.post('/jsonConnection', {
            data:{
                email: $('#ConnectionEmail').val(),
                motPass: $('#ConnectionMotDePass').val()
            }
        }, (response) => {
                if(response=="true")
                {
                    sessionStorage.setItem("email", $('#ConnectionEmail').val());
                    console.log(sessionStorage.getItem("email"));
                    document.location.href = '/renseignement';
                }
                else
                {
                    alert("email ou mot de passe est incorrect");
                }
        });
    }
});