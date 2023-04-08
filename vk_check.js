function checkIfNoGo() {
console.log('1234')
    const timerID = window.setTimeout(checkIfNoGo, 1500);
    let arrDialogs = ['291479035'];
    //setTimeout(() => {
        if (arrDialogs.includes(location.search.replace('?sel=', '')) && !document.querySelectorAll('.im-page--title .test').length) {
            let spanText = document.createElement("span");
            spanText.className = 'test';
            spanText.textContent = 'не было';
            spanText.style.margin = '0 0 0 5px';
            document.querySelector('.im-page--title').appendChild(spanText);
        } else {}
}
checkIfNoGo();
