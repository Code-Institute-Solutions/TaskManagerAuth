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

    validateMaterializeSelect();
    function validateMaterializeSelect() {
        let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
        let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
        if ($("select.validate").prop("required")) {
            $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
        }
        $(".select-wrapper input.select-dropdown").on("focusin", function () {
            $(this).parent(".select-wrapper").on("change", function () {
                if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                    $(this).children("input").css(classValid);
                }
            });
        }).on("click", function () {
            if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
                $(this).parent(".select-wrapper").children("input").css(classValid);
            } else {
                $(".select-wrapper input.select-dropdown").on("focusout", function () {
                    if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                        if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                            $(this).parent(".select-wrapper").children("input").css(classInvalid);
                        }
                    }
                });
            }
        });
    }
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
//     validateMaterializeSelect();
//     function validateMaterializeSelect() {
//         let classValid = "border-bottom: 1px solid #4caf50; box-shadow: 0 1px 0 0 #4caf50;";
//         let classInvalid = "border-bottom: 1px solid #f44336; box-shadow: 0 1px 0 0 #f44336;";
//         let selectValidate = document.querySelector("select.validate");
//         let selectWrapperInput = document.querySelector(".select-wrapper input.select-dropdown");
//         if (selectValidate.hasAttribute("required")) {
//             selectValidate.style.cssText = "display: block; height: 0; padding: 0; width: 0; position: absolute;";
//         }
//         selectWrapperInput.addEventListener("focusin", (e) => {
//             e.target.parentNode.addEventListener("change", () => {
//                 ulSelectOptions = e.target.parentNode.childNodes[1].childNodes;
//                 for (let i = 0; i < ulSelectOptions.length; i++) {
//                     if (ulSelectOptions[i].className == "selected" && ulSelectOptions[i].hasAttribute != "disabled") {
//                         e.target.style.cssText = classValid;
//                     }
//                 }
//             });
//         });
//         selectWrapperInput.addEventListener("click", (e) => {
//             ulSelectOptions = e.target.parentNode.childNodes[1].childNodes;
//             for (let i = 0; i < ulSelectOptions.length; i++) {
//                 if (ulSelectOptions[i].className == "selected" && ulSelectOptions[i].hasAttribute != "disabled" && ulSelectOptions[i].style.backgroundColor == "rgba(0, 0, 0, 0.03)") {
//                     e.target.style.cssText = classValid;
//                 } else {
//                     e.target.addEventListener("focusout", () => {
//                         if (e.target.parentNode.childNodes[3].hasAttribute("required")) {
//                             if (e.target.style.borderBottom != "1px solid rgb(76, 175, 80)") {
//                                 e.target.style.cssText = classInvalid;
//                             }
//                         }
//                     });
//                 }
//             }
//         });
//     }
// });