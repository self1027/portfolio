// Seleciona os elementos
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');

// Configuração do scroll suave
function smoothScrollTo(target) {
    const targetPosition = target.getBoundingClientRect().top + rightPanel.scrollTop;
    const startPosition = rightPanel.scrollTop;
    const distance = targetPosition - startPosition;
    const duration = 800; // Duração em milissegundos
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
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

// Configura o scroll suave para os links de navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            smoothScrollTo(targetSection);
        }
    });
});

// Configura o scroll do mouse no painel esquerdo
let isScrolling = false;
leftPanel.addEventListener('wheel', (event) => {
    event.preventDefault();
    
    if (isScrolling) return;
    isScrolling = true;

    rightPanel.scrollBy({
        top: event.deltaY,
        behavior: 'smooth'
    });

    setTimeout(() => {
        isScrolling = false;
    }, 100);
});

// Configuração dos links de contato
document.querySelectorAll('.contatos a').forEach(link => {
    const href = link.getAttribute('href');
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    
    if (isExternal) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// Configuração do gradiente
const gradient = document.querySelector('.gradient');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    gradient.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
});

// Traduções
const translations = {
    "pt-BR": {
        "title": "Murilo D.",
        "role": "Desenvolvedor Backend",
        "description": "Apaixonado por tecnologia e inovação, com foco em criar soluções eficientes e escaláveis. Sempre em busca de novos desafios e aprendizado contínuo.",
        "about": "Sobre Mim",
        "aboutText1": "Sou um desenvolvedor Backend, com experiência sólida em Node.js, Express, Bancos SQL e NOSQL, Cloud Run e AWS. Minha jornada no desenvolvimento de software é movida pela busca constante por aprendizado e aprimoramento, sempre focado em criar soluções eficientes, escaláveis e de alto desempenho.",
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
        "vscode": "Visual Studio Code",
        "livro": "Livro de Fiscalizações - Vigilância Sanitária",
        "livroDescricao": "Aplicação web desenvolvida para informatizar o registro de denúncias, inspeções e ações técnicas da Vigilância Sanitária. Substitui o antigo processo manual, oferecendo um sistema moderno de cadastro, busca e emissão de relatórios com segurança e agilidade.",
        "picpic": "PicPic - Editor de Imagens com Filtros",
        "picpicDescricao": "O PicPic é uma aplicação web que permite aplicar filtros em imagens diretamente no navegador. É possível utilizar filtros passa-baixa (como média, mediana e moda) e filtros passa-alta (como Sobel e Laplaciano), com suporte a múltiplas camadas de processamento sobre a mesma imagem.",

    },
    "en-US": {
        "title": "Murilo D.",
        "role": "Backend Developer",
        "description": "Passionate about technology and innovation, focused on creating efficient and scalable solutions. Always seeking new challenges and continuous learning.",
        "about": "About Me",
        "aboutText1": "I am a Backend Developer with solid experience in Node.js, Express, SQL and NOSQL Databases, Cloud Run and AWS. My journey in software development is driven by a constant pursuit of learning and improvement, always focused on creating efficient, scalable, and high-performance solutions.",
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
        "vscode": "Visual Studio Code",
        "livro": "Inspection Log - Health Surveillance",
        "livroDescricao": "Web application developed to digitize the recording of complaints, inspections, and technical actions for the Health Surveillance service. Replaces the manual process with a modern system for registration, search, and report generation with security and agility.",
        "picpic": "PicPic - Image Editor with Filters",
        "picpicDescricao": "PicPic is a web application that allows applying filters to images directly in the browser. It supports low-pass filters (like mean, median, and mode) and high-pass filters (such as Sobel and Laplacian), with multi-layer processing support.",

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
    document.querySelector("#habilidades h2").textContent = translations[lang].skills;
    document.querySelector("#projetos h2").textContent = translations[lang].projects;
    const projetos = document.querySelectorAll("#projetos .projeto");

    if (projetos.length >= 2) {
        projetos[0].querySelector("h3").textContent = translations[lang].livro;
        projetos[0].querySelector("p").textContent = translations[lang].livroDescricao;

        projetos[1].querySelector("h3").textContent = translations[lang].picpic;
        projetos[1].querySelector("p").textContent = translations[lang].picpicDescricao;
    }

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
            link.href = lang === "pt-BR" ? "./media/curriculo-MuriloD.pdf" : "./media/resume.pdf";
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