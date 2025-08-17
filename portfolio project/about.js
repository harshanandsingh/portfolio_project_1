var tablinks = document.getElementsByClassName("tab-links");
console.log(tablinks);
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tab of tablinks){
        tab.classList.remove("active-link");
    }
    for(tab of tabcontents){
        tab.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}