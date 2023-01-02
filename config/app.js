const submit = document.querySelector(".submit");
const uno = document.getElementById("1");
const dos = document.getElementById("2");
const tres = document.getElementById("3");
const cuatro = document.getElementById("4");
const cinco = document.getElementById("5");
const radios = [uno, dos, tres, cuatro, cinco];
const hiddenForm = document.getElementById("hidden")
const noHidden = document.getElementById("no-hidden")
submit.addEventListener("click", function(){
    let number = "";
    for(let i=0; i<radios.length; i++){
        if(radios[i].checked){
            number = radios[i].value;
        }
    }
    hiddenForm.classList.toggle("hidden");
    noHidden.classList.toggle("hidden");
    const span = document.createElement("span");
    span.classList.add("selected");
    span.innerText = `You selected ${number} out of 5`;
    hiddenForm.appendChild(span);
    const h1 = document.createElement("h1");
    h1.innerText = `Thank you!`;
    hiddenForm.appendChild(h1);
    const p = document.createElement("p");
    p.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, 
    don't hesitate to get in touch!`;
    hiddenForm.appendChild(p);
})
console.log(hiddenForm.classList)