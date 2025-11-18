

let main = document.createElement("div");
main.style.width = "100%";
main.style.minHeight = "120vh";
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";
main.style.background = "#210537ff";
document.body.style.margin = "0";
document.body.appendChild(main);


let input = document.createElement("input");
input.placeholder = "Введіть питання...";
input.style.marginTop = "20px";
input.style.padding = "10px";
input.style.width = "100%";
input.style.maxWidth = "400px";
input.style.border = "1px solid #aaa";
input.style.borderRadius = "8px";
input.style.fontSize = "18px";
main.appendChild(input);


let btn = document.createElement("button");
btn.innerText = "Спитати";
btn.style.marginTop = "15px";
btn.style.padding = "10px 20px";
btn.style.fontSize = "18px";
btn.style.cursor = "pointer";
btn.style.borderRadius = "8px";
main.appendChild(btn);


let ballWrap = document.createElement("div");
ballWrap.style.marginTop = "30px";
ballWrap.style.width = "280px";
ballWrap.style.height = "280px";
ballWrap.style.borderRadius = "50%";
ballWrap.style.overflow = "hidden";
ballWrap.style.display = "flex";
ballWrap.style.alignItems = "center";
ballWrap.style.justifyContent = "center";
ballWrap.style.background = "url('ball.jpg')"; 
ballWrap.style.backgroundSize = "cover";
ballWrap.style.backgroundPosition = "center";
ballWrap.style.border = "3px solid #555";
main.appendChild(ballWrap);


let ans = document.createElement("div");
ans.style.color = "white";
ans.style.fontSize = "24px";
ans.style.fontWeight = "bold";
ballWrap.appendChild(ans);


let answers = ["Yes", "No", "Maybe", "Try again", "І так, і ні", "Напевно"];


btn.onclick = function() {
    let q = input.value.trim();
    if (q.length < 3) {
        ans.innerText = "???";
        alert("Питання занадто коротке");
        return;
    }

    let r = Math.floor(Math.random() * answers.length);
    ans.innerText = answers[r];
};

let style = document.createElement("style");
style.innerHTML = `
@media (max-width: 600px) {
    div {
        font-size: 16px !important;
    }

    input {
        width: 90% !important;
        font-size: 16px !important;
    }

    button {
        font-size: 16px !important;
        padding: 8px 15px !important;
    }


    div[style*="border-radius: 50%"] {
        width: 200px !important;
        height: 200px !important;
    }
}

@media (max-width: 400px) {
    input {
        font-size: 14px !important;
    }
    button {
        font-size: 14px !important;
    }
    div[style*="border-radius: 50%"] {
        width: 160px !important;
        height: 160px !important;
    }
}
`;
document.head.appendChild(style);
