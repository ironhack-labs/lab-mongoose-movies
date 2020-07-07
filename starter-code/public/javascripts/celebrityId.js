/* Create ID */
const name = document.getElementById('name')
const id = document.getElementById('id')
id.readOnly = true;

name.addEventListener('keyup', trimId)

function trimId() {
    idOk = name.value.trim().toLowerCase()
    id.value = idOk.split(' ').join('');
}