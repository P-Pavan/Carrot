function pushed(){
    if(document.querySelector('#input textarea').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#output').innerHTML += `
                <div class='output-box'>
                    ${document.querySelector('#input textarea').value}
                </div>
                `;
    }
}