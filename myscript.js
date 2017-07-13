function toggle1() {
 if( document.getElementById("hidethis1").style.display=='none' ){
   document.getElementById("hidethis1").style.display = 'table-row';
     $( "#hidethis1" ).slideDown( "slow", function() {
    // Animation complete.
  }); // set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis1").style.display = 'none';
 }
}

function toggle2() {
 if( document.getElementById("hidethis2").style.display=='none' ){
   document.getElementById("hidethis2").style.display = 'table-row'; // set to table-row instead of an empty string
 }else{
   document.getElementById("hidethis2").style.display = 'none';
 }
}

