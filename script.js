const homePage = document.getElementById("home-page");

const coursePage = document.getElementById("course-page");

const environmentPage =
    document.getElementById("environment-page");


/* ==============================
   ELEMENTOS DO CURSO
================================= */

const courseLabel =
    document.getElementById("course-label");

const courseTitle =
    document.getElementById("course-title");

const courseDescription =
    document.getElementById("course-description");

const modelsContainer =
    document.getElementById("models-container");

const environmentTitle =
    document.getElementById("environment-title");


/* ==============================
   INFORMAÇÕES DOS CURSOS
================================= */

const courses = {

    tecnologia: {

        label: "TECNOLOGIA",

        title: "Escolha um gabinete",

        description:
            "Escolha um dos gabinetes disponíveis para iniciar sua montagem.",

        itemName: "Gabinete",

        icon: "💻",

        amount: 6
    },


    odontologia: {

        label: "ODONTOLOGIA",

        title: "Escolha um aparelho",

        description:
            "Escolha um dos aparelhos disponíveis para iniciar sua experiência.",

        itemName: "Aparelho",

        icon: "🦷",

        amount: 6
    },


    mecanica: {

        label: "MECÂNICA",

        title: "Escolha um motor",

        description:
            "Escolha um dos motores disponíveis para iniciar sua experiência.",

        itemName: "Motor",

        icon: "⚙️",

        amount: 6
    }

};


/* ==============================
   ABRIR CURSO
================================= */

function openCourse(courseName) {

    const course = courses[courseName];

    if (!course) {
        return;
    }


    /* Atualiza textos */

    courseLabel.textContent =
        course.label;

    courseTitle.textContent =
        course.title;

    courseDescription.textContent =
        course.description;


    /* Limpa os cards antigos */

    modelsContainer.innerHTML = "";


    /* Cria os modelos */

    for (let i = 1; i <= course.amount; i++) {

        const card =
            document.createElement("article");

        card.classList.add("model-card");


        card.innerHTML = `

            <div>

                <span class="model-number">
                    OPÇÃO ${String(i).padStart(2, "0")}
                </span>

                <h3>
                    ${course.itemName} ${i}
                </h3>

            </div>

            <div class="model-preview">
                ${course.icon}
            </div>

            <button
                class="model-button"
                onclick="openEnvironment('${course.itemName} ${i}')">

                Selecionar

            </button>

        `;


        modelsContainer.appendChild(card);
    }


    /* Troca a página */

    homePage.classList.add("hidden");

    environmentPage.classList.add("hidden");

    coursePage.classList.remove("hidden");


    /* Volta para o topo */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==============================
   ABRIR AMBIENTE
================================= */

function openEnvironment(itemName) {

    environmentTitle.textContent =
        itemName;


    coursePage.classList.add("hidden");

    homePage.classList.add("hidden");

    environmentPage.classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==============================
   VOLTAR PARA OS MODELOS
================================= */

function backToModels() {

    environmentPage.classList.add("hidden");

    coursePage.classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==============================
   VOLTAR PARA HOME
================================= */

function showHome() {

    coursePage.classList.add("hidden");

    environmentPage.classList.add("hidden");

    homePage.classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==============================
   BOTÃO "COMEÇAR AGORA"
================================= */

function scrollToThemes() {

    document.getElementById("themes")
        .scrollIntoView({
            behavior: "smooth"
        });
}