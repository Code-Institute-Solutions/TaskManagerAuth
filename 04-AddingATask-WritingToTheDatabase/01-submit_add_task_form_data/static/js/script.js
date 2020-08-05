/*
    jQuery for MaterializeCSS initialization
*/

$(document).ready(function () {
    $(".sidenav").sidenav({edge: "right"});
    $(".collapsible").collapsible();
    $(".tooltipped").tooltip();
    $("select").formSelect();
    $(".datepicker").datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
});





/*
    vanilla JavaScript for MaterializeCSS initialization
*/

// document.addEventListener('DOMContentLoaded', function () {
//     let sidenavs = document.querySelectorAll(".sidenav");
//     let sidenavsInstance = M.Sidenav.init(sidenavs, {edge: "right"});
//     let collapsibles = document.querySelectorAll(".collapsible");
//     let collapsiblesInstance = M.Collapsible.init(collapsibles);
//     let tooltips = document.querySelectorAll(".tooltipped");
//     let tooltipsInstance = M.Tooltip.init(tooltips);
//     let selects = document.querySelectorAll("select");
//     let selectsInstance = M.FormSelect.init(selects);
//     let datepickers = document.querySelectorAll(".datepicker");
//     let datepickersInstance = M.Datepicker.init(datepickers, {
//         format: "dd mmmm, yyyy",
//         yearRange: 3,
//         showClearBtn: true,
//         i18n: {
//             done: "Select"
//         }
//     });
// });