class City {
  constructor(nome, heuristica) {
    this.nome = nome;
    this.acoes = new Map();
    this.heuristica = heuristica;
    this.visitado = false;
  }

  adicionarAcao(destino, custo) {
    this.acoes.set(destino, custo);
  }
}

function buscaCustoUniforme(inicio, objetivo) {
  const filaPrioridade = new PriorityQueue();
  filaPrioridade.enqueue({ no: inicio, custo: 0 });
  const visitados = new Set();
  const custos = new Map();
  const caminho = new Map();
  let nosVisitados = 0;

  custos.set(inicio, 0);
  caminho.set(inicio, [inicio.nome]); // Inicia o caminho com o nome da cidade inicial

  while (!filaPrioridade.isEmpty()) {
    const { no, custo } = filaPrioridade.dequeue();
    if (visitados.has(no)) continue;

    console.log(`Visitando a cidade: ${no.nome}`);
    nosVisitados++;
    visitados.add(no);

    if (no.nome === objetivo.nome) {
      console.log(`Encontrou o objetivo: ${no.nome}`);
      console.log(`Custo total: ${custo}`);
      console.log(`Número de nós visitados: ${nosVisitados}`);
      console.log(`Menor caminho: ${caminho.get(no).join(" -> ")}`);
      return true;
    }

    for (const [vizinho, custoAcao] of no.acoes.entries()) {
      const novoCusto = custo + custoAcao;
      if (
        !visitados.has(vizinho) &&
        (!custos.has(vizinho) || novoCusto < custos.get(vizinho))
      ) {
        custos.set(vizinho, novoCusto);
        caminho.set(vizinho, [...caminho.get(no), vizinho.nome]); // Adiciona o nome do vizinho ao caminho
        filaPrioridade.enqueue({ no: vizinho, custo: novoCusto });
      }
    }
  }

  console.log(`${objetivo.nome} não encontrado.`);
  return false;
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
    this.queue.sort((a, b) => a.custo - b.custo);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// Criando as cidades e definindo ações e custos
const arad = new City("Arad", 366);
const zerind = new City("Zerind", 374);
const oradea = new City("Oradea", 380);
const timisoara = new City("Timisoara", 329);
const lugoj = new City("Lugoj", 244);
const mehadia = new City("Mehadia", 241);
const drobeta = new City("Drobeta", 242);
const craiova = new City("Craiova", 160);
const rimnicuVilcea = new City("Rimnicu Vilcea", 193);
const sibiu = new City("Sibiu", 253);
const fagaras = new City("Fagaras", 176);
const pitesti = new City("Pitesti", 100);
const bucharest = new City("Bucharest", 0);
const giurgiu = new City("Giurgiu", 77);
const urziceni = new City("Urziceni", 80);
const hirsova = new City("Hirsova", 151);
const eforie = new City("Eforie", 161);
const vaslui = new City("Vaslui", 199);
const iasi = new City("Iasi", 226);
const neamt = new City("Neamt", 234);

arad.adicionarAcao(zerind, 75);
arad.adicionarAcao(timisoara, 118);
arad.adicionarAcao(sibiu, 140);

zerind.adicionarAcao(arad, 75);
zerind.adicionarAcao(oradea, 71);

oradea.adicionarAcao(zerind, 71);
oradea.adicionarAcao(sibiu, 151);

timisoara.adicionarAcao(arad, 118);
timisoara.adicionarAcao(lugoj, 111);

lugoj.adicionarAcao(timisoara, 111);
lugoj.adicionarAcao(mehadia, 70);

mehadia.adicionarAcao(lugoj, 70);
mehadia.adicionarAcao(drobeta, 75);

drobeta.adicionarAcao(mehadia, 75);
drobeta.adicionarAcao(craiova, 120);

craiova.adicionarAcao(drobeta, 120);
craiova.adicionarAcao(rimnicuVilcea, 146);
craiova.adicionarAcao(pitesti, 138);

rimnicuVilcea.adicionarAcao(craiova, 146);
rimnicuVilcea.adicionarAcao(pitesti, 97);
rimnicuVilcea.adicionarAcao(sibiu, 80);

sibiu.adicionarAcao(arad, 140);
sibiu.adicionarAcao(oradea, 151);
sibiu.adicionarAcao(rimnicuVilcea, 80);
sibiu.adicionarAcao(fagaras, 99);

fagaras.adicionarAcao(sibiu, 99);
fagaras.adicionarAcao(bucharest, 211);

pitesti.adicionarAcao(rimnicuVilcea, 97);
pitesti.adicionarAcao(craiova, 138);
pitesti.adicionarAcao(bucharest, 101);

bucharest.adicionarAcao(fagaras, 211);
bucharest.adicionarAcao(pitesti, 101);
bucharest.adicionarAcao(giurgiu, 90);
bucharest.adicionarAcao(urziceni, 85);

giurgiu.adicionarAcao(bucharest, 90);

urziceni.adicionarAcao(bucharest, 85);
urziceni.adicionarAcao(hirsova, 98);
urziceni.adicionarAcao(vaslui, 142);

hirsova.adicionarAcao(urziceni, 98);
hirsova.adicionarAcao(eforie, 86);

eforie.adicionarAcao(hirsova, 86);

vaslui.adicionarAcao(urziceni, 142);
vaslui.adicionarAcao(iasi, 92);

iasi.adicionarAcao(vaslui, 92);
iasi.adicionarAcao(neamt, 87);

neamt.adicionarAcao(iasi, 87);

// Executando a busca de custo uniforme
buscaCustoUniforme(arad, bucharest);
