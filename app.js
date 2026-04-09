let activePhase = 0;
let activeDay = 0;

function setPhase(i) {
  activePhase = i;
  activeDay = 0;
  document.querySelectorAll(".ptab").forEach((t, j) => t.classList.toggle("active", j === i));
  render();
}

function setDay(i) {
  activeDay = i;
  renderWeek();
  renderDetail();
}

function renderWeek() {
  const days = phases[activePhase].days;
  document.getElementById("weekGrid").innerHTML = days.map((d, i) => `
    <div class="dc ${d.type}${i === activeDay ? " active" : ""}" onclick="setDay(${i})">
      <div class="dname">${d.name.slice(0, 3)}</div>
      <div style="font-size:13px;margin:3px 0">${d.icon}</div>
      <div class="dtype">${d.label}</div>
    </div>`).join("");
}

function renderStats() {
  const p = phases[activePhase];
  document.getElementById("statRow").innerHTML = p.stats.map((v, i) => `
    <div class="stat">
      <div class="stat-val">${v}</div>
      <div class="stat-lbl">${p.statLabels[i]}</div>
    </div>`).join("");
}

function renderDetail() {
  const d = phases[activePhase].days[activeDay];

  const runWidth = activePhase === 0 ? 55 : activePhase === 1 ? 70 : 80;
  const runLabel = activePhase === 0 ? "20–25 min" : activePhase === 1 ? "25–30 min" : "30–35 min";

  const runBars = d.type === "run" ? `
    <div class="run-bars">
      <div class="rb-row">
        <span class="rb-lbl">Warm-up</span>
        <div class="rb-wrap"><div class="rb-fill" style="width:17%;background:#1D9E75"></div></div>
        <span class="rb-val">5 min</span>
      </div>
      <div class="rb-row">
        <span class="rb-lbl">Run</span>
        <div class="rb-wrap"><div class="rb-fill" style="width:${runWidth}%;background:#0F6E56"></div></div>
        <span class="rb-val">${runLabel}</span>
      </div>
      <div class="rb-row">
        <span class="rb-lbl">Cool-down</span>
        <div class="rb-wrap"><div class="rb-fill" style="width:17%;background:#9FE1CB"></div></div>
        <span class="rb-val">5 min</span>
      </div>
    </div>` : "";

  const exHtml = d.exercises.map((e, i) => `
    <div class="ex-item" onclick="toggleTip(${i})">
      <div class="ex-left">
        <div class="ex-name">${e.name}</div>
        ${e.meta ? `<div class="ex-meta">${e.meta}</div>` : ""}
      </div>
      <span class="arrow" id="arr${i}">▾</span>
    </div>
    ${e.tip ? `<div class="ex-tip" id="tip${i}">${e.tip}</div>` : ""}`).join("");

  document.getElementById("dayDetail").innerHTML = `
    <div class="panel">
      <div class="panel-header">
        <div class="panel-title-row">
          <div class="panel-title">${d.title}</div>
          <span class="badge b-${d.type}">${d.label}</span>
        </div>
        <div class="panel-sub">${d.sub}</div>
      </div>
      ${runBars}
      ${exHtml}
    </div>`;
}

function toggleTip(i) {
  const tip = document.getElementById("tip" + i);
  const arr = document.getElementById("arr" + i);
  if (tip) tip.classList.toggle("open");
  if (arr) arr.classList.toggle("open");
}

function render() {
  renderWeek();
  renderStats();
  renderDetail();
}

render();
