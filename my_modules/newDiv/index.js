export function newDiv(checkedUser,e) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    if(checkedUser === 'User') {
        div.classList.add('userContent')
    }
    if(checkedUser === 'Guest'){
        div.classList.add('guestContent')
    }
    p.textContent = e.currentTarget.value;
    div.append(p);
    return div;
}