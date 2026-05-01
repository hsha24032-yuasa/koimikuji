const fortunes =[
    "大大大大吉💋あなたは最強モテモテ",
    "大吉💖素敵な出会いがあるかも！",
    "中吉😁少し勇気を出すといいことが起きる",
    "小吉😊今日はゆっくり過ごそう",
    "凶😢無理せず慎重に行動しよう"
];

const button =document.getElementById("M");
const result =document.getElementById("W");

button.addEventListener("click",function(){
    const randomNumber=Math.floor(Math.random()*fortunes.length);
　　const resultText = fortunes[(randomNumber)];

    result.textContent=fortunes[(randomNumber)];

    if(resultText.includes("大吉")) {
        result.style.color = "red";
    }else if(resultText.includes("中吉")) {
        result.style.color = "yellow";
    }else  {
        result.style.color = "black";
    }
});