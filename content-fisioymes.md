# Contenido auditado de fisioymes.com (fuente de verdad)

Extraído en vivo de https://fisioymes.com/ca/ (WordPress + Divi) el 2026-07-14.
Objetivo: replicar "tal cual" (contenido/estructura/funciones) y luego mejorar visualmente
con nuestro sistema de diseño ya aprobado (teal #4880AA + Montserrat/Roboto, menú móvil,
selector CA/ES, legibilidad). Datos factuales (colegiados, NIF, precios, descripciones
médicas) van VERBATIM, no parafraseados — así lo pidió Sergio y es contenido autorizado
por el cliente.

Nota permanente: mantener el pie "Pàgina de demostració a mida — no és el lloc web
oficial." dado que se van a mostrar datos reales (NIF, colegiados).

---

## 1. Datos legales / empresa (de /ca/aviso-legal/)

- Denominación social: **FISIOYMES READEP SLP**
- Nombre comercial: FISIOYMES
- NIF: **B42815951**
- Domicilio social: Carrer Xerric 4, 08172 Sant Cugat del Vallès (Barcelona)
- Teléfono (aviso legal): 637765866 (nota: distinto del WhatsApp/contacto público 664 76 25 70)
- Email: info@fisioymes.com
- Dominio: fisioymes.com

Contenido legal boilerplate LSSI-CE completo capturado (ver sección 9). Redactar
páginas equivalentes con plantilla estándar + estos datos reales; avisar a Sergio /
cliente que el texto legal final debería revisarlo su asesoría antes de producción real.

---

## 2. Navegación / estructura de páginas real

HOME · TRACTAMENTS (/tractaments/) · EQUIP (/equipo/) · LA CLÍNICA (/la-clinica/) ·
TARIFES (/tarifas/) · RESERVAR CITES (/reservar-citas/) · seguido de selector CA/ES.

Topbar: teléfono + dirección + iconos Facebook/Instagram.
WhatsApp flotante verde (esquina inferior derecha) en todas las páginas.

Footer (3 columnas + legal):
- Col "TRACTAMENTS" (accesos directos): Massatge Terapèutic, Teràpia Manual,
  Radiofreqüència / Tecateràpia, Magnetoteràpia, Punció Seca, Electrolisi Percutània,
  Ecografia
- Col "MÉS": Home, Equip, La Clínica, Tarifes, Reservar Cites
- Col "HORARI": Dilluns 9:00-21:00 · Dimarts 9:00-21:00 · Dimecres 9:00-21:00 ·
  Dijous 9:00-21:00 · Divendres 9:00-20:00 · Dissabte 10:00-14:00
- Fila legal: Pàgina de privadesa · Avís legal · Política de cookies
- Copyright: "© 2024 Fisioymes. Tots els drets reservats."
- Badges subvención: Gobierno de España (Secretaría de Estado de Digitalización e IA)
  + red.es + Kit Digital + Financiado por la Unión Europea NextGenerationEU
  (Sergio confirmó: sí incluir estos badges)

**RESERVAR CITES**: sistema de cita+pago online de terceros (iframe "Sistema de cita y
pago online", selector de servicio + flujo de pago). FUERA DE ALCANCE — no replicar el
backend, mantener WhatsApp + formulario de contacto como vía de "pedir cita" (ya
acordado con Sergio en la ronda anterior).

---

## 3. HOME — Hero carousel (6 slides, con imagen de fondo real por slide)

Slider Divi, sección `.et_pb_slider`, autoplay. 6 slides:

1. **BENVINGUT/DA A FISIOYMÉS**
   "Aquí trobaràs un equip compromès amb la teva salut. Apostem per una fisioteràpia
   basada en l'evidència, el tracte proper i els tractaments adaptats a cada persona
   per ajudant-te a mantenir una vida activa i saludable."
   CTA: "Contacte" · imagen real: carrusel1-scaled.jpg (equipo con camisetas azules)

2. **Fisioteràpia**
   "Explora com la fisioteràpia pot transformar la teva salut i el teu benestar,
   oferint solucions personalitzades per a cada condició, des de lesions fins a
   millores en la mobilitat i la força."
   CTA: "Veure tractaments" · imagen: fisioterapia.webp

3. **fisioteràpia del sòl pelvià**
   "Descobreix com cuidar el teu sòl pelvià amb els nostres serveis de fisioteràpia
   especialitzats. Recupera la teva salut i vitalitat amb el nostre enfocament
   personalitzat. Contacta'ns ara per començar el teu camí cap al benestar."
   CTA: ninguno visible · imagen: Suelo-pelvico-2.webp

4. **Classes de Pilates**
   "Descobreix el poder del pilates per enfortir, flexibilitzar i tonificar el teu
   cos. Les nostres classes estan dissenyades per millorar la teva força, control i
   coordinació, oferint un enfocament segur i eficaç per a un cos saludable i en forma."
   CTA: "Veure més" · imagen: clasesPilates.webp

5. **Readaptació esportiva**
   "Descobreix com la readaptació esportiva pot ajudar-te a recuperar la teva forma
   física i optimitzar el teu rendiment, evitant lesions i millorant el teu exercici
   a l'esport."
   CTA: ninguno · imagen: 16.webp

6. **Entrenament personal**
   "Personalitza el teu camí cap a la salut i el benestar amb el nostre entrenament
   personal. Treballem amb tu per crear un pla que s'adapti als teus objectius,
   necessitats i estil de vida, assegurant resultats personals i significatius."
   CTA: ninguno · imagen: entrenamientoPersonal.webp

Nota build: imágenes reales son fotos de stock del cliente (empleados, no vamos a
usarlas tal cual — seguir convención del resto del portfolio: fotos Unsplash
temáticamente equivalentes por slide, mismo criterio ya aplicado en v1).

---

## 4. HOME — "Lesions més freqüents que tractem" (15 acordeones, Divi toggle)

Cada uno es un `<h5 class="et_pb_toggle_title">` que al clicar despliega una
explicación breve. Texto VERBATIM:

1. **Cervicàlgia** — Dolor al coll, causat per tensions o lesions als músculs i
   articulacions del coll. Es caracteritza per molèsties que poden empitjorar amb
   moviments específics.

2. **Dorsàlgies** — Dolor a l'esquena, que pot ser causat per diverses afeccions, com
   lesions musculars, hèrnies discals o problemes de la columna vertebral. Es
   manifesta com a molèsties que poden variar en intensitat i localització.

3. **Lumbàlgies** — És el dolor a la part baixa de l'esquena, sovint causat per
   esquinçaments als discos intervertebrals o problemes a les articulacions de la
   columna lumbar. Es caracteritza per molèsties que poden empitjorar amb l'estrès o
   la posició incorrecta.

4. **Radiculopaties** — Dolors que afecten els nervis que surten de la columna
   vertebral, causant molèsties que se senten a les extremitats, com formigueig,
   entumiment o dolor que s'irradia des de l'esquena cap a les cames o braços.

5. **Migranyes i cefalees tensionals** — Mals de cap que poden ser causats per tensió
   muscular, canvis hormonals o problemes a la circulació sanguínia del cervell. Es
   caracteritzen per atacs de dolor intens a un costat del cap.

6. **Rigidesa articular** — És la dificultat per moure una articulació a causa de la
   pèrdua de mobilitat. Pot ser causada per lesions, artritis o condicions que
   afecten la lubricació de les articulacions.

7. **Tendinopaties** — Són inflamacions dels tendons, que són les estructures que
   connecten els músculs amb els ossos. Es caracteritzen per dolor i rigidesa a les
   articulacions, especialment després d'activitats físiques.

8. **Hèrnies discals** — Són protrusions dels discos intervertebrals fora de la seva
   posició normal, cosa que pot causar dolor i molèsties a l'esquena i les
   extremitats.

9. **Sobrecàrregues musculars** — Són lesions causades per l'ús excessiu d'un múscul
   o grup de músculs, cosa que pot portar a dolor, debilitat i rigidesa a la zona
   afectada.

10. **Trencaments musculars** — Són lesions que ocorren quan un múscul es trenca,
    cosa que pot causar dolor intens, immobilitat i debilitat a la zona afectada.

11. **Limfedema** — És un procediment que ajuda a eliminar l'excés de líquid
    limfàtic, cosa que pot alleujar el dolor i la inflamació en certes condicions.

12. **Punts gallet** — Són àrees sensibles als músculs que, quan es pressionen, poden
    causar dolor o molèsties en altres parts del cos.

13. **Disfuncions del sòl pelvià** — La disfunció del sòl pèlvic (SP) es refereix a
    una condició en què els músculs, lligaments i teixits del sòl pèlvic no
    funcionen correctament. L'SP és un conjunt de músculs que s'estenen des de l'os
    púbic fins al còccix i proporcionen suport als òrgans pèlvics, com ara la
    bufeta, l'úter i el recte.

14. **Articulació tempor-mandibular** — És l'articulació que connecta la mandíbula
    amb el crani, i el dolor pot ser causat per lesions, artritis o problemes en la
    circulació sanguínia de la zona.

15. **Rehabilitació postquirúrgica** — És el procés de recuperació i enfortiment
    després d'una cirurgia dissenyat per millorar la mobilitat, la funció i el
    benestar del pacient.

(Traducir a ES para cada uno, misma estructura título+explicación.)

---

## 5. HOME — bloques estáticos adicionales (no carousel)

- **Massatge Terapèutic** (card con "VEURE TRACTAMENTS"): "El massatge es la nostra
  eina terapèutica més potent per tractar tot tipus de lesions musculars tendinoses i
  lligamentoses. Es completament personalitzat per a cada pacient i sol ser molt
  eficaç per obtenir els resultats esperats. A Fisioymés realitzem diferents tipus de
  massatges en funció del que volem obtenir com el massatge descontracturant, el
  massatge Esportiu, massatge relaxant, drenatge limfàtic…"

- **Fisioteràpia esportiva** (card con "VEURE TRACTAMENTS"): "La fisioteràpia
  esportiva és un servei especialitzat que s'enfoca a prevenir, tractar i
  rehabilitar lesions en atletes i esportistes. Aquest servei utilitza tècniques i
  exercicis específics per millorar la força, la flexibilitat i la mobilitat,
  ajudant els esportistes a recuperar-se de lesions i a optimitzar-ne el rendiment
  esportiu. La fisioteràpia esportiva també pot incloure l'avaluació de la condició
  física de l'esportista, la planificació de programes d'entrenament personalitzats i
  l'assessorament sobre la prevenció de lesions. Aquest enfocament integral cerca no
  només tractar les lesions actuals, sinó també preparar els esportistes per
  enfrontar els desafiaments físics del seu esport, millorant la seva capacitat per
  competir i reduint el risc de futures lesions."

- **Pilates terapèutic** (card, primera clase gratis): "Descobriu el poder del
  pilates amb les nostres classes d'iniciació, dissenyades per enfortir, flexibilitzar
  i tonificar el vostre cos. La primera classe és gratuïta, sense compromís, i et
  permetrà explorar les bases del pilates, adaptant-te perfectament al grup." ·
  badge "PRIMERA CLASE DE PRUEBA GRATIS" · CTA "Contacte"

---

## 6. TRACTAMENTS (/tratamientos/) — 11 técnicas con descripción completa (VERBATIM)

**Massatge Terapèutic** — (mismo texto que sección 5)

**Radiofreqüència / Tecarteràpia** — La radiofreqüència, també coneguda com a
diatèrmia o tecarteràpia, és una tecnologia terapèutica que utilitza corrents d'alta
freqüència per generar un augment controlat de la temperatura en els teixits
profunds. Aquest efecte biofísic estimula la microcirculació, incrementa
l'oxigenació cel·lular i afavoreix els processos metabòlics implicats en la
reparació tissular. El seu ús és especialment indicat en lesions, tant en fases
agudes com cròniques.

**Teràpia Manual** — La teràpia manual engloba un conjunt de tècniques
especialitzades aplicades amb les mans del fisioterapeuta amb l'objectiu de valorar,
tractar i prevenir disfuncions del sistema musculoesquelètic. Mitjançant
mobilitzacions articulars, manipulacions, tècniques miofascials i treball específic
sobre el teixit muscular, es busca modular el dolor, normalitzar el to muscular,
millorar la mobilitat i optimitzar la funció del teixit. Aquest abordatge permet
actuar de manera precisa sobre lesions concretes, afavorint la recuperació
funcional, la circulació i la qualitat del moviment.

**Tractament del sòl pèlvic** — El tractament durant l'embaràs i el postpart està
orientat a cuidar el cos de la dona en una etapa de grans canvis. A través de
tècniques de fisioteràpia especialitzada, ajudem a alleujar molèsties com el mal
d'esquena, la tensió pèlvica o la sobrecàrrega muscular, i preparem el cos per al
part. Després del naixement, treballem la recuperació del sòl pelvià i de la faixa
abdominal per afavorir una recuperació segura, millorar el benestar i facilitar el
retorn progressiu a l'activitat diària.

**Ones de xoc** — Les ones de xoc són polsos acústics d'alta energia que s'apliquen
directament sobre la zona lesionada. Aquestes ones estimulen la circulació
sanguínia, promouen la regeneració cel·lular i ajuden a descompondre els dipòsits de
calci en tendons i lligaments, accelerant el procés de curació.
Indicacions: Tendinitis del manegot dels rotadors · Tendinitis aquíl·lia ·
Tendinitis rotuliana (genoll del saltador) · Epicondilitis (colze de tennista) ·
Fascitis plantar · Esperó calcani · Contractures musculars · Síndrome de dolor
miofascial.

**Magnetoteràpia** — També anomenada teràpia super inductiva. Aquesta tecnologia es
basa en un camp electromagnètic d'alta intensitat. Els principals efectes
terapèutics són alleujar el dolor, la recuperació accelerada de fractures i edemes
òssies, relaxació i estimulació de musculatura i regeneració de teixit. A més, ens
permet fer un efecte neuromodulador sobre les diferents lesions.

**Punció Seca** — Aquesta tècnica té un resultat molt ràpid i efectiu en problemes
musculars, ja que té un efecte sobre la placa motora del múscul, desencadenant una
reacció nerviosa reflecteix que farà baixar el to muscular i millorar les malalties
del pacient. També es fa servir per treballar punts gallets musculars, que poden
donar dolors referits a zones veïnes.

**Electròlisi Percutània (EPTE)** — L'epte (L'electròlisi percutània terapèutica
EPTE®) és la tècnica revolucionària per al tractament de tendinopaties. Usa
microcorrents perquè l'aplicació sigui pràcticament indolora per al pacient. EPTE®
és una tècnica EFECTIVA, RÀPIDA a la seva aplicació, i que escurça els temps de
recuperació del pacient. Consisteix en l'aplicació de microcorrents a través d'una
agulla d'acupuntura. D'aquesta manera, el fisioterapeuta accedeix al teixit tou
danyat i indueix així la seva autorecuperació.

**Ecografia** — L'ecografia musculoesquelètica és una eina avançada de diagnòstic
que permet visualitzar en temps real l'estat dels músculs, tendons, lligaments i
altres teixits tous. Aquesta tecnologia ens ajuda a identificar amb precisió
l'origen de la lesió i a valorar l'abast real del problema, facilitant així un
diagnòstic més precís. A més, l'ecografia ens permet fer un seguiment de l'evolució
de la lesió al llarg del tractament i ajustar la teràpia segons la resposta del
pacient. També s'utilitza per guiar amb més precisió determinades tècniques
invasives, millorant la seguretat i l'eficàcia del tractament.

**Hipopressius** — Els exercicis hipopressius són una tècnica d'entrenament que se
centra en l'activació i l'enfortiment dels músculs del core i del sòl pelvià.
Aquests exercicis impliquen la realització de postures específiques i la respiració
diafragmàtica per crear una pressió negativa a la cavitat abdominal. S'utilitzen per
millorar la postura, reduir la cintura, prevenir i tractar la incontinència urinària
i millorar el rendiment esportiu.

**Tractament articulació temporo-mandibular (ATM)** — És l'articulació que uneix la
mandíbula amb el nostre crani a la fossa temporal. La patologia està causada per
múltiples focus, que poden anar des de traumatismes aguts fins a problemes d'estrès,
passant per alteracions posturals, bruxisme, etc. El seu tractament, per tant,
també ha de ser multifactorial i ha d'englobar diversos professionals, però els
fisioterapeutes i osteòpates podem focalitzar el nostre tractament en aquesta
articulació a través de treball postural (columna cervical i dorsal), teràpia manual
i estiraments (músculs, lligaments, mobilitzacions…).

---

## 7. EQUIP (/equipo/) — 6 profesionales con CV completo (VERBATIM)

Intro: "A Fisioymés treballem en equip per oferir una atenció de fisioteràpia
personalitzada i de qualitat. Compartim coneixement, experiència clínica i diferents
enfocaments terapèutics per analitzar cada cas des d'una perspectiva global. Aquesta
col·laboració entre professionals ens permet dissenyar plans de tractament adaptats a
les necessitats de cada pacient, amb l'objectiu de millorar la seva salut, recuperar
la funcionalitat i garantir el seu benestar."

**Diana Llongueras** — Directora de Fisioymés · Fisioterapeuta col. 12.476 i
readaptadora esportiva
- Màster oficial de fisioteràpia de l'esport i readaptació a l'activitat física
  (Escoles Universitàries Gimbernat i Tomàs Cerdà)
- Grau de Fisioteràpia per l'Escola Universitària Gimbernat, adscrita a la UAB
- Nº col·legiada: 12.476
- Formació en punció seca i tractament conservador i invasiu de la Síndrome de dolor
  miofascial (Travell i Simons)
- Curs de Fibròlisi Instrumental Miofascial
- Menció en fisioteràpia neurològica (Mètode Bobath i Perfetti)
- Formació en Fisioestètica (Tecarteràpia Winback Academy Espanya)
- Formació en teràpia de drenatge limfàtic manual
- Entrenament personal i funcional
- Fisioterapeuta del Club Volei Sant Cugat
- Curs d'ecografia musculoesquelètica

**Rodrigo Evangelisti** — Director i fundador de Fisioymés · Fisioterapeuta
- Actualment fisioterapeuta del primer equip de FC Dinamo de Bucarest (Rumania)
- Llicenciat en Fisioteràpia. Nº col·legiat: 12.352
- Fisioterapeuta del FC Atlético de Madrid femenino
- Curs d'ecografia musculoesquelètica
- Curs de preparació física esportiva
- EPTE — Electròlisi Percutània Terapèutica
- Curs de punció seca

**Laia Teixidó** — Fisioterapeuta especialitzada en sòl pèlvic
- Formació en fisioteràpia uroginecològica: postpart i disfuncions del sòl pèlvic,
  així com a Gimnàstica Abdominal Hipopressiva (GAH 1 i 2) i peripart
- Grau de Fisioteràpia per l'Escola Universitària Gimbernat, adscrita a la UAB. Nº
  col·legiada: 11.959
- Especialitzada en Rehabilitació de sòl pèlvic i obstetrícia
- Formada a Gimnàstica abdominal hipopressiva
- Especialista en grups de gimnàstica terapèutica i reeducació postural
- Curs Activitat física i exercici terapèutic a l'embaràs
- Formació en teràpia de drenatge limfàtic manual
- Formada al Mètode Pilates sòl
- Curs de punció seca: Fisioteràpia conservadora i invasiva de la síndrome de dolor
  miofascial (Travell i Simons)
- Curs d'ecografia musculoesquelètica

**Laia Costa** — Fisioterapeuta esportiva
- Grau de Fisioteràpia per l'Escola Universitària Gimbernat, adscrita a la UAB. Nº
  col·legiada: 13561
- Menció en aparell locomotor
- Curs de punció seca: Fisioteràpia conservadora i invasiva de la síndrome de dolor
  miofascial (Travell i Simons)
- Formació en tècniques manipulatives i miotensives de columna, pelvis, extremitat
  superior i inferior al CAR Sant Cugat
- Formació en Nutrició aplicada a Patologies Múscul-Esquelètiques
- Experiència en Fisioteràpia i Readaptació esportiva a peu de camp
- Curs d'ecografia musculoesquelètica

**Raúl Serra** — Especialista en teràpia manual
- Diplomat en Fisioteràpia l'any 2002 a les EEUU Gimbernat (adscrita UAB)
- Col·legiat núm. 4212 pel CFC
- Més de 20 anys d'experiència en el camp de la fisioteràpia
- Curs de punció seca i tractament del dolor miofascial (Fisiofocus)
- Curs de tractament de disfuncions cráneo-mandibulars i ATM
- Experiència en tractaments amb ones de xoc
- Experiència en fisioteràpia i massatge esportius
- Àmplia experiència en tractaments en teràpia manual i miofascial

**Dylan Koelma** — Fisioterapeuta esportiu
- Postgrau en Expert en el Diagnòstic diferencial (EUNEIZ), 2025
- Grau de Fisioteràpia per l'Escola Universitària Gimbernat, adscrita a la UAB. Nº
  col·legiat: 17.166
- Formació en Indiba Activ, 2024
- Curs de Punció Seca
- Expert en la fisioteràpia traumatològica i esportiva
- Àrea d'especialització en l'exercici terapèutic
- Curs de neuromodulació en patologia clínica (Antonio Merino)

---

## 8. Col·laboradors (logos, sección propia en home)

5 logos (imágenes reales descargables desde fisioymes.com, uso autorizado por
trabajar para el cliente):
- https://fisioymes.com/wp-content/uploads/2024/03/cvsc.jpg (Club Volei Sant Cugat)
- https://fisioymes.com/wp-content/uploads/2024/03/globalmov.png (Global Movement)
- https://fisioymes.com/wp-content/uploads/2024/03/ELIT-LOGO-ORIGINAL.png (Elit Sports Lab & Medicine)
- https://fisioymes.com/wp-content/uploads/2024/03/moto.png (School Moto)
- https://fisioymes.com/wp-content/uploads/2024/03/marinoss.png (nombre exacto no confirmado visualmente, ver logo)

---

## 9. Reseñas — 10 reseñas reales con nombre y fecha (Google, vía TrustIndex)

1. **jordi marques** (24/01/2024) — "Excel·lents professionals i persones.
   Tractaments amb molts bons resultats."

2. **Carlos de Viguri** (18/12/2023) — "Hasta ahora el mejor centro que he probado
   nunca, lo tienen absolutamente todo, amabilidad, comprensión y empatía irrefutable
   con el paciente, lo mejor… entras con dolor y sales nuevo. No prueben otro sitio,
   no pierdan su tiempo ni su dinero, "com ha FISIOYMÉS no hi ha res mes""

3. **Victoria Corral** (27/11/2023) — "Excelentes profesionales y expertos en
   Fisioterapia de Alto Nivel con un trato muy cercano y familiar. La rehabilitación
   de mi codo después de una fractura y operación muy complicada ha sido
   absolutamente excelente. La recuperación de la movilidad del codo, brazo y mano
   es totalmente positiva sobrepasando todas las expectativas médicas. En especial
   me gustaría agradecer a Rodrigo su continua atención en el proceso de
   recuperación, las recomendaciones y el excelente trabajo. También gracias a todo
   el equipo que me habéis ayudado en sesiones adicionales y con el uso de alta
   tecnología y clases adaptadas. Sin vosotros, la movilidad de mi brazo y la
   recuperación total no habría sido posible. Os estoy eternamente agradecida."

4. **Teresa Gallego** (22/11/2023) — "Estoy muy contenta, me tratan genial. Tuve un
   ictus cerebral, y poco a poco me estoy recuperando. No sabria pasar sin ellas 🥰"

5. **Isabel De Gregorio** (16/11/2023) — "Recomiendo totalmente este centro, en mi
   caso me atiende DIANA, gran profesional con la que enseguida empatizas, experta
   en localizar y tratar las disfunciones utilizando métodos eficaces. Me está
   tratando una tendinitis de hombro y estoy muy contenta con los resultados!!
   Gracias Diana 👍"

6. **ANNA CODES** (14/11/2023) — "Fa més d'un any que vaig a sesións de pilates i,
   després d'haver provat altres tractaments, es el que m'ha anat millor per la
   espatlla, m'he tractat varies contractures amb les Laies i l'últim cop amb la
   Diana, totes son grans profesionals, en el centre em sento molt a gust, el tracte
   es excepcional i es respira un ambient molt agradable i familiar. Mil gràcies a
   tots."

7. **Nil Jaimejuan Gonzalez** (07/11/2023) — "Fa anys que hi vaig i no puc estar més
   content. Sempre he tractat amb el Rodri (genial) però tots son super
   profesionals i simpàtics. Recomano 100%. Tracte inmillorable."

8. **Herminia Perez** (03/11/2023) — "Estic molt satisfeta amb aquest centre, sont
   molt professionals, he tingut un problema de cervicals i ara estic molt bé, tinc
   previst fer un manteniment amb ells i per descomptat amb la Laia Costa que és
   ella la que m'ha atès i solucionat el meu problema. Gràcies Laia"

9. **Nil Gil** (28/09/2023) — "Tracte i atenció inmillorable. Fan molt bona feina i
   l'ambient és molt agradable. Gràcies especialment a l'equip de les Laies, que
   m'han tractant amb molt de carinyo i m'han solucionat la meva lesió"

10. **Òscar de Miguel** (24/09/2023) — "Atenció immillorable. Moltes gràcies i ens
    veiem aviat!!😊"

Resumen: "La evaluación general en Google es 5.0 de 5, en base a 66 reseñas"

---

## 10. TARIFES (/tarifas/) — ya validado, coincide con lo que ya teníamos

- Sessió de fisioteràpia: 30 minuts — 39€ · 50 minuts — 55€
- Bo de sessions: 3 sessions -6% · 5 sessions -10% · 10 sessions -15%
- Pilates grup: 1 classe/setmana 60€/mes · 2 classes/setmana 90€/mes
- Pilates individual: 1 classe/setmana 45€/classe · 2 classes/setmana 70€/classe
- Primera classe de Pilates: gratuïta

---

## 11. LA CLÍNICA (/la-clinica/)

Texto propio ya redactado en v1 (paráfrasis válida, se mantiene):
"Fa més d'una dècada que acompanyem pacients a Sant Cugat del Vallès combinant
l'experiència acumulada amb tècniques actualitzades. Cada tractament s'adapta a la
persona — no a l'inrevés — perquè la recuperació sigui eficaç i es noti des de la
primera visita."
Instal·lacions: Sala de Pilates · Gimnàs · Sales de tractament individual

Contenido real de la página (para referencia, más extenso):
"A Fisioymés, entenem la importància de fusionar coneixements acumulats durant una
dècada amb una perspectiva innovadora i actualitzada en el camp de la fisioteràpia.
La nostra ubicació a Sant Cugat del Vallès es converteix en l'epicentre del nostre
compromís, on cada pacient rep atenció individualitzada per assolir una recuperació
eficient i efectiva. Ens enorgulleix oferir un ambient acollidor i professional,
recolzat per un equip de fisioterapeutes altament capacitats i apassionats per la
seva feina."

---

## 12. Contacto (real, simplificado)

Formulario real: solo **Nom** + **Correu electrònic** + botón "ENVIAR" (no pide
teléfono ni mensaje). Debajo: "or" + "PROGRAMA UNA CITA".
Dirección: Carrer Xerric 4, Local 1 · Sant Cugat del Vallès
WhatsApp: +34 664 76 25 70 · Email: info@fisioymes.com

---

## 13. Decisiones ya acordadas con Sergio (no reabrir)

- Arquitectura: Astro multi-página (Home, Tractaments, Equip, La Clínica, Tarifes,
  Avís legal, Privadesa, Cookies), mismo stack que v1.
- Sistema de diseño: teal #4880AA + Montserrat (títulos) + Roboto (cuerpo), ya
  aprobado — NO reabrir esta decisión.
- Menú móvil hamburguesa + selector de idioma CA/ES (catalán por defecto) — reusar
  el patrón ya construido en v1 (data-ca-text/data-es-text + script localStorage).
  CA es el idioma que "debe tener sí o sí" (petición explícita de Sergio).
  Hero carousel: SÍ replicar los 6 slides (confirmado por Sergio).
  Badges Kit Digital/Gobierno/UE: SÍ incluir (confirmado por Sergio).
- Reservar Cites (booking+pago real): NO replicar el backend — WhatsApp + formulario
  simple (Nom+Email) cubre la función de "pedir cita".
- No perder el disclaimer "Pàgina de demostració a mida — no és el lloc web oficial."
- v1 (`~/Proyectos/demo-fisioymes-premium`) se queda intacto como referencia/fallback.
