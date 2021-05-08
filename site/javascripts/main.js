modalCloseEvent();

function showModalView(value) {
    document.getElementById("modal-content-id").innerHTML = value;
    document.getElementById("modalId").style.display = "block";
}

function modalCloseEvent() {
    let modal = document.getElementById("modalId");
    let close = document.getElementById("closeModalId");
    if (close) {
        close.onclick = function () {
            modal.style.display = "none";
        }
    }
    window.onclick = function (event) {
        if (event.target == modal) modal.style.display = "none";
    }
}