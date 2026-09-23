// ============================================================
//  Reforço: Auditoria (NBC TA / NBC TI 01).
//  Fatos conferidos com o curso da Gran (Marcelo Aragão, 14
//  PDFs por norma). Foco na literalidade das NBC TA e nas
//  pegadinhas clássicas. IDs audn-01..audn-20.
// ============================================================

QUESTOES.push(
  {
    id: 'audn-01', disciplina: 'auditoria', assunto: 'Objetivo e alcance (NBC TA 200)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Segundo a NBC TA 200 (a "norma-mãe"), a opinião do auditor sobre as demonstrações contábeis:',
    alternativas: [
      'assegura a viabilidade futura da entidade.',
      'trata de se as demonstrações foram elaboradas, em todos os aspectos relevantes, conforme a estrutura de relatório financeiro aplicável, NÃO assegurando a viabilidade futura da entidade nem a eficiência/eficácia da gestão.',
      'garante que não há qualquer fraude ou erro.',
      'atesta a eficiência com que a administração conduziu os negócios.',
      'substitui a responsabilidade da administração pelas demonstrações.',
    ],
    correta: 1,
    comentario: 'A auditoria visa aumentar o grau de confiança dos usuários, opinando se as DC estão adequadas em todos os aspectos RELEVANTES à estrutura de relatório financeiro aplicável. A opinião NÃO assegura a viabilidade futura da entidade nem a eficiência/eficácia da gestão (esses seriam objetos de auditoria operacional, não da auditoria das DC).',
    fonte: 'NBC TA 200',
  },
  {
    id: 'audn-02', disciplina: 'auditoria', assunto: 'Asseguração razoável x limitada',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre os níveis de asseguração, assinale a alternativa correta.',
    alternativas: [
      'A asseguração razoável oferece segurança absoluta (100%).',
      'Na asseguração RAZOÁVEL (ex.: auditoria das DC), o nível é alto, mas não absoluto, e a conclusão é expressa de forma POSITIVA; na asseguração LIMITADA (ex.: revisão), o nível é menor e a conclusão é expressa de forma NEGATIVA.',
      'Na asseguração limitada a conclusão é positiva, e na razoável, negativa.',
      'Ambas oferecem o mesmo nível de segurança.',
      'A impossibilidade de obter evidência suficiente justifica converter a asseguração razoável em limitada.',
    ],
    correta: 1,
    comentario: 'Asseguração RAZOÁVEL: nível alto (não absoluto), risco reduzido a nível aceitavelmente baixo, conclusão POSITIVA — é o caso da auditoria das DC. Asseguração LIMITADA: nível menor, mas significativo, conclusão NEGATIVA — ex.: revisão de informações trimestrais. A impossibilidade de obter evidência apropriada e suficiente NÃO é razão para rebaixar razoável → limitada.',
    fonte: 'Estrutura Conceitual para Trabalhos de Asseguração (NBC TA 200)',
  },
  {
    id: 'audn-03', disciplina: 'auditoria', assunto: 'Responsabilidades (administração x auditor)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'A respeito das responsabilidades na auditoria das demonstrações contábeis, assinale a alternativa correta.',
    alternativas: [
      'A elaboração das demonstrações e a manutenção do controle interno são de responsabilidade do auditor.',
      'A elaboração das demonstrações contábeis e o controle interno necessário para que estejam livres de distorção relevante são responsabilidade da administração (com supervisão da governança); ao auditor cabe opinar sobre elas.',
      'O auditor elabora e audita as próprias demonstrações.',
      'A administração é responsável por emitir a opinião de auditoria.',
      'A governança responde pela opinião contida no relatório.',
    ],
    correta: 1,
    comentario: 'A auditoria parte da premissa de que a administração (com supervisão da governança) é responsável por (1) elaborar as DC conforme a estrutura aplicável, (2) manter o controle interno que permita DC livres de distorção relevante e (3) dar ao auditor acesso a informações e pessoas. Ao auditor cabe opinar — não elaborar as DC. A auditoria não exime a administração dessas responsabilidades.',
    fonte: 'NBC TA 200 / 210',
  },
  {
    id: 'audn-04', disciplina: 'auditoria', assunto: 'Elementos do trabalho de asseguração',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'São elementos de todo trabalho de asseguração, EXCETO:',
    alternativas: [
      'relacionamento entre três partes (auditor, parte responsável e usuários previstos).',
      'objeto apropriado.',
      'critérios adequados.',
      'a garantia de ausência absoluta de distorções.',
      'evidências apropriadas e suficientes e relatório de asseguração escrito.',
    ],
    correta: 3,
    comentario: 'Os cinco elementos são: (1) relacionamento entre TRÊS PARTES — auditor independente, parte responsável e usuários previstos; (2) objeto apropriado; (3) critérios adequados; (4) evidências apropriadas e suficientes; (5) relatório de asseguração escrito. Nenhuma auditoria garante ausência ABSOLUTA de distorções (segurança é razoável, não absoluta).',
    fonte: 'Estrutura Conceitual para Trabalhos de Asseguração',
  },
  {
    id: 'audn-05', disciplina: 'auditoria', assunto: 'Modelo de risco de auditoria',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre os componentes do risco de auditoria, assinale a alternativa correta.',
    alternativas: [
      'O risco de auditoria é composto apenas pelo risco de detecção.',
      'Risco de auditoria = Risco de Distorção Relevante (risco inerente × risco de controle) × risco de detecção; o risco inerente independe dos controles internos e o de controle mede a chance de os controles não preverem/detectarem a distorção.',
      'O risco inerente é medido considerando-se a eficácia dos controles internos.',
      'O risco de detecção é próprio da entidade e não pode ser gerido pelo auditor.',
      'O risco de controle é o risco de os procedimentos do auditor não detectarem uma distorção.',
    ],
    correta: 1,
    comentario: 'RA = RDR × RD, sendo RDR = Risco Inerente × Risco de Controle. INERENTE: probabilidade de distorção SEM considerar controles (natureza da conta/entidade). CONTROLE: probabilidade de os controles internos não prevenirem/detectarem distorção. DETECÇÃO: probabilidade de os procedimentos do auditor não detectarem a distorção — é o único que o auditor controla (ajustando natureza, época e extensão dos testes).',
    fonte: 'NBC TA 200 / 315',
  },
  {
    id: 'audn-06', disciplina: 'auditoria', assunto: 'Limitações inerentes da auditoria',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'A respeito das limitações inerentes de uma auditoria, assinale a alternativa correta.',
    alternativas: [
      'Uma auditoria bem conduzida elimina qualquer risco de distorção não detectada.',
      'Decorrem da natureza das informações contábeis, da natureza dos procedimentos e da necessidade de tempo/custo razoáveis; por isso, a descoberta posterior de distorção relevante não indica, por si só, falha na condução da auditoria.',
      'A auditoria é uma investigação oficial com poderes de busca e apreensão.',
      'O auditor é obrigado a ser especialista na verificação de autenticidade de documentos.',
      'A evidência de auditoria é sempre conclusiva, e não persuasiva.',
    ],
    correta: 1,
    comentario: 'As limitações inerentes decorrem: (1) da natureza das informações contábeis (estimativas, julgamentos); (2) da natureza dos procedimentos (limites práticos/legais); (3) da necessidade de tempo e custo razoáveis. A evidência é, em regra, PERSUASIVA (não conclusiva). Por isso há risco inevitável de distorções não detectadas — e a descoberta posterior não significa, por si só, falha do auditor.',
    fonte: 'NBC TA 200',
  },
  {
    id: 'audn-07', disciplina: 'auditoria', assunto: 'Ceticismo profissional',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'O ceticismo profissional, exigido do auditor, consiste em:',
    alternativas: [
      'aceitar as informações da administração como necessariamente verdadeiras.',
      'manter uma mente questionadora e alerta, atento a evidências que se contradigam, a informações que ponham em dúvida a confiabilidade de documentos e a condições que indiquem possível fraude.',
      'presumir a desonestidade da administração em qualquer circunstância.',
      'confiar exclusivamente na experiência pessoal, dispensando evidências.',
      'restringir-se a conferir a soma aritmética das demonstrações.',
    ],
    correta: 1,
    comentario: 'Ceticismo profissional é a postura de mente questionadora e alerta ao avaliar a suficiência e adequação das evidências, atento a: evidências contraditórias, informações que ponham em dúvida documentos/respostas, condições que indiquem fraude e circunstâncias que exijam procedimentos adicionais. Não é presunção de desonestidade, mas também não é confiança cega.',
    fonte: 'NBC TA 200',
  },
  {
    id: 'audn-08', disciplina: 'auditoria', assunto: 'Auditoria interna x externa',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre a distinção entre auditoria interna e auditoria externa (independente), assinale a alternativa correta.',
    alternativas: [
      'A auditoria externa é executada por funcionário da entidade e foca os controles internos.',
      'A interna é feita por empregado da entidade, é permanente e foca controles internos/gestão de riscos (interesse da administração); a externa é feita por profissional independente, é periódica e foca as demonstrações contábeis (interesse de terceiros).',
      'Ambas têm o mesmo grau de independência e a mesma finalidade.',
      'A auditoria interna emite parecer sobre as demonstrações contábeis para terceiros.',
      'A auditoria externa tem por objeto exclusivamente a melhoria da gestão.',
    ],
    correta: 1,
    comentario: 'INTERNA: sujeito é empregado da entidade, extensão maior/permanente, objeto = controles internos/gestão/riscos, interessado = administração (finalidade: agregar valor/melhorar a gestão). EXTERNA/independente: profissional independente, trabalho periódico, objeto = demonstrações contábeis, interessados = terceiros (acionistas, credores, fisco). O grau de independência da externa é maior.',
    fonte: 'NBC TI 01 / NBC TA',
  },
  {
    id: 'audn-09', disciplina: 'auditoria', assunto: 'Perícia contábil x auditoria',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'A respeito da distinção entre perícia contábil e auditoria contábil, assinale a alternativa correta.',
    alternativas: [
      'A perícia examina toda a escrituração do período; a auditoria, apenas um fato.',
      'A perícia examina um fato específico (da lide ou do contrato), resultando em laudo/parecer pericial; a auditoria externa tem por objeto a escrituração de um período (geralmente um ano) e pode valer-se de amostragem, resultando em parecer.',
      'A perícia contábil pode ser realizada por qualquer pessoa, sem registro no CRC.',
      'A auditoria examina a fundo apenas o fato controvertido nos autos.',
      'Ambas produzem sempre o mesmo documento: o laudo pericial.',
    ],
    correta: 1,
    comentario: 'PERÍCIA: examina um fato/conjunto de fatos específicos (da lide, no caso judicial), com exame completo, resultando em LAUDO pericial (ou parecer pericial); é de competência exclusiva de contador registrado no CRC. AUDITORIA externa: objeto é a escrituração de um período (em regra um ano), pode usar amostragem/estatística, e resulta em PARECER/relatório sobre as demonstrações.',
    fonte: 'NBC (perícia x auditoria)',
  },
  {
    id: 'audn-10', disciplina: 'auditoria', assunto: 'Rodízio e independência',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Para preservar a objetividade e o ceticismo, as normas exigem o rodízio na equipe de auditoria. Assinale a alternativa correta.',
    alternativas: [
      'Não há qualquer exigência de rotação das lideranças.',
      'Recomenda-se a rotação das lideranças (sócio, diretor e gerente) a cada intervalo ≤ 5 anos consecutivos; em entidade de interesse público, o sócio-chave não deve atuar por mais de 7 anos, com carência de 5 anos após esse período.',
      'A rotação das lideranças deve ocorrer a cada 10 anos, sem carência.',
      'O sócio-chave de entidade de interesse público pode atuar indefinidamente.',
      'A carência após o período máximo é de apenas 1 ano.',
    ],
    correta: 1,
    comentario: 'O risco de perda de objetividade/ceticismo por familiaridade é mitigado pela rotação das lideranças (sócio, diretor e gerente) em intervalo ≤ 5 anos consecutivos. Pela NBC PA 400, em entidade de interesse público o profissional não deve atuar como sócio-chave por mais de 7 anos, seguindo-se carência (cooling-off) de 5 anos.',
    fonte: 'NBC PA 400',
  },
  {
    id: 'audn-11', disciplina: 'auditoria', assunto: 'Tipos de opinião (NBC TA 700/705)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Conforme a NBC TA 705, quando as demonstrações contábeis apresentam distorções RELEVANTES, mas NÃO generalizadas (não disseminadas), a opinião do auditor deve ser:',
    alternativas: [
      'não modificada (sem ressalva).',
      'com ressalva.',
      'adversa.',
      'abstenção de opinião.',
      'de asseguração limitada.',
    ],
    correta: 1,
    comentario: 'Matriz da NBC TA 705: DISTORÇÃO relevante mas NÃO generalizada → COM RESSALVA; relevante E generalizada → ADVERSA. IMPOSSIBILIDADE de obter evidência (limitação de escopo): não generalizada → COM RESSALVA; generalizada → ABSTENÇÃO. Sem distorções relevantes → opinião não modificada (sem ressalva).',
    fonte: 'NBC TA 705',
  },
  {
    id: 'audn-12', disciplina: 'auditoria', assunto: 'Limitação de escopo (NBC TA 705)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Quando o auditor NÃO consegue obter evidência apropriada e suficiente (limitação no escopo dos trabalhos) e os possíveis efeitos são RELEVANTES e GENERALIZADOS, ele deve emitir:',
    alternativas: [
      'opinião sem ressalva.',
      'opinião com ressalva.',
      'opinião adversa.',
      'abstenção de opinião.',
      'parágrafo de ênfase.',
    ],
    correta: 3,
    comentario: 'Impossibilidade de obter evidência (limitação de escopo) com efeitos relevantes e GENERALIZADOS → ABSTENÇÃO de opinião. Se os efeitos fossem relevantes mas não generalizados → opinião COM RESSALVA. Não confunda: a ADVERSA decorre de DISTORÇÃO relevante e generalizada (não de falta de evidência).',
    fonte: 'NBC TA 705',
  },
  {
    id: 'audn-13', disciplina: 'auditoria', assunto: 'Ênfase x Outros assuntos (NBC TA 706)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre os parágrafos de ênfase e de outros assuntos (NBC TA 706), assinale a alternativa correta.',
    alternativas: [
      'O parágrafo de ênfase modifica a opinião do auditor.',
      'O parágrafo de ÊNFASE chama atenção para assunto APROPRIADAMENTE apresentado/divulgado NAS demonstrações, vital ao entendimento; o de OUTROS ASSUNTOS trata de aspecto NÃO divulgado nas DC, relacionado ao trabalho/relatório do auditor.',
      'O parágrafo de outros assuntos refere-se a assunto divulgado nas notas explicativas.',
      'Ambos os parágrafos substituem a opinião modificada.',
      'O parágrafo de ênfase é usado quando há distorção relevante e generalizada.',
    ],
    correta: 1,
    comentario: 'Parágrafo de ÊNFASE: assunto já apresentado nas DC (ou notas), que o auditor considera vital ao entendimento — chama a atenção sem modificar a opinião. Parágrafo de OUTROS ASSUNTOS: aspecto NÃO divulgado nas DC, ligado ao trabalho do auditor/relatório. Nenhum dos dois modifica a opinião.',
    fonte: 'NBC TA 706',
  },
  {
    id: 'audn-14', disciplina: 'auditoria', assunto: 'Principais Assuntos de Auditoria (NBC TA 701)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre os Principais Assuntos de Auditoria (PAA/KAM), regidos pela NBC TA 701, assinale a alternativa correta.',
    alternativas: [
      'São uma opinião separada sobre cada assunto individualmente.',
      'São os assuntos que, pelo julgamento profissional, foram os mais significativos na auditoria do período; sua comunicação é exigida para entidades listadas (ou por lei/regulamento) e NÃO substitui a emissão de opinião modificada.',
      'Substituem a opinião modificada quando há distorção relevante.',
      'São obrigatórios para todas as entidades, listadas ou não.',
      'Dispensam o auditor de expressar opinião sobre as demonstrações.',
    ],
    correta: 1,
    comentario: 'Os Principais Assuntos de Auditoria (KAM) são os mais significativos na auditoria do período, selecionados entre os comunicados aos responsáveis pela governança. A comunicação é exigida para auditorias de entidades LISTADAS (ou por força de lei/regulamento). NÃO são opinião separada nem substituem a opinião modificada.',
    fonte: 'NBC TA 701',
  },
  {
    id: 'audn-15', disciplina: 'auditoria', assunto: 'Data do relatório (NBC TA 700)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Quanto à data do relatório do auditor independente, assinale a alternativa correta.',
    alternativas: [
      'Pode ser anterior à obtenção de evidência suficiente, para agilizar a entrega.',
      'Não pode ser anterior à data em que o auditor obteve evidência de auditoria apropriada e suficiente para fundamentar sua opinião.',
      'Deve coincidir sempre com a data de encerramento do exercício.',
      'É definida livremente pela administração da entidade.',
      'É irrelevante para a validade do relatório.',
    ],
    correta: 1,
    comentario: 'NBC TA 700: a data do relatório não pode ser ANTERIOR à data em que o auditor obteve evidência apropriada e suficiente para fundamentar a opinião (inclusive quanto a eventos subsequentes). O relatório é assinado por contador registrado no CRC; a equipe de assistentes não assina nem compartilha a responsabilidade pela opinião.',
    fonte: 'NBC TA 700',
  },
  {
    id: 'audn-16', disciplina: 'auditoria', assunto: 'Fraude — responsabilidade e tipos (NBC TA 240)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'De acordo com a NBC TA 240, sobre fraude na auditoria, assinale a alternativa correta.',
    alternativas: [
      'A responsabilidade primária pela prevenção e detecção da fraude é do auditor.',
      'A responsabilidade primária pela prevenção e detecção da fraude é da administração e dos responsáveis pela governança; e há dois tipos de distorção intencional: a decorrente de fraude nas demonstrações contábeis e a decorrente de apropriação indébita de ativos.',
      'O objetivo precípuo da auditoria das DC é a descoberta de fraudes.',
      'Existe um único tipo de fraude relevante para a auditoria.',
      'O auditor garante a detecção de todas as fraudes existentes.',
    ],
    correta: 1,
    comentario: 'NBC TA 240: a responsabilidade PRIMÁRIA pela prevenção e detecção da fraude é da ADMINISTRAÇÃO e dos responsáveis pela GOVERNANÇA — não do auditor. Dois tipos de distorção intencional interessam à auditoria: (1) fraude nas demonstrações contábeis (informações fraudulentas) e (2) apropriação indébita de ativos. O exame das DC não tem por objetivo precípuo descobrir fraudes, embora o auditor deva considerar sua possibilidade.',
    fonte: 'NBC TA 240',
  },
  {
    id: 'audn-17', disciplina: 'auditoria', assunto: 'Documentação de auditoria (NBC TA 230)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre a documentação (papéis de trabalho) e o arquivo final de auditoria, conforme a NBC TA 230, assinale a alternativa correta.',
    alternativas: [
      'A montagem do arquivo final deve ocorrer em até 5 anos, e a guarda por 60 dias.',
      'A montagem do arquivo final deve ser concluída tempestivamente, em prazo que geralmente não ultrapassa 60 dias após a data do relatório; a guarda (retenção) da documentação é de, no mínimo, 5 anos contados da data do relatório do auditor.',
      'Os papéis de trabalho pertencem à entidade auditada.',
      'Não há prazo para guarda da documentação.',
      'A montagem do arquivo final pode ocorrer a qualquer tempo, sem limite.',
    ],
    correta: 1,
    comentario: 'NBC TA 230: a montagem do arquivo final conclui-se tempestivamente, em prazo que geralmente NÃO ultrapassa 60 DIAS após a data do relatório. A guarda/retenção da documentação é de, no mínimo, 5 ANOS contados da data do relatório do auditor. Os papéis de trabalho pertencem ao AUDITOR, que é responsável por sua custódia. (Não confunda os dois prazos.)',
    fonte: 'NBC TA 230',
  },
  {
    id: 'audn-18', disciplina: 'auditoria', assunto: 'Procedimentos de evidência (NBC TA 500)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Assinale a alternativa que reúne procedimentos de obtenção de evidência de auditoria previstos na NBC TA 500.',
    alternativas: [
      'Inspeção, observação, confirmação externa, recálculo, reexecução, indagação e procedimentos analíticos.',
      'Apenas a indagação e a observação.',
      'Somente a conferência aritmética das demonstrações.',
      'Exclusivamente a confirmação externa.',
      'Apenas a leitura das notas explicativas.',
    ],
    correta: 0,
    comentario: 'A NBC TA 500 lista os procedimentos para obter evidência: INSPEÇÃO (de registros/documentos ou de ativos), OBSERVAÇÃO, CONFIRMAÇÃO EXTERNA, CÁLCULO/RECÁLCULO, REEXECUÇÃO, INDAGAÇÃO e PROCEDIMENTOS ANALÍTICOS. A evidência deve ser apropriada (relevante e confiável) e suficiente (quantidade).',
    fonte: 'NBC TA 500',
  },
  {
    id: 'audn-19', disciplina: 'auditoria', assunto: 'Confirmação externa (NBC TA 505)',
    banca: 'Autoral', ano: 2026, cargo: 'AFRM',
    enunciado: 'Sobre a confirmação externa (circularização), conforme a NBC TA 505, assinale a alternativa correta.',
    alternativas: [
      'Na confirmação positiva, a parte só responde se discordar da informação.',
      'Na confirmação POSITIVA, a parte deve responder concordando/discordando ou fornecendo a informação (sempre responde); na NEGATIVA, a parte responde SOMENTE se discordar da informação apresentada.',
      'A confirmação negativa exige resposta em qualquer caso.',
      'A confirmação externa é obtida junto à própria administração da entidade auditada.',
      'A confirmação positiva e a negativa são idênticas quanto à forma de resposta.',
    ],
    correta: 1,
    comentario: 'NBC TA 505: confirmação POSITIVA — a parte que confirma deve responder ao auditor indicando concordância/discordância ou fornecendo a informação (resposta sempre esperada, mais confiável). Confirmação NEGATIVA — a parte responde SOMENTE em caso de discordância (menos confiável). A confirmação é obtida de TERCEIROS (fonte externa), não da administração.',
    fonte: 'NBC TA 505',
  },
  {
    id: 'audn-20', disciplina: 'auditoria', assunto: 'Amostragem em auditoria (NBC TA 530)',
    banca: 'CESPE', ano: 2020, cargo: 'SEFAZ-DF',
    enunciado: 'Sobre amostragem em auditoria (NBC TA 530), assinale a alternativa correta.',
    alternativas: [
      'A amostragem estatística dispensa a seleção aleatória dos itens.',
      'A amostragem estatística caracteriza-se pela seleção aleatória dos itens e pelo uso da teoria das probabilidades para avaliar os resultados, incluindo a mensuração do risco de amostragem; o risco de amostragem é o de que a conclusão com base na amostra difira da que se obteria examinando toda a população.',
      'O risco de amostragem só existe na amostragem não estatística.',
      'Quanto maior o tamanho da amostra, maior o risco de amostragem.',
      'A amostragem não estatística é sempre proibida em auditoria.',
    ],
    correta: 1,
    comentario: 'NBC TA 530: a amostragem ESTATÍSTICA tem (a) seleção aleatória e (b) uso da teoria das probabilidades para avaliar resultados e mensurar o risco de amostragem. RISCO DE AMOSTRAGEM: a conclusão baseada na amostra pode diferir da que se obteria examinando toda a população — quanto MAIOR a amostra, MENOR esse risco (relação inversa). Há ainda o risco NÃO decorrente da amostragem (erro do auditor). (Base: CESPE/SEFAZ-DF 2020.)',
    fonte: 'NBC TA 530; CESPE/SEFAZ-DF 2020',
  },
);

RESUMOS.push({
  id: 'r-audn', disciplina: 'auditoria', titulo: 'Auditoria (NBC TA) — mapa das normas',
  conteudo: `
    <h4>Fundamentos (NBC TA 200)</h4>
    <ul>
      <li><strong>Objetivo:</strong> aumentar a confiança dos usuários; opinar se as DC estão adequadas em aspectos RELEVANTES. Não assegura viabilidade futura nem eficiência da gestão.</li>
      <li><strong>Asseguração:</strong> razoável (alta, não absoluta, conclusão POSITIVA — auditoria das DC) x limitada (menor, conclusão NEGATIVA — revisão).</li>
      <li><strong>Responsabilidade das DC e do controle interno:</strong> administração + governança (o auditor OPINA).</li>
      <li><strong>Risco:</strong> RA = (Inerente × Controle) × Detecção. Só o de <strong>detecção</strong> o auditor controla.</li>
      <li><strong>Evidência:</strong> persuasiva (não conclusiva); apropriada + suficiente.</li>
    </ul>
    <h4>Opinião e relatório (700/701/705/706)</h4>
    <ul>
      <li><strong>705 — matriz:</strong> distorção relevante não generalizada → <strong>ressalva</strong>; relevante e generalizada → <strong>adversa</strong>. Falta de evidência não generalizada → <strong>ressalva</strong>; generalizada → <strong>abstenção</strong>.</li>
      <li><strong>706:</strong> ênfase = assunto DIVULGADO nas DC; outros assuntos = trabalho do auditor (não divulgado). Nenhum modifica a opinião.</li>
      <li><strong>701 (KAM):</strong> principais assuntos; entidades listadas; não é opinião separada nem substitui opinião modificada.</li>
      <li><strong>700:</strong> data do relatório não anterior à obtenção de evidência suficiente.</li>
    </ul>
    <h4>Execução</h4>
    <ul>
      <li><strong>240 (fraude):</strong> responsabilidade primária = administração/governança. Dois tipos: fraude nas DC e apropriação indébita de ativos.</li>
      <li><strong>230 (documentação):</strong> arquivo final ≤ <strong>60 dias</strong>; guarda ≥ <strong>5 anos</strong> da data do relatório; papéis são do auditor.</li>
      <li><strong>500:</strong> inspeção, observação, confirmação externa, recálculo, reexecução, indagação, analíticos.</li>
      <li><strong>505:</strong> confirmação positiva (sempre responde) x negativa (só se discordar).</li>
      <li><strong>530:</strong> amostragem estatística (aleatória + probabilidades). Amostra maior → risco de amostragem menor.</li>
    </ul>
    <p class="dica">💡 Pegadinhas: responsabilidade pela fraude é da administração; adversa (distorção) ≠ abstenção (falta de evidência); ênfase (nas DC) ≠ outros assuntos (do auditor); 60 dias ≠ 5 anos.</p>
  `,
});

FLASHCARDS.push(
  { id: 'faudn-1', disciplina: 'auditoria', frente: 'Asseguração razoável x limitada — conclusão?', verso: 'Razoável (auditoria DC): nível alto, não absoluto, conclusão POSITIVA. Limitada (revisão): nível menor, conclusão NEGATIVA.' },
  { id: 'faudn-2', disciplina: 'auditoria', frente: 'De quem é a responsabilidade pelas DC e pelo controle interno?', verso: 'Da administração (com supervisão da governança). O auditor apenas OPINA — não elabora as DC.' },
  { id: 'faudn-3', disciplina: 'auditoria', frente: 'Matriz NBC TA 705 — distorção relevante?', verso: 'Não generalizada → RESSALVA. Generalizada → ADVERSA. (Falta de evidência: não generalizada → ressalva; generalizada → abstenção.)' },
  { id: 'faudn-4', disciplina: 'auditoria', frente: 'Parágrafo de ênfase x outros assuntos (706)?', verso: 'Ênfase: assunto DIVULGADO nas DC, vital ao entendimento. Outros assuntos: aspecto do trabalho do auditor, NÃO divulgado nas DC. Nenhum modifica a opinião.' },
  { id: 'faudn-5', disciplina: 'auditoria', frente: 'KAM / Principais Assuntos de Auditoria (701)?', verso: 'Assuntos mais significativos do período; exigidos p/ entidades listadas. Não é opinião separada e não substitui opinião modificada.' },
  { id: 'faudn-6', disciplina: 'auditoria', frente: 'Fraude (240): de quem é a responsabilidade primária?', verso: 'Da administração e da governança (não do auditor). Dois tipos: fraude nas DC e apropriação indébita de ativos.' },
  { id: 'faudn-7', disciplina: 'auditoria', frente: 'Documentação (230): prazos de arquivo e guarda?', verso: 'Montagem do arquivo final: ≤ 60 dias da data do relatório. Guarda/retenção: ≥ 5 anos da data do relatório. Papéis são do auditor.' },
  { id: 'faudn-8', disciplina: 'auditoria', frente: 'Procedimentos de evidência (NBC TA 500)?', verso: 'Inspeção, observação, confirmação externa, recálculo, reexecução, indagação e procedimentos analíticos.' },
  { id: 'faudn-9', disciplina: 'auditoria', frente: 'Confirmação positiva x negativa (505)?', verso: 'Positiva: a parte sempre responde (concorda/discorda ou informa). Negativa: responde SÓ se discordar (menos confiável).' },
  { id: 'faudn-10', disciplina: 'auditoria', frente: 'Risco de auditoria — componentes?', verso: 'RA = (Inerente × Controle) × Detecção. Inerente: sem contar controles. Controle: falha dos CI. Detecção: único que o auditor controla.' },
);
