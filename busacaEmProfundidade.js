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

// Função de busca em profundidade
function buscaEmProfundidade(atual, objetivo, nosVisitados) {
  atual.visitado = true;
  console.log(`Visitando: ${atual.nome}`);
  nosVisitados.count++;

  if (atual === objetivo) {
    console.log(`Chegou a: ${atual.nome}`);
    console.log(`Número de nós visitados: ${nosVisitados.count}`);
    return true;
  }

  for (const vizinho of atual.vizinhos) {
    if (!vizinho.visitado) {
      if (buscaEmProfundidade(vizinho, objetivo, nosVisitados)) {
        return true;
      }
    }
  }

  return false;
}

// Criando as Citys
const arad = new City("Arad");
const bucharest = new City("Bucharest");
const craiova = new City("Craiova");
const dobreta = new City("Dobreta");
const eforie = new City("Eforie");
const fagaras = new City("Fagaras");
const giurgiu = new City("Giurgiu");
const hirsova = new City("Hirsova");
const iasi = new City("Iasi");
const lugoj = new City("Lugoj");
const mehadia = new City("Mehadia");
const neamt = new City("Neamt");
const oradea = new City("Oradea");
const pitesti = new City("Pitesti");
const rimnicuVilcea = new City("Rimnicu Vilcea");
const sibiu = new City("Sibiu");
const timisoara = new City("Timisoara");
const urziceni = new City("Urziceni");
const vaslui = new City("Vaslui");
const zerind = new City("Zerind");

// Adicionando as conexões entre as Citys
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

// Execução da busca em profundidade com contagem de nós
const objetivo = bucharest;
const nosVisitados = { count: 0 };
buscaEmProfundidade(arad, objetivo, nosVisitados);
