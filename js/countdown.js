const countdown = document.querySelector('.countdown');

//setting the date (ms)
const lDt = new Date('May 25, 2021 14:00:99 ').getTime();

//update 

const intrv = setInterval(() => {
    //get today date+time(ms)
    const tD = new Date().getTime();

    //distance from now to launch date (ms)
    const nTl = lDt - tD;

    //calcs for time
    const days = Math.floor(nTl / (1000 * 60 * 60 * 24));
    const hours = Math.floor((nTl % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const mins = Math.floor((nTl % (1000 * 60 * 60))/(1000 * 60));
    const secs = Math.floor((nTl % (1000 * 60))/1000);

    //show remaining time to launch
    countdown.innerHTML = `
    <div>
    <span> ${days} Days </span>
    <span>${hours} Hours </span>
    <span>${mins} Min </span> 
    <span>${secs} Sec</span> 
    </div>
    `;
    countdown.style.color= '#810303bb';
    countdown.style.backgroundColor= '#fff';
    countdown.style.backgroundColor.opacity= 0.2;

    //test distance
    if(nTl < 0){
        //stop
        clearInterval(intrv);
        // style and output text
        countdown.style.color = '#810303bb';
        countdown.innerHTML =  `<button class="open">'Launched! Begin the Experiment Now'</button> `
    }
}, 1000);