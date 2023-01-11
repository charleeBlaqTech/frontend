
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn-del')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.action')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Get the modal
var modal = document.getElementById("popup");

// Get the button that opens the modal
var btn = document.getElementById("delacct");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function sidebar(){
  document.getElementById('bottomLeft').style.left="0";
  document.getElementById('navButton').style.display="none";
  document.getElementById('closeBtn').style.display="block";
  document.getElementById('bottomLeft').style.width="70%";
}

function sidebarClose(){
  document.getElementById('bottomLeft').style.left="-70%";
  document.getElementById('navButton').style.display="block";
  document.getElementById('closeBtn').style.display="none";
}

function addrow(){
  const table3 = document.querySelector(".table3");
  table3.innerHTML += `
  <tr>
      <td><input type="text" style="width: 20px;"></td>
      <td><input type="text" style="width: 100%;"></td>
      <td><input type="text" style="width: 100%;"></td>
  </tr>
  `;
}


function addrow1(){
  const table5 = document.querySelector(".table5");
  table5.innerHTML += `
  <tr>
      <td><input type="text" style="width: 100%;"></td>
      <td><textarea style="width: 100%; height:50px;"></textarea></td>
      <td><textarea style="width: 100%; height:50px;"></textarea></td>
      <td><textarea style="width: 100%; height:50px;"></textarea></td>
      <td><textarea style="width: 100%; height:50px;"></textarea></td>
      <td><textarea style="width: 100%; height:50px;"></textarea></td>
  </tr>
  `;
}

function addrow2(){
  const table6 = document.querySelector(".table6");
  table6.innerHTML += `
  <tr>
      <td><input type="text" style="width: 20px;"></td>
      <td><input type="text" style="width: 100%;"></td>
      <td><input type="text" style="width: 100%;"></td>
      <td><input type="text" style="width: 100%;"></td>
      <td><input type="text" style="width: 100%;"></td>
  </tr>
  `;
}

function addrow3(){
  const table7 = document.querySelector(".table7");
  table7.innerHTML += `
  <tr>
    <td><input type="text" style="width: 20px;"></td>
      <td><input type="text" style="width: 100%;"></td>
      <td><input type="text" style="width: 100%;"></td>
      <td><input type="text" style="width: 100%;"></td>
      <td><input type="text" style="width: 100%;"></td>
      <td><input type="text" style="width: 100%;"></td>
  </tr>
  `;
}

function addrow4(){
  const table5 = document.querySelector(".table5");
  table5.innerHTML += `
  <tr>
      <td><input type="text" style="width: 100%;"></td>
      <td><textarea style="width: 100%; height:50px;"></textarea></td>
      <td><textarea style="width: 100%; height:50px;"></textarea></td>
      <td><textarea style="width: 100%; height:50px;"></textarea></td>
      <td><textarea style="width: 100%; height:50px;"></textarea></td>
      <td><textarea style="width: 100%; height:50px;"></textarea></td>
  </tr>
  `;
}
