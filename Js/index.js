var msg = document.querySelector('#input textarea');
var uid = document.querySelector('#input input');

function pushed(){
    if(msg.value.length == 0 || uid.value.length == 0){
        alert("Give the input!")
    }

    else{
        document.querySelector('#output').innerHTML += `
                <div class='output-box'>
                    ${uid.value} <br>
                    ${msg.value}
                </div>
                `;
    }
}