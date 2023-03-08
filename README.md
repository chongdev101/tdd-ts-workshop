# install app
yarn install  
yarn test

# jest docs : การเขียน test บน javascript โดยใช้ jest
https://jestjs.io/docs/getting-started

indirect input = คือการเรียกระหว่างทาง

front - server ตัวเรียกของปลอมแทน (Mock Funtion)


จะต้องทำ API Spec ก่อน

ข้อเสียจะต้อง ใช้เวลาในการ imperment มากว่าเดิม


กลุ่มของการ test ดับเบิล
- dummy = รับตัวใส่มา ค่าแต่ไม่ได้ใช้ ค่าที่ได้มาให้ผ่านเฉยๆ

- stub = เรียกมาจะส่งค่าเดิมให้       
    เช่น เรียกมากี่ครั้งจะได้ค่าเดิมเสมอ

- mock (hilink)
    ตรวจสอบว่าเรียกมากี่ครั้ง มีเงื่อนไข

- spy
    คือการรวมระหว่าง 
        stub + mock

- FAME
    ทำงานคลายของจริง
    ตัวยอ่าง inmem

ปัญหา
    - ในการเอาไปใช้
        1. ตัด dependency ใช้ไม่เป็


แก้ปัญหา 
    - ลบของที่เขียนมาไม่จำเป็น ออกไป
    