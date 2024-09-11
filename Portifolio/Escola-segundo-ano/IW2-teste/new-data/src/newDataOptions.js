const York = document.querySelector(".newYork");
const Tk = document.querySelector(".tokyo");
const Syd = document.querySelector(".Sydney");
const london = document.querySelector(".london");



// setInterval(() => {
//     const newMili = new Date();
//     let newmili = newMili.getMilliseconds() ;
//     mili.innerHTML = newmili;
// }, 100);

// setInterval(() => {
//     const newSeg = new Date();
//     let newSegundo = newSeg.getSeconds() ;
//     seg.innerHTML = newSegundo;
// }, 1000);

// setInterval(() => {
//     const newmin = new Date();
//     let newMinute = newmin.getMinutes() ;
//     min.innerHTML = newMinute;
// }, 60000);

// setInterval(() => {
//     const newhour = new Date();
//     let newHora = newhour.getHours() ;
//     hr.innerHTML = newHora;
// }, 3600000);
function getTimeByTimezone(timezone) {
    const date = new Date();
    const options = { hour: '2-digit', minute: '2-digit', timeZone: timezone };
    const formatter = new Intl.DateTimeFormat([], options);
    return formatter.format(date);
}
// Exemplos de uso
const timeInTokyo = getTimeByTimezone('Asia/Tokyo');
const timeInNewYork = getTimeByTimezone('America/New_York');
const timeInLondon = getTimeByTimezone('Europe/London');
const timeInSydney = getTimeByTimezone('Australia/Sydney');



York.addEventListener('mouseover', () => {
    setTimeout(() => {
        
        return York.innerHTML = `${timeInNewYork}`
    }, 300);
})
York.addEventListener('mouseout', () => {
    setTimeout(() => {
        
        return York.innerHTML = `newyork`
    }, 300);
})
// over


Tk.addEventListener('mouseover', () => {
    setTimeout(() => {
        return Tk.innerHTML = `${timeInTokyo}`
    }, 300);
    
})
Tk.addEventListener('mouseout', () => {
    setTimeout(() => {
        return Tk.innerHTML = `tokyo`
    }, 300);
    
})

// over

Syd.addEventListener('mouseover', () => {
    setTimeout(() => {
        
        return Syd.innerHTML = `${timeInSydney}`
    }, 300);
})
Syd.addEventListener('mouseout', () => {
    setTimeout(() => {
        
        return Syd.innerHTML = `Sydney`
    }, 300);
})
// over


london.addEventListener('mouseover', () => {
    setTimeout(() => {
        
        return london.innerHTML = `${timeInLondon}`
    }, 300);
})
london.addEventListener('mouseout', () => {
    setTimeout(() => {
        
        return london.innerHTML = `london`
    }, 300);
})







