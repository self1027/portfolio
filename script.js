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