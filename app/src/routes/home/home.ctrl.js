"use strict"; // ECMAScript(ES) 문법을 준수

const hello = (req, res) => { // 'hello' 라는 컨트롤러 함수 생성 & 외부에서 사용
    res.render('home/index');
    res.send("여기는 루트입니다");
}; 

const login = (req, res) => { // 'login' 이라는 컨트롤러 함수 생성 & 외부에서 사용
    res.render('home/login');
    res.send("여기는 로그인입니다.");
};

module.exports = {
    hello,
    login,
};