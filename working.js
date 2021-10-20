const hour = document.getElementById('hr');
const minute = document.getElementById('min');
const second = document.getElementById('sec');

// setInterval(() =>
//  {
//     let date=new Date();
//     let hr=date.getHours()*30;
//     let min=date.getMinutes()*6;
//     let sec=date.getSeconds()*6;

//     hour.style.transform=`rotateZ(${(hr)+(min/12)} deg)`;
//     minute.style.transform=`rotateZ(${min} deg)`;
//     second.style.transform=`rotateZ(${sec} deg)`;
// }
// )
    setInterval(() => {
        d = new Date(); //object of date()
        hr = d.getHours();
        min = d.getMinutes();
        sec = d.getSeconds();
        hr_rotation = 30 * hr + min / 2; //converting current time
        min_rotation = 6 * min;
        sec_rotation = 6 * sec;
      
        hour.style.transform = `rotate(${hr_rotation}deg)`;
        minute.style.transform = `rotate(${min_rotation}deg)`;
        second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);
