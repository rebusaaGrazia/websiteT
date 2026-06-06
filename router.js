const repo = '/websiteT';

const reverseRoutes = {
    'main.html': repo + '/home',
    'chiSiamo.html': repo + '/chi-siamo',
    'galleria.html': repo + '/galleria',
    'map.html': repo + '/mappa',
    'contatti.html': repo + '/contatti',
    'prenota.html': repo + '/prenota',
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel')) return;
        const file = href.split('/').pop();
        if (reverseRoutes[file]) {
            link.setAttribute('href', reverseRoutes[file]);
        }
    });
});