const h1 = document.querySelector(".h1"),
    h2 = document.querySelector(".h2"),
    h3 = document.querySelector(".h3"),
    h4 = document.querySelector(".h4"),
    h5 = document.querySelector(".h5"),
    h6 = document.querySelector(".h6"),
    h7 = document.querySelector(".h7"),
    button = document.querySelector(".button"),
    img = document.querySelector(".img"),
    res = document.querySelector('.reset');

let count = -40,
    count1 = -60,
    count2 = -80,
    count3 = -100,
    count4 = -120,
    count5 = -140,
    count6 = -160,
    count7 = -100;
let interval;
let i = true;
h1.style.left = "-40px";
h2.style.left = "-50px";
h3.style.left = "-60px";
h4.style.left = "-70px";
h5.style.left = "-80px";
h6.style.left = "-90px";
h7.style.left = "-100px";
const animate = function() {
    interval = requestAnimationFrame(animate);
    count++;
    count1++;
    count2++;
    count3++;
    count4++;
    count5++;
    count6++;
    if (count < 20) {
        h1.style.left = `${count}px`;
    } else if (count1 < 30) {
        h2.style.left = `${count1}px`;
    } else if (count2 < 40) {
        h3.style.left = `${count2}px`;
    } else if (count3 < 50) {
        h4.style.left = `${count3}px`;
    } else if (count4 < 60) {
        h5.style.left = `${count4}px`;
    } else if (count5 < 70) {
        h6.style.left = `${count5}px`;
    } else if (count6 < 80) {
        h7.style.left = `${count6}px`;
    } else if (count6 > 60 && count7 < -30) {
        count7++;
        img.style.top = `${count7}px`;
    } else {
        cancelAnimationFrame(interval);
    }
};


button.addEventListener('click', () => {
    if (i) {
        interval = requestAnimationFrame(animate);
        i = false;
    } else {
        cancelAnimationFrame(interval);
        i = true;
    }
});

res.addEventListener('click', () => {
    location.reload();
});
