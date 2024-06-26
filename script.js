let data = [];

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
        return ;
    }

    const entry = { name, age };
    data.push(entry);

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    console.log(data);
    updateTable();
    
}

function updateTable(){
   let k = ''
   data.map((item) =>{
    k += "<tr>"
    k += "<td>" + item.name + "</td>"
    k += "<td>" + item.age + "</td>"
    k += "</tr>";
   })
   document.getElementById("table-body").innerHTML = k;
}














