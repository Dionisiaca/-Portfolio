$(document).ready(function () {
    $('.boton').click(function(e){

        let name = $('#name').val();
        let email = $('#email').val();
        let subject = $('#subject').val();
        let message = $('#message').val();
        let status = $('.status');

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            console.log('email is valid');
        }else{
            e.preventDefault();
            status.append('<p>Please enter a valid email</p>');
        }
    })
});
