// Inicializa o mapa
var map = L.map('map').setView([-22.9068, -43.1729], 12);

// Adiciona camada de fundo ao mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Variável para armazenar o último marcador clicado
var lastClickedMarker = null;

// Ícones personalizados
var iconDefault = L.icon({
    iconUrl: 'resources/pontonaoselecionado.svg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [50, 64],
    shadowAnchor: [4, 62]
});

var iconSelected = L.icon({
    iconUrl: 'resources/pontoselecionado.svg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [50, 64],
    shadowAnchor: [4, 62]
});

// Lista de pontos
var pontos = [
    { coords: [-22.9133, -43.1765], titulo: "Praça XV de Novembro", descricao: "História e Importância: No início do século XIX, a Praça XV de Novembro foi o centro do poder político no Rio de Janeiro, quando Dom João VI transferiu a sede do governo para o Brasil. O local também foi onde o Brasil proclamou sua independência em 1822.", img: "resources/fotos/Praça XV de Novembro/img.png" },
    { coords: [-22.9064, -43.1792], titulo: "Praça XV de Novembro", descricao: "História e Importância: No início do século XIX, a Praça XV de Novembro foi o centro do poder político no Rio de Janeiro, quando Dom João VI transferiu a sede do governo para o Brasil. O local também foi onde o Brasil proclamou sua independência em 1822.", img: "resources/fotos/Praça XV de Novembro/img.png" },
    { coords: [-22.9137, -43.1991], titulo: "Praça XV de Novembro", descricao: "História e Importância: No início do século XIX, a Praça XV de Novembro foi o centro do poder político no Rio de Janeiro, quando Dom João VI transferiu a sede do governo para o Brasil. O local também foi onde o Brasil proclamou sua independência em 1822.", img: "resources/fotos/Praça XV de Novembro/img.png" },
    { coords: [-22.8966, -43.1801], titulo: "Praça XV de Novembro", descricao: "História e Importância: No início do século XIX, a Praça XV de Novembro foi o centro do poder político no Rio de Janeiro, quando Dom João VI transferiu a sede do governo para o Brasil. O local também foi onde o Brasil proclamou sua independência em 1822.", img: "resources/fotos/Praça XV de Novembro/img.png" },
    { coords: [-22.9133, -43.1765], titulo: "Praça XV de Novembro", descricao: "História e Importância: No início do século XIX, a Praça XV de Novembro foi o centro do poder político no Rio de Janeiro, quando Dom João VI transferiu a sede do governo para o Brasil. O local também foi onde o Brasil proclamou sua independência em 1822.", img: "resources/fotos/Praça XV de Novembro/img.png" },
    { coords: [-22.9133, -43.1765], titulo: "Praça XV de Novembro", descricao: "História e Importância: No início do século XIX, a Praça XV de Novembro foi o centro do poder político no Rio de Janeiro, quando Dom João VI transferiu a sede do governo para o Brasil. O local também foi onde o Brasil proclamou sua independência em 1822.", img: "resources/fotos/Praça XV de Novembro/img.png" },
    { coords: [-22.9133, -43.1765], titulo: "Praça XV de Novembro", descricao: "História e Importância: No início do século XIX, a Praça XV de Novembro foi o centro do poder político no Rio de Janeiro, quando Dom João VI transferiu a sede do governo para o Brasil. O local também foi onde o Brasil proclamou sua independência em 1822.", img: "resources/fotos/Praça XV de Novembro/img.png" },
    { coords: [-22.9133, -43.1765], titulo: "Praça XV de Novembro", descricao: "História e Importância: No início do século XIX, a Praça XV de Novembro foi o centro do poder político no Rio de Janeiro, quando Dom João VI transferiu a sede do governo para o Brasil. O local também foi onde o Brasil proclamou sua independência em 1822.", img: "resources/fotos/Praça XV de Novembro/img.png" },
];

// Função para adicionar marcadores no mapa
pontos.forEach(function(ponto) {
    var marker = L.marker(ponto.coords, {icon: iconDefault}).addTo(map);
    
    marker.on('click', function() {
        // Altera o ícone do último marcador clicado para o padrão
        if (lastClickedMarker) {
            lastClickedMarker.setIcon(iconDefault);
        }

        // Altera o ícone do marcador clicado para o ícone selecionado
        marker.setIcon(iconSelected);

        lastClickedMarker = marker;

        // Exibe os detalhes do ponto
        document.getElementById('details').innerHTML = 
            '<h2>' + ponto.titulo + '</h2>' +
            '<p>' + ponto.descricao + '</p>' +
            '<img src="' + ponto.img + '" alt="' + ponto.titulo + '">';
        document.getElementById('detailsContainer').classList.add('open');
        document.getElementById('details').classList.add('show');
        document.getElementById('mapContainer').classList.add('shrink');
    }); 
});

// Função para fechar os detalhes e resetar o mapa
document.getElementById('closeDetails').addEventListener('click', function() {
    document.getElementById('detailsContainer').classList.remove('open');
    document.getElementById('details').classList.remove('show');
    document.getElementById('mapContainer').classList.remove('shrink');

    // Volta o marcador para a cor padrão
    if (lastClickedMarker) {
        lastClickedMarker.setIcon(L.icon({
            iconUrl: 'resources/pontonaoselecionado.svg',
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
            shadowSize: [50, 64],
            shadowAnchor: [4, 62]
        }));

        lastClickedMarker = null;
    }
});