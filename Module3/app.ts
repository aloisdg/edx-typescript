window.onload = () => {
    var el = document.getElementById('content');

    var firstname: string;
    var lastname: string;
    var fullname: string;

    firstname = 'joe';
    lastname = 'smith';
    fullname = firstname + " " + lastname;

    el.innerHTML += fullname;

    var x: string;
    var y: number;
    var a: string;

    a = 'nine';

    x = 'five';
    y = 7;
    a = x + y;

    el.innerHTML += " " + a;


    
};