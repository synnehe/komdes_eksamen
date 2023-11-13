import { useState } from "react";
import Header from "./Header";

export default function BloodDonation(){

  const innledning = "Blod er et helt nødvendig element for alle mennesker og flere trenger påfyll av blod. Dette er det vi har blodgivning for, slik at alle som trenger ekstra blod skal kunne få det. Men vet vi hvor blodet egentlig blir av etter blodgivningen? Hvordan er reisen fra blodgivning til en at pasient som trenger det får det?"

  const [vocabVisibility, setVocabVisibility] = useState("hidden")

    const toggleVisibility = () => {
      vocabVisibility === "hidden" ? setVocabVisibility("visible") : setVocabVisibility("hidden")
    }

  const rodekorsUrl1 = "https://www.rodekors.no/gi-blod/informasjon/hvem-kan-ikke-gi-blod/"
  const rodekorsUrl2 = "https://www.rodekors.no/gi-blod/informasjon/for-under-og-etter/"
  const sykepleienUrl = "https://sykepleien.no/reportasje/2016/08/draper-av-liv"
  const rodekorsUrl3 = "https://www.rodekors.no/gi-blod/informasjon/om-blod/"

  return(
    <body id="blood-donation-body">
    <Header innledning={innledning} tittel="Hvor blir det av blodet?" bgImg="blood-donation-header"/>
    <button id="vocab-btn" onClick={() => toggleVisibility()}>Begrep</button>
    <aside id="vocab" className={vocabVisibility}>
      <h3>Begreper</h3>
      <button onClick={() => toggleVisibility()}>Lukk</button>
      <ul>
        <li>
        Røde blodceller: Frakter oksygen fra lungene og rundt i kroppen. Disse blir hele tiden dannet i beinmargen
        </li>
        <li>
        Blodplater: Celler som reparerer skader og stopper blødninger i åreveggen
        </li>
        <li>
        Hvite blodceller: Er en del av immunforsvaret vårt og transporterer gjennom blodbanen til steder med infeksjon eller skade
        </li>
        <li>
        Plasma: Er en gul væske som består av 90% vann som blodcellene flyter i. Væsken frakter blant annet næringsstoffer, avfallsstoffer, hormoner og salter.
        </li>
      </ul>
    </aside>
    <section id="blood-section">
      <section className="paragraph">
        <p>
          ...
        </p>
      </section>
      <section className="paragraph">
        <p>
        Blodgivningen i Norge foregår på ulike blodbanker, både på sykehusene, men også i egne bygg utenfor. I Østfold er disse 
        blodbankene i Fredrikstad, Sarpsborg, Moss, Indre Østfold og Halden og alle disse sender blod til Sykehuset i Østfold, på Kalnes. 
        </p>
      </section>
      <section className="paragraph">
        <h3>Før blodgivningen</h3>
        <p>
        Før blodgivningen er det en nøye vurdering av hver giver før blodet kan tappes. Dette er for å sjekke at blodet er bra nok for 
        å kunne brukes av andre. Dermed må et spørreskjema fylles ut hver gang før man gir blod, i tillegg til å gjennomføre et lite 
        intervju. Første gang man skal gi blod må man ifølge <a href={rodekorsUrl1} target="_blank" rel="noreferrer">Røde Kors</a> også 
        vise legitimasjon, ta blodprøver og kontrollere puls og blodtrykk.
        </p>
        <p>
        Det er også flere krav som må oppfylles før man kan gi blod. Røde Kors forteller at man blant annet må være mellom 18-65 år, 
        være generelt frisk, veie over 50 kg, ikke være gravid, ikke ha åpne sår, ikke ha oppholdt seg i visse land i løpet de siste 
        seks månedene. 
        </p>
      </section>
      <section className="paragraph">
        <h3>Hvordan foregår blodgivning</h3>
        <p>
        Selve blodgivningen varer rundt 30 minutter, som inkluderer transfusjon og hvile i etterkant. Blodposen, som blodet skal
         tappes inn i, merkes tydelig ut fra legitimasjonen til giveren. Det vil være et stikk i armen og det tappes 450 ml blod 
         som ifølge <a href={rodekorsUrl2} target="_blank" rel="noreferrer">Røde Kors</a> tilsvarer 10-12 prosent av blodet i kroppen.
        </p>
        <p>
        Etter blodgivningen må man hvile i 10-15 minutter og blodet vil bygge seg opp igjen etter noen timer. Man får tilbud om 
        jern-tabletter om man føler seg ekstra slapp etter blodgivningen, eller om man har et lavere jernlager. Som blodgiver kan 
        man gi blod hver tredje til fjerde måned, og man må føle seg frisk og opplagt den dagen man skal gi blod. Blodbanken 
        kontakter deg når du kan gi blod igjen. 
        </p>
      </section>
      <section className="paragraph">
        <h3>Virustesting av blodet</h3>
        <p>
        Ved hver blodgivning vil det tas smitteprøver for virus av blodet for å undersøke om det er en risiko for smitteoverføring 
        av infeksjoner. 
        </p>
        <p>
        Etter et intervju med en ansatt hos Blodbanken i Fredrikstad blir det forklart at det tar det rundt et døgn på å få svar 
        på disse virustestene og mens de testes ligger blodet i et karantenelager hos blodbanken. Dersom virustestene blir godkjente 
        overføres de til et annet lager som inneholder blod klart for sending til Sykehuset i Østfold. 
        </p>
      </section>
      <section className="paragraph">
        <h3>Sendingen av blodet</h3>
        <p>
        Blodbanken i Fredrikstad forteller videre at blodet fraktes til sykehuset to ganger om dagen og dette skjer ved bruk av 
        sykehusets egne biler for frakting av blodet.  
        </p>
      </section>
      <section className="paragraph">
        <h3>Hvile</h3>
        <p>
        Når blodet ankommer sykehuset tar de imot blodet før det må hvile i en time på et lager før det behandles videre.
        </p>
      </section>
      <section className="paragraph">
        <h3>Sentrifugering</h3>
        <p>
        Videre skal blodet bli sentrifugert. Dette foregår ved at blodposen legges oppi en sentrifuge som snurrer og skiller 
        væskene fra hverandre. En artikkel fra <a href={sykepleienUrl} target="_blank" rel="noreferrer">Sykepleien.no</a> forklarer 
        at blodet deles dermed opp slik at røde blodceller er tyngst og legges nederst, så blodplatene også kalt buffy coat i midten 
        og plasmaen øverst. Etter en slik prosess vil dermed ikke blodet kun være rødt, men bestå av tre farger.
        </p>
      </section>
      <section className="paragraph">
        <h3>Filtrering av blodet</h3>
        <p>
        Når posen er ferdig sentrifugert legges den inn i en seprareringsmaskin, som filtrerer plasmaen, blodplatene og de røde 
        blodcellene fra hverandre i hver sin pose. 
        </p>
        <p>
        I tillegg til dette må blodplatene og de røde blodcellene filtreres for hvite blodceller, ettersom disse 
        ifølge <a href={rodekorsUrl3} target="_blank" rel="noreferrer">Røde Kors</a> kan bære på virus som kan skade mottakeren av blodet. 
        </p>
      </section>
      <section className="paragraph">
        <h3>Lagring</h3>
        <p>
        Disse posene kan nå oppbevares på best måte for de ulike væskene. <a href={sykepleienUrl} target="_blank" rel="noreferrer">Sykepleien.no</a> skriver 
        at blodplatene lagres i klimarom som har romtemperatur på 22-24 grader, de røde blodcellene skal ha det kjølig og legges 
        dermed inn i kjøleskap på 4 grader, mens plasmaen må fryses fort.
        </p>
      </section>
      <section className="paragraph">
        <h3>Hva gjøred med de ulike delene?</h3>
        <p>
        Blodbanken i Fredrikstad forteller at plasmaen sendes videre til Østerrike for videre sortering, mens blodplater og de røde 
        blodcellene er det som gis til personer som trenger det på sykehuset. Pasienter som har mistet mye blod får røde blodceller, 
        mens blodplatene gis til de som trenger flere siden de har ødelagte eller for lite, 
        sier <a href={rodekorsUrl3} target="_blank" rel="noreferrer">Røde Kors</a> i en artikkel om blodet.
        </p>
      </section>
      <section className="paragraph">
        <h3>Må ha samme blodtype</h3>
        <p>
        Før blodet kan gis til pasienter og de som trenger det, må de ha samme blodtype. 
        </p>
      </section>
      <section className="paragraph">
        <h3>Forskjellige blodtyper</h3>
        <p>
          ...
        </p>
      </section>
      <section className="paragraph">
        <h3>Hvem som får gi blod</h3>
        <p>
          ...
        </p>
      </section>
      <section className="paragraph">
        <h3>Én pose kan redde 3 liv</h3>
        <p>
          ...
        </p>
      </section>
      <section className="paragraph">
        <p>
          Avslutning...
        </p>
      </section>
      <div id="rotating-div"></div>
    </section>
    </body>
  )
}