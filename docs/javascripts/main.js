removeMadeWith();

function removeMadeWith() {
    let madeWith = document.getElementsByClassName("md-footer-meta md-typeset");
    if (madeWith[0]) {
        madeWith[0].remove();
    }
}