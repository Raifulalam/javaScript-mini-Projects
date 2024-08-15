let username;
document.getElementById('mysubmit').addEventListener('click', () => {
    username = document.getElementById('myinput').value;
    document.getElementById('myH1').textContent = `Hello ${username}`;
})

let radius;
const PI = 3.14;
document.getElementById('radius-submit').addEventListener('click', () => {
    radius = document.getElementById('radius').value;
    const area = PI * (radius ** 2);

    document.getElementById('area-of-circle').textContent = `The area of the circle is ${area} and the circumference is ${2 * PI * radius}`
});

let count = 0;
document.getElementById('increase-count').addEventListener('click', () => {
    count++;
    document.getElementById('increase-count').style.backgroundColor = "blue"
    document.getElementById('mycount').textContent = count;

});
document.getElementById('decrease-count').addEventListener('click', () => {
    count--;
    document.getElementById('increase-count').style.backgroundColor = "green"
    document.getElementById('mycount').textContent = count;
});
document.getElementById('reset-count').addEventListener('click', () => {
    count = 0;
    document.getElementById('increase-count').style.backgroundColor = "green"
    document.getElementById('mycount').textContent = count;
})

//random number Generator
const rollBtn = document.getElementById('rollBtn');
const counter = document.getElementById('count');
let rollCount = 0;
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const min = 1;
const max = 6;
rollBtn.addEventListener('click', () => {
    rollCount++;
    const random1 = Math.floor(Math.random() * (max)) + min;
    const random2 = Math.floor(Math.random() * (max)) + min;
    const random3 = Math.floor(Math.random() * (max)) + min;
    label1.textContent = random1;
    label2.textContent = random2;
    label3.textContent = random3;
    counter.textContent = rollCount;
    if (random1 == random2 && random2 == random3) {
        document.getElementById('rollResult').textContent = `Congratulation You win`
    } else {
        document.getElementById('rollResult').textContent = ""
    }

})

// for if else 
const ifBtn = document.getElementById('ifBtn');
const ifResult = document.getElementById('ifResult');
ifBtn.addEventListener('click', () => {
    let age = document.getElementById('ifInput').value;
    age = Number(age);
    console.log(typeof (age))
    console.log(age);
    if (age > 16) {
        ifResult.textContent = `You are eligible to vote`
    }
    else if (age > 100) {
        ifResult.textContent = `You are too old to vote`
    }
    else if (age == 0) {
        ifResult.textContent = `Your age is ${age} : You are just born`
    }
    else if (age < 0) {
        ifResult.textContent = `Your age is ${age} : Age cant be Negative`
    }
    else {
        ifResult.textContent = `You are not eligible to vote`
    }
});

// for Checked
const checkBtn = document.getElementById('checkBnt');
const checkResult = document.getElementById('checkResult');
const radioResult = document.getElementById('radioResult');
const mastercard = document.getElementById('mastercard');
const paypal = document.getElementById('paypal');
const paytm = document.getElementById('paytm');
const mycheckbox = document.getElementById('mycheckbox');
checkBtn.addEventListener('click', () => {
    if (mycheckbox.checked) {
        checkResult.textContent = `You are SUBSCRIBED`
    }
    else {
        checkResult.textContent = `You are not SUBSCRIBED`
    }
    if (paypal.checked) {
        radioResult.textContent = `You choose paypal`
    }
    else if (paytm.checked) {
        radioResult.textContent = `You choose paytm`
    }
    else if (mastercard.checked) {
        radioResult.textContent = `You choose mastercard`
    }
    else {
        radioResult.textContent = `You have not choose any payment methods`
    }
});

// Switch case
const day = document.getElementById('day');
const SwitchSubmit = document.getElementById('SwitchSubmit');
const switchResult = document.getElementById('switchResult');
SwitchSubmit.addEventListener('click', () => {
    switch (day.value) {
        case 'monday':
            switchResult.textContent = `Today is Monday : Order Pizza`
            break;
        case 'tuesday':
            switchResult.textContent = `Today is Tuesday: Eat Mess Food`
            break;
        case 'wednesday':
            switchResult.textContent = `Today is Wednesday:Order Biryani`
            break;
        case 'thursday':
            switchResult.textContent = `Today is Thursday: Paneer and Pulao`
            break;
        case 'friday':
            switchResult.textContent = `Today is Friday: Samosa in Breakfast`
            break;
        case 'saturday':
            switchResult.textContent = `Today is Saturday: Go for Outing`
            break;
        case 'sunday':
            switchResult.textContent = `Today is Sunday: Mess Special`
            break;
        default:
            switchResult.textContent = `Invalid day: Please Check your Day`
    }
});
//call backs

hello(goodbye);
function hello(callback) {
    console.log("hello")
    callback()

}
function goodbye() {
    console.log("Goodbye!");
}