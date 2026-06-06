const repo = '/websiteT';

const reverseRoutes = {
    'main': repo + '/home',
    'chiSiamo': repo + '/chi-siamo',
    'galleria': repo + '/galleria',
    'map': repo + '/mappa',
    'contatti': repo + '/contatti',
    'prenota': repo + '/prenota',
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