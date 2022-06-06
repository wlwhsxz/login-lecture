"use strict"; // ECMAScript(ES) 문법을 준수

const app = require('../app'); // 상위 폴더로 이동, app.js을 불러오기 
const PORT = 8080; // localhost 포트 넘버

app.listen(PORT, () => {
    console.log('서버 실행');
});