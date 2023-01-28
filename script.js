document.getElementById('create').onclick = function() {
    
    var char = 'abcdefghijklmnopqrstuvwxyz';
    var pass = '';
    
    var caplet = document.getElementById('caplet').checked;
    var number = document.getElementById('number').checked;
    var underscore = document.getElementById('underscore').checked;
    var specchar = document.getElementById('specchar').checked;

    var title = document.getElementById('text');

    (caplet) ? char += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : null;
    (number) ? char += '0123456789' : null;
    (underscore) ? char += '____' : null;
    (specchar) ? char += '!@#$%^&*().' : null;

    for (let i = 0; i < 15; i++) {
        pass += char[Math.floor(Math.random() * char.length)];
    }

    title.innerHTML = pass;

};
