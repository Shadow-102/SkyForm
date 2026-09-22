/* =========================================================================
   SKYFORM — application logic
   No build step. Vanilla JS. Talks to index.html via element IDs and
   renders its own markup into container elements.

   Data note: aircraft specifications below are commonly-published,
   representative figures compiled for a showcase/demo product — not an
   official technical reference. Figures marked "~" are approximate and
   vary by source, export configuration, and contract year.
   ========================================================================= */

'use strict';

/* -------------------------------------------------------------------------
   1. DATA
   ---------------------------------------------------------------------- */

const AIRCRAFT = [
  {
    id: 'gripen',
    name: 'JAS 39 Gripen E/F',
    manufacturer: 'Saab',
    nation: 'Sweden',
    flag: '🇸🇪',
    generation: '4.5',
    role: 'Multi-role',
    canard: true,
    engines: 1,
    topSpeedMach: 2.0,
    topSpeedKmh: 2450,
    combatRadiusKm: 1300,
    serviceCeilingM: 16000,
    radar: 'Raven ES-05 AESA',
    engine: '1× GE F414G (~98 kN afterburning)',
    thrustVectoring: false,
    payloadKg: 5300,
    hardpoints: 10,
    unitCostUSD: 85000000,
    costApprox: true,
    firstFlight: 2017,
    stealthRating: 2,
    blurb: 'A lightweight, low-cost-to-operate fighter built around short, austere-runway operations and a modern sensor-fused cockpit. Sweden designed it to fight outnumbered and keep flying with a small ground crew.',
  },
  {
    id: 'f35',
    name: 'F-35A Lightning II',
    manufacturer: 'Lockheed Martin',
    nation: 'United States',
    flag: '🇺🇸',
    generation: '5',
    role: 'Stealth Multi-role',
    canard: false,
    engines: 1,
    topSpeedMach: 1.6,
    topSpeedKmh: 1960,
    combatRadiusKm: 1240,
    serviceCeilingM: 15240,
    radar: 'AN/APG-81 AESA',
    engine: '1× Pratt & Whitney F135 (~191 kN afterburning)',
    thrustVectoring: false,
    payloadKg: 8160,
    hardpoints: 10,
    hardpointsNote: '4 internal + 6 external',
    unitCostUSD: 82500000,
    costApprox: true,
    firstFlight: 2006,
    stealthRating: 5,
    blurb: 'Less a dogfighter than a flying sensor node — the F-35 is built to see first, stay unseen, and hand targeting data to everything else on the network before anyone knows it was there.',
  },
  {
    id: 'f22',
    name: 'F-22 Raptor',
    manufacturer: 'Lockheed Martin / Boeing',
    nation: 'United States',
    flag: '🇺🇸',
    generation: '5',
    role: 'Air Superiority',
    canard: false,
    engines: 2,
    topSpeedMach: 2.25,
    topSpeedKmh: 2410,
    combatRadiusKm: 850,
    serviceCeilingM: 19812,
    radar: 'AN/APG-77 AESA',
    engine: '2× Pratt & Whitney F119, 2D thrust vectoring',
    thrustVectoring: true,
    payloadKg: 9000,
    hardpoints: 8,
    hardpointsNote: 'incl. 2 internal weapons bays',
    unitCostUSD: 150000000,
    costApprox: true,
    firstFlight: 1997,
    stealthRating: 5,
    blurb: 'Production ended in 2011 and none have ever been exported, yet it remains the yardstick for raw air-to-air performance — stealth, supercruise, and thrust vectoring in one airframe.',
  },
  {
    id: 'typhoon',
    name: 'Eurofighter Typhoon',
    manufacturer: 'Eurofighter GmbH (BAE / Airbus / Leonardo)',
    nation: 'UK / Germany / Italy / Spain',
    flag: '🇬🇧🇩🇪🇮🇹🇪🇸',
    generation: '4.5',
    role: 'Air Superiority',
    canard: true,
    engines: 2,
    topSpeedMach: 2.0,
    topSpeedKmh: 2495,
    combatRadiusKm: 1389,
    serviceCeilingM: 19812,
    radar: 'Captor-E AESA (ECRS Mk1/Mk2)',
    engine: '2× Eurojet EJ200 (~90 kN each, afterburning)',
    thrustVectoring: false,
    payloadKg: 7500,
    hardpoints: 13,
    unitCostUSD: 120000000,
    costApprox: true,
    firstFlight: 1994,
    stealthRating: 2,
    blurb: 'Built by a four-nation consortium around pure aerodynamic performance — an unstable, canard-delta airframe tamed entirely by fly-by-wire, and still one of the hardest things to out-turn in the sky.',
  },
  {
    id: 'rafale',
    name: 'Rafale',
    manufacturer: 'Dassault Aviation',
    nation: 'France',
    flag: '🇫🇷',
    generation: '4.5',
    role: 'Omnirole',
    canard: true,
    engines: 2,
    topSpeedMach: 1.8,
    topSpeedKmh: 1912,
    combatRadiusKm: 1850,
    combatRadiusNote: 'hi-lo-hi strike profile',
    serviceCeilingM: 15235,
    radar: 'Thales RBE2 AESA',
    engine: '2× Safran M88 (~75 kN each, afterburning)',
    thrustVectoring: false,
    payloadKg: 9500,
    hardpoints: 14,
    unitCostUSD: 115000000,
    costApprox: true,
    firstFlight: 1986,
    stealthRating: 2,
    blurb: 'France builds and arms it entirely at home, which is the point — Dassault calls it "omnirole" because the same airframe flies air defence, deep strike, reconnaissance and nuclear deterrence sorties without swapping hardware.',
  },
  {
    id: 'su57',
    name: 'Su-57 Felon',
    manufacturer: 'Sukhoi',
    nation: 'Russia',
    flag: '🇷🇺',
    generation: '5',
    role: 'Stealth Air Superiority',
    canard: false,
    engines: 2,
    topSpeedMach: 2.0,
    topSpeedKmh: 2440,
    combatRadiusKm: 1500,
    serviceCeilingM: 20000,
    radar: 'N036 Byelka AESA',
    engine: '2× AL-41F1, 3D thrust vectoring',
    thrustVectoring: true,
    payloadKg: 10000,
    hardpoints: 12,
    hardpointsNote: '6 internal + external stations',
    unitCostUSD: 35000000,
    costApprox: true,
    firstFlight: 2010,
    stealthRating: 4,
    blurb: 'Russia\u2019s answer to Western fifth-generation fighters trades some frontal stealth for extreme agility — full 3D thrust vectoring and a super-manoeuvrable airframe built to win a turning fight if it\u2019s ever caught in one.',
  },
];

const AIRSHOWS = [
  {
    id: 'fia2026',
    name: 'Farnborough International Airshow',
    status: 'concluded',
    dateLabel: '20–24 Jul 2026',
    location: 'Farnborough, Hampshire',
    country: 'United Kingdom',
    region: 'europe',
    blurb: 'Biennial trade-led show with a five-day flying display program alongside the exhibition halls. Public viewing is limited compared to RIAT — most days trade-only.',
  },
  {
    id: 'nato-days-2026',
    name: 'NATO Days & Czech Air Force Days',
    status: 'concluded',
    dateLabel: '19–20 Sep 2026',
    location: 'Ostrava-Mošnov (Leoš Janáček Airport)',
    country: 'Czech Republic',
    region: 'europe',
    blurb: 'Europe\u2019s largest public security and defence show — free entry, static and flying displays from the Czech Air Force and NATO partners. Usually the third weekend of September.',
  },
  {
    id: 'paris2027',
    name: 'Paris Air Show — Salon du Bourget',
    status: 'scheduled',
    dateLabel: '14–20 Jun 2027',
    location: 'Paris–Le Bourget',
    country: 'France',
    region: 'europe',
    blurb: 'The industry\u2019s biggest biennial gathering — professional days run 14–17 June, public flying days 18–20 June. Expect new-type debuts and major order announcements.',
  },
  {
    id: 'riat2026',
    name: 'Royal International Air Tattoo (RIAT)',
    status: 'cancelled',
    dateLabel: 'Was 17–19 Jul 2026',
    location: 'RAF Fairford, Gloucestershire',
    country: 'United Kingdom',
    region: 'europe',
    blurb: 'Cancelled for 2026 — organisers cited uncertainty over access to RAF Fairford while the base supported live operations in the Middle East. RIAT is expected to return in 2027.',
  },
  {
    id: 'siaf2026',
    name: 'Slovak International Air Fest (SIAF)',
    status: 'cancelled',
    dateLabel: 'Was 5–6 Sep 2026',
    location: 'Košice Airport',
    country: 'Slovakia',
    region: 'europe',
    blurb: 'Slovakia\u2019s premier airshow was cancelled after Košice Airport withdrew its hosting approval, citing security protocols and rising commercial traffic.',
  },
  {
    id: 'oshkosh',
    name: 'EAA AirVenture Oshkosh',
    status: 'annual',
    dateLabel: 'Late July, annual',
    location: 'Wittman Regional Airport, Oshkosh, WI',
    country: 'United States',
    region: 'northamerica',
    blurb: 'The world\u2019s busiest airport for one week a year. Mostly general aviation, but USAF and partner-nation fighter demo teams are regular guests on the flight line.',
  },
  {
    id: 'singapore2028',
    name: 'Singapore Airshow',
    status: 'scheduled',
    dateLabel: 'Feb 2028 (dates TBA)',
    location: 'Changi Exhibition Centre',
    country: 'Singapore',
    region: 'apac',
    blurb: 'Asia\u2019s largest aerospace and defence show, held in even-numbered years. A key venue for Su-57, F-35 and regional fighter programs to court APAC buyers.',
  },
];

const MUSEUMS = [
  {
    id: 'duxford',
    name: 'IWM Duxford',
    location: 'Duxford, Cambridgeshire',
    country: 'United Kingdom',
    region: 'europe',
    blurb: 'A former Battle of Britain fighter station turned museum. The American Air Museum hangar holds an SR-71 Blackbird under a soaring glass roof, and the Duxford Air Festival brings modern jets back to the same grass runways each year.',
  },
  {
    id: 'flygvapen',
    name: 'Flygvapenmuseum',
    location: 'Linköping',
    country: 'Sweden',
    region: 'europe',
    blurb: 'The Swedish Air Force Museum, built beside Malmen airfield where Saab still flight-tests the Gripen. Traces the full Saab lineage from the Draken and Viggen through to the Gripen E.',
  },
  {
    id: 'lebourget',
    name: 'Musée de l\u2019Air et de l\u2019Espace',
    location: 'Paris–Le Bourget',
    country: 'France',
    region: 'europe',
    blurb: 'Housed at the same airfield as the Paris Air Show, with Concorde prototypes, Mirage lineage aircraft and a Rafale on static display just steps from the show chalets.',
  },
  {
    id: 'usaf-museum',
    name: 'National Museum of the United States Air Force',
    location: 'Wright-Patterson AFB, Dayton, OH',
    country: 'United States',
    region: 'northamerica',
    blurb: 'The largest military aviation museum on Earth, free to enter. Four cavernous hangars run from the Wright brothers to stealth prototypes, including presidential aircraft and an XB-70 Valkyrie.',
  },
  {
    id: 'hamamatsu',
    name: 'JASDF Hamamatsu Air Park',
    location: 'Hamamatsu, Shizuoka',
    country: 'Japan',
    region: 'apac',
    blurb: 'A free museum beside an active JASDF base, with retired fighters on outdoor display and a runway-side viewing area for current squadrons flying overhead.',
  },
];

const AIRBASES = [
  {
    id: 'caslav',
    name: 'Čáslav Air Base',
    location: 'Čáslav',
    country: 'Czech Republic',
    region: 'europe',
    blurb: 'Home of the Czech Air Force\u2019s Gripen squadrons (21st Tactical Air Force Base). Occasional public open days; otherwise best viewed from surrounding public roads.',
  },
  {
    id: 'ramstein',
    name: 'Ramstein Air Base',
    location: 'Ramstein-Miesenbach',
    country: 'Germany',
    region: 'europe',
    blurb: 'The largest USAFE hub in Europe and a constant stream of transient traffic — fighters, tankers and transports passing through on rotation. A steady, if unglamorous, spotting location.',
  },
  {
    id: 'coningsby',
    name: 'RAF Coningsby',
    location: 'Coningsby, Lincolnshire',
    country: 'United Kingdom',
    region: 'europe',
    blurb: 'Home to RAF Typhoon quick-reaction alert squadrons and the Battle of Britain Memorial Flight. Public roads skirt the perimeter and are popular with local spotters.',
  },
  {
    id: 'edwards',
    name: 'Edwards Air Force Base',
    location: 'Kern County, CA',
    country: 'United States',
    region: 'northamerica',
    blurb: 'The USAF\u2019s primary flight test centre — new F-35 and F-22 test builds fly here before anywhere else. Irregular public air shows; check official channels before planning a visit.',
  },
  {
    id: 'nellis',
    name: 'Nellis Air Force Base',
    location: 'Las Vegas, NV',
    country: 'United States',
    region: 'northamerica',
    blurb: 'Home of Red Flag and the USAF Thunderbirds. The Aviation Nation open house, when scheduled, is one of the largest public military air shows in North America.',
  },
];

const GALLERY_SCENES = [
  { key: 'flyby',   label: 'Low-altitude flyby',  skyFrom: '#0a1a2e', skyTo: '#173a5e' },
  { key: 'refuel',  label: 'Aerial refuelling',    skyFrom: '#0c1024', skyTo: '#241a4a' },
  { key: 'static',  label: 'Static display',       skyFrom: '#0a0f1d', skyTo: '#111a2e' },
  { key: 'takeoff', label: 'Max-thrust takeoff',    skyFrom: '#1a0c14', skyTo: '#3a1622' },
];

// Build a gallery entry for every aircraft × two scenes (kept deliberate,
// not every combination, so the grid reads as curated rather than padded).
const GALLERY = [];
AIRCRAFT.forEach((ac, i) => {
  const scenes = [GALLERY_SCENES[i % 4], GALLERY_SCENES[(i + 2) % 4]];
  scenes.forEach((scene, j) => {
    GALLERY.push({
      id: `${ac.id}-${scene.key}`,
      aircraftId: ac.id,
      aircraftName: ac.name,
      nation: ac.nation,
      flag: ac.flag,
      scene: scene.key,
      sceneLabel: scene.label,
      location: [MUSEUMS, AIRSHOWS, AIRBASES][(i + j) % 3][(i + j) % 3].location,
      caption: `${ac.name} — ${scene.label}`,
      skyFrom: scene.skyFrom,
      skyTo: scene.skyTo,
    });
  });
});

/* -------------------------------------------------------------------------
   2. STATE
   ---------------------------------------------------------------------- */

const state = {
  view: 'hangar',
  filters: { search: '', generation: 'all', nation: 'all', role: 'all' },
  compare: [],            // aircraft ids, max 3
  spotter: { region: 'all', category: 'airshows' },
  galleryFilter: 'all',
  deck: {
    aircraftId: 'f35',
    autoRotate: true,
    wireframe: false,
    activeHotspot: null,
  },
};

/* -------------------------------------------------------------------------
   3. SMALL UTILITIES
   ---------------------------------------------------------------------- */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function fmtInt(n) {
  return new Intl.NumberFormat('en-US').format(Math.round(n));
}

function fmtCost(usd) {
  return `~$${(usd / 1_000_000).toFixed(1)}M`;
}

function fmtCeilingFt(m) {
  return fmtInt(m * 3.28084);
}

function genLabel(g) {
  return g === '5' ? '5TH GEN' : '4.5 GEN';
}

function cornerBrackets() {
  return `<span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>`;
}

/** Shared top-down jet silhouette as inline SVG markup. */
function jetSilhouette(aircraft, opts = {}) {
  const { size = 64, color = 'var(--cyan)', fillOpacity = 0.9 } = opts;
  const canardPaths = aircraft.canard
    ? `<path d="M75,95 L38,78 L70,116 Z" fill="${color}" opacity="0.85"/>
       <path d="M165,95 L202,78 L170,116 Z" fill="${color}" opacity="0.85"/>`
    : '';
  const engineGlow = aircraft.engines === 2
    ? `<circle cx="106" cy="204" r="5" fill="var(--amber)" opacity="0.9"/><circle cx="134" cy="204" r="5" fill="var(--amber)" opacity="0.9"/>`
    : `<circle cx="120" cy="206" r="6" fill="var(--amber)" opacity="0.9"/>`;
  return `
    <svg viewBox="0 0 240 240" width="${size}" height="${size}" class="jet-silhouette" aria-hidden="true">
      <path d="M120,10 L136,92 L232,142 L152,152 L192,230 L140,196 L120,212 L100,196 L48,230 L88,152 L8,142 L104,92 Z"
            fill="${color}" opacity="${fillOpacity}"/>
      ${canardPaths}
      ${engineGlow}
    </svg>`;
}

function closeAllOverlays() {
  $('#detailModal').classList.add('hidden');
  $('#lightbox').classList.add('hidden');
  $('#filterPanel').classList.add('hidden');
}

/* -------------------------------------------------------------------------
   4. VIEW SWITCHING
   ---------------------------------------------------------------------- */

function setView(view) {
  state.view = view;
  $$('.view').forEach(v => v.classList.toggle('active', v.id === `view-${view}`));
  $$('.tab-btn').forEach(b => {
    const active = b.dataset.view === view;
    b.classList.toggle('active', active);
    b.setAttribute('aria-selected', String(active));
  });
  closeAllOverlays();
  if (view === 'deck') {
    initDeckOnce();
    onDeckResize();
  }
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

/* -------------------------------------------------------------------------
   5. HANGAR — filtering, cards, compare tray, radar chart, detail modal
   ---------------------------------------------------------------------- */

function filteredAircraft() {
  const { search, generation, nation, role } = state.filters;
  const q = search.trim().toLowerCase();
  return AIRCRAFT.filter(ac => {
    if (generation !== 'all' && ac.generation !== generation) return false;
    if (nation !== 'all' && ac.nation !== nation) return false;
    if (role !== 'all' && ac.role !== role) return false;
    if (q) {
      const hay = `${ac.name} ${ac.manufacturer} ${ac.nation} ${ac.role}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function renderFilterOptions() {
  const nations = Array.from(new Set(AIRCRAFT.map(a => a.nation)));
  const roles = Array.from(new Set(AIRCRAFT.map(a => a.role)));

  $('#nationFilters').innerHTML = ['all', ...nations].map(n => `
    <button class="chip-filter ${state.filters.nation === n ? 'active' : ''}" data-filter="nation" data-value="${n}">
      ${n === 'all' ? 'All nations' : n}
    </button>`).join('');

  $('#roleFilters').innerHTML = ['all', ...roles].map(r => `
    <button class="chip-filter ${state.filters.role === r ? 'active' : ''}" data-filter="role" data-value="${r}">
      ${r === 'all' ? 'All roles' : r}
    </button>`).join('');

  $$('.gen-filter').forEach(b => b.classList.toggle('active', b.dataset.value === state.filters.generation));
}

function renderHangar() {
  const list = filteredAircraft();
  const grid = $('#hangarGrid');
  $('#resultCount').textContent = `${list.length} of ${AIRCRAFT.length} AIRCRAFT`;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p>No aircraft match these filters.</p>
        <button id="emptyClearBtn" class="text-btn">Clear filters</button>
      </div>`;
    $('#emptyClearBtn').addEventListener('click', clearFilters);
    return;
  }

  grid.innerHTML = list.map(ac => `
    <article class="jet-card ${ac.generation === '5' ? 'is-fifth-gen' : ''}" data-id="${ac.id}">
      ${cornerBrackets()}
      <div class="jet-card-top">
        <span class="tag tag-gen ${ac.generation === '5' ? 'tag-alert' : 'tag-amber'}">${genLabel(ac.generation)}</span>
        <button class="compare-btn ${state.compare.includes(ac.id) ? 'active' : ''}" data-compare="${ac.id}" title="Add to comparison">
          <i data-lucide="scale"></i>
        </button>
      </div>
      <div class="jet-card-silhouette">${jetSilhouette(ac, { size: 96 })}</div>
      <h3 class="jet-card-name">${ac.name}</h3>
      <p class="jet-card-meta">${ac.flag} ${ac.nation} · ${ac.manufacturer}</p>
      <dl class="jet-card-specs">
        <div><dt>Top speed</dt><dd>Mach ${ac.topSpeedMach.toFixed(2)}</dd></div>
        <div><dt>Combat radius</dt><dd>${fmtInt(ac.combatRadiusKm)} km</dd></div>
        <div><dt>Ceiling</dt><dd>${fmtInt(ac.serviceCeilingM)} m</dd></div>
        <div><dt>Unit cost</dt><dd>${fmtCost(ac.unitCostUSD)}</dd></div>
      </dl>
      <button class="jet-card-inspect" data-inspect="${ac.id}">
        Inspect dossier <i data-lucide="arrow-up-right"></i>
      </button>
    </article>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

function toggleCompare(id) {
  const idx = state.compare.indexOf(id);
  if (idx >= 0) {
    state.compare.splice(idx, 1);
  } else {
    if (state.compare.length >= 3) state.compare.shift();
    state.compare.push(id);
  }
  renderHangar();
  renderCompareTray();
}

function clearFilters() {
  state.filters = { search: '', generation: 'all', nation: 'all', role: 'all' };
  $('#searchInput').value = '';
  renderFilterOptions();
  renderHangar();
}

/* ---- Radar chart ---- */

function polar(cx, cy, r, angleDeg) {
  const a = (angleDeg - 90) * (Math.PI / 180);
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

const RADAR_AXES = [
  { key: 'topSpeedMach', label: 'SPD' },
  { key: 'combatRadiusKm', label: 'RNG' },
  { key: 'serviceCeilingM', label: 'CEIL' },
  { key: 'payloadKg', label: 'PAY' },
  { key: 'stealthRating', label: 'STL' },
];

function normalize(key, value) {
  const values = AIRCRAFT.map(a => a[key]);
  const min = Math.min(...values), max = Math.max(...values);
  if (max === min) return 0.5;
  return (value - min) / (max - min);
}

const COMPARE_COLORS = ['var(--cyan)', 'var(--amber)', 'var(--alert)'];

function buildRadarSVG(aircraftList) {
  const size = 260, cx = size / 2, cy = size / 2 - 6, R = 84;
  const rings = [0.25, 0.5, 0.75, 1].map(f => {
    const pts = RADAR_AXES.map((_, i) => polar(cx, cy, R * f, i * 72).join(',')).join(' ');
    return `<polygon points="${pts}" class="radar-ring" />`;
  }).join('');

  const spokes = RADAR_AXES.map((ax, i) => {
    const [x, y] = polar(cx, cy, R, i * 72);
    const [lx, ly] = polar(cx, cy, R + 18, i * 72);
    return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="radar-spoke" />
            <text x="${lx}" y="${ly}" class="radar-axis-label" text-anchor="middle" dominant-baseline="middle">${ax.label}</text>`;
  }).join('');

  const polygons = aircraftList.map((ac, idx) => {
    const pts = RADAR_AXES.map((ax, i) => {
      const v = normalize(ax.key, ac[ax.key]);
      return polar(cx, cy, R * Math.max(v, 0.06), i * 72).join(',');
    }).join(' ');
    const color = COMPARE_COLORS[idx];
    return `<polygon points="${pts}" fill="${color}" fill-opacity="0.16" stroke="${color}" stroke-width="2" />`;
  }).join('');

  return `<svg viewBox="0 0 ${size} ${size}" class="radar-chart">${rings}${spokes}${polygons}</svg>`;
}

function renderCompareTray() {
  const tray = $('#compareTray');
  if (state.compare.length < 2) {
    tray.classList.add('hidden');
    return;
  }
  tray.classList.remove('hidden');
  const list = state.compare.map(id => AIRCRAFT.find(a => a.id === id));

  $('#compareChips').innerHTML = list.map((ac, i) => `
    <span class="compare-chip" style="--chip-color:${COMPARE_COLORS[i]}">
      ${ac.name}
      <button data-remove-compare="${ac.id}" aria-label="Remove ${ac.name}"><i data-lucide="x"></i></button>
    </span>`).join('');

  $('#radarChartWrap').innerHTML = buildRadarSVG(list);

  const metricRows = [
    ['Top speed', a => `Mach ${a.topSpeedMach.toFixed(2)}`],
    ['Combat radius', a => `${fmtInt(a.combatRadiusKm)} km`],
    ['Service ceiling', a => `${fmtInt(a.serviceCeilingM)} m`],
    ['Payload', a => `${fmtInt(a.payloadKg)} kg`],
    ['Unit cost', a => fmtCost(a.unitCostUSD)],
  ];
  $('#compareBars').innerHTML = metricRows.map(([label, fmt]) => `
    <div class="compare-row">
      <span class="compare-row-label">${label}</span>
      <div class="compare-row-values">
        ${list.map((a, i) => `<span style="color:${COMPARE_COLORS[i]}">${fmt(a)}</span>`).join('<span class="dim">/</span>')}
      </div>
    </div>`).join('');

  if (window.lucide) lucide.createIcons();
}

/* ---- Detail modal (dossier) ---- */

function openDetail(id) {
  const ac = AIRCRAFT.find(a => a.id === id);
  if (!ac) return;
  $('#detailModalBody').innerHTML = `
    <div class="dossier-head">
      <div class="dossier-silhouette">${jetSilhouette(ac, { size: 120 })}</div>
      <div>
        <span class="tag ${ac.generation === '5' ? 'tag-alert' : 'tag-amber'}">${genLabel(ac.generation)}</span>
        <h2>${ac.name}</h2>
        <p class="dossier-meta">${ac.flag} ${ac.nation} · ${ac.manufacturer} · role: ${ac.role}</p>
      </div>
    </div>
    <p class="dossier-blurb">${ac.blurb}</p>
    <div class="dossier-grid">
      <div><dt>Top speed</dt><dd>Mach ${ac.topSpeedMach.toFixed(2)} (~${fmtInt(ac.topSpeedKmh)} km/h)</dd></div>
      <div><dt>Combat radius</dt><dd>${fmtInt(ac.combatRadiusKm)} km${ac.combatRadiusNote ? ` (${ac.combatRadiusNote})` : ''}</dd></div>
      <div><dt>Service ceiling</dt><dd>${fmtInt(ac.serviceCeilingM)} m (~${fmtCeilingFt(ac.serviceCeilingM)} ft)</dd></div>
      <div><dt>Radar / avionics</dt><dd>${ac.radar}</dd></div>
      <div><dt>Powerplant</dt><dd>${ac.engine}</dd></div>
      <div><dt>Thrust vectoring</dt><dd>${ac.thrustVectoring ? 'Yes' : 'No'}</dd></div>
      <div><dt>Max payload</dt><dd>${fmtInt(ac.payloadKg)} kg</dd></div>
      <div><dt>Hardpoints</dt><dd>${ac.hardpoints}${ac.hardpointsNote ? ` (${ac.hardpointsNote})` : ''}</dd></div>
      <div><dt>Unit cost</dt><dd>${fmtCost(ac.unitCostUSD)} <span class="dim">approx., varies by contract</span></dd></div>
      <div><dt>First flight</dt><dd>${ac.firstFlight}</dd></div>
    </div>
    <button class="btn-secondary" data-view-deck="${ac.id}">
      Open in 3D Deck <i data-lucide="box"></i>
    </button>
  `;
  $('#detailModal').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

/* -------------------------------------------------------------------------
   6. SPOTTER GUIDE
   ---------------------------------------------------------------------- */

function renderSpotter() {
  const { region, category } = state.spotter;
  const source = category === 'airshows' ? AIRSHOWS : category === 'museums' ? MUSEUMS : AIRBASES;
  const list = source.filter(item => region === 'all' || item.region === region);

  $$('.region-tab').forEach(b => b.classList.toggle('active', b.dataset.region === region));
  $$('.category-tab').forEach(b => b.classList.toggle('active', b.dataset.category === category));

  const container = $('#spotterList');
  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><p>Nothing filed under this region yet. Try "All regions".</p></div>`;
    return;
  }

  if (category === 'airshows') {
    container.innerHTML = list.map(ev => `
      <div class="spotter-row bracket-box">
        ${cornerBrackets()}
        <div class="spotter-row-main">
          <div class="spotter-row-title">
            <span class="status-chip status-${ev.status}">${ev.status}</span>
            <h3>${ev.name}</h3>
          </div>
          <p class="spotter-row-loc">${ev.location} · ${ev.country}</p>
          <p class="spotter-row-blurb">${ev.blurb}</p>
        </div>
        <div class="spotter-row-date">${ev.dateLabel}</div>
      </div>`).join('');
  } else {
    container.innerHTML = list.map(p => `
      <div class="spotter-row bracket-box">
        ${cornerBrackets()}
        <div class="spotter-row-main">
          <div class="spotter-row-title"><h3>${p.name}</h3></div>
          <p class="spotter-row-loc">${p.location} · ${p.country}</p>
          <p class="spotter-row-blurb">${p.blurb}</p>
        </div>
      </div>`).join('');
  }
}

/* -------------------------------------------------------------------------
   7. GALLERY + LIGHTBOX
   ---------------------------------------------------------------------- */

function galleryArtSVG(item, opts = {}) {
  const ac = AIRCRAFT.find(a => a.id === item.aircraftId);
  const big = opts.big;
  const w = big ? 900 : 400, h = big ? 560 : 300;
  return `
  <svg viewBox="0 0 ${w} ${h}" class="gallery-art" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="sky-${item.id}${big ? '-lb' : ''}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${item.skyFrom}"/>
        <stop offset="100%" stop-color="${item.skyTo}"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#sky-${item.id}${big ? '-lb' : ''})"/>
    <g opacity="0.12">
      ${Array.from({length: 6}).map((_,i)=>`<line x1="0" y1="${(h/6)*i}" x2="${w}" y2="${(h/6)*i}" stroke="var(--cyan)" stroke-width="1"/>`).join('')}
    </g>
    <g transform="translate(${w*0.5},${h*0.52}) rotate(${item.scene === 'takeoff' ? -18 : -6}) scale(${big ? 1.5 : 0.9})">
      <g transform="translate(-120,-120)">
        ${jetSilhouette(ac, { size: 240, color: '#c9d6ea', fillOpacity: 0.95 })}
      </g>
    </g>
    <circle cx="${w*0.82}" cy="${h*0.18}" r="${big ? 3 : 2}" fill="#eaf6ff" opacity="0.8"/>
  </svg>`;
}

function renderGalleryFilters() {
  $('#galleryFilters').innerHTML = ['all', ...AIRCRAFT.map(a => a.id)].map(id => {
    const ac = AIRCRAFT.find(a => a.id === id);
    return `<button class="chip-filter ${state.galleryFilter === id ? 'active' : ''}" data-gallery-filter="${id}">
      ${id === 'all' ? 'All aircraft' : ac.name}
    </button>`;
  }).join('');
}

function renderGallery() {
  const list = GALLERY.filter(g => state.galleryFilter === 'all' || g.aircraftId === state.galleryFilter);
  $('#galleryGrid').innerHTML = list.map(item => `
    <button class="gallery-tile" data-lightbox="${item.id}">
      ${galleryArtSVG(item)}
      <span class="gallery-tile-caption">${item.aircraftName}</span>
    </button>`).join('');
}

function openLightbox(id) {
  const item = GALLERY.find(g => g.id === id);
  if (!item) return;
  $('#lightboxArt').innerHTML = galleryArtSVG(item, { big: true });
  $('#lightboxMeta').innerHTML = `
    <dl class="exif-strip">
      <div><dt>AIRCRAFT</dt><dd>${item.aircraftName}</dd></div>
      <div><dt>NATION</dt><dd>${item.flag} ${item.nation}</dd></div>
      <div><dt>SCENE</dt><dd>${item.sceneLabel}</dd></div>
      <div><dt>LOCATION</dt><dd>${item.location}</dd></div>
    </dl>`;
  $('#lightbox').classList.remove('hidden');
  $('#lightbox').dataset.current = id;
}

function stepLightbox(dir) {
  const list = GALLERY.filter(g => state.galleryFilter === 'all' || g.aircraftId === state.galleryFilter);
  const currentId = $('#lightbox').dataset.current;
  const idx = list.findIndex(g => g.id === currentId);
  const next = list[(idx + dir + list.length) % list.length];
  if (next) openLightbox(next.id);
}

/* -------------------------------------------------------------------------
   8. 3D INTERACTIVE DECK (three.js, procedural — no external model assets)
   ---------------------------------------------------------------------- */

let deckInitialized = false;
let renderer3d, scene3d, camera3d, controls3d, jetGroup3d, wireframeGroup3d;

const HOTSPOT_DEFS = [
  { key: 'cockpit', label: 'Cockpit / AESA Radar', local: [0, 6, 88],
    text: ac => `${ac.radar}. A wide-field cockpit display fuses sensor tracks into one picture for the pilot.` },
  { key: 'engine', label: 'Engine / Thrust', local: [0, -2, -96],
    text: ac => `${ac.engine}.${ac.thrustVectoring ? ' Vectoring nozzles redirect thrust for extreme low-speed control.' : ''}` },
  { key: 'coating', label: 'Airframe Coating', local: [60, 4, -10],
    text: ac => ac.stealthRating >= 4
      ? 'Radar-absorbent coatings and faceted, edge-aligned panels keep the airframe\u2019s radar cross-section low from the front.'
      : 'A conventional metal/composite airframe optimised for aerodynamics and maintainability over radar signature.' },
  { key: 'weapons', label: 'Weapons Bay', local: [-40, -6, 20],
    text: ac => `${ac.hardpoints} hardpoints${ac.hardpointsNote ? ` (${ac.hardpointsNote})` : ''}, up to ${fmtInt(ac.payloadKg)} kg of ordnance and fuel.` },
];

function buildJetMesh(aircraft) {
  const group = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x2a3550, metalness: 0.55, roughness: 0.35 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x161d30, metalness: 0.4, roughness: 0.5 });
  const canopyMat = new THREE.MeshStandardMaterial({ color: 0x00f0ff, metalness: 0.2, roughness: 0.1, emissive: 0x00333a, emissiveIntensity: 0.6 });

  // fuselage
  const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(6, 14, 190, 12), bodyMat);
  fuselage.rotation.x = Math.PI / 2;
  group.add(fuselage);

  // nose cone
  const nose = new THREE.Mesh(new THREE.ConeGeometry(6, 40, 12), darkMat);
  nose.rotation.x = -Math.PI / 2;
  nose.position.z = 115;
  group.add(nose);

  // canopy
  const canopy = new THREE.Mesh(new THREE.SphereGeometry(7, 12, 10, 0, Math.PI), canopyMat);
  canopy.rotation.x = Math.PI;
  canopy.scale.set(1, 0.7, 2.1);
  canopy.position.set(0, 9, 55);
  group.add(canopy);

  // wings
  const wingSpan = aircraft.id === 'f22' || aircraft.id === 'typhoon' ? 150 : 130;
  const wingGeo = new THREE.BoxGeometry(wingSpan, 2, 70);
  const wingL = new THREE.Mesh(wingGeo, darkMat);
  wingL.position.set(-wingSpan / 2 - 10, -2, -20);
  wingL.rotation.z = 0.06;
  const wingR = wingL.clone();
  wingR.position.x = wingSpan / 2 + 10;
  wingR.rotation.z = -0.06;
  group.add(wingL, wingR);

  // canards (if applicable)
  if (aircraft.canard) {
    const canardGeo = new THREE.BoxGeometry(40, 1.6, 24);
    const cL = new THREE.Mesh(canardGeo, darkMat);
    cL.position.set(-26, 4, 62);
    cL.rotation.z = 0.08;
    const cR = cL.clone();
    cR.position.x = 26;
    cR.rotation.z = -0.08;
    group.add(cL, cR);
  }

  // tail fins
  const finGeo = new THREE.BoxGeometry(2, 34, 46);
  if (aircraft.id === 'typhoon' || aircraft.id === 'rafale' || aircraft.id === 'gripen') {
    const fin = new THREE.Mesh(finGeo, darkMat);
    fin.position.set(0, 18, -88);
    group.add(fin);
  } else {
    const finL = new THREE.Mesh(finGeo, darkMat);
    finL.position.set(-22, 16, -88);
    finL.rotation.z = 0.25;
    const finR = finL.clone();
    finR.position.x = 22;
    finR.rotation.z = -0.25;
    group.add(finL, finR);
  }

  // engine nozzles (glow)
  const nozzleMat = new THREE.MeshStandardMaterial({ color: 0xffb700, emissive: 0xffb700, emissiveIntensity: 1.4, metalness: 0.2, roughness: 0.4 });
  const nozzleCount = aircraft.engines;
  for (let i = 0; i < nozzleCount; i++) {
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(5, 6, 14, 12), nozzleMat);
    nozzle.rotation.x = Math.PI / 2;
    const xOff = nozzleCount === 2 ? (i === 0 ? -8 : 8) : 0;
    nozzle.position.set(xOff, -2, -100);
    group.add(nozzle);
  }

  group.scale.setScalar(0.85);
  return group;
}

function buildWireframeClone(group) {
  const wf = new THREE.Group();
  group.traverse(obj => {
    if (obj.isMesh) {
      const edges = new THREE.EdgesGeometry(obj.geometry);
      const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x00f0ff }));
      line.position.copy(obj.position);
      line.rotation.copy(obj.rotation);
      line.scale.copy(obj.scale);
      wf.add(line);
    }
  });
  wf.scale.copy(group.scale);
  return wf;
}

function initDeckOnce() {
  if (deckInitialized) return;
  const canvas = $('#deckCanvas');
  if (!canvas || typeof THREE === 'undefined') return;
  deckInitialized = true;

  const viewport = $('#deckViewport');
  const w = viewport.clientWidth, h = viewport.clientHeight;

  renderer3d = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer3d.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer3d.setSize(w, h);

  scene3d = new THREE.Scene();
  camera3d = new THREE.PerspectiveCamera(45, w / h, 1, 2000);
  camera3d.position.set(260, 140, 320);

  scene3d.add(new THREE.AmbientLight(0x203050, 1.1));
  const key = new THREE.DirectionalLight(0x8fd9ff, 1.1);
  key.position.set(200, 300, 150);
  scene3d.add(key);
  const rim = new THREE.PointLight(0xffb700, 0.8, 800);
  rim.position.set(-200, 100, -200);
  scene3d.add(rim);

  // grid floor
  const grid = new THREE.GridHelper(600, 24, 0x1c3a52, 0x131e30);
  grid.position.y = -60;
  scene3d.add(grid);

  controls3d = new THREE.OrbitControls(camera3d, renderer3d.domElement);
  controls3d.enableDamping = true;
  controls3d.dampingFactor = 0.08;
  controls3d.minDistance = 140;
  controls3d.maxDistance = 620;
  controls3d.autoRotate = state.deck.autoRotate;
  controls3d.autoRotateSpeed = 1.4;

  loadDeckAircraft(state.deck.aircraftId);
  buildHotspotDOM();

  window.addEventListener('resize', onDeckResize);
  animateDeck();
}

function onDeckResize() {
  if (!renderer3d || state.view !== 'deck') return;
  const viewport = $('#deckViewport');
  const w = viewport.clientWidth, h = viewport.clientHeight;
  camera3d.aspect = w / h;
  camera3d.updateProjectionMatrix();
  renderer3d.setSize(w, h);
}

function loadDeckAircraft(id) {
  const aircraft = AIRCRAFT.find(a => a.id === id);
  if (jetGroup3d) scene3d.remove(jetGroup3d);
  if (wireframeGroup3d) scene3d.remove(wireframeGroup3d);
  jetGroup3d = buildJetMesh(aircraft);
  wireframeGroup3d = buildWireframeClone(jetGroup3d);
  jetGroup3d.visible = !state.deck.wireframe;
  wireframeGroup3d.visible = state.deck.wireframe;
  scene3d.add(jetGroup3d, wireframeGroup3d);

  $('#deckJetName').textContent = aircraft.name;
  $$('.deck-jet-chip').forEach(c => c.classList.toggle('active', c.dataset.jet === id));
  updateHotspotInfo(null);
}

function buildHotspotDOM() {
  const overlay = $('#deckHotspots');
  overlay.innerHTML = HOTSPOT_DEFS.map(h => `
    <button class="hotspot" data-hotspot="${h.key}" style="display:none">
      <span class="hotspot-dot"></span>
      <span class="hotspot-label">${h.label}</span>
    </button>`).join('');
}

function updateHotspotInfo(key) {
  const panel = $('#deckInfoPanel');
  if (!key) {
    panel.innerHTML = `<p class="deck-info-hint">Tap a hotspot on the model — cockpit, engine, coating, or weapons bay — for a quick read.</p>`;
    return;
  }
  const aircraft = AIRCRAFT.find(a => a.id === state.deck.aircraftId);
  const def = HOTSPOT_DEFS.find(h => h.key === key);
  panel.innerHTML = `<h4>${def.label}</h4><p>${def.text(aircraft)}</p>`;
}

function animateDeck() {
  requestAnimationFrame(animateDeck);
  if (!renderer3d || state.view !== 'deck') return;
  controls3d.update();

  const overlay = $('#deckHotspots');
  const rect = overlay.getBoundingClientRect();
  const activeGroup = state.deck.wireframe ? wireframeGroup3d : jetGroup3d;

  HOTSPOT_DEFS.forEach(h => {
    const btn = overlay.querySelector(`[data-hotspot="${h.key}"]`);
    if (!btn || !activeGroup) return;
    const v = new THREE.Vector3(...h.local).multiplyScalar(0.85);
    v.project(camera3d);
    if (v.z > 1) { btn.style.display = 'none'; return; }
    const x = (v.x * 0.5 + 0.5) * rect.width;
    const y = (-v.y * 0.5 + 0.5) * rect.height;
    btn.style.display = 'flex';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
    btn.classList.toggle('active', state.deck.activeHotspot === h.key);
  });

  renderer3d.render(scene3d, camera3d);
}

/* -------------------------------------------------------------------------
   9. GLOBAL EVENT WIRING
   ---------------------------------------------------------------------- */

function wireEvents() {
  // Nav tabs
  $$('.tab-btn').forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));

  // Search
  $('#searchInput').addEventListener('input', e => {
    state.filters.search = e.target.value;
    renderHangar();
  });

  // Filter panel toggle
  $('#filterToggle').addEventListener('click', () => $('#filterPanel').classList.toggle('hidden'));

  // Generation filter
  $$('.gen-filter').forEach(btn => btn.addEventListener('click', () => {
    state.filters.generation = btn.dataset.value;
    renderFilterOptions();
    renderHangar();
  }));

  // Delegated: nation/role chips, gallery filter chips
  document.body.addEventListener('click', e => {
    const chip = e.target.closest('.chip-filter[data-filter]');
    if (chip) {
      state.filters[chip.dataset.filter] = chip.dataset.value;
      renderFilterOptions();
      renderHangar();
      return;
    }
    const galleryChip = e.target.closest('[data-gallery-filter]');
    if (galleryChip) {
      state.galleryFilter = galleryChip.dataset.galleryFilter;
      renderGalleryFilters();
      renderGallery();
      return;
    }
  });

  $('#clearFiltersBtn').addEventListener('click', clearFilters);

  // Hangar card interactions (delegated)
  $('#hangarGrid').addEventListener('click', e => {
    const compareBtn = e.target.closest('[data-compare]');
    if (compareBtn) { toggleCompare(compareBtn.dataset.compare); return; }
    const card = e.target.closest('.jet-card');
    if (card) openDetail(card.dataset.id);
  });

  // Compare tray
  $('#compareTrayClose').addEventListener('click', () => {
    state.compare = [];
    renderHangar();
    renderCompareTray();
  });
  $('#compareChips').addEventListener('click', e => {
    const rm = e.target.closest('[data-remove-compare]');
    if (rm) toggleCompare(rm.dataset.removeCompare);
  });

  // Detail modal
  $('#detailModalClose').addEventListener('click', () => $('#detailModal').classList.add('hidden'));
  $('#detailModal').addEventListener('click', e => {
    if (e.target.id === 'detailModal') $('#detailModal').classList.add('hidden');
    const goDeck = e.target.closest('[data-view-deck]');
    if (goDeck) {
      state.deck.aircraftId = goDeck.dataset.viewDeck;
      $('#detailModal').classList.add('hidden');
      setView('deck');
      if (deckInitialized) loadDeckAircraft(state.deck.aircraftId);
    }
  });

  // Spotter tabs
  $$('.region-tab').forEach(b => b.addEventListener('click', () => { state.spotter.region = b.dataset.region; renderSpotter(); }));
  $$('.category-tab').forEach(b => b.addEventListener('click', () => { state.spotter.category = b.dataset.category; renderSpotter(); }));

  // Gallery lightbox
  $('#galleryGrid').addEventListener('click', e => {
    const tile = e.target.closest('[data-lightbox]');
    if (tile) openLightbox(tile.dataset.lightbox);
  });
  $('#lightboxClose').addEventListener('click', () => $('#lightbox').classList.add('hidden'));
  $('#lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') $('#lightbox').classList.add('hidden'); });
  $('#lightboxPrev').addEventListener('click', () => stepLightbox(-1));
  $('#lightboxNext').addEventListener('click', () => stepLightbox(1));

  // Deck controls
  $('#autoRotateToggle').addEventListener('click', () => {
    state.deck.autoRotate = !state.deck.autoRotate;
    if (controls3d) controls3d.autoRotate = state.deck.autoRotate;
    $('#autoRotateToggle').classList.toggle('active', state.deck.autoRotate);
  });
  $('#wireframeToggle').addEventListener('click', () => {
    state.deck.wireframe = !state.deck.wireframe;
    if (jetGroup3d) jetGroup3d.visible = !state.deck.wireframe;
    if (wireframeGroup3d) wireframeGroup3d.visible = state.deck.wireframe;
    $('#wireframeToggle').classList.toggle('active', state.deck.wireframe);
  });
  $('#resetCamBtn').addEventListener('click', () => {
    if (!camera3d || !controls3d) return;
    camera3d.position.set(260, 140, 320);
    controls3d.target.set(0, 0, 0);
    controls3d.update();
  });
  $('#deckJetChips').addEventListener('click', e => {
    const chip = e.target.closest('.deck-jet-chip');
    if (!chip) return;
    state.deck.aircraftId = chip.dataset.jet;
    if (deckInitialized) loadDeckAircraft(state.deck.aircraftId);
  });
  $('#deckHotspots').addEventListener('click', e => {
    const btn = e.target.closest('.hotspot');
    if (!btn) return;
    const key = btn.dataset.hotspot;
    state.deck.activeHotspot = state.deck.activeHotspot === key ? null : key;
    updateHotspotInfo(state.deck.activeHotspot);
  });
  $('#glbFileInput').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const mv = $('#modelViewerEl');
    mv.src = url;
    $('#modelViewerWrap').classList.remove('hidden');
    $('#deckViewport').classList.add('hidden');
  });
  $('#glbClearBtn').addEventListener('click', () => {
    $('#modelViewerWrap').classList.add('hidden');
    $('#deckViewport').classList.remove('hidden');
    $('#glbFileInput').value = '';
  });

  // Escape key closes overlays
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAllOverlays(); });

  // Mobile nav toggle
  $('#navToggle').addEventListener('click', () => $('.tabs').classList.toggle('open'));
}

function renderDeckJetChips() {
  $('#deckJetChips').innerHTML = AIRCRAFT.map(ac => `
    <button class="deck-jet-chip ${ac.id === state.deck.aircraftId ? 'active' : ''}" data-jet="${ac.id}">${ac.name.split(' ')[0]}</button>
  `).join('');
}

function startClock() {
  const el = $('#liveClock');
  if (!el) return;
  const tick = () => {
    const now = new Date();
    el.textContent = now.toUTCString().slice(17, 25) + ' UTC';
  };
  tick();
  setInterval(tick, 1000);
}

/* -------------------------------------------------------------------------
   10. INIT
   ---------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  renderFilterOptions();
  renderHangar();
  renderCompareTray();
  renderSpotter();
  renderGalleryFilters();
  renderGallery();
  renderDeckJetChips();
  wireEvents();
  startClock();
  if (window.lucide) lucide.createIcons();
  setView('hangar');
});
