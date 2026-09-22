// ============================================================
//  Reforço das específicas mais pesadas:
//  Direito Tributário (CTN/CF) e Contabilidade Geral.
//  Questões autorais estilo IDECAN (5 alternativas), com cálculo.
// ============================================================

QUESTOES.push(
  // =================== DIREITO TRIBUTÁRIO ===================
  {
    id: 'dtrib-01', disciplina: 'dir-trib', assunto: 'Espécies tributárias',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Segundo a teoria pentapartida adotada pelo STF, são espécies de tributo:',
    alternativas: [
      'apenas impostos e taxas.',
      'impostos, taxas e contribuições de melhoria.',
      'impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais.',
      'impostos, multas e tarifas.',
      'somente impostos e contribuições sociais.',
    ],
    correta: 2,
    comentario: 'O STF adota a teoria pentapartida (ou quinquipartida): 5 espécies — impostos, taxas e contribuições de melhoria (art. 145 da CF) + empréstimos compulsórios (art. 148) + contribuições especiais (art. 149). O CTN, isoladamente (art. 5º), traz a visão tripartida.',
    fonte: 'CF/88, arts. 145, 148 e 149; STF',
  },
  {
    id: 'dtrib-02', disciplina: 'dir-trib', assunto: 'Taxa x imposto',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Assinale a alternativa que distingue corretamente taxa e imposto.',
    alternativas: [
      'O imposto é vinculado a uma contraprestação estatal específica; a taxa, não.',
      'A taxa tem fato gerador vinculado a uma atuação estatal específica (poder de polícia ou serviço público específico e divisível); o imposto é não vinculado.',
      'Taxa e imposto têm o mesmo fato gerador.',
      'A taxa pode ter a mesma base de cálculo de um imposto.',
      'Somente a União pode instituir taxas.',
    ],
    correta: 1,
    comentario: 'A taxa é tributo VINCULADO: seu fato gerador é uma atuação estatal específica relativa ao contribuinte — exercício do poder de polícia ou serviço público específico e divisível (art. 145, II, CF; art. 77 CTN). O imposto é NÃO vinculado (art. 16 CTN). A taxa NÃO pode ter base de cálculo própria de imposto (art. 145, §2º, CF). Todos os entes podem instituir taxas.',
    fonte: 'CF/88, art. 145, II e §2º; CTN, arts. 16 e 77',
  },
  {
    id: 'dtrib-03', disciplina: 'dir-trib', assunto: 'Princípio da anterioridade',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Uma lei que institui um novo imposto municipal é publicada em 10/12/2026. Respeitadas as anterioridades, quando, em regra, esse imposto poderá ser cobrado?',
    alternativas: [
      'Imediatamente, na data da publicação.',
      'A partir de 1º/01/2027, bastando a virada do exercício.',
      'A partir de 90 dias da publicação, sem exigência de novo exercício.',
      'Somente a partir de 90 dias E no exercício seguinte — ou seja, respeitando tanto a anterioridade anual quanto a nonagesimal.',
      'Após 5 anos da publicação.',
    ],
    correta: 3,
    comentario: 'Em regra, a cobrança exige a anterioridade ANUAL (só no exercício seguinte — art. 150, III, "b") E a anterioridade NONAGESIMAL/noventena (90 dias — art. 150, III, "c"), cumulativamente. Publicada em 10/12/2026, os 90 dias venceriam por volta de 10/03/2027, que já é o exercício seguinte — logo, a partir dessa data.',
    fonte: 'CF/88, art. 150, III, "b" e "c"',
  },
  {
    id: 'dtrib-04', disciplina: 'dir-trib', assunto: 'Imunidades tributárias',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'A imunidade tributária recíproca (art. 150, VI, "a", CF) veda que os entes federativos:',
    alternativas: [
      'cobrem qualquer tributo uns dos outros.',
      'instituam impostos sobre patrimônio, renda ou serviços uns dos outros.',
      'cobrem taxas pela prestação de serviços públicos.',
      'concedam isenções heterônomas.',
      'instituam contribuições de melhoria.',
    ],
    correta: 1,
    comentario: 'A imunidade recíproca proíbe os entes de instituírem IMPOSTOS sobre patrimônio, renda ou serviços uns dos outros (art. 150, VI, "a"). Alcança apenas impostos — não taxas nem contribuições. Estende-se a autarquias e fundações públicas quanto às finalidades essenciais (§2º).',
    fonte: 'CF/88, art. 150, VI, "a" e §2º',
  },
  {
    id: 'dtrib-05', disciplina: 'dir-trib', assunto: 'Obrigação tributária',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre a obrigação tributária, conforme o CTN, assinale a alternativa correta.',
    alternativas: [
      'A obrigação acessória, quando descumprida, jamais se converte em principal.',
      'A obrigação principal tem por objeto o pagamento de tributo ou penalidade pecuniária; a acessória, prestações de fazer ou não fazer no interesse da fiscalização.',
      'A obrigação acessória só existe se houver obrigação principal.',
      'Emitir nota fiscal é obrigação principal.',
      'A obrigação principal decorre exclusivamente de ato do contribuinte.',
    ],
    correta: 1,
    comentario: 'Art. 113 do CTN: a obrigação PRINCIPAL tem por objeto o pagamento de tributo OU penalidade pecuniária (surge com o fato gerador); a ACESSÓRIA decorre da legislação e impõe deveres de fazer/não fazer (ex.: emitir nota, escriturar livros). O descumprimento da acessória converte-a em principal quanto à penalidade (§3º). A acessória é autônoma — pode existir mesmo para entes imunes/isentos.',
    fonte: 'CTN, art. 113',
  },
  {
    id: 'dtrib-06', disciplina: 'dir-trib', assunto: 'Responsabilidade dos sucessores',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Ao adquirir um imóvel, o comprador descobre que havia IPTU em atraso relativo a anos anteriores à compra. Segundo o CTN, em regra:',
    alternativas: [
      'os créditos não podem ser cobrados de ninguém.',
      'o adquirente é pessoalmente responsável pelos tributos relativos ao imóvel, salvo se constar do título a prova de quitação.',
      'apenas o antigo proprietário responde, jamais o adquirente.',
      'o tabelião é o único responsável.',
      'a dívida é automaticamente extinta com a venda.',
    ],
    correta: 1,
    comentario: 'Art. 130 do CTN: os créditos referentes a impostos sobre a propriedade (IPTU), taxas de serviço e contribuição de melhoria sub-rogam-se na pessoa do ADQUIRENTE, salvo quando conste do título a prova de sua quitação. É a responsabilidade por sucessão imobiliária. (Na arrematação em hasta pública, a sub-rogação ocorre sobre o preço.)',
    fonte: 'CTN, art. 130',
  },
  {
    id: 'dtrib-07', disciplina: 'dir-trib', assunto: 'Lançamento tributário',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'O ISSQN, em que o sujeito passivo apura e antecipa o pagamento sem prévio exame da autoridade, sujeitando-se à posterior conferência, é lançado por:',
    alternativas: [
      'lançamento de ofício.',
      'lançamento por declaração.',
      'lançamento por homologação.',
      'arbitramento obrigatório.',
      'não sofre lançamento.',
    ],
    correta: 2,
    comentario: 'No lançamento por HOMOLOGAÇÃO (art. 150 CTN), o contribuinte antecipa o pagamento sem prévio exame do Fisco, que depois homologa (expressa ou tacitamente). É o caso típico do ISS, ICMS, IR. De ofício (art. 149) = feito pela autoridade (ex.: IPTU). Por declaração (art. 147) = com base em informações do contribuinte (ex.: ITBI em muitos municípios).',
    fonte: 'CTN, arts. 147, 149 e 150',
  },
  {
    id: 'dtrib-08', disciplina: 'dir-trib', assunto: 'Suspensão da exigibilidade',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Assinale a alternativa que apresenta SOMENTE hipóteses de SUSPENSÃO da exigibilidade do crédito tributário (art. 151 do CTN).',
    alternativas: [
      'Pagamento, compensação e remissão.',
      'Moratória, depósito do montante integral e parcelamento.',
      'Isenção, anistia e imunidade.',
      'Prescrição, decadência e pagamento.',
      'Dação em pagamento e transação.',
    ],
    correta: 1,
    comentario: 'Suspendem a exigibilidade (art. 151, mnemônico "MO-DE-RE-CO-CO-PA"): MOratória, DEpósito integral, REclamações/REcursos administrativos, COncessão de liminar em MS, COncessão de tutela em outras ações e PArcelamento. Pagamento/compensação/remissão EXTINGUEM (art. 156); isenção/anistia EXCLUEM (art. 175).',
    fonte: 'CTN, art. 151',
  },

  // =================== CONTABILIDADE GERAL ===================
  {
    id: 'ctb-01', disciplina: 'contabilidade', assunto: 'Equação patrimonial',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Uma entidade possui Ativo total de R$ 500.000 e Passivo exigível (obrigações com terceiros) de R$ 320.000. O Patrimônio Líquido é de:',
    alternativas: [
      'R$ 820.000',
      'R$ 320.000',
      'R$ 180.000',
      'R$ 500.000',
      'R$ 160.000',
    ],
    correta: 2,
    comentario: 'Pela equação patrimonial, Ativo = Passivo + PL, logo PL = Ativo − Passivo = 500.000 − 320.000 = R$ 180.000. O PL representa os recursos próprios (capital dos sócios + resultados retidos).',
    fonte: 'Equação patrimonial básica',
  },
  {
    id: 'ctb-02', disciplina: 'contabilidade', assunto: 'Regime de competência',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Uma empresa presta um serviço em dezembro/2026, mas só recebe o pagamento em janeiro/2027. Pelo regime de COMPETÊNCIA, a receita deve ser reconhecida em:',
    alternativas: [
      'janeiro/2027, quando o dinheiro entra no caixa.',
      'dezembro/2026, quando o serviço é prestado (fato gerador da receita).',
      'pode ser reconhecida em qualquer mês, a critério do gestor.',
      'somente no encerramento do exercício seguinte.',
      'não deve ser reconhecida, por não haver caixa.',
    ],
    correta: 1,
    comentario: 'No regime de competência, receitas e despesas são reconhecidas quando OCORREM (fato gerador), independentemente do recebimento/pagamento. O serviço foi prestado em dez/2026 — a receita pertence a esse período. O regime de caixa (que reconhece pelo efetivo recebimento) não é o adotado pela contabilidade societária.',
    fonte: 'Regime de competência (CPC 00)',
  },
  {
    id: 'ctb-03', disciplina: 'contabilidade', assunto: 'Método das partidas dobradas',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Segundo o método das partidas dobradas, para cada lançamento contábil:',
    alternativas: [
      'registra-se apenas um débito.',
      'o total dos débitos deve ser igual ao total dos créditos.',
      'os créditos devem sempre superar os débitos.',
      'registram-se apenas as contas de resultado.',
      'não há necessidade de contrapartida.',
    ],
    correta: 1,
    comentario: 'No método das partidas dobradas (Luca Pacioli), "não há débito sem crédito de igual valor": a soma dos débitos é sempre igual à soma dos créditos. Isso garante o equilíbrio da equação patrimonial em todo lançamento.',
    fonte: 'Método das partidas dobradas',
  },
  {
    id: 'ctb-04', disciplina: 'contabilidade', assunto: 'Natureza das contas (débito/crédito)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'A compra de um veículo à vista, pago com dinheiro do caixa, provoca:',
    alternativas: [
      'débito em Veículos e crédito em Caixa.',
      'crédito em Veículos e débito em Caixa.',
      'débito em Veículos e débito em Caixa.',
      'crédito em Veículos e crédito em Caixa.',
      'apenas um lançamento a débito em Caixa.',
    ],
    correta: 0,
    comentario: 'Contas do ATIVO aumentam a débito e diminuem a crédito. O veículo (Ativo) aumenta → débito em Veículos. O Caixa (Ativo) diminui → crédito em Caixa. É um fato permutativo (troca de um ativo por outro), que não altera o PL.',
    fonte: 'Mecanismo de débito e crédito',
  },
  {
    id: 'ctb-05', disciplina: 'contabilidade', assunto: 'Fatos contábeis',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'O pagamento de juros de um empréstimo (despesa) com recursos do caixa é um fato contábil:',
    alternativas: [
      'permutativo, pois não altera o PL.',
      'modificativo diminutivo, pois reduz o Patrimônio Líquido.',
      'misto aumentativo.',
      'modificativo aumentativo.',
      'sem efeito patrimonial.',
    ],
    correta: 1,
    comentario: 'Os juros são DESPESA, que reduz o resultado e, portanto, o PL. Como envolve apenas o reconhecimento da despesa (com saída de caixa), é fato MODIFICATIVO DIMINUTIVO. Permutativos só trocam elementos sem mexer no PL; mistos combinam permuta + modificação.',
    fonte: 'Classificação dos fatos contábeis',
  },
  {
    id: 'ctb-06', disciplina: 'contabilidade', assunto: 'Balanço Patrimonial — grupos',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'No Balanço Patrimonial, um empréstimo bancário a ser pago em 8 meses e um financiamento a ser quitado em 4 anos classificam-se, respectivamente, em:',
    alternativas: [
      'Ativo Circulante e Ativo Não Circulante.',
      'Passivo Circulante e Passivo Não Circulante.',
      'Passivo Não Circulante e Passivo Circulante.',
      'Patrimônio Líquido e Passivo Circulante.',
      'ambos no Passivo Circulante.',
    ],
    correta: 1,
    comentario: 'Obrigações vencíveis ATÉ o fim do exercício seguinte (até 12 meses) ficam no Passivo CIRCULANTE — o empréstimo de 8 meses. As de prazo maior vão para o Passivo NÃO Circulante — o financiamento de 4 anos. O mesmo critério temporal (curto x longo prazo) vale para o Ativo.',
    fonte: 'Estrutura do Balanço Patrimonial (Lei 6.404/76)',
  },
  {
    id: 'ctb-07', disciplina: 'contabilidade', assunto: 'Depreciação',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Uma máquina foi adquirida por R$ 60.000, com vida útil estimada de 10 anos e valor residual zero. Pelo método linear, a depreciação ANUAL e o valor contábil após 3 anos serão, respectivamente:',
    alternativas: [
      'R$ 6.000 e R$ 42.000.',
      'R$ 6.000 e R$ 18.000.',
      'R$ 2.000 e R$ 54.000.',
      'R$ 6.000 e R$ 60.000.',
      'R$ 20.000 e R$ 0.',
    ],
    correta: 0,
    comentario: 'Método linear: depreciação anual = (custo − residual) / vida útil = 60.000 / 10 = R$ 6.000/ano (taxa de 10% a.a.). Depreciação acumulada em 3 anos = 3 × 6.000 = 18.000. Valor contábil (líquido) = 60.000 − 18.000 = R$ 42.000.',
    fonte: 'Depreciação — método linear (CPC 27)',
  },
  {
    id: 'ctb-08', disciplina: 'contabilidade', assunto: 'Contas patrimoniais x de resultado',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Assinale a alternativa que contém APENAS contas de resultado.',
    alternativas: [
      'Caixa, Estoques e Fornecedores.',
      'Receita de vendas, Despesa de salários e Custo das mercadorias vendidas.',
      'Capital social, Reservas e Bancos.',
      'Duplicatas a receber, Máquinas e Empréstimos.',
      'Imóveis, Veículos e Caixa.',
    ],
    correta: 1,
    comentario: 'Contas de RESULTADO são receitas e despesas (transitam pela DRE e apuram o lucro/prejuízo): receita de vendas, despesa de salários, CMV. As demais listas trazem contas PATRIMONIAIS (ativo, passivo e PL — vão para o Balanço).',
    fonte: 'Contas patrimoniais x de resultado',
  },
);

RESUMOS.push(
  {
    id: 'r-dtrib', disciplina: 'dir-trib', titulo: 'Direito Tributário — mapa de decoreba',
    conteudo: `
      <ul>
        <li><strong>5 espécies (STF):</strong> impostos, taxas, contribuições de melhoria, empréstimos compulsórios, contribuições especiais.</li>
        <li><strong>Imposto</strong> = não vinculado (art. 16 CTN). <strong>Taxa</strong> = vinculada (polícia ou serviço específico e divisível); não pode ter base de imposto.</li>
        <li><strong>Anterioridade:</strong> anual (exercício seguinte, "b") + nonagesimal (90 dias, "c"), em regra <strong>cumulativas</strong>.</li>
        <li><strong>Lançamento:</strong> de ofício (IPTU) · por declaração (ITBI) · por homologação (ISS, ICMS, IR — contribuinte antecipa).</li>
        <li><strong>Crédito tributário:</strong> SUSPENDE (art. 151 — MODERECOCOPA: moratória, depósito, reclamações/recursos, liminar MS, tutela, parcelamento) · EXTINGUE (art. 156 — pagamento, compensação, prescrição, decadência...) · EXCLUI (art. 175 — isenção e anistia).</li>
        <li><strong>Sucessão imobiliária (art. 130):</strong> adquirente responde por IPTU/taxas/melhoria, salvo prova de quitação no título.</li>
      </ul>
      <p class="dica">💡 "Suspende x Extingue x Exclui" é campeão de pegadinha. Decore os 3 róis.</p>
    `,
  },
  {
    id: 'r-contab', disciplina: 'contabilidade', titulo: 'Contabilidade — fundamentos que caem sempre',
    conteudo: `
      <ul>
        <li><strong>Equação:</strong> Ativo = Passivo + PL → <strong>PL = Ativo − Passivo</strong>.</li>
        <li><strong>Partidas dobradas:</strong> Σ débitos = Σ créditos. Ativo/Despesa aumentam a <strong>débito</strong>; Passivo/PL/Receita aumentam a <strong>crédito</strong>.</li>
        <li><strong>Competência:</strong> reconhece receita/despesa quando OCORRE (não quando entra/sai o caixa).</li>
        <li><strong>Fatos:</strong> permutativos (não mexem no PL) · modificativos (alteram o PL: receita ↑, despesa ↓) · mistos (os dois).</li>
        <li><strong>Balanço:</strong> Circulante = até 12 meses; Não Circulante = prazo maior. Vale p/ Ativo e Passivo.</li>
        <li><strong>Depreciação linear:</strong> (custo − residual) ÷ vida útil. Valor contábil = custo − depreciação acumulada.</li>
      </ul>
    `,
  },
);

FLASHCARDS.push(
  { id: 'fdtrib-1', disciplina: 'dir-trib', frente: 'Quais as 5 espécies tributárias (STF)?', verso: 'Impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais (teoria pentapartida).' },
  { id: 'fdtrib-2', disciplina: 'dir-trib', frente: 'Diferença entre taxa e imposto?', verso: 'Taxa = tributo VINCULADO (poder de polícia ou serviço específico e divisível). Imposto = NÃO vinculado. Taxa não pode ter base de imposto.' },
  { id: 'fdtrib-3', disciplina: 'dir-trib', frente: 'Suspende, extingue ou exclui o crédito?', verso: 'Suspende (art. 151): moratória, depósito, recursos, liminar, tutela, parcelamento. Extingue (156): pagamento, prescrição, decadência... Exclui (175): isenção e anistia.' },
  { id: 'fdtrib-4', disciplina: 'dir-trib', frente: 'Tipos de lançamento e exemplos?', verso: 'De ofício (IPTU) · por declaração (ITBI) · por homologação (ISS/ICMS/IR — contribuinte antecipa e o Fisco homologa).' },
  { id: 'fdtrib-5', disciplina: 'dir-trib', frente: 'Anterioridade anual x nonagesimal?', verso: 'Anual: só no exercício seguinte (art. 150,III,b). Nonagesimal: após 90 dias (III,c). Em regra as duas juntas.' },
  { id: 'fctb-1', disciplina: 'contabilidade', frente: 'Equação patrimonial?', verso: 'Ativo = Passivo + Patrimônio Líquido → PL = Ativo − Passivo.' },
  { id: 'fctb-2', disciplina: 'contabilidade', frente: 'Regra das partidas dobradas + natureza das contas?', verso: 'Σ débitos = Σ créditos. Ativo e Despesa aumentam a débito; Passivo, PL e Receita aumentam a crédito.' },
  { id: 'fctb-3', disciplina: 'contabilidade', frente: 'Regime de competência x caixa?', verso: 'Competência: reconhece quando o fato ocorre. Caixa: quando entra/sai dinheiro. A contabilidade usa competência.' },
  { id: 'fctb-4', disciplina: 'contabilidade', frente: 'Depreciação linear — fórmula?', verso: '(custo − valor residual) ÷ vida útil. Valor contábil = custo − depreciação acumulada.' },
  { id: 'fctb-5', disciplina: 'contabilidade', frente: 'Circulante x Não Circulante no Balanço?', verso: 'Circulante = realizável/exigível em até 12 meses. Não Circulante = prazo maior. Vale para Ativo e Passivo.' },
);
