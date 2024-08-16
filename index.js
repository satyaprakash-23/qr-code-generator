let inputText = document.getElementById("inputField");
let btn = document.getElementById("button");
let code = document.getElementById("qr")


const p = document.createElement('p');

let qrContainer = document.getElementById("qr");

btn.addEventListener("click", () => {
    
    let textToEncode = inputText.value;
    
    // Create a new instance of QRCode and pass the container element
    let qrcode = new QRCode(qrContainer, {
        text: textToEncode,
        width: 128,
        height: 128
        // You can customize more options as needed
    });
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Generate another qr</h2>`;
    code.appendChild(p);
   
});

p.addEventListener("click",()=>{
    inputText.value="";
    qrContainer.innerHTML="";
    code.removeChild(p)

})