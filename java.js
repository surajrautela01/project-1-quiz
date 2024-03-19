const quizQuestions = [
    { question: "Qns1:_______ is the smallest unit of data in a computer ?", options: ["Gigabyte", "Bit", "Byte", "Terabyte"], correctAnswer: "Bit" },
    { question: "Qns2: Which of the following is NOT an anti-virus software ?", options: ["Avast", "Linux", "Norton", "Kaspersky"], correctAnswer: "Linux" },
    { question: "Qns3: In the context of digital computer, which of the following pairs of digits is referred to as binary code ?", options: ["3 and 4", "0 and 1", "2 and 3", "1 and 2"], correctAnswer: "0 and 1" },
    { question: "Qns4:Which unit of the computer is considered as the brain of the computer ?", options: ["Memory unit", "Input Unit", "CPU", "Output Unit"], correctAnswer: "CPU" },
    {
        question: "Qns5:What is the full form of PROM ?",
        options: ["Program read-only memory ", "Primary Read only memory", "Programmable read-only memory ", "Program read-output memory "],
        correctAnswer: "Programmable read-only memor"
    },
    {
        question: "Qns6:Which of the following is an input device used to enter motion data in computers or other electronic devices ?",
        options: ["Monitor", "Trackball", "Plotter  ", "Joystick  "],
        correctAnswer: "Trackball"
    },
    {
        question: "Qns7:In the context of computing, a byte is equal to _____ bits ?",
        options: ["4", "16", "24", "8"],
        correctAnswer: "8"
    },
    {
        question: "Qns8:Which of the following devices is NOT used to enter data into a computer ?",
        options: ["Mouse", "Keyboard", "Scanner", "Monitor"],
        correctAnswer: "Monitor"
    },
    {
        question: "Qns9:__________ is the process of finding errors in software code ?",
        options: ["Hacking", "Compiling", "Debugging", "Testing"],
        correctAnswer: "Debugging"
    },
    {
        question: "Qns10:A series of instructions that tells a computer what to do and how to do it is called a ________ ?",
        options: ["program", "Command", "User Response", "Processor"],
        correctAnswer: "program "
    },

];

const qnsContainer = document.querySelector('.qns');

quizQuestions.forEach((obj, index) => {
    const qnselement = document.createElement("div")
    qnselement.classList.add("qns")
    qnselement.innerHTML = `<h3>${obj.question}</h3><ul>${obj.options.map(option => `<li><input type="radio" name="question${index}" value="${option}">${option}</li>`).join("")}</ul>`;
    qnsContainer.appendChild(qnselement);
});
const submitbutton = document.createElement("button");
submitbutton.textContent = "submit"
submitbutton.classList.add("submit-button");
submitbutton.addEventListener("click", () => {
    let score = 0;
    quizQuestions.forEach((questionObj, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === questionObj.correctAnswer) score++;
    });
    document.querySelector('.result').innerHTML = `<strong>Your score: ${score} out of ${quizQuestions.length}</strong>`;
});
qnsContainer.appendChild(submitbutton);
