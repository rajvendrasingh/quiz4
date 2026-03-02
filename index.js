
const questions = [
{q:"कंप्यूटर का मस्तिष्क किसे कहा जाता है?", o:["CPU","RAM","Hard Disk","Monitor"], a:0},
{q:"ALU का कार्य क्या है?", o:["गणना करना","डेटा स्टोर करना","इनपुट लेना","प्रिंट करना"], a:0},
{q:"RAM किस प्रकार की मेमोरी है?", o:["Primary","Secondary","Cache","Virtual"], a:0},
{q:"ROM का पूरा नाम क्या है?", o:["Read Only Memory","Random Only Memory","Run Only Memory","Read Open Memory"], a:0},
{q:"इनपुट डिवाइस कौन सा है?", o:["Keyboard","Monitor","Printer","Speaker"], a:0},
{q:"आउटपुट डिवाइस कौन सा है?", o:["Monitor","Mouse","Scanner","Keyboard"], a:0},
{q:"हार्ड डिस्क किस प्रकार की मेमोरी है?", o:["Secondary","Primary","Cache","Register"], a:0},
{q:"Ctrl + C का प्रयोग किस लिए होता है?", o:["Copy","Paste","Cut","Save"], a:0},
{q:"Ctrl + V का प्रयोग?", o:["Paste","Copy","Save","Undo"], a:0},
{q:"CPU के भाग कौन-कौन से हैं?", o:["ALU, CU","RAM, ROM","Mouse, Keyboard","Monitor, Printer"], a:0},
{q:"कंप्यूटर की सबसे छोटी इकाई क्या है?", o:["Bit","Byte","KB","MB"], a:0},
{q:"1 Byte में कितने Bit होते हैं?", o:["8","4","16","2"], a:0},
{q:"MS Word किस प्रकार का सॉफ्टवेयर है?", o:["Application","System","Utility","Driver"], a:0},
{q:"Windows क्या है?", o:["Operating System","Application","Browser","Antivirus"], a:0},
{q:"Google Chrome क्या है?", o:["Browser","OS","Hardware","Antivirus"], a:0},
{q:"Printer किसका उदाहरण है?", o:["Output Device","Input Device","Storage","Software"], a:0},
{q:"Scanner किसका उदाहरण है?", o:["Input Device","Output Device","Storage","Software"], a:0},
{q:"Cache Memory का कार्य?", o:["तेज अस्थायी संग्रह","स्थायी संग्रह","प्रिंट करना","स्कैन करना"], a:0},
{q:"ई-मेल का प्रयोग?", o:["संदेश भेजना","वीडियो देखना","गेम खेलना","गणना करना"], a:0},
{q:"WWW का पूरा नाम?", o:["World Wide Web","Wide Web World","Web World Wide","World Web Wide"], a:0},
{q:"USB का प्रयोग?", o:["डेटा ट्रांसफर","स्क्रीन दिखाना","आवाज देना","गणना करना"], a:0},
{q:"Antivirus का कार्य?", o:["वायरस हटाना","वीडियो चलाना","फोटो बनाना","प्रिंट करना"], a:0},
{q:"Modem का कार्य?", o:["डेटा ट्रांसमिशन","प्रिंट","स्कैन","गणना"], a:0},
{q:"LAN का पूरा नाम?", o:["Local Area Network","Long Area Network","Large Area Network","Line Area Network"], a:0},
{q:"WAN का पूरा नाम?", o:["Wide Area Network","Web Area Network","World Area Network","Wire Area Network"], a:0},
{q:"Binary Number System का आधार?", o:["2","8","10","16"], a:0},
{q:"Decimal Number System का आधार?", o:["10","2","8","16"], a:0},
{q:"Octal Number System का आधार?", o:["8","2","10","16"], a:0},
{q:"Hexadecimal का आधार?", o:["16","2","8","10"], a:0},
{q:"Software के प्रकार?", o:["System & Application","Input & Output","Hard & Soft","Primary & Secondary"], a:0},
{q:"CPU का पूरा नाम?", o:["Central Processing Unit","Computer Processing Unit","Central Program Unit","Control Processing Unit"], a:0},
{q:"PowerPoint का प्रयोग?", o:["Presentation","Typing","Browsing","Scanning"], a:0},
{q:"Excel का प्रयोग?", o:["Calculation","Typing","Browsing","Printing"], a:0},
{q:"Notepad किसका उदाहरण है?", o:["Application","Hardware","OS","Browser"], a:0},
{q:"Bluetooth का उपयोग?", o:["Wireless Data Transfer","Print","Scan","Calculate"], a:0},
{q:"Firewall का कार्य?", o:["Network Security","Typing","Printing","Scanning"], a:0},
{q:"IP Address क्या है?", o:["Unique Address","File Name","Password","Folder"], a:0},
{q:"URL का पूरा नाम?", o:["Uniform Resource Locator","Unique Resource Line","Uniform Read Locator","Universal Resource Link"], a:0},
{q:"HTTP का पूरा नाम?", o:["Hyper Text Transfer Protocol","High Text Transfer Protocol","Hyper Tool Transfer Program","High Tool Transfer Protocol"], a:0},
{q:"PDF का पूरा नाम?", o:["Portable Document Format","Public Document File","Private Data Format","Portable Data File"], a:0},
{q:"Keyboard में कितनी Function Keys होती हैं?", o:["12","10","8","14"], a:0},
{q:"Ctrl + Z का प्रयोग?", o:["Undo","Redo","Copy","Paste"], a:0},
{q:"Ctrl + S का प्रयोग?", o:["Save","Search","Send","Select"], a:0},
{q:"Mouse का कौन सा बटन सामान्य चयन करता है?", o:["Left","Right","Middle","None"], a:0},
{q:"Cloud Storage का उदाहरण?", o:["Google Drive","CPU","Monitor","RAM"], a:0},
{q:"Hard Copy क्या है?", o:["Printed Output","Soft File","Folder","Virus"], a:0},
{q:"Soft Copy क्या है?", o:["Digital File","Printed Page","Hardware","Cable"], a:0},
{q:"Spam का अर्थ?", o:["अनचाहा ईमेल","सुरक्षित फाइल","गेम","वीडियो"], a:0},
{q:"Backup का अर्थ?", o:["डेटा की कॉपी","डेटा हटाना","प्रिंट करना","स्कैन करना"], a:0},
{q:"Virus क्या है?", o:["हानिकारक प्रोग्राम","इनपुट डिवाइस","आउटपुट डिवाइस","ब्राउज़र"], a:0},
{q:"Folder का उपयोग?", o:["फाइल संग्रह","गणना","प्रिंट","स्कैन"], a:0},
{q:"Shortcut Key Alt + F4?", o:["Close Window","Save","Copy","Paste"], a:0},
{q:"Operating System का उदाहरण?", o:["Windows","Word","Excel","Chrome"], a:0},
{q:"Super Computer का उपयोग?", o:["जटिल गणना","टाइपिंग","प्रिंट","ब्राउजिंग"], a:0}
];

let current = 0;
let score = 0;
let selected = null;
let timer;
let timeLeft = 30;

function loadQuestion(){
document.getElementById("result").innerHTML="";
selected=null;
timeLeft=30;
document.getElementById("time").innerText=timeLeft;

let q=questions[current];
document.getElementById("question").innerText=(current+1)+". "+q.q;

let optionsHTML="";
q.o.forEach((opt,index)=>{
optionsHTML+=`<div class="option" onclick="selectOption(${index},this)">${opt}</div>`;
});
document.getElementById("options").innerHTML=optionsHTML;

startTimer();
}

function selectOption(index,element){
selected=index;
document.querySelectorAll(".option").forEach(o=>o.classList.remove("selected"));
element.classList.add("selected");
}

function startTimer(){
clearInterval(timer);
timer=setInterval(()=>{
timeLeft--;
document.getElementById("time").innerText=timeLeft;
if(timeLeft===0){
nextQuestion();
}
},1000);
}

function nextQuestion(){
clearInterval(timer);

if(selected!==null){
if(selected===questions[current].a){
score+=1;
}else{
score-=0.25;
}
}

current++;

if(current<questions.length){
loadQuestion();
}else{
showResult();
}
}

function showResult(){
document.getElementById("question").innerHTML="";
document.getElementById("options").innerHTML="";
document.querySelector("button").style.display="none";

document.getElementById("result").innerHTML=
`आपका अंतिम स्कोर: ${score.toFixed(2)} / 54`;
}

let wrongAnswers = [];
let userAnswers = [];

function nextQuestion(){
clearInterval(timer);

if(selected!==null){
userAnswers[current] = selected;

if(selected===questions[current].a){
score+=1;
}else{
score-=0.25;
wrongAnswers.push(current);
}
}else{
userAnswers[current] = null;
}

current++;

if(current<questions.length){
loadQuestion();
}else{
showResult();
}
}

function showResult(){
document.getElementById("question").innerHTML="";
document.getElementById("options").innerHTML="";
document.querySelector("button").style.display="none";

let resultHTML = `
<div style="font-size:20px;margin-bottom:10px;">
अंतिम स्कोर: ${score.toFixed(2)} / 54
</div>
<div style="margin-bottom:10px;">
कुल गलत प्रश्न: ${wrongAnswers.length}
</div>
`;

if(wrongAnswers.length>0){
resultHTML += `<h3>❌ गलत प्रश्न समीक्षा</h3>`;

wrongAnswers.forEach(i=>{
resultHTML += `
<div style="background:#fee2e2;padding:10px;margin:8px 0;border-radius:8px;">
<b>प्रश्न ${i+1}:</b> ${questions[i].q}<br>
<b>आपका उत्तर:</b> ${questions[i].o[userAnswers[i]]}<br>
<b>सही उत्तर:</b> ${questions[i].o[questions[i].a]}
</div>
`;
});
}else{
resultHTML += `<div style="color:green;font-weight:bold;">🎉 सभी उत्तर सही!</div>`;
}

document.getElementById("result").innerHTML = resultHTML;
}

loadQuestion();