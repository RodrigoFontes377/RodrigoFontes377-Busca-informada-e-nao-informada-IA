class City {
  constructor(nome) {
    this.nome = nome;
    this.vizinhos = [];
  }

  addVizinho(vizinho) {
    this.vizinhos.push(vizinho);
  }
}

// Função de busca em profundidade limitada
function buscaEmProfundidadeLimitada(
  inicio,
  objetivo,
  limiteProfundidade,
  visitados
) {
  const pilha = [{ City: inicio, profundidade: 0 }];
  visitados.add(inicio);

  while (pilha.length > 0) {
    const { City, profundidade } = pilha.pop();

    console.log(`Visitando a City: ${City.nome}`);

    if (City === objetivo) {
      console.log(`Objetivo ${objetivo.nome} encontrado.`);
      return true;
    }

    if (profundidade >= limiteProfundidade) {
      continue;
    }

    for (const vizinho of City.vizinhos) {
      if (!visitados.has(vizinho)) {
        pilha.push({ City: vizinho, profundidade: profundidade + 1 });
        visitados.add(vizinho);
      }
    }
  }

  console.log(
    `Objetivo ${objetivo.nome} não encontrado com limite de profundidade ${limiteProfundidade}.`
  );
  return false;
}

// Função de busca em profundidade iterativa
function buscaProfundidadeIterativa(inicio, objetivo) {
  let limiteProfundidade = 0;

  while (true) {
    console.log(`Tentando com limite de profundidade: ${limiteProfundidade}`);

    const visitados = new Set();
    const encontrado = buscaEmProfundidadeLimitada(
      inicio,
      objetivo,
      limiteProfundidade,
      visitados
    );

    if (encontrado) {
      console.log(
        `Objetivo ${objetivo.nome} encontrado com limite de profundidade ${limiteProfundidade}.`
      );
      return true;
    } else {
      console.log(
        `Objetivo ${objetivo.nome} não encontrado com limite de profundidade ${limiteProfundidade}.`
      );
      limiteProfundidade++;
    }
  }
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

// Adicionando os vizinhos
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

// Execução da busca em profundidade iterativa
const caminhoEncontrado = buscaProfundidadeIterativa(arad, bucharest);

if (caminhoEncontrado) {
  console.log("Caminho encontrado!");
} else {
  console.log("Caminho não encontrado!");
}
