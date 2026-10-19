// EDITE OS PRODUTOS AQUI. Não há preços nem carrinho: este site é só para consulta.
// Para colocar fotos, salve as imagens dentro da pasta "imagens" com os nomes indicados.
const produtos = [
  // HAMBÚRGUERES TRADICIONAIS E CACHORRO-QUENTE (fotos extraídas do vídeo)
  { categoria: 'tradicionais', nome: 'Cachorro-Quente', ingredientes: 'Salsicha ou linguiça (montagem self-service)', imagem: 'cachorro.png' },
  { categoria: 'tradicionais', nome: 'Hambúrguer', ingredientes: 'Carne e ovo (montagem self-service)', imagem: 'burger.png' },
  { categoria: 'tradicionais', nome: 'X-Burguer', ingredientes: 'Carne e queijo (montagem self-service)', imagem: 'X-burguer.png' },
  { categoria: 'tradicionais', nome: 'X-Egg', ingredientes: 'Carne, queijo e ovo (montagem self-service)', imagem: 'X-egg.png' },
  { categoria: 'tradicionais', nome: 'X-Calabresa', ingredientes: 'Carne, queijo e calabresa (montagem self-service)', imagem: 'x-calabresa.png' },
  { categoria: 'tradicionais', nome: 'X-Salada', ingredientes: 'Carne, queijo e presunto (montagem self-service)', imagem: 'x-salada.png' },
  { categoria: 'tradicionais', nome: 'X-Bacon', ingredientes: 'Carne, queijo e bacon (montagem self-service)', imagem: 'x-bacon.png' },
  { categoria: 'tradicionais', nome: 'X-Egg Bacon', ingredientes: 'Carne, ovo, queijo e bacon (montagem self-service)', imagem: 'x-egg bacon.png' },
  { categoria: 'tradicionais', nome: 'X-Tudo', ingredientes: ' Carne, ovo, queijo, presunto e bacon (montagem self-service)', imagem: 'x-tudo.png' },
  { categoria: 'tradicionais', nome: 'X-Tudo Duplo', ingredientes: '2 carnes, 2 ovos, 2 queijos, 2 presuntos e bacon (montagem self-service)', imagem: 'x-tudo duplo.png' },
  { categoria: 'tradicionais', nome: 'Furioso', ingredientes: '2 carnes, 2 queijos, bacon, cheddar e filé de frango em pedaços (montagem self-service)', imagem: 'furioso.png' },
  { categoria: 'tradicionais', nome: 'Galis Burg', ingredientes: 'Carne, queijo, cheddar, presunto e filé de frango em pedaços (montagem self-service)', imagem: 'galiss burg.png' },

  // ARTESANAIS: adicione aqui no futuro, por exemplo:
  // { categoria: 'artesanais', nome: 'Nome do artesanal', ingredientes: 'Ingredientes', imagem: 'artesanal-1.jpg' },

  // PORÇÕES
  { categoria: 'porcoes', nome: 'Batata Felipão', ingredientes: 'Batata frita com cheddar, bacon e calabresa', imagem: 'felipao.jpeg' },
  { categoria: 'porcoes', nome: 'Contrafilé C/Fritas', ingredientes: 'Porção de batatas fritas', imagem: 'contrafile.png' },
  { categoria: 'porcoes', nome: 'Batata Frita', ingredientes: 'Porção de contrafilé acompanhada de batatas fritas', imagem: 'batata.jpeg' },
  { categoria: 'porcoes', nome: 'Costela Suína C/Fritas', ingredientes: 'Porção de costela suína acompanhada de batatas fritas', imagem: 'costela.png' },
  { categoria: 'porcoes', nome: 'Porção De File de Frango C/Fritas', ingredientes: 'Porção de file de frango (EM PEDAÇOS) acompanhada de batatas fritas', imagem: 'frango.png' },
  { categoria: 'porcoes', nome: 'Porção De Frango Á Passarinho C/Fritas', ingredientes: 'Porção de frango à passarinho acompanhada de batatas fritas', imagem: 'passarinho.jpeg' },
  { categoria: 'porcoes', nome: 'Porção Mista', ingredientes: 'Carne,Frango,Calabresa acompanhada de batatas fritas', imagem: 'mista.jpeg' },
  { categoria: 'porcoes', nome: 'Porção De Nuggets', ingredientes: 'Porção de nuggets', imagem: 'nuggets.png' },
  { categoria: 'porcoes', nome: 'Porção De Salgadinho', ingredientes: 'Sabores : Coxinha, Kibe, Queijo c/Presunto , Queijo c/Alho, Calabresa c/Queijo, Camarão e Carne', imagem: 'salgadinho.png' },
  // BEBIDAS (sem valores)
  { categoria: 'bebidas', nome: 'Água', ingredientes: 'Água e Água com Gás', imagem: 'agua.png' },
  { categoria: 'bebidas', nome: 'Coca-Cola Lata', ingredientes: '', imagem: 'coca.png' },
  { categoria: 'bebidas', nome: 'Fanta Uva Lata', ingredientes: '', imagem: 'uva.png' },
  { categoria: 'bebidas', nome: 'Fanta Laranja Lata', ingredientes: '', imagem: 'laranja.png' },
  { categoria: 'bebidas', nome: 'Fanta Guaraná Lata', ingredientes: '', imagem: 'guarana.png' },
  { categoria: 'bebidas', nome: 'Mate Leão', ingredientes: '', imagem: 'mate leao.png' },
  { categoria: 'bebidas', nome: 'Guaraviton', ingredientes: 'Gauraviton e Guaracamp', imagem: 'guaraviton.png' },
  { categoria: 'bebidas', nome: 'Cervejas Latões', ingredientes: 'Antarctica,Brahma,Heiniken,Amstel', imagem: 'latao.png' },
  { categoria: 'bebidas', nome: 'Cervejas 600', ingredientes: 'Antarctica,Brahma,Heiniken,Amstel', imagem: 'cervejas-600ml.jpg' },
  { categoria: 'bebidas', nome: 'Cervejas Long Neck', ingredientes: 'Heineken,Stella Artois,Budweiser', imagem: 'long neck.jpg' },
  { categoria: 'bebidas', nome: 'Balde De Latão', ingredientes: 'Antarctica,Brahma,Heiniken,Amstel', imagem: 'balde.png' },
  { categoria: 'bebidas', nome: 'Balde De Long Neck', ingredientes: 'Heineken,Stella Artois,Budweiser', imagem: 'balde-long.jpg' },
  { categoria: 'bebidas', nome: 'Vinhos', ingredientes: 'Pérgola e Galiotto', imagem: 'vinhos.jpg' },
  { categoria: 'bebidas', nome: 'Red Bull', ingredientes: '', imagem: 'redbull.png' },
];

const categorias = [
  { id: 'tradicionais', nome: '🍔 Hambúrgueres tradicionais' },
  { id: 'artesanais', nome: '🔥 Hambúrgueres artesanais' },
  { id: 'porcoes', nome: '🍟 Porções' },
  { id: 'bebidas', nome: '🥤 Bebidas' },
];

const emojis = { tradicionais: '🍔', artesanais: '🔥', porcoes: '🍟', bebidas: '🥤' };
const cardapio = document.querySelector('#cardapio');
const busca = document.querySelector('#busca');
const botoes = [...document.querySelectorAll('.categoria')];
let categoriaSelecionada = 'todos';

function criarProduto(produto) {
  const artigo = document.createElement('article');
  artigo.className = 'produto';
  const areaFoto = document.createElement('div');
  areaFoto.className = 'produto-imagem';
  const img = document.createElement('img');
  img.alt = `Foto de ${produto.nome}`;
  img.loading = 'lazy';
  img.decoding = 'async';

  const substituto = document.createElement('div');
  substituto.className = 'foto-pendente';
  const emoji = document.createElement('span');
  emoji.className = 'emoji';
  emoji.textContent = emojis[produto.categoria] || '🍽️';
  const aviso = document.createElement('span');
  aviso.textContent = 'Foto em breve';
  substituto.append(emoji, aviso);

  img.addEventListener('error', () => {
    img.remove();
    if (!substituto.isConnected) areaFoto.append(substituto);
  }, { once: true });
  img.src = `imagens/${produto.imagem}`;
  areaFoto.append(img);

  const corpo = document.createElement('div');
  corpo.className = 'produto-conteudo';
  const titulo = document.createElement('h3');
  titulo.textContent = produto.nome;
  corpo.append(titulo);
  if (produto.ingredientes) {
    const descricao = document.createElement('p');
    descricao.className = 'ingredientes';
    descricao.textContent = produto.ingredientes;
    corpo.append(descricao);
  }
  artigo.append(areaFoto, corpo);
  return artigo;
}

function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function renderizar() {
  const termo = normalizar(busca.value.trim());
  const fragmento = document.createDocumentFragment();
  let exibidos = 0;

  categorias.forEach(categoria => {
    if (categoriaSelecionada !== 'todos' && categoriaSelecionada !== categoria.id) return;
    const itens = produtos.filter(p => p.categoria === categoria.id && normalizar(`${p.nome} ${p.ingredientes}`).includes(termo));
    // Exibir a categoria artesanal "em breve" até o cadastro de produtos.
    if (!itens.length && !(categoria.id === 'artesanais' && termo === '')) return;

    const secao = document.createElement('section');
    secao.className = 'secao';
    secao.id = categoria.id;
    const cabecalho = document.createElement('div');
    cabecalho.className = 'secao-titulo';
    const h2 = document.createElement('h2');
    h2.textContent = categoria.nome;
    cabecalho.append(h2);
    secao.append(cabecalho);

    if (categoria.id === 'artesanais' && !itens.length) {
      const anuncio = document.createElement('div');
      anuncio.className = 'em-breve';
      const titulo = document.createElement('strong');
      titulo.textContent = 'Em breve!';
      const texto = document.createElement('p');
      texto.textContent = 'Novos hambúrgueres artesanais serão adicionados aqui.';
      anuncio.append(titulo, texto);
      secao.append(anuncio);
    } else {
      const grade = document.createElement('div');
      grade.className = 'grade';
      itens.forEach(item => grade.append(criarProduto(item)));
      exibidos += itens.length;
      secao.append(grade);
    }
    fragmento.append(secao);
  });

  cardapio.replaceChildren(fragmento);
  if (!cardapio.children.length) {
    const vazio = document.createElement('p');
    vazio.className = 'vazio';
    vazio.textContent = 'Nenhum produto encontrado. Tente outro nome.';
    cardapio.append(vazio);
  }
}

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    categoriaSelecionada = botao.dataset.categoria;
    botoes.forEach(b => {
      const ativo = b === botao;
      b.classList.toggle('ativa', ativo);
      b.setAttribute('aria-pressed', String(ativo));
    });
    renderizar();
  });
});

busca.addEventListener('input', renderizar);
renderizar();
