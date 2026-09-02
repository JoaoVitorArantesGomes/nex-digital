// ==========================================================
// CONTATO — edite os valores abaixo com os dados reais da
// Nex Digital. Esses três campos alimentam automaticamente
// todos os links de WhatsApp, Instagram e e-mail em TODAS as
// páginas do site (principal + demonstrações), então só
// precisa preencher uma vez, aqui.
// ==========================================================
const CONTATO = {
  whatsapp: '5561991684637',
  whatsappMensagem: 'Olá! Vi o site da Nex Digital e quero um orçamento para meu negócio.',
  instagram: 'jvarants_',
  email: 'jvarantes921@gmail.com'
};

function aplicarContatos(escopo = document) {
  const wa = `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(CONTATO.whatsappMensagem)}`;
  const ig = `https://instagram.com/${CONTATO.instagram}`;
  const mail = `mailto:${CONTATO.email}`;

  escopo.querySelectorAll('[data-contato="whatsapp"]').forEach(el => el.href = wa);
  escopo.querySelectorAll('[data-contato="instagram"]').forEach(el => el.href = ig);
  escopo.querySelectorAll('[data-contato="email"]').forEach(el => el.href = mail);
}

function initMenu() {
  const toggle = document.getElementById('toggle');
  const menu = document.getElementById('menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const aberto = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(aberto));
  });

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  aplicarContatos();
  initMenu();
});
