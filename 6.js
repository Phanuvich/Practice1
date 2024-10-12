let index = 0; 
let count = 1;
const dictionary = {
    reasonable: "มีเหตุมีผล",
    influence: "อิทธิพล",
    indicate : "ระบุ" ,
    assess : "ประเมิน" ,
    acces : "เข้าถึง" ,
    attend : "เข้าร่วม" ,
    convince : "โน้มน้าว" ,
    encourage : "สนับสนุน" ,
    discourage : "ไม่สนับสนุน" ,
    assume : "สันนิษฐาน" ,
    concerning : "เกี่ยวกับ",
    desire : "ความปรารถนา" ,
    evident : "ชัดเจน" ,
    result_from : "เกิดจาก" ,
    result_in:  "ทำให้เกิด" ,
    analyze : "วิเคราะห์",
    progress : "ความก้าวหน้า" ,
    approval : "การอนุมัติ" ,
    optimistic : "มองโลกในเเง่ดี" ,
    pessimistic : "มองโลกในเเง่ร้าย" ,
    affect : "ส่งผลกระทบ" ,
    situation : "สถานการณ์" ,
    proposal : "ข้อเสนอ" ,
    organize : "จัดระเบียบ" ,
    initially : "ในตอนเเรก" , 
    eventually : "ท้ายที่สุด" ,
    urge : "กระตุ้น" ,
    appropriate : "เหมาะสม" ,
    criticism : "การวิจารณ์" ,
    affair : "ธุระ" ,
    task : "หน้าที่" ,
    apparently : "ปรากฎว่า",
    crucial : "สำคัญ",
    effective : "มีประสิทธิภาพ",
    involve : "เกี่ยวข้อง",
    minor : "เล็กน้อย",
    major : "สำคัญ",
    identify : "ระบุ" ,
    common : "ธรรมดา",
    increase : "เพิ่มขึ้น",
    decrease : "ลดลง",
    plummet : "ตกลงมา",
    purpose : "วัตถุประสงค์",
    exist : "มีอยู่",
    require : "จำเป็น",
    function : "หน้าที่",
    condition : "เงื่อนไข",
    psychology : "จิตวิทยา",
    harmful : "เป็นอันตราย",
};

function start() {
    document.getElementById('box1').style.display = "none"; 
    document.getElementById('box2').style.display = "block";
    document.getElementById('score').style.display = "block";
    document.getElementById('box4').style.display = "none"; 


    const keys = Object.keys(dictionary); 
    document.getElementById('word').innerHTML = keys[index]; 
    document.getElementById('score').innerHTML = count ;
}

function displayCurrentWord() {
    const keys = Object.keys(dictionary); 
    document.getElementById('word').innerHTML = keys[index]; 
    document.getElementById('score').innerHTML = count ;
}

function checkword() {
    let meaninput = document.getElementById('mean').value.trim();
    const values = Object.values(dictionary);
    const keys = Object.keys(dictionary);
    

    if (index < keys.length) { 
        let correctAnswer = values[index]; 

        
        if (meaninput === correctAnswer) {
            index++; 
            count++;
            if (index < keys.length) {
                displayCurrentWord(); 
                document.getElementById('mean').value = ""; 
            } else {
                document.getElementById('word').innerHTML = "คุณแปลถูกทุกคำแล้ว!"; 
                document.getElementById('mean').value = ""; 
            }
        } else {
            document.getElementById('box1').style.display = "none"; 
            document.getElementById('box2').style.display = "none";
            document.getElementById('box3').style.display = "block";  
            document.getElementById('box4').style.display = "none"; 
            document.getElementById('error').innerHTML = `คำตอบที่ถูกคือ: <br> ${correctAnswer}`; // ถ้าตอบผิด
            document.getElementById('score1').innerHTML = count ;
            document.getElementById('mean').value = "";
            index = 0; 
            count = 0;


            
        }
    } else {
        document.getElementById('word').innerHTML = "Quiz already completed!";
    }
}


function tohome() {
    document.getElementById('box1').style.display = "block"; 
    document.getElementById('box2').style.display = "none"; 
    document.getElementById('box3').style.display = "none";  
    document.getElementById('box4').style.display = "none"; 
}

function tocategory(){
    document.getElementById('box1').style.display = "none"; 
    document.getElementById('box2').style.display = "none"; 
    document.getElementById('box3').style.display = "none";  
    document.getElementById('box4').style.display = "block";  
}






