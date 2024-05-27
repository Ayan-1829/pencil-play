// xmlhttp-request object

let http = new XMLHttpRequest();

// preparing the request
http.open('get', 'paintings.json', true);

// send request
http.send();

// catch response (onload eventlistener)
http.onload = function(){
    // check readystate and status properties
    if(this.readyState == 4 && this.status == 200){
        let paintings = JSON.parse(this.responseText);

        let output = '<div class="card-group"> ';
        for(let single_painting of paintings){
            output += '<div class="card"> <a href="#home"> <img src="' + (single_painting.image) + '" alt=""> </a> </div>';
        }
        output += '</div>';

        document.querySelector("#painting").innerHTML = output;
    }
}
