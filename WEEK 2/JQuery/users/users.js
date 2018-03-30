$(document).ready(function(){
    //alert('You are now working with JQuery!')
    $('h2').click(function(){
        alert('hi');
    })
    $('form').submit(function(){
        //alert('you are about to submit form');
        $("#boss table").append("<tr>\
    <td>" + $('#fname').val() + "</td>\
    <td>" + $('#lname').val() + "</td>\
    <td>" + $('#email').val() + "</td>\
    <td>" + $('#contactnr').val() + "</td>\
    </tr>");
    //return false;

    //document.getElementById("userForm").reset ();
    return false;
    })
    
})