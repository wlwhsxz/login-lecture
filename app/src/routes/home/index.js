"use strict"; // ECMAScript(ES) 문법을 준수

const express = require('express')
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.hello);

router.get('/login', ctrl.login);

module.exports = router; // 외부에서 해당 파일(router 기능 포함)을 사용할 수 있게끔 내보내기