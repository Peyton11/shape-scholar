// Peyton Gardner
// quiz-shapes.js

document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { question: "Which of the following shapes has six square faces of equal size?", options: ["Cube", "Sphere", "Cylinder", "Cone"], answer: 0 },
        { question: "What is the name of the shape that is perfectly round, with all points on its surface equidistant from the center?", options: ["Cube", "Sphere", "Cylinder", "Cone"], answer: 1 },
        { question: "Which shape has two parallel circular bases and a curved surface connecting them?", options: ["Cube", "Sphere", "Cylinder", "Cone"], answer: 2 },
        { question: "Which shape has a circular base and a single vertex opposite the base, forming a pointed top?", options: ["Cube", "Sphere", "Cylinder", "Cone"], answer: 3 },
        { question: "What shape has a polygonal base and triangular faces that meet at a single point?", options: ["Cube", "Sphere", "Pyramid", "Cylinder"], answer: 2 },
        { question: "Which shape has two triangular bases connected by three rectangular faces?", options: ["Triangular Prism", "Cube", "Cone", "Sphere"], answer: 0 },
        { question: "What shape has six rectangular faces, with opposite faces being congruent?", options: ["Rectangular Prism", "Cube", "Sphere", "Pyramid"], answer: 0 },
        { question: "Which shape has two pentagonal bases and five rectangular faces connecting the bases?", options: ["Pentagonal Prism", "Cube", "Cone", "Cylinder"], answer: 0 },
        { question: "What shape has two hexagonal bases and six rectangular faces connecting the bases?", options: ["Hexagonal Prism", "Cube", "Sphere", "Pyramid"], answer: 0 },
        { question: "Which shape has two heptagonal (seven-sided) bases and seven rectangular faces connecting them?", options: ["Heptagonal Prism", "Cube", "Cylinder", "Pyramid"], answer: 0 },
        { question: "What shape has two octagonal (eight-sided) bases and eight rectangular faces connecting them?", options: ["Octagonal Prism", "Cube", "Sphere", "Cone"], answer: 0 },
        { question: "Which shape has two nonagonal (nine-sided) bases and nine rectangular faces connecting them?", options: ["Nonagonal Prism", "Cube", "Sphere", "Cylinder"], answer: 0 },
        { question: "What is the name of the three-dimensional shape where all cross-sections are ellipses?", options: ["Ellipsoid", "Sphere", "Cone", "Cube"], answer: 0 },
        { question: "Which shape looks like a donut and is formed by rotating a circle around an axis outside the circle?", options: ["Torus", "Cylinder", "Sphere", "Pyramid"], answer: 0 },
        { question: "What shape has eight equilateral triangle faces, six vertices, and twelve edges?", options: ["Octahedron", "Cube", "Cylinder", "Cone"], answer: 0 },
        { question: "Which shape has four triangular faces and is one of the five Platonic solids?", options: ["Tetrahedron", "Cube", "Sphere", "Cylinder"], answer: 0 },
        { question: "Which shape has twelve regular pentagonal faces, twenty vertices, and thirty edges?", options: ["Dodecahedron", "Cube", "Cone", "Sphere"], answer: 0 },
        { question: "What is the name of the shape that has twenty equilateral triangle faces?", options: ["Icosahedron", "Cube", "Cylinder", "Cone"], answer: 0 },
        { question: "Which shape is formed by slicing a cone or pyramid parallel to the base, creating a truncated version?", options: ["Frustum", "Sphere", "Cube", "Pyramid"], answer: 0 },
        { question: "What shape consists of two hexagonal faces connected by a ring of triangles?", options: ["Hexagonal Antiprism", "Cube", "Sphere", "Cone"], answer: 0 }
    ];

    const questionContainer = document.getElementById("question-container");
    const nextBtn = document.getElementById("next-button");
    const scoreContainer = document.getElementById("score-container");
    const scoreDisplay = document.getElementById("score");
    const restartBtn = document.getElementById("restart-button");

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion(index) {
        const questionData = questions[index];
        questionContainer.innerHTML = `
            <h2 class="quiz-header">${questionData.question}</h2>
            <ul>
                ${questionData.options
            .map((option, i) => `<li><input type="radio" name="answer" value="${i}"> ${option}</li>`)
            .join("")}
            </ul>
        `;
    }

    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            const answer = parseInt(selectedOption.value);
            if (answer === questions[currentQuestionIndex].answer) {
                score++;
            }
        }
    }

    function showScore() {
        questionContainer.style.display = "none";
        nextBtn.style.display = "none";
        scoreContainer.style.display = "block";
        scoreDisplay.textContent = score;
    }

    nextBtn.addEventListener("click", function () {
        checkAnswer();
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            showScore();
        }
    });

    restartBtn.addEventListener("click", function () {
        currentQuestionIndex = 0;
        score = 0;
        scoreContainer.style.display = "none";
        questionContainer.style.display = "block";
        nextBtn.style.display = "block";
        loadQuestion(currentQuestionIndex);
    });

    loadQuestion(currentQuestionIndex);
});
