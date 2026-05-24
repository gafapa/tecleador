import './style.css';

const ALL_SESSIONS = {
  en: [
    { id: 1, title: 'Home Left', text: 'asdf asdf asdf fads dads sad fad asdf', unlocked: true },
    { id: 2, title: 'Home Right', text: 'jkl; jkl; jkl; a fad falls as dad asks', unlocked: false },
    { id: 3, title: 'Full Home Row', text: 'asdf jkl; alas flaks dash flash flask salad lad', unlocked: false },
    { id: 4, title: 'Top Left', text: 'qwer qwer req we raw ear era awe wear fear', unlocked: false },
    { id: 5, title: 'Top Right', text: 'uiop uiop pop rip out pour up you lip oil', unlocked: false },
    { id: 6, title: 'Full Top Row', text: 'qwerty uiop your true purple quiet quote priority', unlocked: false },
    { id: 7, title: 'Bottom Left', text: 'zxcv zxcv cat cab car cave exact zero extra cover', unlocked: false },
    { id: 8, title: 'Bottom Right', text: 'bnm, bnm, mom moon man boom zoom norm morn', unlocked: false },
    { id: 9, title: 'Basic Sentences', text: 'the cat sat on the mat and had a nap', unlocked: false },
    { id: 10, title: 'Numbers Row', text: '123 456 789 0 1029 3847 5621 1928374650', unlocked: false },
    { id: 11, title: 'Common Words 1', text: 'about because change children during enough family', unlocked: false },
    { id: 12, title: 'Common Words 2', text: 'government health important justify knowledge local', unlocked: false },
    { id: 13, title: 'Punctuation Practice', text: 'wait, what? "hello," she said. 100% real!', unlocked: false },
    { id: 14, title: 'Proper Nouns', text: 'Alice Bob Charlie London Paris Tokyo Microsoft Apple Google', unlocked: false },
    { id: 15, title: 'SHOUTING MODE', text: 'STOP WAIT DANGER ATTENTION EMERGENCY ALERT DONE NOW', unlocked: false },
    { id: 16, title: 'Mixed Case', text: 'AbCdEfG hIjKlMn OpQrStU vWxYz iPhOnE mAcBoOk', unlocked: false },
    { id: 17, title: 'Business Talk', text: 'please review the attached document for details', unlocked: false },
    { id: 18, title: 'Nature Description', text: 'green leaves dance in the gentle summer wind', unlocked: false },
    { id: 19, title: 'Hard Reach Practice', text: 'extremely quick foxes jump very lazily indeed', unlocked: false },
    { id: 20, title: 'Grand Finale', text: 'the quick brown fox jumps over the lazy dog perfectly', unlocked: false },
  ],
  es: [
    { id: 1, title: 'Inicio Izquierda', text: 'asdf asdf fada saca casa asada asdf', unlocked: true },
    { id: 2, title: 'Inicio Derecha', text: 'jklñ jklñ al la allá sala las sala jklñ', unlocked: false },
    { id: 3, title: 'Fila Central Completa', text: 'asdf jklñ alas faldas da las casas salinas', unlocked: false },
    { id: 4, title: 'Alcance Superior Izq', text: 'qwer qwer que ver era red tea quererte qwer', unlocked: false },
    { id: 5, title: 'Alcance Superior Der', text: 'uiop uiop por ir río tipo pudo opio uiop', unlocked: false },
    { id: 6, title: 'Fila Superior', text: 'qwerty uiop quiero ayer equipo poder todo oro', unlocked: false },
    { id: 7, title: 'Alcance Inferior Izq', text: 'zxcv zxcv cazo vez cera extra vez zxcv', unlocked: false },
    { id: 8, title: 'Alcance Inferior Der', text: 'bnm, bnm, mi mamá me mima mucho bnm,', unlocked: false },
    { id: 9, title: 'Frases Básicas', text: 'el sol sale cada día por el este azul', unlocked: false },
    { id: 10, title: 'Fila Numérica', text: '123 456 789 0 1029 3847 5621 1928374650', unlocked: false },
    { id: 11, title: 'Palabras Comunes 1', text: 'aunque porque cambio ciudad durante familia', unlocked: false },
    { id: 12, title: 'Palabras Comunes 2', text: 'gobierno importante justicia local mañana noche', unlocked: false },
    { id: 13, title: 'Signos de Puntuación', text: '¿qué tal? "hola," dijo ella. ¡100% real!', unlocked: false },
    { id: 14, title: 'Nombres Propios', text: 'Ana Bruno Carlos Londres París Tokio Microsoft Apple Google', unlocked: false },
    { id: 15, title: 'MODO GRITO', text: 'PARE ESPERE PELIGRO ATENCION EMERGENCIA ALERTA LISTO YA', unlocked: false },
    { id: 16, title: 'Mayúsculas Mixtas', text: 'AbCdEfG hIjKlMn OpQrStU vWxYz iPhOnE mAcBoOk', unlocked: false },
    { id: 17, title: 'Lenguaje de Negocios', text: 'favor de revisar el documento adjunto ahora', unlocked: false },
    { id: 18, title: 'Descripción de Naturaleza', text: 'hojas verdes bailan con el suave viento', unlocked: false },
    { id: 19, title: 'Práctica de Acentos', text: 'canción camión música árbol lápiz último', unlocked: false },
    { id: 20, title: 'Maestría Final', text: 'el veloz murciélago hindú comía feliz regaliz y kiwi', unlocked: false },
  ],
  gl: [
    { id: 1, title: 'Inicio Esquerda', text: 'asdf asdf fada saca cada asada faca asdf', unlocked: true },
    { id: 2, title: 'Inicio Dereita', text: 'jklñ jklñ sala aló alí las sala jklñ', unlocked: false },
    { id: 3, title: 'Fila Central Galega', text: 'asdf jklñ cada fada asada sae sala galega', unlocked: false },
    { id: 4, title: 'Alcance Superior', text: 'qwer uiop que ver ou por ría pedir uiop', unlocked: false },
    { id: 5, title: 'Alcance Inferior', text: 'zxcv bnm, cazo vez meu man nome bnm', unlocked: false },
    { id: 6, title: 'Palabras Curtas', text: 'eu ti el ela nós vós eles elas un unha', unlocked: false },
    { id: 7, title: 'Frases de Inicio', text: 'o can corre polo campo verde de camiño', unlocked: false },
    { id: 8, title: 'Artigos e Pronomes', text: 'o a os as un unha uns unhas que quen', unlocked: false },
    { id: 9, title: 'Días da Semana', text: 'luns martes mércores xoves venres sábado domingo', unlocked: false },
    { id: 10, title: 'Números e Anos', text: 'un dous tres catro cinco seis sete oito nove dez', unlocked: false },
    { id: 11, title: 'Meses do Ano', text: 'xaneiro febreiro marzo abril maio xuño xullo', unlocked: false },
    { id: 12, title: 'Cores Galegas', text: 'azul vermello amarelo verde branco negro gris', unlocked: false },
    { id: 13, title: 'A Natureza', text: 'o mar e a montaña son a nosa terra nai', unlocked: false },
    { id: 14, title: 'Nomes Propios', text: 'Antón Brais Carme Londres París Tokio Microsoft Apple Google', unlocked: false },
    { id: 15, title: 'MODO BERRO', text: 'PARE AGARDE PERIGO ATENCION EMERXENCIA ALERTA FEITO XA', unlocked: false },
    { id: 16, title: 'Maiúsculas Mixtas', text: 'AbCdEfG hIjKlMn OpQrStU vWxYz iPhOnE mAcBoOk', unlocked: false },
    { id: 17, title: 'Literatura', text: 'rosalía de castro escribiu cantares gallegos', unlocked: false },
    { id: 18, title: 'Verbos Comúns', text: 'falar comer durmir andar correr rir cantar', unlocked: false },
    { id: 19, title: 'O Tempo', text: 'hoxe chove moito pero mañá sairá o sol', unlocked: false },
    { id: 20, title: 'Pangrama Galego', text: 'o vello ferreiro gasta as mans no fogar galego', unlocked: false },
  ],
  fr: [
    { id: 1, title: 'Bases Gauche', text: 'qsdf qsdf fée sac case aède qsdf', unlocked: true },
    { id: 2, title: 'Bases Droite', text: 'jklm jklm la le les mais salle jklm', unlocked: false },
    { id: 3, title: 'Ligne Centrale AZERTY', text: 'qsdf jklm la fée de la salle a faim', unlocked: false },
    { id: 4, title: 'Ligne Supérieure', text: 'azerty uiop que pour tuer y voir uiop', unlocked: false },
    { id: 5, title: 'Ligne Inférieure', text: 'wxcv bnm, avec chez bien nous bnm', unlocked: false },
    { id: 6, title: 'Mots Courants 1', text: 'le la un une et est dans pour avec que', unlocked: false },
    { id: 7, title: 'Mots Courants 2', text: 'avoir faire dire voir aller vouloir venir', unlocked: false },
    { id: 8, title: 'Accents Graves', text: 'à dès où là-bas après très près lève', unlocked: false },
    { id: 9, title: 'Accents Aigus', text: 'été école été café bébé année déja', unlocked: false },
    { id: 10, title: 'Chiffres', text: 'un deux trois quatre cinco six sept huit neuf dix', unlocked: false },
    { id: 11, title: 'Jours et Mois', text: 'lundi mardi mercredi janvier février mars', unlocked: false },
    { id: 12, title: 'Cédille et Circonflexe', text: 'garçon ça leçon maître être forêt hâte', unlocked: false },
    { id: 13, title: 'La Ville', text: 'paris est une ville très belle le soir', unlocked: false },
    { id: 14, title: 'Noms Propres', text: 'Alice Bob Charles Londres Paris Tokyo Microsoft Apple Google', unlocked: false },
    { id: 15, title: 'MODE CRIER', text: 'STOP ATTENDEZ DANGER ATTENTION URGENCE ALERTE PRÊT MAINTENANT', unlocked: false },
    { id: 16, title: 'Casse Mixte', text: 'AbCdEfG hIjKlMn OpQrStU vWxYz iPhOnE mAcBoOk', unlocked: false },
    { id: 17, title: 'Questions', text: 'comment allez-vous? quel âge avez-vous?', unlocked: false },
    { id: 18, title: 'Verbes de Liaison', text: 'je suis tu es il est nous sommes vous êtes', unlocked: false },
    { id: 19, title: 'Adjectifs', text: 'grand petit beau nouveau jeune bon vieux', unlocked: false },
    { id: 20, title: 'Pangrame Français', text: 'portez ce vieux whisky au juge blond qui fume', unlocked: false },
  ],
  de: [
    { id: 1, title: 'Basis Links', text: 'asdf asdf fass das Rad Sade Fase asdf', unlocked: true },
    { id: 2, title: 'Basis Rechts', text: 'jklö jklö alle alles Saal las See jklö', unlocked: false },
    { id: 3, title: 'Mittlere Reihe QWERTZ', text: 'asdf jklö das Rad der See ist sehr leer', unlocked: false },
    { id: 4, title: 'Obere Reihe', text: 'qwertz uiop wer die tür hat her uiop', unlocked: false },
    { id: 5, title: 'Untere Reihe', text: 'yxcv bnm, von bis zum mein bnm', unlocked: false },
    { id: 6, title: 'Häufige Wörter 1', text: 'der die das ein eine und ist ich nicht', unlocked: false },
    { id: 7, title: 'Häufige Wörter 2', text: 'haben werden sagen gehen kommen machen', unlocked: false },
    { id: 8, title: 'Umlaute Ää', text: 'Äpfel Bären Käse spät wählen Rätsel Ää', unlocked: false },
    { id: 9, title: 'Umlaute Öö', text: 'Österreich hören öffnen schön Vögel Öö', unlocked: false },
    { id: 10, title: 'Umlaute Üü', text: 'Übung über müssen dürfen fünf Glück Üü', unlocked: false },
    { id: 11, title: 'Scharfes S (ß)', text: 'groß heiß weiß fließen Straße Fußball ß', unlocked: false },
    { id: 12, title: 'Zahlen und Daten', text: 'eins zwei drei vier fünf sechs sieben acht neun zehn', unlocked: false },
    { id: 13, title: 'Die Natur', text: 'der wald ist grün und die berge sind hoch', unlocked: false },
    { id: 14, title: 'Eigennamen', text: 'Anna Berlin Christoph London Paris Tokio Microsoft Apple Google', unlocked: false },
    { id: 15, title: 'SCHREI-MODUS', text: 'STOPP WARTEN GEFAHR ACHTUNG NOTFALL ALARM FERTIG JETZT', unlocked: false },
    { id: 16, title: 'Gemischte Gehäuse', text: 'AbCdEfG hIjKlMn OpQrStU vWxYz iPhOnE mAcBoOk', unlocked: false },
    { id: 17, title: 'Höflichkeit', text: 'vielen dank für deine hilfe bitte sehr', unlocked: false },
    { id: 18, title: 'Farben', text: 'blau rot gelb grün weiß schwarz grau', unlocked: false },
    { id: 19, title: 'Zusammengesetzte Wörter', text: 'handschuh kühlschrank flugzeug bahnhof', unlocked: false },
    { id: 20, title: 'Deutscher Pangramm', text: 'franz jagt im komplett verwahrlosten taxi quer durch bayern', unlocked: false },
  ],
  pt: [
    { id: 1, title: 'Básicos Esquerda', text: 'asdf asdf fada saca casa cada asada asdf', unlocked: true },
    { id: 2, title: 'Básicos Direita', text: 'jklç jklç sala ali lá as sala jklç', unlocked: false },
    { id: 3, title: 'Fila Central', text: 'asdf jklç a fada da sala saca a casa asdf', unlocked: false },
    { id: 4, title: 'Fila Superior', text: 'qwerty uiop quero poder tudo ouro uiop', unlocked: false },
    { id: 5, title: 'Fila Inferior', text: 'zxcv bnm, com bem meu sem bnm', unlocked: false },
    { id: 6, title: 'Palavras Comuns 1', text: 'o a um uma e é em para com que se', unlocked: false },
    { id: 7, title: 'Palavras Comuns 2', text: 'ter fazer dizer ver ir querer vir poder', unlocked: false },
    { id: 8, title: 'Cedilha (ç)', text: 'maçã coração acção lição caça moça ç', unlocked: false },
    { id: 9, title: 'Til (ã/õ)', text: 'irmão não cão pão limão mãos acções ãõ', unlocked: false },
    { id: 10, title: 'Acentos Agudos', text: 'está agua café céu pé saída avó áéíóú', unlocked: false },
    { id: 11, title: 'Acentos Circunflexos', text: 'avô você três mêns vêm têm êôâ', unlocked: false },
    { id: 12, title: 'Cores', text: 'azul vermelho amarelo verde branco preto', unlocked: false },
    { id: 13, title: 'Números', text: 'um dois três quatro cinco seis sete oito nove dez', unlocked: false },
    { id: 14, title: 'Nomes Próprios', text: 'Ana Bruno Carlos Lisboa Paris Tóquio Microsoft Apple Google', unlocked: false },
    { id: 15, title: 'MODO GRITO', text: 'PARE ESPERE PERIGO ATENÇÃO EMERGÊNCIA ALERTA PRONTO AGORA', unlocked: false },
    { id: 16, title: 'Maiúsculas Mistas', text: 'AbCdEfG hIjKlMn OpQrStU vWxYz iPhOnE mAcBoOk', unlocked: false },
    { id: 17, title: 'Culinária', text: 'bacalhau e pão de queijo são saborosos', unlocked: false },
    { id: 18, title: 'Tempo', text: 'hoje faz sol mas amanhã pode chover aqui', unlocked: false },
    { id: 19, title: 'Verbos Ser/Estar', text: 'eu sou eu estou nós somos nós estamos', unlocked: false },
    { id: 20, title: 'Pangrama Português', text: 'gazeta dactilografada num vago e lúgubre jitter preto', unlocked: false },
  ],
  ca: [
    { id: 1, title: 'Bàsics Esquerra', text: 'asdf asdf fada saca casa cada asada asdf', unlocked: true },
    { id: 2, title: 'Bàsics Dreta', text: 'jklç jklç sala allí la sala jklç', unlocked: false },
    { id: 3, title: 'Fila Central', text: 'asdf jklç la fada de la sala saca a casa', unlocked: false },
    { id: 4, title: 'Fila Superior', text: 'qwerty uiop que per tot or poder uiop', unlocked: false },
    { id: 5, title: 'Fila Inferior', text: 'zxcv bnm, amb bé meu seu bnm', unlocked: false },
    { id: 6, title: 'Paraules Comunes 1', text: 'el la un una i és en per amb que si', unlocked: false },
    { id: 7, title: 'Paraules Comunes 2', text: 'tenir fer dir veure anar voler venir', unlocked: false },
    { id: 8, title: 'Cedilla (ç)', text: 'caça lliçó dolç força peça llança ç', unlocked: false },
    { id: 9, title: 'Ela Geminada (l·l)', text: 'paral·lel col·lecció intel·ligent l·l', unlocked: false },
    { id: 10, title: 'Accents Oberts', text: 'què pròxim cafè demà allà èòà', unlocked: false },
    { id: 11, title: 'Accents Tancats', text: 'també tingués fòrça pròxim éóíú', unlocked: false },
    { id: 12, title: 'Dies i Mesos', text: 'dilluns dimarts gener febrer març abril', unlocked: false },
    { id: 13, title: 'Colors', text: 'blau vermell groc verd blanc negre gris', unlocked: false },
    { id: 14, title: 'Noms Propris', text: 'Anna Blai Carme Barcelona París Tòquio Microsoft Apple Google', unlocked: false },
    { id: 15, title: 'MODO CRIT', text: 'PARA ESPERA PERILL ATENCIO EMERGENCIA ALERTA LLEST ARA', unlocked: false },
    { id: 16, title: 'Majúscules Mixtes', text: 'AbCdEfG hIjKlMn OpQrStU vWxYz iPhOnE mAcBoOk', unlocked: false },
    { id: 17, title: 'Història', text: 'la història de catalunya é molt antiga', unlocked: false },
    { id: 18, title: 'Cultura', text: 'sant jordi és el dia del llibre i la rosa', unlocked: false },
    { id: 19, title: 'Verbs Ser/Estar', text: 'jo sóc jo estic nosaltres som estem', unlocked: false },
    { id: 20, title: 'Pangrama Català', text: 'jove xef, qui banya el got d\'ogre fals amb suc de pinyó?', unlocked: false },
  ],
  eu: [
    { id: 1, title: 'Ezkerra', text: 'asdf asdf saca fada casa asada asdf', unlocked: true },
    { id: 2, title: 'Eskuina', text: 'jklñ jklñ jklñ sala alaba las sala jklñ', unlocked: false },
    { id: 3, title: 'Erdiko Errenkada', text: 'asdf jklñ saca fada alaba sala joan', unlocked: false },
    { id: 4, title: 'Goiko Errenkada', text: 'qwerty uiop gure etxea joan dugu uiop', unlocked: false },
    { id: 5, title: 'Beheko Errenkada', text: 'zxcv bnm, eman zen gaur bnm', unlocked: false },
    { id: 6, title: 'Hitz Ohikoak 1', text: 'eta da daude bat zara gure nire', unlocked: false },
    { id: 7, title: 'Hitz Ohikoak 2', text: 'izan ukan egin etorri joan esan', unlocked: false },
    { id: 8, title: 'Egunak', text: 'astelehena asteartea asteazkena osteguna', unlocked: false },
    { id: 9, title: 'Hilabeteak', text: 'urtarrila otsaila martxoa apirila maiatza', unlocked: false },
    { id: 10, title: 'Zenbakiak 1-10', text: 'bat bi hiru lau bost sei zazpi zortzi bederatzi hamar', unlocked: false },
    { id: 11, title: 'Zenbakiak 11-20', text: 'hamaika hamabi hamahiru hamalau hamabost', unlocked: false },
    { id: 12, title: 'Koloreak', text: 'urdina gorria horia berdea zuria beltza', unlocked: false },
    { id: 13, title: 'Familia', text: 'aita ama anaia arreba seme alaba', unlocked: false },
    { id: 14, title: 'Izen Proprioak', text: 'Ane Bittor Kepa Bilbo Paris Tokio Microsoft Apple Google', unlocked: false },
    { id: 15, title: 'DEIADAR MODUA', text: 'GELDITU ITXARON ARRISKUA KONTUZ LARRIALDIA ALERTA EGINA ORAIN', unlocked: false },
    { id: 16, title: 'Letra Larri-Xeheak', text: 'AbCdEfG hIjKlMn OpQrStU vWxYz iPhOnE mAcBoOk', unlocked: false },
    { id: 17, title: 'Janaria', text: 'ogia eta ardoa mahai gainean daude', unlocked: false },
    { id: 18, title: 'Agurrak', text: 'kaixo egun on arratsalde on gabon agur', unlocked: false },
    { id: 19, title: 'Galdetzaileak', text: 'nor zer non nola noiz zergatik zenbat', unlocked: false },
    { id: 20, title: 'Pangrama Euskara', text: 'atzo bultzatu ninduen gizon hark oso gaizki portatu zen', unlocked: false },
  ]
};

const TRANSLATIONS = {
  en: {
    dashboardTitle: 'TYPING LAB', curriculum: 'Curriculum', startBtn: 'Start', locked: '🔒 Locked', avgWpm: 'Avg Net WPM', accuracy: 'Accuracy', maxCombo: 'Max Combo', itemsInGrid: 'Sessions', problemKeys: 'Global Errors:', abort: '← Abort', retry: 'Retry', dashboard: 'Dashboard', sessionComplete: 'Done!', errors: 'Errors', rawWpm: 'Raw WPM', sessionProblemKeys: 'Keys', langLabel: 'Locale:', aiLabel: 'AI Style:', freeMode: 'Free Mode', pasteText: 'Paste your text here...', startFree: 'Practice'
  },
  es: {
    dashboardTitle: 'LABORATORIO DE TECLEO', curriculum: 'Plan de Estudios', startBtn: 'Empezar', locked: '🔒 Bloqueado', avgWpm: 'PPM Netas', accuracy: 'Precisión', maxCombo: 'Combo Máximo', itemsInGrid: 'Sesiones', problemKeys: 'Errores Globales:', abort: '← Abortar', retry: 'Reintentar', dashboard: 'Panel', sessionComplete: '¡Listo!', errors: 'Errores', rawWpm: 'PPM Brutas', sessionProblemKeys: 'Teclas', langLabel: 'Teclado:', aiLabel: 'Estilo de IA:', freeMode: 'Modo Libre', pasteText: 'Pega tu texto aquí...', startFree: 'Practicar'
  },
  gl: {
    dashboardTitle: 'LABORATORIO DE TECLEO', curriculum: 'Plan de Estudos', startBtn: 'Comezar', locked: '🔒 Bloqueado', avgWpm: 'PPM Netas', accuracy: 'Precisión', maxCombo: 'Combo Máximo', itemsInGrid: 'Sesións', problemKeys: 'Errores Globais:', abort: '← Abortar', retry: 'Tentar de novo', dashboard: 'Panel', sessionComplete: '¡Feito!', errors: 'Errores', rawWpm: 'PPM Brutas', sessionProblemKeys: 'Teclas', langLabel: 'Teclado:', aiLabel: 'Estilo de IA:', freeMode: 'Modo Libre', pasteText: 'Pega o teu texto aquí...', startFree: 'Practicar'
  },
  fr: {
    dashboardTitle: 'LABO DE FRAPPE', curriculum: 'Curriculum', startBtn: 'Démarrer', locked: '🔒 Verrouillé', avgWpm: 'MPM Net', accuracy: 'Précision', maxCombo: 'Combo Max', itemsInGrid: 'Sessions', problemKeys: 'Erreurs Globales:', abort: '← Annuler', retry: 'Réessayer', dashboard: 'Accueil', sessionComplete: 'Bravo !', errors: 'Erreurs', rawWpm: 'MPM Brut', sessionProblemKeys: 'Touches', langLabel: 'Clavier :', aiLabel: 'Style IA :', freeMode: 'Mode Libre', pasteText: 'Collez votre texte ici...', startFree: 'Pratiquer'
  },
  de: {
    dashboardTitle: 'TIPP-LABOR', curriculum: 'Lernplan', startBtn: 'Starten', locked: '🔒 Sperre', avgWpm: 'Netto-WPM', accuracy: 'Genauigkeit', maxCombo: 'Max Combo', itemsInGrid: 'Lektionen', problemKeys: 'Globale Fehler:', abort: '← Abbruch', retry: 'Nochmal', dashboard: 'Übersicht', sessionComplete: 'Fertig!', errors: 'Fehler', rawWpm: 'Brutto-WPM', sessionProblemKeys: 'Tasten', langLabel: 'Tastatur:', aiLabel: 'KI-Stil:', freeMode: 'Freier Modus', pasteText: 'Text hier einfügen...', startFree: 'Üben'
  },
  pt: {
    dashboardTitle: 'LABORATÓRIO DE DATILOGRAFIA', curriculum: 'Plano de Estudos', startBtn: 'Começar', locked: '🔒 Bloqueado', avgWpm: 'PPM Líquido', accuracy: 'Precisão', maxCombo: 'Combo Máximo', itemsInGrid: 'Sessões', problemKeys: 'Erros Globais:', abort: '← Abortar', retry: 'Repetir', dashboard: 'Painel', sessionComplete: 'Concluído!', errors: 'Erros', rawWpm: 'PPM Bruto', sessionProblemKeys: 'Teclas', langLabel: 'Teclado:', aiLabel: 'Estilo IA:', freeMode: 'Modo Livre', pasteText: 'Cole seu texto aqui...', startFree: 'Praticar'
  },
  ca: {
    dashboardTitle: 'LABORATORI DE TECLEJAT', curriculum: 'Pla d\'Estudis', startBtn: 'Començar', locked: '🔒 Bloqueat', avgWpm: 'PPM Netes', accuracy: 'Precisió', maxCombo: 'Combo Màxim', itemsInGrid: 'Sessions', problemKeys: 'Errors Globals:', abort: '← Avortar', retry: 'Tornar-hi', dashboard: 'Panell', sessionComplete: ' Fet!', errors: 'Errors', rawWpm: 'PPM Brutes', sessionProblemKeys: 'Tecles', langLabel: 'Teclat:', aiLabel: 'Estil IA:', freeMode: 'Modo Lliure', pasteText: 'Enganxa el teu text aquí...', startFree: 'Practicar'
  },
  eu: {
    dashboardTitle: 'TEKLEATZE LABORATEGI', curriculum: 'Ikasketa Plana', startBtn: 'Hasi', locked: '🔒 Blokeatuta', avgWpm: 'WPM Netoa', accuracy: 'Zehaztasuna', maxCombo: 'Combo Max', itemsInGrid: 'Saioak', problemKeys: 'Errore Globalak:', abort: '← Utzi', retry: 'Berriro', dashboard: 'Panela', sessionComplete: 'Egina!', errors: 'Erroreak', rawWpm: 'WPM Brutoa', sessionProblemKeys: 'Teklak', langLabel: 'Teklatua:', aiLabel: 'AI Estiloa:', freeMode: 'Modu Librea', pasteText: 'Itsatsi txea hemen...', startFree: 'Praktikatu'
  }
};

const AI_PROFILES = {
  neon: {
    idle: ['¡Vamos allá!', '¡A teclear!', '¿Listo para el combo?', '¡Dale caña!'],
    typing: ['¡Eso es!', 'Sigue así...', '¡Buen ritmo!'],
    error: ['¡Cuidado!', '¡Más atento!', 'No pasa nada'],
    fire: ['¡IMPARABLE!', '¡MÁQUINA!', '¡BRUTAL!'],
    finishGood: ['¡Excelente!', '¡Vaya sesión!', '¡Nivelazo!'],
    finishBad: ['Bueno, a practicar más.', 'Se intentó.', 'Poco a poco.']
  },
  zen: {
    idle: ['Respira hondo...', 'Encuentra tu centro...', 'Paz mental...'],
    typing: ['Fluye...', 'Como el agua...', 'Sin esfuerzo...'],
    error: ['Respira el error...', 'Acepta y sigue...', 'No te juzgues...'],
    fire: ['Armonía total', 'Mente vacía', 'Estás en la zona'],
    finishGood: ['El camino se ilumina.', 'Paz y velocidad.', 'Namasté.'],
    finishBad: ['Cada error es una lección.', 'El bambú se dobla.', 'Paciencia infinita.']
  },
  sarcastic: {
    idle: ['¿A qué esperas?', 'Tengo cosas mejores que hacer...', 'Pulsa de una vez.', 'Ah, humano...'],
    typing: ['Milagro...', 'Ah, sabes leer.', 'Al menos lo intentas.'],
    error: ['Mis ojos...', 'Incluso un mono...', 'Madre mía.', 'Espectacular (no).'],
    fire: ['¿Te ha poseído alguien?', 'No me lo creo.', 'Huelo a humo.'],
    finishGood: ['Hackeaste el sistema, seguro.', 'Un milagro estadístico.', 'No está del todo mal.'],
    finishBad: ['Me duelen los circuitos.', 'Mejor dedícate a otra cosa.', 'Lamentable.']
  }
};

let globalStats = {
  wpm: 0,
  netWpm: 0,
  accuracy: 0,
  sessionsCompleted: 0,
  maxCombo: 0,
  totalRawWpm: 0,
  totalNetWpm: 0,
  totalAccuracy: 0
};

let missedKeysGlobal = {};

let currentSession = null;
let currentText = '';
let typedText = '';
let startTime = null;
let errors = 0;
let currentCombo = 0;
let sessionMaxCombo = 0;
let sessionMissedKeys = {};
let timerInterval = null;
let resultsTimeout = null;

let currentAIStyle = 'neon';

const KEYBOARD_LAYOUTS = {
  en: [['1','2','3','4','5','6','7','8','9','0'],['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L'],['Z','X','C','V','B','N','M'],['SPACE']],
  es: [['1','2','3','4','5','6','7','8','9','0'],['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L','Ñ'],['Z','X','C','V','B','N','M'],['SPACE']],
  gl: [['1','2','3','4','5','6','7','8','9','0'],['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L','Ñ'],['Z','X','C','V','B','N','M'],['SPACE']],
  fr: [['1','2','3','4','5','6','7','8','9','0'],['A','Z','E','R','T','Y','U','I','O','P'],['Q','S','D','F','G','H','J','K','L','M'],['W','X','C','V','B','N','?'],['SPACE']],
  de: [['1','2','3','4','5','6','7','8','9','0'],['Q','W','E','R','T','Z','U','I','O','P'],['A','S','D','F','G','H','J','K','L','Ö','Ä'],['Y','X','C','V','B','N','M','Ü'],['SPACE']],
  pt: [['1','2','3','4','5','6','7','8','9','0'],['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L','Ç'],['Z','X','C','V','B','N','M'],['SPACE']],
  ca: [['1','2','3','4','5','6','7','8','9','0'],['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L','Ç'],['Z','X','C','V','B','N','M'],['SPACE']],
  eu: [['1','2','3','4','5','6','7','8','9','0'],['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L'],['Z','X','C','V','B','N','M'],['SPACE']]
};

const keyboardDataKeyCache = new Map();

const IGNORED_TYPING_KEYS = new Set([
  'Alt',
  'AltGraph',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'Backspace',
  'CapsLock',
  'Control',
  'Dead',
  'Delete',
  'End',
  'Enter',
  'Escape',
  'Home',
  'Insert',
  'Meta',
  'PageDown',
  'PageUp',
  'Shift',
  'Tab'
]);

let currentLanguage = 'es';

window.changeLanguage = (lang) => {
  const activeSessionId = currentSession?.id ?? null;
  currentLanguage = lang;

  if (activeSessionId === null) {
    renderDashboard();
  } else {
    startSession(activeSessionId);
  }
};

window.changeAIStyle = (style) => {
  currentAIStyle = style;
  const container = document.getElementById('mascot-container');
  if (container) {
    container.classList.remove('ai-neon', 'ai-zen', 'ai-sarcastic');
    container.classList.add('ai-' + style);
  }
  document.body.className = 'theme-' + style;
  setMascotState('idle', getRandomMsg('idle'));
};

function getRandomMsg(type) {
  const profile = AI_PROFILES[currentAIStyle];
  const msgs = profile[type];
  return msgs[Math.floor(Math.random() * msgs.length)];
}

function stopActiveSession() {
  clearInterval(timerInterval);
  timerInterval = null;
  clearTimeout(resultsTimeout);
  resultsTimeout = null;
  document.removeEventListener('keydown', handleTyping);
}

function resetPracticeState() {
  typedText = '';
  startTime = null;
  errors = 0;
  currentCombo = 0;
  sessionMaxCombo = 0;
  sessionMissedKeys = {};
}

function normalizeText(value) {
  return value.normalize('NFC');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getLayoutDataKeys(language) {
  if (!keyboardDataKeyCache.has(language)) {
    const layoutKeys = new Set(
      (KEYBOARD_LAYOUTS[language] || KEYBOARD_LAYOUTS.es)
        .flat()
        .map(layoutKey => layoutKey === 'SPACE' ? 'space' : layoutKey.toLowerCase())
    );
    keyboardDataKeyCache.set(language, layoutKeys);
  }

  return keyboardDataKeyCache.get(language);
}

function getKeyboardDataKey(char) {
  if (char === ' ') return 'space';

  const key = char.toLowerCase();
  const layoutKeys = getLayoutDataKeys(currentLanguage);

  if (layoutKeys.has(key)) return key;

  return key.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function bindClick(id, handler) {
  document.getElementById(id)?.addEventListener('click', handler);
}

let mascotTimer = null;
function setMascotState(state, message) {
  const mascot = document.getElementById('cybot');
  const bubble = document.getElementById('cybot-bubble');
  const container = document.getElementById('mascot-container');
  if (!mascot || !bubble || !container) return;

  // Add state to container safely keeping the ai-* class intact
  container.className = `ai-${currentAIStyle} state-${state}`;
  mascot.className = 'cybot'; // reset mascot class entirely
  
  if (message) {
    bubble.textContent = message;
    bubble.style.opacity = '1';
    bubble.style.transform = 'translateY(0) scale(1)';
    // small pop effect
    setTimeout(() => {
        bubble.style.transform = 'translateY(5px) scale(1.05) rotate(2deg)';
    }, 100);
    clearTimeout(mascotTimer);
    mascotTimer = setTimeout(() => {
      bubble.style.opacity = '0';
      bubble.style.transform = 'translateY(10px) scale(0.9)';
    }, 3000);
  }
}

function renderDashboard() {
  const app = document.querySelector('#app');
  const t = TRANSLATIONS[currentLanguage];
  const sessions = ALL_SESSIONS[currentLanguage];

  let sessionsHTML = sessions.map(s => `
    <button
      class="card session-card ${s.unlocked ? 'unlocked' : 'locked'}"
      type="button"
      data-session-id="${s.id}"
      ${s.unlocked ? '' : 'disabled aria-disabled="true"'}
    >
      <span class="session-number">${escapeHtml(t.itemsInGrid || 'Session')} ${s.id}</span>
      <span class="session-title">${escapeHtml(s.title)}</span>
      ${!s.unlocked ? `<span class="session-lock">${escapeHtml(t.locked)}</span>` : ''}
    </button>
  `).join('');

  const sortedProblemKeys = Object.entries(missedKeysGlobal)
    .sort((a,b) => b[1] - a[1])
    .slice(0, 3);
  
  let problemKeysHTML = '';
  if (sortedProblemKeys.length > 0) {
    problemKeysHTML = `
      <div style="margin-top:1rem;">
        <p style="color:var(--on-surface-variant); font-size:0.9rem;">${escapeHtml(t.problemKeys)}</p>
        <div class="problem-keys-container">
          ${sortedProblemKeys.map(([k, count]) => `<div class="problem-key-badge">${escapeHtml(k === ' ' ? 'SPACE' : k.toUpperCase())} (${count})</div>`).join('')}
        </div>
      </div>
    `;
  }

  app.innerHTML = `
    <div class="header-controls">
      <div class="control-group">
        <label for="lang-selector" class="sr-only">${escapeHtml(t.langLabel)}</label>
        <select id="lang-selector">
          <option value="es" ${currentLanguage === 'es' ? 'selected' : ''}>Español</option>
          <option value="en" ${currentLanguage === 'en' ? 'selected' : ''}>English</option>
          <option value="gl" ${currentLanguage === 'gl' ? 'selected' : ''}>Galego</option>
          <option value="fr" ${currentLanguage === 'fr' ? 'selected' : ''}>Français</option>
          <option value="de" ${currentLanguage === 'de' ? 'selected' : ''}>Deutsch</option>
          <option value="pt" ${currentLanguage === 'pt' ? 'selected' : ''}>Português</option>
          <option value="ca" ${currentLanguage === 'ca' ? 'selected' : ''}>Català</option>
          <option value="eu" ${currentLanguage === 'eu' ? 'selected' : ''}>Euskara</option>
        </select>
      </div>
      <div class="control-group">
        <label for="ai-selector" class="sr-only">${escapeHtml(t.aiLabel)}</label>
        <select id="ai-selector">
          <option value="neon" ${currentAIStyle === 'neon' ? 'selected' : ''}>Neon-Bot</option>
          <option value="zen" ${currentAIStyle === 'zen' ? 'selected' : ''}>Zen-AI</option>
          <option value="sarcastic" ${currentAIStyle === 'sarcastic' ? 'selected' : ''}>Sarcastic-OS</option>
        </select>
      </div>
    </div>

    <div class="glass-panel" style="margin-bottom: 1.5rem;">
      <h1 style="text-align:center; color: var(--primary); font-size:2.5rem;">${escapeHtml(t.dashboardTitle)}</h1>
      <div class="stats-header">
        <div class="stat-box">
          <h2>${globalStats.netWpm}</h2>
          <p>${escapeHtml(t.avgWpm)}</p>
        </div>
        <div class="stat-box">
          <h2>${globalStats.accuracy}%</h2>
          <p>${escapeHtml(t.accuracy)}</p>
        </div>
        <div class="stat-box">
          <h2>${globalStats.maxCombo}🔥</h2>
          <p>${escapeHtml(t.maxCombo)}</p>
        </div>
      </div>
      ${problemKeysHTML}
      <div style="margin-top:1.5rem; display:flex; justify-content:center;">
        <button class="btn-primary" id="free-mode-btn" type="button">${escapeHtml(t.freeMode)}</button>
      </div>
    </div>
    <h2>${escapeHtml(t.curriculum)}</h2>
    <div class="sessions-grid">
      ${sessionsHTML}
    </div>
  `;

  document.getElementById('lang-selector')?.addEventListener('change', event => {
    changeLanguage(event.target.value);
  });
  document.getElementById('ai-selector')?.addEventListener('change', event => {
    changeAIStyle(event.target.value);
  });
  bindClick('free-mode-btn', openFreeMode);
  document.querySelectorAll('.session-card.unlocked').forEach(card => {
    card.addEventListener('click', () => startSession(Number(card.dataset.sessionId)));
  });
  setMascotState('idle', getRandomMsg('idle'));
}

window.openFreeMode = () => {
  const t = TRANSLATIONS[currentLanguage];
  const app = document.querySelector('#app');
  app.innerHTML = `
    <div class="stats-header" style="max-width: 600px; margin: 2rem auto;">
      <h2 style="color:var(--primary); margin-bottom:1rem;">${escapeHtml(t.freeMode)}</h2>
      <label for="free-text-input" class="sr-only">${escapeHtml(t.pasteText)}</label>
      <textarea id="free-text-input" class="card free-text-input" placeholder="${escapeHtml(t.pasteText)}"></textarea>
      <div style="display:flex; gap:1rem; margin-top:1rem;">
        <button class="btn-primary" id="start-free-btn" type="button">${escapeHtml(t.startFree)}</button>
        <button class="btn-secondary" id="free-abort-btn" type="button">${escapeHtml(t.abort)}</button>
      </div>
    </div>
  `;

  bindClick('start-free-btn', startFreeMode);
  bindClick('free-abort-btn', goHome);
  document.getElementById('free-text-input')?.focus();
};

window.startFreeMode = () => {
  const text = normalizeText(document.getElementById('free-text-input').value.trim());
  if (!text) return;
  stopActiveSession();
  currentSession = { id: 0, title: 'Free Mode', text: text };
  currentText = text;
  resetPracticeState();
  renderPractice();
  document.addEventListener('keydown', handleTyping);
  setMascotState('typing', getRandomMsg('idle'));
};

window.startSession = (id) => {
  stopActiveSession();

  if (id === 0) {
    currentSession = { id: 0, title: 'Free Mode', text: currentText };
  } else {
    const sessions = ALL_SESSIONS[currentLanguage];
    currentSession = sessions.find(s => s.id === id);
    currentText = normalizeText(currentSession.text);
  }
  resetPracticeState();
  renderPractice();
  document.addEventListener('keydown', handleTyping);
  setMascotState('typing', getRandomMsg('idle'));
};

function renderPractice(shakeError = false, showCombo = false) {
  const app = document.querySelector('#app');
  
  let textHTML = '';
  for(let i=0; i<currentText.length; i++) {
    let charClass = 'char';
    if (i < typedText.length) {
      charClass += currentText[i] === typedText[i] ? ' correct' : ' incorrect';
    } else if (i === typedText.length) {
      charClass += ' current';
    }
    textHTML += `<span class="${charClass}">${escapeHtml(currentText[i])}</span>`;
  }

  let elapsed = startTime ? (Date.now() - startTime) / 60000 : 0;
  let words = typedText.length / 5;
  let rawWpm = elapsed > 0 ? Math.round(words / elapsed) : 0;
  let netWpm = elapsed > 0 ? Math.round(Math.max(0, (typedText.length - errors)/5) / elapsed) : 0;
  let acc = typedText.length > 0 ? Math.round(((typedText.length - errors) / typedText.length) * 100) : 100;
  
  let comboHtml = '';
  if (showCombo && currentCombo > 0 && currentCombo % 10 === 0) {
    comboHtml = `<div class="combo-indicator">🔥 ${currentCombo} COMBO!</div>`;
  }

  const t = TRANSLATIONS[currentLanguage];
  let elapsedSecs = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;
  let minutes = Math.floor(elapsedSecs / 60);
  let seconds = elapsedSecs % 60;
  let timeStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  app.innerHTML = `
    <div class="typing-header" style="margin-bottom: 1rem;">
      <button class="btn-secondary" id="practice-abort-btn" type="button">${escapeHtml(t.abort)}</button>
      <div style="display:flex; gap:2rem; align-items:center;">
        <div style="font-family:var(--font-mono); font-size:1.5rem; color:var(--on-surface-variant);">${timeStr}</div>
        <div style="text-align:right;">
          <div style="font-family:var(--font-mono); font-size:1.2rem; color:var(--primary);">Net WPM: ${netWpm}</div>
          <div style="font-family:var(--font-mono); font-size:0.9rem; color:var(--on-surface-variant);">Raw: ${rawWpm}</div>
        </div>
        <div style="font-family:var(--font-mono); font-size:1.5rem; color:var(--primary);">ACC: ${acc}%</div>
        <div style="font-family:var(--font-mono); font-size:1.5rem; color:#ffb74d;">${currentCombo}🔥</div>
      </div>
    </div>
    <div class="text-display ${shakeError ? 'shake' : ''}" style="margin-bottom: 1.5rem; padding: 1.5rem;">
      ${comboHtml}
      ${textHTML}
    </div>
    ${renderKeyboard()}
  `;

  if (typedText.length < currentText.length) {
    const charCode = getKeyboardDataKey(currentText[typedText.length]);
    const keyEl = document.querySelector(`.key[data-key="${charCode.replace(/"/g, '&quot;')}"]`);
    if (keyEl) keyEl.classList.add('active');
  }

  bindClick('practice-abort-btn', goHome);
}

function renderKeyboard() {
  const rows = KEYBOARD_LAYOUTS[currentLanguage] || KEYBOARD_LAYOUTS.es;
  let html = `<div class="keyboard">`;
  rows.forEach((row, index) => {
    html += `<div class="row row-${index + 1}">`;
    row.forEach(key => {
      let dataKey = key === 'SPACE' ? 'space' : key.toLowerCase();
      html += `<div class="key" data-key="${escapeHtml(dataKey)}">${escapeHtml(key)}</div>`;
    });
    html += `</div>`;
  });
  html += `</div>`;
  return html;
}

function handleTyping(e) {
  if (e.isComposing || IGNORED_TYPING_KEYS.has(e.key) || e.key.length !== 1) return;
  if (!startTime) {
    startTime = Date.now();
    setMascotState('typing', getRandomMsg('idle'));
    timerInterval = setInterval(() => {
      renderPractice();
    }, 1000);
  }
  
  e.preventDefault();

  const expectedChar = currentText[typedText.length];
  let isError = false;
  let showComboPopup = false;

  const typedChar = normalizeText(e.key);

  if (typedChar !== expectedChar) {
    errors++;
    isError = true;
    currentCombo = 0;
    
    // Track missed key
    const missedChar = expectedChar.toLowerCase();
    sessionMissedKeys[missedChar] = (sessionMissedKeys[missedChar] || 0) + 1;
    missedKeysGlobal[missedChar] = (missedKeysGlobal[missedChar] || 0) + 1;

    // Mascot reaction error
    setMascotState('error', getRandomMsg('error'));
  } else {
    currentCombo++;
    if (currentCombo > sessionMaxCombo) sessionMaxCombo = currentCombo;
    if (currentCombo > globalStats.maxCombo) globalStats.maxCombo = currentCombo;
    
    if (currentCombo === 1) {
      setMascotState('typing'); // reset to typing from error
    }

    if (currentCombo > 0 && currentCombo % 10 === 0) {
      showComboPopup = true;
      setMascotState('fire', getRandomMsg('fire'));
    } else if (currentCombo > 0 && currentCombo % 5 === 0 && currentCombo < 10) {
      setMascotState('typing', getRandomMsg('typing'));
    }
  }

  typedText += typedChar;
  renderPractice(isError, showComboPopup);

  if (typedText.length === currentText.length) {
    clearInterval(timerInterval);
    timerInterval = null;
    document.removeEventListener('keydown', handleTyping);
    resultsTimeout = setTimeout(showResults, 800);
  }
}

function showResults() {
  clearInterval(timerInterval);
  timerInterval = null;
  resultsTimeout = null;
  let elapsed = (Date.now() - startTime) / 60000;
  let rawWords = currentText.length / 5;
  let rawWpm = Math.round(rawWords / elapsed);
  let netWpm = Math.max(0, Math.round((rawWords - (errors/5)) / elapsed));
  let sessionAcc = Math.max(0, Math.round(((currentText.length - errors) / currentText.length) * 100));

  globalStats.totalRawWpm += rawWpm;
  globalStats.totalNetWpm += netWpm;
  globalStats.totalAccuracy += sessionAcc;
  globalStats.sessionsCompleted++;
  globalStats.wpm = Math.round(globalStats.totalRawWpm / globalStats.sessionsCompleted);
  globalStats.netWpm = Math.round(globalStats.totalNetWpm / globalStats.sessionsCompleted);
  globalStats.accuracy = Math.round(globalStats.totalAccuracy / globalStats.sessionsCompleted);

  const t = TRANSLATIONS[currentLanguage];
  
  const sessions = ALL_SESSIONS[currentLanguage];
  if (currentSession.id !== 0 && currentSession.id < sessions.length) {
    const nextSession = sessions.find(session => session.id === currentSession.id + 1);
    if (nextSession) nextSession.unlocked = true;
  }

  const sortedSessionProblems = Object.entries(sessionMissedKeys)
    .sort((a,b) => b[1] - a[1])
    .slice(0, 3);
  
  let problemKeysHTML = '';
  if (sortedSessionProblems.length > 0) {
    problemKeysHTML = `
      <div style="margin-top:2rem;">
        <h3 style="color:var(--on-surface-variant);">${escapeHtml(t.sessionProblemKeys)}</h3>
        <div class="problem-keys-container">
          ${sortedSessionProblems.map(([k, count]) => `<div class="problem-key-badge">${escapeHtml(k === ' ' ? 'SPACE' : k.toUpperCase())} (${count})</div>`).join('')}
        </div>
      </div>
    `;
  }

  const app = document.querySelector('#app');
  app.innerHTML = `
    <div class="glass-panel" style="text-align:center;">
      <h1 style="color:var(--primary); font-size:3.5rem; margin-bottom: 2rem;">${escapeHtml(t.sessionComplete)}</h1>
      <div class="stats-header" style="justify-content:center;">
        <div class="stat-box">
          <h2 style="font-size:4.5rem;">${netWpm}</h2>
          <p>${escapeHtml(t.avgWpm)}</p>
        </div>
        <div class="stat-box">
          <h2 style="font-size:4.5rem;">${sessionAcc}%</h2>
          <p>${escapeHtml(t.accuracy)}</p>
        </div>
        <div class="stat-box error-box">
          <h2 style="font-size:4.5rem;">${errors}</h2>
          <p>${escapeHtml(t.errors)}</p>
        </div>
      </div>
      
      <div class="stats-header" style="justify-content:center; margin-top:2rem;">
        <div class="stat-box" style="flex:0; min-width: 150px;">
          <h2 style="font-size:2.5rem; color:var(--on-surface-variant); text-shadow:none;">${rawWpm}</h2>
          <p>${escapeHtml(t.rawWpm)}</p>
        </div>
        <div class="stat-box" style="flex:0; min-width: 150px;">
          <h2 style="font-size:2.5rem; color:#ffb74d; text-shadow:0 0 12px rgba(255,183,77,0.4);">🔥 ${sessionMaxCombo}</h2>
          <p>${escapeHtml(t.maxCombo)}</p>
        </div>
      </div>

      ${problemKeysHTML}

      <div style="margin-top: 3rem; display:flex; gap:1rem; justify-content:center;">
        <button class="btn-secondary" id="retry-session-btn" type="button">${escapeHtml(t.retry)}</button>
        <button class="btn-primary" id="results-dashboard-btn" type="button">${escapeHtml(t.dashboard)}</button>
      </div>
    </div>
  `;

  bindClick('retry-session-btn', () => startSession(currentSession.id));
  bindClick('results-dashboard-btn', goHome);

  if (sessionAcc >= 90) {
    setMascotState('idle', getRandomMsg('finishGood'));
  } else {
    setMascotState('idle', getRandomMsg('finishBad'));
  }
}

window.goHome = () => {
  stopActiveSession();
  currentSession = null;
  renderDashboard();
};

renderDashboard();
