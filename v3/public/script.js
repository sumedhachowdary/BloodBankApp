let donors = [];

function addDonor() {
    let name = document.getElementById('name').value;
    let blood = document.getElementById('blood').value;

    donors.push({ name, blood });
    display(donors);
}

function searchDonor() {
    let key = document.getElementById('search').value.toLowerCase();

    let filtered = donors.filter(d => 
        d.blood.toLowerCase().includes(key)
    );

    display(filtered);
}

function deleteDonor(index) {
    donors.splice(index, 1);
    display(donors);
}

function display(data) {
    let list = document.getElementById('list');
    list.innerHTML = '';

    data.forEach((d, i) => {
        list.innerHTML += `
            <li>
                ${d.name} - ${d.blood}
                <button onclick="deleteDonor(${i})">Delete</button>
            </li>
        `;
    });
}