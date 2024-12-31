let hours = document.getElementById('hours');
let mints = document.getElementById('mints');
let sec = document.getElementById('sec');
let ampm = document.getElementById('ampm');

function clockOn() {
    setInterval( () => {
        let dt = new Date();
            hours.innerText = dt.getHours();
            mints.innerText = dt.getMinutes();
                        seconds  = dt.getSeconds();
            sec.innerText = seconds < 10 ? '0'.concat(seconds) : seconds ;
            ampm.innerText  = ampm < 1 ? "AM" : 'PM';
    },1000)
}
clockOn(); 