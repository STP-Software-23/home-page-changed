$(document).ready(function(){
    var error = false;  //to know if there is an error or not

    // Validate the Email
    $('#email').blur(function(){
        var e = $(this).val();
        if(!emailValidation() && e)
            notValid("Email", "#email", " Is Not Valid! ");    
    });

    // validate the subject 
    $("#subject").blur(function(){
        var contentS = $(this).val();
        if(contentS.length < 3 && content)
            notValid("Subject", "#subject", " Should Contain at Least 3 Characters");
    });

    // validate the message
    $("#message").blur(function(){
        var contentM = $(this).val();
        if(contentM.length < 10 && content)
            notValid("Message", "#message", " Should Contain at Least 10 Characters");
    });

    // remove any error msg once it is solved & check the button
    $('form.php-email-form :input').on('input', function(){
        var inputId = $(this).attr('id');

        switch(inputId){
            case 'email':
                if(emailValidation())
                    deleteErrorMsg("Email");
                break;

            case 'subject':
                var contentS = $(this).val();
                if(contentS.length >= 3)
                    deleteErrorMsg("Subject"); 
                break;   

            case 'message':
                var contentM = $(this).val();
                if(contentM.length >= 10)
                    deleteErrorMsg("Message");
                break;
            }

        bttnAvailable();                
    });

    // ***************************************FUNCTIONS***************************************
    // show an error msg if the input is invalid
    function notValid(name, elementId, msg){
        if(!$(".h"+name).length){
            var html = '<h6 class = "h'+ name +' "> This ' + name + msg + ' </h6>';
            $(html).insertAfter(elementId);    
        }
        error = true;
        bttnAvailable(); 
    }

    // Remove that error msg if the input became valid
    function deleteErrorMsg(name){
        $(".h" + name).remove();
        error = false; 
    }

    // Comparing the expression with the input if it has the format of an email
    function emailValidation() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var e = $('#email').val();
    
        if (re.test(e))
            return true;
            
        else {
            if (e)
                return false;
        }
    }

    // validate the button
    function bttnAvailable(){
        var fieldsNumbers = 0;  //the number of input fields in the form
        var filledFields = 0;  //the number of filled input fields in the form

        // check if each input in the form is not empty & count the number of i/p fields
        $("form.php-email-form :input:not(button)").each(function(){
            if(!$(this).val()) filledFields = 0;
            else filledFields++;
            if($(this).next().length) error = true;   
            fieldsNumbers++;
        });

        if(filledFields == fieldsNumbers && !error){
            $(".btn_sbmt").attr("disabled", false);
            $(".btn_sbmt").css("cursor", "pointer");
        } else {
            $(".btn_sbmt").attr("disabled", true);
            $(".btn_sbmt").css("cursor", "not-allowed");
        }
    }
});

// Disabling the submit button by default
$(".btn_sbmt").attr("disabled", true);
$(".btn_sbmt").css("cursor", "not-allowed");


