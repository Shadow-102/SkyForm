const LB=['Top speed','Combat radius','Service ceiling','Engine thrust','Max takeoff weight','Thrust-to-weight','First flight','Hardpoints','Radar cross-section'];
const J=[
{id:'f35',fit:'contain',n:'F-35 Lightning II',m:'Lockheed Martin, United States',g:'5th generation',r:'Stealth multirole',f:'Sensor fusion and stealth',h:210,
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
 s:[[2.0,'Mach',1,'about 2,470 km/h at altitude'],[1300,'km',0,'sources range 800 to 1,500 km'],[16000,'m',0,'52,500 ft, Saab figure'],[98,'kN',0,'1 x F414-GE-39E, afterburning'],[16500,'kg',0,'36,400 lb']],
 ff:2017,hp:[10,'weapon stations'],rcs:'≈0.1 to 1 m²',
 ov:'Saab built the Gripen E to be flown and maintained from dispersed road bases, taking off and landing in roughly 800 m. Its Arexis electronic warfare suite, repositionable Raven AESA radar and IRST give it a strong sensor and self-protection package, with open architecture for fast updates.',
 dv:'The E model is a major redesign of the Gripen C/D that first flew in 1988: bigger airframe, F414 engine, new sensors. First flight of the E was in 2017.',
 nb:'Sweden flew eight Gripen C fighters in NATO\'s 2011 Libya operation.',
 av:[['Radar','Raven ES-05 AESA, repositionable'],['IRST','Skyward-G'],['EW suite','Arexis'],['Gun','Mauser BK-27 27 mm']],
 ar:[['Stations','10 weapon stations'],['Payload','about 6,500 kg'],['Air-to-air','Meteor, IRIS-T, AIM-9'],['Strike','Taurus KEPD 350']]},
{id:'f22',n:'F-22 Raptor',m:'Lockheed Martin, United States',g:'5th generation',r:'Air superiority',f:'Air superiority and supercruise',h:225,
 img:'Side-profile F-22 in a vertical climb against a dark stratospheric sky',
 s:[[2.25,'Mach',2,'supercruise Mach 1.5 or higher'],[850,'km',0,'clean, with 185 km supercruise'],[19800,'m',0,'65,000 ft'],[312,'kN',0,'2 x F119-PW-100, afterburning'],[37870,'kg',0,'83,500 lb']],
 ff:1997,hp:[4,'external, plus 3 internal bays'],rcs:'≈0.0001 to 0.001 m²',
 ov:'The F-22 cruises supersonically without afterburner, flies higher than most opponents and carries a very low radar signature. Integrated sensors let the pilot shoot first, and two-dimensional thrust vectoring keeps it agile where the air is thin.',
 dv:'Winner of the Advanced Tactical Fighter competition in 1991 (YF-22 over YF-23). In US Air Force service since 2005; production ended in 2011 after 195 aircraft.',
 nb:'First combat missions were strikes on Islamic State targets in Syria, September 2014.',
 av:[['Radar','AN/APG-77 AESA'],['Passive sensing','AN/ALR-94 warning system'],['Datalink','IFDL, intra-flight'],['Gun','M61A2 20 mm']],
 ar:[['Internal bays','6 x AIM-120, 2 x AIM-9X'],['Strike','2 x 1,000 lb JDAM or 8 x SDB'],['External','4 wing pylons, fuel tanks'],['Payload','internal carriage by default']]},
{id:'mig29',n:'MiG-29 Fulcrum',m:'Mikoyan, Soviet Union and Russia',g:'4th generation',r:'Air superiority, close combat',f:'Twin-engine maneuverability and legacy',h:30,
 img:'Head-on MiG-29 with afterburners lit, hard bank at low altitude',
 s:[[2.25,'Mach',2,'about 2,400 km/h at altitude'],[710,'km',0,'open-source figure, varies by version'],[18000,'m',0,'59,000 ft'],[163,'kN',0,'2 x RD-33, afterburning'],[18500,'kg',0,'40,800 lb']],
 ff:1977,hp:[6,'under-wing pylons'],rcs:'≈5 m²',
 ov:'Two RD-33 engines and a blended wing-body give the MiG-29 exceptional low-speed handling. A helmet-mounted sight paired with R-73 missiles made it formidable in a turning fight, and dozens of air forces still fly it.',
 dv:'Designed in the 1970s as the Soviet answer to the F-15 and F-16. First flight 1977, service entry in the early 1980s, then exported worldwide.',
 nb:'Flown in combat by Iraq in 1991 and Serbia in 1999; its close-combat edge was its helmet sight and R-73.',
 av:[['Radar','N019 Sapfir-29 pulse-Doppler'],['IRST','OLS-29 with laser rangefinder'],['Helmet sight','Shchel-3UM'],['Gun','GSh-30-1 30 mm']],
 ar:[['Stations','6 under-wing pylons'],['Payload','about 3,000 kg'],['Air-to-air','R-73, R-27, R-60'],['Strike','unguided rockets, bombs']]},
{id:'su57',n:'Su-57 Felon',m:'Sukhoi, Russia',g:'5th generation',r:'Air superiority, strike',f:'Thrust-vectoring agility and payload',h:190,
 img:'Su-57 in a high-angle maneuver, nozzles deflected, against storm light',
 s:[[2.0,'Mach',1,'about 2,100 km/h, OEM stated'],[1250,'km',0,'Rosoboronexport figure'],[20000,'m',0,'sources range 19,000 to 20,000 m'],[294,'kN',0,'2 x AL-41F1, 142 to 147 kN each'],[35000,'kg',0,'OEM lists 34,000 kg']],
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
 s:[[2.0,'Mach',1,'about 2,490 km/h at altitude'],[1390,'km',0,'with 3 external tanks'],[16764,'m',0,'55,000 ft, UK MoD figure'],[180,'kN',0,'2 x EJ200, afterburning'],[23500,'kg',0,'51,800 lb']],
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
const VR={"f35":[["F-35A","Conventional takeoff and landing for air forces. The only version with an internal 25 mm gun, and a 9 g limit."],["F-35B","Short takeoff and vertical landing with a lift fan behind the cockpit. Smaller fuel and weapons capacity, 7 g limit, gun carried as a pod. Flown by the US Marine Corps, UK, Italy and Japan."],["F-35C","Carrier version with larger folding wings, a tailhook and stronger landing gear. 7.5 g limit and the longest range of the three. Flown by the US Navy and Marine Corps."],["F-35I Adir","An F-35A with Israeli electronic warfare and weapons integration, the only version customers may modify."]],"gripen-e":[["Gripen A/B","The first production models, in service from 1996. The two-seat B is a trainer."],["Gripen C/D","The NATO-standard upgrade with air-to-air refuelling, new data links and more weapons. About 80 kN of thrust, 8 hardpoints and a combat radius near 800 km."],["Gripen E/F","A larger airframe, F414G engine (about 98 kN), roughly double the internal fuel, AESA radar, Arexis EW and 10 hardpoints. The F is the two-seat version, first built for Brazil."]],"f22":[["F-22A Block 20","Aircraft used to train pilots, with a reduced combat capability."],["F-22A Block 30/35","Combat-coded aircraft with ground-attack capability. Later upgrades added AIM-9X and AIM-120D missiles."],["Never built","A two-seat F-22B and a bomber called FB-22 were studied, but the F-22A is the only production version."]],"mig29":[["MiG-29 and MiG-29UB (9-12, 9-51)","The original Fulcrum-A single-seater, and the two-seat trainer. Limited fuel and R-27, R-73 and R-60 missiles."],["MiG-29S (9-13S)","A larger spine for more fuel, better electronic countermeasures and compatibility with the R-77 missile."],["MiG-29SMT and UPG","Upgrades with glass cockpits, new radar, more fuel and a refuelling probe. UPG was developed for India."],["MiG-29K and KUB","Carrier version with folding wings, a tailhook and strengthened landing gear. Flown by the Indian Navy and Russian Naval Aviation."],["MiG-29M/M2 and MiG-35","The multirole generation with fly-by-wire controls, more fuel and new engines. The MiG-35 adds an AESA radar. Egypt flies the MiG-29M/M2."]],"su57":[["Su-57","The series aircraft with AL-41F1 (Izdeliye 117) engines, in Russian service since 2020."],["Su-57E","The export version, with an export-standard avionics and weapons package. Algeria is its widely reported first customer."],["Su-57M","A planned upgrade with the new Izdeliye 30 engine (AL-51F), which the manufacturer says adds more than 17% afterburner thrust, plus AI and drone control features."]],"rafale":[["Rafale B and C","The two-seat B and single-seat C for the French Air and Space Force. India calls its versions EH and DH, Egypt's are EM and DM."],["Rafale M","The carrier version with a stronger undercarriage, a tailhook and a built-in boarding ladder. Flown by the French Navy; India ordered 26."],["F3-R and F4 standards","Software and hardware upgrade steps. F4 adds satellite communications and better sensors, and an F5 standard is in development."]],"typhoon":[["Single-seat and Typhoon T","The single-seater and the two-seat trainer, which keeps full combat capability."],["Tranche 1, 2 and 3","Tranche 1 is the original air-defence standard, Tranche 2 adds air-to-ground capability, and Tranche 3 adds more computing power and provisions for conformal fuel tanks and the Captor-E radar."],["Captor-E (ECRS) fit","The AESA radar upgrade being fitted to the fleet, replacing the mechanically scanned Captor-M."],["Eurofighter EK","A German electronic combat and reconnaissance version proposed to replace the Tornado ECR."]],"j20":[["J-20 (early)","Early production aircraft with Russian AL-31F engines."],["J-20A","The main production version with domestic WS-10C engines. Naming varies by source, and some call WS-15 aircraft the J-20A."],["J-20B","Reported variant with thrust vectoring and avionics upgrades. Reports are unconfirmed."],["J-20S","A two-seat version for command of the mission and control of drone wingmen."]]};
const OPS={"f35":[["United States","US Air Force, US Marine Corps, US Navy","s"],["United Kingdom","Royal Air Force and Royal Navy","s","F-35B"],["Italy","Italian Air Force and Italian Navy","s"],["Netherlands","Royal Netherlands Air Force","s"],["Norway","Royal Norwegian Air Force","s"],["Denmark","Royal Danish Air Force","s"],["Australia","Royal Australian Air Force","s"],["Israel","Israeli Air Force","s","F-35I Adir"],["Japan","Japan Air Self-Defense Force","s"],["South Korea","Republic of Korea Air Force","s"],["Belgium","Belgian Air Component","s"],["Poland","Polish Air Force","s"],["Canada","Royal Canadian Air Force","o","first 16 on contract; a larger buy has been under review"],["Czech Republic","Czech Air Force","o"],["Finland","Finnish Air Force","o"],["Germany","German Air Force (Luftwaffe)","o","first aircraft completed August 2026"],["Greece","Hellenic Air Force","o"],["Romania","Romanian Air Force","o"],["Switzerland","Swiss Air Force","o"],["Singapore","Republic of Singapore Air Force","o","F-35A and F-35B"],["Saudi Arabia","Royal Saudi Air Force","p","US approved a possible sale of 48 on 17 Sep 2026; no contract"],["Turkey","Turkish Air Force","r","talks about rejoining the program; S-400 dispute"],["United Arab Emirates","UAE Air Force","r","talks stalled over China ties"],["Morocco","Royal Moroccan Air Force","r","reports of interest; not confirmed"],["India","Indian Air Force","r","offered by the US in 2025; Indian officials skeptical"]],"gripen-e":[["Sweden","Swedish Air Force","s","Gripen C/D and E"],["Brazil","Brazilian Air Force","s","Gripen E/F; 36 ordered, 20 more under discussion"],["Czech Republic","Czech Air Force","s","Gripen C/D, leased until 2035"],["Hungary","Hungarian Air Force","s","Gripen C/D"],["South Africa","South African Air Force","s","Gripen C/D"],["Thailand","Royal Thai Air Force","s","Gripen C/D; 4 E/F also ordered"],["Colombia","Colombian Aerospace Force","o","17 Gripen E/F, deliveries from 2026"],["Ukraine","Ukrainian Air Force","p","Sweden announced a transfer of 16 C/D and a sale of 22 E in May 2026"],["Peru","Peruvian Air Force","r","reports differ on whether an order is signed"]],"f22":[["United States","US Air Force","s","export banned by law since 1998"]],"mig29":[["Russia","Russian Aerospace Forces and Naval Aviation","s"],["India","Indian Air Force and Indian Navy","s","Navy flies the MiG-29K"],["Algeria","Algerian Air Force","s"],["Ukraine","Ukrainian Air Force","s"],["Belarus","Belarusian Air Force","s"],["Kazakhstan","Kazakhstan Air Defence Forces","s"],["Uzbekistan","Uzbekistan Air Force","s"],["Turkmenistan","Turkmen Air Force","s"],["Azerbaijan","Azerbaijani Air Force","s"],["Iran","Islamic Republic of Iran Air Force","s"],["North Korea","Korean People's Army Air Force","s"],["Myanmar","Myanmar Air Force","s"],["Peru","Peruvian Air Force","s"],["Serbia","Serbian Air Force and Air Defence","s"],["Poland","Polish Air Force","s","fleet shrinking"],["Bulgaria","Bulgarian Air Force","s","being replaced by F-16"],["Bangladesh","Bangladesh Air Force","s"],["Egypt","Egyptian Air Force","s","MiG-29M/M2"],["Eritrea","Eritrean Air Force","s"],["Sudan","Sudanese Air Force","u","fleet condition unclear"],["Syria","Syrian Air Force","u","fleet condition unclear"],["Yemen","Yemeni Air Force","u","fleet condition unclear"]],"su57":[["Russia","Russian Aerospace Forces","s"],["Algeria","Algerian Air Force","r","aircraft seen in Algerian airspace since late 2025; no official confirmation"],["India","Indian Air Force","r","long-running speculation; India left the original program in 2018"],["Iran","Islamic Republic of Iran Air Force","r","named by commentators as a possible buyer"],["Vietnam","Vietnam People's Air Force","r","named by commentators as a possible buyer"],["Malaysia","Royal Malaysian Air Force","r","named by commentators as a possible buyer"],["Indonesia","Indonesian Air Force","r","named by commentators as a possible buyer"],["Turkey","Turkish Air Force","r","interest reported in the past"]],"rafale":[["France","French Air and Space Force and French Navy","s"],["India","Indian Air Force","s","36 aircraft"],["Egypt","Egyptian Air Force","s"],["Qatar","Qatar Emiri Air Force","s"],["Greece","Hellenic Air Force","s"],["Croatia","Croatian Air Force","s","used French aircraft"],["Indonesia","Indonesian Air Force","s","42 ordered; first batch delivered early 2026"],["India","Indian Navy","o","26 Rafale M, deliveries 2029 to 2031"],["United Arab Emirates","UAE Air Force","o","80 ordered; first aircraft in testing"],["Serbia","Serbian Air Force and Air Defence","o","12 ordered"],["India","Indian Air Force","p","114 more: proposal filed 6 Aug 2026, no contract"],["Ukraine","Ukrainian Air Force","p","interest stated publicly; no contract"]],"typhoon":[["United Kingdom","Royal Air Force","s"],["Germany","German Air Force (Luftwaffe)","s","20 more ordered Oct 2025"],["Italy","Italian Air Force","s"],["Spain","Spanish Air and Space Force","s"],["Austria","Austrian Air Force","s"],["Saudi Arabia","Royal Saudi Air Force","s","72 ordered; a further 48 stalled"],["Kuwait","Kuwait Air Force","s"],["Oman","Royal Air Force of Oman","s","reported to be selling aircraft to Türkiye"],["Qatar","Qatar Emiri Air Force","s","reported to be selling aircraft to Türkiye"],["Türkiye","Turkish Air Force","o","20 new aircraft, first delivery 2030"],["Poland","Polish Air Force","r","pitched by Eurofighter; no decision"],["Portugal","Portuguese Air Force","r","industry agreement to position Typhoon; no decision"]],"j20":[["China","People's Liberation Army Air Force","s","only operator; fleet estimates vary widely"]]};
const X={"f35":{"ab":"Three variants share most of their systems: the F-35A for air forces, the F-35B with a lift fan for short takeoff and vertical landing from small decks, and the F-35C with larger wings for carriers. A common software and support system lets allied pilots and maintainers work across nations.","fun":"Six cameras around the airframe feed the pilot's helmet display, so the pilot can look through the floor of the aircraft at the ground below.","on":"As of August 2026 Lockheed Martin counts 12 countries operating the F-35 from their home territory and 17 military services flying it. The US State Department cleared a possible sale of 48 to Saudi Arabia on 17 September 2026; no contract exists yet."},"gripen-e":{"ab":"The Gripen E is a single-engine fighter that is lighter and cheaper to operate than most rivals. It is designed so a small crew can rearm and refuel it on a road strip, and Saab sells it with local industrial partnerships and regular software upgrades.","fun":"Saab says a small crew of conscripts can rearm and refuel a Gripen in around ten minutes.","on":"Sweden and Brazil fly the Gripen E. The older C/D serves in the Czech Republic (leased until 2035), Hungary, South Africa and Thailand. In May 2026 Sweden announced it will transfer 16 Gripen C/D to Ukraine and sell it 22 Gripen E."},"f22":{"ab":"The Raptor combines stealth, supercruise, thrust vectoring and fused sensors in one airframe, so it can detect, track and engage threats before they see it. Only 195 were built, so each aircraft is a precious asset. Its nozzles swing up and down about 20 degrees, which helps it pitch sharply even at very high altitude.","fun":"In 2007, F-22s crossing the International Date Line on their way to Japan lost navigation and communications when their software crashed. They followed their tankers home.","on":"The US Air Force is the only operator. A US export ban in force since 1998 means no ally has ever flown the Raptor."},"mig29":{"ab":"Its twin-engine, twin-fin layout lets pilots fly and recover from extreme angles of attack. Versions range from the original Fulcrum-A to the multirole MiG-29M and MiG-35, and many operators have upgraded older airframes with new radar and weapons.","fun":"On takeoff the main engine intakes close and air enters through louvres on top of the wings, which keeps runway debris out of the engines.","on":"More than 20 air forces fly the MiG-29, and dozens have over its history. Fleets in Sudan, Syria and Yemen are in unclear condition after years of conflict."},"su57":{"ab":"Its widely spaced engines, flat-sided airframe and internal bays are designed to reduce radar return while keeping speed and payload. Russia has been developing a more powerful second-stage engine to replace the engines used on current aircraft.","fun":"Russia has flown the S-70 Okhotnik, a large stealth drone, as a loyal wingman alongside the Su-57.","on":"Russia is the only officially confirmed operator. Algeria is widely reported as the first export customer, but neither government has confirmed it. Russia says more Su-57E export contracts exist but has named no buyers, so every other country here is speculation."},"rafale":{"ab":"The Rafale comes as the single-seat C, the two-seat B and the carrier-based M, which flies from the French carrier Charles de Gaulle. The SPECTRA suite is designed to detect, identify and jam threats automatically. The F4 standard adds upgrades such as satellite communications, and an F5 standard is in development.","fun":"\"Rafale\" is French for a gust of wind. In artillery language it also means a burst of fire.","on":"France plus eight export customers have chosen the Rafale. India's 26 Rafale M for its navy are on order, and France filed a proposal for 114 more for the air force on 6 August 2026; that is not yet a contract."},"typhoon":{"ab":"Each partner nation builds sections of the aircraft, and final assembly lines run in all four. Later tranches add the Captor-E AESA radar and a larger weapons selection, and the fleet has passed one million flight hours.","fun":"The pilot can control some systems just by speaking, using direct voice input.","on":"Nine air forces fly the Typhoon and Türkiye is the tenth customer, with about 769 aircraft ordered by early 2026. Oman and Qatar are reported to be transferring aircraft to Türkiye."},"j20":{"ab":"Observers note large internal bays, a long fuselage consistent with high fuel capacity, and canards combined with a delta wing. Newer aircraft use more powerful domestic engines, and a two-seat version has been shown.","fun":"Its first flight was on 11 January 2011, during a visit to Beijing by then US Defense Secretary Robert Gates.","on":"Only the People's Liberation Army Air Force flies the J-20, and no export customer has been confirmed."}};
const RT={"f35":{"df":[7,5,9,9.5],"bv":[10,9.5,8,10,9],"conf":"High"},"gripen-e":{"df":[8,5.5,9,7.5],"bv":[8.5,4,9,8.5,9],"conf":"High"},"f22":{"df":[9.5,9,8,7],"bv":[8.5,10,9,7.5,8.5],"conf":"High"},"mig29":{"df":[8,7,8.5,5],"bv":[3.5,1.5,5,2.5,3],"conf":"High"},"su57":{"df":[9.5,10,8,7.5],"bv":[7.5,6.5,7.5,6,7],"conf":"Lower"},"rafale":{"df":[8.5,6,8.5,7.5],"bv":[8.5,4.5,9,8,9.5],"conf":"High"},"typhoon":{"df":[9,6.5,9,8],"bv":[8,3.5,9.5,8,8.5],"conf":"High"},"j20":{"df":[7.5,6.5,7.5,7.5],"bv":[7,7,8.5,7.5,7],"conf":"Lower"}};

/* ============ FLAGS ============
   Simplified SVG flags (30 x 20), one <symbol> each in a hidden sprite. fl(text) puts the flag next to every country name in a string. */
const fR=(x,y,w,h,f)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}"/>`;
const fC=(x,y,r,f,ex='')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${ex}/>`;
const fh=(...c)=>c.map((f,i)=>fR(0,+(i*20/c.length).toFixed(2),30,+(20/c.length+.05).toFixed(2),f)).join('');
const fv=(...c)=>c.map((f,i)=>fR(+(i*30/c.length).toFixed(2),0,+(30/c.length+.05).toFixed(2),20,f)).join('');
const fP=(p,f,ex='')=>`<polygon points="${p}" fill="${f}" ${ex}/>`;
const fS=(cx,cy,r,f,n=5,rot=-90,ir,ex='')=>{ir=ir||r*(n===5?.382:.5);const p=[];for(let i=0;i<n*2;i++){const a=(rot+i*180/n)*Math.PI/180,q=i%2?ir:r;p.push((cx+q*Math.cos(a)).toFixed(2)+','+(cy+q*Math.sin(a)).toFixed(2))}return fP(p.join(' '),f,ex)};
const fCr=(cx,cy,r,f,bg,dx,r2)=>fC(cx,cy,r,f)+fC(cx+dx,cy,r2,bg);
const fUJ=`<clipPath id="ukc"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#ukc)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>`;
const FLG={
 us:Array.from({length:13},(_,i)=>fR(0,+(i*20/13).toFixed(2),30,+(20/13+.05).toFixed(2),i%2?'#fff':'#b22234')).join('')+fR(0,0,13,10.8,'#3c3b6e')+Array.from({length:30},(_,i)=>fC(+(1.2+(i%6)*2.1).toFixed(1),+(1.1+Math.floor(i/6)*2).toFixed(1),.45,'#fff')).join(''),
 gb:`<g transform="scale(.5,.6667)">${fUJ}</g>`,
 it:fv('#009246','#fff','#ce2b37'),fr:fv('#0055a4','#fff','#ef4135'),de:fh('#000','#dd0000','#ffce00'),nl:fh('#ae1c28','#fff','#21468b'),
 be:fv('#000','#fae042','#ed2939'),pl:fh('#fff','#dc143c'),ro:fv('#002b7f','#fcd116','#ce1126'),hu:fh('#ce2939','#fff','#477050'),
 bg:fh('#fff','#00966e','#d62612'),ru:fh('#fff','#0039a6','#d52b1e'),ua:fh('#0057b7','#ffd700'),at:fh('#ed2939','#fff','#ed2939'),id:fh('#e70011','#fff'),
 co:fR(0,0,30,10,'#fcd116')+fR(0,10,30,5,'#003893')+fR(0,15,30,5,'#ce1126'),
 pe:fv('#d91023','#fff','#d91023')+fC(15,10,1.8,'#a0522d'),
 eg:fh('#ce1126','#fff','#000')+fC(15,10,1.7,'#c09300'),ye:fh('#ce1126','#fff','#000'),
 sd:fh('#d21034','#fff','#000')+fP('0,0 10,10 0,20','#007229'),
 sy:fh('#007a3d','#fff','#000')+[9,15,21].map(x=>fS(x,10,2.4,'#ce1126')).join(''),
 iq:fh('#ce1126','#fff','#000')+fR(9,8.6,12,2.6,'#007a3d'),
 ir:fh('#239f40','#fff','#da0000')+fC(15,10,2.3,'none','stroke="#da0000" stroke-width=".9"'),
 kw:fh('#007a3d','#fff','#ce1126')+fP('0,0 7.5,6.67 7.5,13.33 0,20','#000'),
 om:fR(0,0,30,6.67,'#fff')+fR(0,6.67,30,6.67,'#db161b')+fR(0,13.33,30,6.67,'#008000')+fR(0,0,7.5,20,'#db161b')+fC(3.75,3.6,1.7,'#fff'),
 qa:fR(0,0,30,20,'#8a1538')+fP((()=>{let p='0,0 9,0';for(let i=0;i<9;i++)p+=` 11.8,${(i*20/9+10/9).toFixed(2)} 9,${((i+1)*20/9).toFixed(2)}`;return p+' 0,20'})(),'#fff'),
 bd:fR(0,0,30,20,'#006a4e')+fC(13.5,10,5,'#f42a41'),
 jp:fR(0,0,30,20,'#fff')+fC(15,10,6,'#bc002d'),
 cn:fR(0,0,30,20,'#de2910')+fS(5,5,3,'#ffde00')+[[10,2],[12,4],[12,7],[10,9]].map(p=>fS(p[0],p[1],1,'#ffde00')).join(''),
 vn:fR(0,0,30,20,'#da251d')+fS(15,10.4,6,'#ff0'),
 kp:fR(0,0,30,20,'#024fa2')+fR(0,3.3,30,13.4,'#fff')+fR(0,4.4,30,11.2,'#ed1c27')+fC(10,10,4,'#fff')+fS(10,10.2,3.2,'#ed1c27'),
 mm:fh('#fecb00','#34b233','#ea2839')+fS(15,10.6,6.8,'#fff'),
 th:fR(0,0,30,20,'#a51931')+fR(0,3.33,30,13.34,'#f4f5f8')+fR(0,6.67,30,6.66,'#2d2a4a'),
 my:Array.from({length:14},(_,i)=>fR(0,+(i*20/14).toFixed(2),30,+(20/14+.05).toFixed(2),i%2?'#fff':'#cc0001')).join('')+fR(0,0,15,11,'#010066')+fCr(5.4,5.5,3.4,'#fc0','#010066',1.1,2.8)+fS(10,5.5,2.5,'#fc0',14,-90,1.3),
 sg:fh('#ed2939','#fff')+fCr(6,5,3.2,'#fff','#ed2939',1.3,2.7)+[[9.6,3],[11.6,4.6],[10.8,7],[8.4,7],[7.6,4.6]].map(p=>fS(p[0]-.5,p[1],.9,'#fff')).join(''),
 au:fR(0,0,30,20,'#012169')+`<g transform="scale(.25,.3333)">${fUJ}</g>`+fS(7.5,15,2.4,'#fff',7,-90,1.2)+[[22.5,16],[18.5,9],[22.5,3.6],[26.5,9]].map(p=>fS(p[0],p[1],1.1,'#fff')).join(''),
 in:fh('#ff9933','#fff','#138808')+fC(15,10,2.9,'none','stroke="#000080" stroke-width=".55"')+fC(15,10,.6,'#000080'),
 il:fR(0,0,30,20,'#fff')+fR(0,2.2,30,2.4,'#0038b8')+fR(0,15.4,30,2.4,'#0038b8')+fP('15,5.8 19.4,13.4 10.6,13.4','none','stroke="#0038b8" stroke-width=".9"')+fP('15,14.2 10.6,6.6 19.4,6.6','none','stroke="#0038b8" stroke-width=".9"'),
 kr:fR(0,0,30,20,'#fff')+fC(15,10,4.2,'#0047a0')+`<path d="M10.8 10a4.2 4.2 0 0 1 8.4 0z" fill="#cd2e3a"/>`+fC(12.9,10,2.1,'#cd2e3a')+fC(17.1,10,2.1,'#0047a0')+`<g stroke="#000" stroke-width=".8"><path d="M3.5 4l2.6 2M2.5 5.5l2.6 2M1.5 7l2.6 2M24 3.5l2.6-2M25 5l2.6-2M26 6.5l2.6-2M3.5 16l2.6-2M2.5 14.5l2.6-2M1.5 13l2.6-2M24 16.5l2.6 2M25 15l2.6 2M26 13.5l2.6 2"/></g>`,
 no:fR(0,0,30,20,'#ba0c2f')+fR(8.2,0,5.5,20,'#fff')+fR(0,7.5,30,5,'#fff')+fR(9.55,0,2.8,20,'#00205b')+fR(0,8.75,30,2.5,'#00205b'),
 dk:fR(0,0,30,20,'#c8102e')+fR(9.7,0,3.3,20,'#fff')+fR(0,8.57,30,2.86,'#fff'),
 se:fR(0,0,30,20,'#006aa7')+fR(9.4,0,3.7,20,'#fecc00')+fR(0,8,30,4,'#fecc00'),
 fi:fR(0,0,30,20,'#fff')+fR(8.3,0,5,20,'#003580')+fR(0,7.3,30,5.4,'#003580'),
 es:fR(0,0,30,20,'#aa151b')+fR(0,5,30,10,'#f1bf00')+fR(6.5,7.4,4.2,5.2,'#aa151b')+fR(7.4,8.4,2.4,3,'#f1bf00'),
 pt:fR(0,0,12,20,'#060')+fR(12,0,18,20,'#f00')+fC(12,10,3.6,'#fc0')+fC(12,10,2.9,'#f00')+`<path d="M10.2 8.2h3.6v2.6a1.8 1.8 0 0 1-3.6 0z" fill="#fff"/>`,
 hr:fh('#f00','#fff','#171796')+fR(12.5,6.4,5,6.2,'#fff')+Array.from({length:25},(_,i)=>(i%2?'':fR(+(12.5+(i%5)).toFixed(1),+(6.4+Math.floor(i/5)*1.24).toFixed(2),1,1.24,'#f00'))).join(''),
 rs:fh('#c6363c','#0c4076','#fff')+fR(5,4,4.6,6.2,'#c6363c')+fR(6.9,4,.8,6.2,'#fff')+fR(5,6.3,4.6,.8,'#fff'),
 cz:fR(0,0,30,10,'#fff')+fR(0,10,30,10,'#d7141a')+fP('0,0 15,10 0,20','#11457e'),
 by:fR(0,0,30,13.4,'#cf101a')+fR(0,13.4,30,6.6,'#00af66')+fR(0,0,3.4,20,'#fff')+[2.4,6,9.6,13.2,16.8].map(y=>`<path d="M1.7 ${y}l1.1 1.6-1.1 1.6-1.1-1.6z" fill="#cf101a"/>`).join(''),
 kz:fR(0,0,30,20,'#00afca')+fC(15,8,3.4,'#fec50c')+`<ellipse cx="15" cy="13.8" rx="5" ry="1.4" fill="#fec50c"/>`+fR(1,0,1.4,20,'#fec50c'),
 uz:fR(0,0,30,6.3,'#0099b5')+fR(0,6.3,30,.6,'#ce1126')+fR(0,6.9,30,6.2,'#fff')+fR(0,13.1,30,.6,'#ce1126')+fR(0,13.7,30,6.3,'#1eb53a')+fCr(4,3.2,2.1,'#fff','#0099b5',.9,1.8)+[[7,1.6],[8.6,2.6],[7,3.6],[8.6,4.6],[10.2,1.6],[10.2,3.6]].map(p=>fC(p[0],p[1],.4,'#fff')).join(''),
 tm:fR(0,0,30,20,'#00843d')+fR(3,0,5,20,'#d22630')+[3,7,11,15].map(y=>`<path d="M5.5 ${y}l1.5 1.6-1.5 1.6-1.5-1.6z" fill="#e8c545"/>`).join('')+fCr(11.5,3.5,2.2,'#fff','#00843d',.9,1.8)+[14,15.6,17.2].map(x=>fC(x,3.4,.45,'#fff')).join(''),
 az:fh('#00b5e2','#ef3340','#509e2f')+fCr(14.5,10,3.2,'#fff','#ef3340',.9,2.6)+fS(18,10,1.6,'#fff',8,-90,.8),
 dz:fR(0,0,15,20,'#006233')+fR(15,0,15,20,'#fff')+fCr(15,10,5,'#d21034','#fff',1.4,4.2)+fS(16.6,10,2.2,'#d21034'),
 ma:fR(0,0,30,20,'#c1272d')+fS(15,10.4,5.5,'none',5,-90,2.1,'stroke="#006233" stroke-width="1"'),
 sa:fR(0,0,30,20,'#006c35')+fR(7,5.2,16,1.8,'#fff')+fR(9,8.4,12,1.2,'#fff')+fR(7,13.6,16,.9,'#fff')+fR(6.5,12.4,2.6,3.2,'#fff'),
 ae:fR(0,0,7.5,20,'#f00')+fR(7.5,0,22.5,6.67,'#00732f')+fR(7.5,6.67,22.5,6.66,'#fff')+fR(7.5,13.33,22.5,6.67,'#000'),
 tr:fR(0,0,30,20,'#e30a17')+fCr(11.2,10,5,'#fff','#e30a17',1.5,4)+fS(16.4,10,2.3,'#fff',5,-18),
 br:fR(0,0,30,20,'#009b3a')+fP('15,1.6 28,10 15,18.4 2,10','#fedf00')+fC(15,10,4.4,'#002776')+`<path d="M10.7 9.4q4.3-1.4 8.6 1.4" stroke="#fff" stroke-width=".7" fill="none"/>`,
 za:fR(0,0,30,10,'#e03c31')+fR(0,10,30,10,'#001489')+`<path d="M0 0L11 10L0 20M11 10H30" stroke="#fff" stroke-width="7" fill="none"/><path d="M0 0L11 10L0 20M11 10H30" stroke="#007749" stroke-width="4.2" fill="none"/>`+fP('0,3 7.5,10 0,17','#000','stroke="#ffb81c" stroke-width="1.1"'),
 ca:fR(0,0,7.5,20,'#d52b1e')+fR(7.5,0,15,20,'#fff')+fR(22.5,0,7.5,20,'#d52b1e')+fP('15,3.2 16.3,6 18.2,5.3 17.7,8.4 19.8,7.4 19.2,9.8 21,10.4 18.4,12.6 18.8,13.8 15.7,13.3 15.7,16.8 14.3,16.8 14.3,13.3 11.2,13.8 11.6,12.6 9,10.4 10.8,9.8 10.2,7.4 12.3,8.4 11.8,5.3 13.7,6','#d52b1e'),
 ch:fR(0,0,30,20,'#d52b1e')+fR(13,4,4,12,'#fff')+fR(9,8,12,4,'#fff'),
 gr:Array.from({length:9},(_,i)=>fR(0,+(i*20/9).toFixed(2),30,+(20/9+.05).toFixed(2),i%2?'#fff':'#0d5eaf')).join('')+fR(0,0,11.2,11.2,'#0d5eaf')+fR(4.4,0,2.4,11.2,'#fff')+fR(0,4.4,11.2,2.4,'#fff'),
 su:fR(0,0,30,20,'#c00')+fS(6,5,2.6,'#ffde00')+`<path d="M3.8 11.5a3.1 3.1 0 0 0 5.2 1.5" stroke="#ffde00" stroke-width=".9" fill="none"/>`+fR(5,10.6,3,.9,'#ffde00'),
 er:fP('0,0 30,10 0,20','#ea0437')+fP('0,0 30,0 30,10','#12ad2b')+fP('0,20 30,20 30,10','#4189dd')+fC(7,10,2.4,'none','stroke="#ffc726" stroke-width=".9"'),
 ly:fR(0,0,30,5,'#e70013')+fR(0,5,30,10,'#000')+fR(0,15,30,5,'#239e46')+fCr(14.4,10,2.7,'#fff','#000',.9,2.3)+fS(17.4,10,1.2,'#fff'),
 ml:fv('#14b53a','#fcd116','#ce1126')
};
const FN={'United States':'us','US':'us','United Kingdom':'gb','UK':'gb','Italy':'it','Netherlands':'nl','Norway':'no','Denmark':'dk','Australia':'au','Israel':'il','Japan':'jp','South Korea':'kr','Belgium':'be','Poland':'pl','Canada':'ca','Czech Republic':'cz','Finland':'fi','Germany':'de','Greece':'gr','Romania':'ro','Switzerland':'ch','Singapore':'sg','Saudi Arabia':'sa','Turkey':'tr','Türkiye':'tr','United Arab Emirates':'ae','UAE':'ae','Morocco':'ma','India':'in','Sweden':'se','Brazil':'br','Hungary':'hu','South Africa':'za','Thailand':'th','Colombia':'co','Ukraine':'ua','Peru':'pe','Russia':'ru','Algeria':'dz','Belarus':'by','Kazakhstan':'kz','Uzbekistan':'uz','Turkmenistan':'tm','Azerbaijan':'az','Iran':'ir','North Korea':'kp','Myanmar':'mm','Serbia':'rs','Bulgaria':'bg','Bangladesh':'bd','Egypt':'eg','Eritrea':'er','Sudan':'sd','Syria':'sy','Yemen':'ye','Vietnam':'vn','Malaysia':'my','Indonesia':'id','France':'fr','Qatar':'qa','Croatia':'hr','Spain':'es','Austria':'at','Kuwait':'kw','Oman':'om','Portugal':'pt','China':'cn','Soviet Union':'su','Iraq':'iq','Libya':'ly','Mali':'ml'};
document.body.insertAdjacentHTML('afterbegin','<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>'+Object.entries(FLG).map(([k,v])=>`<symbol id="fl-${k}" viewBox="0 0 30 20" preserveAspectRatio="none">${v}</symbol>`).join('')+'</defs></svg>');
const FRX=new RegExp('\\b('+Object.keys(FN).sort((a,b)=>b.length-a.length).join('|')+')\\b','g');
const flag=c=>`<svg class="fl" viewBox="0 0 30 20" aria-hidden="true"><use href="#fl-${c}"/></svg>`;
const fl=t=>t==null?'':String(t).replace(FRX,m=>`<span class="cf">${flag(FN[m])}${m}</span>`);

/* ============ TECHNICAL SCHEME GEOMETRY ============
   Metres, nose at x=0, centreline at y=0 (top view, half outline, mirrored) and z up (side view).
   out half outline | cl mirrored closed shapes | cc centre closed shapes | pl mirrored lines | hid mirrored hidden shapes | hc centre hidden shapes
   ci/cm circles (centre / mirrored) | hp/hpc hardpoints (mirrored / centre) | side silhouette | sl side lines | sc side shapes | sh side hidden lines
   co callouts [anchor x, anchor y, label x, label y, text, 'r' text to the right | 'l' text to the left]
   Shapes are drawn from published dimensions and general arrangement; proportions are accurate, fine detail is simplified. */
const GEO={
'f35':{L:15.67,S:10.7,H:4.38,
 out:[0,0,.35,.16,1,.4,2,.66,3.2,.9,4.4,1.1,5.3,1.4,6.2,1.75,7,2,9.7,5.35,10.8,5.35,12.3,2.1,13,1.55,14.5,3.3,15.35,3.3,15.5,1.7,15.67,1.1],
 cl:[[2.8,0,3.1,.38,4,.52,5,.46,5.6,0],[5.1,1.1,6.5,1,6.6,1.6,5.4,1.45],[11.3,1,13.2,1.6,14.5,1.6,14.7,1]],
 pl:[[1.5,0,1.5,.5],[7.7,2.1,10.25,5.25],[11.75,2.4,10.95,4.1],[10.9,4.15,10.4,5.3],[13.2,1.9,14.1,3.1]],
 hc:[[6.6,-.55,9.3,-.55,9.3,.55,6.6,.55]],ci:[[15.1,0,.55],[15.1,0,.4]],hp:[[8.9,2.3],[9.3,3.4],[9.7,4.5]],
 side:[0,1.75,1,2.05,2.4,2.45,3,2.65,3.6,3.1,4.4,3.25,5.4,3,6.4,2.75,9,2.85,11,2.85,13,4.38,14,4.38,14.3,2.6,14.9,2.35,15.67,2.2,15.67,1.3,14.4,1.1,11,.95,8.2,.9,6.4,.75,5.2,.8,4,1.15,2.8,1.35,1.4,1.5],
 sl:[[3,2.65,3.4,2.85,5.9,2.85],[3.6,3.1,4.2,2.85],[5.2,.8,6.4,1.3,7.2,1.35],[7,1.6,12.3,1.5],[13.2,1.55,15.4,1.45],[1.5,1.6,1.5,2.2]],
 sh:[[6.6,.9,6.6,1.6,9.3,1.6,9.3,.9]],
 co:[[1,0,.2,-3,'AN/APG-81 AESA radar','r'],[4.6,.55,.2,3,'DAS: six IR cameras','r'],[7.9,.35,1.4,4.3,'Internal weapons bays','r'],[15.4,.2,16.2,-1.2,'F135 turbofan, 191 kN','r']]},
'gripen-e':{L:15.2,S:8.6,H:4.5,
 out:[0,0,.5,.2,1.6,.45,3,.66,4.2,.82,4.5,.9,5.4,1.92,5.9,1.92,5.85,1,6.4,1,9.7,4.3,11,4.3,12,1.3,12.6,1.05,14,.9,15.2,.72],
 cl:[[2.6,0,3,.36,3.9,.5,4.8,.45,5.4,0],[11.5,.55,12.7,.55,12.7,.95,11.6,.95]],cc:[[11.4,-.1,14.6,-.08,14.6,.08,11.4,.1]],
 pl:[[7,1.1,10.1,4.2],[11.2,1.45,10.45,3.9],[4.9,.95,5.7,1.9],[1.4,0,1.4,.45]],
 hid:[[5,.55,7.2,.7,7.3,1,5.2,1]],ci:[[14.7,0,.5],[14.7,0,.38]],hp:[[10.5,4.25],[9.8,3],[9.2,1.9],[8.8,.8]],hpc:[[9.3,0],[11.2,0]],
 side:[0,1.9,.8,2.2,2.2,2.55,2.9,2.75,3.4,3.2,4.2,3.38,5.2,3.28,5.8,2.9,7,2.85,10,2.8,11,2.8,13.6,4.5,14.5,4.5,14.6,2.6,15.2,2.35,15.2,1.45,14.4,1.15,12,1,9.5,.95,7,.78,5.2,.75,4,1.2,2.5,1.4,1,1.6],
 sl:[[2.9,2.75,3.3,2.9,5.6,2.9],[6.4,1.5,12,1.38],[5.2,.75,6.4,1.2,7.2,1.25],[4.3,2.2,5.8,2.25,5.8,2.12,4.5,2.1],[11.5,2.8,13.9,4.4]],
 co:[[1.1,0,.2,-2.7,'Raven ES-05 AESA radar','r'],[5.5,1.8,.2,3,'Close-coupled canards','r'],[10.9,4.2,11.9,3.2,'Arexis EW antennas','r'],[14.9,0,15.8,-1.4,'F414G, 98 kN','r']]},
'f22':{L:18.92,S:13.56,H:5.08,
 out:[0,0,.5,.2,1.6,.5,3.2,.82,4.8,1.12,6.2,1.5,7.2,2,11.9,6.78,13.3,6.78,14.7,2.6,15.4,2.3,17.5,4.45,18.55,4.45,18.7,2.2,18.92,2],
 cl:[[2.9,0,3.4,.42,4.6,.58,5.9,.5,6.4,0],[5.9,1.05,7.3,1,7.5,1.75,6.1,1.85],[17.3,.28,18.92,.4,18.92,1.62,17.3,1.5],[13.9,1.55,15.9,2.75,17.5,2.75,17.6,1.65]],
 pl:[[7.9,2,12.5,6.5],[14.35,2.7,13.65,4.45],[13.6,4.55,13.3,6.7],[1.6,0,1.6,.5]],
 hc:[[6.8,-.55,11.3,-.55,11.3,.55,6.8,.55]],hid:[[6.3,1,7.9,1,7.9,1.35,6.3,1.35]],hp:[[9.9,3.4],[10.6,4.9]],
 side:[0,1.7,1,1.95,2.8,2.35,3.6,2.55,4.2,3,5,3.28,6.2,3.12,7,2.75,8,2.6,11,2.55,12.8,2.55,15.6,5.08,16.8,5.08,17.4,2.3,18.4,2.1,18.92,2.05,18.92,1.2,17.6,1,14,.95,10,.85,7,.8,6,.85,5,1,3.5,1.3,1.5,1.55],
 sl:[[3.6,2.55,4,2.8,6.5,2.8],[8,1.55,14.6,1.5],[16.1,1.7,18.5,1.55],[5,1,6.4,1.3,7.5,1.3]],sh:[[7,.85,7,1.6,11.3,1.6,11.3,.85]],
 co:[[1.1,0,.2,-3.1,'AN/APG-77 AESA radar','r'],[9,.4,.2,3.1,'Internal weapons bays','r'],[16.6,2.3,14.2,5.6,'Canted twin tails','r'],[18.6,1,19.4,-1.2,'F119, vectoring nozzles','r']]},
'mig29':{L:17.37,S:11.36,H:4.73,
 out:[0,0,.5,.2,1.5,.45,2.8,.6,4.2,.82,4.5,.9,7,2.6,9.77,5.68,10.9,5.68,12.3,2.45,12.8,2.05,14,2.05,15.7,3.9,16.5,3.9,17.15,2,17.37,1.85],
 cl:[[2.6,0,3,.35,3.9,.5,4.9,.45,5.3,0],[16,.5,17.37,.55,17.37,1.45,16,1.5],[12.8,1.45,15.8,1.5,16.4,1.65,13.1,1.62]],
 pl:[[7.6,2.75,10.35,5.55],[12,2.8,11.1,5.4],[12.1,2.5,11.6,4],[1.5,0,1.5,.45]],hid:[[5.3,.9,7.8,1,7.8,1.7,5.5,1.5]],ci:[[2.2,0,.2]],hp:[[9,2.4],[9.5,3.6],[10,4.8]],
 side:[0,1.85,1,2.12,2.5,2.5,3.2,2.7,3.8,3.2,4.2,3.45,5.2,3.25,5.8,2.95,6.6,2.95,8.5,3.05,11,3,12.6,3,15.2,4.73,16.3,4.73,16.9,2.8,17.37,2.4,17.37,1.4,16.3,1.2,13.5,1.05,10,.95,8.2,.8,6.2,.7,5.2,.9,3.6,1.3,1.5,1.6],
 sl:[[3.2,2.7,3.6,2.9,5.6,2.95],[6.8,1.7,12.2,1.55],[14.4,1.6,17,1.45],[6.2,.7,6.8,1.4,8.2,1.5]],
 co:[[1,0,.2,-3,'N019 Sapfir-29 radar','r'],[2.2,.1,.2,3,'OLS-29 IRST','r'],[6,1.5,1.4,4.4,'LERX vortex lift','r'],[16.7,1,17.9,-1.2,'Twin RD-33 engines','r']]},
'su57':{L:20.1,S:14.1,H:4.6,
 out:[0,0,.7,.22,2,.52,3.8,.82,5.4,1.1,6.6,1.8,7.2,2.2,12.6,7.05,13.9,7.05,15.8,2.9,16.5,2.75,18.2,4.5,19.3,4.5,19.5,2.7,20.1,2.55],
 cl:[[3.4,0,3.9,.42,5.2,.55,6.5,.45,7.2,0],[18.7,1.15,20.1,1.2,20.1,2.45,18.7,2.4],[15.3,2.1,17.7,3.6,18.9,3.6,19,2.3]],
 pl:[[7.9,2.25,13.2,7],[15.2,3.4,14.5,5.8],[14.45,5.9,13.95,7],[1.7,0,1.7,.5]],
 hc:[[8.3,-.6,14,-.6,14,.6,8.3,.6]],hid:[[6,1,8.2,1.3,8.2,1.85,6.4,1.8],[8.6,2.1,10.6,2.5,10.6,2.9,8.8,2.6]],hp:[[11,3.6],[11.8,5],[12.4,6.2]],
 side:[0,1.95,1.2,2.3,3,2.75,3.8,2.9,4.6,3.5,5.6,3.7,7.2,3.3,8.5,3.1,10,3.05,13,3,15,3,17.6,4.6,18.6,4.6,19,2.9,20.1,2.7,20.1,1.4,18,1.1,14,.95,9.5,.9,7.2,.78,5.4,.95,3.6,1.4,1.4,1.65],
 sl:[[3.8,2.9,4.4,3.1,7.4,3.1],[7.2,1.7,15.8,1.55],[16.5,1.7,19.3,1.5],[5.4,.95,7.2,1.4,9,1.5]],sh:[[8.3,.9,8.3,1.7,14,1.7,14,.9]],
 co:[[1.2,0,.2,-3.3,'N036 Byelka AESA radar','r'],[5.4,1.1,.2,3.3,'Chined forebody, LERX','r'],[11,.3,2,5,'Internal weapons bays','r'],[19.4,1.8,20.8,-1.6,'3D thrust vectoring','r']]},
'rafale':{L:15.27,S:10.8,H:5.34,
 out:[0,0,.5,.2,1.5,.45,3,.7,4.1,.9,4.4,1,5.4,2.2,6.2,2.2,6.1,1.35,6.6,1.35,10.35,5.4,11.3,5.4,12.7,1.7,13.4,1.25,14.3,1.1,15.27,.95],
 cl:[[2.4,0,2.9,.42,3.9,.55,5,.45,5.6,0],[4.5,1,6.5,1.05,6.5,1.6,4.7,1.5],[13.7,.2,15.27,.25,15.27,.95,13.7,.9]],cc:[[11.2,-.1,14.1,-.1,14.3,.1,11.2,.1]],
 pl:[[7.1,1.4,10.7,5.2],[12.3,2,11.4,5.2],[12,1.9,11.6,3.5],[5,1.1,5.7,2.1],[1.5,0,1.5,.45]],cm:[[2,.22,.12]],
 hp:[[8.9,2.1],[9.5,3],[10,3.9],[10.6,4.8],[9,.9],[11,.9]],hpc:[[9.3,0],[11.5,0]],
 side:[0,1.85,1,2.15,2.4,2.6,3,2.85,3.7,3.3,4.4,3.5,5.2,3.3,5.9,2.95,7.5,2.9,10.5,2.8,12.5,5.34,13.4,5.34,13.8,2.6,14.6,2.4,15.27,2.3,15.27,1.45,14,1.2,11,1,8,.95,6,.75,4.5,.75,3.4,1.2,1.5,1.55],
 sl:[[3,2.85,3.5,3,5.6,3],[6.6,1.7,12.7,1.55],[4.4,2.25,5.9,2.25,5.9,2.1,4.5,2.1],[4.5,.75,5.6,1.3,6.6,1.4]],
 co:[[1,0,.2,-3,'RBE2-AA AESA radar','r'],[2,.22,.2,3.3,'OSF infrared search','r'],[5.8,2.1,.2,4.7,'Delta wing and canards','r'],[14.8,.6,15.8,-1.6,'Two M88 engines','r']]},
'typhoon':{L:15.96,S:10.95,H:5.28,
 out:[0,0,.5,.2,1.6,.42,3,.65,3.9,.8,4.2,.9,5.1,2.1,5.95,2.1,5.85,1.15,6.3,1.25,11.97,5.475,13.2,5.475,14.7,1.35,15.3,1.2,15.96,1.1],
 cl:[[2.2,0,2.6,.38,3.5,.52,4.5,.46,5,0],[14.6,.15,15.96,.2,15.96,.95,14.6,.9]],cc:[[8,-.45,9.6,-.45,9.6,.45,8,.45],[11.3,-.12,14.9,-.1,14.8,.1,11.5,.12]],
 pl:[[7,1.3,12.4,5.3],[14.3,1.8,13.6,5],[13.55,5.1,13.2,5.4],[4.6,1,5.5,2.1],[1.5,0,1.5,.45]],hc:[[4.2,-.55,6.8,-.55,6.8,.55,4.2,.55]],ci:[[1.95,-.3,.15]],
 hp:[[8.8,2.3],[9.6,3.3],[10.3,4.2],[11,5],[8.5,.75]],hpc:[[8,0],[9.6,0],[11.2,0]],
 side:[0,1.9,1,2.2,2.4,2.62,3.1,2.9,3.9,3.4,4.7,3.6,5.5,3.4,6.1,3,7.5,3,9,3.05,11,2.95,11.5,2.95,13.2,5.28,14.2,5.28,14.6,2.8,15.3,2.5,15.96,2.35,15.96,1.45,14.5,1.2,11,1,8.5,.95,6.6,.8,5,.7,4.1,.8,3.3,1.35,1.5,1.6],
 sl:[[3.1,2.9,3.6,3.05,5.9,3.05],[6.3,1.75,14.7,1.6],[4,2.2,5.7,2.25,5.7,2.1,4.1,2.1],[4.1,.8,5.5,1.15,6.6,1.2]],
 co:[[1.95,-.3,.2,-3.3,'PIRATE infrared search','r'],[1,.1,.2,3.3,'Captor-E AESA radar','r'],[5.5,2,1.4,4.7,'Close-coupled canards','r'],[15.4,.55,16.4,-1.4,'Two EJ200 engines','r']]},
'j20':{L:20.3,S:12.88,H:4.45,
 out:[0,0,1,.28,2.5,.6,4.4,.95,6.2,1.2,6.5,1.3,7.7,2.9,8.7,2.9,8.3,1.75,8.9,1.95,12.7,6.44,13.7,6.44,15.4,2.3,16,2.1,17.6,1.95,19,1.8,20.3,1.65],
 cl:[[3.7,0,4.2,.42,5.4,.55,6.6,.45,7.2,0],[18.9,.45,20.3,.5,20.3,1.55,18.9,1.5],[15.4,1.15,18.1,2.3,19.3,2.3,19.2,1.3]],
 pl:[[9.6,2,13.1,6.1],[15.1,2.6,14.3,5],[14.2,5.1,13.7,6.3],[6.8,1.35,7.9,2.8],[1.8,0,1.8,.5]],
 hc:[[9,-.6,15,-.6,15,.6,9,.6]],hid:[[8.2,1.55,10.7,1.65,10.7,2,8.4,2],[6.2,.95,8.2,1,8.2,1.7,6.6,1.6]],
 side:[0,1.8,1.2,2.15,3,2.55,3.8,2.75,4.6,3.25,5.6,3.45,7,3.1,8.4,2.95,11,2.9,14,2.85,14.5,2.85,17.5,4.45,18.5,4.45,18.9,2.7,19.6,2.5,20.3,2.4,20.3,1.45,19,1.1,15,.95,11,.85,8.3,.7,6.5,.8,4.5,1.05,2.4,1.2,1,1.5],
 sl:[[3.8,2.75,4.4,3,7,3.05],[6.7,2.4,8.3,2.6,8.2,2.45,6.7,2.3],[8.9,1.7,15.4,1.6],[6.5,.8,7.5,1.3,8.6,1.4]],sc:[[14.6,1,17.4,1,17,.35,15.2,.35]],sh:[[9,.85,9,1.6,15,1.6,15,.85]],
 co:[[1.2,0,.2,-3.4,'Type 1475 AESA radar','r'],[7.7,2.5,.2,3.6,'Canard-delta layout','r'],[12,0,1.6,5,'Internal main and side bays','r'],[19.9,1,21,-1.4,'Twin engines','r']]}
};

/* ============ SKYFORM ENGINE ============
   Plain JavaScript ports of three React Bits components (no React or npm needed):
   GhostFibers (WebGL2 background), BorderGlow (glowing edge cards), BranchedMenu (tree navigation).
   MOTION: panels 1000ms expo-out, 50ms cascade | photo fade 1200ms with 1.05 to 1.0 scale | intro progress, then Start
   IMAGES: assets/jets/<id>.jpg. Per jet: pos:'x% y%' sets the focal point, fit:'contain' shows the whole photo, fit:'cover' fills the frame */
const $=s=>document.querySelector(s), rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const HERO_VIEW='model';          // 'model': 3D model first (the drawing stays as automatic fallback and as a switch). 'scheme': drawing only.
const MODEL_DIR='assets/models/'; // one file per aircraft, named <id>.glb (f35, gripen-e, f22, mig29, su57, rafale, typhoon, j20)
if(HERO_VIEW==='model'){const ms=document.createElement('script');ms.type='module';ms.src='https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js';document.head.appendChild(ms)}
const ST={s:'In service',o:'Ordered',p:'Proposed',r:'Rumored',u:'Status unclear'};
const CODE=['F-35','Gripen','F-22','MiG-29','Su-57','Rafale','Typhoon','J-20'];
const PAL=['#9cc3e6','#d9c38f','#9fd0b0','#d89fb4'];
const dl=a=>'<dl>'+a.map(x=>`<dt>${x[0]}</dt><dd>${fl(x[1])}</dd>`).join('')+'</dl>';
const hsl=(h,s,l)=>{s/=100;l/=100;const k=n=>(n+h/30)%12,a=s*Math.min(l,1-l),f=n=>l-a*Math.max(-1,Math.min(k(n)-3,Math.min(9-k(n),1)));return [f(0),f(8),f(4)]};
let cur=0,busy=false,pinned=false,started=false,flt={j:J[0].id,s:'all'},sel=['f35','f22','su57'],fibers=null,menu=null;

/* ---------- GhostFibers (WebGL2 shader background) ---------- */
const GF_V=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;
const GF_F=`#version 300 es
precision highp float;
out vec4 outColor;
uniform vec2 uResolution;
uniform float uDpr;
uniform float uTime;
uniform float uAngle;
uniform float uScale;
uniform float uLayers;
uniform float uWaves;
uniform float uTwist;
uniform float uThreads;
uniform float uSpread;
uniform float uThickness;
uniform float uGlow;
uniform float uBrightness;
uniform float uVignette;
uniform float uGrain;
uniform float uIntro;
uniform vec3 uGlowColor;
uniform vec3 uLineColor;
uniform vec4 uLens;
uniform float uLight;

const float PI = 3.14159265359;

mat2 rotate2d(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float hairline(float value, float width, float px) {
  px = max(px, 1e-5);
  float w = 0.5 * width * uDpr * px;
  float draw = max(w, 0.75 * px);
  return exp(-value * value / (draw * draw)) * (w / draw);
}

void main() {
  vec2 resolution = uResolution * uDpr;
  vec2 uv = (2.0 * gl_FragCoord.xy - resolution) / resolution.y;
  float time = uTime;
  vec2 p = uv / max(uScale, 0.05);
  p = rotate2d(uAngle) * p;

  vec2 lensPoint = (2.0 * vec2(uLens.x, uResolution.y - uLens.y) * uDpr - resolution) / resolution.y;
  float lens = exp(-dot(uv - lensPoint, uv - lensPoint) / (uLens.z * uLens.z)) * uLens.w;

  float threads = 0.0;
  float ghosts = 0.0;
  float halo = 0.0;

  for (int index = 0; index < 10; index++) {
    float fi = float(index) + 1.0;
    if (fi > uLayers) break;

    p += uWaves * sin(p.yx * fi * 3.0 + time * (0.15 + fi * 0.08));
    float radius = length(p);
    float polarAngle = atan(p.y, p.x);
    polarAngle += sin(radius * 5.0 - time * 1.2 + fi) * uTwist;
    p = vec2(cos(polarAngle), sin(polarAngle)) * radius;

    float strand = p.x * 3.0 + time + fi;
    float center = PI * floor(strand / PI + 0.5);
    float offset = strand - center;
    float strandId = center / PI;
    halo += exp(-8.0 * abs(sin(strand))) / fi;

    float count = max(uThreads, 1.0);
    float even = 1.0 - mod(count, 2.0);
    float spacing = 0.03 * uSpread;
    float slot = offset / spacing + 0.5 * even;
    float slotPx = fwidth(strand) / spacing;
    float thread = floor(slot + 0.5);
    float rank = thread - 0.5 * even;
    float inside = step(abs(rank), 0.5 * (count - 1.0) + 0.01);
    float seed = hash(vec2(strandId * 7.13 + fi * 3.7, thread * 1.91 + fi));
    float shimmer = 0.55 + 0.45 * sin(p.y * (1.6 + seed * 1.8) + time * (0.6 + seed) + seed * 6.283);
    float taper = 1.0 - smoothstep(0.0, 0.5 * count + 0.6, abs(rank)) * 0.65;
    float appear = smoothstep(seed * 0.6, seed * 0.6 + 0.4, uIntro);
    threads += hairline(slot - thread, uThickness, slotPx) * inside * mix(0.35, 1.0, seed) * shimmer * taper * appear / sqrt(fi);

    float ghostPhase = p.x * (5.0 + fi * 2.0) + sin(p.y * 3.0 + time);
    float ghostLine = sin(ghostPhase) / max(fwidth(sin(ghostPhase)), 1e-5);
    ghosts += exp(-ghostLine * ghostLine / (0.8 * uThickness * uDpr + 0.6)) / fi;
  }

  float center = exp(-2.2 * dot(uv, uv));
  float cloud = exp(-1.5 * length(uv + vec2(sin(time * 0.3) * 0.25, cos(time * 0.25) * 0.18)));
  float vignette = 1.0 - smoothstep(0.35, 1.45, length(uv));
  float edge = mix(1.0 - uVignette, 1.0, vignette);
  float intro = smoothstep(0.0, 1.0, uIntro);
  float grain = (hash(gl_FragCoord.xy + fract(time * 13.7) * 91.0) - 0.5) * uGrain;

  float threadLight = threads * 2.2 * (1.0 + 0.6 * lens);
  float ghostLight = ghosts * 0.1 * intro * (1.0 + 1.5 * lens);
  float glowLight = halo * 0.6 * uGlow * intro;
  float airLight = (center * 0.07 + cloud * 0.1) * uGlow * intro;

  if (uLight > 0.5) {
    float ink = (1.0 - exp(-(threadLight * 1.1 + ghostLight * 1.4) * uBrightness)) * edge;
    float wash = (1.0 - exp(-(glowLight + airLight * 0.6) * 0.9 * uBrightness)) * 0.5 * edge;
    ink = clamp(ink * (1.0 + grain * 2.0), 0.0, 1.0);
    vec3 color = uLineColor * ink + uGlowColor * wash * (1.0 - ink);
    outColor = vec4(color, ink + wash * (1.0 - ink));
  } else {
    vec3 light = uLineColor * (threadLight + ghostLight) + uGlowColor * (glowLight + airLight);
    light *= uBrightness * edge;
    vec3 color = 1.0 - exp(-light);
    float peak = max(color.r, max(color.g, color.b));
    color = max(color + grain * peak, 0.0);
    outColor = vec4(color, max(color.r, max(color.g, color.b)));
  }
}`;
function GhostFibers(container,opts){
  const S=Object.assign({glowColor:'#2f5bff',lineColor:'',speed:.2,scale:2,rotation:0,rotationSpeed:.25,layers:4,waves:.015,twist:.1,threads:1,spread:1,thickness:1,glow:2,brightness:1.4,vignette:.8,grain:.03,mouseInteraction:true,intro:true,lightMode:false,paused:false,dpr:0},opts);
  const norm=()=>{S.scale=Math.max(.05,S.scale);S.layers=clamp(Math.round(S.layers),1,10);S.waves=Math.max(0,S.waves);S.twist=Math.max(0,S.twist);S.threads=clamp(Math.round(S.threads),1,16);S.spread=Math.max(.1,S.spread);S.thickness=clamp(S.thickness,.2,6);S.glow=Math.max(0,S.glow);S.brightness=Math.max(0,S.brightness);S.vignette=clamp(S.vignette,0,1);S.grain=Math.max(0,S.grain)};norm();
  const canvas=document.createElement('canvas');canvas.className='ghost-fibers-canvas';canvas.setAttribute('aria-hidden','true');container.appendChild(canvas);
  const gl=canvas.getContext('webgl2',{alpha:true,premultipliedAlpha:true,antialias:false,depth:false,stencil:false});
  const fail=()=>{canvas.remove();return null};
  if(!gl)return fail();
  const compile=(t,src)=>{const s=gl.createShader(t);gl.shaderSource(s,src);gl.compileShader(s);return gl.getShaderParameter(s,gl.COMPILE_STATUS)?s:null};
  const vs=compile(gl.VERTEX_SHADER,GF_V),fs=compile(gl.FRAGMENT_SHADER,GF_F),program=gl.createProgram();
  if(!vs||!fs)return fail();
  gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);
  if(!gl.getProgramParameter(program,gl.LINK_STATUS))return fail();
  const U={};['uResolution','uDpr','uTime','uAngle','uScale','uLayers','uWaves','uTwist','uThreads','uSpread','uThickness','uGlow','uBrightness','uVignette','uGrain','uIntro','uGlowColor','uLineColor','uLens','uLight'].forEach(n=>U[n]=gl.getUniformLocation(program,n));
  const vao=gl.createVertexArray(),buffer=gl.createBuffer();
  gl.bindVertexArray(vao);gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
  const pos=gl.getAttribLocation(program,'aPosition');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);gl.bindVertexArray(null);
  const probe=document.createElement('canvas');probe.width=probe.height=1;const pc=probe.getContext('2d',{willReadFrequently:true});
  const st={time:0,spin:0,introTime:S.intro&&!rm?0:10,width:1,height:1,ratio:1,colorKey:'',manual:false,glow:[.2,.22,.63],line:[.8,.82,1],pointer:{x:0,y:0,inside:false},lens:{x:0,y:0,vx:0,vy:0,strength:0,placed:false}};
  let raf=0,last=0,visible=true,alive=true;
  const toRgb=(v,fb)=>{if(!pc||!v)return fb;pc.clearRect(0,0,1,1);pc.fillStyle='#000000';pc.fillStyle=v;pc.fillRect(0,0,1,1);const d=pc.getImageData(0,0,1,1).data;return [d[0]/255,d[1]/255,d[2]/255]};
  const tint=g=>g.map(c=>c+(1-c)*.78);
  const colors=()=>{if(st.manual)return;const key=`${S.glowColor}|${S.lineColor}|${S.lightMode}`;if(key===st.colorKey)return;st.colorKey=key;st.glow=toRgb(S.glowColor,[.2,.22,.63]);st.line=S.lineColor?toRgb(S.lineColor,st.glow):S.lightMode?st.glow.map(c=>c*.6):tint(st.glow)};
  const render=()=>{
    colors();const ip=clamp(st.introTime/2.2,0,1);
    gl.viewport(0,0,canvas.width,canvas.height);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.useProgram(program);
    gl.uniform2f(U.uResolution,st.width,st.height);gl.uniform1f(U.uDpr,st.ratio);gl.uniform1f(U.uTime,st.time);
    gl.uniform1f(U.uAngle,S.rotation*Math.PI/180+st.spin);gl.uniform1f(U.uScale,S.scale);gl.uniform1f(U.uLayers,S.layers);gl.uniform1f(U.uWaves,S.waves);
    gl.uniform1f(U.uTwist,S.twist);gl.uniform1f(U.uThreads,S.threads);gl.uniform1f(U.uSpread,S.spread);gl.uniform1f(U.uThickness,S.thickness);
    gl.uniform1f(U.uGlow,S.glow);gl.uniform1f(U.uBrightness,S.brightness);gl.uniform1f(U.uVignette,S.vignette);gl.uniform1f(U.uGrain,S.grain);
    gl.uniform1f(U.uIntro,1-Math.pow(1-ip,3));gl.uniform3f(U.uGlowColor,st.glow[0],st.glow[1],st.glow[2]);gl.uniform3f(U.uLineColor,st.line[0],st.line[1],st.line[2]);
    gl.uniform4f(U.uLens,st.lens.x,st.lens.y,.32,st.lens.strength);gl.uniform1f(U.uLight,S.lightMode?1:0);
    gl.bindVertexArray(vao);gl.drawArrays(gl.TRIANGLES,0,3);gl.bindVertexArray(null);
  };
  const resize=()=>{
    const w=Math.max(1,container.clientWidth),h=Math.max(1,container.clientHeight),base=Math.min(S.dpr||devicePixelRatio||1,2),longest=Math.max(w,h)*base;
    const ratio=longest>2048?base*2048/longest:base,pw=Math.max(1,Math.round(w*ratio)),ph=Math.max(1,Math.round(h*ratio));
    if(canvas.width!==pw||canvas.height!==ph){canvas.width=pw;canvas.height=ph}
    st.width=w;st.height=h;st.ratio=canvas.width/w;render();
  };
  const frame=now=>{
    raf=0;if(!alive||!visible||document.hidden)return;
    const dt=last?Math.min(.05,(now-last)/1000):1/60;last=now;const moving=!S.paused&&!rm;
    if(moving){st.time+=dt*S.speed;st.spin+=dt*S.speed*S.rotationSpeed}
    const introducing=st.introTime<2.2;if(introducing)st.introTime+=dt;
    const {pointer,lens}=st,active=S.mouseInteraction&&pointer.inside&&!rm;
    if(active&&!lens.placed){lens.x=pointer.x;lens.y=pointer.y;lens.vx=0;lens.vy=0;lens.placed=true}
    lens.vx+=(110*(pointer.x-lens.x)-19*lens.vx)*dt;lens.vy+=(110*(pointer.y-lens.y)-19*lens.vy)*dt;lens.x+=lens.vx*dt;lens.y+=lens.vy*dt;
    const goal=active?1:0;lens.strength+=(goal-lens.strength)*(1-Math.exp(-dt/(goal>lens.strength?.3:.55)));
    if(!active&&lens.strength<.001)lens.placed=false;
    render();
    const settling=Math.abs(goal-lens.strength)>.002||Math.hypot(lens.vx,lens.vy)>.5;
    if(moving||introducing||settling)raf=requestAnimationFrame(frame);else last=0;
  };
  const wake=()=>{if(!raf&&alive&&visible&&!document.hidden)raf=requestAnimationFrame(frame)};
  const onMove=e=>{const r=container.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;st.pointer.x=x;st.pointer.y=y;st.pointer.inside=x>=0&&y>=0&&x<=r.width&&y<=r.height;wake()};
  const onLeave=()=>{st.pointer.inside=false;wake()};
  const onVis=()=>{last=0;wake()};
  const ro=new ResizeObserver(resize);ro.observe(container);
  const io=new IntersectionObserver(es=>{visible=es.some(e=>e.isIntersecting);if(visible){last=0;wake()}});io.observe(container);
  addEventListener('pointermove',onMove,{passive:true});document.documentElement.addEventListener('pointerleave',onLeave);document.addEventListener('visibilitychange',onVis);
  resize();wake();
  return {
    set(p){Object.assign(S,p);norm();if('glowColor' in p||'lineColor' in p||'lightMode' in p){st.manual=false;st.colorKey=''}if(!raf)render();wake()},
    setColor(rgb){st.manual=true;st.glow=rgb;st.line=tint(rgb);if(!raf)render();wake()},
    destroy(){alive=false;cancelAnimationFrame(raf);ro.disconnect();io.disconnect();removeEventListener('pointermove',onMove);document.documentElement.removeEventListener('pointerleave',onLeave);document.removeEventListener('visibilitychange',onVis);canvas.remove()}
  };
}
let gcol=hsl(J[0].h,70,52);
function tweenGlow(to){const from=gcol.slice(),t0=performance.now();(function f(n){const t=Math.min((n-t0)/1400,1),e=1-Math.pow(1-t,3);gcol=from.map((v,k)=>v+(to[k]-v)*e);fibers&&fibers.setColor(gcol);if(t<1)requestAnimationFrame(f)})(t0)}

/* ---------- BorderGlow (glowing edge card) ---------- */
const GP=['80% 55%','69% 34%','8% 6%','41% 38%','86% 85%','82% 18%','51% 4%'],GK=['one','two','three','four','five','six','seven'],CM=[0,1,2,0,1,2,1];
function bgStyle(o){
  const O=Object.assign({edge:30,glow:'210 70 80',bg:'#0c0e10',radius:18,glowRadius:36,intensity:1,cone:25,fill:.5,colors:['#9cc3e6','#6f8fd9','#c9defa']},o);
  const m=O.glow.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/)||[0,40,80,80],base=`${m[1]}deg ${m[2]}% ${m[3]}%`,ops=[100,60,50,40,30,20,10],keys=['','-60','-50','-40','-30','-20','-10'];
  let v=`--card-bg:${O.bg};--edge-sensitivity:${O.edge};--border-radius:${O.radius}px;--glow-padding:${O.glowRadius}px;--cone-spread:${O.cone};--fill-opacity:${O.fill};`;
  ops.forEach((p,i)=>v+=`--glow-color${keys[i]}:hsl(${base} / ${Math.min(p*O.intensity,100)}%);`);
  GK.forEach((k,i)=>v+=`--gradient-${k}:radial-gradient(at ${GP[i]}, ${O.colors[Math.min(CM[i],O.colors.length-1)]} 0px, transparent 50%);`);
  return v+`--gradient-base:linear-gradient(${O.colors[0]} 0 100%);`;
}
const glowCard=(inner,o,cls='')=>`<div class="border-glow-card ${cls}" style="${bgStyle(o)}"><span class="edge-light"></span><div class="border-glow-inner">${inner}</div></div>`;
document.addEventListener('pointermove',e=>{
  const c=e.target.closest&&e.target.closest('.border-glow-card');if(!c)return;
  const r=c.getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dy=e.clientY-r.top-r.height/2,cx=r.width/2,cy=r.height/2;
  const kx=dx?cx/Math.abs(dx):Infinity,ky=dy?cy/Math.abs(dy):Infinity,edge=clamp(1/Math.min(kx,ky),0,1);
  let a=dx||dy?Math.atan2(dy,dx)*180/Math.PI+90:0;if(a<0)a+=360;
  c.style.setProperty('--edge-proximity',(edge*100).toFixed(3));c.style.setProperty('--cursor-angle',a.toFixed(3)+'deg');
});
const eo=x=>1-Math.pow(1-x,3),ei=x=>x*x*x;
function anim({start=0,end=100,duration=1000,delay=0,ease=eo,onUpdate,onEnd}){const t0=performance.now()+delay;function tick(){const t=Math.min((performance.now()-t0)/duration,1);onUpdate(start+(end-start)*ease(Math.max(t,0)));if(t<1)requestAnimationFrame(tick);else onEnd&&onEnd()}setTimeout(()=>requestAnimationFrame(tick),delay)}
function bgSweep(c){
  const a0=110,a1=465,ang=v=>c.style.setProperty('--cursor-angle',((a1-a0)*(v/100)+a0)+'deg');
  c.classList.add('sweep-active');c.style.setProperty('--cursor-angle',a0+'deg');
  anim({duration:500,onUpdate:v=>c.style.setProperty('--edge-proximity',v)});
  anim({ease:ei,duration:1500,end:50,onUpdate:ang});
  anim({ease:eo,delay:1500,duration:2250,start:50,end:100,onUpdate:ang});
  anim({ease:ei,delay:2500,duration:1500,start:100,end:0,onUpdate:v=>c.style.setProperty('--edge-proximity',v),onEnd:()=>c.classList.remove('sweep-active')});
}

/* ---------- BranchedMenu (tree navigation) ---------- */
function BranchedMenu(root,o){
  const O=Object.assign({items:[],defaultOpen:[0],defaultActive:'',onSelect(){},color:'#e3e8ec',accentColor:'#9cc3e6',lineColor:'#2a323a',width:300,rowHeight:36,indent:40,trunk:14,radius:10,lineWidth:1.5,fontSize:14,drawDuration:400,foldDuration:300},o);
  const PAD=6,MARK=16,open=new Set(O.defaultOpen);let active=O.defaultActive;
  const r=Math.min(O.radius,O.rowHeight/2-2),endX=O.indent-8,rowY=k=>PAD+k*O.rowHeight+O.rowHeight/2;
  const branch=k=>`M ${O.trunk} ${rowY(k)-r} A ${r} ${r} 0 0 0 ${O.trunk+r} ${rowY(k)} H ${endX}`;
  const reach=k=>`M ${O.trunk} 0 V ${rowY(k)-r} A ${r} ${r} 0 0 0 ${O.trunk+r} ${rowY(k)} H ${endX}`;
  const len=k=>rowY(k)-r+Math.PI*r/2+(endX-O.trunk-r);
  root.classList.add('branched-menu');
  root.style.cssText=`--bm-w:${O.width}px;--bm-ink:${O.color};--bm-accent:${O.accentColor};--bm-line:${O.lineColor};--bm-font:${O.fontSize}px;--bm-row:${O.rowHeight}px;--bm-indent:${O.indent}px;--bm-line-w:${O.lineWidth};--bm-draw:${O.drawDuration}ms;--bm-fold:${O.foldDuration}ms`;
  root.innerHTML='<span class="branched-menu__marker" aria-hidden="true"></span>'+O.items.map((it,i)=>{
    const kids=it.children,h=PAD*2+kids.length*O.rowHeight,op=open.has(i);
    return `<div class="branched-menu__section"${op?' data-open':''} data-s="${i}"><button type="button" class="branched-menu__head" aria-expanded="${op}" data-h="${i}">${it.label}</button>
    <div class="branched-menu__body"><div class="branched-menu__fold"><div class="branched-menu__tree" style="height:${h}px">
    <svg class="branched-menu__lines" width="${O.indent}" height="${h}" aria-hidden="true"><path class="branched-menu__base" d="M ${O.trunk} 0 V ${rowY(kids.length-1)-r}"/>
    ${kids.map((k,j)=>`<path class="branched-menu__base" d="${branch(j)}"/>`).join('')}
    ${kids.map((k,j)=>`<path class="branched-menu__reach" data-v="${k.value}" d="${reach(j)}" style="stroke-dasharray:${len(j)};stroke-dashoffset:${len(j)}"/>`).join('')}</svg>
    ${kids.map(k=>`<button type="button" class="branched-menu__item" data-v="${k.value}" tabindex="${op?0:-1}"><span class="branched-menu__label">${k.label}</span></button>`).join('')}
    </div></div></div></div>`}).join('');
  const marker=root.querySelector('.branched-menu__marker'),heads=[...root.querySelectorAll('.branched-menu__head')];
  const secOf=v=>O.items.findIndex(it=>it.children.some(k=>k.value===v));
  function place(glide){const i=secOf(active),on=i>=0&&open.has(i)&&heads[i];if(!glide)marker.style.transition='none';
    if(on)marker.style.top=`${heads[i].offsetTop+(heads[i].offsetHeight-MARK)/2}px`;marker.toggleAttribute('data-on',!!on);
    if(!glide){void marker.offsetHeight;marker.style.transition=''}}
  function sync(){
    root.querySelectorAll('.branched-menu__item').forEach(b=>{const a=b.dataset.v===active;b.toggleAttribute('data-active',a);if(a)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current')});
    root.querySelectorAll('.branched-menu__reach').forEach(p=>{p.style.strokeDashoffset=p.dataset.v===active?'0':p.style.strokeDasharray});place(true);
  }
  function toggle(i){const sec=root.querySelector(`[data-s="${i}"]`),o2=!open.has(i);o2?open.add(i):open.delete(i);sec.toggleAttribute('data-open',o2);
    sec.querySelector('.branched-menu__head').setAttribute('aria-expanded',o2);sec.querySelectorAll('.branched-menu__item').forEach(b=>b.tabIndex=o2?0:-1);place(true)}
  root.addEventListener('click',e=>{
    const h=e.target.closest('[data-h]');if(h){toggle(+h.dataset.h);return}
    const b=e.target.closest('.branched-menu__item');if(b){active=b.dataset.v;sync();O.onSelect(active)}
  });
  new ResizeObserver(()=>place(false)).observe(root);sync();
  return {setActive(v){if(v===active)return;active=v;const i=secOf(v);if(i>=0&&!open.has(i))toggle(i);sync()}};
}

/* ---------- ratings: two editorial indexes built from open data ---------- */
const W_D=[.25,.25,.15,.20,.15], W_B=[.25,.25,.20,.10,.10,.10];
const LD=['Thrust-to-weight','Agility','High-angle control','Short-range weapons','Close-in awareness'];
const LBV=['Sensors','Stealth','Long-range weapons','Reach','Networking','Electronic warfare'];
const dot=(a,w)=>a.reduce((s,v,k)=>s+v*w[k],0);
const SC=J.map(j=>{
  const r=RT[j.id],tw=j.s[3][0]*1000/(j.s[4][0]*9.80665),twS=clamp((tw-.5)/.45*10,0,10),reach=clamp(j.s[1][0]/200,0,10);
  const df=[twS,...r.df],bv=[r.bv[0],r.bv[1],r.bv[2],reach,r.bv[3],r.bv[4]];
  return {tw,df,bv,d:Math.round(dot(df,W_D)*10),b:Math.round(dot(bv,W_B)*10),conf:r.conf};
});
const fmt=(n,d=0)=>n.toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d});
function spider(labels,series,title){
  const cx=230,cy=170,R=100,n=labels.length,ang=k=>-Math.PI/2+k*2*Math.PI/n,pt=(k,v)=>[cx+Math.cos(ang(k))*R*v/10,cy+Math.sin(ang(k))*R*v/10];
  const P=a=>a.map(x=>x.toFixed(1)).join(','),ring=f=>labels.map((_,k)=>P(pt(k,10*f))).join(' ');
  let s=`<svg class="spd" viewBox="0 0 460 340" role="img" aria-label="${title}">`;
  [.25,.5,.75,1].forEach(f=>s+=`<polygon class="rg" points="${ring(f)}"/>`);
  labels.forEach((l,k)=>{const [x,y]=pt(k,10),[lx,ly]=pt(k,11.8),c=Math.cos(ang(k));
    s+=`<line class="ax" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/><text class="lb" x="${lx.toFixed(1)}" y="${(ly+3).toFixed(1)}" text-anchor="${c>.3?'start':c<-.3?'end':'middle'}">${l}</text>`});
  series.forEach((sr,i)=>s+=`<polygon class="sr" style="--c:${sr.col};animation-delay:${i*90}ms" points="${sr.vals.map((v,k)=>P(pt(k,v))).join(' ')}"/>`);
  return s+'</svg>';
}
function cmp(focusId){
  const idx=sel.map(id=>J.findIndex(j=>j.id===id));
  $('#cj').innerHTML=J.map((j,i)=>{const k=sel.indexOf(j.id);return `<button data-cs="${j.id}" aria-pressed="${k>=0}" style="--c:${k>=0?PAL[k]:'transparent'}">${CODE[i]}</button>`}).join('');
  const names=idx.map(i=>J[i].n);
  const card=(i,k)=>glowCard(`<div class="sbi"><div class="sbt" style="color:${PAL[k]}">${J[i].n}</div>
    <div class="sbr"><div><span class="n" data-t="${SC[i].d}" data-d="0">0</span><small>Dogfight</small></div><div><span class="n" data-t="${SC[i].b}" data-d="0">0</span><small>Air battle</small></div></div>
    <div class="sbc">Rating confidence: ${SC[i].conf}</div></div>`,{glow:`${J[i].h} 70 76`,colors:[`hsl(${J[i].h} 70% 72%)`,`hsl(${J[i].h+30} 65% 62%)`,`hsl(${J[i].h-25} 70% 80%)`],radius:14,glowRadius:28,intensity:.9});
  const numRows=[
    ['Top speed',i=>J[i].s[0][0],v=>'Mach '+v.toFixed(2).replace(/0$/,''),1],['Combat radius',i=>J[i].s[1][0],v=>fmt(v)+' km',1],['Service ceiling',i=>J[i].s[2][0],v=>fmt(v)+' m',1],
    ['Engine thrust',i=>J[i].s[3][0],v=>fmt(v)+' kN',1],['Max takeoff weight',i=>J[i].s[4][0],v=>fmt(v)+' kg',0],['Thrust-to-weight',i=>SC[i].tw,v=>v.toFixed(2),1],['Hardpoints',i=>J[i].hp[0],v=>String(v),1]];
  const txt=(l,f)=>`<div class="cl">${l}</div>`+idx.map(i=>`<div class="cc">${f(i)}</div>`).join('');
  const num=r=>{const all=J.map((_,i)=>r[1](i)),mx=Math.max(...all),best=Math.max(...idx.map(i=>r[1](i)));
    return `<div class="cl">${r[0]}</div>`+idx.map(i=>{const v=r[1](i);return `<div class="cc bar${r[3]&&v===best?' best':''}" style="--w:${(v/mx).toFixed(3)}">${r[2](v)}</div>`}).join('')};
  const topD=[...idx].sort((a,b)=>SC[b].d-SC[a].d)[0],topB=[...idx].sort((a,b)=>SC[b].b-SC[a].b)[0];
  $('#cout').innerHTML=`<div class="sbs">${idx.map((i,k)=>card(i,k)).join('')}</div>
  <p class="verdict">In close-in dogfighting this model puts <b>${J[topD].n}</b> first (${SC[topD].d}). In a classic realistic air battle, decided by detection, stealth, missiles and networking, it puts <b>${J[topB].n}</b> first (${SC[topB].b}).</p>
  <div class="pair"><div class="gl"><h2>Dogfight rating, factor by factor</h2>${spider(LD,idx.map((i,k)=>({vals:SC[i].df,col:PAL[k]})),'Dogfight factors for '+names.join(', '))}</div>
  <div class="gl"><h2>Air battle rating, factor by factor</h2>${spider(LBV,idx.map((i,k)=>({vals:SC[i].bv,col:PAL[k]})),'Air battle factors for '+names.join(', '))}</div></div>
  <div class="gl ctw"><h2>Side by side</h2><div class="cmt" style="--n:${idx.length}"><div class="ch"></div>${idx.map((i,k)=>`<div class="ch" style="color:${PAL[k]}">${J[i].n}</div>`).join('')}
  ${txt('Generation',i=>J[i].g)}${txt('Role',i=>J[i].r)}${txt('First flight',i=>J[i].ff)}${numRows.map(num).join('')}${txt('Radar cross-section',i=>J[i].rcs)}</div></div>
  <details class="gl meth"><summary>How the ratings work</summary>
  <p><b>Dogfight rating</b> is a close-range maneuvering fight. Weights: thrust-to-weight 25%, agility 25%, high-angle control (thrust vectoring and post-stall handling) 15%, short-range missiles and helmet sights 20%, close-in awareness 15%.</p>
  <p><b>Air battle rating</b> is a classic realistic modern fight. Weights: sensors 25%, stealth 25%, long-range missiles 20%, reach 10%, networking 10%, electronic warfare 10%.</p>
  <p>Thrust-to-weight and reach are calculated from the figures on each profile (thrust divided by max takeoff weight, and combat radius out of 2,000 km). The other factors are editorial scores from 1 to 10 based on open sources. Confidence is lower for the Su-57 and J-20 because their data is less verified.</p>
  <p>These are SkyForm's own estimates, not official or classified assessments. Real outcomes depend on pilots, tactics, weapons loadouts, support aircraft, numbers and luck.</p></details>`;
  $('#cout').querySelectorAll('.n').forEach(count);
  if(focusId){const b=$(`#cj [data-cs="${focusId}"]`);b&&b.focus({preventScroll:true})}
}

/* ---------- air forces index ---------- */
function reg(){
  $('#fj').innerHTML=[['all','All aircraft'],...J.map((j,i)=>[j.id,CODE[i]])].map(a=>`<button data-fj="${a[0]}" aria-pressed="${flt.j===a[0]}">${a[1]}</button>`).join('');
  $('#fs').innerHTML=[['all','All statuses'],...Object.entries(ST)].map(a=>`<button data-fs="${a[0]}" aria-pressed="${flt.s===a[0]}">${a[1]}</button>`).join('');
  let k=0;
  const rows=J.map((j,i)=>flt.j!=='all'&&flt.j!==j.id?'':OPS[j.id].filter(r=>flt.s==='all'||r[2]===flt.s)
    .map(r=>`<div class="rw" style="--k:${k++}"><span class="jc">${CODE[i]}</span><span class="ct">${fl(r[0])}</span><span class="af">${r[1]}</span><span class="st ${r[2]}">${ST[r[2]]}</span><span class="nt">${fl(r[3]||'')}</span></div>`).join('')).join('');
  $('#rows').innerHTML=rows||'<p class="note" style="margin-top:16px">No air forces match these filters.</p>';
}
$('#tl').innerHTML=A.map(e=>`<article class="panel ev${e.s==='Completed'?' done':''}"><div class="d">${e.d}</div><h4>${e.n}</h4><p class="p">${fl(e.p)}</p><div class="chips">${e.l.map(x=>`<span>${fl(x)}</span>`).join('')}</div><p class="note" style="margin-top:12px">${e.s}</p></article>`).join('');

/* ---------- aircraft profile ---------- */
/* ---------- technical scheme: top view and side view drawn from GEO, with dimensions and callouts ---------- */
function scheme(j,i){
  const G=GEO[j.id],k=Math.min(600/G.L,430/(G.S+G.H+2.2)),ox=380-G.L*k/2,cy=34+G.S*k/2,gy=34+G.S*k+1.3*k+G.H*k;
  const u=px=>+(px/k).toFixed(4),f1=v=>+v.toFixed(1),h=G.out;
  const D=a=>{let s='';for(let q=0;q<a.length;q+=2)s+=(q?'L':'M')+a[q]+' '+a[q+1];return s},Z=a=>D(a)+'Z',MR='transform="scale(1,-1)"';
  const SIG='#cfe3f5',DIM='rgba(156,195,230,.6)',FNT='rgba(156,195,230,.42)',TINT='rgba(156,195,230,.1)';
  const ln=(w,c,dash)=>`stroke="${c}" stroke-width="${u(w)}" fill="none" stroke-linejoin="round" stroke-linecap="round"${dash?` stroke-dasharray="${u(4)} ${u(3)}"`:''}`;
  const sh=(w,c,f)=>`stroke="${c}" stroke-width="${u(w)}" fill="${f}" stroke-linejoin="round"`;
  const mir=(d,a)=>`<path d="${d}" ${a}/><path d="${d}" ${MR} ${a}/>`;
  const fade=(s,d)=>`<g class="fi" style="animation-delay:${d}s">${s}</g>`;
  const full=[...h];for(let q=h.length-2;q>=0;q-=2)full.push(h[q],-h[q+1]);
  /* top view */
  let t=`<path d="${Z(full)}" fill="hsl(${j.h} 55% 62% / .09)" class="fi" style="animation-delay:1s"/><path d="${Z(full)}" pathLength="1" class="dr" ${ln(1.7,SIG)}/>`,d='';
  (G.cl||[]).forEach(a=>d+=mir(Z(a),sh(.9,SIG,TINT)));
  (G.cc||[]).forEach(a=>d+=`<path d="${Z(a)}" ${sh(.9,SIG,TINT)}/>`);
  (G.pl||[]).forEach(a=>d+=mir(D(a),ln(.7,FNT)));
  (G.hid||[]).forEach(a=>d+=mir(Z(a),ln(.7,DIM,1)));
  (G.hc||[]).forEach(a=>d+=`<path d="${Z(a)}" ${ln(.7,DIM,1)}/>`);
  (G.ci||[]).forEach(c=>d+=`<circle cx="${c[0]}" cy="${c[1]}" r="${c[2]}" ${ln(.8,SIG)}/>`);
  (G.cm||[]).forEach(c=>d+=`<circle cx="${c[0]}" cy="${c[1]}" r="${c[2]}" ${ln(.8,SIG)}/><circle cx="${c[0]}" cy="${-c[1]}" r="${c[2]}" ${ln(.8,SIG)}/>`);
  const hpm=(x,y)=>`<circle cx="${x}" cy="${y}" r="${u(3.6)}" ${sh(.9,SIG,'rgba(5,6,7,.7)')}/><circle cx="${x}" cy="${y}" r="${u(1)}" fill="${SIG}"/>`;
  (G.hp||[]).forEach(p=>d+=hpm(p[0],p[1])+hpm(p[0],-p[1]));(G.hpc||[]).forEach(p=>d+=hpm(p[0],p[1]));
  d+=`<path d="M-1.4 0H${G.L+1.4}" stroke="${DIM}" stroke-width="${u(.7)}" stroke-dasharray="${u(12)} ${u(3)} ${u(2)} ${u(3)}" fill="none"/>`;
  t+=fade(d,1.3);
  /* side view */
  let s=`<path d="${Z(G.side)}" fill="hsl(${j.h} 55% 62% / .09)" class="fi" style="animation-delay:1.2s"/><path d="${Z(G.side)}" pathLength="1" class="dr" style="animation-delay:.3s" ${ln(1.7,SIG)}/>`,e='';
  (G.sl||[]).forEach(a=>e+=`<path d="${D(a)}" ${ln(.8,DIM)}/>`);
  (G.sc||[]).forEach(a=>e+=`<path d="${Z(a)}" ${sh(.8,DIM,TINT)}/>`);
  (G.sh||[]).forEach(a=>e+=`<path d="${D(a)}" ${ln(.7,DIM,1)}/>`);
  [G.L*.2,G.L*.62].forEach(x=>e+=`<circle cx="${f1(x)}" cy=".34" r=".34" ${sh(.9,SIG,'rgba(5,6,7,.7)')}/><path d="M${f1(x)} .68V1" ${ln(.9,SIG)}/>`);
  s+=fade(e,1.5);
  /* dimensions, guides, callouts (drawn in sheet pixels) */
  const tip=h.reduce((b,_,q)=>q%2&&h[q]>b.y?{x:h[q-1],y:h[q]}:b,{x:0,y:-1}),sd=G.side,fin=sd.reduce((b,_,q)=>q%2&&sd[q]>b.z?{x:sd[q-1],z:sd[q]}:b,{x:0,z:-1});
  const X=x=>f1(ox+x*k),Y=y=>f1(cy+y*k),R=G.L*k,xe=ox+R,yT=cy-G.S*k/2,yB=cy+G.S*k/2,dl2=gy+32;
  let a=`<path d="M${f1(ox)} ${f1(cy)}V${f1(gy+36)}M${f1(xe)} ${f1(cy)}V${f1(gy+36)}" stroke="${FNT}" stroke-width=".7" stroke-dasharray="2 5" fill="none"/>`;
  a+=`<path d="M${f1(ox-46)} ${f1(gy)}H${f1(xe+46)}" stroke="rgba(154,165,174,.5)" stroke-width="1"/>`;
  let hat='';for(let x=ox-40;x<xe+46;x+=12)hat+=`M${f1(x)} ${f1(gy)}l-6 6`;a+=`<path d="${hat}" stroke="rgba(154,165,174,.28)" stroke-width=".7" fill="none"/>`;
  const dm=(path,tx)=>`<path d="${path}" stroke="${DIM}" stroke-width=".9" fill="none"/>${tx}`;
  let tk='';for(let m=1;m<G.L;m++)tk+=`M${f1(ox+m*k)} ${f1(dl2)}v${m%5?-3:-6}`;
  a+=dm(`M${f1(ox)} ${f1(dl2)}H${f1(xe)}M${f1(ox)} ${f1(dl2-6)}v12M${f1(xe)} ${f1(dl2-6)}v12${tk}`,`<text x="${f1(ox+R/2)}" y="${f1(dl2+16)}" class="dm" text-anchor="middle">${G.L.toFixed(2)} m</text>`);
  const xs=ox-46;
  a+=`<path d="M${f1(ox+tip.x*k)} ${f1(yT)}H${f1(xs-6)}M${f1(ox+tip.x*k)} ${f1(yB)}H${f1(xs-6)}" stroke="${FNT}" stroke-width=".7" stroke-dasharray="2 4" fill="none"/>`;
  a+=dm(`M${f1(xs)} ${f1(yT)}V${f1(yB)}M${f1(xs-6)} ${f1(yT)}h12M${f1(xs-6)} ${f1(yB)}h12`,`<text transform="translate(${f1(xs-9)} ${f1(cy)}) rotate(-90)" class="dm" text-anchor="middle">${G.S.toFixed(2)} m</text>`);
  const xh=xe+40;
  a+=`<path d="M${f1(ox+fin.x*k)} ${f1(gy-G.H*k)}H${f1(xh+6)}" stroke="${FNT}" stroke-width=".7" stroke-dasharray="2 4" fill="none"/>`;
  a+=dm(`M${f1(xh)} ${f1(gy)}V${f1(gy-G.H*k)}M${f1(xh-6)} ${f1(gy)}h12M${f1(xh-6)} ${f1(gy-G.H*k)}h12`,`<text transform="translate(${f1(xh+14)} ${f1(gy-G.H*k/2)}) rotate(90)" class="dm" text-anchor="middle">${G.H.toFixed(2)} m</text>`);
  let c='';G.co.forEach((q,n)=>{const px=X(q[0]),py=Y(q[1]),lx=X(q[2]),ly=Y(q[3]),w=q[4].length*5.8+6;
    const at=f1(Math.max(lx,Math.min(px,lx+w)));c+=`<g class="fi" style="animation-delay:${2+n*.18}s"><circle cx="${px}" cy="${py}" r="2.2" fill="#9cc3e6"/><path d="M${px} ${py}L${at} ${ly}M${lx} ${ly}h${w}" stroke="#9cc3e6" stroke-opacity=".75" stroke-width=".8" fill="none"/><text x="${f1(lx+3)}" y="${f1(ly-4)}" class="cn">${q[4]}</text></g>`});
  /* right column: specifications, legend, scale bar */
  const sp=(y,l,v)=>`<text x="745" y="${y}" class="lg">${l}</text><text x="985" y="${y}" class="lg v" text-anchor="end">${v}</text><path d="M745 ${y+7}H985" stroke="rgba(154,165,174,.18)" stroke-width=".7"/>`;
  const lgd=(y,body,txt)=>`<path d="M745 ${y}h30" ${body}/><text x="785" y="${y+3.5}" class="lg">${txt}</text>`;
  let r=sp(262,'Length',G.L.toFixed(2)+' m')+sp(284,'Wingspan',G.S.toFixed(2)+' m')+sp(306,'Height',G.H.toFixed(2)+' m');
  r+=lgd(340,`stroke="${SIG}" stroke-width="1.7"`,'Outer skin')+lgd(358,`stroke="${FNT}" stroke-width=".9"`,'Panel lines, control surfaces')+lgd(376,`stroke="${DIM}" stroke-width=".9" stroke-dasharray="5 4"`,'Hidden: bays and intakes')+lgd(394,`stroke="${DIM}" stroke-width=".9" stroke-dasharray="8 3 2 3"`,'Centreline')+`<circle cx="760" cy="412" r="3.6" fill="rgba(5,6,7,.7)" stroke="${SIG}" stroke-width=".9"/><circle cx="760" cy="412" r="1" fill="${SIG}"/><text x="785" y="415.5" class="lg">Hardpoint station</text>`;
  let bar=`M745 458h${f1(5*k)}`;for(let m=0;m<=5;m++)bar+=`M${f1(745+m*k)} 454v8`;
  r+=`<path d="${bar}" stroke="${SIG}" stroke-width="1" fill="none"/><text x="${f1(745+5*k+8)}" y="461" class="lg">5 m</text><text x="745" y="478" class="lg" style="opacity:.6">Each drawing is scaled to fit. Use this bar.</text>`;
  const tb=`<path d="M24 552H976V604H24zM640 552V604M810 552V604" stroke="rgba(154,165,174,.35)" stroke-width="1" fill="none"/><text x="38" y="573" class="lg" style="opacity:.7">SkyForm technical scheme</text><text x="38" y="594" class="tn">${j.n}</text><text x="656" y="573" class="lg" style="opacity:.7">Views</text><text x="656" y="594" class="lg v">Top and side, nose left</text><text x="826" y="573" class="lg" style="opacity:.7">Drawing</text><text x="826" y="594" class="lg v">${String(i+1).padStart(2,'0')} of ${String(J.length).padStart(2,'0')}</text>`;
  const grid='<defs><pattern id="gs" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="rgba(156,195,230,.07)"/></pattern><pattern id="gl" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M100 0H0V100" fill="none" stroke="rgba(156,195,230,.13)"/></pattern></defs><rect width="1000" height="620" fill="url(#gs)"/><rect width="1000" height="620" fill="url(#gl)"/><rect x="8" y="8" width="984" height="604" fill="none" stroke="rgba(154,165,174,.32)"/><rect x="14" y="14" width="972" height="592" fill="none" stroke="rgba(154,165,174,.14)"/>';
  return `<figure class="sheet"><svg viewBox="0 0 1000 620" role="img" aria-label="Technical scheme of ${j.n}: top view and side view with dimensions">${grid}
  <g transform="translate(${f1(ox)} ${f1(cy)}) scale(${k.toFixed(3)})">${t}</g><g transform="translate(${f1(ox)} ${f1(gy)}) scale(${k.toFixed(3)} ${(-k).toFixed(3)})">${s}</g>
  <g class="fi" style="animation-delay:1.6s">${a}</g>${c}<g class="fi" style="animation-delay:1.8s">${r}${tb}</g></svg></figure>`;
}

/* ---------- hero visual: 3D model first, the scheme stays in the code as fallback and switch ---------- */
function stage(j,i){
  const G=GEO[j.id],mo=j.model||{},model=HERO_VIEW==='model';
  const mv=model?`<figure class="mvbox"><model-viewer class="mvw" src="${MODEL_DIR}${j.id}.glb" alt="3D model of ${j.n}" camera-controls auto-rotate auto-rotate-delay="1200" rotation-per-second="12deg" interaction-prompt="none" shadow-intensity="1" shadow-softness="1" exposure="${mo.exposure||1.1}" environment-image="neutral" camera-orbit="${mo.orbit||'-38deg 72deg auto'}" field-of-view="${mo.fov||'30deg'}" orientation="${mo.orient||'0deg 0deg 0deg'}" loading="eager"></model-viewer>
    <div class="mvload"><div class="mvbar"><i></i></div><p>Loading 3D model <b>0</b>%</p></div>
    <p class="mvhint">Drag to rotate. Scroll or pinch to zoom.</p>
    <dl class="mvspec"><div><dt>Length</dt><dd>${G.L.toFixed(2)} m</dd></div><div><dt>Wingspan</dt><dd>${G.S.toFixed(2)} m</dd></div><div><dt>Height</dt><dd>${G.H.toFixed(2)} m</dd></div></dl></figure>`:'';
  return `${model?`<div class="vt" role="group" aria-label="Hero view"><button type="button" data-vt="model" aria-pressed="true">3D model</button><button type="button" data-vt="scheme" aria-pressed="false">Scheme</button></div>`:''}
  <div class="stage" data-mode="${model?'model':'scheme'}" style="--h:${j.h}">${mv}${scheme(j,i)}
  <div class="inset"><div class="shot" style="--h:${j.h};--pos:${j.pos||'60% 50%'}"><img src="assets/jets/${j.id}.jpg" alt="Reference photograph of ${j.n}" decoding="async"></div><p class="cap">${j.cr?'Photo: '+j.cr:'Reference photograph'}</p></div></div>`;
}
function setHero(st,mode){
  st.dataset.mode=mode;
  const vt=st.previousElementSibling;if(vt&&vt.classList.contains('vt'))vt.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.vt===mode));
}
function wireModels(c){
  c.querySelectorAll('.mvw').forEach(mv=>{
    const st=mv.closest('.stage'),box=mv.closest('.mvbox'),bar=box.querySelector('.mvbar i'),num=box.querySelector('.mvload b');let done=false;
    const off=()=>{if(done)return;done=true;st.classList.add('mv-off');setHero(st,'scheme');const b=st.previousElementSibling&&st.previousElementSibling.querySelector('[data-vt="model"]');if(b){b.disabled=true;b.title='No model file found for this aircraft'}};
    mv.addEventListener('progress',e=>{const p=Math.round(clamp(e.detail.totalProgress||0,0,1)*100);num.textContent=p;bar.style.setProperty('--p',(p/100).toFixed(3))});
    mv.addEventListener('load',()=>{done=true;st.classList.add('mv-ok')});
    mv.addEventListener('error',off);
    setTimeout(()=>{if(!customElements.get('model-viewer'))off()},7000);
  });
}

function view(j,i){
  const x=X[j.id]||{}, ops=OPS[j.id], nx=J[(i+1)%J.length], tw=(j.s[3][0]*1000/(j.s[4][0]*9.80665)).toFixed(2);
  const by=t=>ops.filter(r=>r[2]===t).map(r=>r[0]).filter((v,k,a)=>a.indexOf(v)===k);
  const chip=(t,l)=>by(t).length?`<p class="grp">${l}</p><div class="chips sv">${by(t).map(c=>`<span class="${t}">${fl(c)}</span>`).join('')}</div>`:'';
  const cells=[...j.s.map((s,k)=>[LB[k],s[0],s[1],s[2],s[3]]),[LB[5],+tw,'',2,'thrust divided by max takeoff weight'],[LB[6],j.ff,'',0,'',1],[LB[7],j.hp[0],'',0,j.hp[1]],[LB[8],null,'',0,'outside estimate, frontal aspect']];
  return `<section class="hero hero2"><div class="txt"><h1>${j.n}</h1><p class="focus">${fl(j.f)}</p>
  <p class="meta"><span>${fl(j.m)}</span><span>${j.g}</span><span>${j.r}</span></p></div>
  <div class="sheetw">${stage(j,i)}</div></section>
  <div class="body">
  <section class="panel"><h2>Telemetry and specs</h2><div class="specs">
  ${cells.map((c,k)=>`<div class="spec" style="--i:${k}"><div class="l">${c[0]}</div><div class="v">${c[1]===null?`<span class="t">${j.rcs}</span>`:`<span class="n" data-t="${c[1]}" data-d="${c[3]}" data-g="${c[5]?0:1}">0</span><small>${c[2]}</small>`}</div><div class="s">${c[4]}</div></div>`).join('')}
  </div></section>
  <div class="two"><section class="panel ov-d"><h2>Tactical overview</h2><p class="ov">${fl(j.ov)}</p><p class="ov">${fl(x.ab||'')}</p>${dl([['Development',j.dv],['Defining moment',j.nb]])}</section>
  <section class="panel acc"><h2>Avionics and armament</h2>
  <button aria-expanded="true">Sensors and electronic systems</button><div class="drop open"><div>${dl(j.av)}</div></div>
  <button aria-expanded="false">Hardpoints and payload</button><div class="drop"><div>${dl(j.ar)}</div></div></section></div>
  <section class="panel"><h2>Main variants and what sets them apart</h2><div class="vr">${(VR[j.id]||[]).map(v=>`<div><h4>${v[0]}</h4><p>${fl(v[1])}</p></div>`).join('')}</div></section>
  <div class="two"><section class="panel"><h2>Where it serves</h2>
  ${chip('s','In service')}${chip('o','Ordered')}${chip('p','Proposed')}${chip('r','Rumored')}${chip('u','Status unclear')}
  <p class="ov" style="margin:0 0 12px">${fl(x.on||'')}</p><button class="ln" data-reg="${j.id}">See every air force</button></section>
  <section class="panel"><h2>Fun fact</h2><p class="fun">${fl(x.fun||'')}</p></section></div>
  <footer><p class="note">Figures are open-source or manufacturer-stated. Values marked est. are unofficial. Radar cross-section is an outside estimate; true values are classified.</p>
  <span class="mag"><button class="ln" data-i="${(i+1)%J.length}">Next: ${nx.n}</button></span></footer></div>`;
}
function count(el){
  if(el.dataset.done)return; el.dataset.done=1;
  const t=+el.dataset.t, d=+el.dataset.d, g=el.dataset.g!=='0', f=v=>v.toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d,useGrouping:g});
  if(rm){el.textContent=f(t);return}
  const st=performance.now();
  (function tick(n){const p=Math.min((n-st)/1600,1);el.textContent=f(p<1?t*(1-Math.pow(2,-10*p)):t);if(p<1)requestAnimationFrame(tick)})(st);
}
const obs=new IntersectionObserver(es=>es.filter(e=>e.isIntersecting).forEach((e,k)=>{
  const t=e.target; t.style.transitionDelay=k*50+'ms'; t.classList.add('in');
  t.querySelectorAll('.n').forEach(n=>setTimeout(()=>count(n),k*50+250)); obs.unobserve(t);
}),{threshold:.15});
document.querySelectorAll('#shows .panel').forEach(p=>obs.observe(p));
/* photo: fade in when loaded. Odd shapes (or fit:'contain') are shown whole instead of cropped. Missing file: tinted frame plus caption */
function wire(c){c.querySelectorAll('.shot img').forEach(im=>{
  const f=im.closest('.shot'), cap=f.parentElement.querySelector('.cap'), j=J[cur];
  const ok=()=>{const r=im.naturalWidth/im.naturalHeight;if(j.fit==='contain'||(j.fit!=='cover'&&(r<1.3||r>1.95)))f.classList.add('contain');f.classList.add('ld')};
  const bad=()=>{im.remove();cap.textContent='[Photo: '+j.img+']'};
  if(im.complete){im.naturalWidth?ok():bad()}else{im.addEventListener('load',ok);im.addEventListener('error',bad)}
})}
function mount(i){
  const c=$('#c'); c.innerHTML=view(J[i],i); window.scrollTo({top:0,behavior:'instant'});
  c.querySelectorAll('.panel').forEach(p=>obs.observe(p)); wire(c); wireModels(c);
}
function show(i,first){
  if(busy||(i===cur&&!first))return; busy=true; cur=i;
  tweenGlow(hsl(J[i].h,70,52));
  $('#glow').style.setProperty('--h',J[i].h);
  menu&&menu.setActive(J[i].id);
  if(!pinned){flt.j=J[i].id;reg()}
  document.title=J[i].n+' | SkyForm';
  const c=$('#c');
  if(first){mount(i);busy=false;return}
  c.classList.add('out');
  setTimeout(()=>{mount(i);requestAnimationFrame(()=>{c.classList.remove('out');busy=false})},rm?0:290);
}

/* ---------- menu drawer ---------- */
const menuEl=$('#menu'); let menuOpen=false,menuBy='';
function setMenu(o,by){menuOpen=o;menuBy=o?by:'';menuEl.classList.toggle('open',o);menuEl.inert=!o;$('#mbtn').setAttribute('aria-expanded',o)}
setMenu(false);
const toSec=id=>document.getElementById(id).scrollIntoView({behavior:rm?'auto':'smooth'});
menu=BranchedMenu($('#bm'),{
  items:[{label:'Aircraft',children:J.map(j=>({value:j.id,label:j.n}))},{label:'Explore',children:[{value:'cmp',label:'Compare'},{value:'reg',label:'Air forces'},{value:'shows',label:'Airshows'}]}],
  defaultOpen:[0,1],defaultActive:J[0].id,
  onSelect:v=>{const i=J.findIndex(j=>j.id===v);if(i>=0){i===cur?scrollTo({top:0,behavior:rm?'auto':'smooth'}):show(i)}else toSec(v);setTimeout(()=>setMenu(false),380)}
});
let startT=0;
$('#edge').addEventListener('mouseenter',()=>{if(started&&!menuOpen&&performance.now()-startT>2200)setMenu(true,'hover')});
menuEl.addEventListener('mouseleave',()=>{if(menuBy==='hover')setMenu(false)});
$('#mbtn').addEventListener('click',()=>setMenu(!menuOpen,'btn'));
/* scroll spy: highlight Compare, Air forces or Airshows while it is on screen */
const spy=new Map();
const so=new IntersectionObserver(es=>{es.forEach(e=>spy.set(e.target.id,e.intersectionRatio>=.12?e.intersectionRatio:0));
  let best='',m=0;spy.forEach((r,k)=>{if(r>m){m=r;best=k}});menu.setActive(best||J[cur].id)},{threshold:[0,.12,.25,.5,.75,1]});
['cmp','reg','shows'].forEach(id=>so.observe(document.getElementById(id)));

document.addEventListener('click',e=>{
  if(menuOpen&&!e.target.closest('#menu')&&!e.target.closest('#mbtn'))setMenu(false);
  const vt=e.target.closest('[data-vt]'); if(vt){if(!vt.disabled){const st=vt.parentElement.nextElementSibling;if(st&&st.classList.contains('stage'))setHero(st,vt.dataset.vt)}return}
  const rg=e.target.closest('[data-reg]'); if(rg){pinned=true;flt={j:rg.dataset.reg,s:'all'};reg();toSec('reg');return}
  const fj=e.target.closest('[data-fj]'); if(fj){pinned=true;flt.j=fj.dataset.fj;reg();return}
  const fs=e.target.closest('[data-fs]'); if(fs){flt.s=fs.dataset.fs;reg();return}
  const cs=e.target.closest('[data-cs]'); if(cs){const id=cs.dataset.cs,k=sel.indexOf(id);if(k>=0){if(sel.length>2)sel.splice(k,1)}else{if(sel.length>=4)sel.shift();sel.push(id)}cmp(id);return}
  const b=e.target.closest('[data-i]'); if(b){show(+b.dataset.i);return}
  const a=e.target.closest('.acc button'); if(a){const o=a.getAttribute('aria-expanded')!=='true';a.setAttribute('aria-expanded',o);a.nextElementSibling.classList.toggle('open',o)}
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape')setMenu(false);
  if(!started||(e.target.closest&&e.target.closest('model-viewer')))return;
  if(e.key==='ArrowRight')show((cur+1)%J.length); if(e.key==='ArrowLeft')show((cur+J.length-1)%J.length);
});
/* Next link follows the cursor with an eased pull. No spring, no overshoot. */
const live=new Set(); let raf=0, hot=null;
function step(){
  live.forEach(el=>{const s=el._s; s.x+=(s.tx-s.x)*.12; s.y+=(s.ty-s.y)*.12;
    el.style.transform=`translate3d(${s.x.toFixed(2)}px,${s.y.toFixed(2)}px,0)`;
    if(!s.tx&&!s.ty&&Math.abs(s.x)+Math.abs(s.y)<.05){el.style.transform='';live.delete(el)}});
  raf=live.size?requestAnimationFrame(step):0;
}
function pull(el,tx,ty){el._s=el._s||{x:0,y:0,tx:0,ty:0};el._s.tx=tx;el._s.ty=ty;live.add(el);if(!raf)raf=requestAnimationFrame(step)}
document.addEventListener('mousemove',e=>{
  if(rm)return; const m=e.target.closest('.mag');
  if(hot&&hot!==m){pull(hot,0,0);hot=null}
  if(!m)return; hot=m; const r=m.getBoundingClientRect();
  pull(m,clamp((e.clientX-r.left-r.width/2)*.12,-6,6),clamp((e.clientY-r.top-r.height/2)*.18,-6,6));
});

/* ---------- intro: loader, then Start ---------- */
const intro=$('#intro'), gate=[$('#c'),$('header'),document.querySelector('.ops')];
gate.forEach(n=>n.inert=true);
fibers=GhostFibers($('#fibers'),{glowColor:'#2f5bff',speed:.16,scale:2.2,layers:3,brightness:.95,glow:1.8,vignette:.9,grain:.03,rotationSpeed:.2,dpr:1});
fibers&&fibers.setColor(gcol);
function begin(){
  if(started)return; started=true; startT=performance.now();
  intro.classList.add('go'); document.body.classList.remove('intro-on'); gate.forEach(n=>n.inert=false);
  show(0,true);
  setTimeout(()=>intro.remove(),1700);
}
async function fetchProgress(url,cb){
  const r=await fetch(url);if(!r.ok){cb(1);return}
  const len=+r.headers.get('content-length')||0;
  if(!r.body||!len){await r.arrayBuffer();cb(1);return}
  const rd=r.body.getReader();let got=0;
  for(;;){const x=await rd.read();if(x.done)break;got+=x.value.length;cb(Math.min(got/len,1))}
  cb(1);
}
/* Start-up: a random aircraft outline is plotted inside the radar as the real loading percentage climbs */
function loader(){
  const t0=performance.now(),MIN=rm?150:3200,model=HERO_VIEW==='model';
  const g=GEO[J[(Math.random()*J.length)|0].id],k=150/g.L,h=g.out,full=[...h];for(let q=h.length-2;q>=0;q-=2)full.push(h[q],-h[q+1]);
  const P=(a,z)=>{let s='';for(let q=0;q<a.length;q+=2)s+=(q?'L':'M')+a[q]+' '+a[q+1];return s+(z?'Z':'')},sw=(1.5/k).toFixed(3);
  $('#ijg').innerHTML=`<g transform="translate(170 150) rotate(90) scale(${k.toFixed(3)}) translate(${-g.L/2} 0)"><path id="ijf" d="${P(full,1)}" fill="rgba(156,195,230,.18)" opacity="0"/><g id="ijd" opacity="0">${(g.cl||[]).map(a=>`<path d="${P(a,1)}" fill="none" stroke="#cfe3f5" stroke-width="${sw}"/><path d="${P(a,1)}" transform="scale(1,-1)" fill="none" stroke="#cfe3f5" stroke-width="${sw}"/>`).join('')}</g><path id="ijet" pathLength="1" d="${P(full,1)}" fill="none" stroke="#cfe3f5" stroke-width="${sw}" stroke-linejoin="round" stroke-dasharray="1" stroke-dashoffset="1"/></g>`;
  let tk='';for(let n=0;n<72;n++){const a=n*5*Math.PI/180,r2=n%6===0?171:165;tk+=`<line class="tk" x1="${(170+158*Math.sin(a)).toFixed(1)}" y1="${(170-158*Math.cos(a)).toFixed(1)}" x2="${(170+r2*Math.sin(a)).toFixed(1)}" y2="${(170-r2*Math.cos(a)).toFixed(1)}"/>`}
  $('#itk').innerHTML=tk;
  const ticks=[...document.querySelectorAll('#itk .tk')],arc=$('#iarc'),jet=$('#ijet'),jf=$('#ijf'),jd=$('#ijd'),pc=$('#ipc'),C=2*Math.PI*150,steps={};
  arc.style.strokeDasharray=C;arc.style.strokeDashoffset=C;
  document.querySelectorAll('#isteps li').forEach(li=>steps[li.dataset.k]=li);
  /* real tasks: typefaces, the 3D engine, the first aircraft's photo and model (bytes counted) */
  const S={font:0,view:model?0:1,asset:0},a={img:0,mod:model?0:1},upd=()=>S.asset=(a.img+a.mod)/2;
  (document.fonts?document.fonts.ready:Promise.resolve()).then(()=>S.font=1);
  if(model)Promise.race([customElements.whenDefined('model-viewer'),new Promise(r=>setTimeout(r,6000))]).then(()=>S.view=1);
  const im=new Image();im.onload=im.onerror=()=>{a.img=1;upd()};im.src='assets/jets/'+J[0].id+'.jpg';setTimeout(()=>{a.img=1;upd()},5000);
  if(model){fetchProgress(MODEL_DIR+J[0].id+'.glb',v=>{a.mod=v;upd()}).catch(()=>{a.mod=1;upd()});setTimeout(()=>{a.mod=1;upd()},9000)}
  let p=0,lit=-1,lastT=t0,shown=false;
  (function tick(now){
    const dt=Math.min(now-lastT,100);lastT=now;
    const el=now-t0,tp=Math.min(el/MIN,1),real=S.font*.1+S.view*.2+S.asset*.7,target=Math.min(real,tp)*100;
    p=Math.max(p,Math.min(100,p+(target-p)*(rm?1:1-Math.exp(-dt/260))));if(target>=99.9&&100-p<.4)p=100;
    const f=p/100;
    arc.style.strokeDashoffset=(C*(1-f)).toFixed(1);jet.style.strokeDashoffset=(1-f).toFixed(3);
    jf.setAttribute('opacity',clamp((f-.85)/.15,0,1).toFixed(2));jd.setAttribute('opacity',clamp((f-.5)/.4,0,1).toFixed(2));
    pc.textContent=Math.round(p);
    const n=Math.floor(f*72);if(n!==lit){for(let q=Math.max(lit,0);q<n;q++)ticks[q].classList.add('on');lit=n}
    steps.font.className=S.font?'ok':'cur';steps.view.className=S.view?'ok':(S.font?'cur':'');steps.asset.className=S.asset>=1?'ok':(S.view?'cur':'');steps.radar.className=tp>=1?'ok':(S.asset>=1?'cur':'');
    if(p>=100){
      if(!shown){shown=true;$('.hud').classList.add('done');$('#istart').innerHTML=glowCard('<button class="start" id="go" type="button">Start</button>',{radius:999,glowRadius:34,glow:'205 70 78',bg:'#0c0e10'},'sbtn');
        const card=$('#istart .border-glow-card');requestAnimationFrame(()=>{card.classList.add('show');if(!rm)bgSweep(card);$('#go').focus({preventScroll:true})});$('#go').addEventListener('click',begin)}
      return}
    requestAnimationFrame(tick);
  })(t0);
}
reg();cmp();loader();
