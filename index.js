function DisplayDateTime() {
   

    let a = new Date();
    let date = a.getDate();
    let sec = a.getSeconds();
    let min = a.getMinutes();
    let hours = a.getHours();
    let session = document.getElementById('session')[0];

    document.getElementById('Hr').innerHTML = hours;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;
    
    if (hours>12) {
        session.innerHTML='PM'; 
    } else {
        session.innerHTML='AM'; 
    }

    // if (hours>12) {
    //     hours=hours-12;
    // }

}

setInterval(() => {
    DisplayDateTime()
}, 10);