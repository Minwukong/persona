
"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/welcome", ctrl.output.welcome);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/test_a", ctrl.output.test_a);
router.get("/test_b", ctrl.output.test_b);
router.get("/test_c", ctrl.output.test_c);
router.get("/test_d", ctrl.output.test_d);
router.get("/test_e", ctrl.output.test_e);
router.get("/test_f", ctrl.output.test_f);

router.get("/administarator",function(req,res,next){
    if(req && req.session && req.session.count) { 
        // 세션이 존재하는 경우
        req.session.count = req.session.count + 1;
    } else { 
        // 세션이 존재하지 않는 경우
        req.session.count = 1;
    }
    console.log(req.session.count);
});


router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;
