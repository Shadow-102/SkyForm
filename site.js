const LB=['Top speed','Combat radius','Service ceiling','Engine thrust','Max takeoff weight','Thrust-to-weight','First flight','Hardpoints','Radar cross-section'];
const J=[
{id:'f35',n:'F-35 Lightning II',m:'Lockheed Martin, United States',g:'5th generation',r:'Stealth multirole',f:'Sensor fusion and stealth',h:210,
 img:'Front-angle atmospheric shot of an F-35A over cloud tops at dusk',
 s:[[1.6,'Mach',1,'about 1,960 km/h'],[1093,'km',0,'internal fuel, F-35A'],[15240,'m',0,'50,000 ft'],[191,'kN',0,'1 x F135, afterburning'],[31800,'kg',0,'70,000 lb']],
 ff:2006,hp:[10,'4 internal, 6 external'],rcs:'≈0.001 m²',
 ov:'The F-35 merges its AESA radar, electro-optical targeting and six-camera distributed aperture system into one fused picture, then shares it across the formation. Low-observable shaping and internal bays keep its signature small, so one aircraft can find, track and engage targets before it is detected.',
 dv:'Born from the Joint Strike Fighter program, where Lockheed\'s X-35 won in 2001. One design, three variants: A (runway), B (short takeoff, vertical landing), C (carrier).',
 nb:'Israel reported the first combat use of the F-35I in May 2018.',
 av:[['Radar','AN/APG-81 AESA'],['Electro-optical','AN/AAQ-40 EOTS, AN/AAQ-37 DAS'],['EW suite','AN/ASQ-239 Barracuda'],['Gun','GAU-22/A 25 mm']],
 ar:[['Stations','4 internal, 6 external pylons'],['Payload','about 8,160 kg (18,000 lb)'],['Air-to-air','AIM-120 AMRAAM, AIM-9X'],['Air-to-ground','JDAM, SDB, JSM']]},
{id:'gripen-e',n:'Saab JAS 39 Gripen E',m:'Saab, Sweden',g:'4.5 generation',r:'Multirole, dispersed operations',f:'Electronic warfare and short-runway capability',h:150,
 img:'Low-angle Gripen E on a forest road base, morning mist',
 s:[[2.0,'Mach',1,'about 2,470 km/h at altitude'],[1500,'km',0,'configuration dependent'],[15240,'m',0,'50,000 ft'],[98,'kN',0,'1 x F414-GE-39E, afterburning'],[16500,'kg',0,'36,400 lb']],
 ff:2017,hp:[10,'weapon stations'],rcs:'≈0.1 to 1 m²',
 ov:'Saab built the Gripen E to be flown and maintained from dispersed road bases, taking off and landing in roughly 800 m. Its Arexis electronic warfare suite, repositionable Raven AESA radar and IRST give it a strong sensor and self-protection package, with open architecture for fast updates.',
 dv:'The E model is a major redesign of the Gripen C/D that first flew in 1988: bigger airframe, F414 engine, new sensors. First flight of the E was in 2017.',
 nb:'Sweden flew eight Gripen C fighters in NATO\'s 2011 Libya operation.',
 av:[['Radar','Raven ES-05 AESA, repositionable'],['IRST','Skyward-G'],['EW suite','Arexis'],['Gun','Mauser BK-27 27 mm']],
 ar:[['Stations','10 weapon stations'],['Payload','about 6,500 kg'],['Air-to-air','Meteor, IRIS-T, AIM-9'],['Strike','Taurus KEPD 350']]},
{id:'f22',n:'F-22 Raptor',m:'Lockheed Martin, United States',g:'5th generation',r:'Air superiority',f:'Air superiority and supercruise',h:225,
 img:'Side-profile F-22 in a vertical climb against a dark stratospheric sky',
 s:[[2.25,'Mach',2,'supercruise about Mach 1.5'],[850,'km',0,'clean, with 185 km supercruise'],[19800,'m',0,'65,000 ft'],[312,'kN',0,'2 x F119-PW-100, afterburning'],[37870,'kg',0,'83,500 lb']],
 ff:1997,hp:[4,'external, plus 3 internal bays'],rcs:'≈0.0001 to 0.001 m²',
 ov:'The F-22 cruises supersonically without afterburner, flies higher than most opponents and carries a very low radar signature. Integrated sensors let the pilot shoot first, and two-dimensional thrust vectoring keeps it agile where the air is thin.',
 dv:'Winner of the Advanced Tactical Fighter competition in 1991 (YF-22 over YF-23). In US Air Force service since 2005; production ended in 2011 after 195 aircraft.',
 nb:'First combat missions were strikes on Islamic State targets in Syria, September 2014.',
 av:[['Radar','AN/APG-77 AESA'],['Passive sensing','AN/ALR-94 warning system'],['Datalink','IFDL, intra-flight'],['Gun','M61A2 20 mm']],
 ar:[['Internal bays','6 x AIM-120, 2 x AIM-9X'],['Strike','2 x 1,000 lb JDAM or 8 x SDB'],['External','4 wing pylons, fuel tanks'],['Payload','internal carriage by default']]},
{id:'mig29',n:'MiG-29 Fulcrum',m:'Mikoyan, Soviet Union and Russia',g:'4th generation',r:'Air superiority, close combat',f:'Twin-engine maneuverability and legacy',h:30,
 img:'Head-on MiG-29 with afterburners lit, hard bank at low altitude',
 s:[[2.25,'Mach',2,'about 2,400 km/h at altitude'],[710,'km',0,'air-to-air, internal fuel'],[18000,'m',0,'59,000 ft'],[163,'kN',0,'2 x RD-33, afterburning'],[18500,'kg',0,'40,800 lb']],
 ff:1977,hp:[6,'under-wing pylons'],rcs:'≈5 m²',
 ov:'Two RD-33 engines and a blended wing-body give the MiG-29 exceptional low-speed handling. A helmet-mounted sight paired with R-73 missiles made it formidable in a turning fight, and dozens of air forces still fly it.',
 dv:'Designed in the 1970s as the Soviet answer to the F-15 and F-16. First flight 1977, service entry in the early 1980s, then exported worldwide.',
 nb:'Flown in combat by Iraq in 1991 and Serbia in 1999; its close-combat edge was its helmet sight and R-73.',
 av:[['Radar','N019 Sapfir-29 pulse-Doppler'],['IRST','OLS-29 with laser rangefinder'],['Helmet sight','Shchel-3UM'],['Gun','GSh-30-1 30 mm']],
 ar:[['Stations','6 under-wing pylons'],['Payload','about 3,000 kg'],['Air-to-air','R-73, R-27, R-60'],['Strike','unguided rockets, bombs']]},
{id:'su57',n:'Su-57 Felon',m:'Sukhoi, Russia',g:'5th generation',r:'Air superiority, strike',f:'Thrust-vectoring agility and payload',h:190,
 img:'Su-57 in a high-angle maneuver, nozzles deflected, against storm light',
 s:[[2.0,'Mach',1,'about 2,100 km/h, OEM stated'],[1250,'km',0,'est., internal fuel'],[20000,'m',0,'65,600 ft'],[294,'kN',0,'2 x Izdeliye 117, est.'],[35000,'kg',0,'77,200 lb']],
 ff:2010,hp:[12,'est., internal and external'],rcs:'≈0.1 to 1 m²',
 ov:'The Su-57 combines a stealth-shaped airframe with three-dimensional thrust-vectoring engines and large internal bays. Vectored nozzles and all-moving tail surfaces sustain high-angle maneuvering while carrying several tonnes of weapons.',
 dv:'Grew out of the PAK FA program. First flight January 2010; first production aircraft reached Russian forces in December 2020.',
 nb:'Russia says Su-57s have flown combat sorties over Ukraine; independent verification is limited.',
 av:[['Radar','N036 Byelka AESA, L-band arrays'],['Electro-optical','101KS suite'],['Gun','GSh-30-1 30 mm'],['Flight control','3D thrust vectoring']],
 ar:[['Bays','2 main, 2 side internal'],['Payload','about 7,400 kg, est.'],['Air-to-air','R-77M, R-74M'],['Strike','Kh-59MK2']]},
{id:'rafale',n:'Dassault Rafale',m:'Dassault Aviation, France',g:'4.5 generation',r:'Omnirole, carrier capable',f:'Omnirole capability and nuclear deterrence',h:25,
 img:'Rafale M launching from a carrier deck at first light',
 s:[[1.8,'Mach',1,'about 1,910 km/h at altitude'],[1850,'km',0,'OEM, strike configuration'],[15235,'m',0,'50,000 ft'],[150,'kN',0,'2 x M88-2, afterburning'],[24500,'kg',0,'54,000 lb']],
 ff:1986,hp:[14,'13 on Rafale M'],rcs:'≈1 m²',
 ov:'Air defense, deep strike, reconnaissance and carrier operations from one airframe, often in a single sortie. The delta-canard layout, SPECTRA self-protection and OSF infrared search and track support that range, and it carries the ASMP-A nuclear missile for the French airborne deterrent.',
 dv:'France left the Eurofighter consortium and built the Rafale A demonstrator, which flew in 1986. Operational service began in 2001 with the French Navy.',
 nb:'Flew from the opening days of the 2011 Libya campaign and in Mali in 2013.',
 av:[['Radar','RBE2-AA AESA'],['EW suite','SPECTRA'],['IRST','OSF, optronic'],['Gun','GIAT 30/719B 30 mm']],
 ar:[['Stations','14 (13 on Rafale M)'],['Payload','about 9,500 kg'],['Air-to-air','Meteor, MICA'],['Strike','SCALP-EG, AASM Hammer, Exocet, ASMP-A nuclear']]},
{id:'typhoon',n:'Eurofighter Typhoon',m:'Eurofighter GmbH, UK, Germany, Italy, Spain',g:'4.5 generation',r:'Air superiority, swing role',f:'High-altitude interception and delta-wing agility',h:200,
 img:'Typhoon in steep climb, afterburners lit, contrail against deep blue',
 s:[[2.0,'Mach',1,'about 2,490 km/h at altitude'],[1390,'km',0,'air-to-air, external tanks'],[16760,'m',0,'55,000 ft'],[180,'kN',0,'2 x EJ200, afterburning'],[23500,'kg',0,'51,800 lb']],
 ff:1994,hp:[13,'weapon and fuel stations'],rcs:'≈0.5 to 1 m²',
 ov:'A delta-canard twin-engine fighter built for supersonic interception and air dominance. Its high thrust-to-weight ratio delivers fast climb and acceleration, and an unstable airframe under digital flight control gives it sharp handling. The Captor-E AESA is bringing the fleet up to date.',
 dv:'Conceived as a four-nation European fighter. The first prototype flew in 1994 and service entry followed in the early 2000s.',
 nb:'RAF Typhoons flew ground-attack and air-policing missions over Libya in 2011 and stand on Quick Reaction Alert across Europe.',
 av:[['Radar','Captor-E AESA, Captor-M on earlier tranches'],['IRST','PIRATE'],['EW suite','DASS'],['Gun','Mauser BK-27 27 mm']],
 ar:[['Stations','13 hardpoints'],['Payload','about 9,000 kg'],['Air-to-air','Meteor, IRIS-T, AMRAAM, ASRAAM'],['Strike','Storm Shadow, Brimstone, Paveway IV']]},
{id:'j20',n:'Chengdu J-20 Mighty Dragon',m:'Chengdu Aerospace, China',g:'5th generation',r:'Long-range interception',f:'Long-range interception and stealth',h:280,
 img:'Three-quarter J-20 in clean configuration above a high-altitude cloud layer',
 s:[[2.0,'Mach',1,'est., unofficial'],[2000,'km',0,'est., unofficial'],[20000,'m',0,'est., 65,600 ft'],[280,'kN',0,'2 x WS-10C class, est.'],[37000,'kg',0,'est., 81,600 lb']],
 ff:2011,hp:[6,'est., internal bays'],rcs:'≈0.01 to 0.1 m²',
 ov:'A large twin-engine canard-delta stealth fighter optimized for long-range interception. Its size supports substantial fuel and sensor capacity, consistent with missions against tankers, airborne early warning aircraft and other high-value targets at great distance.',
 dv:'First flew in January 2011 and was declared operational in 2017. Most published figures are outside estimates.',
 nb:'Shown publicly at Airshow China in 2016; no confirmed combat use.',
 av:[['Radar','Type 1475 (KLJ-7A) AESA'],['Electro-optical','EOTS-89 targeting, DAS ring'],['Gun','none'],['Datalink','not publicly documented']],
 ar:[['Main bay','PL-15 long-range missiles'],['Side bays','PL-10 short-range missiles'],['External','fuel tanks or extra missiles'],['Payload','unpublished']]}
];
const A=[
{d:'19 to 20 Sep 2026',n:'Dny NATO and Czech Air Force Days',p:'Leoš Janáček Airport, Ostrava, Czech Republic',l:['Eurofighter Typhoon (Italy, Spain)','F-16 demo teams','Tornado (Germany)','Red Arrows'],s:'Completed'},
{d:'10 to 15 Nov 2026',n:'Airshow China',p:'Zhuhai, Guangdong, China. Public days 13 to 15 Nov',l:['J-20 (flown at recent editions)','Lineup not yet confirmed'],s:'Upcoming'},
{d:'14 to 20 Jun 2027',n:'Paris Air Show',p:'Le Bourget, France. Public days 18 to 20 Jun',l:['Rafale','Eurofighter Typhoon','Gripen','F-35'],s:'Upcoming, lineup from past editions'},
{d:'16 to 18 Jul 2027',n:'Royal International Air Tattoo (RIAT)',p:'RAF Fairford, Gloucestershire, United Kingdom',l:['Eurofighter Typhoon','F-35','Rafale','Gripen'],s:'Upcoming, lineup from past editions'},
{d:'18 to 19 Sep 2027',n:'Dny NATO and Czech Air Force Days',p:'Leoš Janáček Airport, Ostrava, Czech Republic',l:['Typhoon (2026)','Gripen E (2023)','Lineup to be announced'],s:'Provisional dates'}
];
const S=[
{n:'Segway GT3 Pro',t:'Flagship. Rated for private land only',v:[80,'km/h',0],r:[138,'km',0],m:[7000,'W peak',0],w:[53.1,'kg',1],x:'Dual 3,500 W hub motors, 2,160 Wh battery. Range quoted at 25 km/h.'},
{n:'Segway GT3 E',t:'Speed-limited, long range',v:[25,'km/h',0],r:[95,'km',0],m:[2400,'W peak',0],w:[39.5,'kg',1],x:'700 W nominal, 899 Wh battery. Range quoted at 15 km/h; 75 km at 25 km/h.'},
{n:'NIU KQi3 Max',t:'Lightest of the three',v:[25,'km/h',0],r:[65,'km',0],m:[900,'W peak',0],w:[21.1,'kg',1],x:'450 W nominal, 608 Wh battery. Some markets list up to 38 km/h unlocked.'}
];

const X={
 "f35": {
  "op": [
   "United States",
   "United Kingdom",
   "Italy",
   "Netherlands",
   "Norway",
   "Denmark",
   "Australia",
   "Israel",
   "Japan",
   "South Korea",
   "Singapore"
  ],
  "od": [
   "Belgium",
   "Finland",
   "Poland",
   "Germany",
   "Switzerland",
   "Canada",
   "Romania",
   "Czech Republic",
   "Greece"
  ],
  "on": "By mid-2026 about 13 countries flew the F-35 and about 20 had placed orders, the largest order book of any Western fighter. Several nations in the second row are receiving their first aircraft now or have signed for future delivery.",
  "ab": "Three variants share most of their systems: the F-35A for air forces, the F-35B with a lift fan for short takeoff and vertical landing from small decks, and the F-35C with larger wings for carriers. A common software and support system lets allied pilots and maintainers work across nations.",
  "fun": "Six cameras around the airframe feed the pilot's helmet display, so the pilot can look through the floor of the aircraft at the ground below."
 },
 "gripen-e": {
  "op": [
   "Sweden",
   "Brazil"
  ],
  "od": [
   "Thailand",
   "Colombia"
  ],
  "on": "The earlier Gripen C/D also serves in the Czech Republic, Hungary, South Africa and Thailand. Brazil assembles Gripen E at Embraer in São Paulo, and Ukraine signed a letter of intent in October 2025 covering up to 150 aircraft.",
  "ab": "The Gripen E is a single-engine fighter that is lighter and cheaper to operate than most rivals. It is designed so a small crew can rearm and refuel it on a road strip, and Saab sells it with local industrial partnerships and regular software upgrades.",
  "fun": "Saab says a small crew of conscripts can rearm and refuel a Gripen in around ten minutes."
 },
 "f22": {
  "op": [
   "United States"
  ],
  "od": [],
  "on": "The US Air Force is the only operator. A US export ban in force since 1998 means no ally has ever flown the Raptor.",
  "ab": "The Raptor combines stealth, supercruise, thrust vectoring and fused sensors in one airframe, so it can detect, track and engage threats before they see it. Only 195 were built, so each aircraft is a precious asset. Its nozzles swing up and down about 20 degrees, which helps it pitch sharply even at very high altitude.",
  "fun": "In 2007, F-22s crossing the International Date Line on their way to Japan lost navigation and communications when their software crashed. They followed their tankers home."
 },
 "mig29": {
  "op": [
   "Russia",
   "India",
   "Serbia",
   "Algeria",
   "Iran",
   "Egypt",
   "Belarus",
   "Ukraine",
   "Myanmar",
   "Peru"
  ],
  "od": [],
  "on": "Dozens of countries have flown the MiG-29 over its history. The list shows some current operators; several former Warsaw Pact states have retired or replaced theirs.",
  "ab": "Its twin-engine, twin-fin layout lets pilots fly and recover from extreme angles of attack. Versions range from the original Fulcrum-A to the multirole MiG-29M and MiG-35, and many operators have upgraded older airframes with new radar and weapons.",
  "fun": "On takeoff the main engine intakes close and air enters through louvres on top of the wings, which keeps runway debris out of the engines."
 },
 "su57": {
  "op": [
   "Russia"
  ],
  "od": [
   "Algeria (reported)"
  ],
  "on": "Russia is the only officially confirmed operator. Algeria is widely reported as the first export customer, but neither government has confirmed it. Russia says more Su-57E export contracts exist but has not named buyers.",
  "ab": "Its widely spaced engines, flat-sided airframe and internal bays are designed to reduce radar return while keeping speed and payload. Russia has been developing a more powerful second-stage engine to replace the engines used on current aircraft.",
  "fun": "Russia has flown the S-70 Okhotnik, a large stealth drone, as a loyal wingman alongside the Su-57."
 },
 "rafale": {
  "op": [
   "France",
   "India",
   "Egypt",
   "Qatar",
   "Greece",
   "Croatia"
  ],
  "od": [
   "United Arab Emirates",
   "Indonesia",
   "Serbia"
  ],
  "on": "France plus eight export customers have chosen the Rafale. The UAE order for 80 is the largest export order in Dassault's history, and India has also ordered 26 Rafale M for its navy.",
  "ab": "The Rafale comes as the single-seat C, the two-seat B and the carrier-based M, which flies from the French carrier Charles de Gaulle. The SPECTRA suite is designed to detect, identify and jam threats automatically. The F4 standard adds upgrades such as satellite communications, and an F5 standard is in development.",
  "fun": "\"Rafale\" is French for a gust of wind. In artillery language it also means a burst of fire."
 },
 "typhoon": {
  "op": [
   "United Kingdom",
   "Germany",
   "Italy",
   "Spain",
   "Austria",
   "Saudi Arabia",
   "Kuwait",
   "Oman",
   "Qatar"
  ],
  "od": [
   "Türkiye (20 ordered)"
  ],
  "on": "Nine air forces fly the Typhoon. Türkiye signed for 20 new aircraft in October 2025, with first delivery scheduled for 2030.",
  "ab": "Each partner nation builds sections of the aircraft, and final assembly lines run in all four. Later tranches add the Captor-E AESA radar and a larger weapons selection, and the fleet has passed one million flight hours.",
  "fun": "The pilot can control some systems just by speaking, using direct voice input."
 },
 "j20": {
  "op": [
   "China"
  ],
  "od": [],
  "on": "Only the People's Liberation Army Air Force flies the J-20, and no export customer has been confirmed.",
  "ab": "Observers note large internal bays, a long fuselage consistent with high fuel capacity, and canards combined with a delta wing. Newer aircraft use more powerful domestic engines, and a two-seat version has been shown.",
  "fun": "Its first flight was on 11 January 2011, during a visit to Beijing by then US Defense Secretary Robert Gates."
 }
};


/* MOTION SPEC
   Panel cascade     : 1000ms expo-out (.16,1,.3,1), y 28 to 0, blur 8 to 0; 50ms between panels, 50ms between spec cells
   Photo crossfade   : 1200ms opacity (.65,0,.35,1) plus scale 1.05 to 1.0 (1200ms expo-out)
   Content switch    : 280ms out, swap, 280ms in
   Count-up          : 1600ms easeOutExpo on reveal
   Magnetic hover    : spring, stiffness .14, damping .8 (overshoots slightly, then settles); pull .25x / .35x cursor offset
   Parallax          : photo layer translateY = scrollY * -0.08, clamped to 5% of screen height
   Radar             : 4s linear sweep; 4 blips, 5.3 to 8.4s cycles, offset delays
   IMAGES            : sharp 16:9 frame (feathered) over a blurred fill, so any resolution looks the same size; files under 1500px wide get a smaller frame; optional cr:'credit' per jet; drop files in assets/jets/<id>.jpg; add pos:'x% y%' to a jet to set its focal point; gradient shows if a file is missing */
const $=s=>document.querySelector(s), rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const dl=a=>'<dl>'+a.map(x=>`<dt>${x[0]}</dt><dd>${x[1]}</dd>`).join('')+'</dl>';
const miss=new Set(), cap=i=>miss.has(i)?`[4K Image: ${J[i].img}]`:(J[i].cr?`Photo: ${J[i].cr}`:'');
const photos=$('#photos'), rail=$('#rail'); let cur=0, busy=false;
J.forEach((j,i)=>{
  {const src=`assets/jets/${j.id}.jpg`;
  photos.insertAdjacentHTML('beforeend',`<figure class="photo" style="--h:${j.h};--pos:${j.pos||'68% 50%'}"><img class="bg" src="${src}" alt="" aria-hidden="true" decoding="async"><div class="frame"><img class="fg" src="${src}" alt="${j.n}" decoding="async"></div></figure>`);
  const fig=photos.lastElementChild;
  fig.querySelectorAll('img').forEach(im=>{
    const ok=()=>{im.classList.add('ld');if(im.classList.contains('fg')&&im.naturalWidth<1500)fig.querySelector('.frame').classList.add('lo')};
    const bad=()=>{miss.add(i);fig.querySelectorAll('img').forEach(x=>x.remove());if(cur===i){const sl=$('.slot');if(sl)sl.textContent=cap(i)}};
    im.addEventListener('load',ok);im.addEventListener('error',bad);
    if(im.complete)(im.naturalWidth?ok:bad)();
  });}
  rail.insertAdjacentHTML('beforeend',`<button class="mag" aria-label="${j.n}" data-i="${i}"><span class="xh"><i></i></span><span class="lab">${j.n}</span></button>`);
});
[['air','Airshows'],['mob','Tarmac mobility']].forEach((g,k)=>rail.insertAdjacentHTML('beforeend',`<button class="mag${k?'':' gap'}" data-go="${g[0]}"><span class="xh"><i></i></span><span class="lab">${g[1]}</span></button>`));
$('#tl').innerHTML=A.map(e=>`<article class="panel ev${e.s==='Completed'?' done':''}"><div class="d">${e.d}</div><h4>${e.n}</h4><p class="p">${e.p}</p><div class="chips">${e.l.map(x=>`<span>${x}</span>`).join('')}</div><p class="note" style="margin-top:12px">${e.s}</p></article>`).join('');
$('#cards').innerHTML=S.map(s=>`<article class="panel sc"><h4>${s.n}</h4><p class="tag">${s.t}</p>
${[['Top speed',s.v],['Range',s.r],['Motor wattage',s.m],['Weight',s.w]].map(r=>`<div class="row"><span>${r[0]}</span><b><i class="n" style="font-style:normal" data-t="${r[1][0]}" data-d="${r[1][2]}">0</i><small>${r[1][1]}</small></b></div>`).join('')}
<p class="note">${s.x}</p></article>`).join('');

function view(j,i){
  const x=X[j.id]||{op:[],od:[]}, nx=J[(i+1)%J.length], tw=(j.s[3][0]*1000/(j.s[4][0]*9.80665)).toFixed(2);
  const cells=[...j.s.map((s,k)=>[LB[k],s[0],s[1],s[2],s[3]]),[LB[5],+tw,'',2,'thrust divided by max takeoff weight'],[LB[6],j.ff,'',0,'',1],[LB[7],j.hp[0],'',0,j.hp[1]],[LB[8],null,'',0,'outside estimate, frontal aspect']];
  return `<section class="hero"><h1>${j.n}</h1><p class="focus">${j.f}</p>
  <p class="meta"><span>${j.m}</span><span>${j.g}</span><span>${j.r}</span></p>
  <div class="slot">${cap(i)}</div></section>
  <div class="body">
  <section class="panel"><h2>Telemetry and specs</h2><div class="specs">
  ${cells.map((c,k)=>`<div class="spec" style="--i:${k}"><div class="l">${c[0]}</div><div class="v">${c[1]===null?`<span class="t">${j.rcs}</span>`:`<span class="n" data-t="${c[1]}" data-d="${c[3]}" data-g="${c[5]?0:1}">0</span><small>${c[2]}</small>`}</div><div class="s">${c[4]}</div></div>`).join('')}
  </div></section>
  <div class="two"><section class="panel ov-d"><h2>Tactical overview</h2><p class="ov">${j.ov}</p><p class="ov">${x.ab||''}</p>${dl([['Development',j.dv],['Defining moment',j.nb]])}</section>
  <section class="panel acc"><h2>Avionics and armament</h2>
  <button aria-expanded="true">Sensors and electronic systems</button><div class="drop open"><div>${dl(j.av)}</div></div>
  <button aria-expanded="false">Hardpoints and payload</button><div class="drop"><div>${dl(j.ar)}</div></div></section></div>
  <div class="two"><section class="panel"><h2>Where it serves</h2>
  <p class="grp">In service</p><div class="chips sv">${x.op.map(c=>`<span>${c}</span>`).join('')}</div>
  ${x.od.length?`<p class="grp">Ordered or entering service</p><div class="chips sv">${x.od.map(c=>`<span class="dim">${c}</span>`).join('')}</div>`:''}
  <p class="ov" style="margin:0">${x.on||''}</p></section>
  <section class="panel"><h2>Fun fact</h2><p class="fun">${x.fun||''}</p></section></div>
  <footer><p class="note">Figures are open-source or manufacturer-stated. Values marked est. are unofficial. Radar cross-section is an outside estimate; true values are classified.</p>
  <span class="mag"><button class="ln" data-i="${(i+1)%J.length}">Next: ${nx.n}</button></span></footer></div>`;
}
function count(el){
  if(el.dataset.done)return; el.dataset.done=1;
  const t=+el.dataset.t, d=+el.dataset.d, g=el.dataset.g!=='0', fmt=v=>v.toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d,useGrouping:g});
  if(rm){el.textContent=fmt(t);return}
  const st=performance.now();
  (function f(n){const p=Math.min((n-st)/1600,1);el.textContent=fmt(p<1?t*(1-Math.pow(2,-10*p)):t);if(p<1)requestAnimationFrame(f)})(st);
}
/* one observer: batches reveal with a 50ms cascade */
const obs=new IntersectionObserver(es=>es.filter(e=>e.isIntersecting).forEach((e,k)=>{
  const t=e.target; t.style.transitionDelay=k*50+'ms'; t.classList.add('in');
  t.querySelectorAll('.n').forEach(n=>setTimeout(()=>count(n),k*50+250)); obs.unobserve(t);
}),{threshold:.15});
document.querySelectorAll('.ops .panel').forEach(p=>obs.observe(p));
function mount(i){
  const c=$('#c'); c.innerHTML=view(J[i],i); window.scrollTo({top:0,behavior:'instant'});
  c.querySelectorAll('.panel').forEach(p=>obs.observe(p));
}
function show(i,first){
  if(busy||(i===cur&&!first))return; busy=true; cur=i;
  document.querySelectorAll('.photo').forEach((p,k)=>p.classList.toggle('on',k===i));
  rail.querySelectorAll('[data-i]').forEach(b=>b.setAttribute('aria-current',+b.dataset.i===i));
  document.title=J[i].n+' | SkyForm';
  const c=$('#c');
  if(first){mount(i);busy=false;return}
  c.classList.add('out');
  setTimeout(()=>{mount(i);requestAnimationFrame(()=>{c.classList.remove('out');busy=false})},rm?0:290);
}
document.addEventListener('click',e=>{
  const go=e.target.closest('[data-go]'); if(go){document.getElementById(go.dataset.go).scrollIntoView({behavior:rm?'auto':'smooth'});return}
  const b=e.target.closest('[data-i]'); if(b){show(+b.dataset.i);return}
  const a=e.target.closest('.acc button'); if(a){const o=a.getAttribute('aria-expanded')!=='true';a.setAttribute('aria-expanded',o);a.nextElementSibling.classList.toggle('open',o)}
});
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight')show((cur+1)%J.length); if(e.key==='ArrowLeft')show((cur+J.length-1)%J.length);
});
/* spring-loaded magnetic hover: pull toward cursor, overshoot slightly on release */
const live=new Set(); let raf=0, hot=null;
function step(){
  live.forEach(el=>{const s=el._s;
    s.vx=(s.vx+(s.tx-s.x)*.14)*.8; s.vy=(s.vy+(s.ty-s.y)*.14)*.8; s.x+=s.vx; s.y+=s.vy;
    el.style.transform=`translate3d(${s.x}px,${s.y}px,0)`;
    if(Math.abs(s.vx)+Math.abs(s.vy)+Math.abs(s.tx-s.x)+Math.abs(s.ty-s.y)<.05){s.x=s.y=s.vx=s.vy=0;el.style.transform='';live.delete(el)}});
  raf=live.size?requestAnimationFrame(step):0;
}
function pull(el,tx,ty){el._s=el._s||{x:0,y:0,vx:0,vy:0,tx:0,ty:0};el._s.tx=tx;el._s.ty=ty;live.add(el);if(!raf)raf=requestAnimationFrame(step)}
document.addEventListener('mousemove',e=>{
  if(rm)return; const m=e.target.closest('.mag');
  if(hot&&hot!==m){pull(hot,0,0);hot=null}
  if(!m)return; hot=m; const r=m.getBoundingClientRect();
  pull(m,(e.clientX-r.left-r.width/2)*.25,(e.clientY-r.top-r.height/2)*.35);
});
/* parallax + scrim */
let tick=false;
addEventListener('scroll',()=>{if(tick||rm)return;tick=true;requestAnimationFrame(()=>{
  const y=scrollY; photos.style.transform=matchMedia('(max-aspect-ratio:1/1)').matches?'':`translate3d(0,${-Math.min(y*.08,innerHeight*.05)}px,0)`;
  document.documentElement.style.setProperty('--dim',Math.min(.6,.2+y/innerHeight*.4));tick=false})},{passive:true});
show(0,true);
