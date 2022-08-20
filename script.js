const quizData = [
  {
    question: "Tiêu chuẩn ISO-14598 đưa ra:",
    a: "Đưa ra quy trình đánh giá tính an toàn cho sản phẩm phần mềm",
    b: "Đưa ra quy trình đánh giá hiệu quả của phần mềm",
    c: "Đưa ra quy trình đánh giá chất lượng cho sản phẩm phần mềm",
    d: "Đưa ra quy trình đánh giá tính khả dụng cho sản phẩm phần mềm",
    correct: "c",
  },

  {
    question:
      "Kỹ thuật nào sau đây là xây dựng phần mềm từ các thành phần đã được thiết kế trong lĩnh vực công nghệ khác nhau?",
    a: "Extreme programming.",
    b: "Evolutionary prototyping.",
    c: "Component architecture.",
    d: "Open-source development.",
    correct: "c",
  },
  {
    question: "Yêu cầu có thể chia ra thành các lọai nào sau đây?",
    a: "Chức năng, phi chức năng, yêu cầu hệ thống.",
    b: "Chức năng, phi chức năng",
    c: "Chức năng, phi chức năng, yêu cầu miền ứng dụng.",
    d: "Chức năng, phi chức năng, yêu cầu nghiệp vụ.",
    correct: "b",
  },
  {
    question: "Phân tích yêu cầu bao gồm 3 hoạt động theo đúng thứ tự ?",
    a: "Làm tài liệu yêu cầu, làm rõ yêu cầu, xem xét yêu cầu.",
    b: "Làm rõ yêu cầu, xem xét yêu cầu, làm tài liệu yêu cầu.",
    c: "Xem xét yêu cầu, làm tài liệu yêu cầu, làm rõ yêu cầu.",
    d: "Làm rõ yêu cầu, làm tài liệu yêu cầu, xem xét yêu cầu.",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function randomobj(obj) {
  var objkeys = Object.keys(obj);
  return objkeys[Math.floor(Math.random() * objkeys.length)];
}

loadQuiz();
function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>Bạn đã trả lời đúng ${score}/${quizData.length} câu hỏi.</h2>

                <button onclick="location.reload()">Làm lại</button>
            `;
    }
  }
});
