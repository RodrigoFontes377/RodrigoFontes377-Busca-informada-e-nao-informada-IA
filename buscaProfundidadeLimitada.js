class City {
  constructor(nome) {
    this.nome = nome;
    this.vizinhos = [];
    this.visitado = false;
  }

  addVizinho(vizinho) {
    this.vizinhos.push(vizinho);
  }
}

function buscaEmProfundidadeLimitada(inicio, objetivo, limiteProfundidade) {
  const pilha = [];
  const visitados = new Set();
  let nosVisitados = 0;

  pilha.push({ no: inicio, profundidade: 0 });
  visitados.add(inicio);

  while (pilha.length > 0) {
    const { no, profundidade } = pilha.pop();

    if (!no.visitado) {
      console.log(`Visitando a cidade: ${no.nome}`);
      no.visitado = true;
      nosVisitados++;
    }

    if (no.nome === objetivo.nome) {
      console.log(`Encontrou o objetivo: ${no.nome}`);
      console.log(`Número de nós visitados: ${nosVisitados}`);
      return true;
    }

    if (profundidade >= limiteProfundidade) {
      continue;
    }

    for (const vizinho of no.vizinhos) {
      if (!visitados.has(vizinho)) {
        pilha.push({ no: vizinho, profundidade: profundidade + 1 });
        visitados.add(vizinho);
      }
    }
  }

  console.log(`${objetivo.nome} não encontrado.`);
  return false;
}

// Criando as cidades
const arad = new City("Arad");
const zerind = new City("Zerind");
const oradea = new City("Oradea");
const sibiu = new City("Sibiu");
const timisoara = new City("Timisoara");
const lugoj = new City("Lugoj");
const mehadia = new City("Mehadia");
const dobreta = new City("Dobreta");
const craiova = new City("Craiova");
const rimnicuVilcea = new City("Rimnicu Vilcea");
const fagaras = new City("Fagaras");
const pitesti = new City("Pitesti");
const bucharest = new City("Bucharest");
const giurgiu = new City("Giurgiu");
const urziceni = new City("Urziceni");
const hirsova = new City("Hirsova");
const eforie = new City("Eforie");
const vaslui = new City("Vaslui");
const iasi = new City("Iasi");
const neamt = new City("Neamt");

// Adicionando as conexões entre as cidades
arad.addVizinho(sibiu);
arad.addVizinho(timisoara);
arad.addVizinho(zerind);

zerind.addVizinho(arad);
zerind.addVizinho(oradea);

oradea.addVizinho(zerind);
oradea.addVizinho(sibiu);

sibiu.addVizinho(arad);
sibiu.addVizinho(fagaras);
sibiu.addVizinho(oradea);
sibiu.addVizinho(rimnicuVilcea);

timisoara.addVizinho(arad);
timisoara.addVizinho(lugoj);

lugoj.addVizinho(timisoara);
lugoj.addVizinho(mehadia);

mehadia.addVizinho(lugoj);
mehadia.addVizinho(dobreta);

dobreta.addVizinho(mehadia);
dobreta.addVizinho(craiova);

craiova.addVizinho(dobreta);
craiova.addVizinho(pitesti);
craiova.addVizinho(rimnicuVilcea);

rimnicuVilcea.addVizinho(sibiu);
rimnicuVilcea.addVizinho(pitesti);
rimnicuVilcea.addVizinho(craiova);

fagaras.addVizinho(sibiu);
fagaras.addVizinho(bucharest);

pitesti.addVizinho(rimnicuVilcea);
pitesti.addVizinho(craiova);
pitesti.addVizinho(bucharest);

bucharest.addVizinho(fagaras);
bucharest.addVizinho(pitesti);
bucharest.addVizinho(giurgiu);
bucharest.addVizinho(urziceni);

giurgiu.addVizinho(bucharest);

urziceni.addVizinho(bucharest);
urziceni.addVizinho(hirsova);
urziceni.addVizinho(vaslui);

hirsova.addVizinho(urziceni);
hirsova.addVizinho(eforie);

eforie.addVizinho(hirsova);

vaslui.addVizinho(urziceni);
vaslui.addVizinho(iasi);

iasi.addVizinho(vaslui);
iasi.addVizinho(neamt);

neamt.addVizinho(iasi);

const limiteProfundidade = 2; // Definindo o limite de profundidade desejado
buscaEmProfundidadeLimitada(arad, rimnicuVilcea, limiteProfundidade);
