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

/* ============ PAGE LOGIC ============
   MOTION SPEC
   Panel cascade   : 1000ms expo-out (.16,1,.3,1), y 28 to 0, blur 8 to 0; 50ms between panels and between spec cells
   Photo           : fades in over 1200ms while easing from scale 1.05 to 1.0; frame is the same size for every aircraft
   Content switch  : 280ms out, swap, 280ms in
   Side rail       : width 800ms expo-out, labels cascade 26ms apart, one marker glides 900ms to the active aircraft; nothing shakes
   Next link       : eased follow (12% per frame, no overshoot), max 6px
   Count-up        : 1600ms easeOutExpo on reveal
   IMAGES          : put files in assets/jets/<id>.jpg; add pos:'x% y%' to a jet to set its focal point; optional cr:'credit' */
const $=s=>document.querySelector(s), rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const ST={s:'In service',o:'Ordered',p:'Proposed',r:'Rumored',u:'Status unclear'};
const CODE=['F-35','Gripen','F-22','MiG-29','Su-57','Rafale','Typhoon','J-20'];
const dl=a=>'<dl>'+a.map(x=>`<dt>${x[0]}</dt><dd>${x[1]}</dd>`).join('')+'</dl>';
const rail=$('#rail'); let cur=0,busy=false,pinned=false,flt={j:J[0].id,s:'all'};

const btn=(a,l,k)=>`<button ${a} style="--k:${k}" aria-label="${l}"><span class="xh"><i></i></span><span class="lab">${l}</span></button>`;
rail.innerHTML=`<div class="items"><span class="ind"></span>${J.map((j,i)=>btn(`data-i="${i}"`,j.n,i)).join('')}${btn('data-go="shows" class="gap"','Airshows',8)}${btn('data-go="reg"','Air forces',9)}</div>`;

$('#tl').innerHTML=A.map(e=>`<article class="panel ev${e.s==='Completed'?' done':''}"><div class="d">${e.d}</div><h4>${e.n}</h4><p class="p">${e.p}</p><div class="chips">${e.l.map(x=>`<span>${x}</span>`).join('')}</div><p class="note" style="margin-top:12px">${e.s}</p></article>`).join('');

/* air forces index: filter by aircraft and status */
function reg(){
  $('#fj').innerHTML=[['all','All aircraft'],...J.map((j,i)=>[j.id,CODE[i]])].map(a=>`<button data-fj="${a[0]}" aria-pressed="${flt.j===a[0]}">${a[1]}</button>`).join('');
  $('#fs').innerHTML=[['all','All statuses'],...Object.entries(ST)].map(a=>`<button data-fs="${a[0]}" aria-pressed="${flt.s===a[0]}">${a[1]}</button>`).join('');
  let k=0;
  const rows=J.map((j,i)=>flt.j!=='all'&&flt.j!==j.id?'':OPS[j.id].filter(r=>flt.s==='all'||r[2]===flt.s)
    .map(r=>`<div class="rw" style="--k:${k++}"><span class="jc">${CODE[i]}</span><span class="ct">${r[0]}</span><span class="af">${r[1]}</span><span class="st ${r[2]}">${ST[r[2]]}</span><span class="nt">${r[3]||''}</span></div>`).join('')).join('');
  $('#rows').innerHTML=rows||'<p class="note" style="margin-top:16px">No air forces match these filters.</p>';
}

function view(j,i){
  const x=X[j.id]||{}, ops=OPS[j.id], nx=J[(i+1)%J.length], tw=(j.s[3][0]*1000/(j.s[4][0]*9.80665)).toFixed(2);
  const by=t=>ops.filter(r=>r[2]===t).map(r=>r[0]).filter((v,k,a)=>a.indexOf(v)===k);
  const chip=(t,l)=>by(t).length?`<p class="grp">${l}</p><div class="chips sv">${by(t).map(c=>`<span class="${t}">${c}</span>`).join('')}</div>`:'';
  const cells=[...j.s.map((s,k)=>[LB[k],s[0],s[1],s[2],s[3]]),[LB[5],+tw,'',2,'thrust divided by max takeoff weight'],[LB[6],j.ff,'',0,'',1],[LB[7],j.hp[0],'',0,j.hp[1]],[LB[8],null,'',0,'outside estimate, frontal aspect']];
  return `<section class="hero"><div class="txt"><h1>${j.n}</h1><p class="focus">${j.f}</p>
  <p class="meta"><span>${j.m}</span><span>${j.g}</span><span>${j.r}</span></p></div>
  <div class="fw"><figure class="shot" style="--h:${j.h};--pos:${j.pos||'60% 50%'}"><img src="assets/jets/${j.id}.jpg" alt="${j.n}" decoding="async"></figure><p class="cap">${j.cr?'Photo: '+j.cr:''}</p></div></section>
  <div class="body">
  <section class="panel"><h2>Telemetry and specs</h2><div class="specs">
  ${cells.map((c,k)=>`<div class="spec" style="--i:${k}"><div class="l">${c[0]}</div><div class="v">${c[1]===null?`<span class="t">${j.rcs}</span>`:`<span class="n" data-t="${c[1]}" data-d="${c[3]}" data-g="${c[5]?0:1}">0</span><small>${c[2]}</small>`}</div><div class="s">${c[4]}</div></div>`).join('')}
  </div></section>
  <div class="two"><section class="panel ov-d"><h2>Tactical overview</h2><p class="ov">${j.ov}</p><p class="ov">${x.ab||''}</p>${dl([['Development',j.dv],['Defining moment',j.nb]])}</section>
  <section class="panel acc"><h2>Avionics and armament</h2>
  <button aria-expanded="true">Sensors and electronic systems</button><div class="drop open"><div>${dl(j.av)}</div></div>
  <button aria-expanded="false">Hardpoints and payload</button><div class="drop"><div>${dl(j.ar)}</div></div></section></div>
  <section class="panel"><h2>Main variants and what sets them apart</h2><div class="vr">${(VR[j.id]||[]).map(v=>`<div><h4>${v[0]}</h4><p>${v[1]}</p></div>`).join('')}</div></section>
  <div class="two"><section class="panel"><h2>Where it serves</h2>
  ${chip('s','In service')}${chip('o','Ordered')}${chip('p','Proposed')}${chip('r','Rumored')}${chip('u','Status unclear')}
  <p class="ov" style="margin:0 0 12px">${x.on||''}</p><button class="ln" data-reg="${j.id}">See every air force</button></section>
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
const obs=new IntersectionObserver(es=>es.filter(e=>e.isIntersecting).forEach((e,k)=>{
  const t=e.target; t.style.transitionDelay=k*50+'ms'; t.classList.add('in');
  t.querySelectorAll('.n').forEach(n=>setTimeout(()=>count(n),k*50+250)); obs.unobserve(t);
}),{threshold:.15});
document.querySelectorAll('#shows .panel').forEach(p=>obs.observe(p));
/* photo: fade in when loaded; if the file is missing, keep the tinted frame and show a placeholder caption */
function wire(c){c.querySelectorAll('.shot img').forEach(im=>{
  const f=im.closest('.shot'), cap=f.parentElement.querySelector('.cap');
  const ok=()=>f.classList.add('ld'), bad=()=>{im.remove();cap.textContent='[Photo: '+J[cur].img+']'};
  if(im.complete){im.naturalWidth?ok():bad()}else{im.addEventListener('load',ok);im.addEventListener('error',bad)}
})}
function mount(i){
  const c=$('#c'); c.innerHTML=view(J[i],i); window.scrollTo({top:0,behavior:'instant'});
  c.querySelectorAll('.panel').forEach(p=>obs.observe(p)); wire(c);
}
function show(i,first){
  if(busy||(i===cur&&!first))return; busy=true; cur=i;
  $('#glow').style.setProperty('--h',J[i].h);
  rail.querySelector('.ind').style.transform=`translateY(${i*36}px)`;
  rail.querySelectorAll('[data-i]').forEach(b=>b.setAttribute('aria-current',+b.dataset.i===i));
  if(!pinned){flt.j=J[i].id;reg()}
  document.title=J[i].n+' | SkyForm';
  const c=$('#c');
  if(first){mount(i);busy=false;return}
  c.classList.add('out');
  setTimeout(()=>{mount(i);requestAnimationFrame(()=>{c.classList.remove('out');busy=false})},rm?0:290);
}
document.addEventListener('click',e=>{
  const go=e.target.closest('[data-go]'); if(go){document.getElementById(go.dataset.go).scrollIntoView({behavior:rm?'auto':'smooth'});return}
  const rg=e.target.closest('[data-reg]'); if(rg){pinned=true;flt={j:rg.dataset.reg,s:'all'};reg();document.getElementById('reg').scrollIntoView({behavior:rm?'auto':'smooth'});return}
  const fj=e.target.closest('[data-fj]'); if(fj){pinned=true;flt.j=fj.dataset.fj;reg();return}
  const fs=e.target.closest('[data-fs]'); if(fs){flt.s=fs.dataset.fs;reg();return}
  const b=e.target.closest('[data-i]'); if(b){show(+b.dataset.i);return}
  const a=e.target.closest('.acc button'); if(a){const o=a.getAttribute('aria-expanded')!=='true';a.setAttribute('aria-expanded',o);a.nextElementSibling.classList.toggle('open',o)}
});
document.addEventListener('keydown',e=>{
  if(e.key==='ArrowRight')show((cur+1)%J.length); if(e.key==='ArrowLeft')show((cur+J.length-1)%J.length);
});
/* Next link follows the cursor with an eased pull. No spring, no overshoot, so it never jitters. */
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
  pull(m,Math.max(-6,Math.min(6,(e.clientX-r.left-r.width/2)*.12)),Math.max(-6,Math.min(6,(e.clientY-r.top-r.height/2)*.18)));
});
show(0,true);
