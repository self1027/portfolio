// Seleciona os elementos principais
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');

// Função de scroll suave
function smoothScrollTo(target) {
    const targetPosition = target.getBoundingClientRect().top + rightPanel.scrollTop;
    const startPosition = rightPanel.scrollTop;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
        rightPanel.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Scroll suave para links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) smoothScrollTo(targetSection);
    });
});

// Scroll do mouse no painel esquerdo
let isScrolling = false;
leftPanel.addEventListener('wheel', event => {
    event.preventDefault();
    if (isScrolling) return;
    isScrolling = true;
    rightPanel.scrollBy({ top: event.deltaY, behavior: 'smooth' });
    setTimeout(() => isScrolling = false, 100);
});

// Links externos e contatos
document.querySelectorAll('.contatos a').forEach(link => {
    const href = link.getAttribute('href');
    if (href.startsWith('http') || href.startsWith('mailto:')) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// Gradiente interativo
const gradient = document.querySelector('.gradient');
document.addEventListener('mousemove', e => {
    gradient.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
});

// Traduções
const translations = {
    "pt-BR": {
        title: "Murilo D.",
        role: "Desenvolvedor Backend",
        description: "Apaixonado por tecnologia e inovação, com foco em criar soluções eficientes e escaláveis. Sempre em busca de novos desafios e aprendizado contínuo.",
        about: "Sobre Mim",
        aboutText1: "Sou um desenvolvedor Backend, com experiência sólida em Node.js, Express, Bancos SQL e NOSQL, Cloud Run e AWS. Minha jornada no desenvolvimento de software é movida pela busca constante por aprendizado e aprimoramento, sempre focado em criar soluções eficientes, escaláveis e de alto desempenho.",
        skills: "Habilidades Técnicas",
        projects: "Projetos",
        livro: "Livro de Fiscalizações - Vigilância Sanitária",
        livroDescricao: "Durante meu tempo na Vigilância Sanitária (2023 – atual), desenvolvi um livro digital que substituiu o modelo físico, reduzindo o tempo de consulta de aproximadamente 5 minutos para apenas 10 segundos. Fui responsável por toda a concepção, desenvolvimento e implantação da solução, além de cuidar da parte de DevOps e garantir sua utilização contínua pelos agentes no dia a dia, trazendo mais agilidade e eficiência.",
        picpic: "PicPic - Editor de Imagens com Filtros",
        picpicDescricao: "O PicPic é uma aplicação web que permite aplicar filtros em imagens diretamente no navegador. Suporta filtros passa-baixa (média, mediana, moda) e passa-alta (Sobel, Laplaciano) com múltiplas camadas de processamento.",
        verGitHub: "Ver no GitHub",
        vejaOnline: "Veja online",
        curriculo: "Currículo",
        email: "E-Mail",
        linkedin: "LinkedIn",
        github: "GitHub",
        backend: "Back-End",
        frontend: "Front-End",
        tools: "Ferramentas",
        nodejs: "Node.js, Express",
        postgresql: "PostgreSQL, MongoDB Atlas",
        cloud: "Cloud Run, Google Cloud Storage",
        rest: "APIs RESTful, autenticação JWT",
        architecture: "Arquitetura modularizada e escalável",
        html: "HTML5, CSS3, JavaScript",
        fonts: "FontAwesome, Google Fonts",
        git: "Git, GitHub",
        postman: "Postman para testes de API",
        vscode: "Visual Studio Code",
        devops: "DevOps (CI/CD, Docker, Cloud Deploy)",
        oop: "Orientação a Objetos (OOP)",
        cleanCode: "Clean Code e boas práticas"
    },
    "en-US": {
        title: "Murilo D.",
        role: "Backend Developer",
        description: "Passionate about technology and innovation, focused on creating efficient and scalable solutions. Always seeking new challenges and continuous learning.",
        about: "About Me",
        aboutText1: "I am a Backend Developer with solid experience in Node.js, Express, SQL and NoSQL databases, Cloud Run, and AWS. My journey in software development is driven by a constant pursuit of learning and improvement, always focused on creating efficient, scalable, and high-performance solutions.",
        skills: "Technical Skills",
        projects: "Projects",
        livro: "Inspection Log - Health Surveillance",
        livroDescricao: "During my time at Health Surveillance (2023 – present), I developed a digital log that replaced the old physical model, reducing the consultation time from approximately 5 minutes to just 10 seconds. I handled the full development, deployment, and DevOps.",
        picpic: "PicPic - Image Editor with Filters",
        picpicDescricao: "PicPic is a web application allowing filters directly in the browser. Supports low-pass (mean, median, mode) and high-pass filters (Sobel, Laplacian) with multi-layer processing.",
        verGitHub: "View on GitHub",
        vejaOnline: "See online",
        curriculo: "Resume",
        email: "E-Mail",
        linkedin: "LinkedIn",
        github: "GitHub",
        backend: "Back-End",
        frontend: "Front-End",
        tools: "Tools",
        nodejs: "Node.js, Express",
        postgresql: "PostgreSQL, MongoDB Atlas",
        cloud: "Cloud Run, Google Cloud Storage",
        rest: "RESTful APIs, JWT authentication",
        architecture: "Modular and scalable architecture",
        html: "HTML5, CSS3, JavaScript",
        fonts: "FontAwesome, Google Fonts",
        git: "Git, GitHub",
        postman: "Postman for API testing",
        vscode: "Visual Studio Code",
        devops: "DevOps (CI/CD, Docker, Cloud Deploy)",
        oop: "Object-Oriented Programming (OOP)",
        cleanCode: "Clean Code and best practices"
    }
};

// Função para atualizar idioma
function updateLanguage(lang) {
    // Título e perfil
    document.title = translations[lang].title;
    document.querySelector(".profile h1").textContent = translations[lang].title;
    document.querySelector(".profile p").textContent = translations[lang].role;
    document.querySelector(".descricao p").textContent = translations[lang].description;

    // Seção Sobre
    document.querySelector("#sobre h2").textContent = translations[lang].about;
    document.querySelector("#sobre p").textContent = translations[lang].aboutText1;

    // Seção Habilidades
    document.querySelector("#habilidades h2").textContent = translations[lang].skills;

    // Seção Projetos
    document.querySelector("#projetos h2").textContent = translations[lang].projects;
    const projetos = document.querySelectorAll("#projetos .projeto");
    if (projetos.length >= 2) {
        projetos[0].querySelector("h3").textContent = translations[lang].livro;
        projetos[0].querySelector("p").textContent = translations[lang].livroDescricao;
        projetos[1].querySelector("h3").textContent = translations[lang].picpic;
        projetos[1].querySelector("p").textContent = translations[lang].picpicDescricao;
    }

    // Links de projetos
    document.querySelectorAll('.links-projeto a').forEach(link => {
        if (link.classList.contains('link-online')) {
            link.innerHTML = `<i class="fas fa-external-link-alt"></i> ${translations[lang].vejaOnline}`;
        } else {
            link.innerHTML = `<i class="fab fa-github"></i> ${translations[lang].verGitHub}`;
        }
    });

    // Contatos
    document.querySelectorAll('.contatos a').forEach(link => {
        const spans = link.querySelectorAll('span');
        spans[0].textContent = translations[lang][link.title.toLowerCase()];
        if (link.title.toLowerCase() === "curriculo") {
            link.href = lang === "pt-BR" ? "./media/CV-MuriloDiasChossani.pdf" : "./media/resume.pdf";
        }
    });

    const artigos = document.querySelectorAll('#habilidades .habilidade');
    artigos[0].querySelector('h3').textContent = translations[lang].backend;
    artigos[1].querySelector('h3').textContent = translations[lang].frontend;
    artigos[2].querySelector('h3').textContent = translations[lang].tools;


    // Atualiza seções de habilidades separadamente
    const backendLis = document.querySelectorAll('#habilidades .habilidade:nth-child(1) ul li');
    backendLis[0].innerHTML = `<i class="fas fa-code"></i> ${translations[lang].nodejs}`;
    backendLis[1].innerHTML = `<i class="fas fa-database"></i> ${translations[lang].postgresql}`;
    backendLis[2].innerHTML = `<i class="fas fa-cloud"></i> ${translations[lang].cloud}`;
    backendLis[3].innerHTML = `<i class="fas fa-cogs"></i> ${translations[lang].rest}`;
    backendLis[4].innerHTML = `<i class="fas fa-project-diagram"></i> ${translations[lang].architecture}`;
    backendLis[5].innerHTML = `<i class="fas fa-dharmachakra"></i> ${translations[lang].devops}`;
    backendLis[6].innerHTML = `<i class="fas fa-cube"></i> ${translations[lang].oop}`;
    backendLis[7].innerHTML = `<i class="fas fa-check-double"></i> ${translations[lang].cleanCode}`;

    const frontendLis = document.querySelectorAll('#habilidades .habilidade:nth-child(2) ul li');
    frontendLis[0].innerHTML = `<i class="fab fa-html5"></i> ${translations[lang].html}`;
    frontendLis[1].innerHTML = `<i class="fas fa-paint-brush"></i> ${translations[lang].fonts}`;

    const toolsLis = document.querySelectorAll('#habilidades .habilidade:nth-child(3) ul li');
    toolsLis[0].innerHTML = `<i class="fab fa-linux"></i> Linux`;
    toolsLis[1].innerHTML = `<i class="fab fa-git"></i> ${translations[lang].git}`;
    toolsLis[2].innerHTML = `<i class="fas fa-vials"></i> ${translations[lang].postman}`;
    toolsLis[3].innerHTML = `<i class="fas fa-code"></i> ${translations[lang].vscode}`;

    // Navegação
    const navLinks = document.querySelectorAll('nav a');
    navLinks[0].textContent = translations[lang].about;
    navLinks[1].textContent = translations[lang].skills;
    navLinks[2].textContent = translations[lang].projects;
}


// Toggle idioma
document.getElementById("language-toggle").addEventListener("change", function() {
    const lang = this.checked ? "en-US" : "pt-BR";
    document.getElementById("language-label").textContent = lang.toUpperCase();
    updateLanguage(lang);
});

// Inicializa idioma padrão
updateLanguage("pt-BR");
