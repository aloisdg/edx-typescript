window.onload = () => {

    var firstname: string;
    var lastname: string;
    var fullname: string;

    firstname = 'joe';
    lastname = 'smith';
    fullname = firstname + " " + lastname;

    var e: Null;

    var el = document.getElementById('content');
    el.innerHTML += fullname;
};