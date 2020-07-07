/* Create ID */
const title = document.getElementById('title')
const id = document.getElementById('id')
id.readOnly = true;

title.addEventListener('keyup', trimId)

function trimId() {
    idOk = title.value.trim().toLowerCase()
    id.value = idOk.split(' ').join('');
}