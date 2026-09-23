// ============================================================
//  Reforço: Contabilidade de Custos e AFO (Administração
//  Financeira e Orçamentária). Estilo IDECAN, com cálculo.
// ============================================================

QUESTOES.push(
  // =================== CONTABILIDADE DE CUSTOS ===================
  {
    id: 'cus-01', disciplina: 'custos', assunto: 'Classificação de custos',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Assinale a alternativa que classifica corretamente os custos quanto à sua variabilidade em relação ao volume produzido.',
    alternativas: [
      'Custo fixo é o que varia proporcionalmente à produção; custo variável é o que permanece constante.',
      'Custo variável é o que varia conforme o volume produzido (ex.: matéria-prima); custo fixo permanece constante no total, independentemente do volume (ex.: aluguel da fábrica).',
      'Todo custo direto é necessariamente fixo.',
      'Custos fixos e variáveis são sinônimos de custos diretos e indiretos.',
      'Custo fixo por unidade é sempre constante.',
    ],
    correta: 1,
    comentario: 'Quanto à variabilidade: CUSTO VARIÁVEL acompanha o volume (matéria-prima, comissões); CUSTO FIXO é constante no total, independentemente da produção (aluguel, depreciação da fábrica). Cuidado: o custo fixo POR UNIDADE diminui quando a produção aumenta (dilui-se). A classificação fixo/variável é independente de direto/indireto.',
    fonte: 'Classificação de custos — variabilidade',
  },
  {
    id: 'cus-02', disciplina: 'custos', assunto: 'Custo x Despesa x Investimento',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Na terminologia contábil de custos, o salário dos operários da fábrica e o salário do pessoal administrativo classificam-se, respectivamente, como:',
    alternativas: [
      'despesa e custo.',
      'custo e despesa.',
      'ambos como custo.',
      'ambos como despesa.',
      'investimento e custo.',
    ],
    correta: 1,
    comentario: 'CUSTO é o gasto ligado à produção de bens/serviços (mão de obra fabril = custo). DESPESA é o gasto ligado à administração/vendas, para obtenção de receita (salário do administrativo = despesa). Gasto é o termo geral; investimento é o gasto ativado (ex.: compra de máquina).',
    fonte: 'Terminologia de custos',
  },
  {
    id: 'cus-03', disciplina: 'custos', assunto: 'Custeio por absorção',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'No método de custeio por ABSORÇÃO (adotado pela legislação societária e fiscal brasileira), os produtos absorvem:',
    alternativas: [
      'apenas os custos variáveis.',
      'todos os custos de produção, fixos e variáveis, diretos e indiretos.',
      'custos e despesas, indistintamente.',
      'apenas os custos diretos.',
      'apenas as despesas operacionais.',
    ],
    correta: 1,
    comentario: 'No custeio por absorção, os produtos "absorvem" TODOS os custos de produção (fixos + variáveis, diretos + indiretos). As despesas NÃO integram o custo do produto — vão direto para o resultado. É o método aceito pela legislação (Lei 6.404/76 e Fisco). No custeio variável, só os custos variáveis compõem o produto.',
    fonte: 'Métodos de custeio — absorção',
  },
  {
    id: 'cus-04', disciplina: 'custos', assunto: 'Margem de contribuição',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Um produto é vendido por R$ 50, com custo variável unitário de R$ 30 e despesa variável de venda de R$ 5 por unidade. A margem de contribuição unitária é:',
    alternativas: [
      'R$ 50',
      'R$ 30',
      'R$ 20',
      'R$ 15',
      'R$ 45',
    ],
    correta: 3,
    comentario: 'Margem de contribuição = Preço de venda − (custos variáveis + despesas variáveis) = 50 − (30 + 5) = R$ 15. É quanto cada unidade contribui para cobrir os custos/despesas fixos e, depois, gerar lucro.',
    fonte: 'Margem de contribuição',
  },
  {
    id: 'cus-05', disciplina: 'custos', assunto: 'Ponto de equilíbrio',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Uma empresa tem custos e despesas fixos de R$ 60.000 por mês e margem de contribuição unitária de R$ 15. Quantas unidades precisa vender para atingir o ponto de equilíbrio (lucro zero)?',
    alternativas: [
      '900.000 unidades',
      '4.000 unidades',
      '900 unidades',
      '75.000 unidades',
      '15 unidades',
    ],
    correta: 1,
    comentario: 'Ponto de equilíbrio (em unidades) = Custos e Despesas Fixos ÷ Margem de Contribuição unitária = 60.000 ÷ 15 = 4.000 unidades. Nesse volume, a receita cobre exatamente todos os custos e despesas (lucro zero). Acima disso, começa o lucro.',
    fonte: 'Ponto de equilíbrio contábil',
  },
  {
    id: 'cus-06', disciplina: 'custos', assunto: 'Custo primário x de transformação',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Custo primário corresponde à soma de material direto + mão de obra direta. Custo de transformação (ou de conversão) corresponde a:',
    alternativas: [
      'material direto + mão de obra direta.',
      'mão de obra direta + custos indiretos de fabricação.',
      'material direto + custos indiretos de fabricação.',
      'apenas o material direto.',
      'todas as despesas administrativas.',
    ],
    correta: 1,
    comentario: 'Custo de TRANSFORMAÇÃO (ou conversão) = Mão de Obra Direta + Custos Indiretos de Fabricação (CIF) — é o esforço da empresa para "transformar" o material em produto. Custo PRIMÁRIO = Material Direto + MOD. Note que a MOD aparece nos dois.',
    fonte: 'Custo primário x de transformação',
  },

  // =================== ADMINISTRAÇÃO FINANCEIRA E ORÇAMENTÁRIA (AFO) ===================
  {
    id: 'afo-07', disciplina: 'afo', assunto: 'Ciclo orçamentário — PPA/LDO/LOA',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre os instrumentos de planejamento orçamentário previstos na Constituição (art. 165), assinale a alternativa correta.',
    alternativas: [
      'A LOA tem vigência de quatro anos.',
      'O PPA estabelece diretrizes, objetivos e metas da administração para quatro anos; a LDO orienta a elaboração da LOA; a LOA é o orçamento anual.',
      'A LDO tem vigência de quatro anos e o PPA é anual.',
      'O PPA é o orçamento anual da União.',
      'A LOA independe da LDO e do PPA.',
    ],
    correta: 1,
    comentario: 'PPA (Plano Plurianual): diretrizes, objetivos e metas para 4 anos. LDO (Lei de Diretrizes Orçamentárias): anual, faz a ponte — estabelece metas e prioridades e orienta a elaboração da LOA. LOA (Lei Orçamentária Anual): o orçamento propriamente dito, para 1 exercício. Os três se articulam (art. 165 CF).',
    fonte: 'CF/88, art. 165',
  },
  {
    id: 'afo-08', disciplina: 'afo', assunto: 'Princípios orçamentários',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'O princípio orçamentário segundo o qual a LOA não conterá dispositivo estranho à previsão da receita e à fixação da despesa (vedando "caudas orçamentárias") é o princípio da:',
    alternativas: [
      'unidade.',
      'universalidade.',
      'exclusividade.',
      'anualidade.',
      'publicidade.',
    ],
    correta: 2,
    comentario: 'Princípio da EXCLUSIVIDADE (art. 165, §8º, CF): a lei orçamentária não conterá matéria estranha à fixação da despesa e à previsão da receita (ressalvadas autorizações para crédito suplementar e operações de crédito). Evita as antigas "caudas orçamentárias" (rabilongos).',
    fonte: 'CF/88, art. 165, §8º',
  },
  {
    id: 'afo-09', disciplina: 'afo', assunto: 'Estágios da despesa pública',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Segundo a Lei 4.320/1964, os estágios da despesa pública, na ordem correta, são:',
    alternativas: [
      'liquidação, empenho e pagamento.',
      'empenho, liquidação e pagamento.',
      'pagamento, empenho e liquidação.',
      'previsão, lançamento e arrecadação.',
      'fixação, empenho e recolhimento.',
    ],
    correta: 1,
    comentario: 'Os estágios da DESPESA são: EMPENHO (reserva da dotação, art. 58) → LIQUIDAÇÃO (verificação do direito do credor, art. 63) → PAGAMENTO (art. 64). "Previsão/lançamento/arrecadação/recolhimento" são estágios da RECEITA — não confundir.',
    fonte: 'Lei 4.320/1964, arts. 58 a 64',
  },
  {
    id: 'afo-10', disciplina: 'afo', assunto: 'Receita pública — classificação',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'A arrecadação de tributos (impostos, taxas, contribuições) classifica-se, quanto à categoria econômica, como receita:',
    alternativas: [
      'de capital.',
      'corrente.',
      'extraorçamentária.',
      'de operações de crédito.',
      'de alienação de bens.',
    ],
    correta: 1,
    comentario: 'As receitas CORRENTES (Lei 4.320/64, art. 11) incluem as receitas tributária, de contribuições, patrimonial, agropecuária, industrial, de serviços e transferências correntes. As de CAPITAL vêm de operações de crédito, alienação de bens, amortização de empréstimos e transferências de capital.',
    fonte: 'Lei 4.320/1964, art. 11',
  },
  {
    id: 'afo-11', disciplina: 'afo', assunto: 'Créditos adicionais',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Os créditos orçamentários destinados a reforçar dotação já existente na LOA, que se mostrou insuficiente, são os créditos adicionais:',
    alternativas: [
      'especiais.',
      'extraordinários.',
      'suplementares.',
      'ordinários.',
      'de investimento.',
    ],
    correta: 2,
    comentario: 'Créditos SUPLEMENTARES reforçam dotação JÁ existente e insuficiente (art. 41, I, Lei 4.320/64). ESPECIAIS: para despesa SEM dotação específica. EXTRAORDINÁRIOS: para despesas urgentes e imprevistas (guerra, calamidade — via MP). Suplementares e especiais dependem de autorização legislativa e de indicação de recursos.',
    fonte: 'Lei 4.320/1964, art. 41',
  },
  {
    id: 'afo-12', disciplina: 'afo', assunto: 'LRF — Lei de Responsabilidade Fiscal',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'A Lei de Responsabilidade Fiscal (LC 101/2000) estabelece, para os Municípios, limite de gasto total com PESSOAL de:',
    alternativas: [
      '50% da receita corrente líquida.',
      '60% da receita corrente líquida.',
      '70% da receita corrente líquida.',
      '100% da receita corrente líquida.',
      'não há limite definido.',
    ],
    correta: 1,
    comentario: 'A LRF fixa o limite de despesa total com pessoal em 60% da Receita Corrente Líquida (RCL) para Municípios e Estados, e 50% para a União (art. 19). No Município, esse limite reparte-se entre Executivo (54%) e Legislativo (6%). O limite prudencial é 95% do limite (art. 22).',
    fonte: 'LC 101/2000 (LRF), arts. 19 e 20',
  },
);

RESUMOS.push(
  {
    id: 'r-custos', disciplina: 'custos', titulo: 'Custos — fórmulas e classificações',
    conteudo: `
      <ul>
        <li><strong>Gasto</strong> = termo geral. <strong>Custo</strong> = ligado à produção. <strong>Despesa</strong> = administração/vendas. <strong>Investimento</strong> = gasto ativado.</li>
        <li><strong>Quanto ao produto:</strong> direto (identificável, ex.: matéria-prima) x indireto (rateado, ex.: aluguel da fábrica).</li>
        <li><strong>Quanto ao volume:</strong> variável (acompanha a produção) x fixo (constante no total; por unidade cai quando produz mais).</li>
        <li><strong>Custo primário</strong> = Material Direto + MOD. <strong>Custo de transformação</strong> = MOD + CIF.</li>
        <li><strong>Absorção</strong> (legal/fiscal): produto absorve TODOS os custos. <strong>Variável/direto</strong> (gerencial): só custos variáveis.</li>
        <li><strong>Margem de contribuição</strong> = Preço − custos e despesas variáveis.</li>
        <li><strong>Ponto de equilíbrio (un.)</strong> = Custos e Despesas Fixos ÷ MC unitária.</li>
      </ul>
    `,
  },
  {
    id: 'r-afo', disciplina: 'afo', titulo: 'AFO — o que a banca adora',
    conteudo: `
      <ul>
        <li><strong>Planejamento:</strong> PPA (4 anos) → LDO (anual, orienta a LOA) → LOA (orçamento anual).</li>
        <li><strong>Despesa (Lei 4.320):</strong> Empenho → Liquidação → Pagamento.</li>
        <li><strong>Receita:</strong> Previsão → Lançamento → Arrecadação → Recolhimento. Correntes (tributos) x de Capital (operações de crédito, alienação).</li>
        <li><strong>Créditos adicionais:</strong> Suplementar (reforça dotação existente) · Especial (despesa sem dotação) · Extraordinário (urgente/imprevisto — MP).</li>
        <li><strong>Princípios:</strong> unidade, universalidade, anualidade, exclusividade (nada estranho à receita/despesa), orçamento bruto, legalidade.</li>
        <li><strong>LRF:</strong> pessoal ≤ 60% RCL (Municípios/Estados) e 50% (União). Prudencial = 95% do limite.</li>
      </ul>
      <p class="dica">💡 Não troque os estágios: EMPENHO é da despesa; LANÇAMENTO é da receita.</p>
    `,
  },
);

FLASHCARDS.push(
  { id: 'fcus-1', disciplina: 'custos', frente: 'Custo x Despesa?', verso: 'Custo = gasto ligado à produção (MO fabril). Despesa = gasto de administração/vendas (salário do administrativo). Gasto é o termo geral.' },
  { id: 'fcus-2', disciplina: 'custos', frente: 'Custeio por absorção — o que o produto absorve?', verso: 'TODOS os custos de produção (fixos + variáveis, diretos + indiretos). Despesas vão direto ao resultado. É o método legal/fiscal.' },
  { id: 'fcus-3', disciplina: 'custos', frente: 'Margem de contribuição — fórmula?', verso: 'MC = Preço de venda − custos e despesas variáveis. É o que sobra para cobrir os fixos e gerar lucro.' },
  { id: 'fcus-4', disciplina: 'custos', frente: 'Ponto de equilíbrio em unidades?', verso: 'PE = Custos e Despesas Fixos ÷ Margem de Contribuição unitária.' },
  { id: 'fcus-5', disciplina: 'custos', frente: 'Custo primário x de transformação?', verso: 'Primário = Material Direto + MOD. Transformação (conversão) = MOD + CIF. A MOD está nos dois.' },
  { id: 'fafo-1', disciplina: 'afo', frente: 'PPA, LDO e LOA — vigência e função?', verso: 'PPA: 4 anos (diretrizes/metas). LDO: anual (orienta a LOA). LOA: orçamento anual. (art. 165 CF)' },
  { id: 'fafo-2', disciplina: 'afo', frente: 'Estágios da despesa pública?', verso: 'Empenho → Liquidação → Pagamento (Lei 4.320/64). Não confundir com a receita (previsão/lançamento/arrecadação/recolhimento).' },
  { id: 'fafo-3', disciplina: 'afo', frente: 'Créditos adicionais — 3 tipos?', verso: 'Suplementar (reforça dotação existente) · Especial (despesa sem dotação) · Extraordinário (urgente/imprevisto, via MP).' },
  { id: 'fafo-4', disciplina: 'afo', frente: 'LRF: limite de gasto com pessoal do Município?', verso: '60% da Receita Corrente Líquida (54% Executivo + 6% Legislativo). União = 50%. Prudencial = 95% do limite.' },
  { id: 'fafo-5', disciplina: 'afo', frente: 'Princípio da exclusividade orçamentária?', verso: 'A LOA não conterá matéria estranha à previsão da receita e fixação da despesa (art. 165, §8º). Veda "caudas orçamentárias".' },
);
