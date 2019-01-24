function hiding(ID) {
    var con = document.getElementById(ID);
    if(con.style.display == 'none') {
       con.style.display = 'block';
    } else {
        con.style.display = 'none';
    }   
}

function hiding2(ID) {
    var con = document.getElementById(ID);
    var test = document.getElementById('page-wrapper');
    if(con.style.display == 'none') {
       con.style.display = 'block';
       test.style.paddingLeft = "250px";
    } else {
        con.style.display = 'none';
        test.style.paddingLeft = "0px";
    }   
}