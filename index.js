const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const ul = document.getElementById('ul');
const li = document.getElementsByTagName('li');

function opentab(tabname){
    for(tablink of tablinks){
       tablink.classList.remove("active-link"); 
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function Show(){
    ul.style.right = '0';
}

function Hide(){
    ul.style.right = '-200px';
}

