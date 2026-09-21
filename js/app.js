// ============================================================
//  Estudos AFRFB — lógica da aplicação
// ============================================================

const nomeDisc = (id) => (DISCIPLINAS.find(d => d.id === id) || {}).nome || id;
const iconeDisc = (id) => (DISCIPLINAS.find(d => d.id === id) || {}).icone || '📘';
const letra = (i) => String.fromCharCode(65 + i);
const hoje = () => Math.floor(Date.now() / 86400000); // dias desde a época

function lsGet(key, fb) { try { return JSON.parse(localStorage.getItem(key)) || fb; } catch { return fb; } }
function lsSet(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }

// ============================================================
//  Progresso e agendamento de revisão (localStorage)
// ============================================================
const PROGRESSO_KEY = 'afrmcg_progresso_v1';
const REVISAO_KEY = 'afrmcg_revisao_q_v1';   // { qId: { stage, due } }
const FC_SRS_KEY = 'afrmcg_fc_srs_v1';       // { cardId: { ease, interval, reps, due } }
const PLANO_KEY = 'afrmcg_plano_v1';         // ciclo de estudos

let PROGRESSO = lsGet(PROGRESSO_KEY, {});
let REVISAO = lsGet(REVISAO_KEY, {});
let FC_SRS = lsGet(FC_SRS_KEY, {});
let PLANO = lsGet(PLANO_KEY, {
  horasSemana: 21,        // seg-sex ~2,5h + sáb/dom ~4,5h
  semanasCiclo: 2,
  dataProva: '',          // aaaa-mm-dd (estimativa editável)
  ciclo: 1,
  progresso: {},          // { discId: horas já estudadas no ciclo atual }
  totalHoras: 0,          // horas acumuladas em todos os ciclos
});

const ESCADA_REVISAO = [1, 7, 30]; // dias (revisão 1-7-30)

function registrarResposta(qId, disciplina, acertou) {
  PROGRESSO[qId] = { disciplina, acertou, ts: Date.now() };
  lsSet(PROGRESSO_KEY, PROGRESSO);

  // Agendamento de revisão espaçada baseado no acerto/erro
  if (!acertou) {
    REVISAO[qId] = { stage: 0, due: hoje() + ESCADA_REVISAO[0] };
  } else if (REVISAO[qId]) {
    const prox = REVISAO[qId].stage + 1;
    if (prox >= ESCADA_REVISAO.length) {
      delete REVISAO[qId]; // dominada, sai do ciclo de revisão
    } else {
      REVISAO[qId] = { stage: prox, due: hoje() + ESCADA_REVISAO[prox] };
    }
  }
  lsSet(REVISAO_KEY, REVISAO);
}

function statsGerais() {
  const ids = Object.keys(PROGRESSO);
  const acertos = ids.filter(id => PROGRESSO[id].acertou).length;
  return { respondidas: ids.length, acertos, pct: ids.length ? Math.round(100 * acertos / ids.length) : 0 };
}
function revisoesPendentes() {
  return Object.keys(REVISAO).filter(id => REVISAO[id].due <= hoje() && QUESTOES.some(q => q.id === id)).length;
}
function flashcardsPendentes(pool) {
  const lista = pool || FLASHCARDS;
  return lista.filter(f => !FC_SRS[f.id] || FC_SRS[f.id].due <= hoje()).length;
}

// ---------- Navegação ----------
function irPara(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('view-' + view).classList.add('active');
  const btn = document.querySelector(`.nav-btn[data-view="${view}"]`);
  if (btn) btn.classList.add('active');
  if (view === 'desempenho') renderDesempenho();
  if (view === 'dashboard') renderDashboard();
  if (view === 'revisao') renderRevisao();
  if (view === 'plano') renderPlano();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => irPara(btn.dataset.view));
});

// ---------- Painel ----------
function contar(lista, discId) { return lista.filter(x => x.disciplina === discId).length; }

function renderDashboard() {
  const stats = [
    { num: QUESTOES.length, lbl: 'Questões' },
    { num: RESUMOS.length, lbl: 'Resumos' },
    { num: FLASHCARDS.length, lbl: 'Flashcards' },
    { num: DISCIPLINAS.length, lbl: 'Disciplinas' },
  ];
  document.getElementById('hero-stats').innerHTML = stats.map(s =>
    `<div class="stat"><div class="num">${s.num}</div><div class="lbl">${s.lbl}</div></div>`
  ).join('');

  const cardHTML = (d) => {
    const feitas = QUESTOES.filter(q => q.disciplina === d.id && PROGRESSO[q.id]).length;
    const total = contar(QUESTOES, d.id);
    const badge = feitas ? `<span class="disc-feitas">${feitas}/${total} feitas</span>` : '';
    return `
    <div class="disc-card" data-disc="${d.id}">
      <div class="icone">${d.icone}</div>
      <div class="nome">${d.nome}</div>
      <div class="meta">
        <span>📝 ${total}</span><span>📄 ${contar(RESUMOS, d.id)}</span><span>🎴 ${contar(FLASHCARDS, d.id)}</span>
      </div>
      ${badge}
    </div>`;
  };
  document.getElementById('grid-basicas').innerHTML =
    DISCIPLINAS.filter(d => d.modulo === 'basicas').map(cardHTML).join('');
  document.getElementById('grid-especificas').innerHTML =
    DISCIPLINAS.filter(d => d.modulo === 'especificas').map(cardHTML).join('');
  document.querySelectorAll('.disc-card').forEach(card => {
    card.addEventListener('click', () => {
      document.getElementById('filtro-questoes').value = card.dataset.disc;
      document.getElementById('filtro-banca').value = 'todas';
      renderQuestoes();
      irPara('questoes');
    });
  });
  renderProgressoDashboard();
}

function renderProgressoDashboard() {
  const el = document.getElementById('dash-progresso');
  if (!el) return;
  const s = statsGerais();
  const rev = revisoesPendentes();
  const fc = flashcardsPendentes();
  const tarefas = [];
  if (rev) tarefas.push(`<button class="pill-tarefa" onclick="irPara('revisao')">⚡ ${rev} questões p/ revisar</button>`);
  if (fc) tarefas.push(`<button class="pill-tarefa" onclick="irPara('flashcards')">🎴 ${fc} flashcards p/ hoje</button>`);
  const tarefasHTML = tarefas.length ? `<div class="tarefas-hoje">${tarefas.join('')}</div>` : '';

  if (!s.respondidas) {
    el.innerHTML = `<div class="progresso-banner vazio">Você ainda não respondeu questões. Comece por <strong>Questões</strong> ou faça um <strong>Simulado</strong> — seu progresso e revisões ficam salvos neste dispositivo.</div>${tarefasHTML}`;
    return;
  }
  el.innerHTML = `
    <div class="progresso-banner">
      <div><span class="pb-num">${s.respondidas}</span><span class="pb-lbl">respondidas</span></div>
      <div><span class="pb-num">${s.acertos}</span><span class="pb-lbl">acertos</span></div>
      <div><span class="pb-num">${s.pct}%</span><span class="pb-lbl">aproveitamento</span></div>
      <button class="btn-secundario" onclick="irPara('desempenho')">Ver detalhes →</button>
    </div>${tarefasHTML}`;
}

// ---------- Filtros ----------
function preencherFiltro(selectId, contador) {
  const sel = document.getElementById(selectId);
  const opts = ['<option value="todas">Todas as disciplinas</option>'];
  DISCIPLINAS.forEach(d => { const n = contador(d.id); if (n > 0) opts.push(`<option value="${d.id}">${d.icone} ${d.nome} (${n})</option>`); });
  sel.innerHTML = opts.join('');
}

// ---------- Banco de Questões ----------
function bancaLabel(q) {
  if (!q.banca || q.banca === 'Autoral') return 'Questão autoral';
  return `${q.banca}${q.ano ? ' · ' + q.ano : ''}${q.cargo ? ' · ' + q.cargo : ''}`;
}
function filtrarQuestoes() {
  const disc = document.getElementById('filtro-questoes').value;
  const banca = document.getElementById('filtro-banca').value;
  return QUESTOES.filter(q => (disc === 'todas' || q.disciplina === disc) && (banca === 'todas' || q.banca === banca));
}
// Renderiza uma lista de questões (usada no banco e na revisão) com correção
function renderListaQuestoes(cont, lista) {
  cont.innerHTML = lista.map((q, i) => {
    const feito = PROGRESSO[q.id];
    const badge = feito ? `<span class="tag ${feito.acertou ? 'tag-acerto' : 'tag-erro'}">${feito.acertou ? '✓ Acertou' : '✗ Errou'}</span>` : '';
    return `
    <div class="questao" data-qid="${q.id}">
      <div class="q-tags">
        <span class="tag">${nomeDisc(q.disciplina)}</span>
        <span class="tag tag-banca">${bancaLabel(q)}</span>
        ${q.assunto ? `<span class="tag tag-assunto">${q.assunto}</span>` : ''}
        ${badge}
      </div>
      <div class="enunciado">${i + 1}. ${q.enunciado}</div>
      <div class="alternativas">
        ${q.alternativas.map((a, idx) => `<button class="alt" data-idx="${idx}"><span class="letra">${letra(idx)}</span>${a}</button>`).join('')}
      </div>
      <div class="comentario"><strong>Comentário:</strong> ${q.comentario}<span class="fonte">Fonte: ${q.fonte}</span></div>
    </div>`;
  }).join('');

  cont.querySelectorAll('.questao').forEach(qEl => {
    const q = QUESTOES.find(x => x.id === qEl.dataset.qid);
    qEl.querySelectorAll('.alt').forEach(altEl => {
      altEl.addEventListener('click', () => {
        const escolhido = parseInt(altEl.dataset.idx, 10);
        qEl.querySelectorAll('.alt').forEach((el, idx) => {
          el.disabled = true;
          if (idx === q.correta) el.classList.add('correta');
          else if (idx === escolhido) el.classList.add('errada');
        });
        qEl.querySelector('.comentario').classList.add('show');
        registrarResposta(q.id, q.disciplina, escolhido === q.correta);
      });
    });
  });
}

function renderQuestoes() {
  const cont = document.getElementById('questoes-container');
  const lista = filtrarQuestoes();
  document.getElementById('contador-questoes').textContent = `${lista.length} quest${lista.length === 1 ? 'ão' : 'ões'}`;
  if (!lista.length) { cont.innerHTML = `<div class="empty">Nenhuma questão para este filtro ainda.</div>`; return; }
  renderListaQuestoes(cont, lista);
}
document.getElementById('filtro-questoes').addEventListener('change', renderQuestoes);
document.getElementById('filtro-banca').addEventListener('change', renderQuestoes);

// ============================================================
//  Revisão Inteligente (questões erradas — espaçamento 1-7-30)
// ============================================================
function renderRevisao() {
  const cont = document.getElementById('revisao-container');
  const contador = document.getElementById('contador-revisao');
  const agendadasIds = Object.keys(REVISAO).filter(id => QUESTOES.some(q => q.id === id));
  const dueIds = agendadasIds.filter(id => REVISAO[id].due <= hoje());

  if (!agendadasIds.length) {
    contador.textContent = '';
    cont.innerHTML = `<div class="empty">Ainda não há questões agendadas para revisão.<br><br>Sempre que você <strong>errar</strong> uma questão (no banco ou no simulado), ela entra aqui e reaparece nos intervalos <strong>1 → 7 → 30 dias</strong>. Acertando nas revisões, ela avança; errando de novo, ela volta para o começo. É assim que você fixa o que mais erra. 💪</div>`;
    return;
  }
  if (!dueIds.length) {
    const proxima = Math.min(...agendadasIds.map(id => REVISAO[id].due)) - hoje();
    contador.textContent = `${agendadasIds.length} questões no ciclo de revisão`;
    cont.innerHTML = `<div class="empty">🎉 Nenhuma questão para revisar hoje! Você está em dia.<br><br>Próxima revisão em <strong>${proxima} dia${proxima === 1 ? '' : 's'}</strong>. Total no ciclo: ${agendadasIds.length}.</div>`;
    return;
  }
  const lista = dueIds.map(id => QUESTOES.find(q => q.id === id));
  contador.innerHTML = `<strong>${dueIds.length}</strong> quest${dueIds.length === 1 ? 'ão' : 'ões'} para revisar hoje · ${agendadasIds.length} no ciclo`;
  renderListaQuestoes(cont, lista);
}

// ============================================================
//  Desempenho
// ============================================================
function renderDesempenho() {
  const cont = document.getElementById('desempenho-container');
  const s = statsGerais();
  if (!s.respondidas) {
    cont.innerHTML = `<div class="empty">Você ainda não respondeu nenhuma questão. Resolva questões ou faça um simulado — os resultados aparecem aqui e ficam salvos neste dispositivo.</div>`;
    return;
  }
  const resumoHTML = `
    <div class="desemp-resumo">
      <div class="stat"><div class="num">${s.respondidas}</div><div class="lbl">Respondidas</div></div>
      <div class="stat"><div class="num">${s.acertos}</div><div class="lbl">Acertos</div></div>
      <div class="stat"><div class="num">${s.respondidas - s.acertos}</div><div class="lbl">Erros</div></div>
      <div class="stat destaque"><div class="num">${s.pct}%</div><div class="lbl">Aproveitamento</div></div>
    </div>`;
  const linhas = DISCIPLINAS.map(d => {
    const total = contar(QUESTOES, d.id);
    const feitasIds = QUESTOES.filter(q => q.disciplina === d.id && PROGRESSO[q.id]).map(q => q.id);
    const feitas = feitasIds.length;
    if (!total) return '';
    const acertos = feitasIds.filter(id => PROGRESSO[id].acertou).length;
    const pct = feitas ? Math.round(100 * acertos / feitas) : 0;
    const cor = feitas === 0 ? '#cbd5e1' : (pct >= 70 ? 'var(--verde)' : pct >= 50 ? 'var(--amarelo)' : 'var(--vermelho)');
    return `
      <div class="desemp-linha">
        <div class="dl-nome">${d.icone} ${d.nome}</div>
        <div class="dl-barra"><div class="dl-fill" style="width:${feitas ? pct : 0}%;background:${cor}"></div></div>
        <div class="dl-info">${feitas ? pct + '%' : '—'} <span>(${feitas}/${total})</span></div>
      </div>`;
  }).join('');
  cont.innerHTML = resumoHTML + `<h3 class="section-title">Por disciplina</h3><div class="desemp-lista">${linhas}</div>`;
}

document.getElementById('btn-limpar-progresso').addEventListener('click', () => {
  if (confirm('Tem certeza que deseja apagar todo o seu progresso salvo (respostas, revisões e flashcards)? Esta ação não pode ser desfeita.')) {
    PROGRESSO = {}; REVISAO = {}; FC_SRS = {};
    lsSet(PROGRESSO_KEY, PROGRESSO); lsSet(REVISAO_KEY, REVISAO); lsSet(FC_SRS_KEY, FC_SRS);
    renderDesempenho(); renderDashboard();
  }
});

// ============================================================
//  Plano de Estudos (ciclo ponderado pelo peso na prova)
// ============================================================
function salvarPlano() { lsSet(PLANO_KEY, PLANO); }
function fmtH(h) {
  const inteiro = Math.floor(h);
  const meia = Math.round((h - inteiro) * 60);
  if (!inteiro) return `${meia}min`;
  return meia ? `${inteiro}h${String(meia).padStart(2, '0')}` : `${inteiro}h`;
}
// Distribui as horas do ciclo entre as disciplinas, proporcionalmente ao peso
function metasCiclo() {
  const totalHoras = PLANO.horasSemana * PLANO.semanasCiclo;
  const somaPesos = DISCIPLINAS.reduce((s, d) => s + (d.peso || 1), 0);
  const metas = {};
  DISCIPLINAS.forEach(d => {
    const bruto = totalHoras * (d.peso || 1) / somaPesos;
    metas[d.id] = Math.max(0.5, Math.round(bruto * 2) / 2); // arredonda para 0,5h
  });
  return metas;
}
function registrarHoras(discId, delta) {
  const metas = metasCiclo();
  const atual = PLANO.progresso[discId] || 0;
  const novo = Math.max(0, Math.min(metas[discId], atual + delta));
  const diff = novo - atual;
  PLANO.progresso[discId] = novo;
  PLANO.totalHoras = Math.max(0, (PLANO.totalHoras || 0) + diff);
  salvarPlano();
  renderPlano();
}
function proximoCiclo() {
  PLANO.ciclo = (PLANO.ciclo || 1) + 1;
  PLANO.progresso = {};
  salvarPlano();
  renderPlano();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderPlano() {
  const cont = document.getElementById('plano-container');
  const metas = metasCiclo();
  const totalMeta = Object.values(metas).reduce((a, b) => a + b, 0);
  const totalFeito = DISCIPLINAS.reduce((s, d) => s + Math.min(PLANO.progresso[d.id] || 0, metas[d.id]), 0);
  const pctCiclo = totalMeta ? Math.round(100 * totalFeito / totalMeta) : 0;
  const cicloCompleto = DISCIPLINAS.every(d => (PLANO.progresso[d.id] || 0) >= metas[d.id]);

  // Contagem regressiva
  let contagemHTML = '';
  if (PLANO.dataProva) {
    const dias = Math.ceil((new Date(PLANO.dataProva + 'T00:00:00') - new Date()) / 86400000);
    if (dias >= 0) {
      const semanas = Math.floor(dias / 7);
      const horasRestantes = Math.round(semanas * PLANO.horasSemana);
      contagemHTML = `
        <div class="plano-contagem">
          <div><span class="pc-num">${dias}</span><span class="pc-lbl">dias para a prova</span></div>
          <div><span class="pc-num">${semanas}</span><span class="pc-lbl">semanas</span></div>
          <div><span class="pc-num">~${horasRestantes}h</span><span class="pc-lbl">de estudo restantes</span></div>
        </div>`;
    } else {
      contagemHTML = `<div class="plano-contagem"><div><span class="pc-lbl">Data da prova já passou — atualize abaixo.</span></div></div>`;
    }
  }

  // Linhas do ciclo (ordenadas por peso, maiores primeiro)
  const linhas = DISCIPLINAS.slice().sort((a, b) => (b.peso || 0) - (a.peso || 0) || a.nome.localeCompare(b.nome)).map(d => {
    const meta = metas[d.id];
    const feito = Math.min(PLANO.progresso[d.id] || 0, meta);
    const pct = Math.round(100 * feito / meta);
    const ok = feito >= meta;
    return `
      <div class="plano-linha ${ok ? 'concluida' : ''}">
        <div class="pl-nome">
          ${d.icone} ${d.nome}
          <span class="pl-peso">${d.peso} questões</span>
          ${d.modulo === 'especificas' ? '<span class="pl-esp">específica</span>' : ''}
        </div>
        <div class="pl-barra"><div class="pl-fill" style="width:${pct}%"></div></div>
        <div class="pl-horas">${ok ? '✓ ' : ''}${fmtH(feito)} / ${fmtH(meta)}</div>
        <div class="pl-botoes">
          <button class="pl-btn" data-disc="${d.id}" data-delta="-0.5" title="Remover 30 min">−</button>
          <button class="pl-btn" data-disc="${d.id}" data-delta="0.5">+30min</button>
          <button class="pl-btn destaque" data-disc="${d.id}" data-delta="1">+1h</button>
        </div>
      </div>`;
  }).join('');

  cont.innerHTML = `
    <div class="plano-config">
      <h3>Sua configuração</h3>
      <div class="sim-campos">
        <label>Horas por semana
          <input type="number" id="plano-horas" class="select" min="1" max="80" step="1" value="${PLANO.horasSemana}">
        </label>
        <label>Duração do ciclo
          <select id="plano-semanas" class="select">
            <option value="1" ${PLANO.semanasCiclo === 1 ? 'selected' : ''}>1 semana</option>
            <option value="2" ${PLANO.semanasCiclo === 2 ? 'selected' : ''}>2 semanas</option>
            <option value="3" ${PLANO.semanasCiclo === 3 ? 'selected' : ''}>3 semanas</option>
            <option value="4" ${PLANO.semanasCiclo === 4 ? 'selected' : ''}>4 semanas</option>
          </select>
        </label>
        <label>Data prevista da prova
          <input type="date" id="plano-data" class="select" value="${PLANO.dataProva}">
        </label>
      </div>
      <p class="plano-nota">As horas do ciclo são distribuídas automaticamente conforme o <strong>peso de cada disciplina na prova de 2023</strong> (nº de questões). Estude na ordem que quiser — o importante é fechar as metas do ciclo.</p>
    </div>

    ${contagemHTML}

    <div class="plano-ciclo-topo">
      <div>
        <h3>Ciclo ${PLANO.ciclo} <span class="plano-total">· ${fmtH(totalFeito)} de ${fmtH(totalMeta)}</span></h3>
        <div class="plano-barra-geral"><div class="plano-fill-geral" style="width:${pctCiclo}%"></div></div>
      </div>
      <div class="plano-pct">${pctCiclo}%</div>
    </div>

    ${cicloCompleto ? `
      <div class="plano-completo">
        🎉 <strong>Ciclo ${PLANO.ciclo} concluído!</strong> Você cumpriu todas as metas. Hora de girar as disciplinas de novo — na 2ª volta, aprofunde onde seu <a href="#" onclick="irPara('desempenho');return false;">Desempenho</a> estiver mais fraco.
        <button class="fc-btn" id="plano-proximo">Iniciar ciclo ${PLANO.ciclo + 1} →</button>
      </div>` : ''}

    <div class="plano-lista">${linhas}</div>

    <div class="plano-rotina">
      <h3>Rotina sugerida</h3>
      <p><strong>Todo dia (15 min, sagrado):</strong> abra <a href="#" onclick="irPara('revisao');return false;">Revisão ⚡</a> e <a href="#" onclick="irPara('flashcards');return false;">Flashcards 🎴</a> e limpe as pendências do dia. É o que fixa.</p>
      <p><strong>Bloco de estudo:</strong> ~60% teoria enxuta do assunto novo + ~40% <a href="#" onclick="irPara('questoes');return false;">questões</a> do mesmo assunto. Nunca só leitura.</p>
      <p><strong>Fim de semana:</strong> avance 2 assuntos + faça 1 <a href="#" onclick="irPara('simulado');return false;">Simulado</a>. Depois, olhe o Desempenho e priorize a disciplina mais fraca.</p>
      <p class="plano-nota">Registre suas horas nos botões acima conforme estudar — o ciclo acompanha seu ritmo real.</p>
    </div>

    <div class="plano-reset">
      <button class="btn-secundario" id="plano-zerar">Zerar ciclo atual</button>
    </div>`;

  // Eventos
  document.getElementById('plano-horas').addEventListener('change', e => {
    PLANO.horasSemana = Math.max(1, parseInt(e.target.value, 10) || 1); salvarPlano(); renderPlano();
  });
  document.getElementById('plano-semanas').addEventListener('change', e => {
    PLANO.semanasCiclo = parseInt(e.target.value, 10); salvarPlano(); renderPlano();
  });
  document.getElementById('plano-data').addEventListener('change', e => {
    PLANO.dataProva = e.target.value; salvarPlano(); renderPlano();
  });
  cont.querySelectorAll('.pl-btn').forEach(b => {
    b.addEventListener('click', () => registrarHoras(b.dataset.disc, parseFloat(b.dataset.delta)));
  });
  const btnProx = document.getElementById('plano-proximo');
  if (btnProx) btnProx.addEventListener('click', proximoCiclo);
  document.getElementById('plano-zerar').addEventListener('click', () => {
    if (confirm('Zerar as horas registradas no ciclo atual? (o total acumulado é mantido)')) {
      PLANO.progresso = {}; salvarPlano(); renderPlano();
    }
  });
}

// ============================================================
//  Simulado (cronometrado)
// ============================================================
let simulado = null;
function embaralhar(arr) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function renderSimuladoConfig() {
  const cfg = document.getElementById('simulado-config');
  const abrangencias = [
    '<option value="todas">Todas as disciplinas</option>',
    '<option value="mod:basicas">Só Conhecimentos Básicos</option>',
    '<option value="mod:especificas">Só Conhecimentos Específicos</option>',
    ...DISCIPLINAS.filter(d => contar(QUESTOES, d.id) > 0).map(d => `<option value="disc:${d.id}">${d.icone} ${d.nome}</option>`),
  ].join('');
  cfg.innerHTML = `
    <div class="sim-config-card">
      <p class="sim-intro">Monte um simulado cronometrado. Você responde sem ver o gabarito; ao final, recebe a nota, o tempo e o desempenho por disciplina.</p>
      <div class="sim-campos">
        <label>Nº de questões
          <select id="sim-qtd" class="select">
            <option value="10">10 questões</option>
            <option value="20" selected>20 questões</option>
            <option value="40">40 questões</option>
            <option value="0">Máximo disponível</option>
          </select>
        </label>
        <label>Abrangência<select id="sim-abrangencia" class="select">${abrangencias}</select></label>
        <label>Tempo por questão
          <select id="sim-tempo" class="select">
            <option value="180" selected>3 min (padrão da prova)</option>
            <option value="120">2 min</option>
            <option value="90">1min30</option>
            <option value="0">Sem tempo</option>
          </select>
        </label>
      </div>
      <button id="sim-iniciar" class="fc-btn sim-iniciar">▶ Iniciar simulado</button>
    </div>`;
  document.getElementById('sim-iniciar').addEventListener('click', iniciarSimulado);
  document.getElementById('simulado-area').innerHTML = '';
}
function poolSimulado(abrangencia) {
  if (abrangencia === 'todas') return QUESTOES.slice();
  if (abrangencia.startsWith('mod:')) { const mod = abrangencia.slice(4); const ids = DISCIPLINAS.filter(d => d.modulo === mod).map(d => d.id); return QUESTOES.filter(q => ids.includes(q.disciplina)); }
  if (abrangencia.startsWith('disc:')) { const disc = abrangencia.slice(5); return QUESTOES.filter(q => q.disciplina === disc); }
  return QUESTOES.slice();
}
function iniciarSimulado() {
  const qtd = parseInt(document.getElementById('sim-qtd').value, 10);
  const abrangencia = document.getElementById('sim-abrangencia').value;
  const tempoPorQ = parseInt(document.getElementById('sim-tempo').value, 10);
  let pool = embaralhar(poolSimulado(abrangencia));
  const n = qtd === 0 ? pool.length : Math.min(qtd, pool.length);
  const questoes = pool.slice(0, n);
  simulado = { questoes, respostas: {}, inicio: Date.now(), restante: tempoPorQ ? tempoPorQ * n : null, timerId: null };
  document.getElementById('simulado-config').innerHTML = '';
  renderSimuladoProva();
  if (simulado.restante !== null) simulado.timerId = setInterval(tickSimulado, 1000);
}
function fmtTempo(seg) { const m = Math.floor(seg / 60), s = seg % 60; return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`; }
function tickSimulado() {
  if (!simulado) return;
  simulado.restante--;
  const el = document.getElementById('sim-timer');
  if (el) { el.textContent = '⏱️ ' + fmtTempo(Math.max(0, simulado.restante)); if (simulado.restante <= 60) el.classList.add('urgente'); }
  if (simulado.restante <= 0) finalizarSimulado(true);
}
function renderSimuladoProva() {
  const area = document.getElementById('simulado-area');
  const total = simulado.questoes.length;
  const timerHTML = simulado.restante !== null ? `<span id="sim-timer" class="sim-timer">⏱️ ${fmtTempo(simulado.restante)}</span>` : `<span class="sim-timer">Sem tempo</span>`;
  area.innerHTML = `
    <div class="sim-barra-topo">
      <span id="sim-progresso-txt">0 de ${total} respondidas</span>
      ${timerHTML}
      <button id="sim-finalizar" class="fc-btn">Finalizar</button>
    </div>
    <div id="sim-questoes">
      ${simulado.questoes.map((q, i) => `
        <div class="questao sim-q" data-qid="${q.id}">
          <div class="q-tags"><span class="tag">${nomeDisc(q.disciplina)}</span></div>
          <div class="enunciado">${i + 1}. ${q.enunciado}</div>
          <div class="alternativas">
            ${q.alternativas.map((a, idx) => `<button class="alt" data-idx="${idx}"><span class="letra">${letra(idx)}</span>${a}</button>`).join('')}
          </div>
        </div>`).join('')}
    </div>
    <button id="sim-finalizar-2" class="fc-btn sim-finalizar-baixo">Finalizar simulado</button>`;
  area.querySelectorAll('.sim-q').forEach(qEl => {
    const qId = qEl.dataset.qid;
    qEl.querySelectorAll('.alt').forEach(altEl => {
      altEl.addEventListener('click', () => {
        qEl.querySelectorAll('.alt').forEach(el => el.classList.remove('selecionada'));
        altEl.classList.add('selecionada');
        simulado.respostas[qId] = parseInt(altEl.dataset.idx, 10);
        document.getElementById('sim-progresso-txt').textContent = `${Object.keys(simulado.respostas).length} de ${total} respondidas`;
      });
    });
  });
  document.getElementById('sim-finalizar').addEventListener('click', confirmarFinalizar);
  document.getElementById('sim-finalizar-2').addEventListener('click', confirmarFinalizar);
}
function confirmarFinalizar() {
  const total = simulado.questoes.length, resp = Object.keys(simulado.respostas).length, faltam = total - resp;
  const msg = faltam > 0 ? `Você deixou ${faltam} quest${faltam === 1 ? 'ão' : 'ões'} sem responder. Finalizar mesmo assim?` : 'Finalizar o simulado e ver o resultado?';
  if (confirm(msg)) finalizarSimulado(false);
}
function finalizarSimulado(porTempo) {
  if (!simulado) return;
  if (simulado.timerId) { clearInterval(simulado.timerId); simulado.timerId = null; }
  const total = simulado.questoes.length;
  let acertos = 0; const porDisc = {};
  simulado.questoes.forEach(q => {
    const escolhido = simulado.respostas[q.id];
    const acertou = escolhido === q.correta;
    if (acertou) acertos++;
    if (!porDisc[q.disciplina]) porDisc[q.disciplina] = { total: 0, acertos: 0 };
    porDisc[q.disciplina].total++; if (acertou) porDisc[q.disciplina].acertos++;
    if (escolhido !== undefined) registrarResposta(q.id, q.disciplina, acertou);
  });
  const pct = Math.round(100 * acertos / total);
  const tempoGasto = Math.round((Date.now() - simulado.inicio) / 1000);
  const discHTML = Object.keys(porDisc).sort((a, b) => nomeDisc(a).localeCompare(nomeDisc(b))).map(id => {
    const d = porDisc[id], p = Math.round(100 * d.acertos / d.total);
    return `<div class="desemp-linha"><div class="dl-nome">${iconeDisc(id)} ${nomeDisc(id)}</div><div class="dl-barra"><div class="dl-fill" style="width:${p}%;background:${p>=70?'var(--verde)':p>=50?'var(--amarelo)':'var(--vermelho)'}"></div></div><div class="dl-info">${d.acertos}/${d.total}</div></div>`;
  }).join('');
  const revisaoHTML = simulado.questoes.map((q, i) => {
    const escolhido = simulado.respostas[q.id], acertou = escolhido === q.correta;
    const status = escolhido === undefined ? 'em-branco' : (acertou ? 'correta' : 'errada');
    const rotulo = escolhido === undefined ? 'Em branco' : (acertou ? 'Acertou' : 'Errou');
    return `
      <div class="revisao-item ${status}">
        <div class="rev-head"><span class="rev-num">${i + 1}</span><span class="rev-status">${rotulo}</span><span class="tag">${nomeDisc(q.disciplina)}</span></div>
        <div class="enunciado">${q.enunciado}</div>
        <div class="alternativas">
          ${q.alternativas.map((a, idx) => { let cls = 'alt-rev'; if (idx === q.correta) cls += ' correta'; else if (idx === escolhido) cls += ' errada'; return `<div class="${cls}"><span class="letra">${letra(idx)}</span>${a}</div>`; }).join('')}
        </div>
        <div class="comentario show"><strong>Comentário:</strong> ${q.comentario}<span class="fonte">Fonte: ${q.fonte}</span></div>
      </div>`;
  }).join('');
  const nota = (10 * acertos / total).toFixed(1).replace('.', ',');
  document.getElementById('simulado-area').innerHTML = `
    <div class="sim-resultado">
      ${porTempo ? '<div class="sim-tempo-esgotado">⏱️ Tempo esgotado! O simulado foi encerrado automaticamente.</div>' : ''}
      <div class="sim-nota-circ" style="--pct:${pct}"><div class="sim-nota-num">${pct}%</div><div class="sim-nota-lbl">${acertos}/${total}</div></div>
      <div class="sim-resumo-nums">
        <div class="stat"><div class="num">${nota}</div><div class="lbl">Nota (0-10)</div></div>
        <div class="stat"><div class="num">${acertos}</div><div class="lbl">Acertos</div></div>
        <div class="stat"><div class="num">${total - acertos}</div><div class="lbl">Erros</div></div>
        <div class="stat"><div class="num">${fmtTempo(tempoGasto)}</div><div class="lbl">Tempo</div></div>
      </div>
      <div class="sim-acoes"><button id="sim-novo" class="fc-btn">Novo simulado</button></div>
    </div>
    <h3 class="section-title">Desempenho por disciplina</h3><div class="desemp-lista">${discHTML}</div>
    <h3 class="section-title">Revisão das questões</h3><div class="revisao-lista">${revisaoHTML}</div>`;
  document.getElementById('sim-novo').addEventListener('click', () => { simulado = null; renderSimuladoConfig(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
  renderProgressoDashboard();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- Resumos ----------
function renderResumos(filtro = 'todas') {
  const cont = document.getElementById('resumos-container');
  const lista = filtro === 'todas' ? RESUMOS : RESUMOS.filter(r => r.disciplina === filtro);
  if (!lista.length) { cont.innerHTML = `<div class="empty">Nenhum resumo cadastrado para esta disciplina ainda.</div>`; return; }
  cont.innerHTML = lista.map(r => `<div class="resumo"><span class="tag">${nomeDisc(r.disciplina)}</span><h3>${r.titulo}</h3><div class="resumo-body">${r.conteudo}</div></div>`).join('');
}
document.getElementById('filtro-resumos').addEventListener('change', e => renderResumos(e.target.value));

// ============================================================
//  Flashcards com Repetição Espaçada (SRS estilo Anki)
// ============================================================
let fcQueue = [];      // fila de trabalho da sessão atual
let fcFiltro = 'todas';
let fcFlipped = false;

function poolFlashcards() {
  return fcFiltro === 'todas' ? FLASHCARDS : FLASHCARDS.filter(f => f.disciplina === fcFiltro);
}
function montarSessaoFlashcards(incluirTodos) {
  const pool = poolFlashcards();
  if (incluirTodos) return embaralhar(pool.slice());
  const vencidos = pool.filter(f => FC_SRS[f.id] && FC_SRS[f.id].due <= hoje());
  const novos = pool.filter(f => !FC_SRS[f.id]);
  vencidos.sort((a, b) => FC_SRS[a.id].due - FC_SRS[b.id].due);
  return [...vencidos, ...embaralhar(novos)];
}
function agendarFlashcard(id, q) {
  // q: 0=Errei, 3=Difícil, 4=Bom, 5=Fácil (adaptação do SM-2)
  const s = FC_SRS[id] || { ease: 2.5, interval: 0, reps: 0, due: hoje() };
  if (q < 3) {
    s.reps = 0; s.interval = 0; s.due = hoje();
    s.ease = Math.max(1.3, s.ease - 0.2);
  } else {
    if (s.reps === 0) s.interval = 1;
    else if (s.reps === 1) s.interval = q === 5 ? 6 : 3;
    else s.interval = Math.max(1, Math.round(s.interval * s.ease * (q === 3 ? 0.85 : q === 5 ? 1.3 : 1)));
    s.ease = Math.max(1.3, s.ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
    s.reps += 1;
    s.due = hoje() + s.interval;
  }
  FC_SRS[id] = s; lsSet(FC_SRS_KEY, FC_SRS);
  return s;
}
function labelIntervalo(id, q) {
  const s = FC_SRS[id] || { ease: 2.5, interval: 0, reps: 0 };
  if (q < 3) return 'hoje';
  let intv;
  if (s.reps === 0) intv = 1;
  else if (s.reps === 1) intv = q === 5 ? 6 : 3;
  else intv = Math.max(1, Math.round(s.interval * s.ease * (q === 3 ? 0.85 : q === 5 ? 1.3 : 1)));
  return intv === 1 ? '1 dia' : intv + ' dias';
}

function renderFlashcards(filtro) {
  if (filtro !== undefined) fcFiltro = filtro;
  fcQueue = montarSessaoFlashcards(false);
  fcFlipped = false;
  mostrarFlashcard();
}
function mostrarFlashcard() {
  const stage = document.getElementById('flashcard-stage');
  const pool = poolFlashcards();
  if (!pool.length) { stage.innerHTML = `<div class="empty">Nenhum flashcard cadastrado para esta disciplina ainda.</div>`; return; }

  if (!fcQueue.length) {
    const futuros = pool.filter(f => FC_SRS[f.id] && FC_SRS[f.id].due > hoje()).length;
    stage.innerHTML = `
      <div class="fc-fim">
        <div class="fc-fim-emoji">🎉</div>
        <h3>Revisão do dia concluída!</h3>
        <p>Você revisou todos os flashcards devidos para hoje.${futuros ? ` ${futuros} card${futuros === 1 ? '' : 's'} já agendado${futuros === 1 ? '' : 's'} para os próximos dias.` : ''}</p>
        <button class="fc-btn" id="fc-estudar-tudo">Estudar todos assim mesmo</button>
      </div>`;
    document.getElementById('fc-estudar-tudo').addEventListener('click', () => { fcQueue = montarSessaoFlashcards(true); fcFlipped = false; mostrarFlashcard(); });
    return;
  }

  const f = fcQueue[0];
  const restam = fcQueue.length;
  stage.innerHTML = `
    <div class="fc-sessao-topo">🎴 ${restam} para revisar · ${nomeDisc(f.disciplina)}</div>
    <div class="flashcard ${fcFlipped ? 'flipped' : ''}" id="fc">
      <div class="flashcard-inner">
        <div class="flashcard-face flashcard-front"><div class="txt">${f.frente}</div><div class="hint">👆 clique para ver a resposta</div></div>
        <div class="flashcard-face flashcard-back"><div class="txt">${f.verso}</div><div class="hint">${nomeDisc(f.disciplina)}</div></div>
      </div>
    </div>
    <div id="fc-acoes"></div>`;

  const fcEl = document.getElementById('fc');
  const acoes = document.getElementById('fc-acoes');
  function pintarAcoes() {
    if (!fcFlipped) {
      acoes.innerHTML = `<button class="fc-btn fc-mostrar" id="fc-mostrar">Mostrar resposta</button>`;
      document.getElementById('fc-mostrar').addEventListener('click', flip);
    } else {
      acoes.innerHTML = `
        <div class="fc-notas">
          <button class="fc-nota fc-errei" data-q="0">Errei<small>${labelIntervalo(f.id, 0)}</small></button>
          <button class="fc-nota fc-dificil" data-q="3">Difícil<small>${labelIntervalo(f.id, 3)}</small></button>
          <button class="fc-nota fc-bom" data-q="4">Bom<small>${labelIntervalo(f.id, 4)}</small></button>
          <button class="fc-nota fc-facil" data-q="5">Fácil<small>${labelIntervalo(f.id, 5)}</small></button>
        </div>`;
      acoes.querySelectorAll('.fc-nota').forEach(b => b.addEventListener('click', () => avaliar(parseInt(b.dataset.q, 10))));
    }
  }
  function flip() { fcFlipped = true; fcEl.classList.add('flipped'); pintarAcoes(); }
  function avaliar(q) {
    agendarFlashcard(f.id, q);
    fcQueue.shift();
    if (q < 3) fcQueue.push(f); // Errei → repete ainda nesta sessão
    fcFlipped = false;
    mostrarFlashcard();
  }
  fcEl.addEventListener('click', () => { if (!fcFlipped) flip(); });
  pintarAcoes();
}
document.getElementById('filtro-flashcards').addEventListener('change', e => renderFlashcards(e.target.value));

// ---------- Filtro de banca ----------
function preencherFiltroBanca() {
  const sel = document.getElementById('filtro-banca');
  const bancas = [...new Set(QUESTOES.map(q => q.banca).filter(Boolean))].sort();
  const opts = ['<option value="todas">Todas as bancas</option>'];
  bancas.forEach(b => { const n = QUESTOES.filter(q => q.banca === b).length; opts.push(`<option value="${b}">${b === 'Autoral' ? 'Autorais' : b} (${n})</option>`); });
  sel.innerHTML = opts.join('');
}

// ---------- Inicialização ----------
function init() {
  renderDashboard();
  preencherFiltro('filtro-questoes', id => contar(QUESTOES, id));
  preencherFiltroBanca();
  preencherFiltro('filtro-resumos', id => contar(RESUMOS, id));
  preencherFiltro('filtro-flashcards', id => contar(FLASHCARDS, id));
  renderQuestoes();
  renderResumos();
  renderFlashcards('todas');
  renderSimuladoConfig();
  renderPlano();
}
init();
