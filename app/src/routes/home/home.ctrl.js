"use strict"; // ECMAScript(ES) 문법을 준수

const users = {
    id: ["minu", "김개발", "강팀장"],
    pw : ["123", "1234", "12345"],
}

const output = {
    hello: (req, res) => { // "hello" 라는 컨트롤러 함수 생성 & 외부에서 사용
        res.render("home/index");
    },
    login: (req, res) => { // "login" 이라는 컨트롤러 함수 생성 & 외부에서 사용
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => { // 프론트에서 전달한 req 데이터를 처리
        const id = req.body.id,
        pw = req.body.pw;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw) {
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    },
};


module.exports = {
    output,
    process,
};