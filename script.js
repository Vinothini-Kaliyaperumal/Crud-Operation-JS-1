// let data = [];
// let editIndex;

// function login() {
//     const name = document.getElementById('name').value.trim();
//     const age = document.getElementById('age').value.trim();
//     const error1 = document.getElementById('error1');
//     const error2 = document.getElementById('error2');

//    let errorMessage = '';

//     if (name === "") {
//         errorMessage = 'Name is required!';
//         error1.textContent = errorMessage;
//     }else {
//         error1.textContent = '';
//     }

//     if (age === "") {
//         errorMessage = 'Age is required!';
//         error2.textContent = errorMessage;
//     }else {
//         error2.textContent = '';
//     }

//     if (errorMessage) {
//         return ;
//     }

//     const entry = { name, age };

//     if(editIndex >= 0){
//         data[editIndex] = entry;
//         // editIndex = -1;
//     } else{
//     data.push(entry);
//     }

//     document.getElementById('name').value = '';
//     document.getElementById('age').value = '';
//     console.log(data);
//     updateTable();
// }

// function updateTable(){
//    let k = '';
//    data.forEach((item,index) =>{
//     k += "<tr>";
//     k += "<td>" + item.name + "</td>";
//     k += "<td>" + item.age + "</td>";
//     k += '<td><button type="button" class="et" onclick="edit(' + index + ')">Edit</button> <button type="button" class="de" onclick="deleteEntry(' + index + ')">Delete</button></td>';
//     k += "</tr>";
//    })
//    document.getElementById("table-body").innerHTML = k;
// }

// function edit(index) {
//     const entry = data[index];
//     document.getElementById('name').value = entry.name;
//     document.getElementById('age').value = entry.age;
//     editIndex = index;
//   }

//   function deleteEntry(index){
//     data = data.filter((entry, v) => v !== index);
//     updateTable();
//   }
  
//   delete splice method 
//   function deleteEntry(index) {
//     data.splice(index, 1);
//     updateTable();
//   }


let data = [];
let editIndex = -1;
//   document.addEventListener('DOMContentLoaded', loadDataFromLocalStorage);
function login() {
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const error1 = document.getElementById('error1');
  const error2 = document.getElementById('error2');

  let errorMessage = '';

  if (name === "") {
    errorMessage = 'Name is required!';
    error1.textContent = errorMessage;
  }else {
            error1.textContent = '';
        }

  if (age === "") {
    errorMessage = 'Age is required!';
    error2.textContent = errorMessage;
  }else {
            error2.textContent = '';
         }

  if (errorMessage) {
    return;
  }

  const entry = { name, age };

  if (editIndex >= 0) {
    data[editIndex] = entry;
    editIndex = -1;
  } else {
    data.push(entry);
  }

  document.getElementById('name').value = '';
  document.getElementById('age').value = '';

  saveToLocalStorage();
  updateTable();
}

function saveToLocalStorage() {
  localStorage.setItem('data', JSON.stringify(data));
}

function loadDataFromLocalStorage() {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      data = JSON.parse(savedData);
      updateTable();
    }
  }

function updateTable() {
  let k = "";
  data.forEach((item, index) => {
    k += "<tr>";
    k += "<td>" + item.name + "</td>";
    k += "<td>" + item.age + "</td>";
    k += '<td><button type="button" id="et" onclick="edit(' + index + ')">Edit</button> <button type="button" id="de" onclick="deleteEntry(' + index + ')">Delete</button></td>';
    k += "</tr>";
  });

  document.getElementById("table-body").innerHTML = k;
}

function edit(index) {
  const entry = data[index];
  document.getElementById('name').value = entry.name;
  document.getElementById('age').value = entry.age;
  editIndex = index;
}

function deleteEntry(index) {
  data = data.filter((entry, i) => i !== index);
  saveToLocalStorage();
  updateTable();
}





