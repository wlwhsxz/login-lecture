"use strict"; // ECMAScript(ES) 문법을 준수

// 모듈
const express = require('express')
const app = express();

// 라우팅
const home = require('./routes/home'); // 해당 경로 내에 있는 js 파일 읽기

// 앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs'); // view engine EJS 사용

app.use("/", home); // use -> 미들웨어를 등록해주는 메소드

