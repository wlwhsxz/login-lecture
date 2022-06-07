"use strict";

const id = document.querySelector('#id'), // html 파일에서 id에 저장된 값을 가져오긴 
pw = document.querySelector('#pw'),
loginBtn = document.querySelector('button');

loginBtn.addEventListener("click", login); // click 이벤트 발생 시 login 동작

function login() {
    const req = {
        id: id.value, // xx.value 로 값 받아오기
        pw: pw.value
    };

    fetch('/login', { // /login 경로로 object 형태의 값을 전달
        method: "POST",
        headers: {
            "Content Type" : "applicaiotn/json",
        },
        body: JSON.stringify(req),
    });
};