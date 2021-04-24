removeMadeWith();
modalCloseEvent();

function removeMadeWith() {
    let madeWith = document.getElementsByClassName("md-footer-meta md-typeset");
    if (madeWith[0]) {
        madeWith[0].remove();
    }
}

function showModalView(value) {
    document.getElementById("modal-content-id").innerHTML = value;
    document.getElementById("modalId").style.display = "block";
}

function modalCloseEvent() {
    let modal = document.getElementById("modalId");
    let close = document.getElementById("closeModalId");
    close.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) modal.style.display = "none";
    }
}