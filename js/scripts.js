/* Scripts Interativos da Biblioteca Lilás - Manipulação de DOM, Carrinho e LocalStorage */
var acervoLivros = [
    {
        id: 1,
        titulo: "O Príncipe Cruel",
        autor: "Holly Black",
        categoria: "Fantasia",
        imagem: "imgs/livro1.jpg",
        preco: 49.90,
        descricao: "Jude tinha 7 anos quando seus pais foram assassinados e foi levada para o traiçoeiro Reino das Fadas de Elfhame."
    },
    {
        id: 2,
        titulo: "Corte de Espinhos e Rosas",
        autor: "Sarah J. Maas",
        categoria: "Fantasia",
        imagem: "imgs/livro2.jpg",
        preco: 47.90,
        descricao: "Feyre mata um lobo na floresta e uma criatura bestial exige retribuição, levando-a para a terra mágica de Prythian."
    },
    {
        id: 3,
        titulo: "Tempestade de Ônix",
        autor: "Rebecca Yarros",
        categoria: "Fantasia",
        imagem: "imgs/livro3.jfif",
        preco: 59.90,
        descricao: "O aclamado volume da saga de cavaleiros de dragão repleto de batalhas épicas, romance e reviravoltas intensas."
    },
    {
        id: 4,
        titulo: "A Magia dos Quatro",
        autor: "Priscila Visacri",
        categoria: "Fantasia",
        imagem: "imgs/livro4.png",
        preco: 39.90,
        descricao: "Quatro elementos mágicos se entrelaçam em uma jornada de autodescoberta, poderes ancestrais e grandes perigos."
    },
    {
        id: 5,
        titulo: "Jardins da Lua",
        autor: "Steven Erikson",
        categoria: "Fantasia",
        imagem: "imgs/livro5.png",
        preco: 64.90,
        descricao: "O Império Malazano trava guerras sangrentas e intrigas mágicas em uma das maiores obras da alta fantasia mundial."
    },
    {
        id: 6,
        titulo: "A Rainha do Sol",
        autor: "Nisha J. Tuli",
        categoria: "Fantasia",
        imagem: "imgs/livro6.jfif",
        preco: 44.90,
        descricao: "Doze mulheres disputam a sobrevivência na corte mortal do Rei Sol em provações letais de magia e poder."
    },
    {
        id: 7,
        titulo: "Coração de Ouro",
        autor: "Ana Beatriz Brandão",
        categoria: "Fantasia",
        imagem: "imgs/livro7.jfif",
        preco: 42.90,
        descricao: "Uma lenda fantástica sobre dever real, batalhas ancestrais e o destino corajoso de uma princesa guerreira."
    },
    {
        id: 8,
        titulo: "Luzes do Norte",
        autor: "Giulianna Domingues",
        categoria: "Fantasia",
        imagem: "imgs/livro8.jfif",
        preco: 38.90,
        descricao: "Um romance de fantasia nórdica envolvente com auroras boreais, caçadoras destemidas e criaturas místicas."
    },
    {
        id: 9,
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        categoria: "Fantasia",
        imagem: "imgs/livro9.jfif",
        preco: 49.90,
        descricao: "Harry descobre no seu 11º aniversário que é um bruxo e parte para a mágica Escola de Hogwarts."
    },
    {
        id: 10,
        titulo: "O Senhor dos Anéis",
        autor: "J. R. R. Tolkien",
        categoria: "Fantasia",
        imagem: "imgs/livro10.jfif",
        preco: 69.90,
        descricao: "A saga de Frodo Bolseiro e a Sociedade do Anel pela Terra-Média para destruir o Um Anel de Sauron."
    },
    {
        id: 11,
        titulo: "Como Terminar uma História de Amor",
        autor: "Yulin Kuang",
        categoria: "Romance",
        imagem: "imgs/livro_romance1.webp",
        preco: 39.90,
        descricao: "Helen e Grant precisam trabalhar juntos como roteiristas em Hollywood anos após um passado que marcou suas vidas."
    },
    {
        id: 12,
        titulo: "O Último Restaurante de Paris",
        autor: "Lily Graham",
        categoria: "Romance",
        imagem: "imgs/livro_romance2.webp",
        preco: 42.90,
        descricao: "Marianne herda um restaurante parisiense e descobre cartas secretas dos anos de ocupação da Segunda Guerra."
    },
    {
        id: 13,
        titulo: "A Voz do Coração",
        autor: "Julia Whelan",
        categoria: "Romance",
        imagem: "imgs/livro_romance3.webp",
        preco: 44.90,
        descricao: "Sewanee narra audiolivros de grande sucesso e grava uma parceria especial que desperta sentimentos esquecidos."
    },
    {
        id: 14,
        titulo: "Cartas de Amor de Paris",
        autor: "Nicolas Barreau",
        categoria: "Romance",
        imagem: "imgs/livro_romance4.webp",
        preco: 37.90,
        descricao: "Um livreiro viúvo escreve cartas comoventes para a falecida esposa e misteriosamente passa a receber respostas."
    },
    {
        id: 15,
        titulo: "Não É Como nos Filmes",
        autor: "Lynn Painter",
        categoria: "Romance",
        imagem: "imgs/livro_romance5.webp",
        preco: 45.90,
        descricao: "A sequência apaixonante de 'Melhor do que nos Filmes' repleta de encontros, reencontros e reviravoltas cômicas."
    },
    {
        id: 16,
        titulo: "Cruzeiro do Amor",
        autor: "Vinicius Grossos",
        categoria: "Romance",
        imagem: "imgs/livro_romance6.webp",
        preco: 36.90,
        descricao: "Uma viagem de navio em alto mar repleta de risadas, amizades sinceras e sentimentos inesperados de verão."
    },
    {
        id: 17,
        titulo: "Como É para Você?",
        autor: "Sophie Kinsella",
        categoria: "Romance",
        imagem: "imgs/livro_romance7.webp",
        preco: 41.90,
        descricao: "Uma narrativa comovente e corajosa da consagrada autora britânica sobre recomeçar e valorizar os afetos."
    },
    {
        id: 18,
        titulo: "Amor, Teoricamente",
        autor: "Ali Hazelwood",
        categoria: "Romance",
        imagem: "imgs/livro_romance8.webp",
        preco: 48.90,
        descricao: "Elsie é física teórica e namorada profissional de aluguel até cruzar caminho com o arrogante Jack Smith."
    },
    {
        id: 19,
        titulo: "A Escolha Perfeita",
        autor: "Tia Williams",
        categoria: "Romance",
        imagem: "imgs/livro_romance9.webp",
        preco: 38.90,
        descricao: "Uma bem-sucedida editora de moda vive um caso proibido com o filho de sua maior concorrente em Nova York."
    },
    {
        id: 20,
        titulo: "A Hipótese do Amor",
        autor: "Ali Hazelwood",
        categoria: "Romance",
        imagem: "imgs/livro_romance10.webp",
        preco: 46.90,
        descricao: "Olive beija um desconhecido no laboratório para fingir um romance, sem saber que se trata do temido Dr. Adam Carlsen."
    },
    {
        id: 21,
        titulo: "Nunca Minta",
        autor: "Freida McFadden",
        categoria: "Suspense",
        imagem: "imgs/livro_suspense1.webp",
        preco: 42.90,
        descricao: "Recém-casados ficam presos pela neve na antiga mansão de uma psiquiatra desaparecida e acham fitas secretas."
    },
    {
        id: 22,
        titulo: "O Massacre da Família Hope",
        autor: "Riley Sager",
        categoria: "Suspense",
        imagem: "imgs/livro_suspense2.webp",
        preco: 47.90,
        descricao: "Uma cuidadora é contratada para cuidar de Lenora Hope, única sobrevivente de uma chacina familiar em 1929."
    },
    {
        id: 23,
        titulo: "Jantar Secreto",
        autor: "Raphael Montes",
        categoria: "Suspense",
        imagem: "imgs/livro_suspense3.webp",
        preco: 49.90,
        descricao: "Quatro amigos endividados no Rio de Janeiro organizam jantares clandestinos para a elite com um prato macabro."
    },
    {
        id: 24,
        titulo: "A Estranha na Cama",
        autor: "Raphael Montes",
        categoria: "Suspense",
        imagem: "imgs/livro_suspense4.webp",
        preco: 44.90,
        descricao: "Um suspense visceral que explora a obsessão humana, segredos do passado e as consequências mortais de escolhas frias."
    },
    {
        id: 25,
        titulo: "A Contadora",
        autor: "Freida McFadden",
        categoria: "Suspense",
        imagem: "imgs/livro_suspense5.webp",
        preco: 43.90,
        descricao: "Duas funcionárias em um escritório corporativo se envolvem em uma teia de mentiras contábeis e crimes fatais."
    },
    {
        id: 26,
        titulo: "A Última Casa da Rua Needless",
        autor: "Catriona Ward",
        categoria: "Suspense",
        imagem: "imgs/livro_suspense6.webp",
        preco: 48.90,
        descricao: "Um morador solitário e sua gata guardam segredos perturbadores em uma casa isolada perto da floresta."
    },
    {
        id: 27,
        titulo: "Crime no Copan",
        autor: "Victor Bonini",
        categoria: "Suspense",
        imagem: "imgs/livro_suspense7.webp",
        preco: 41.90,
        descricao: "Uma queda fatal do famoso edifício Copan em São Paulo dá início à caçada de um assassino meticuloso."
    },
    {
        id: 28,
        titulo: "A Garota do Lago",
        autor: "Charlie Donlea",
        categoria: "Suspense",
        imagem: "imgs/livro_suspense8.webp",
        preco: 39.90,
        descricao: "A morte misteriosa de uma jovem estudante em Summit Lake faz uma repórter investigar segredos da cidadezinha."
    },
    {
        id: 29,
        titulo: "Ponto Final",
        autor: "A. J. Finn",
        categoria: "Suspense",
        imagem: "imgs/livro_suspense9.webp",
        preco: 46.90,
        descricao: "O autor best-seller de 'A Mulher na Janela' constrói um thriller claustrofóbico sobre pistas e manuscritos fatais."
    },
    {
        id: 30,
        titulo: "A Cirurgiã",
        autor: "Leslie Wolfe",
        categoria: "Suspense",
        imagem: "imgs/livro_suspense10.webp",
        preco: 45.90,
        descricao: "Uma cirurgiã precisa operar na mesa o homem que destruiu sua vida, com toda a equipe médica assistindo."
    },
    {
        id: 31,
        titulo: "Jogo de Xadrez Clássico de Madeira",
        autor: "Acervo de Jogos",
        categoria: "Jogos",
        imagem: "imgs/xadrez.webp",
        preco: 89.90,
        descricao: "Conjunto refinado de tabuleiro estojo dobrável em madeira nobre com peças maciças para estudo tático."
    },
    {
        id: 32,
        titulo: "Jogo de Cartas UNO Clássico",
        autor: "Mattel Games",
        categoria: "Jogos",
        imagem: "imgs/uno1.webp",
        preco: 24.90,
        descricao: "O clássico jogo de cartas da Mattel com 114 cartas personalizáveis para diversão entre 2 a 10 participantes."
    },
    {
        id: 33,
        titulo: "UNO Show 'Em No Mercy",
        autor: "Mattel Games",
        categoria: "Jogos",
        imagem: "imgs/uno2.webp",
        preco: 34.90,
        descricao: "A versão extrema do Uno com regras impiedosas, penalidades pesadas como comprar 10 cartas e eliminação direta."
    },
    {
        id: 34,
        titulo: "Jogo de Baralho 168 na Lata Metalizada",
        autor: "Art Game",
        categoria: "Jogos",
        imagem: "imgs/baralho1.webp",
        preco: 32.90,
        descricao: "Dois baralhos completos de acabamento premium guardados em estojo metalizado para truco, poker e canastra."
    },
    {
        id: 35,
        titulo: "Baralho Copag 139 Tradicional (55 Cartas)",
        autor: "Copag",
        categoria: "Jogos",
        imagem: "imgs/baralho2.webp",
        preco: 19.90,
        descricao: "O tradicional Ás dos Baralhos da Copag, fabricado desde 1908 com cartão especial e deslize profissional."
    },
    {
        id: 36,
        titulo: "Quebra-Cabeça Nosferatu Horror (1000 Peças)",
        autor: "Quokka Puzzles",
        categoria: "Jogos",
        imagem: "imgs/quebra-cabeca1.webp",
        preco: 69.90,
        descricao: "Desafio ilustrado de 1000 peças com tema de horror gótico contendo 147 segredos ocultos para desvendar."
    },
    {
        id: 37,
        titulo: "Quebra-Cabeça A Noite Estrelada - Van Gogh",
        autor: "Game Office",
        categoria: "Jogos",
        imagem: "imgs/quebra-cabeca2.webp",
        preco: 49.90,
        descricao: "500 peças formato nano com textura de tela da obra-prima de Vincent van Gogh na Coleção Obras de Arte."
    },
    {
        id: 38,
        titulo: "Quebra-Cabeça Jardins Suspensos da Babilônia",
        autor: "Grow",
        categoria: "Jogos",
        imagem: "imgs/quebra-cabeca3.webp",
        preco: 139.90,
        descricao: "Grande quebra-cabeça panorâmico de 5000 peças da Grow retratando os lendários Jardins Suspensos da Babilônia."
    },
    {
        id: 39,
        titulo: "Quebra-Cabeça Japão: Fujiyoshida (500 Peças)",
        autor: "Game Office",
        categoria: "Jogos",
        imagem: "imgs/quebra-cabeca4.webp",
        preco: 46.90,
        descricao: "500 peças nano da série Postais do Mundo retratando o Monte Fuji e o pagode japonês com encaixe preciso."
    },
    {
        id: 40,
        titulo: "Quebra-Cabeça Moça com o Brinco de Pérola",
        autor: "Game Office",
        categoria: "Jogos",
        imagem: "imgs/quebra-cabeca5.webp",
        preco: 49.90,
        descricao: "500 peças nano reproduzindo a célebre pintura a óleo de Johannes Vermeer com cores fiéis e textura de arte."
    }
];

function formatarPreco(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ",");
}

function obterFavoritos() {
    var dados = localStorage.getItem("favoritos_biblioteca");
    if (dados) {
        return JSON.parse(dados);
    } else {
        return [];
    }
}

function salvarFavoritos(lista) {
    localStorage.setItem("favoritos_biblioteca", JSON.stringify(lista));
    atualizarContadorFavoritos();
}

function atualizarContadorFavoritos() {
    var contador = document.getElementById("contadorFavoritos");
    if (contador) {
        var lista = obterFavoritos();
        contador.textContent = lista.length;
    }
}

function adicionarFavorito(idLivro) {
    var lista = obterFavoritos();
    var jaExiste = false;

    for (var i = 0; i < lista.length; i++) {
        if (lista[i] === idLivro) {
            jaExiste = true;
            break;
        }
    }

    if (jaExiste) {
        alert("Este item já está salvo nos seus Favoritos!");
    } else {
        lista.push(idLivro);
        salvarFavoritos(lista);
        alert("Item adicionado com sucesso aos seus Favoritos!");
    }
}

function removerFavorito(idLivro) {
    var lista = obterFavoritos();
    var novaLista = [];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i] !== idLivro) {
            novaLista.push(lista[i]);
        }
    }

    salvarFavoritos(novaLista);
    renderizarPaginaFavoritos();
}

function renderizarPaginaFavoritos() {
    var container = document.getElementById("listaFavoritos");
    var mensagemVazio = document.getElementById("favoritosVazio");

    if (!container) {
        return;
    }

    var listaIds = obterFavoritos();
    container.innerHTML = "";

    if (listaIds.length === 0) {
        if (mensagemVazio) {
            mensagemVazio.style.display = "block";
        }
        return;
    }

    if (mensagemVazio) {
        mensagemVazio.style.display = "none";
    }

    for (var i = 0; i < listaIds.length; i++) {
        var livroId = listaIds[i];
        var itemEncontrado = null;

        for (var j = 0; j < acervoLivros.length; j++) {
            if (acervoLivros[j].id === livroId) {
                itemEncontrado = acervoLivros[j];
                break;
            }
        }

        if (itemEncontrado !== null) {
            var card = document.createElement("article");
            card.className = "livro-card";
            card.innerHTML = 
                '<img src="' + itemEncontrado.imagem + '" alt="' + itemEncontrado.titulo + '">' +
                '<div class="livro-info">' +
                    '<span class="livro-tag">' + itemEncontrado.categoria + '</span>' +
                    '<h3>' + itemEncontrado.titulo + '</h3>' +
                    '<p class="livro-autor"><strong>Autor/Origem:</strong> ' + itemEncontrado.autor + '</p>' +
                    '<p class="livro-preco">' + formatarPreco(itemEncontrado.preco) + '</p>' +
                    '<p>' + itemEncontrado.descricao + '</p>' +
                '</div>' +
                '<div class="livro-acoes">' +
                    '<button type="button" class="botao botao-carrinho" onclick="adicionarAoCarrinho(' + itemEncontrado.id + ')">🛒 Comprar</button>' +
                    '<button type="button" class="botao botao-remover" onclick="removerFavorito(' + itemEncontrado.id + ')">Remover</button>' +
                '</div>';
            container.appendChild(card);
        }
    }
}

function obterCarrinho() {
    var dados = localStorage.getItem("carrinho_biblioteca");
    if (dados) {
        return JSON.parse(dados);
    } else {
        return [];
    }
}

function salvarCarrinho(lista) {
    localStorage.setItem("carrinho_biblioteca", JSON.stringify(lista));
    atualizarContadorCarrinho();
}

function atualizarContadorCarrinho() {
    var contador = document.getElementById("contadorCarrinho");
    if (contador) {
        var carrinho = obterCarrinho();
        var totalItens = 0;
        for (var i = 0; i < carrinho.length; i++) {
            totalItens = totalItens + carrinho[i].quantidade;
        }
        contador.textContent = totalItens;
    }
}

function adicionarAoCarrinho(idLivro) {
    var carrinho = obterCarrinho();
    var encontrado = false;

    for (var i = 0; i < carrinho.length; i++) {
        if (carrinho[i].id === idLivro) {
            carrinho[i].quantidade = carrinho[i].quantidade + 1;
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        carrinho.push({ id: idLivro, quantidade: 1 });
    }

    salvarCarrinho(carrinho);
    alert("Produto adicionado ao seu Carrinho com sucesso!");
}

function alterarQuantidadeCarrinho(idLivro, delta) {
    var carrinho = obterCarrinho();
    var novoCarrinho = [];

    for (var i = 0; i < carrinho.length; i++) {
        if (carrinho[i].id === idLivro) {
            var novaQtd = carrinho[i].quantidade + delta;
            if (novaQtd > 0) {
                carrinho[i].quantidade = novaQtd;
                novoCarrinho.push(carrinho[i]);
            }
        } else {
            novoCarrinho.push(carrinho[i]);
        }
    }

    salvarCarrinho(novoCarrinho);
    renderizarPaginaCarrinho();
}

function removerDoCarrinho(idLivro) {
    var carrinho = obterCarrinho();
    var novoCarrinho = [];

    for (var i = 0; i < carrinho.length; i++) {
        if (carrinho[i].id !== idLivro) {
            novoCarrinho.push(carrinho[i]);
        }
    }

    salvarCarrinho(novoCarrinho);
    renderizarPaginaCarrinho();
}

function limparCarrinho() {
    if (confirm("Tem certeza que deseja esvaziar todo o seu carrinho de compras?")) {
        salvarCarrinho([]);
        renderizarPaginaCarrinho();
    }
}

function finalizarCompra() {
    var carrinho = obterCarrinho();
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    var total = 0;
    for (var i = 0; i < carrinho.length; i++) {
        for (var j = 0; j < acervoLivros.length; j++) {
            if (acervoLivros[j].id === carrinho[i].id) {
                total = total + (acervoLivros[j].preco * carrinho[i].quantidade);
                break;
            }
        }
    }

    alert("Parabéns! Seu pedido no valor de " + formatarPreco(total) + " foi realizado com sucesso na Biblioteca Lilás!\nEm breve você receberá os detalhes no seu e-mail.");
    salvarCarrinho([]);
    renderizarPaginaCarrinho();
}

function renderizarPaginaCarrinho() {
    var corpoTabela = document.getElementById("itensCarrinhoTabela");
    var secaoVazio = document.getElementById("carrinhoVazio");
    var secaoCheio = document.getElementById("carrinhoConteudo");
    var totalProdutosElemento = document.getElementById("resumoSubtotal");
    var totalFinalElemento = document.getElementById("resumoTotalFinal");

    if (!corpoTabela) {
        return;
    }

    var carrinho = obterCarrinho();
    corpoTabela.innerHTML = "";

    if (carrinho.length === 0) {
        if (secaoVazio) {
            secaoVazio.style.display = "block";
        }
        if (secaoCheio) {
            secaoCheio.style.display = "none";
        }
        return;
    }

    if (secaoVazio) {
        secaoVazio.style.display = "none";
    }
    if (secaoCheio) {
        secaoCheio.style.display = "flex";
    }

    var totalGeral = 0;

    for (var i = 0; i < carrinho.length; i++) {
        var itemCarrinho = carrinho[i];
        var produto = null;

        for (var j = 0; j < acervoLivros.length; j++) {
            if (acervoLivros[j].id === itemCarrinho.id) {
                produto = acervoLivros[j];
                break;
            }
        }

        if (produto !== null) {
            var subtotal = produto.preco * itemCarrinho.quantidade;
            totalGeral = totalGeral + subtotal;

            var linha = document.createElement("tr");
            linha.innerHTML = 
                '<td>' +
                    '<div class="item-carrinho-info">' +
                        '<img src="' + produto.imagem + '" alt="' + produto.titulo + '">' +
                        '<div>' +
                            '<strong>' + produto.titulo + '</strong>' +
                            '<span class="item-carrinho-categoria">' + produto.categoria + '</span>' +
                        '</div>' +
                    '</div>' +
                '</td>' +
                '<td>' + formatarPreco(produto.preco) + '</td>' +
                '<td>' +
                    '<div class="seletor-quantidade">' +
                        '<button type="button" onclick="alterarQuantidadeCarrinho(' + produto.id + ', -1)">-</button>' +
                        '<span>' + itemCarrinho.quantidade + '</span>' +
                        '<button type="button" onclick="alterarQuantidadeCarrinho(' + produto.id + ', 1)">+</button>' +
                    '</div>' +
                '</td>' +
                '<td><strong>' + formatarPreco(subtotal) + '</strong></td>' +
                '<td>' +
                    '<button type="button" class="btn-remover-carrinho" onclick="removerDoCarrinho(' + produto.id + ')" title="Remover item">🗑️</button>' +
                '</td>';
            corpoTabela.appendChild(linha);
        }
    }

    if (totalProdutosElemento) {
        totalProdutosElemento.textContent = formatarPreco(totalGeral);
    }
    if (totalFinalElemento) {
        totalFinalElemento.textContent = formatarPreco(totalGeral);
    }
}

function renderizarCatalogo(termoFiltro) {
    var container = document.getElementById("listaLivros");
    if (!container) {
        return;
    }

    container.innerHTML = "";
    var termo = "";
    if (termoFiltro) {
        termo = termoFiltro.toLowerCase().trim();
    }

    var totalExibido = 0;

    for (var i = 0; i < acervoLivros.length; i++) {
        var livro = acervoLivros[i];
        var titulo = livro.titulo.toLowerCase();
        var autor = livro.autor.toLowerCase();
        var categoria = livro.categoria.toLowerCase();

        var corresponde = false;
        if (termo === "" || titulo.indexOf(termo) !== -1 || autor.indexOf(termo) !== -1 || categoria.indexOf(termo) !== -1) {
            corresponde = true;
        }

        if (corresponde) {
            totalExibido++;
            var card = document.createElement("article");
            card.className = "livro-card";
            card.innerHTML = 
                '<img src="' + livro.imagem + '" alt="' + livro.titulo + '">' +
                '<div class="livro-info">' +
                    '<span class="livro-tag">' + livro.categoria + '</span>' +
                    '<h3>' + livro.titulo + '</h3>' +
                    '<p class="livro-autor"><strong>Autor/Origem:</strong> ' + livro.autor + '</p>' +
                    '<p class="livro-preco">' + formatarPreco(livro.preco) + '</p>' +
                    '<p>' + livro.descricao + '</p>' +
                '</div>' +
                '<div class="livro-acoes">' +
                    '<button type="button" class="botao botao-carrinho" onclick="adicionarAoCarrinho(' + livro.id + ')">🛒 Comprar</button>' +
                    '<button type="button" class="botao botao-reserva" onclick="abrirReserva(' + livro.id + ')">📅 Reservar</button>' +
                    '<button type="button" class="botao botao-secundario" onclick="adicionarFavorito(' + livro.id + ')">♡</button>' +
                '</div>';
            container.appendChild(card);
        }
    }

    var msgBusca = document.getElementById("resultadoBusca");
    if (msgBusca) {
        if (totalExibido === 0) {
            msgBusca.textContent = "Nenhum livro ou jogo encontrado para a busca: \"" + termoFiltro + "\"";
            msgBusca.style.display = "block";
        } else {
            msgBusca.style.display = "none";
        }
    }
}

function inicializarBusca() {
    var campoBusca = document.getElementById("pesquisa");
    var params = new URLSearchParams(window.location.search);
    var termoUrl = params.get("busca");

    if (campoBusca) {
        if (termoUrl) {
            campoBusca.value = termoUrl;
            renderizarCatalogo(termoUrl);
        } else {
            renderizarCatalogo("");
        }

        campoBusca.addEventListener("input", function() {
            renderizarCatalogo(campoBusca.value);
        });
    }
}

function inicializarFormularioContato() {
    var form = document.getElementById("formContato");
    if (!form) {
        return;
    }

    form.addEventListener("submit", function(evento) {
        evento.preventDefault();

        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var assunto = document.getElementById("assunto").value;
        var mensagem = document.getElementById("mensagem").value;

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        var novaMensagem = {
            id: new Date().getTime(),
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem,
            dataEnvio: new Date().toLocaleDateString("pt-BR")
        };

        var mensagensSalvas = [];
        var dadosStorage = localStorage.getItem("mensagens_contato");
        if (dadosStorage) {
            mensagensSalvas = JSON.parse(dadosStorage);
        }

        mensagensSalvas.push(novaMensagem);
        localStorage.setItem("mensagens_contato", JSON.stringify(mensagensSalvas));

        var statusDiv = document.getElementById("statusMensagem");
        if (statusDiv) {
            statusDiv.className = "alerta alerta-sucesso";
            statusDiv.textContent = "Obrigado, " + nome + "! Sua mensagem sobre \"" + assunto + "\" foi gravada com sucesso!";
            statusDiv.style.display = "block";
        }

        form.reset();
        carregarMensagensEnviadas();
    });

    carregarMensagensEnviadas();
}

function carregarMensagensEnviadas() {
    var listaContainer = document.getElementById("mensagensEnviadasLista");
    if (!listaContainer) {
        return;
    }

    var dadosStorage = localStorage.getItem("mensagens_contato");
    listaContainer.innerHTML = "";

    if (!dadosStorage) {
        listaContainer.innerHTML = "<p>Nenhuma mensagem enviada anteriormente.</p>";
        return;
    }

    var mensagens = JSON.parse(dadosStorage);
    if (mensagens.length === 0) {
        listaContainer.innerHTML = "<p>Nenhuma mensagem enviada anteriormente.</p>";
        return;
    }

    for (var i = 0; i < mensagens.length; i++) {
        var msg = mensagens[i];
        var item = document.createElement("div");
        item.style.border = "1px solid #e7dbf9";
        item.style.borderRadius = "8px";
        item.style.padding = "12px";
        item.style.marginBottom = "10px";
        item.style.backgroundColor = "#ffffff";
        item.innerHTML = 
            "<p><strong>" + msg.nome + "</strong> (" + msg.email + ") - <em>" + msg.dataEnvio + "</em></p>" +
            "<p><strong>Assunto:</strong> " + msg.assunto + "</p>" +
            "<p>" + msg.mensagem + "</p>";
        listaContainer.appendChild(item);
    }
}

function obterReservas() {
    var dados = localStorage.getItem("reservas_biblioteca");
    if (dados) {
        return JSON.parse(dados);
    } else {
        return [];
    }
}

function salvarReservas(lista) {
    localStorage.setItem("reservas_biblioteca", JSON.stringify(lista));
    renderizarPaginaReserva();
}

function abrirReserva(idLivro) {
    window.location.href = "reserva.html?id=" + idLivro;
}

function cancelarReserva(idReserva) {
    if (confirm("Deseja realmente cancelar esta reserva de exemplar?")) {
        var lista = obterReservas();
        var novaLista = [];
        for (var i = 0; i < lista.length; i++) {
            if (lista[i].id !== idReserva) {
                novaLista.push(lista[i]);
            }
        }
        salvarReservas(novaLista);
        alert("Reserva cancelada com sucesso!");
    }
}

function inicializarPaginaReserva() {
    var selectLivro = document.getElementById("reservaLivroSelect");
    var formReserva = document.getElementById("formReserva");

    if (!selectLivro || !formReserva) {
        return;
    }

    selectLivro.innerHTML = '<option value="">-- Selecione a obra que deseja reservar --</option>';
    for (var i = 0; i < acervoLivros.length; i++) {
        var opt = document.createElement("option");
        opt.value = acervoLivros[i].id;
        opt.textContent = acervoLivros[i].titulo + " (" + acervoLivros[i].categoria + " - " + acervoLivros[i].autor + ")";
        selectLivro.appendChild(opt);
    }

    var params = new URLSearchParams(window.location.search);
    var idParam = params.get("id");
    if (idParam) {
        selectLivro.value = idParam;
    }

    formReserva.addEventListener("submit", function(e) {
        e.preventDefault();

        var idSelecionado = parseInt(selectLivro.value, 10);
        var nome = document.getElementById("reservaNome").value.trim();
        var cpf = document.getElementById("reservaCPF").value.trim();
        var email = document.getElementById("reservaEmail").value.trim();
        var celular = document.getElementById("reservaCelular").value.trim();
        var dataRetirada = document.getElementById("reservaData").value;

        if (!idSelecionado || nome === "" || cpf === "" || email === "" || celular === "" || dataRetirada === "") {
            alert("Por favor, preencha todos os campos da reserva (Nome, CPF, E-mail, Celular e Data).");
            return;
        }

        var livroEncontrado = null;
        for (var j = 0; j < acervoLivros.length; j++) {
            if (acervoLivros[j].id === idSelecionado) {
                livroEncontrado = acervoLivros[j];
                break;
            }
        }

        if (!livroEncontrado) {
            alert("Obra não encontrada.");
            return;
        }

        var prazoDias = 14;
        if (livroEncontrado.categoria === "Jogos") {
            prazoDias = 3;
        } else if (livroEncontrado.categoria === "Suspense") {
            prazoDias = 7;
        }

        var novaReserva = {
            id: new Date().getTime(),
            livroId: livroEncontrado.id,
            livroTitulo: livroEncontrado.titulo,
            livroImagem: livroEncontrado.imagem,
            categoria: livroEncontrado.categoria,
            nome: nome,
            cpf: cpf,
            email: email,
            celular: celular,
            dataRetirada: dataRetirada,
            prazoDevolucao: prazoDias + " dias corridos após retirada",
            dataSolicitacao: new Date().toLocaleDateString("pt-BR")
        };

        var reservas = obterReservas();
        reservas.push(novaReserva);
        salvarReservas(reservas);

        var status = document.getElementById("statusReserva");
        if (status) {
            status.className = "alerta alerta-sucesso";
            status.style.display = "block";
            status.textContent = "Parabéns, " + nome + "! Sua reserva de \"" + livroEncontrado.titulo + "\" foi confirmada para " + dataRetirada + ". Comprovante e lembretes de devolução foram enviados para " + email + " e celular " + celular + " (Prazo: " + prazoDias + " dias).";
        }

        formReserva.reset();
        selectLivro.value = "";
    });

    renderizarPaginaReserva();
}

function renderizarPaginaReserva() {
    var container = document.getElementById("listaReservasAtivas");
    var vazio = document.getElementById("reservasVazio");
    if (!container) {
        return;
    }

    var reservas = obterReservas();
    container.innerHTML = "";

    if (reservas.length === 0) {
        if (vazio) {
            vazio.style.display = "block";
        }
        return;
    }

    if (vazio) {
        vazio.style.display = "none";
    }

    for (var i = 0; i < reservas.length; i++) {
        var r = reservas[i];
        var card = document.createElement("article");
        card.className = "card-reserva-item";
        card.innerHTML = 
            '<div style="display: flex; gap: 16px; align-items: center;">' +
                '<img src="' + r.livroImagem + '" alt="' + r.livroTitulo + '" style="width: 60px; height: 80px; object-fit: contain; margin: 0; background: #faf7fd; border-radius: 6px;">' +
                '<div>' +
                    '<span class="livro-tag">' + r.categoria + '</span>' +
                    '<h3 style="margin: 4px 0; font-size: 16px;">' + r.livroTitulo + '</h3>' +
                    '<p style="font-size: 13px; color: #5b4a73;"><strong>Leitor:</strong> ' + r.nome + ' | <strong>CPF:</strong> ' + r.cpf + '</p>' +
                    '<p style="font-size: 13px; color: #5b4a73;"><strong>Notificações:</strong> ' + r.email + ' • ' + r.celular + '</p>' +
                    '<p style="font-size: 13px; color: #5b4a73;"><strong>Data de Retirada:</strong> ' + r.dataRetirada + ' | <strong>Prazo:</strong> ' + r.prazoDevolucao + '</p>' +
                    '<p style="font-size: 12px; color: #218838; font-weight: bold; margin-top: 4px;">● Status: Reservado / Lembretes de prazo ativos por E-mail e WhatsApp</p>' +
                '</div>' +
            '</div>' +
            '<div>' +
                '<button type="button" class="botao botao-remover" onclick="cancelarReserva(' + r.id + ')">Cancelar</button>' +
            '</div>';
        container.appendChild(card);
    }
}

function salvarAudioFavorito() {
    alert("Trilha sonora oficial da Biblioteca Lilás salva com sucesso nos seus favoritos!");
}

document.addEventListener("DOMContentLoaded", function() {
    atualizarContadorFavoritos();
    atualizarContadorCarrinho();
    inicializarBusca();
    inicializarFormularioContato();
    renderizarPaginaFavoritos();
    renderizarPaginaCarrinho();
    inicializarPaginaReserva();
});
