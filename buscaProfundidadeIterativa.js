class City {
  constructor(nome) {
    this.nome = nome;
    this.vizinhos = [];
  }

  adicionarVizinho(vizinho) {
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
arad.adicionarVizinho(sibiu);
arad.adicionarVizinho(timisoara);
arad.adicionarVizinho(zerind);

zerind.adicionarVizinho(arad);
zerind.adicionarVizinho(oradea);

oradea.adicionarVizinho(zerind);
oradea.adicionarVizinho(sibiu);

sibiu.adicionarVizinho(arad);
sibiu.adicionarVizinho(fagaras);
sibiu.adicionarVizinho(oradea);
sibiu.adicionarVizinho(rimnicuVilcea);

timisoara.adicionarVizinho(arad);
timisoara.adicionarVizinho(lugoj);

lugoj.adicionarVizinho(timisoara);
lugoj.adicionarVizinho(mehadia);

mehadia.adicionarVizinho(lugoj);
mehadia.adicionarVizinho(dobreta);

dobreta.adicionarVizinho(mehadia);
dobreta.adicionarVizinho(craiova);

craiova.adicionarVizinho(dobreta);
craiova.adicionarVizinho(pitesti);
craiova.adicionarVizinho(rimnicuVilcea);

rimnicuVilcea.adicionarVizinho(sibiu);
rimnicuVilcea.adicionarVizinho(pitesti);
rimnicuVilcea.adicionarVizinho(craiova);

fagaras.adicionarVizinho(sibiu);
fagaras.adicionarVizinho(bucharest);

pitesti.adicionarVizinho(rimnicuVilcea);
pitesti.adicionarVizinho(craiova);
pitesti.adicionarVizinho(bucharest);

bucharest.adicionarVizinho(fagaras);
bucharest.adicionarVizinho(pitesti);
bucharest.adicionarVizinho(giurgiu);
bucharest.adicionarVizinho(urziceni);

giurgiu.adicionarVizinho(bucharest);

urziceni.adicionarVizinho(bucharest);
urziceni.adicionarVizinho(hirsova);
urziceni.adicionarVizinho(vaslui);

hirsova.adicionarVizinho(urziceni);
hirsova.adicionarVizinho(eforie);

eforie.adicionarVizinho(hirsova);

vaslui.adicionarVizinho(urziceni);
vaslui.adicionarVizinho(iasi);

iasi.adicionarVizinho(vaslui);
iasi.adicionarVizinho(neamt);

neamt.adicionarVizinho(iasi);

// Execução da busca em profundidade iterativa
const caminhoEncontrado = buscaProfundidadeIterativa(arad, bucharest);

if (caminhoEncontrado) {
  console.log("Caminho encontrado!");
} else {
  console.log("Caminho não encontrado!");
}
