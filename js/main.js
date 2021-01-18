

function calc() {
    let kreditSum = document.getElementById('kredit-sum').value;
    let yearPercent = document.getElementById('year-percent').value;
    let year = document.getElementById('year').value;
    let startPercent = document.getElementById('start-percent').value;
    let period = document.getElementById('period').value;
    let month = document.getElementById('month').value;

    let startPayment = kreditSum * startPercent / 100;
    let givenPayment = kreditSum - startPayment;
    let monthlyPayment = givenPayment / (period * 12);


    document.getElementById('start-payment').innerHTML = startPayment + " so'm";
    document.getElementById('all-sum').innerHTML = givenPayment + " so'm";
    document.getElementById('month-payment').innerHTML = monthlyPayment + " so'm";

    let content = "";


    for (let i = 0; i < period * 12; i++){

        let persent = (givenPayment * (yearPercent / 12) / 100);

        content +=
            "<tr>" +
            "<td>"+ (i + 1) +"</td>" +
            "<td></td>" +
            "<td></td>" +
            "<td>"+ givenPayment +"</td>" +
            "<td>"+ monthlyPayment +"</td>" +
            "<td>" + persent + "</td>" +
            "<td>"+ (monthlyPayment + persent) +"</td>" +
            "</tr>";

        givenPayment -= monthlyPayment;
    }
    document.getElementById('result').innerHTML = content;
}