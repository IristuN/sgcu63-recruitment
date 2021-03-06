function generateTable(data){
    //initialize table
    var col = ["name", "slogan"];
    var thaiCol = ["ชื่อบ้าน", "สโลว์แกนบ้าน"]
    var dataArray = Array(data)[0]

    //create table
    var table = document.createElement("table")

    //add head row
    var tr = table.insertRow(-1);
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th")     
        th.innerHTML = thaiCol[i]
        tr.appendChild(th)
    }

    //add each row
    for (var i = 0; i < dataArray.length; i++) {
        console.log(i)
        tr = table.insertRow(-1)

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1)
            tabCell.innerHTML = data[i][col[j]]
        }
    }

    //add table to div container
    var divContainer = document.getElementById("table-container")
    divContainer.appendChild(table)
}
//data that we get from scraping
json = {"baans": [{"name": "บ้านอะอึ๋ม", "slogan": "Lost, but okay 'cause we’re TOGETHER."}, {"name": "บ้านแอ๊บ", "slogan": "ABNormalชื่อนี้มีแต่มิตรภาพและความอบอุ่น"}, {"name": "บ้านอากาเป้", "slogan": "เมื่อเรารัก เรารักอย่างไม่มีเงื่อนไข"}, {"name": "บ้านบูชายัญ", "slogan": "ให้พวกเราทำนายโชคชะตาให้คุณ"}, {"name": "บ้านบึ้ม", "slogan": "บ้านบึ้มนะน้องไหวหรอ"}, {"name": "บ้านดอก", "slogan": "บ้านดอก ดินแดนแห่งอากราบาห์"}, {"name": "บ้านดุ๊ยดุ่ย", "slogan": "ถ้าอยากรู้เรื่องราวให้กระจ่าง พวกเราก็พร้อมแจ้งแถลงไขเพื่อปกป้องความสุขของน้องๆ เราคือดุ่ยเกมอน"}, {"name": "บ้านดัง", "slogan": "ถึงไดโนซอร์จะไม่มีแล้ว แต่ดังโนซอร์จะอยู่ตรงนี้ตลอดไป"}, {"name": "บ้านเฟี้ยว", "slogan": "อยู่เฟี้ยวโซน จะอโลนได้ไง"}, {"name": "บ้านอินเดียน่า", "slogan": "We will be blended together."}, {"name": "บ้านอินดี้", "slogan": "We're in the Indy game now."}, {"name": "บ้านโจ๋", "slogan": "ยินดีต้อนรับเหล่าเฟรชชี่ โจ๋แมนจี้กำลังตกอยู่ในอันตราย พวกเราต้องการคุณ"}, {"name": "บ้านโจ๊ะเด๊ะ ฮือซา", "slogan": "ถึงเวลาสนุกแล้วสิ"}, {"name": "บ้านจัดสัน", "slogan": "จัดสัน อาหารเสิร์ฟ"}, {"name": "บ้านคุณหนู", "slogan": "บ้านคุณหนูจะเข้าไปอุ๋ง จะเข้าไปตกหัวใจ…"}, {"name": "บ้านคิดส์", "slogan": "NASA can't take you back, but we can!"}, {"name": "บ้านโคะ", "slogan": "Live like we’re drunk."}, {"name": "บ้านคุ้ม", "slogan": "Koommikaze ตำนานที่ไม่มีวันตาย"}, {"name": "บ้านหลายใจ", "slogan": "หลายใจล่าสมบัติ มหาขุมทรัพย์สุดขอบสมุทร"}, {"name": "บ้านหมีน้อย", "slogan": "คุณพร้อมที่จะออกจากโลกของมักเกิ้ลหรือยัง"}, {"name": "บ้านไหน", "slogan": "บ้านไหนไม่ใช่คำถามเพราะบ้านไหนคือคำตอบ"}, {"name": "บ้านพักตากอากาศ", "slogan": "อะไรก็ไม่สำคัญเท่าเราได้ \"พัก\" ไปด้วยกัน"}, {"name": "บ้านป้าน่ารัก", "slogan": "บ้านอบอุ่นไม่เป็นรองเสียงกลองดังสนั่นสันทนาการถึงใจรับน้องใหม่สู่ครอบครัว"}, {"name": "บ้านผี", "slogan": "ผีฮาทีคหวีดลั่นบ้าน"}, {"name": "บ้านพ่อ", "slogan": "“Call me by your daddy’s name” - Let's release your daddy steps and set the world on fire."}, {"name": "บ้านเปรี้ยว", "slogan": "Fasten your seat belt and search the way to our present."}, {"name": "บ้านแรง", "slogan": "Wingardium RANGviosa"}, {"name": "บ้านหรอย", "slogan": "อยากรับน้องแบบหรอย ๆ ให้เตรียมแบ็คแพ็คแล้วมาจอยกันที่บ้านหรอย"}, {"name": "บ้านเสี่ยว", "slogan": "Seiywengers Assemble ปฏิบัติการรวมพลังเสี่ยว ชวนน้องเปรี้ยวไปด้วยกัน"}, {"name": "บ้านสด", "slogan": "มาบ้านสดอาจไม่โสดกลับไป"}, {"name": "บ้านโซ้ยตี๋หลีหมวย", "slogan": "แม้เราไม่มีเครื่องลบความทรงจำแต่ความลำพังจะไม่เกิดในบ้านเรา"}, {"name": "บ้านเต็ม", "slogan": "มาเติมเต็มทุกเรื่องราวให้เต็มด้วยกัน ที่บ้านเต็ม"}, {"name": "บ้านหวัง", "slogan": "จอห์นวิคคิดถึงหมาอยากมีเพื่อนต้องมาจอห์น \"หวัง"}, {"name": "บ้านว้อนท์", "slogan": "จงกล้าที่จะทำในสิ่งที่ตนเอง \"อยาก\"Let's do what we WANTED to do !"}, {"name": "บ้านเวิร์ค", "slogan": "Don’t Unlock, WORK Inside."}, {"name": "บ้านยิ้ม", "slogan": "มารับรอยยิ้มที่บ้านยิ้มกันนะครับ :)"}]}

//generate a table
generateTable(json["baans"])