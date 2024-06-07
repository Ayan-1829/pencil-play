//  color splash 
document.addEventListener("mousedown", function (e) {
    var body = document.querySelector('.color_splash');
    var img = document.createElement('color_splash');

    var x = e.clientX;
    var y = e.clientY;

    // console.log(x, y);

    var ran = Math.random()*130+50;
    console.log(ran);

    img.style.left = x + 'px';
    img.style.top = y + 'px';

    body.appendChild(img);

    img.style.width = ran + 'px';
    img.style.height = ran + 'px';

    setTimeout(function () {
        img.remove();
    }, 1500);
})


// xmlhttp-request object
let http = new XMLHttpRequest();

// preparing the request
http.open('get', 'paintings.json', true);

// send request
http.send();

// catch response (onload eventlistener)
http.onload = function () {
    // check readystate and status properties


    if (this.readyState == 4 && this.status == 200) {
        let paintings = JSON.parse(this.responseText);

        let output = '<div class="card-group"> ';
        for (let single_painting of paintings) {
            output += '<div class="card"><img class="image" loading="lazy" src="' + (single_painting.image) + '" alt=""></div>';

        }
        output += '</div>';

        document.querySelector("#painting").innerHTML = output;

        const popup = document.querySelector('.popup'); // getting the popup class
        const closeBtn = document.querySelector('.close-btn');
        const leftBtn = document.querySelector('.left-arrow');
        const rightBtn = document.querySelector('.right-arrow');
        const largeImage = document.querySelector('.large-image');
        const cards = [...document.querySelectorAll('.card')];


        let index = 0; // tracking the image number

        cards.forEach((item, i) => {
            item.addEventListener('click', () => {
                updateImage(i);
                popup.classList.toggle('active');

            })
        })

        const updateImage = (i) => {
            let img_no = i+1;
            let name = 'Img' + img_no + '.jpg';
            largeImage.src = name;
            index = i;
        }

        closeBtn.addEventListener('click', () => {
            popup.classList.toggle('active')
        })

        leftBtn.addEventListener('click', ()=>{
            popup.classList.toggle('active');
            if(index>0){
                updateImage(index - 1);
            }
            else{
                updateImage(cards.length-1);
            }
            popup.classList.toggle('active');
        })

        rightBtn.addEventListener('click', ()=>{
            popup.classList.toggle('active');
            if(index<cards.length-1){
                updateImage(index + 1);
            }
            else{
                updateImage(0);
            }
            popup.classList.toggle('active');
        })

    }
}
