export function changeUserOrNot(checkedUser) {
    if(document.querySelector('.content').lastElementChild.classList.contains('userContent') && checkedUser === "User") return false;
    if(document.querySelector('.content').lastElementChild.classList.contains('guestContent') && checkedUser === "Guest") return false;
    else return true;
}