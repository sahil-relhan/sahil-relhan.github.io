var ID;
//var article_id;
var value;
var to_hide_1;
var to_hide_2;
var to_show;
var to_show_displayProp;
var to_hide_1_displayProp;
var to_hide_2_displayProp;
/*var container_display;
var container_displayProp;
*/
var anchors = document.querySelectorAll('.anchor'); // all anchors in an array
for (var i=0; i<anchors.length; i++) {
    anchors[i].addEventListener('click', handler);
}
function handler() {
 ID = this.id;
 //console.log(ID);
   toggle(ID);
}// handler

var tb1 = document.getElementById("tb1");
var tb2 = document.getElementById("tb2");
var tb3 = document.getElementById("tb3");
var label_tb1 = document.getElementById("dayOne");
var label_tb2 = document.getElementById("dayTwo");
var label_tb3 = document.getElementById("dayThree");

function toggle() {
     
     if(ID === "tab1") {
        tb1.style.display = 'block';  
        tb2.style.display = 'none';  
        tb3.style.display = 'none'; 
   
    label_tb1.style.backgroundColor = '#fff';
  label_tb2.style.backgroundColor = '#90CAF9';
  label_tb3.style.backgroundColor = '#90CAF9';
  
 } // if
     else if (ID === "tab2") {
        tb2.style.display = 'block';
        tb1.style.display = 'none';  
        tb3.style.display = 'none'; 
  
    label_tb2.style.backgroundColor = '#fff';
  label_tb1.style.backgroundColor = '#90CAF9';
  label_tb3.style.backgroundColor = '#90CAF9';

} // else if
     
     else if(ID == "tab3") {
         tb3.style.display = 'block';
         tb2.style.display = 'none';  
         tb1.style.display = 'none';  
   
  label_tb3.style.backgroundColor = '#fff';
  label_tb1.style.backgroundColor = '#90CAF9';
  label_tb2.style.backgroundColor = '#90CAF9';
  
   }
 // else

   //console.log(value);

}