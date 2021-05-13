"use strict";

const User = require("../models/User");




const output = {
    home: (req,res) => {
        res.render("index");
    },
    welcome: (req,res) => {
        res.render("welcome");
    },
    login: (req,res) => {
        res.render("login");
    },
    register: (req,res) => {
        res.render("register");
    },
    test_a: (req,res) => {
        res.render("test_a");
    },
    test_b: (req,res) => {
        res.render("test_b");
    },
    test_c: (req,res) => {
        res.render("test_c");
    },
    test_d: (req,res) => {
        res.render("test_d");
    },
    test_e: (req,res) => {
        res.render("test_e");
    },
    test_f: (req,res) => {
        res.render("test_f");
    },
};

// const home = (req,res) => {
//     res.render("home/index")
// };

// const login = (req,res) => {
//     res.render("home/login")
// };

const process = {
    login: async ( req, res ) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
        
    },
    register: async (req,res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },

};

module.exports = {
    output,
    process,
};


