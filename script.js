
function showDiv() {
    document.getElementById('welcomeDiv').style.display = "block"  
     
}

function hideButton() {
    document.getElementById('pradėti').style.display = "none"  
}

class Quiz {
    constructor(questions) {
        this.questions = questions  
        this.currQuestion = 0  
        this.score = 0  
        this.questionElem = document.getElementById("ques")  
        this.optionsElem = document.getElementById("opt")  
    }

    loadQuestion() {
        const currentQuestionElement = document.getElementById("currentQuestion")   
        currentQuestionElement.textContent = `Klausimas ${this.currQuestion + 1} iš ${this.questions.length}`   

        this.questionElem.textContent = this.questions[this.currQuestion].q   
        this.optionsElem.innerHTML = ""   

        for (let i = 0 ; i < this.questions[this.currQuestion].a.length ; i++) {
            const choicesDiv = document.createElement("div")   
            const choiceButton = document.createElement("button")   

            choiceButton.textContent = this.questions[this.currQuestion].a[i].text   
            choiceButton.setAttribute("value", i)   
            choiceButton.addEventListener("click", () => this.checkAnswer(i))   

            choicesDiv.appendChild(choiceButton)   
            this.optionsElem.appendChild(choicesDiv)   
        }
    }

    loadScore() {
        const totalScore = document.getElementById("score")  
        totalScore.textContent = `Scored: ${this.score}  `  
        document.querySelector('h1').style.display = "none"  
        document.querySelector('p').style.display = "none"
        document.querySelector('hr').style.display = "none"
    }

    nextQuestion() {
        if (this.currQuestion < this.questions.length - 1) {
            this.currQuestion++  
            this.loadQuestion()  
        } else {
            this.optionsElem.remove()  
            this.questionElem.remove()  
            this.loadScore()  
        }
    }

    checkAnswer(selectedAns) {
        if (this.questions[this.currQuestion].a[selectedAns].isCorrect) {
            this.score++  
            console.log("Correct")  
        }

        this.nextQuestion()  
    }


  
    
}


const Questions = [
    {
        q: "Kam naudingos morkos?",
        a: [
            { text: "Niekam", isCorrect: false },
            { text: "Hitleriui", isCorrect: false },
            { text: "Kepenims", isCorrect: false },
            { text: "Odai", isCorrect: true }
        ]
    },

    {
        q: "Kam naudingi obuoliai?",
        a: [{ text: "Širdžiai", isCorrect: false},
        { text: "Kojoms", isCorrect: false },
        { text: "Delfinams", isCorrect: false },
        { text: "Virškinimui", isCorrect: true }
        ]
    
    },

    {
        q: "Kokias ligas padeda gydyti agrastai?",
        a: [{ text: "Cukrini diabetą", isCorrect: true },
        { text: "Kepenų cirozę", isCorrect: false },
        { text: "Nemiga", isCorrect: false },
        { text: "Vėžį", isCorrect: false }
        ]
    
    },

    {
        q: "Kokio vitamino gausu apelsinuose?",
        a: [{ text: "Vitamino E", isCorrect: false },
        { text: "Vitamino A", isCorrect: false },
        { text: "Vitamino C", isCorrect: true },
        { text: "Vitamino B", isCorrect: false }
        ]
     },
     {
        q: "Kokiais dalykais yra turtingi arbūzai?",
        a: [{ text: "Vitaminais", isCorrect: false },
        { text: "Mineralais", isCorrect: false },
        { text: "Antioksidantais", isCorrect: false },
        { text: "Visi teisingi", isCorrect: true }
        ]
     }
] 

const quiz = new Quiz(Questions)  


function showQuiz() {
    quiz.loadQuestion()
    showDiv()
    hideButton()
}

