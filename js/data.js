// ============================================================
//  Base de dados — Estudos Auditor Fiscal da Receita Municipal
//  Campina Grande/PB · Edital 01/2026 (IDECAN) · Provas 09-10/01/2027
//  Prova: 40 questões objetivas (20 Gerais peso 1 + 20 Específicas peso 2).
//  `peso` = estimativa de ênfase p/ distribuir horas no Plano
//  (específicas valem o DOBRO na prova; não há quadro oficial por disciplina).
// ============================================================

const DISCIPLINAS = [
  // Conhecimentos Gerais (20 questões · peso 1 na prova)
  { id: 'portugues',        nome: 'Língua Portuguesa',                    modulo: 'basicas',     icone: '📖', peso: 8 },
  { id: 'informatica',      nome: 'Noções de Informática',                modulo: 'basicas',     icone: '💻', peso: 5 },
  { id: 'historia-cg',      nome: 'História de Campina Grande / PB',      modulo: 'basicas',     icone: '🌵', peso: 4 },
  { id: 'legislacao-etica', nome: 'Legislação e Ética no Serviço Público',modulo: 'basicas',     icone: '⚖️', peso: 5 },
  // Conhecimentos Específicos (20 questões · peso 2 na prova — valem o dobro)
  { id: 'dir-trib',         nome: 'Direito Tributário',                   modulo: 'especificas', icone: '🧾', peso: 10 },
  { id: 'tributos-mun',     nome: 'Tributos Municipais (IPTU/ITBI/ISS)',  modulo: 'especificas', icone: '🏙️', peso: 10 },
  { id: 'leg-trib-fed',     nome: 'Legislação Tributária Federal',        modulo: 'especificas', icone: '📋', peso: 7 },
  { id: 'contabilidade',    nome: 'Contabilidade Geral',                  modulo: 'especificas', icone: '📒', peso: 8 },
  { id: 'custos',           nome: 'Contabilidade de Custos',              modulo: 'especificas', icone: '📊', peso: 5 },
  { id: 'auditoria',        nome: 'Auditoria (contábil e fiscal)',        modulo: 'especificas', icone: '🔍', peso: 7 },
  { id: 'afo',              nome: 'Adm. Financeira e Orçamentária',       modulo: 'especificas', icone: '💰', peso: 7 },
  { id: 'dir-const',        nome: 'Direito Constitucional',               modulo: 'especificas', icone: '📜', peso: 6 },
  { id: 'dir-adm',          nome: 'Direito Administrativo',               modulo: 'especificas', icone: '🏢', peso: 6 },
  { id: 'dir-empresarial',  nome: 'Direito Empresarial',                  modulo: 'especificas', icone: '🏭', peso: 5 },
  { id: 'adm-geral',        nome: 'Administração Geral',                  modulo: 'especificas', icone: '📈', peso: 5 },
  { id: 'estatistica',      nome: 'Estatística',                          modulo: 'especificas', icone: '🎲', peso: 5 },
  { id: 'lgpd',             nome: 'LGPD',                                 modulo: 'especificas', icone: '🔐', peso: 3 },
];

// ============================================================
//  Banco de Questões
//  Formato: { id, disciplina, assunto, banca, ano, cargo,
//             enunciado, alternativas:[...], correta:index, comentario, fonte }
// ============================================================
const QUESTOES = [
  {
    id: 'aut-01', disciplina: 'tributos-mun', assunto: 'ISSQN — alíquotas (LC 116/2003)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre o Imposto Sobre Serviços de Qualquer Natureza (ISSQN), disciplinado pela Lei Complementar nº 116/2003, assinale a alternativa correta.',
    alternativas: [
      'A alíquota mínima é de 2% e a máxima é de 5%, vedada a concessão de isenções ou benefícios que resultem em carga inferior à mínima, salvo para os serviços de construção civil.',
      'A alíquota mínima é de 2% e a máxima é de 5%, sendo nula a lei que conceda benefício resultando em alíquota efetiva inferior a 2% (salvo exceções da própria LC).',
      'Não há alíquota mínima nacional, cabendo a cada Município fixá-la livremente.',
      'A alíquota máxima é de 2%, conforme fixado pela Constituição Federal.',
      'O ISSQN incide sobre a exportação de serviços para o exterior, por ser tributo de competência municipal.',
    ],
    correta: 1,
    comentario: 'A LC 116/2003 fixa alíquota mínima de 2% (art. 8º-A, incluído pela LC 157/2016) e máxima de 5% (art. 8º, II). É nula a lei municipal que conceda isenção/benefício que resulte em carga efetiva menor que 2%, salvo as exceções da própria LC (alguns serviços de construção civil e transporte). O ISS NÃO incide sobre exportação de serviços (art. 2º, I).',
    fonte: 'LC nº 116/2003, arts. 2º, 8º e 8º-A',
  },
  {
    id: 'aut-02', disciplina: 'tributos-mun', assunto: 'ISSQN — local de incidência',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Quanto ao local em que se considera devido o ISSQN, à luz da LC nº 116/2003, assinale a alternativa correta.',
    alternativas: [
      'O imposto é sempre devido no Município do domicílio do tomador do serviço.',
      'Como regra geral, o serviço considera-se prestado e o imposto devido no local do estabelecimento prestador (ou, na falta, no domicílio do prestador), ressalvadas as exceções legais.',
      'O imposto é sempre devido no Município onde o serviço é executado, sem exceções.',
      'O local de incidência é definido livremente pelo contribuinte na nota fiscal.',
      'O ISSQN é devido no Município da sede da Receita Federal que fiscaliza o prestador.',
    ],
    correta: 1,
    comentario: 'Art. 3º da LC 116/2003: em regra, o serviço considera-se prestado e o imposto devido no local do ESTABELECIMENTO PRESTADOR (ou, na falta, no domicílio do prestador). Há exceções expressas (incisos I a XXV) em que o ISS é devido no local da execução — ex.: construção civil, limpeza, vigilância, estacionamento.',
    fonte: 'LC nº 116/2003, art. 3º',
  },
  {
    id: 'aut-03', disciplina: 'tributos-mun', assunto: 'IPTU — progressividade',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre o Imposto sobre a Propriedade Predial e Territorial Urbana (IPTU), assinale a alternativa correta.',
    alternativas: [
      'O IPTU não pode ser progressivo, por violar o princípio da isonomia.',
      'O IPTU pode ser progressivo em razão do valor do imóvel (progressividade fiscal) e ter alíquotas diferentes conforme a localização e o uso, além da progressividade no tempo como instrumento de política urbana.',
      'A base de cálculo do IPTU é o valor venal do imóvel, sendo o contribuinte exclusivamente o proprietário registrado no cartório.',
      'A progressividade do IPTU no tempo independe de plano diretor.',
      'O IPTU é lançado por homologação, cabendo ao contribuinte apurar e recolher.',
    ],
    correta: 1,
    comentario: 'Após a EC 29/2000, o IPTU pode ser PROGRESSIVO em razão do valor do imóvel (fiscal) e ter alíquotas distintas conforme localização e uso (art. 156, §1º, CF). Há ainda a progressividade no TEMPO como instrumento de política urbana (art. 182, §4º, II), condicionada a plano diretor. Contribuinte: proprietário, titular do domínio útil ou possuidor (art. 34, CTN). Lançamento é de OFÍCIO.',
    fonte: 'CF/88, arts. 156, §1º e 182, §4º; CTN, arts. 32 a 34',
  },
  {
    id: 'aut-04', disciplina: 'tributos-mun', assunto: 'ITBI — imunidade',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre o Imposto de Transmissão de Bens Imóveis (ITBI), de competência municipal, assinale a alternativa correta.',
    alternativas: [
      'O ITBI incide sobre a transmissão causa mortis e a doação de bens imóveis.',
      'O ITBI não incide sobre a transmissão de bens ou direitos incorporados ao patrimônio de pessoa jurídica em realização de capital, nem sobre transmissões decorrentes de fusão, incorporação, cisão ou extinção, salvo se a atividade preponderante do adquirente for a compra e venda, locação ou arrendamento de imóveis.',
      'O ITBI é devido ao Município de domicílio do adquirente.',
      'A base de cálculo do ITBI é sempre o valor declarado pelas partes na escritura, vedado o arbitramento.',
      'O ITBI incide sobre direitos reais de garantia, como a hipoteca.',
    ],
    correta: 1,
    comentario: 'O ITBI incide sobre transmissões INTER VIVOS, a título ONEROSO (causa mortis e doação são do ITCMD estadual). Há imunidade na incorporação de imóvel para realização de capital e nas operações societárias, SALVO se a atividade preponderante do adquirente for imobiliária (art. 156, §2º, I, CF). É devido ao Município da SITUAÇÃO do bem, e não incide sobre direitos reais de garantia (art. 156, II, CF).',
    fonte: 'CF/88, art. 156, II e §2º',
  },
  {
    id: 'aut-05', disciplina: 'dir-trib', assunto: 'Competência tributária dos Municípios',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'De acordo com a Constituição Federal, competem aos Municípios os seguintes impostos:',
    alternativas: [
      'IPTU, ITBI e ITCMD.',
      'IPTU, ITBI e ISSQN.',
      'IPVA, ITBI e ISSQN.',
      'IPTU, ICMS e ISSQN.',
      'ITR, ITBI e ISSQN.',
    ],
    correta: 1,
    comentario: 'Art. 156 da CF/88: compete aos Municípios instituir impostos sobre (I) propriedade predial e territorial urbana — IPTU; (II) transmissão inter vivos de bens imóveis — ITBI; (III) serviços de qualquer natureza — ISSQN. O ITCMD e o IPVA são estaduais; o ICMS é estadual; o ITR é federal (embora possa ser fiscalizado/arrecadado pelo Município por convênio).',
    fonte: 'CF/88, art. 156',
  },
  {
    id: 'aut-06', disciplina: 'dir-trib', assunto: 'Lançamento tributário',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre as modalidades de lançamento tributário previstas no Código Tributário Nacional, assinale a alternativa correta.',
    alternativas: [
      'O IPTU é tipicamente lançado por homologação.',
      'No lançamento por declaração, o sujeito passivo apura e antecipa o pagamento, cabendo à autoridade apenas homologá-lo.',
      'O lançamento de ofício é aquele efetuado pela autoridade administrativa sem participação do sujeito passivo, típico do IPTU.',
      'O ISSQN é sempre lançado de ofício.',
      'O lançamento por homologação não admite revisão pela autoridade fiscal.',
    ],
    correta: 2,
    comentario: 'Lançamento de OFÍCIO (art. 149, CTN): a autoridade apura e constitui o crédito sem participação do sujeito passivo — é o caso típico do IPTU (o carnê chega pronto). No lançamento por DECLARAÇÃO (art. 147), o sujeito informa e a autoridade lança. No por HOMOLOGAÇÃO (art. 150), o sujeito apura e antecipa o pagamento (ISSQN próprio costuma ser assim), sujeito a posterior homologação/revisão.',
    fonte: 'CTN, arts. 147 a 150',
  },
  {
    id: 'aut-07', disciplina: 'leg-trib-fed', assunto: 'Lei de Responsabilidade Fiscal — renúncia de receita',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'À luz da Lei de Responsabilidade Fiscal (LC nº 101/2000), a concessão de benefício de natureza tributária da qual decorra renúncia de receita:',
    alternativas: [
      'É livre, não se sujeitando a qualquer condição, por ser ato discricionário do gestor.',
      'Deve estar acompanhada de estimativa do impacto orçamentário-financeiro e atender a condições legais, como medidas de compensação da receita renunciada.',
      'É vedada em qualquer hipótese aos Municípios.',
      'Depende apenas de autorização do Tribunal de Contas.',
      'Não abrange isenções, apenas anistias.',
    ],
    correta: 1,
    comentario: 'Art. 14 da LRF: a renúncia de receita (isenção não geral, anistia, remissão, subsídio, alteração de alíquota etc.) deve vir acompanhada de estimativa de impacto orçamentário-financeiro no exercício e nos dois seguintes, e atender a uma de duas condições: (I) demonstrar que a renúncia foi considerada na estimativa da LOA e não afeta as metas; ou (II) estar acompanhada de medidas de compensação.',
    fonte: 'LC nº 101/2000 (LRF), art. 14',
  },
  {
    id: 'aut-08', disciplina: 'afo', assunto: 'Instrumentos de planejamento orçamentário',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre os instrumentos de planejamento orçamentário previstos na Constituição Federal, assinale a alternativa correta.',
    alternativas: [
      'O Plano Plurianual (PPA) tem vigência de um ano e fixa as metas anuais.',
      'A Lei de Diretrizes Orçamentárias (LDO) estabelece as metas e prioridades, orienta a elaboração da LOA e dispõe sobre alterações na legislação tributária.',
      'A Lei Orçamentária Anual (LOA) tem vigência de quatro anos.',
      'O PPA é elaborado anualmente, junto com a LOA.',
      'A LDO tem vigência de quatro anos, coincidindo com o mandato.',
    ],
    correta: 1,
    comentario: 'A LDO (art. 165, §2º, CF) estabelece metas e prioridades, orienta a elaboração da LOA, dispõe sobre alterações na legislação tributária e sobre política das agências de fomento. O PPA tem vigência de 4 anos (do 2º ano de um mandato ao 1º do seguinte); a LOA é anual. Encadeamento: PPA → LDO → LOA.',
    fonte: 'CF/88, art. 165',
  },
  {
    id: 'aut-09', disciplina: 'custos', assunto: 'Ponto de equilíbrio',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Uma empresa tem custos e despesas fixos de R$ 60.000 por mês. Seu produto é vendido a R$ 50,00 a unidade, com custos e despesas variáveis de R$ 30,00 por unidade. O ponto de equilíbrio contábil, em unidades, é:',
    alternativas: ['1.200 unidades.', '2.000 unidades.', '3.000 unidades.', '1.500 unidades.', '2.400 unidades.'],
    correta: 2,
    comentario: 'Margem de contribuição unitária = preço − custo/despesa variável unitária = 50 − 30 = R$ 20. Ponto de equilíbrio contábil = Custos e Despesas Fixos ÷ Margem de Contribuição unitária = 60.000 ÷ 20 = 3.000 unidades. Nesse volume, a margem de contribuição total cobre exatamente os custos fixos (lucro zero).',
    fonte: 'Contabilidade de Custos — análise custo-volume-lucro',
  },
  {
    id: 'aut-10', disciplina: 'lgpd', assunto: 'Bases legais e conceitos (Lei 13.709/2018)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018), no que se aplica à Administração Tributária, assinale a alternativa correta.',
    alternativas: [
      'O consentimento do titular é a única base legal que autoriza o tratamento de dados pessoais.',
      'O tratamento de dados pessoais pelo Poder Público para o cumprimento de obrigação legal ou para a execução de políticas públicas é admitido independentemente de consentimento, observadas as finalidades e a boa-fé.',
      'A LGPD não se aplica ao Poder Público.',
      'Dado pessoal e dado pessoal sensível são sinônimos para a lei.',
      'A autoridade nacional competente para fiscalizar a LGPD é a Receita Federal.',
    ],
    correta: 1,
    comentario: 'A LGPD prevê VÁRIAS bases legais além do consentimento (art. 7º), como o cumprimento de obrigação legal/regulatória e a execução de políticas públicas pela Administração (arts. 7º, II e III, e 23). Aplica-se, sim, ao Poder Público. Dado sensível é espécie qualificada (origem racial, saúde, biometria etc. — art. 5º, II). A fiscalização cabe à ANPD, não à Receita.',
    fonte: 'Lei nº 13.709/2018 (LGPD), arts. 5º, 7º e 23',
  },
];

// ============================================================
//  Resumos / Material teórico
// ============================================================
const RESUMOS = [
  {
    id: 'r1', disciplina: 'tributos-mun', titulo: 'Os 3 impostos municipais (IPTU, ITBI, ISSQN)',
    conteudo: `
      <p>A CF/88 (art. 156) dá aos Municípios <strong>três impostos</strong>. É o coração do concurso.</p>
      <table>
        <tr><th></th><th>IPTU</th><th>ITBI</th><th>ISSQN</th></tr>
        <tr><td>Fato gerador</td><td>propriedade de imóvel urbano</td><td>transmissão <em>inter vivos</em>, onerosa, de imóvel</td><td>prestação de serviço da lista da LC 116</td></tr>
        <tr><td>Base de cálculo</td><td>valor venal do imóvel</td><td>valor venal dos bens/direitos transmitidos</td><td>preço do serviço</td></tr>
        <tr><td>Lançamento</td><td>de ofício</td><td>por declaração</td><td>por homologação (regra)</td></tr>
      </table>
      <p class="dica">💡 <strong>ITBI x ITCMD:</strong> transmissão <em>onerosa</em> de imóvel = ITBI (municipal). Transmissão <em>gratuita</em> (herança/doação) = ITCMD (estadual).</p>
      <p class="dica">💡 <strong>Local:</strong> IPTU e ITBI → Município da <strong>situação do imóvel</strong>. ISS → em regra, Município do <strong>estabelecimento prestador</strong> (com exceções da LC 116).</p>
    `,
  },
  {
    id: 'r2', disciplina: 'tributos-mun', titulo: 'ISSQN — pontos que mais caem (LC 116/2003)',
    conteudo: `
      <ul>
        <li><strong>Alíquotas:</strong> mínima <strong>2%</strong> (art. 8º-A) e máxima <strong>5%</strong> (art. 8º, II).</li>
        <li><strong>Não incide</strong> sobre exportação de serviços, sobre relação de emprego e sobre valor intermediado no mercado financeiro.</li>
        <li><strong>Lista de serviços</strong> anexa é <strong>taxativa</strong> na vertical, mas admite interpretação extensiva dentro de cada item (STF).</li>
        <li><strong>Local do imposto</strong> (art. 3º): regra = estabelecimento prestador; exceções (I a XXV) = local da execução (construção civil, limpeza, vigilância, estacionamento, etc.).</li>
        <li><strong>Contribuinte:</strong> o prestador do serviço. Municípios podem instituir <strong>substituição/retenção</strong> pelo tomador.</li>
      </ul>
      <p class="dica">💡 A guerra fiscal do ISS foi combatida pela LC 157/2016, que fixou a alíquota mínima de 2% e vedou benefícios que reduzam a carga abaixo disso.</p>
    `,
  },
  {
    id: 'r3', disciplina: 'dir-trib', titulo: 'Crédito tributário: suspensão, extinção e exclusão',
    conteudo: `
      <p>Não confundir os três grupos (CTN):</p>
      <h4>Suspensão da exigibilidade (art. 151) — "MODERECOPA"</h4>
      <ul><li><strong>MO</strong>ratória · <strong>DE</strong>pósito integral · <strong>RE</strong>clamações e recursos administrativos · <strong>CO</strong>ncessão de liminar/tutela · <strong>PA</strong>rcelamento</li></ul>
      <h4>Extinção (art. 156)</h4>
      <ul><li>Pagamento, compensação, transação, remissão, prescrição e decadência, conversão de depósito em renda, pagamento antecipado + homologação, consignação em pagamento, decisão administrativa/judicial definitiva, dação em pagamento de imóvel.</li></ul>
      <h4>Exclusão (art. 175)</h4>
      <ul><li>Apenas <strong>Isenção</strong> e <strong>Anistia</strong>.</li></ul>
      <p class="dica">💡 Decadência (5 anos) = perda do direito de <strong>lançar</strong>. Prescrição (5 anos) = perda do direito de <strong>cobrar</strong> (executar) o crédito já constituído.</p>
    `,
  },
  {
    id: 'r4', disciplina: 'afo', titulo: 'PPA, LDO e LOA — o tripé orçamentário',
    conteudo: `
      <table>
        <tr><th>Instrumento</th><th>Vigência</th><th>Função</th></tr>
        <tr><td><strong>PPA</strong></td><td>4 anos</td><td>diretrizes, objetivos e metas de médio prazo (despesas de capital e programas continuados)</td></tr>
        <tr><td><strong>LDO</strong></td><td>1 ano</td><td>metas e prioridades; orienta a LOA; dispõe sobre alterações tributárias; inclui a LRF (Anexo de Metas e Riscos Fiscais)</td></tr>
        <tr><td><strong>LOA</strong></td><td>1 ano</td><td>estima a receita e fixa a despesa do exercício</td></tr>
      </table>
      <p>Encadeamento: <strong>PPA → LDO → LOA</strong>. Todos de iniciativa do Executivo.</p>
      <p class="dica">💡 A LOA compreende o orçamento fiscal, o de investimento das estatais e o da seguridade social. É vedado iniciar programa não incluído na LOA (princípio da legalidade orçamentária).</p>
    `,
  },
  {
    id: 'r5', disciplina: 'custos', titulo: 'Fórmulas essenciais de custos',
    conteudo: `
      <ul>
        <li><strong>Margem de Contribuição unitária</strong> = Preço de venda − Custos e Despesas Variáveis unitários</li>
        <li><strong>Ponto de Equilíbrio Contábil (un.)</strong> = Custos e Despesas Fixos ÷ MC unitária</li>
        <li><strong>Ponto de Equilíbrio Econômico</strong> = (Custos Fixos + Lucro desejado) ÷ MC unitária</li>
        <li><strong>Ponto de Equilíbrio Financeiro</strong> = (Custos Fixos − Depreciação) ÷ MC unitária</li>
        <li><strong>Grau de Alavancagem Operacional (GAO)</strong> = Variação % do Lucro ÷ Variação % das Vendas</li>
      </ul>
      <p class="dica">💡 <strong>Custeio por absorção</strong> (aceito pela legislação/fiscal): apropria custos fixos + variáveis aos produtos. <strong>Custeio variável</strong> (gerencial): só os variáveis vão ao produto; os fixos vão direto ao resultado.</p>
    `,
  },
  {
    id: 'r6', disciplina: 'lgpd', titulo: 'LGPD para a Administração Tributária',
    conteudo: `
      <ul>
        <li><strong>Dado pessoal:</strong> informação relacionada a pessoa natural identificada ou identificável. <strong>Sensível:</strong> origem racial, convicção religiosa, saúde, biometria, etc.</li>
        <li><strong>Bases legais</strong> (art. 7º): o consentimento é <em>uma</em> delas — o Poder Público trata dados sobretudo por <strong>obrigação legal</strong> e <strong>execução de políticas públicas</strong> (não precisa de consentimento).</li>
        <li><strong>Agentes:</strong> controlador (decide o tratamento), operador (trata em nome do controlador) e encarregado (DPO, canal com titulares e ANPD).</li>
        <li><strong>ANPD</strong> é a autoridade fiscalizadora.</li>
      </ul>
      <p class="dica">💡 A Administração Tributária pode compartilhar dados para execução de suas competências, mas deve observar finalidade, adequação, necessidade, segurança e prestação de contas (art. 6º).</p>
    `,
  },
];

// ============================================================
//  Flashcards
// ============================================================
const FLASHCARDS = [
  { id: 'f1', disciplina: 'tributos-mun', frente: 'Quais são os 3 impostos de competência dos Municípios?', verso: 'IPTU, ITBI e ISSQN (art. 156, CF/88).' },
  { id: 'f2', disciplina: 'tributos-mun', frente: 'ISSQN: alíquota mínima e máxima?', verso: 'Mínima 2% (art. 8º-A) e máxima 5% (art. 8º, II) da LC 116/2003. Benefício que reduza abaixo de 2% é nulo.' },
  { id: 'f3', disciplina: 'tributos-mun', frente: 'ISS: onde o imposto é devido (regra geral)?', verso: 'No local do ESTABELECIMENTO PRESTADOR (ou domicílio do prestador). Exceções do art. 3º da LC 116 → local da execução.' },
  { id: 'f4', disciplina: 'tributos-mun', frente: 'ITBI x ITCMD: qual a diferença?', verso: 'ITBI (municipal): transmissão ONEROSA de imóvel inter vivos. ITCMD (estadual): transmissão GRATUITA (herança/doação).' },
  { id: 'f5', disciplina: 'tributos-mun', frente: 'IPTU: quem é o contribuinte e como é o lançamento?', verso: 'Contribuinte: proprietário, titular do domínio útil ou possuidor (art. 34 CTN). Lançamento de OFÍCIO (o carnê vem pronto).' },
  { id: 'f6', disciplina: 'tributos-mun', frente: 'Imunidade do ITBI na integralização de capital?', verso: 'Não incide na transmissão de imóvel para realização de capital nem em fusão/incorporação/cisão/extinção — SALVO se a atividade preponderante do adquirente for imobiliária (art. 156, §2º, I).' },
  { id: 'f7', disciplina: 'dir-trib', frente: 'Suspensão da exigibilidade do crédito (mnemônico)?', verso: 'MODERECOPA: MOratória, DEpósito integral, REclamações/recursos, COncessão de liminar/tutela, PArcelamento (art. 151 CTN).' },
  { id: 'f8', disciplina: 'dir-trib', frente: 'Exclusão do crédito tributário: quais causas?', verso: 'Apenas ISENÇÃO e ANISTIA (art. 175 CTN).' },
  { id: 'f9', disciplina: 'dir-trib', frente: 'Decadência x Prescrição no tributário?', verso: 'Decadência (5 anos): perde o direito de LANÇAR. Prescrição (5 anos): perde o direito de COBRAR/executar o crédito já constituído. Arts. 173 e 174.' },
  { id: 'f10', disciplina: 'dir-trib', frente: 'Diferença entre imunidade, isenção e não incidência?', verso: 'Imunidade: vedação constitucional de tributar. Isenção: dispensa legal do tributo devido (exclui o crédito). Não incidência: fato fora da hipótese de incidência.' },
  { id: 'f11', disciplina: 'afo', frente: 'PPA, LDO e LOA: vigências?', verso: 'PPA = 4 anos; LDO = 1 ano; LOA = 1 ano. Encadeamento PPA → LDO → LOA.' },
  { id: 'f12', disciplina: 'afo', frente: 'Estágios da receita e da despesa pública (Lei 4.320)?', verso: 'Receita: previsão → lançamento → arrecadação → recolhimento. Despesa: empenho → liquidação → pagamento.' },
  { id: 'f13', disciplina: 'leg-trib-fed', frente: 'LRF: o que exige a renúncia de receita (art. 14)?', verso: 'Estimativa de impacto orçamentário-financeiro (exercício + 2 seguintes) + uma condição: estar na estimativa da LOA sem afetar metas OU medidas de compensação.' },
  { id: 'f14', disciplina: 'custos', frente: 'Fórmula do Ponto de Equilíbrio Contábil (em unidades)?', verso: 'Custos e Despesas Fixos ÷ Margem de Contribuição unitária. (MC unit. = preço − variáveis unitários.)' },
  { id: 'f15', disciplina: 'custos', frente: 'Custeio por absorção x custeio variável?', verso: 'Absorção (fiscal/legal): custos fixos + variáveis vão ao produto. Variável (gerencial): só variáveis ao produto; fixos direto ao resultado.' },
  { id: 'f16', disciplina: 'lgpd', frente: 'O Poder Público precisa de consentimento para tratar dados?', verso: 'Nem sempre: pode tratar por obrigação legal e execução de políticas públicas (art. 7º, II e III; art. 23). Consentimento é só uma das bases legais.' },
  { id: 'f17', disciplina: 'lgpd', frente: 'Quem fiscaliza a LGPD?', verso: 'A ANPD (Autoridade Nacional de Proteção de Dados).' },
  { id: 'f18', disciplina: 'dir-const', frente: 'Imunidade tributária recíproca — o que veda?', verso: 'Veda União, Estados, DF e Municípios instituírem IMPOSTOS sobre patrimônio, renda e serviços uns dos outros (art. 150, VI, "a"). Não alcança taxas nem contribuições.' },
];
