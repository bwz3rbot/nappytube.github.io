// Radial Gradient effect

const updateGradient = function () {
    let num = 0;
    let css = String;
    let leftColor = 10;
    let midColor = 45;
    let rightColor = 65;
    let lightBlue = `rgb(31, 210, 228)`;
    let smokePurps = `rgb(163, 144, 255)`
    let valentineRed = `rgb(238, 40, 175)`;



    for (i = 0; i < 420; i++) {
        console.log("420")
        setTimeout(() => {

        }, 2500)
        num = num + 5;
        if (num == 200) {
            num = 0;
        }
  
        css = `radial-gradient(circle at ${num}%, ${lightBlue} ${leftColor}%, ${smokePurps} ${midColor}%, ${valentineRed} ${rightColor}%)`;

        $(".power").css({
            'background': css,
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent'
        })



    }

    return Promise.resolve()
}


$(function () {
    updateGradient()
        .then(updateGradient)
        .then(updateGradient)
})
