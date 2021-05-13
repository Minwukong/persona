
const app = require("./app");
const PORT = process.env.PORT || 8001;
//  ||는 or 연산자
app.listen(PORT,() => {
    console.log("서버 가동")        
});