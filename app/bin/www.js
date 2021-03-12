"use strict";

const app = require("../app");
const PORT = process.env.PORT || 3000;
//  ||는 or 연산자
app.listen(PORT,() => {
    console.log("서버 가동")        
});