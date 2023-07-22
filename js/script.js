/* 
CRUD
C = Done 
R = Done
U = Done
D = Done
* Local storage = Done

Optional = Input validation

*/

window.addEventListener('load', () => {
    if (localStorage.getItem('item')) {
        mainArr = JSON.parse(localStorage.getItem('item'));
        displayContent();
    }
});

let bookmarkNameInput = document.querySelector('.bookmarkname');
let bookmarkSiteInput = document.querySelector('.bookmarksite');
let mainInputs = document.querySelectorAll('.main-input');

let submitBtn = document.querySelector('.submit');
let updateBtn = document.querySelector('.update-content')
let elementsContainer = document.querySelector('.elements-container');
let tableContainer = document.querySelector('.table-container');



console.log(mainInputs);

let mainArr = [];
let i;
let valid;



function storeData() {
    localStorage.setItem('item', JSON.stringify(mainArr));
}



// Add element

function addElement() {
    let Bname = bookmarkNameInput.value;
    let Bsite = bookmarkSiteInput.value;

    let info = {
        Bname: Bname,
        Bsite: Bsite
    }

    mainArr.push(info);
    bookmarkNameInput.value = '';
    bookmarkSiteInput.value = '';
    displayContent();
    storeData();

}

// Display the content

function displayContent() {

    let content = '';

    for (i = 0; i < mainArr.length; i++) {
        content +=
            `
            <tr>
            <th scope="row">${i + 1}</th>
            <td>${mainArr[i].Bname}</td>
            <td><a class="visit" target="_blank" href=${mainArr[i].Bsite}><i class="fa-solid fa-eye"></i> Visit</a> </td>
            <td>
            <button onclick="deleteElement(${i})" class="delete bg-danger text-white"><i class="fa-solid fa-trash"></i> Delete</button>
            </td>

            <td>
            <button onclick="updateElement(${i})" class="update bg-success text-white"><i class="fas fa-edit"></i> Update</button>
            </td>
            </tr>
        `
    }

    tableContainer.innerHTML = content;

}



// === Delete

function deleteElement(index) {
    mainArr.splice(index, 1);
    displayContent();

    storeData();

}

// === Update

function updateElement(index) { // When we use the update button in the element

    submitBtn.classList.add('d-none');
    updateBtn.classList.remove('d-none');
    bookmarkNameInput.value = mainArr[index].Bname
    bookmarkSiteInput.value = mainArr[index].Bsite;


    updateBtn.onclick = function () {
        let x = bookmarkNameInput.value;
        let y = bookmarkSiteInput.value;

        let updatedInfo = {
            Bname: x,
            Bsite: y
        };



        submitBtn.classList.remove('d-none');
        updateBtn.classList.add('d-none');
        bookmarkNameInput.value = '';
        bookmarkSiteInput.value = '';


        mainArr.splice(index, 1, updatedInfo);


        displayContent();
        storeData();

    }
}








