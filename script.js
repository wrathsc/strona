const events = [
  { date: "600 p.n.e.", text: "Tales, grecki filozof zauważył, że potarty suknem bursztynem przyciąga drobne i lekkie ciała." },
  { date: "70 n.e.", text: "Gaius Plinius Secundus opisał rażenie spowodowane przez rybę drętwę brunatną." },
  { date: "1269", text: "Petrus Peregrinus de Maricourt opisał swoje eksperymenty z magnetyzmem i wyodrębnił bieguny magnetyczne na obu końcach namagnesowanego pręta." },
  { date: "1600", text: "William Gilbert określił różnicę pomiędzy magnetyzmem a elektrycznością statyczną." },
  { date: "1630", text: "Nicolò Cabeo stwierdził, że ciała naelektryzowane przyciągają ciała nienaelektryzowane." },
  { date: "1663", text: "Otto von Guericke zbudował pierwsze urządzenie wytwarzające ładunki elektryczne." },
  { date: "1705", text: "Francis Hauksbee zbudował pierwszą maszynę elektrostatyczną." },
  { date: "1729", text: "Stephen Gray podzielił ciała stałe na przewodniki i izolatory." },
  { date: "1733", text: "Charles-Francois Dufay wprowadził elektryczność dodatnią i ujemną." },
  { date: "1745", text: "Pieter van Musschenbroek wynalazł butelkę lejdejską - pierwszy szklany kondensator. Podobny kondensator zbudował Von Kleist w Kamieniu Pomorskim." },
  { date: "1750", text: "John Michell przy pomocy wagi skrętnej stwierdził, że siły magnetyczne są odwrotnie proporcjonalne do kwadratu odległości." },
  { date: "1750", text: "Benjamin Franklin przy pomocy latawca wykazał elektryczny charakter chmur burzowych." },
  { date: "1752", text: "Benjamin Franklin zbudował pierwszy piorunochron." },
  { date: "1764", text: "Johannes Wilcke zbudował elektrofor, nową odmianę generatora elektrostatycznego." },
  { date: "1787", text: "Abraham Bennet udoskonalił elektroskop." },
  { date: "1785", text: "Charles de Coulomb stwierdził, że siły przyciągania elektrycznego są proporcjonalne do iloczynu obu ładunków, a odwrotnie proporcjonalne do kwadratu odległości między nimi." },
  { date: "1786", text: "Galvani odkrył kurczenie się mięśni kończyny żaby przy dotknięciu dwoma różnymi metalami połączonymi ze sobą." },
  { date: "1800", text: "Alessandro Volta zbudował pierwsze ogniwo galwaniczne." },
  { date: "1800", text: "William Nicholson i Anthony Carlisle stosując ogniwa Volty dokonali elektrolitycznego rozkładu wody, tworząc podstawy elektrochemii." },
  { date: "1802", text: "Johann Ritter skonstruował pierwsze suche ogniwo pierwowzór akumulatora." },
  { date: "1819", text: "Hans Christian Oersted stwierdził wpływ prądu elektrycznego na wychylenie igły magnetycznej." },
  { date: "1820", text: "André Marie Ampère odkrył wzajemne oddziaływanie dwóch przewodników z prądem." },
  { date: "1821", text: "Michael Faraday odkrył rotację elektromagnetyczną, wirowanie przewodu z prądem w polu magnetycznym." },
  { date: "1821", text: "Thomas Johan Seebeck odkrył zjawisko termoelektryczne." },
  { date: "1825", text: "William Sturgeon zbudował elektromagnes." },
  { date: "1827", text: "Georg Simon Ohm odkrył prawo przewodnictwa elektrycznego, znane prawem Ohma." },
  { date: "1828", text: "George Green wprowadził do elektrostatyki pojęcie potencjału i sformułował twierdzenie o rozkładzie ładunków elektrycznych." },
  { date: "1831", text: "Michael Faraday odkrył zjawisko indukcji elektromagnetycznej." },
  { date: "1832", text: "Joseph Henry odkrył zjawisko samoindukcji." },
  { date: "1832", text: "Hippolyte Pixii zbudował maszynę magnetoelektryczną wzbudzaną za pomocą magnesów trwałych." },
  { date: "1833", text: "Carl Friedrich Gauss i Wilhelm Weber zbudowali elektromagnetyczny telegraf igiełkowy." },
  { date: "1833", text: "Heinrich Friedrich Lenz stwierdził, że indukowana siła elektromotoryczna ma taki kierunek, iż płynący pod jej działaniem prąd przeciwdziała zmianie strumienia magnetycznego i regułę tę nazwano prawem przekory." },
  { date: "1834", text: "Michael Faraday sformułował dwa prawa elektrolizy." },
  { date: "1835", text: "Samuel Morse zbudował prototyp telegrafu elektrycznego." },
  { date: "1836", text: "Antoine Masson skonstruował pierwszy induktor." },
  { date: "1838", text: "Moritz Jacobi pokazał w Rosji łódź napędzaną silnikiem elektrycznym zasilanym z baterii ogniw cynkowo-miedzianych." },
  { date: "1839", text: "Aleksander Edmund Becquerel odkrył zjawisko fotoelektryczne." },
  { date: "1841", text: "Robert Bunsen zbudował nowy typ ogniwa nazwany jego nazwiskiem." },
  { date: "1841", text: "Johann Christian Poggendorff skonstruował potencjometr elektryczny." },
  { date: "1841", text: "Frederick de Moleyns zbudował żarówkę z drutem platynowym." },
  { date: "1842", text: "Sformułowane zostało prawo Joule’a-Lenza." },
  { date: "1843", text: "Charles Wheatstone zbudował mostek pomiarowy do pomiaru rezystancji." },
  { date: "1843", text: "Oświetlenie łukowe zainstalowano na Placu Zgody w Paryżu." },
  { date: "1845", text: "Gustav Kirchhoff zredagował dwa podstawowe prawa elektrotechniki zwane prawami Kirchhoff'a." },
  { date: "1845", text: "Belgijska firma „Belge d’Électricité Alliance” rozpoczęła produkcję maszyn magnetoelektrycznych." },
  { date: "1847", text: "Jako izolacji kabli zaczyna się używać gutaperki." },
  { date: "1849", text: "Zbudowano pierwszą linię telegraficzną pomiędzy Berlinem a Wiedniem." },
  { date: "1850", text: "Położono pierwszy kabel podmorski między Francją a Anglią." },
  { date: "1851", text: "Heinrich Daniel Ruhmkorff zbudował induktor wytwarzający iskry kilkudziesięciocentymetrowe." },
  { date: "1854", text: "Søren Hjorth odkrył zjawisko samowzbudzania się maszyn elektrycznych." },
  { date: "1855", text: "David Hughes zbudował telegraf synchroniczny pracujący z szybkością 90 znaków na minutę." },
  { date: "1858", text: "Frederick Hale Holmes uruchomił w South Foreland latarnię morską z oświetleniem elektrycznym." },
  { date: "1858", text: "Ułożono telegraficzny kabel po dnie Atlantyku między Irlandią i Nową Fundlandią." },
  { date: "1859", text: "Gaston Plante zbudował akumulator ołowiowy." },
  { date: "1860", text: "Antonio Pacinotti skonstruował uzwojenie pierścieniowe w maszynach elektrycznych." },
  { date: "1860", text: "Philipp Reis zbudował telefon magnetyczny." },
  { date: "1865", text: "James Clerk Maxwell opracował teorię pola elektromagnetycznego." },
  { date: "1866", text: "Werner von Siemens zbudował maszynę samowzbudną prądu stałego." },
  { date: "1866", text: "Georges Leclanche wynalazł suchą baterię." },
  { date: "1871", text: "Zenobe Gramme zbudował maszynę samowzbudną prądu stałego wyposażoną w elektromagnesy i komutator." },
  { date: "1871", text: "Powstaje w Anglii pierwsze stowarzyszenie elektryków - Society of Telegraph Engineers." },
  { date: "1872", text: "Hefner Alteneck skonstruował uzwojenie bębnowe maszyn elektrycznych." },
  { date: "1873", text: "James Maxwell opublikował Traktat o elektryczności i magnetyzmie." },
  { date: "1874", text: "Karl Ferdinand Braun zbudował z kryształku galeny cynkowej diodę ostrzową i odkrył jednokierunkowe przewodnictwo prądu." },
  { date: "1875", text: "Paweł Jabłoczkow udoskonalił lampę łukową, którą nazwano świecą Jabłoczkowa." },
  { date: "1875", text: "M. Deprez i A. D’Arsonval zbudowali galwanometr magnetoelektryczny." },
  { date: "1876", text: "Alexander Bell wynalazł telefon." },
  { date: "1878", text: "Henry Rumming zbudował mikrofon węglowy." },
  { date: "1878", text: "Uruchomiono pierwszą ręczną centrale telefoniczną w New Haven w USA." },
  { date: "1879", text: "Joseph Swann i Thomas Edison niezależnie od siebie wynaleźli żarówkę." },
  { date: "1879", text: "Edwin Hall odkrył zjawisko powstawania poprzecznego pola elektrycznego w przewodniku znajdującym się w polu magnetycznym." },
  { date: "1879", text: "Werner von Siemens zbudował w Berlinie pierwszą kolej z lokomotywą elektryczną." },
  { date: "1880", text: "Adalbert Waltenhofen odkrył powstawanie prądów wirowych." },
  { date: "1880", text: "Pierre Curie odkrył zjawisko piezoelektryczności." },
  { date: "1881", text: "W Paryżu ustalono jednostki i terminologię elektryczną." },
  { date: "1881", text: "Thomas Edison zbudował elektrolityczny licznik energii elektrycznej." },
  { date: "1881", text: "Werner Siemens uruchomił w Berlinie pierwszy tramwaj elektryczny." },
  { date: "1882", text: "Lucien Gaulard i John Gibbs zbudowali pierwszy transformator." },
  { date: "1882", text: "Pierwszy przesył energii elektrycznej prądu stałego o napięciu 2 kV z Miesbach do Monachium." },
  { date: "1882", text: "W górnictwie zastosowano pierwszą dołową lokomotywę elektryczną w kopalni węgla Hohenzollern Szombierki koło Bytomia." },
  { date: "1883", text: "Gisbert Kapp opracował teoretyczne podstawy projektowania maszyn elektrycznych." },
  { date: "1885", text: "Węgierska firma Ganz wprowadziła nazwę 'transformator'." },
  { date: "1885", text: "Elihu Thomson opracował uzwojone bieguny komutacyjne w maszynach elektrycznych." },
  { date: "1886", text: "Zbudowano w Szwajcarii pierwszą jednofazową linię przesyłową o napięciu 1250 V." },
  { date: "1886", text: "Firma Siemens wykonała oświetlenie elektryczne w Watykanie." },
  { date: "1887", text: "Heinrich Hertz dowiódł istnienia fal elektromagnetycznych." },
  { date: "1887", text: "Nikola Tesla zbudował dwufazowy silnik indukcyjny. Postulował zastąpienie stosowanego wcześniej systemu prądu stałego systemem prądu przemiennego." },
  { date: "1888", text: "Galileo Ferraris i Nikola Tesla opracowali wielofazowe wirujące pole magnetyczne dla indukcyjnych maszyn elektrycznych." },
  { date: "1888", text: "Elihu Thomson wykorzystał łuk elektryczny do prac spawalniczych." },
  { date: "1889", text: "Skonstruowano wybierak biegowy dla central telefonicznych." },
  { date: "1889", text: "Dolivo-Dobrowolski zbudował trójfazowy silnik asynchroniczny z wirnikiem klatkowym." },
  { date: "1891", text: "George Stoney wprowadził nazwę elektron dla elementarnej cząstki atomu o elektrycznym ładunku ujemnym." },
  { date: "1891", text: "Oskar von Miller wybudował napowietrzną linię przesyłu prądu trójfazowego o długości 176 km i napięciu 20 kV z Lauffen do Frankfurtu nad Menem." },
  { date: "1891", text: "Nikola Tesla zbudował transformator wielkiej częstotliwości nazwany generatorem Tesli." },
  { date: "1891", text: "W USA przyjęto częstotliwość 60 Hz jako standardową." },
  { date: "1892", text: "Almon Strowger uruchomił w Ameryce pierwszą automatyczną centralę telefoniczną." },
  { date: "1892", text: "Olivier Lodge skonstruował koherer - detektor wielkiej częstotliwości." },
  { date: "1892", text: "Charles Proteus Steinmetz odkrył zjawisko histerezy magnetycznej oraz opracował metodę symboliczną obliczania obwodów elektrycznych." },
  { date: "1893", text: "Edward Weston zbudował ogniwo nazwane jego nazwiskiem." },
  { date: "1894", text: "Guglielmo Marconi ulepszył konstrukcję koherera i przesłał sygnały radiowe na odległość 10 km." },
  { date: "1895", text: "Wybudowano elektrownię wodną na wodospadzie Niagara oraz linię przesyłową do Buffalo." },
  { date: "1895", text: "W Niemczech wydano pierwsze przepisy budowy urządzeń elektrycznych." },
  { date: "1896", text: "Martin Arons zbudował pierwszą lampę rtęciową." },
  { date: "1897", text: "Carl Braun zbudował prototyp lampy oscyloskopowej." },
  { date: "1897", text: "Walter Nernst skonstruował lampę oświetleniową z żarnikiem wykonanym jako ceramika z tlenków pierwiastków ziem rzadkich." },
  { date: "1898", text: "Oliver Lodge zbudował głośnik magnetodynamiczny." },
  { date: "1899", text: "Guglielmo Marconi uzyskał łączność radiową między Anglią i Francją." },
  { date: "1899", text: "W hutach i kopalniach niemieckich do zasilania wprowadzono napięcie 3-fazowe 500V." },
  { date: "1900", text: "Reginald Fessenden przeprowadził pierwszą transmisję mowy ludzkiej na fali ciągłej z modulacją amplitudy." },
  { date: "1901", text: "Guglielmo Marconi przesłał sygnał radiowy przez Atlantyk." },
  { date: "1901", text: "Karl Ilgner rozbudował układ Leonarda wykorzystując koło zamachowe dla łagodzenia udarów obciążenia." },
  { date: "1903", text: "Emil Reichel w Berlinie zbudował lokomotywę elektryczną poruszającą się z prędkością 210 km/h." },
  { date: "1903", text: "Willem Einthoven zbudował pierwszy elektrokardiograf." },
  { date: "1904", text: "Wynalezienie lampy elektronowej przez Johna Fleminga i zastosowanie jej w prostownikach prądu." },
  { date: "1904", text: "Thomas Edison zbudował akumulator zasadowy niklowo-żelazowy." },
  { date: "1906", text: "Lee de Foresta zbudował pierwszą lampę elektronową z siatką sterowniczą tzw. trioda." },
  { date: "1906", text: "Henry Dunwoody i Greenleaf Pickard zbudowali detektor kryształkowy dla radiotechniki." },
  { date: "1909", text: "Georges Claude zbudował we Francji lampę neonową." },
  { date: "1910", text: "Charles i Howard Krum zbudowali w USA dalekopis z klawiaturą maszyny do pisania." },
  { date: "1911", text: "Heike Onnes odkrył zjawisko nadprzewodnictwa." },
  { date: "1911", text: "Pierwsza napowietrzna linia przemysłowa 110 kV na trasie Lauchhammer-Riesa." },
  { date: "1912", text: "Edwin Armstrong zbudował generator lampowy ze sprzężeniem zwrotnym." },
  { date: "1913", text: "Georg Graf von Arco i Alexander Meissner jako pierwsi opracowali technikę odbioru superheterodynowego." },
  { date: "1916", text: "Martin Höchstädter opracował konstrukcję ekranowanych kabli wysokiego napięcia." },
  { date: "1919", text: "Walter Schottky wynalazł tetrodę - pierwszą wielosiatkową lampę wzmacniającą." },
  { date: "1921", text: "W transformatorach olejowych zastosowano zabezpieczenie gazowo-przepływowe typu Buchholz." },
  { date: "1922", text: "Pierwsze konstrukcje oscyloskopu katodowego." },
  { date: "1922", text: "Vladimir Zworykin zbudował pierwszą elektronową lampę analizującą obraz zwaną kinoskop." },
  { date: "1923", text: "Vladimir Zworykin zbudował pierwszą elektronową lampę analizującą obraz zwaną ikonoskop, a w 1924 roku lampę obrazową zwaną kineskop." },
  { date: "1925", text: "Wprowadzono zerowanie jako ochronę przeciwporażeniową." },
  { date: "1926", text: "Bernard Tellegen zbudował pierwszą pentodę." },
  { date: "1928", text: "Fritz Pfleumer wynalazł taśmę magnetyczną do zapisu dźwięku." },
  { date: "1929", text: "Pojawiają się elektronowe lampy tyratrony wypełnione gazem i sterowaną siatką." },
  { date: "1929", text: "Zbudowano akcelerator wysokiego napięcia zwany generatorem Van de Graffa." },
  { date: "1930", text: "Edwin Howard Armstrong opracował ideę nowego systemu radiowego z modulacją częstotliwości." },
  { date: "1931", text: "Pierre Rijlant skonstruował pierwszy elektrokardiogram monitorujący pracę serca." },
  { date: "1932", text: "W firmie Philips zbudowano niskociśnieniowe lampy sodowe." },
  { date: "1943", text: "Powstała w Ameryce pierwsza maszyna cyfrowa ENIAC." },
  { date: "1947", text: "Zbudowano pierwszy germanowy tranzystor ostrzowy." },
  { date: "1952", text: "Zbudowano tranzystor polowy." },
  { date: "1953", text: "W Niemczech wydano polecenie rozdzielenia w sieciach niskiego napięcia przewodu zerowego na przewód ochronny oraz przewód środkowy zwany też neutralnym." },
  { date: "1954", text: "Uruchomiono produkcję opracowanych tranzystorów krzemowych." },
  { date: "1954", text: "Wybudowano pierwszą elektrownię atomową w Obnińsku koło Moskwy." },
  { date: "1956", text: "Rozpoczyna się rozwój techniki tyrystorowej." },
  { date: "1957", text: "Niemcy, Włochy - oddanie do eksploatacji pierwszych linii przemysłowych 380 kV." },
  { date: "1958", text: "Jack Kilby z Texas Instruments zbudował pierwszy krzemowy układ scalony." },
  { date: "1958", text: "Leo Esaki skonstruował diodę tunelową." },
  { date: "1962", text: "Amerykanin Nick Holonyak skonstruował diodę świecącą." },
  { date: "1967", text: "Jack Kilby z Texas Instruments zbudował pierwszy przenośny kalkulator." },
  { date: "1967", text: "ZSRR, USA, Kanada - oddawanie do eksploatacji pierwszych linii przemysłowych o napięciu 765 kV." },
  { date: "1969", text: "Powstaje pierwszy Internet w Los Angeles." },
  { date: "1971", text: "Firma Intel zaprezentowała pierwszy układ mikroprocesorowy." },
  { date: "1974", text: "Joseph Lindmayer zbudował krzemową baterię słoneczną." },
  { date: "1981", text: "Pojawienie się pierwszego komputera typu laptop." },
  { date: "1991", text: "Powstaje telewizja wysokiej rozdzielczości HDTV." },
  { date: "1996", text: "Początki rozwoju elektroniki molekularnej." },
  { date: "2008", text: "Produkcja samochodu elektrycznego Tesla Roadster z zasięgiem blisko 400 km." }
];

document.addEventListener('DOMContentLoaded', () => {
  
  const fotoElements = document.querySelectorAll('.foto');

  fetch('biblioteki/foto.json')
    .then(res => res.json())
    .then(data => {
      fotoElements.forEach(el => {
        const key = el.dataset.key;
        const foto = data[key];
        if (!foto) return;

        // Tworzymy blok z klasą .foto-block
        const block = document.createElement('div');
        block.className = 'foto-block';

        block.innerHTML = `
          <img src="${foto.src}" alt="${foto.caption}" loading="lazy">
          <figcaption>
            <p class="img-caption">${foto.caption}</p>
            <p class="img-source">
              <a href="${foto.source}" target="_blank" rel="noopener noreferrer">Źródło</a>
            </p>
          </figcaption>
        `;

        el.appendChild(block);
      });
    })
    .catch(err => console.error("Błąd wczytywania JSON:", err));
});

  // ===============================
  // TIMELINE
  // ===============================
  const timeline = document.getElementById("timeline");
  if (timeline && Array.isArray(events)) {
    timeline.innerHTML = "";
    events.forEach((event, index) => {
      const el = document.createElement("div");
      el.className = "event";
      el.style.marginTop = index % 2 === 0 ? "0px" : "40px";
      el.innerHTML = `<span class="date">${event.date}</span><p>${event.text}</p>`;
      timeline.appendChild(el);
    });

    function revealEvents() {
      document.querySelectorAll(".event").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 60) {
          el.classList.add("visible");
        }
      });
    }

    revealEvents();
    window.addEventListener("scroll", revealEvents, { passive: true });
  }

  // ===============================
  // CANVAS – TŁO ELEKTRONÓW
  // ===============================
  const canvas = document.getElementById("bg-electrons");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0;

    function resizeCanvas() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const dots = [];
    function createDots() {
      dots.length = 0;
      const count = Math.min(500, Math.floor((w * h) / 15000));
      for (let i = 0; i < count; i++) {
        dots.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6 });
      }
    }
    createDots();
    window.addEventListener("resize", createDots);

    const mouse = { x: null, y: null, radius: 150 };
    window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener("mouseleave", () => { mouse.x = mouse.y = null; });

    const lightnings = [];
    function createLightning(x, y) {
      const path = []; let cx = x, cy = y, angle = -Math.PI / 2;
      for (let i = 0; i < 12; i++) {
        angle += (Math.random() - 0.5) * 0.6;
        const len = 15 + Math.random() * 10;
        cx += Math.cos(angle) * len;
        cy += Math.sin(angle) * len;
        path.push({ x: cx, y: cy });
        if (Math.random() < 0.2) {
          const ba = angle + (Math.random() - 0.5) * 1.2;
          path.push({ x: cx + Math.cos(ba) * 15, y: cy + Math.sin(ba) * 15 });
        }
      }
      return path;
    }
    window.addEventListener("click", e => lightnings.push({ path: createLightning(e.clientX, e.clientY), life: 10 }));

    function animate() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        if (mouse.x !== null) {
          const dx = d.x - mouse.x, dy = d.y - mouse.y, dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) { const f = (mouse.radius - dist) / mouse.radius; d.x += dx * f * 0.03; d.y += dy * f * 0.03; }
        }
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = w; if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h; if (d.y > h) d.y = 0;

        ctx.beginPath(); ctx.arc(d.x, d.y, 1.6, 0, Math.PI * 2); ctx.fillStyle = "rgba(120,180,255,0.8)"; ctx.fill();
        for (let j = i + 1; j < dots.length; j++) {
          const d2 = dots[j], dist = Math.hypot(d.x - d2.x, d.y - d2.y);
          if (dist < 120) { ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d2.x, d2.y); ctx.strokeStyle = `rgba(120,180,255,${1 - dist / 120})`; ctx.lineWidth = 0.6; ctx.stroke(); }
        }
      }

      for (let i = lightnings.length - 1; i >= 0; i--) {
        const l = lightnings[i];
        ctx.beginPath(); ctx.moveTo(l.path[0].x, l.path[0].y);
        for (let p = 1; p < l.path.length; p++) ctx.lineTo(l.path[p].x, l.path[p].y);
        ctx.strokeStyle = "rgba(180,220,255,0.9)"; ctx.lineWidth = 1.2; ctx.shadowBlur = 15; ctx.shadowColor = "rgba(180,220,255,0.8)"; ctx.stroke();
        l.life--; if (l.life <= 0) lightnings.splice(i, 1);
      }

      requestAnimationFrame(animate);
    }
    animate();
  }

  // ===============================
  // PROGRESS BAR + HISTORIA
  // ===============================
  const progressBar = document.getElementById("readingProgress");
  const sections = [...document.querySelectorAll(".tekst-historia h2")];
  const sidebarLinks = [...document.querySelectorAll(".historia-sidebar a")];

  function syncScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;

    if (progressBar) progressBar.style.width = `${(scrollTop / docHeight) * 100}%`;

    let currentSection = null;
    sections.forEach(section => { if (scrollTop >= section.offsetTop - 120) currentSection = section.id; });

    sidebarLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`));
  }

  window.addEventListener("scroll", syncScroll, { passive: true });
  syncScroll();

  // ===============================
  // JSON → POPUP / TEORIA
  // ===============================
  const pageJsonMap = { "historia-page": ["biblioteki/opis.json","biblioteki/postacie.json"], "postacie-page": ["biblioteki/postacie.json"], "teoria-page": ["biblioteki/teoria.json"] };
  let jsonUrl = null;
  Object.keys(pageJsonMap).forEach(cls => { if (document.body.classList.contains(cls)) jsonUrl = pageJsonMap[cls]; });

  let dictionary = {}, popup = null, dictionaryLoaded = false;

  if (jsonUrl) {
  Promise.all(
    jsonUrl.map(url =>
      fetch(url).then(res => res.json())
    )
  )
  .then(jsons => {
    jsons.forEach(data => {
      Object.assign(dictionary, data);
    });
    dictionaryLoaded = true;
  })
  .catch(err => console.error("Błąd wczytywania JSON:", err));
}

  document.addEventListener("click", e => {
    const popupImg = e.target.closest(".dict-popup img");
    if (popupImg) {
      e.stopPropagation();
      const overlay = document.createElement("div"); overlay.className = "img-lightbox";
      const bigImg = document.createElement("img"); bigImg.src = popupImg.src;
      overlay.appendChild(bigImg); document.body.appendChild(overlay);
      overlay.addEventListener("click", () => overlay.remove()); return;
    }

    const word = e.target.closest(".dict-word");
    if (!word || !dictionaryLoaded) return;
    e.stopPropagation();

    const entry = dictionary[word.dataset.key];
    if (!entry) return;

    if (popup) popup.remove();
    popup = document.createElement("div"); popup.className = "dict-popup";

    const closeBtn = document.createElement("span"); closeBtn.className = "close-btn"; closeBtn.textContent = "✖";
    closeBtn.addEventListener("click", () => { popup.remove(); popup = null; });
    popup.appendChild(closeBtn);

    if (entry.title || entry.name) { const title = document.createElement("strong"); title.textContent = entry.title || entry.name; popup.appendChild(title); }
    if (entry.image) { const img = document.createElement("img"); img.src = entry.image; popup.appendChild(img); }

    const text = document.createElement("div");
    let rawText = (entry.description || entry.text || entry.bio || "").replace(/[\u00A0\u2000-\u200B\u202F]/g, " ").replace(/\s+/g, " ").trim();
    ["np.", "itp.", "itd.", "dr.", "prof.", "m.in.", "tzw.", "tj.", "ok."].forEach(abbr => rawText = rawText.replaceAll(abbr, abbr.replace(".", "§")));
    const sentences = rawText.split(/(?<=[.!?])\s+/).map(s => s.replaceAll("§", "."));
    const paragraphs = []; for (let i = 0; i < sentences.length; i += 2) paragraphs.push(`<p>${sentences.slice(i, i+2).join(" ")}</p>`);
    text.innerHTML = paragraphs.join(""); text.style.marginTop = "20px"; popup.appendChild(text);

    const source = document.createElement("div"); 
    source.className = "dict-source"; 
    source.innerHTML = entry.source ? "<b>Źródło:</b> " + entry.source : ""; 
    popup.appendChild(source);

    document.body.appendChild(popup);
  });

  // ===============================
  // DYNAMICZNA TEORIA + SIDEBAR
  // ===============================
  const teoriaContainer = document.getElementById("teoria-container");
  const teoriaSidebar = document.getElementById("teoria-nav");
  const teoriaHamburger = document.querySelector(".sidebar-hamburger-teoria");

  if (
  teoriaContainer &&
  teoriaSidebar &&
  Array.isArray(jsonUrl) &&
  jsonUrl.includes("biblioteki/teoria.json"))
   {
    fetch(jsonUrl)
      .then(res => res.json())
      .then(blocks => {
  teoriaContainer.innerHTML = "";
  teoriaSidebar.innerHTML = "";

  blocks.forEach((block, index) => {
    const blockId = block.id || `teoria-${index+1}`;
    const el = document.createElement("div");
    el.className = "teoria-block";
    el.id = blockId;
    el.innerHTML = `<h2>${block.title}</h2>
                    <p>${block.description}</p>
                    <div class="video-wrapper">${
                      Array.isArray(block.video)
                        ? block.video.map(v => `<iframe loading="lazy" src="${v}" title="${block.title}" allowfullscreen></iframe>`).join("")
                        : `<iframe loading="lazy" src="${block.video}" title="${block.title}" allowfullscreen></iframe>`
                    }</div>`;
    teoriaContainer.appendChild(el);

    const a = document.createElement("a");
    a.href = `#${blockId}`;
    a.textContent = block.title;
    teoriaSidebar.appendChild(a);
  });

  // usuń hash (zapobiegnie automatycznemu skokowi do kotwicy)
  if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  // wymuś przewinięcie na górę po zbudowaniu bloków
  setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 60);

  document.querySelectorAll('#teoria-nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (!target) return;

      // zamknięcie sidebaru mobilnego po kliknięciu
      teoriaSidebar.classList.remove("open");

      const navHeight = document.querySelector('.nav')?.offsetHeight || 64;
      const progressHeight = document.getElementById('readingProgressContainer')?.offsetHeight || 0;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - navHeight - progressHeight - 16,
        behavior: 'smooth'
      });
    });
  });
})
      .catch(err => { teoriaContainer.innerHTML = "<p>Nie udało się wczytać materiałów edukacyjnych.</p>"; });
      
  }

  // ===============================
  // SIDEBARY / HAMBURGER MOBILNY
  // ===============================

  // Historia
  const sidebarHamburger = document.querySelector(".sidebar-hamburger");
  const historiaSidebar = document.querySelector(".historia-sidebar");

  if (sidebarHamburger && historiaSidebar) {
    sidebarHamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      historiaSidebar.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!historiaSidebar.contains(e.target) && !sidebarHamburger.contains(e.target)) {
        historiaSidebar.classList.remove("open");
      }
    });
  }

  // Teoria
  if (teoriaHamburger && teoriaSidebar) {
    teoriaHamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      teoriaSidebar.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!teoriaSidebar.contains(e.target) && !teoriaHamburger.contains(e.target)) {
        teoriaSidebar.classList.remove("open");
      }
    });
  }
const navToggle = document.getElementById('navToggle');
const telMenu = document.querySelector('.tel');

// Jeden wysoki handler na document: obsługuje kliknięcie w hamburger, klik wewnątrz .tel oraz klik poza
document.addEventListener('click', (e) => {
  const hamburgerClicked = !!e.target.closest('.hamburger');
  if (hamburgerClicked) {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = telMenu.classList.toggle('open');
    if (navToggle) navToggle.checked = isOpen;
    return;
  }

  // Jeśli menu jest otwarte i klik nastąpił poza nim — zamknij
  if (telMenu && telMenu.classList.contains('open')) {
    if (!telMenu.contains(e.target)) {
      telMenu.classList.remove('open');
      if (navToggle) navToggle.checked = false;
      return;
    }
    // Klik wewnątrz .tel na link — zamknij
    const a = e.target.closest('.tel a');
    if (a) {
      telMenu.classList.remove('open');
      if (navToggle) navToggle.checked = false;
    }
  }
  
});

