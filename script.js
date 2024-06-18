const submitArrow = document.querySelector(".arrow");

function validateDays(days) {
  if (days < 1 || days > 31) {
    return false;
  } else {
    return true;
  }
}

function validateMonths(months) {
  if (months < 1 || months > 12) {
    return false;
  } else {
    return true;
  }
}

function validateYears(years) {
  if (years < 1990 || years > new Date().getFullYear()) {
    return false;
  } else {
    return true;
  }
}

submitArrow.addEventListener("click", function () {
  const currentDate = new Date();
  let userDays = document.querySelector(".day").value;
  let userMonths = document.querySelector(".month").value;
  let userYears = document.querySelector(".year").value;

  //calling the funstions and storing them in a variable and using the userDays,UserMonths & userYears as arguments
  const isValidDay = validateDays(userDays);
  const isValidMonth = validateMonths(userMonths);
  const isValidYear = validateYears(userYears);

  if (!isValidMonth) {
    document.querySelector(".invalidmonth").style.display = "block";
  } else if (!isValidDay) {
    document.querySelector(".invalidday").style.display = "block";
  } else if (!isValidYear) {
    document.querySelector(".invalidpast").style.display = "block";
  } else {
    const enteredDate = new Date(userMonths + "/" + userDays + "/" + userYears);
    const difDateInMs = currentDate - enteredDate;
    const difDateInDays = difDateInMs / 1000 / 60 / 60 / 24;

    const years = Math.floor(difDateInDays / 365);
    const daysRemainder = difDateInDays % 365;

    const months = Math.floor(daysRemainder / 31);
    const daysRemainder2 = Math.floor(daysRemainder % 31);

    document.querySelector(".yearsnumber").innerHTML = years;
    document.querySelector(".monthsnumber").innerHTML = months;
    document.querySelector(".daysnumber").innerHTML = daysRemainder2;
  }
});
