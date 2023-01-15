
const tableEl = document.querySelector("table");


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
  if (!event.target.matches(".action")) {
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

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn-action')) {
    var dropdowns = document.getElementsByClassName("dropdown-content3");
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
  var table = document.getElementById("table3");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = `<td><input type="text" style="width: 20px; font-size: 15px;"></td>`
  cell2.innerHTML = `<td><input type="text" style="width: 100%; font-size: 15px;"></td>`
  cell3.innerHTML = `<td><input type="text" style="width: 100%; font-size: 15px;"></td>`
  cell4.innerHTML = `<td><button class="delete-row" id="deleterow" type="button"><i class="fa-solid fa-trash"></i></button></td>`
}


function addrow1(){
  var table = document.getElementById("table5");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  cell1.innerHTML = `<td><input type="text" style="width: 100%; font-size: 15px;"></td>`
  cell2.innerHTML = `<td><textarea style="width: 100%; height:50px; font-size: 15px;"></textarea></td>`
  cell3.innerHTML = `<td><textarea style="width: 100%; height:50px; font-size: 15px;"></textarea></td>`
  cell4.innerHTML = `<td><textarea style="width: 100%; height:50px; font-size: 15px;"></textarea></td>`
  cell5.innerHTML = `<td><textarea style="width: 100%; height:50px; font-size: 15px;"></textarea></td>`
  cell6.innerHTML = `<td><textarea style="width: 100%; height:50px; font-size: 15px;"></textarea></td>`
  cell7.innerHTML = `<td><button class="delete-row" id="deleterow" type="button"><i class="fa-solid fa-trash"></i></button></td>`
}

function addrow2(){
  var table = document.getElementById("table6");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5)
  cell1.innerHTML = `<td><input type="text" style="width: 20px; font-size: 15px;"></td>`
  cell2.innerHTML = `<td><input type="text" style="width: 100%; font-size: 15px;"></td>`
  cell3.innerHTML = `<td><input type="text" style="width: 100%; font-size: 15px;"></td>`
  cell4.innerHTML = `<td><input type="text" style="width: 100%; font-size: 15px;"></td>`
  cell5.innerHTML = `<td><input type="text" style="width: 100%; font-size: 15px;"></td>`
  cell6.innerHTML = `<td><button class="delete-row" id="deleterow" type="button"><i class="fa-solid fa-trash"></i></button></td>`
}

function addrow3(){
  var table = document.getElementById("table7");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  cell1.innerHTML = `<td><input type="text" style="width: 20px; font-size: 15px;"></td>`
  cell2.innerHTML = `<td><input type="text" style="width: 100%; font-size: 15px;"></td>`
  cell3.innerHTML = `<td><input type="text" style="width: 100%; font-size: 15px;"></td>`
  cell4.innerHTML = `<td><input type="text" style="width: 100%; font-size: 15px;"></td>`
  cell5.innerHTML = `<td><input type="text" style="width: 100%; font-size: 15px;"></td>`
  cell6.innerHTML = `<td><input type="text" style="width: 100%; font-size: 15px;"></td>`
  cell7.innerHTML = `<td><button class="delete-row" id="deleterow" type="button"><i class="fa-solid fa-trash"></i></button></td>`
}

// function addrow4(){
//   const table5 = document.querySelector(".table5");
//   table5.innerHTML += `
//   <tr>
//       <td><input type="text" style="width: 100%;"></td>
//       <td><textarea style="width: 100%; height:50px;"></textarea></td>
//       <td><textarea style="width: 100%; height:50px;"></textarea></td>
//       <td><textarea style="width: 100%; height:50px;"></textarea></td>
//       <td><textarea style="width: 100%; height:50px;"></textarea></td>
//       <td><textarea style="width: 100%; height:50px;"></textarea></td>
//   </tr>
//   `;
// }

function addrow4(){
  var table = document.getElementById("contacts");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = `<td><label><input type="checkbox"></label></td>`
  cell2.innerHTML = `<td contenteditable="true">Enter name</td>`
  cell3.innerHTML = `<td contenteditable="true">Enter email</td>`
}


// function deleteRow(e){
//   if(!e.target.classList.contains("delete-row")){
//     return;
//   }

//   var btnd = e.target;
//   btnd.closest("tr").innerHTML.remove();
// }

// tableEl.addEventListener("click", deleteRow);

$(document).ready(function() {

  $(document).on('click',".delete-row", function (e) {
   $(this).closest('tr').remove();
  });
});


// var index, tableD = document.getElementById('table3');
// for(var i = 1; i < tableD.rows.length; i++)
// {
//   tableD.rows[i].buttton.onclick = function()
//   {
//     var c = confirm("do you want to delete this row");
//     if(c === true)
//     {
//       index = this.parentElement.rowindex;
//       tableD.deleteRow(index);
//     }
//   };
// }