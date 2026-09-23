// ============================================================
//  Reforço: Direito Tributário — Introdução (CTN literal).
//  Fatos e artigos conferidos com apostila da Gran (Marcelo
//  Seco, 168 págs, licenciada p/ o usuário). Foco na
//  literalidade do CTN e nas pegadinhas clássicas de banca.
//  IDs dtn-01..dtn-16 (dtrib-01..08 já existem).
// ============================================================

QUESTOES.push(
  {
    id: 'dtn-01', disciplina: 'dir-trib', assunto: 'Competência x Capacidade tributária',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre a competência tributária e a capacidade tributária ativa, assinale a alternativa correta.',
    alternativas: [
      'A competência tributária é delegável, inclusive a pessoas de direito privado.',
      'A competência tributária é indelegável; delegável é a capacidade tributária ativa (funções de arrecadar e fiscalizar), como na delegação do ITR da União aos Municípios.',
      'A capacidade tributária ativa é indelegável, mas a competência pode ser transferida por lei ordinária.',
      'O não exercício da competência tributária a transfere automaticamente a outro ente.',
      'A competência tributária pode ser alterada por lei ordinária do próprio ente.',
    ],
    correta: 1,
    comentario: 'Art. 7º do CTN: a competência tributária (poder de INSTITUIR o tributo, dado pela CF) é INDELEGÁVEL. O que se delega é a capacidade tributária ativa — arrecadar/fiscalizar (ex.: a União delega ao Município a fiscalização e a arrecadação do ITR). O não exercício da competência não a defere a outro ente (art. 8º). A competência é indelegável, exclusiva, facultativa e inalterável por lei infraconstitucional.',
    fonte: 'CTN, arts. 6º a 8º (base: CESPE/SEFIN Fortaleza 2023)',
  },
  {
    id: 'dtn-02', disciplina: 'dir-trib', assunto: 'Definição de tributo (art. 3º)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Nos termos do art. 3º do CTN, tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que NÃO constitua sanção de ato ilícito, instituída em lei e cobrada mediante:',
    alternativas: [
      'atividade administrativa discricionária.',
      'atividade administrativa plenamente vinculada.',
      'decisão judicial transitada em julgado.',
      'ato de vontade do contribuinte.',
      'convênio entre os entes federativos.',
    ],
    correta: 1,
    comentario: 'Art. 3º do CTN: a cobrança do tributo se dá por atividade administrativa PLENAMENTE VINCULADA — o Fisco não tem margem discricionária, só faz o que a lei determina. Decore os 5 elementos: (1) prestação pecuniária; (2) compulsória; (3) que não é sanção de ato ilícito (multa não é tributo!); (4) instituída em lei; (5) cobrada por atividade vinculada.',
    fonte: 'CTN, art. 3º',
  },
  {
    id: 'dtn-03', disciplina: 'dir-trib', assunto: 'Dação em pagamento',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'A respeito da possibilidade de quitação de créditos tributários mediante dação em pagamento, assinale a alternativa correta.',
    alternativas: [
      'É admitida a dação em pagamento de bens móveis e imóveis, independentemente de lei.',
      'É admitida a dação em pagamento em bens IMÓVEIS, na forma e condições estabelecidas em lei do ente; a dação de bens móveis não é permitida (STF, ADI 1917).',
      'A dação em pagamento descaracteriza a natureza pecuniária do tributo.',
      'A dação em pagamento independe de lei do ente federativo.',
      'Somente a União pode aceitar dação em pagamento.',
    ],
    correta: 1,
    comentario: 'O CTN (art. 156, XI) admite a extinção do crédito por dação em pagamento em bens IMÓVEIS, na forma e condições estabelecidas em lei do ente competente. A dação de bens MÓVEIS não é permitida — o STF, na ADI 1917, declarou inconstitucional lei do DF que a previa. Como o valor do imóvel é expresso em dinheiro, não se descaracteriza a exigência pecuniária.',
    fonte: 'CTN, art. 156, XI; STF, ADI 1917',
  },
  {
    id: 'dtn-04', disciplina: 'dir-trib', assunto: 'Natureza jurídica do tributo (art. 4º)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Segundo o art. 4º do CTN, a natureza jurídica específica do tributo é determinada:',
    alternativas: [
      'pela denominação adotada pela lei.',
      'pela destinação legal do produto da arrecadação.',
      'pelo fato gerador da respectiva obrigação, sendo irrelevantes a denominação e a destinação do produto arrecadado.',
      'pela alíquota aplicada.',
      'pelo ente federativo que o institui.',
    ],
    correta: 2,
    comentario: 'Art. 4º do CTN: a natureza jurídica do tributo é dada pelo FATO GERADOR. São IRRELEVANTES: (I) a denominação e características formais da lei; (II) a destinação legal do produto da arrecadação. Obs.: para as contribuições especiais e empréstimos compulsórios, a doutrina/STF reconhecem que a destinação importa — daí a teoria pentapartite superar a tripartite do CTN.',
    fonte: 'CTN, art. 4º',
  },
  {
    id: 'dtn-05', disciplina: 'dir-trib', assunto: 'Princípio da legalidade (art. 97)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'De acordo com o art. 97 do CTN e seus parágrafos, assinale a alternativa correta.',
    alternativas: [
      'A mera atualização monetária da base de cálculo constitui majoração de tributo e exige lei.',
      'A atualização monetária do valor da base de cálculo NÃO constitui majoração de tributo, ao passo que a modificação da base que a torne mais onerosa equipara-se a majoração.',
      'A instituição de tributos pode ser feita por decreto do Executivo.',
      'A definição do fato gerador pode ser feita por norma complementar.',
      'A cominação de penalidades independe de lei.',
    ],
    correta: 1,
    comentario: 'Art. 97, §2º: a simples ATUALIZAÇÃO monetária da base de cálculo NÃO é majoração (pode ser feita por decreto). Já a modificação da base que a torne mais onerosa (§1º) EQUIPARA-SE a majoração e exige lei. Só a lei institui/extingue/majora tributo, define FG e sujeito passivo, fixa alíquota/base e comina penalidades (Súmula STJ 160: o município não pode atualizar o IPTU acima do índice oficial de correção por decreto).',
    fonte: 'CTN, art. 97, §§1º e 2º',
  },
  {
    id: 'dtn-06', disciplina: 'dir-trib', assunto: 'Normas complementares (art. 100)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Nos termos do art. 100 do CTN, a observância das normas complementares (atos normativos, decisões com eficácia normativa, práticas reiteradas e convênios) pelo contribuinte:',
    alternativas: [
      'não produz qualquer efeito sobre penalidades.',
      'exclui a imposição de penalidades, a cobrança de juros de mora e a atualização do valor monetário da base de cálculo do tributo.',
      'dispensa o pagamento do tributo devido.',
      'converte a obrigação principal em acessória.',
      'transfere a competência tributária ao contribuinte.',
    ],
    correta: 1,
    comentario: 'Art. 100, parágrafo único, do CTN: quem observa as normas complementares fica protegido — exclui-se a imposição de penalidades, a cobrança de juros de mora e a atualização monetária da base de cálculo. Atenção: NÃO dispensa o tributo em si (o valor principal continua devido); apenas afasta os acréscimos.',
    fonte: 'CTN, art. 100, parágrafo único',
  },
  {
    id: 'dtn-07', disciplina: 'dir-trib', assunto: 'Tributos que exigem lei complementar',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Embora, em regra, os tributos sejam instituídos por lei ordinária, a Constituição exige LEI COMPLEMENTAR para instituir:',
    alternativas: [
      'o IPTU, o ISS e o ITBI.',
      'o empréstimo compulsório, o imposto sobre grandes fortunas, os impostos residuais e as contribuições sociais residuais.',
      'todos os impostos municipais.',
      'as taxas e contribuições de melhoria.',
      'o ICMS e o IPVA.',
    ],
    correta: 1,
    comentario: 'Regra: tributo é instituído por lei ordinária. EXCEÇÕES que exigem lei complementar: (1) Empréstimo Compulsório (art. 148); (2) Imposto sobre Grandes Fortunas (art. 153, VII); (3) Impostos Residuais da União (art. 154, I); (4) Contribuições Sociais Residuais (art. 195, §4º). O CTN e a LC 116 são normas GERAIS; não confundir com a lei que institui o tributo.',
    fonte: 'CF/88, arts. 148, 153, VII, 154, I e 195, §4º',
  },
  {
    id: 'dtn-08', disciplina: 'dir-trib', assunto: 'Taxa e base de cálculo (SV 29)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre a base de cálculo das taxas, à luz da Constituição e da jurisprudência do STF, assinale a alternativa correta.',
    alternativas: [
      'A taxa pode ter base de cálculo integralmente idêntica à de um imposto.',
      'É vedada base de cálculo própria de imposto, mas é constitucional adotar, no cálculo da taxa, um ou mais elementos da base de cálculo de imposto, desde que não haja integral identidade entre uma base e outra (Súmula Vinculante 29).',
      'A taxa deve ter como base de cálculo o faturamento da empresa.',
      'A taxa não possui base de cálculo.',
      'É constitucional a cobrança de taxa de matrícula em universidades públicas.',
    ],
    correta: 1,
    comentario: 'A CF (art. 145, §2º) veda à taxa base de cálculo PRÓPRIA de imposto. Mas a Súmula Vinculante 29 admite usar um ou mais ELEMENTOS da base de um imposto, desde que não haja integral identidade (ex.: taxa de coleta de lixo pela área do imóvel). A Súmula Vinculante 12 declara inconstitucional a taxa de matrícula em universidades públicas (ensino público é gratuito, art. 206, IV).',
    fonte: 'CF/88, art. 145, §2º; STF, Súmulas Vinculantes 29 e 12',
  },
  {
    id: 'dtn-09', disciplina: 'dir-trib', assunto: 'Pecunia non olet (art. 118)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'O princípio "pecunia non olet" ("o dinheiro não tem cheiro"), positivado no art. 118 do CTN, significa que:',
    alternativas: [
      'atos ilícitos podem ser definidos como fato gerador de tributos.',
      'a definição legal do fato gerador é interpretada abstraindo-se a validade jurídica dos atos praticados; assim, a renda auferida em atividade ilícita pode ser tributada.',
      'o tributo tem caráter de punição pelo ato ilícito praticado.',
      'a tributação depende do resultado do processo penal.',
      'valores de origem ilícita são imunes à tributação.',
    ],
    correta: 1,
    comentario: 'Art. 118 do CTN: o FG é interpretado abstraindo-se a validade jurídica dos atos e a natureza/efeitos. Cuidado com a pegadinha: o ato ilícito NÃO é o fato gerador — o FG é "auferir renda"; se a renda veio de atividade ilícita (tráfico, corrupção), ainda assim é tributável (neutralidade fiscal; independência entre direito penal e tributário). Isso não transforma o tributo em punição.',
    fonte: 'CTN, art. 118',
  },
  {
    id: 'dtn-10', disciplina: 'dir-trib', assunto: 'FG — condição suspensiva x resolutória',
    banca: 'CESPE', ano: 2021, cargo: 'PGE-MS',
    enunciado: 'Considerando o aspecto temporal da norma de incidência, a incidência do ITCMD no caso de doação de imóvel cujos efeitos somente se iniciarão após o nascimento do filho do donatário configura hipótese de:',
    alternativas: [
      'fato gerador complexivo, submetido a condição resolutória.',
      'fato gerador instantâneo, submetido a condição resolutória.',
      'fato gerador continuado, submetido a condição suspensiva.',
      'fato gerador continuado, submetido a condição resolutória.',
      'fato gerador instantâneo, submetido a condição suspensiva.',
    ],
    correta: 4,
    comentario: 'O ITCMD tem fato gerador INSTANTÂNEO (ocorre uma vez, na transmissão). A cláusula "efeitos após o nascimento do filho" é condição SUSPENSIVA: o FG só se reputa ocorrido no implemento da condição (art. 117, I, CTN). Resolutória seria o inverso — o FG se dá desde a celebração do ato. (Questão real CESPE/PGE-MS 2021.)',
    fonte: 'CTN, art. 117; CESPE/PGE-MS 2021',
  },
  {
    id: 'dtn-11', disciplina: 'dir-trib', assunto: 'Classificação do fato gerador',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Quanto ao momento de sua ocorrência, os fatos geradores classificam-se em instantâneo, periódico (complexo) e continuado. Assinale a associação correta.',
    alternativas: [
      'IPTU e IPVA têm fato gerador instantâneo.',
      'Instantâneo: ICMS, ITBI, ITCMD, IOF (ato único). Periódico/complexo: Imposto de Renda (conjunto de fatos no período). Continuado: IPTU e IPVA (situação duradoura).',
      'O Imposto de Renda tem fato gerador instantâneo.',
      'ITBI e ITCMD têm fato gerador continuado.',
      'Todos os tributos têm fato gerador periódico.',
    ],
    correta: 1,
    comentario: 'FG INSTANTÂNEO (ou simples): ocorre em ato único e momento identificado — ICMS, ITBI, ITCMD, IOF. FG PERIÓDICO/COMPLEXO: soma de vários fatos ao longo do período — Imposto de Renda. FG CONTINUADO: situação estável e duradoura, renovada periodicamente — IPTU e IPVA (enquanto se é proprietário).',
    fonte: 'Classificação doutrinária do fato gerador',
  },
  {
    id: 'dtn-12', disciplina: 'dir-trib', assunto: 'Convenções particulares (art. 123)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Em um contrato de locação, ficou pactuado que o inquilino pagaria o IPTU do imóvel. Diante disso, perante o Fisco municipal:',
    alternativas: [
      'a cláusula transfere a condição de contribuinte ao inquilino.',
      'salvo disposição de lei em contrário, as convenções particulares não podem ser opostas à Fazenda Pública para modificar a definição legal do sujeito passivo; o IPTU continua exigível do proprietário.',
      'o Fisco deve cobrar o IPTU exclusivamente do inquilino.',
      'a obrigação tributária é extinta pela cláusula contratual.',
      'a cláusula tem plena eficácia perante o Fisco, independentemente de lei.',
    ],
    correta: 1,
    comentario: 'Art. 123 do CTN: salvo disposição de lei em contrário, as convenções particulares relativas à responsabilidade pelo pagamento de tributos NÃO podem ser opostas à Fazenda Pública para alterar o sujeito passivo legal. O contrato vale entre as partes (o locador pode cobrar do inquilino em ação própria), mas o Fisco continua exigindo o IPTU do proprietário.',
    fonte: 'CTN, art. 123',
  },
  {
    id: 'dtn-13', disciplina: 'dir-trib', assunto: 'Capacidade tributária passiva (art. 126)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre a capacidade tributária passiva, conforme o art. 126 do CTN, assinale a alternativa correta.',
    alternativas: [
      'Depende da capacidade civil plena da pessoa natural.',
      'Independe da capacidade civil das pessoas naturais, de medidas que limitem a capacidade civil e de a pessoa jurídica estar regularmente constituída (basta configurar unidade econômica ou profissional).',
      'Menores de idade jamais podem ser sujeitos passivos de tributos.',
      'Exige que a pessoa jurídica esteja regularmente registrada.',
      'Depende da vontade do contribuinte de assumir a obrigação.',
    ],
    correta: 1,
    comentario: 'Art. 126 do CTN: a capacidade tributária passiva INDEPENDE (I) da capacidade civil da pessoa natural; (II) de medidas que limitem sua capacidade civil (ex.: interdição); (III) de a pessoa jurídica estar regularmente constituída — basta configurar unidade econômica ou profissional. Ex.: um menor que aufere aluguel é contribuinte do IR; uma empresa "de fato" (irregular) também é sujeito passivo.',
    fonte: 'CTN, art. 126',
  },
  {
    id: 'dtn-14', disciplina: 'dir-trib', assunto: 'Receita derivada x originária',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Quanto à procedência, a receita pública oriunda da arrecadação de tributos classifica-se como:',
    alternativas: [
      'receita originária, pois decorre da exploração do patrimônio estatal.',
      'receita derivada, pois decorre do poder de império do Estado, que obriga o particular a contribuir.',
      'receita de capital, por ingressar no orçamento de investimentos.',
      'receita extraorçamentária, por não integrar o orçamento.',
      'preço público, pois há contraprestação voluntária.',
    ],
    correta: 1,
    comentario: 'A receita tributária é DERIVADA: deriva do poder impositivo/soberania do Estado, que por lei obriga o particular a recolher. RECEITA ORIGINÁRIA decorre da exploração do próprio patrimônio do Estado (aluguéis, preços públicos, venda de bens/serviços) — relação de coordenação, não de imposição.',
    fonte: 'Classificação da receita pública (procedência)',
  },
  {
    id: 'dtn-15', disciplina: 'dir-trib', assunto: 'CTN como Lei Complementar',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'A respeito do Código Tributário Nacional (CTN), assinale a alternativa correta.',
    alternativas: [
      'Foi editado originalmente como lei complementar, em 1988.',
      'É a Lei n. 5.172/1966, editada como lei ordinária e recepcionada pela CF/1988 com status de lei complementar; trata das normas gerais de direito tributário.',
      'Pode ser alterado por qualquer lei ordinária federal.',
      'Tem status de emenda constitucional.',
      'Aplica-se apenas aos tributos da União.',
    ],
    correta: 1,
    comentario: 'O CTN é a Lei n. 5.172/1966, editada como lei ORDINÁRIA e recepcionada pela CF/1988 com STATUS de lei complementar (por tratar de normas gerais — art. 146, III, CF). Por isso, hoje só pode ser alterado por lei complementar. Aplica-se a União, Estados, DF e Municípios, dando unidade ao sistema tributário nacional.',
    fonte: 'Lei n. 5.172/1966; CF/88, art. 146, III',
  },
  {
    id: 'dtn-16', disciplina: 'dir-trib', assunto: 'Sujeito ativo e parafiscalidade',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre o sujeito ativo da obrigação tributária, assinale a alternativa correta.',
    alternativas: [
      'É sempre uma pessoa jurídica de direito privado.',
      'É a pessoa jurídica de direito público titular da competência para exigir o cumprimento da obrigação; entes parafiscais podem receber a capacidade tributária ativa, jamais a competência.',
      'Pode ser qualquer pessoa indicada em contrato particular.',
      'É o contribuinte que pratica o fato gerador.',
      'É necessariamente a União.',
    ],
    correta: 1,
    comentario: 'Art. 119 do CTN: o sujeito ativo é a pessoa jurídica de direito público titular da competência para EXIGIR o cumprimento da obrigação. Entes parafiscais (ex.: conselhos profissionais, autarquias) podem receber apenas a CAPACIDADE tributária ativa (arrecadar/fiscalizar), nunca a competência (que é indelegável e vem da CF). Não confundir sujeito ativo com o contribuinte (sujeito passivo).',
    fonte: 'CTN, art. 119 (base: CESPE/SEFIN Fortaleza 2023)',
  },
);

RESUMOS.push({
  id: 'r-dtn', disciplina: 'dir-trib', titulo: 'Introdução ao Direito Tributário — CTN na veia',
  conteudo: `
    <h4>Conceitos-chave</h4>
    <ul>
      <li><strong>Tributo (art. 3º):</strong> prestação pecuniária compulsória · não é sanção de ato ilícito · instituída em lei · cobrança vinculada. <strong>Multa não é tributo.</strong></li>
      <li><strong>Natureza jurídica (art. 4º):</strong> definida pelo <strong>fato gerador</strong>; irrelevantes nome e destinação.</li>
      <li><strong>Competência</strong> (instituir): INDELEGÁVEL, exclusiva, facultativa, inalterável. <strong>Capacidade ativa</strong> (arrecadar/fiscalizar): DELEGÁVEL (ex.: ITR aos Municípios).</li>
      <li><strong>CTN</strong> = Lei 5.172/66, ordinária recepcionada como <strong>LC</strong>.</li>
    </ul>
    <h4>Legalidade e fontes</h4>
    <ul>
      <li><strong>Art. 97:</strong> só a lei institui/majora/extingue, define FG e sujeito passivo, fixa alíquota/base, comina penalidade. <strong>Atualização monetária da base ≠ majoração.</strong></li>
      <li><strong>Exigem LC:</strong> Empréstimo Compulsório · IGF · Impostos Residuais · Contribuições Sociais Residuais.</li>
      <li><strong>Art. 100:</strong> observar normas complementares exclui penalidade, juros de mora e correção (mas não o tributo).</li>
    </ul>
    <h4>Fato gerador e sujeitos</h4>
    <ul>
      <li><strong>Pecunia non olet (art. 118):</strong> renda de atividade ilícita é tributável (o FG é a renda, não o ilícito).</li>
      <li><strong>Condição suspensiva</strong>: FG no implemento. <strong>Resolutória</strong>: FG desde o ato.</li>
      <li><strong>FG:</strong> instantâneo (ICMS/ITBI/ITCMD/IOF) · periódico/complexo (IR) · continuado (IPTU/IPVA).</li>
      <li><strong>Art. 123:</strong> convenções particulares não são oponíveis ao Fisco (IPTU do inquilino → cobra-se do proprietário).</li>
      <li><strong>Art. 126:</strong> capacidade passiva independe da capacidade civil.</li>
    </ul>
    <h4>Súmulas vinculantes</h4>
    <ul>
      <li><strong>SV 29:</strong> taxa pode usar elemento de base de imposto, sem identidade integral.</li>
      <li><strong>SV 12:</strong> taxa de matrícula em universidade pública é inconstitucional.</li>
    </ul>
    <p class="dica">💡 Pegadinhas top: competência ≠ capacidade; multa não é tributo; atualização monetária não é majoração; dação só de imóveis (ADI 1917).</p>
  `,
});

FLASHCARDS.push(
  { id: 'fdtn-1', disciplina: 'dir-trib', frente: 'Competência x Capacidade tributária ativa?', verso: 'Competência (instituir): INDELEGÁVEL (CF). Capacidade ativa (arrecadar/fiscalizar): DELEGÁVEL (ex.: ITR União→Municípios).' },
  { id: 'fdtn-2', disciplina: 'dir-trib', frente: 'Definição de tributo (art. 3º CTN)?', verso: 'Prestação pecuniária compulsória, que NÃO é sanção de ato ilícito, instituída em lei e cobrada por atividade administrativa plenamente vinculada.' },
  { id: 'fdtn-3', disciplina: 'dir-trib', frente: 'Natureza jurídica do tributo é dada por quê?', verso: 'Pelo FATO GERADOR (art. 4º). Irrelevantes: a denominação e a destinação do produto da arrecadação.' },
  { id: 'fdtn-4', disciplina: 'dir-trib', frente: 'Atualização monetária da base de cálculo é majoração?', verso: 'NÃO (art. 97, §2º) — pode ser por decreto. Já a modificação que torna a base mais onerosa equipara-se a majoração (exige lei).' },
  { id: 'fdtn-5', disciplina: 'dir-trib', frente: 'Quais tributos exigem lei complementar?', verso: 'Empréstimo Compulsório, Imposto sobre Grandes Fortunas, Impostos Residuais e Contribuições Sociais Residuais. Os demais: lei ordinária.' },
  { id: 'fdtn-6', disciplina: 'dir-trib', frente: 'Pecunia non olet — o que significa?', verso: 'Art. 118: o FG é interpretado abstraindo-se a validade dos atos. Renda de atividade ilícita é tributável (o FG é a renda, não o ilícito).' },
  { id: 'fdtn-7', disciplina: 'dir-trib', frente: 'Condição suspensiva x resolutória (FG)?', verso: 'Suspensiva: FG ocorre no IMPLEMENTO da condição. Resolutória: FG ocorre desde a prática do ato/celebração do negócio.' },
  { id: 'fdtn-8', disciplina: 'dir-trib', frente: 'Dação em pagamento — de quê?', verso: 'Somente de bens IMÓVEIS, na forma da lei do ente (art. 156, XI). Bens móveis NÃO (STF, ADI 1917).' },
);
