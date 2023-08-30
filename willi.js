
const mySwitch = document.querySelector("input[type=checkbox]");

mySwitch.addEventListener('click', () => {
    let darkMode = document.body.getAttribute('class', 'dark-mode');
    darkMode = darkMode ? darkMode : "";

    if (darkMode.includes('dark-mode')) {
        document.body.classList.remove('dark-mode')
        document.body.classList.add('body')
        console.log("remove dark add white")
    } else {
        document.body.classList.remove('body')
        document.body.classList.add('dark-mode')
        console.log("remove white add dark")
    }
    })