// ============================================================
//  Reforço: Auditoria. Estilo IDECAN (5 alternativas).
//  IDs aud-06..aud-13 (aud-01..05 já existem em outro arquivo).
// ============================================================

QUESTOES.push(
  {
    id: 'aud-06', disciplina: 'auditoria', assunto: 'Objetivo da auditoria',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'O objetivo de uma auditoria das demonstrações contábeis é:',
    alternativas: [
      'garantir, com certeza absoluta, que não há qualquer erro ou fraude.',
      'expressar uma opinião sobre se as demonstrações contábeis estão elaboradas, em todos os aspectos relevantes, de acordo com a estrutura de relatório financeiro aplicável.',
      'elaborar as demonstrações contábeis da entidade auditada.',
      'substituir a administração na tomada de decisões.',
      'assegurar a lucratividade futura da empresa.',
    ],
    correta: 1,
    comentario: 'A auditoria visa aumentar o grau de confiança dos usuários nas demonstrações, mediante uma OPINIÃO sobre se elas refletem adequadamente, em todos os aspectos RELEVANTES, a posição patrimonial e financeira (NBC TA 200). Oferece segurança RAZOÁVEL (alto grau, mas não absoluto) — não é garantia total contra erro/fraude, e o auditor não elabora as demonstrações (isso é da administração).',
    fonte: 'NBC TA 200',
  },
  {
    id: 'aud-07', disciplina: 'auditoria', assunto: 'Auditoria interna x independente',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre a distinção entre auditoria interna e auditoria independente (externa), assinale a alternativa correta.',
    alternativas: [
      'A auditoria interna é executada por profissional sem qualquer vínculo com a entidade.',
      'A auditoria independente é realizada por empregado subordinado à diretoria da empresa.',
      'A auditoria interna é atividade permanente, exercida por profissional vinculado à entidade, com foco em controles internos e gestão de riscos; a independente é feita por profissional externo, que emite opinião sobre as demonstrações.',
      'Ambas emitem o mesmo relatório e têm idêntica finalidade.',
      'A auditoria interna não pode avaliar controles internos.',
    ],
    correta: 2,
    comentario: 'A auditoria INTERNA é permanente e exercida por profissional vinculado à entidade, voltada a avaliar controles internos, gestão de riscos e governança (assessora a administração). A INDEPENDENTE/externa é feita por profissional sem vínculo, com o objetivo de emitir opinião sobre as demonstrações contábeis. A independência é o atributo essencial da auditoria externa.',
    fonte: 'NBC TI 01 / NBC TA — auditoria interna x independente',
  },
  {
    id: 'aud-08', disciplina: 'auditoria', assunto: 'Tipos de opinião',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Quando o auditor conclui que as demonstrações contábeis, tomadas em conjunto, estão de tal forma distorcidas e disseminadas (generalizadas) que NÃO representam adequadamente a situação da entidade, ele deve emitir opinião:',
    alternativas: [
      'sem ressalva (não modificada).',
      'com ressalva.',
      'adversa (negativa).',
      'com abstenção de opinião.',
      'preliminar.',
    ],
    correta: 2,
    comentario: 'Opinião ADVERSA (negativa): distorções relevantes E GENERALIZADAS (disseminadas). COM RESSALVA: distorção relevante, mas não generalizada. ABSTENÇÃO (negativa de opinião): impossibilidade de obter evidência apropriada e suficiente, com efeitos relevantes e generalizados. SEM RESSALVA (limpa): tudo adequado. (NBC TA 705)',
    fonte: 'NBC TA 705',
  },
  {
    id: 'aud-09', disciplina: 'auditoria', assunto: 'Testes de auditoria',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Os testes de auditoria destinados a verificar o funcionamento dos controles internos da entidade são denominados:',
    alternativas: [
      'testes substantivos de detalhes.',
      'testes de observância (ou testes de controles).',
      'procedimentos analíticos substantivos.',
      'recálculo de saldos.',
      'confirmação externa.',
    ],
    correta: 1,
    comentario: 'Os testes de OBSERVÂNCIA (ou testes de controles) avaliam se os controles internos funcionam efetivamente. Já os testes SUBSTANTIVOS (de detalhes e procedimentos analíticos substantivos) buscam evidência sobre os valores e divulgações das demonstrações, detectando distorções relevantes. Quanto melhores os controles, menor a extensão dos testes substantivos.',
    fonte: 'NBC TA 330 / 500 — testes de controles e substantivos',
  },
  {
    id: 'aud-10', disciplina: 'auditoria', assunto: 'Risco de auditoria',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'O risco de auditoria é usualmente decomposto em três componentes. A probabilidade de que uma distorção relevante NÃO seja detectada pelos procedimentos do auditor é o risco:',
    alternativas: [
      'inerente.',
      'de controle.',
      'de detecção.',
      'de negócio.',
      'de liquidez.',
    ],
    correta: 2,
    comentario: 'Risco de auditoria = Risco de Distorção Relevante (RISCO INERENTE × RISCO DE CONTROLE) × RISCO DE DETECÇÃO. O de DETECÇÃO é o de os procedimentos do auditor não detectarem uma distorção existente — é o único que o auditor controla diretamente (ajustando natureza, época e extensão dos testes). Inerente = suscetibilidade da conta; de controle = falha dos controles internos.',
    fonte: 'NBC TA 200 / 315 — risco de auditoria',
  },
  {
    id: 'aud-11', disciplina: 'auditoria', assunto: 'Evidência e papéis de trabalho',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre a evidência de auditoria, assinale a alternativa correta.',
    alternativas: [
      'A evidência deve ser apenas suficiente, não importando sua qualidade.',
      'A evidência de auditoria deve ser apropriada (relevante e confiável) e suficiente (em quantidade) para fundamentar a opinião do auditor.',
      'Evidência obtida de fonte interna é sempre mais confiável que a de fonte externa.',
      'Os papéis de trabalho pertencem à entidade auditada.',
      'A opinião pode ser emitida sem qualquer evidência, com base apenas na experiência do auditor.',
    ],
    correta: 1,
    comentario: 'A evidência precisa ser APROPRIADA (qualidade: relevância + confiabilidade) e SUFICIENTE (quantidade). Em regra, evidência de fonte EXTERNA e independente é mais confiável que a interna, e a obtida diretamente pelo auditor é mais confiável que a indireta. Os papéis de trabalho (documentação) pertencem ao AUDITOR e comprovam a execução do trabalho.',
    fonte: 'NBC TA 500 / 230',
  },
  {
    id: 'aud-12', disciplina: 'auditoria', assunto: 'Ceticismo e materialidade',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'A postura de manter uma mente questionadora, atento a possíveis distorções por erro ou fraude, avaliando criticamente as evidências, é definida em auditoria como:',
    alternativas: [
      'independência.',
      'ceticismo profissional.',
      'confidencialidade.',
      'materialidade.',
      'competência técnica.',
    ],
    correta: 1,
    comentario: 'CETICISMO PROFISSIONAL é a postura de mente questionadora, sem aceitar as informações da administração como necessariamente verdadeiras, avaliando criticamente as evidências (NBC TA 200). Não confundir com MATERIALIDADE/relevância (magnitude de uma omissão/distorção capaz de influenciar as decisões dos usuários) nem com independência (ausência de vínculos que comprometam o julgamento).',
    fonte: 'NBC TA 200 — ceticismo profissional',
  },
  {
    id: 'aud-13', disciplina: 'auditoria', assunto: 'Auditoria governamental',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'No âmbito do controle externo da Administração Pública, a auditoria que examina a economicidade, eficiência, eficácia e efetividade da gestão de recursos públicos é a auditoria:',
    alternativas: [
      'de conformidade (legalidade).',
      'financeira (contábil).',
      'operacional (de desempenho).',
      'de regularidade.',
      'tributária.',
    ],
    correta: 2,
    comentario: 'A auditoria OPERACIONAL (ou de desempenho) avalia a gestão quanto aos "3 E + efetividade" — economicidade, eficiência, eficácia e efetividade. A de CONFORMIDADE/legalidade verifica o cumprimento de normas; a FINANCEIRA/contábil opina sobre as demonstrações. No Brasil, o controle externo é exercido pelo Legislativo com auxílio dos Tribunais de Contas (art. 70-71 CF).',
    fonte: 'CF/88, arts. 70-71; normas de auditoria governamental (ISSAI/TCU)',
  },
);

RESUMOS.push({
  id: 'r-auditoria', disciplina: 'auditoria', titulo: 'Auditoria — o essencial para a prova',
  conteudo: `
    <ul>
      <li><strong>Objetivo:</strong> opinar se as demonstrações estão adequadas em todos os aspectos RELEVANTES. Segurança RAZOÁVEL (não absoluta).</li>
      <li><strong>Interna</strong> (vinculada, permanente, foco em controles/riscos) x <strong>Independente/externa</strong> (sem vínculo, opina sobre as demonstrações).</li>
      <li><strong>Tipos de opinião (NBC TA 705):</strong> sem ressalva (limpa) · com ressalva (relevante, não generalizada) · adversa (relevante E generalizada) · abstenção (sem evidência suficiente, efeitos generalizados).</li>
      <li><strong>Testes:</strong> observância/controles (o controle funciona?) x substantivos (os valores estão corretos?). Controle bom → menos substantivo.</li>
      <li><strong>Risco de auditoria</strong> = (inerente × controle) × detecção. Só o de <strong>detecção</strong> o auditor controla direto.</li>
      <li><strong>Evidência:</strong> apropriada (qualidade) + suficiente (quantidade). Externa &gt; interna. Papéis de trabalho são do <strong>auditor</strong>.</li>
      <li><strong>Postura:</strong> ceticismo profissional, independência, materialidade/relevância.</li>
      <li><strong>Governamental (controle externo, TCU):</strong> conformidade/legalidade · financeira · operacional (economicidade, eficiência, eficácia, efetividade).</li>
    </ul>
    <p class="dica">💡 Campeãs de pegadinha: opinião adversa x abstenção; risco de detecção (único controlável); papéis de trabalho pertencem ao auditor.</p>
  `,
});

FLASHCARDS.push(
  { id: 'faud-1', disciplina: 'auditoria', frente: 'Qual o objetivo da auditoria das demonstrações contábeis?', verso: 'Emitir OPINIÃO sobre se estão adequadas em todos os aspectos RELEVANTES. Dá segurança razoável (não absoluta); não garante ausência total de fraude.' },
  { id: 'faud-2', disciplina: 'auditoria', frente: 'Tipos de opinião do auditor?', verso: 'Sem ressalva (limpa) · com ressalva (relevante, não generalizada) · adversa (relevante E generalizada) · abstenção (falta de evidência, efeitos generalizados).' },
  { id: 'faud-3', disciplina: 'auditoria', frente: 'Testes de observância x substantivos?', verso: 'Observância (controles): o controle interno funciona? Substantivos: os valores/saldos estão corretos? Controle bom reduz os substantivos.' },
  { id: 'faud-4', disciplina: 'auditoria', frente: 'Componentes do risco de auditoria?', verso: '(Inerente × Controle) × Detecção. Só o risco de DETECÇÃO o auditor controla diretamente (ajustando os testes).' },
  { id: 'faud-5', disciplina: 'auditoria', frente: 'A quem pertencem os papéis de trabalho?', verso: 'Ao auditor. Documentam a execução e fundamentam a opinião. A evidência deve ser apropriada (qualidade) e suficiente (quantidade).' },
  { id: 'faud-6', disciplina: 'auditoria', frente: 'Auditoria operacional (governamental) avalia o quê?', verso: 'Economicidade, eficiência, eficácia e efetividade da gestão. Controle externo = Legislativo + Tribunais de Contas (art. 70-71 CF).' },
);
