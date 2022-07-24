function calculate_gpa(){
    let data = Array(30);
    
    for(let i = 0; i < 30; i++){
        data[i] = Array(2).fill(0);
        data[i][0] = document.getElementById("grade"+String(i));
        data[i][1] = document.getElementById("credit"+String(i));
    }

    for(let i = 0; i < 30; i++){
        console.log(data[i][0].value);
        console.log(data[i][1].value);
    }

    let sum_score = 0;
    let sum_credit = 0;
    // calculate
    for(let i = 0; i < 30; i++){
        sum_score = sum_score + data[i][0].value * data[i][1].value;
        sum_credit = sum_credit + Number(data[i][1].value);
    }

    let gpa = sum_score / sum_credit;
    gpa = Math.floor(gpa * Math.pow(10, 2)) / Math.pow(10, 2);
    
    console.log(sum_score);
    console.log(sum_credit);
    console.log(gpa);
    document.getElementById('result').innerHTML = gpa ;
}
