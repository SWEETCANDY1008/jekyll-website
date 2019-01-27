function hide_category(ID) {
    var con = document.getElementById(ID);
    if(con.style.display == 'none') {
       con.style.display = 'block';
    } else {
        con.style.display = 'none';
    }
}

function hide_sidebar(ID) {
    var con = document.getElementById(ID);
    var test = document.getElementsByClassName('page-content');
    var con1 = document.getElementById('sidebar-wrapper');
    var con2 = document.getElementById('sidebar-wrapper').getElementsByTagName('div')[0];
    var con3 = document.getElementById('sidebar-wrapper').getElementsByTagName('div')[0].getElementsByTagName('a')[0];
    
    var button = document.getElementById('sidebar-wrapper').getElementsByTagName('div')[0].getElementsByTagName('button')[0];


    if(con.style.display == 'none') {
       con.style.display = 'block';
       test[0].style.marginLeft = "450px"
       con1.style.width = '350px'
       con2.style.width = '350px'
       con3.style.display = 'block'

       con1.style.borderRight = "solid rgb(126, 126, 126)"
       con1.style.borderTop = "solid rgb(126, 126, 126)"

       con2.style.borderRight = "solid #7e7e7e"
       con2.style.borderBottom = "solid #7e7e7e"
       button.innerHTML = 'off'

    } else {
        con.style.display = 'none';
        test[0].style.marginLeft = "100px";
        con1.style.width = '50px'
        con2.style.width = '50px'
        con3.style.display = 'none'

        con1.style.borderRight = "none"
        con1.style.borderTop = "none"

        con2.style.borderRight = "none"
        con2.style.borderBottom = "none"
        button.innerHTML = 'on'
    }
}


// 리스트 색상 바꾸려면 클릭된걸 액티브로 바꾸고 액티브 된거 색칠

function change_list_color() {
    $(this).addClass("selected").css("color","#ff0000");
    $(this).siblings().removeClass("selected").css("color","#000000");
}




