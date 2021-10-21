const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

submitBtn.addEventListener("click", e => {
    e.preventDefault();
    output.style.visibility = "visible";

    const bmi = getBmi();
    output.innerHTML = bmi;

    setBackground(bmi);
})

const getBmi = () => {
    const height = heightInput.value;
    const weight = weightInput.value;
    
    const bmi = weight / (height * height);
    return bmi;
}

const setBackground = bmi => {
    if (bmi < 16) {
        output.style.background = "#8911f2";
    } else if (bmi < 17) {
        output.style.background = "#3711f2";
    } else if (bmi < 18.5) {
        output.style.background = "#11f2eb";
    } else if (bmi < 25) {
        output.style.background = "#11f236";
    } else if (bmi < 30) {
        output.style.background = "#e3f211";
    } else if (bmi < 35) {
        output.style.background = "#f2d011";
    } else if (bmi < 40) {
        output.style.background = "#f26b11";
    } else {
        output.style.background = "#f21111";
    }
}