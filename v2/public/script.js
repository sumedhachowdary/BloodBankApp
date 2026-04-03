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

function display(data) {
    let list = document.getElementById('list');
    list.innerHTML = '';

    data.forEach(d => {
        list.innerHTML += `<li>${d.name} - ${d.blood}</li>`;
    });
}