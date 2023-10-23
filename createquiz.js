document.getElementById('mark-btn').addEventListener('click', markQuiz);

function markQuiz() {
    let inputs = [];
    let responses = [];
    const ans_key = [
        [1],
        [0.33],
        [-3.5],
        [-1, -1.5]
    ];
    for (let i = 0; i < 4; i++) {
        inputs.push(document.getElementById(`question${i}`));
        responses.push(Number(inputs[i].value));
    }

    let correct = 0;
    for (let i = 0; i < 4; i++) {
        let show_ans = document.getElementById(`ans${i}`);
        if (ans_key[i].includes(responses[i])) {
            correct++;
            inputs[i].style.border = '2px solid #00cc00';
            show_ans.style.color = '#00cc00';
            show_ans.innerText = '\u2714'; // \u2714 is ✔ (Heavy Check Mark)
        } else {
            inputs[i].style.border = '2px solid #cc0000';
            show_ans.style.color = '#cc0000';
            show_ans.innerText = `\u2716 | x = ${ans_key[i].join(' or ')}`; // \u2716 is ✖ (Heavy Multiplication X)
        }
    }
    document.getElementById('mark').innerText = `Score: ${correct}/4 (${Math.round(correct / 4 * 100)}%)`;
}