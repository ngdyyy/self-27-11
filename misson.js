const nameInput = document.getElementById('name')
const addbtn = document.getElementById('addbtn')
const dutyTable = document.getElementById('dutyTable')
const dutyForm = document.getElementById('dutyForm')

let dutys = JSON.parse(localStorage.getItem('dutys')) || [];

dutyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const duty = {
        name: nameInput.value.trim()
    };

    dutys.push(duty);
    localStorage.setItem('dutys', JSON.stringify(dutys));
    dutyForm.reset();
    renderDutyTable();
});

function renderDutyTable() {
    dutyTable.innerHTML = '';
    dutys.forEach((d, index) => {
        dutyTable.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td class="${d.done ? 'done' : ''}">${d.name}</td>
        <td>
        <button class="deletebtn" onclick="deleteDuty(${index})">Delete</button>
        <button class="editbtn" onclick="editDuty(${index})">Edit</button>
        <button class="donebtn" onclick="doneDuty(${index})">Done</button>
        </td>
        </tr>
        `;
    });
};

function deleteDuty(index) {
    dutys.splice(index, 1);

    localStorage.setItem('dutys', JSON.stringify(dutys));
    renderDutyTable();
}

function editDuty(index) {
    const d = dutys[index];
    nameInput.value = d.name;

    addbtn.textContent = 'Update';
    addbtn.onclick = function(e) {
        e.preventDefault();

        d.name = nameInput.value;

        addbtn.textContent = 'Add';
        addbtn.onclick = null;

        localStorage.setItem('dutys', JSON.stringify(dutys));
        renderDutyTable();
        dutyForm.reset();
    };
};

function doneDuty(index) {
    dutys[index].done = !dutys[index].done;

    localStorage.setItem('dutys', JSON.stringify(dutys));
    renderDutyTable();
}

renderDutyTable();