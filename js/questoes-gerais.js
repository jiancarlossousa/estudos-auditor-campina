// ============================================================
//  Conhecimentos Gerais (peso 1, mas = metade da prova)
//  Língua Portuguesa · Noções de Informática ·
//  História de Campina Grande/PB · Legislação e Ética
//  Questões autorais no estilo IDECAN (5 alternativas).
// ============================================================

QUESTOES.push(
  // =================== LÍNGUA PORTUGUESA ===================
  {
    id: 'port-01', disciplina: 'portugues', assunto: 'Crase',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Assinale a alternativa em que o uso (ou a ausência) do acento indicativo de crase está CORRETO.',
    alternativas: [
      'O fiscal se dirigiu à pé até a repartição.',
      'Entregou o documento à ela ontem.',
      'O auditor está disposto à colaborar com a investigação.',
      'A notificação foi enviada à empresa autuada.',
      'Compareceu à uma reunião importante.',
    ],
    correta: 3,
    comentario: 'A crase é a fusão da preposição "a" com o artigo "a(s)". "Enviada à empresa" está correta (quem envia, envia A alguma coisa + A empresa). Erros: "a pé" (locução sem artigo, sem crase), "a ela" (pronome pessoal não admite artigo), "a colaborar" (antes de verbo não há crase), "a uma" (artigo indefinido não admite crase).',
    fonte: 'Regras de crase',
  },
  {
    id: 'port-02', disciplina: 'portugues', assunto: 'Concordância verbal',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.',
    alternativas: [
      'Fazem cinco anos que ele trabalha na Secretaria.',
      'Houveram muitos problemas na apuração dos tributos.',
      'Deve haver poucos contribuintes inadimplentes.',
      'Existe vários processos aguardando julgamento.',
      'Tratam-se de questões complexas de direito tributário.',
    ],
    correta: 2,
    comentario: '"Deve haver" está correto: "haver" no sentido de existir é impessoal (não vai para o plural), e o auxiliar "dever" acompanha a impessoalidade. Erros: "Faz cinco anos" (fazer indicando tempo é impessoal), "Houve muitos problemas", "Existem vários processos" (existir é pessoal, concorda), "Trata-se de questões" (índice de indeterminação, verbo fica no singular).',
    fonte: 'Concordância verbal — verbos impessoais',
  },
  {
    id: 'port-03', disciplina: 'portugues', assunto: 'Regência verbal',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Assinale a alternativa em que a regência do verbo está correta na norma-padrão.',
    alternativas: [
      'Assisti o jogo na televisão ontem à noite.',
      'O documento a que me refiro está anexo.',
      'Prefiro estudar do que trabalhar.',
      'Cheguei na repartição às oito horas.',
      'Namora com o colega há dois anos.',
    ],
    correta: 1,
    comentario: '"Referir-se A algo" exige preposição "a" — "o documento A QUE me refiro" está correto. Erros: "Assisti AO jogo" (assistir = ver pede "a"), "Prefiro estudar A trabalhar" (preferir não admite "do que"), "Cheguei A repartição" (chegar pede "a", não "em"), "Namora o colega" (transitivo direto).',
    fonte: 'Regência verbal',
  },
  {
    id: 'port-04', disciplina: 'portugues', assunto: 'Ortografia e acentuação',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Assinale a alternativa em que todas as palavras estão grafadas corretamente.',
    alternativas: [
      'Excessão, previlégio, beneficiente.',
      'Exceção, privilégio, beneficente.',
      'Excessão, privilégio, benficente.',
      'Exceção, previlégio, beneficiente.',
      'Eceção, privilégio, beneficente.',
    ],
    correta: 1,
    comentario: 'As grafias corretas são: exceção (não "excessão"), privilégio (não "previlégio") e beneficente (não "beneficiente"). São erros ortográficos clássicos cobrados em prova.',
    fonte: 'Ortografia oficial',
  },
  {
    id: 'port-05', disciplina: 'portugues', assunto: 'Coesão e conjunções',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: '"O contribuinte não apresentou a documentação; ______, foi autuado pelo fisco." Assinale o conector que preenche corretamente a lacuna, mantendo a relação de CONSEQUÊNCIA.',
    alternativas: [
      'todavia',
      'portanto',
      'porque',
      'embora',
      'contudo',
    ],
    correta: 1,
    comentario: 'A relação é de causa→consequência (não apresentou, LOGO foi autuado). "Portanto" é conjunção conclusiva/consecutiva. "Todavia" e "contudo" são adversativas; "porque" é causal (inverteria a lógica); "embora" é concessiva.',
    fonte: 'Coesão textual — conectivos',
  },
  {
    id: 'port-06', disciplina: 'portugues', assunto: 'Interpretação e sentido',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Na frase "A fiscalização foi implacável, mas justa", a conjunção "mas" estabelece entre as ideias uma relação de:',
    alternativas: [
      'adição de duas qualidades semelhantes.',
      'oposição/contraste entre as ideias.',
      'conclusão a partir da primeira ideia.',
      'explicação da primeira ideia.',
      'alternância entre as ideias.',
    ],
    correta: 1,
    comentario: '"Mas" é conjunção coordenativa adversativa: estabelece contraste/oposição. Aqui contrapõe "implacável" (rigor) a "justa" (equidade), sugerindo que, apesar do rigor, houve justiça.',
    fonte: 'Semântica — conjunções adversativas',
  },

  // =================== NOÇÕES DE INFORMÁTICA ===================
  {
    id: 'inf-01', disciplina: 'informatica', assunto: 'Hardware x Software',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre os conceitos básicos de informática, assinale a alternativa correta.',
    alternativas: [
      'A memória RAM é uma memória permanente que mantém os dados mesmo com o computador desligado.',
      'O sistema operacional é um exemplo de hardware.',
      'A memória RAM é volátil: perde seu conteúdo quando o computador é desligado.',
      'O HD (disco rígido) é um componente de software.',
      'A CPU é responsável apenas por armazenar arquivos.',
    ],
    correta: 2,
    comentario: 'A memória RAM é volátil (perde o conteúdo ao desligar) — é usada para trabalho temporário. Erros: o SO é software; o HD é hardware (armazenamento não volátil); a CPU (processador) executa instruções, não armazena arquivos permanentemente.',
    fonte: 'Conceitos de hardware e software',
  },
  {
    id: 'inf-02', disciplina: 'informatica', assunto: 'MS Excel',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'No Microsoft Excel, para somar os valores das células de A1 até A10, a fórmula correta é:',
    alternativas: [
      '=SOMA(A1;A10)',
      '=SOMA(A1:A10)',
      '=SOMAR(A1-A10)',
      '=TOTAL(A1:A10)',
      '=SOMA(A1+A10)',
    ],
    correta: 1,
    comentario: 'O operador de intervalo no Excel é o dois-pontos ":". "=SOMA(A1:A10)" soma todas as células do intervalo A1 até A10. O ponto e vírgula ";" separaria argumentos individuais (somaria só A1 e A10). "SOMAR" e "TOTAL" não são funções válidas.',
    fonte: 'Microsoft Excel — funções',
  },
  {
    id: 'inf-03', disciplina: 'informatica', assunto: 'Segurança da informação',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Assinale a alternativa que caracteriza corretamente um ataque de PHISHING.',
    alternativas: [
      'Programa que se replica automaticamente pela rede sem interação do usuário.',
      'Tentativa de obter dados sigilosos (senhas, dados bancários) enganando a vítima, geralmente por e-mail ou site falso que se passa por instituição confiável.',
      'Software que criptografa os arquivos e exige resgate.',
      'Dispositivo físico que registra as teclas digitadas.',
      'Falha de hardware que corrompe a memória RAM.',
    ],
    correta: 1,
    comentario: 'Phishing é a fraude que usa engenharia social — e-mails/sites falsos imitando instituições confiáveis — para "pescar" dados sigilosos da vítima. As outras descrevem: worm (a), ransomware (c), keylogger (d) e uma falha de hardware (e).',
    fonte: 'Segurança da informação',
  },
  {
    id: 'inf-04', disciplina: 'informatica', assunto: 'Atalhos e MS Word',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'No Microsoft Word (e na maioria dos aplicativos), qual atalho de teclado corresponde a "desfazer" a última ação?',
    alternativas: [
      'Ctrl + C',
      'Ctrl + V',
      'Ctrl + Z',
      'Ctrl + P',
      'Ctrl + S',
    ],
    correta: 2,
    comentario: 'Ctrl+Z = desfazer. Os demais: Ctrl+C copiar, Ctrl+V colar, Ctrl+P imprimir, Ctrl+S salvar. (Ctrl+Y ou Ctrl+R refaz.)',
    fonte: 'Atalhos de teclado',
  },
  {
    id: 'inf-05', disciplina: 'informatica', assunto: 'Internet e computação em nuvem',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre conceitos de internet e nuvem, assinale a alternativa correta.',
    alternativas: [
      'Um navegador (browser) é um exemplo de sistema operacional.',
      'O protocolo HTTPS oferece comunicação criptografada, mais segura que o HTTP.',
      'Computação em nuvem exige que todos os arquivos fiquem apenas no HD local.',
      'Um cookie é um tipo de vírus que apaga arquivos.',
      'URL e endereço de e-mail são exatamente a mesma coisa.',
    ],
    correta: 1,
    comentario: 'O HTTPS acrescenta uma camada de criptografia (TLS/SSL) ao HTTP, protegendo os dados em trânsito. Erros: navegador é aplicativo (não SO); nuvem armazena dados em servidores remotos; cookie é um pequeno arquivo de dados (não vírus); URL (endereço de página) ≠ e-mail.',
    fonte: 'Internet — protocolos e nuvem',
  },

  // =================== HISTÓRIA DE CAMPINA GRANDE/PB ===================
  {
    id: 'hist-01', disciplina: 'historia-cg', assunto: 'Emancipação política',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Campina Grande foi elevada à categoria de cidade em 11 de outubro de 1864. Sobre esse marco, assinale a alternativa correta.',
    alternativas: [
      'A data é comemorada como aniversário de emancipação política do município.',
      'Nesse dia a cidade deixou de pertencer ao estado da Paraíba.',
      'A data marca a fundação do estado da Paraíba.',
      'Nesse dia Campina Grande tornou-se capital da Paraíba.',
      'A data corresponde à criação da UFCG.',
    ],
    correta: 0,
    comentario: '11 de outubro de 1864 é a data em que a antiga Vila Nova da Rainha foi elevada à condição de cidade, comemorada como aniversário de emancipação política de Campina Grande. A cidade nunca foi capital do estado (a capital é João Pessoa).',
    fonte: 'História de Campina Grande — emancipação',
  },
  {
    id: 'hist-02', disciplina: 'historia-cg', assunto: 'Geografia e apelidos',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Campina Grande é conhecida por vários apelidos. Assinale a alternativa que apresenta uma denominação tradicional CORRETA da cidade.',
    alternativas: [
      '"Cidade Maravilhosa".',
      '"Rainha da Borborema", por sua localização no Planalto da Borborema.',
      '"Cidade Luz", por ter sido a primeira do país com energia elétrica.',
      '"Princesa do Sertão do São Francisco".',
      '"Capital Nacional do Frevo".',
    ],
    correta: 1,
    comentario: 'Campina Grande é a "Rainha da Borborema", por situar-se no Planalto da Borborema, no Agreste paraibano. "Cidade Maravilhosa" é o Rio de Janeiro; o frevo é de Pernambuco.',
    fonte: 'História e geografia de Campina Grande',
  },
  {
    id: 'hist-03', disciplina: 'historia-cg', assunto: 'Cultura — São João',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'A maior festa popular de Campina Grande, que projeta a cidade nacionalmente, é:',
    alternativas: [
      'o Carnaval de rua, no Parque do Povo.',
      'o Maior São João do Mundo, realizado no Parque do Povo.',
      'a Festa da Uva.',
      'o Círio de Nazaré.',
      'o Festival de Cinema.',
    ],
    correta: 1,
    comentario: 'Campina Grande é sede do "Maior São João do Mundo", festa junina realizada no Parque do Povo, grande atrativo turístico e econômico da cidade nos meses de junho.',
    fonte: 'Cultura de Campina Grande',
  },
  {
    id: 'hist-04', disciplina: 'historia-cg', assunto: 'Economia — ciclo do algodão',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'No início do século XX, Campina Grande consolidou-se como importante entreposto comercial do Nordeste, sobretudo em razão de qual produto?',
    alternativas: [
      'Do café.',
      'Da borracha.',
      'Do algodão.',
      'Do ouro.',
      'Do petróleo.',
    ],
    correta: 2,
    comentario: 'O ciclo do algodão fez de Campina Grande um dos maiores centros comerciais do produto no país, chegando a ser chamada de "Liverpool brasileira" pela intensa exportação do algodão no início do século XX.',
    fonte: 'História econômica de Campina Grande',
  },
  {
    id: 'hist-05', disciplina: 'historia-cg', assunto: 'Educação e tecnologia',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Atualmente Campina Grande é reconhecida como um polo de tecnologia e educação. Assinale a alternativa correta.',
    alternativas: [
      'A cidade não possui universidades públicas.',
      'Sedia a Universidade Federal de Campina Grande (UFCG) e é reconhecida como polo tecnológico e de informática.',
      'É a menor cidade do estado da Paraíba.',
      'Sua economia baseia-se exclusivamente na agricultura de subsistência.',
      'Não possui instituições estaduais de ensino superior.',
    ],
    correta: 1,
    comentario: 'Campina Grande sedia a UFCG (Universidade Federal de Campina Grande) e a UEPB (estadual), sendo reconhecida como importante polo tecnológico e de informática do Nordeste. É a segunda cidade mais populosa da Paraíba, atrás apenas de João Pessoa.',
    fonte: 'Campina Grande — educação e tecnologia',
  },

  // =================== LEGISLAÇÃO E ÉTICA NO SERVIÇO PÚBLICO ===================
  {
    id: 'let-01', disciplina: 'legislacao-etica', assunto: 'Princípios da Administração (LIMPE)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'A Constituição Federal (art. 37) estabelece que a Administração Pública obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência. Sobre o princípio da IMPESSOALIDADE, assinale a alternativa correta.',
    alternativas: [
      'Permite ao agente público privilegiar amigos e parentes nas decisões.',
      'Determina que a Administração atenda ao interesse público, sem favorecimentos ou perseguições pessoais.',
      'Autoriza a autopromoção do agente com verba pública.',
      'Exige apenas que os atos sejam escritos em linguagem formal.',
      'Refere-se somente ao dever de sigilo dos atos administrativos.',
    ],
    correta: 1,
    comentario: 'A impessoalidade impõe tratamento isonômico e finalidade voltada ao interesse público, vedando favorecimentos ou perseguições. Também veda a promoção pessoal do agente (art. 37, §1º, CF). Os princípios formam o acrônimo LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.',
    fonte: 'CF/88, art. 37',
  },
  {
    id: 'let-02', disciplina: 'legislacao-etica', assunto: 'Improbidade administrativa',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'De acordo com a Lei de Improbidade Administrativa (Lei nº 8.429/1992, com as alterações da Lei 14.230/2021), constitui ato de improbidade que importa ENRIQUECIMENTO ILÍCITO:',
    alternativas: [
      'atrasar, por negligência, a resposta a um requerimento.',
      'receber, para si, dinheiro ou vantagem econômica indevida em razão do cargo.',
      'cometer um erro material em cálculo de tributo.',
      'divulgar um ato administrativo no diário oficial.',
      'conceder férias regulares a um subordinado.',
    ],
    correta: 1,
    comentario: 'Auferir vantagem patrimonial indevida em razão do cargo (ex.: receber propina) é o núcleo do enriquecimento ilícito (art. 9º da Lei 8.429/92). Após a Lei 14.230/2021, exige-se dolo. Meros erros ou atos regulares não configuram improbidade.',
    fonte: 'Lei 8.429/1992, art. 9º',
  },
  {
    id: 'let-03', disciplina: 'legislacao-etica', assunto: 'Deveres do servidor',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Entre os deveres funcionais tipicamente previstos nos estatutos dos servidores públicos, NÃO se inclui:',
    alternativas: [
      'ser assíduo e pontual ao serviço.',
      'manter conduta compatível com a moralidade administrativa.',
      'guardar sigilo sobre assuntos da repartição, quando exigido.',
      'valer-se do cargo para obter proveito pessoal em detrimento do interesse público.',
      'tratar com urbanidade as pessoas.',
    ],
    correta: 3,
    comentario: 'Valer-se do cargo para obter proveito pessoal é uma PROIBIÇÃO (e infração), não um dever. Assiduidade, pontualidade, moralidade, sigilo e urbanidade são deveres funcionais clássicos dos estatutos de servidores (ex.: Estatuto do Servidor de Campina Grande e Lei 8.112/90 no plano federal).',
    fonte: 'Estatutos dos servidores — deveres e proibições',
  },
  {
    id: 'let-04', disciplina: 'legislacao-etica', assunto: 'Publicidade e transparência',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre o princípio da publicidade e o acesso à informação na Administração Pública, assinale a alternativa correta.',
    alternativas: [
      'A regra é o sigilo, e a publicidade é a exceção rara.',
      'A publicidade é a regra; o sigilo é exceção, admitido apenas nas hipóteses legais (segurança, intimidade etc.).',
      'Nenhum ato administrativo pode ser publicado.',
      'A publicidade serve para promover pessoalmente a autoridade.',
      'Informações públicas só podem ser acessadas mediante pagamento de taxa elevada.',
    ],
    correta: 1,
    comentario: 'Na Administração Pública a publicidade/transparência é a regra e o sigilo é a exceção, restrita às hipóteses previstas em lei (segurança da sociedade e do Estado, intimidade — Lei de Acesso à Informação 12.527/2011). A publicidade não pode servir à promoção pessoal do agente (art. 37, §1º, CF).',
    fonte: 'CF/88, art. 37 e Lei 12.527/2011 (LAI)',
  },
  {
    id: 'let-05', disciplina: 'legislacao-etica', assunto: 'Ética e conflito de interesses',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Um auditor fiscal é designado para fiscalizar uma empresa da qual é sócio oculto. Do ponto de vista ético, ele deve:',
    alternativas: [
      'conduzir normalmente a fiscalização, aproveitando o conhecimento do negócio.',
      'declarar o impedimento/conflito de interesses e abster-se de atuar no caso.',
      'realizar a fiscalização e reduzir o tributo devido.',
      'transferir sigilosamente a empresa para um parente antes de fiscalizar.',
      'ignorar a situação, pois não há impedimento algum.',
    ],
    correta: 1,
    comentario: 'Há conflito de interesses. A conduta ética e legal é declarar o impedimento/suspeição e afastar-se do caso, preservando a impessoalidade e a moralidade administrativa. Atuar mesmo assim configuraria infração ético-disciplinar e possível improbidade.',
    fonte: 'Ética no serviço público — conflito de interesses',
  },
);

RESUMOS.push(
  {
    id: 'r-hist-cg', disciplina: 'historia-cg', titulo: 'Campina Grande — o que sempre cai',
    conteudo: `
      <ul>
        <li><strong>Emancipação:</strong> elevada a cidade em <strong>11 de outubro de 1864</strong> (antiga Vila Nova da Rainha). Aniversário do município.</li>
        <li><strong>Apelido:</strong> "<strong>Rainha da Borborema</strong>" — fica no Planalto da Borborema, Agreste paraibano.</li>
        <li><strong>População:</strong> <strong>2ª maior cidade da Paraíba</strong> (após João Pessoa). Capital do estado = João Pessoa (não CG).</li>
        <li><strong>Cultura:</strong> "<strong>Maior São João do Mundo</strong>", no <strong>Parque do Povo</strong> (junho).</li>
        <li><strong>Economia histórica:</strong> <strong>ciclo do algodão</strong> — grande entreposto comercial ("Liverpool brasileira").</li>
        <li><strong>Hoje:</strong> polo de <strong>tecnologia/informática</strong>; sedia a <strong>UFCG</strong> (federal) e a <strong>UEPB</strong> (estadual).</li>
        <li><strong>Água:</strong> abastecida pelo <strong>Açude Epitácio Pessoa (Boqueirão)</strong>.</li>
      </ul>
      <p class="dica">💡 Datas e apelidos são o que a IDECAN mais cobra em História local. Decore "11/10/1864" e "Rainha da Borborema".</p>
    `,
  },
  {
    id: 'r-port', disciplina: 'portugues', titulo: 'Português — pegadinhas mais cobradas',
    conteudo: `
      <ul>
        <li><strong>Crase:</strong> não use antes de <strong>verbo</strong>, <strong>palavra masculina</strong>, <strong>pronome pessoal</strong> ("a ela"), nem "a" + artigo indefinido ("a uma"). Use em "à empresa", "à noite", "à medida que".</li>
        <li><strong>Haver</strong> (= existir) e <strong>fazer</strong> (= tempo) são <strong>impessoais</strong>: ficam no singular ("houve problemas", "faz cinco anos"). Já <strong>existir</strong> concorda ("existem problemas").</li>
        <li><strong>Regência:</strong> assistir (ver) → <strong>assistir AO</strong>; preferir → "prefiro X <strong>A</strong> Y" (nunca "do que"); chegar → "chegar <strong>A</strong>" (não "em").</li>
        <li><strong>Conectivos:</strong> mas/porém/contudo/todavia = oposição; portanto/logo = conclusão; porque/pois = causa; embora/conquanto = concessão.</li>
        <li><strong>Ortografia:</strong> exceção, privilégio, beneficente, exceção, concorrência, ascensão.</li>
      </ul>
    `,
  },
);

FLASHCARDS.push(
  { id: 'fhist-1', disciplina: 'historia-cg', frente: 'Quando Campina Grande foi elevada a cidade?', verso: '11 de outubro de 1864 — aniversário de emancipação política do município.' },
  { id: 'fhist-2', disciplina: 'historia-cg', frente: 'Apelido tradicional de Campina Grande?', verso: '"Rainha da Borborema" (fica no Planalto da Borborema, no Agreste paraibano).' },
  { id: 'fhist-3', disciplina: 'historia-cg', frente: 'Maior festa popular de Campina Grande?', verso: 'O "Maior São João do Mundo", no Parque do Povo (junho).' },
  { id: 'fhist-4', disciplina: 'historia-cg', frente: 'Produto do ciclo econômico que projetou CG no início do séc. XX?', verso: 'O algodão — grande entreposto comercial ("Liverpool brasileira").' },
  { id: 'fhist-5', disciplina: 'historia-cg', frente: 'Universidades públicas em Campina Grande?', verso: 'UFCG (federal) e UEPB (estadual). CG é polo de tecnologia/informática.' },
  { id: 'fport-1', disciplina: 'portugues', frente: 'Quando NÃO se usa crase?', verso: 'Antes de verbo, palavra masculina, pronome pessoal ("a ela") e artigo indefinido ("a uma").' },
  { id: 'fport-2', disciplina: 'portugues', frente: '"Haver" no sentido de existir vai para o plural?', verso: 'Não! É impessoal: "houve problemas", "deve haver falhas". (Já "existir" concorda: "existem problemas".)' },
  { id: 'fport-3', disciplina: 'portugues', frente: 'Regência: assistir ao jogo ou assistir o jogo?', verso: 'Assistir (= ver/presenciar) exige "a": "assistir AO jogo".' },
  { id: 'finf-1', disciplina: 'informatica', frente: 'A memória RAM é volátil ou permanente?', verso: 'Volátil — perde o conteúdo quando o computador é desligado.' },
  { id: 'finf-2', disciplina: 'informatica', frente: 'Excel: como somar de A1 até A10?', verso: '=SOMA(A1:A10) — o ":" indica intervalo. O ";" separaria células individuais.' },
  { id: 'finf-3', disciplina: 'informatica', frente: 'O que é phishing?', verso: 'Fraude por engenharia social (e-mail/site falso imitando instituição confiável) para roubar senhas e dados.' },
  { id: 'flet-1', disciplina: 'legislacao-etica', frente: 'Princípios da Administração Pública (art. 37 CF)?', verso: 'LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência.' },
  { id: 'flet-2', disciplina: 'legislacao-etica', frente: 'Improbidade por enriquecimento ilícito — exemplo?', verso: 'Receber vantagem econômica indevida em razão do cargo (propina). Exige dolo (Lei 8.429/92, art. 9º).' },
  { id: 'flet-3', disciplina: 'legislacao-etica', frente: 'Na Administração, publicidade ou sigilo é a regra?', verso: 'Publicidade é a regra; sigilo é exceção, só nas hipóteses legais (LAI — Lei 12.527/2011).' },
);
