let donors = [];

function addDonor() {
    let name = document.getElementById('name').value;
    let blood = document.getElementById('blood').value;

    donors.push({ name, blood });
    display();
}

function display() {
    let list = document.getElementById('list');
    list.innerHTML = '';

    donors.forEach(d => {
        list.innerHTML += `<li>${d.name} - ${d.blood}</li>`;
    });
}