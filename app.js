import { changePage, loadData } from "../model/model.js";

function initListeners () {
    $("nav a").on ('click', (e) => {
        e.preventDefault();
        let btnId = e.currentTarget.id;
        changePage(btnId);
    });
    $("#loadDataBtn").on ('click', (e) => {
        e.preventDefault();
       loadData("Sydney",myReturnData);
    });
}

function myReturnData(data) {
    console.log("Data Loaded: ", data);
}


$(document).ready(function () {
    changePage("home");
    initListeners()
});