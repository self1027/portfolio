document.querySelectorAll('.left-panel a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Remove o "#"
        const targetSection = document.getElementById(targetId);

        // Rola suavemente até a seção
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
    
});
// Seleciona os elementos
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');

// Variável para controlar o estado do scroll
let isScrolling = false;

// Adiciona um listener para o evento de scroll no painel fixo
leftPanel.addEventListener('wheel', (event) => {
    // Previne o comportamento padrão de scroll
    event.preventDefault();

    // Evita múltiplos eventos de scroll simultâneos
    if (isScrolling) return;

    // Marca que o scroll está ocorrendo
    isScrolling = true;

    // Aplica o scroll na seção rolável
    rightPanel.scrollBy({
        top: event.deltaY, // Usa a direção do scroll
    });

    // Reseta o estado do scroll após um pequeno delay
    setTimeout(() => {
        isScrolling = false;
    }); // Ajuste o delay conforme necessário
});

document.querySelector('.contatos a[href*="curriculo.pdf"]').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão
    window.open(this.href, '_blank'); // Abre o PDF em uma nova aba
});

// Script para garantir que os links na parte fixa abram em uma nova aba
const links = document.querySelectorAll('.contatos a[target="_blank"]');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link
        window.open(this.href, '_blank'); // Abre o link em uma nova aba
    });
});

// Script para navegação suave (se já existir, mantenha)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Remove o "#"
        const targetSection = document.getElementById(targetId);

        // Rola suavemente até a seção
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Script para atualizar o gradiente com base na posição do mouse
const gradient = document.querySelector('.gradient');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    gradient.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
});

// Traduções
const translations = {
    "pt-BR": {
        "title": "Portfólio de Murilo D.",
        "role": "Desenvolvedor Backend",
        "description": "Apaixonado por tecnologia e inovação, com foco em criar soluções eficientes e escaláveis. Sempre em busca de novos desafios e aprendizado contínuo.",
        "about": "Sobre Mim",
        "aboutText1": "Sou um desenvolvedor Backend, com experiência sólida em Node.js, Express, MongoDB, Java, Android e Cloud Run. Minha jornada no desenvolvimento de software é movida pela busca constante por aprendizado e aprimoramento, sempre focado em criar soluções eficientes, escaláveis e de alto desempenho.",
        "aboutText2": "Atualmente, estou em busca da minha primeira oportunidade profissional, e acredito que minha dedicação, habilidades técnicas e capacidade de adaptação podem agregar valor à sua equipe.",
        "skills": "Habilidades Técnicas",
        "projects": "Projetos",
        "apiFixHub": "API FixHub",
        "apiFixHubDescription": "A API FixHub foi desenvolvida para facilitar o gerenciamento de manutenções em condomínios e edifícios residenciais. Ela permite que síndicos e moradores façam solicitações de reparos de forma simples e organizada, garantindo que responsáveis técnicos possam visualizar, acompanhar e concluir essas demandas com eficiência.",
        "pizzaMenu": "Menu de Pizzaria",
        "pizzaMenuDescription": "O Menu de Pizzaria é um sistema online que exibe um catálogo interativo de pizzas, aperitivos e acréscimos, além de permitir que os clientes compartilhem suas opiniões sobre os produtos.",
        "verGitHub": "Ver no GitHub",
        "vejaOnline": "Veja online",
        "curriculo": "Currículo",
        "email": "E-Mail",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "backend": "Back-End",
        "frontend": "Front-End",
        "tools": "Ferramentas",
        "nodejs": "Node.js, Express",
        "postgresql": "PostgreSQL, MongoDB Atlas",
        "cloud": "Cloud Run, Google Cloud Storage",
        "rest": "APIs RESTful, autenticação JWT",
        "architecture": "Arquitetura modularizada e escalável",
        "html": "HTML5, CSS3, JavaScript",
        "fonts": "FontAwesome, Google Fonts",
        "git": "Git, GitHub",
        "postman": "Postman para testes de API",
        "vscode": "Visual Studio Code"
    },
    "en-US": {
        "title": "Murilo D.'s Portfolio",
        "role": "Backend Developer",
        "description": "Passionate about technology and innovation, focused on creating efficient and scalable solutions. Always seeking new challenges and continuous learning.",
        "about": "About Me",
        "aboutText1": "I am a Backend Developer with solid experience in Node.js, Express, MongoDB, Java, Android, and Cloud Run. My journey in software development is driven by a constant pursuit of learning and improvement, always focused on creating efficient, scalable, and high-performance solutions.",
        "aboutText2": "Currently, I am seeking my first professional opportunity, and I believe that my dedication, technical skills, and adaptability can add value to your team.",
        "skills": "Technical Skills",
        "projects": "Projects",
        "apiFixHub": "API FixHub",
        "apiFixHubDescription": "The API FixHub was developed to facilitate maintenance management in condominiums and residential buildings. It allows managers and residents to submit repair requests in a simple and organized manner, ensuring that technical staff can view, track, and complete these demands efficiently.",
        "pizzaMenu": "Pizza Menu",
        "pizzaMenuDescription": "The Pizza Menu is an online system that displays an interactive catalog of pizzas, appetizers, and toppings, allowing customers to share their opinions about the products.",
        "verGitHub": "View on GitHub",
        "vejaOnline": "See online",
        "curriculo": "Resume",
        "email": "E-Mail",
        "linkedin": "LinkedIn",
        "github": "GitHub",
        "backend": "Back-End",
        "frontend": "Front-End",
        "tools": "Tools",
        "nodejs": "Node.js, Express",
        "postgresql": "PostgreSQL, MongoDB Atlas",
        "cloud": "Cloud Run, Google Cloud Storage",
        "rest": "RESTful APIs, JWT authentication",
        "architecture": "Modular and scalable architecture",
        "html": "HTML5, CSS3, JavaScript",
        "fonts": "FontAwesome, Google Fonts",
        "git": "Git, GitHub",
        "postman": "Postman for API testing",
        "vscode": "Visual Studio Code"
    }
};

// Função para atualizar o texto com base no idioma selecionado
function updateLanguage(lang) {
    document.title = translations[lang].title;
    document.querySelector(".profile h1").textContent = translations[lang].title;
    document.querySelector(".profile p").textContent = translations[lang].role;
    document.querySelector(".descricao p").textContent = translations[lang].description;
    document.querySelector("#sobre h2").textContent = translations[lang].about;
    document.querySelector("#sobre p").textContent = translations[lang].aboutText1;
    document.querySelector("#sobre p + p").textContent = translations[lang].aboutText2;
    document.querySelector("#habilidades h2").textContent = translations[lang].skills;
    document.querySelector("#projetos h2").textContent = translations[lang].projects;
    document.querySelector("#projetos .projeto h3").textContent = translations[lang].apiFixHub;
    document.querySelector("#projetos .projeto p").textContent = translations[lang].apiFixHubDescription;
    document.querySelector("#projetos .projeto + .projeto h3").textContent = translations[lang].pizzaMenu;
    document.querySelector("#projetos .projeto + .projeto p").textContent = translations[lang].pizzaMenuDescription;

    // Atualiza os textos dos links
    // Atualiza os textos dos links
    document.querySelectorAll('.links-projeto a').forEach((link, index) => {
        if (link.classList.contains('link-online')) {
            link.innerHTML = `<i class="fas fa-external-link-alt"></i> ${translations[lang].vejaOnline}`;
        } else {
            link.innerHTML = `<i class="fab fa-github"></i> ${translations[lang].verGitHub}`;
        }
    });

    // Atualiza os textos dos contatos
    document.querySelectorAll('.contatos a').forEach((link) => {
        const spans = link.querySelectorAll('span');
        spans[0].textContent = translations[lang][link.title.toLowerCase()];

        if (link.title.toLowerCase() === "curriculo") {
            link.href = lang === "pt-BR" ? "./media/curriculo.pdf" : "./media/resume.pdf";
        }
    });

    // Atualiza as habilidades
    document.querySelectorAll('#habilidades .habilidade h3').forEach((h3, index) => {
        if (index === 0) h3.textContent = translations[lang].backend;
        if (index === 1) h3.textContent = translations[lang].frontend;
        if (index === 2) h3.textContent = translations[lang].tools;
    });

    document.querySelectorAll('#habilidades .habilidade ul li').forEach((li, index) => {
        if (index === 0) li.innerHTML = `<i class="fas fa-code"></i> ${translations[lang].nodejs}`;
        if (index === 1) li.innerHTML = `<i class="fas fa-database"></i> ${translations[lang].postgresql}`;
        if (index === 2) li.innerHTML = `<i class="fas fa-cloud"></i> ${translations[lang].cloud}`;
        if (index === 3) li.innerHTML = `<i class="fas fa-cogs"></i> ${translations[lang].rest}`;
        if (index === 4) li.innerHTML = `<i class="fas fa-project-diagram"></i> ${translations[lang].architecture}`;
        if (index === 5) li.innerHTML = `<i class="fab fa-html5"></i> ${translations[lang].html}`;
        if (index === 6) li.innerHTML = `<i class="fas fa-paint-brush"></i> ${translations[lang].fonts}`;
        if (index === 7) li.innerHTML = `<i class="fab fa-git"></i> ${translations[lang].git}`;
        if (index === 8) li.innerHTML = `<i class="fas fa-tools"></i> ${translations[lang].postman}`;
        if (index === 9) li.innerHTML = `<i class="fas fa-code"></i> ${translations[lang].vscode}`;
    });

    document.querySelectorAll('nav a').forEach((link, index) => {
        if (index === 0) link.textContent = translations[lang].about;
        if (index === 1) link.textContent = translations[lang].skills;
        if (index === 2) link.textContent = translations[lang].projects;
    });
}

// Evento para alternar o idioma
document.getElementById("language-toggle").addEventListener("change", function() {
    const lang = this.checked ? "en-US" : "pt-BR";
    document.getElementById("language-label").textContent = lang.toUpperCase();
    updateLanguage(lang);
});

// Inicializa o idioma padrão
updateLanguage("pt-BR");