window.__reverieDataReady.then(() => {

(()=>{const assets=JSON.parse(document.getElementById('knitwear-image-data').textContent);window.ReverieKnitwearAssets=assets;document.getElementById('knitwear-cover').setAttribute('href',assets['butterfly-black-front'].src)})();

}).catch(error => console.error('Reverie data failed to load:', error));
