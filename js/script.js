var form = document.querySelector(".booking-search-frm");
var btn = document.querySelector(".booking-btn");
var dateBegin = form.querySelector("[name=date-begin]");
var dateEnd = form.querySelector("[name=date-end]");
var adultsCount = form.querySelector("[name=adults-count]");
var childrenCount = form.querySelector("[name=children-count]");

var storageAdults = localStorage.getItem("adultsCount");
var storageChildren = localStorage.getItem("childrenCount");

var adultsPlus = form.querySelector(".adults-plus");
var adultsMinus = form.querySelector(".adults-minus");
var childrenPlus = form.querySelector(".children-plus");
var childrenMinus = form.querySelector(".children-minus");

if (storageAdults) {
    adultsCount.value = storageAdults;
}
if (storageChildren) {
    childrenCount.value = storageChildren;
}

btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("form-show");
    form.classList.remove("form-error");
});

form.addEventListener("submit", function (evt) {
    if (!dateBegin.value || !dateEnd.value || !adultsCount.value || !childrenCount.value) {
        evt.preventDefault();
        form.classList.remove("form-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("form-error");
    } else {
        localStorage.setItem("adultsCount", adultsCount.value);
        localStorage.setItem("childrenCount", childrenCount.value);
    }
});

adultsPlus.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!adultsCount.value) {
        adultsCount.value = 1;
    } else {
        adultsCount.value = parseInt(adultsCount.value) + 1;
    }
});

adultsMinus.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!adultsCount.value) {
        adultsCount.value = 0;
    } else if (adultsCount.value > (adultsCount.min)) {
        adultsCount.value = parseInt(adultsCount.value) - 1;
    }
});

childrenPlus.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!childrenCount.value) {
        childrenCount.value = 1;
    } else {
        childrenCount.value = parseInt(childrenCount.value) + 1;
    }
});

childrenMinus.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!childrenCount.value) {
        childrenCount.value = 0;
    } else if (childrenCount.value > (childrenCount.min)) {
        childrenCount.value = parseInt(childrenCount.value) - 1;
    }
});