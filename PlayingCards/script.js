const deck = {
    hearts: [
        { rank: '2', color: 'red', image: 'cardImages/s2.png' },
        { rank: '3', color: 'red', image: 'cardImages/s3.png' },
        { rank: '4', color: 'red', image: 'cardImages/s4.png' },
        { rank: '5', color: 'red', image: 'cardImages/s5.png' },
        { rank: '6', color: 'red', image: 'cardImages/s6.png' },
        { rank: '7', color: 'red', image: 'cardImages/s7.png' },
        { rank: '8', color: 'red', image: 'cardImages/s8.png' },
        { rank: '9', color: 'red', image: 'cardImages/s9.png' },
        { rank: '10', color: 'red', image: 'cardImages/s10.png' },
        { rank: 'J', color: 'red', image: 'cardImages/sj.png' },
        { rank: 'Q', color: 'red', image: 'cardImages/sq.png' },
        { rank: 'K', color: 'red', image: 'cardImages/sk.png' },
        { rank: 'A', color: 'red', image: 'cardImages/sa.png' }
    ],
    diamonds: [
        { rank: '2', color: 'red', image: 'l2' },
        { rank: '3', color: 'red', image: 'l3' },
        { rank: '4', color: 'red', image: 'l4' },
        { rank: '5', color: 'red', image: 'l5' },
        { rank: '6', color: 'red', image: 'l6' },
        { rank: '7', color: 'red', image: 'l7' },
        { rank: '8', color: 'red', image: 'l8' },
        { rank: '9', color: 'red', image: 'l9' },
        { rank: '10', color: 'red', image: 'l10' },
        { rank: 'J', color: 'red', image: 'lj' },
        { rank: 'Q', color: 'red', image: 'lq' },
        { rank: 'K', color: 'red', image: 'lk' },
        { rank: 'A', color: 'red', image: 'la' }
    ],
    clubs: [
        { rank: '2', color: 'black', image: 'k2' },
        { rank: '3', color: 'black', image: 'k3' },
        { rank: '4', color: 'black', image: 'k4' },
        { rank: '5', color: 'black', image: 'k5' },
        { rank: '6', color: 'black', image: 'k6' },
        { rank: '7', color: 'black', image: 'k7' },
        { rank: '8', color: 'black', image: 'k8' },
        { rank: '9', color: 'black', image: 'k9' },
        { rank: '10', color: 'black', image: 'k10 ' },
        { rank: 'J', color: 'black', image: 'kj' },
        { rank: 'Q', color: 'black', image: 'kq' },
        { rank: 'K', color: 'black', image: 'kk' },
        { rank: 'A', color: 'black', image: 'ka' }
    ],
    spades: [
        { rank: '2', color: 'black', image: 'p2' },
        { rank: '3', color: 'black', image: 'p3' },
        { rank: '4', color: 'black', image: 'p4' },
        { rank: '5', color: 'black', image: 'p5' },
        { rank: '6', color: 'black', image: 'p6' },
        { rank: '7', color: 'black', image: 'p7' },
        { rank: '8', color: 'black', image: 'p8' },
        { rank: '9', color: 'black', image: 'p9' },
        { rank: '10', color: 'black', image: 'p10 ' },
        { rank: 'J', color: 'black', image: 'pj' },
        { rank: 'Q', color: 'black', image: 'pq' },
        { rank: 'K', color: 'black', image: 'pk' },
        { rank: 'A', color: 'black', image: 'pa' }
    ]
};

// console.log(deck);
let imageContainer = document.querySelector('.image-container');
let HTMLimg = '';
const hearts = deck.hearts;
hearts.forEach(element => {
    HTMLimg += ` <div class="image">
            <img src="${element.image}" alt="image1">
        </div>`
});
imageContainer.innerHTML = HTMLimg;

