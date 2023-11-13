import { useState } from "react";
import Header from "./Header";
import espresso from "../photos/espresso.jpg"
import svartKaffe from "../photos/svartKaffe.png"
import cola from "../photos/cola.jpg"
import svartTe from "../photos/svartTe.jpg"
import kakao from "../photos/kakao.jpg"
import pepsiMax from "../photos/pepsiMax.jpg"
import energidrikk from "../photos/energidrikkMonster.jpg"


export default function Caffeine(){

  const [response, setResponse] = useState(["no answer", "no answer", "no answer", "no answer", "no answer", "no answer", "no answer"])

  const drikker = [{
    navn: "espresso",
    mengde: "0.4dl",
    koffein: "107mg",
    svaralternativer: ["33mg", "107mg", "65mg"],
  },{
    navn: "svart kaffe",
    mengde: "2dl",
    koffein: "95mg",
    svaralternativer: ["55mg", "120mg", "95mg"],
  },{
    navn: "cola",
    mengde: "330 ml",
    koffein: "33mg",
    svaralternativer: ["33mg", "10mg", "52mg"],
  },{
    navn: "svart te",
    mengde: "2dl",
    koffein: "44mg",
    svaralternativer: ["10mg", "0mg", "44mg"],
  },{
    navn: "kakao",
    mengde: "2dl",
    koffein: "32mg",
    svaralternativer: ["32mg", "0mg", "60mg"],
  },{
    navn: "pepsi max",
    mengde: "5dl", 
    koffein: "50mg",
    svaralternativer: ["50mg", "80mg", "60mg"],
  },{
    navn: "energidrikk",
    mengde: "5dl",
    koffein: "160mg",
    svaralternativer: ["70mg", "110mg", "160mg"],
  }]

  const handleTestAnswer = (e, index) => {
    e.preventDefault()
    if(e.currentTarget.value === drikker[index].koffein) {
      //drikker[index].besvart = "correct"
      setResponse(...response, response[index] = "correct")
      console.log("you picked correct!")
      console.log(response)
    } else {
      //drikker[index].besvart = "wrong"
      setResponse(...response, response[index] = "wrong")
      console.log("You picked wrong")
      console.log(response)
    }
    //setToggleVisibility("hidden")
  }

  const quizBilder = [espresso, svartKaffe, cola, svartTe, kakao, pepsiMax, energidrikk]

  const innledning = "Den norske befolkningen får i seg mer koffein nå enn noen gang før. De fleste tenker kanskje at de har oversikt over sitt eget koffeinforbruk, men er du egentlig klar over hvor mange varer som faktisk inneholder koffein?"
  const fhiUrl1 = "https://www.fhi.no/le/kosthold/koffein-koffeinholdige-drikker/#hvor-mye-koffein-fr-vi-i-oss-daglig"
  const bryggeriUrl = "https://bryggeriforeningen.no/tall-og-fakta/salgsstatistikk/?PT_Radnr=5&mnd=11&aar=2022"
  const fhiUrl2 = "https://www.fhi.no/le/kosthold/koffein-koffeinholdige-drikker/#hva-er-koffein"
  const fhiUrl3 = "https://www.fhi.no/le/kosthold/koffein-koffeinholdige-drikker/#koffein-og-helseeffekter"
  const fgpUrl = "https://feelgoodpal.com/nb/blog/foods-with-caffeine/"

  return(
    <body id="caffeine-body">
    <Header bgImg="caffeine-header" innledning={innledning} tittel="Dette skjuler seg i det du drikker"/>
    <section id="main-section">
      <section className="paragraph">
        <h3>Økning i salg av energidrikk</h3>
        <p>
        De siste årene har det vært stor økning i omsetningen av energidrikk i Norge. Dette tyder på at enda flere drikker 
        energidrikk i dag og at tallet øker stadig. Det er spesielt blant unge at det er blitt mer populært å drikke energidrikk. 
        </p>
        <p>
        Dette viser en undersøkelse fra <a href={fhiUrl1} target="_blank" rel="noreferrer">Norstat</a> fra 2021, som kom fram til 
        at hele 43% i aldersgruppen 10-18 år drikker energidrikk ukentlig eller oftere. Et slikt jevnlig inntak 
        av befolkningen vil påvirke omsetningen til butikkene.
        </p>
      </section>
      <section className="paragraph">
        <h3>Hvor mye selges?</h3>
        <p>
        Ifølge statistikk fra <a href={bryggeriUrl} target="_blank" rel="noreferrer">Bryggeriforeningen</a> har det i 2019 
        vært omsatt for 41 millioner liter energidrikk i Norge, og det har bare økt. For i 2022 er omsetningen på hele 73 
        millioner liter energidrikk. Det er en total økning på 32 millioner liter på 3 år, og det er ikke en positiv økning.
        </p>
      </section>
      <section className="paragraph">
        <h3>Energidrikkens påvirkning på kroppen</h3>
        <p>
        Ved økt energidrikk forbruk, øker også inntaket av koffein. Koffein stimulerer nervesystemet 
        og <a href={fhiUrl2} target="_blank" rel="noreferrer">FHI</a> sier at for en frisk person er gjennomsnittlig virkningstid 
        på rundt 4 timer, men at noen kan kjenne effektene i 10-12 timer.
        </p>
        <p>
        Selv om koffein kan ha positive effekter, som blant annet økt prestasjon- og konsentrasjonsevner, kan jevnlig koffeininntak 
        føre til økt blodtrykk, søvnvansker og abstinenssymptomer. Energidrikker inneholder langt mer koffein enn blant annet kaffe, 
        og overdrevent inntak kan føre til avhengighet og helseproblemer.
        </p>
        <p>
        Siden antall unge som drikker energidrikk øker årlig, er dette spesielt bekymringsvekkende 
        ifølge <a href={fhiUrl3} target="_blank" rel="noreferrer">FHI</a> da barn har lavere 
        kroppsvekt og tåler mindre koffein enn voksne.
        </p>
      </section>
      <section className="paragraph">
        <h3>Visste du også at disse varene inneholder koffein?</h3>
        <p>
        Selv om man velger å kutte ned på energidrikk, kutter man ikke nødvendigvis ut all koffein. Det er flere drikkevarer enn 
        man kanskje er klar over som inneholder koffein. Den mest kjente i tillegg til energidrikk er kaffe, men ifølge 
        bloggen <a href={fgpUrl} target="_blank" rel="noreferrer">Feelgoodpal</a> inneholder produkter som cola, grønn te, kakao 
        og pepsi max også en del koffein. Til og med koffeinfri kaffe inneholder litt koffein.
        </p>
      </section>
    <section id="caffeine-test">
      <h3>Test deg på hvor mye koffein ulike produkter inneholder</h3>
    {drikker.map((drikke, index) => (
      <>
        <p>{drikke.navn} {drikke.mengde}</p>
        <img className="quiz-img" src={quizBilder[index]} alt={`"${quizBilder[index]}"`}/>
        <div className="row-div">
        {drikke.svaralternativer.map((svar) => (
        <>
        {response[index] === "no answer"? <button className="choice" value={svar} onClick={(e) => handleTestAnswer(e, index)}>{svar}</button> : 
        response[index] === "wrong" ? <p>Feil svar! {drikke} inneholder {drikke.koffein} koffein</p> :
        response[index] === "correct" ? <p>Riktig! {drikke} inneholder {drikke.koffein} koffein</p>: null}
        </>
        ))}
        </div>
      </>
    ))}
    </section>
    <section className="paragraph">
      <p>
      Et høyt koffeininntak har positive effekter for flere, men også mange negative på kroppen. Og selv om man ikke drikker 
      mye energidrikker eller kaffe, kan man likevel få i seg koffein fra diverse andre produkter.
      </p>
    </section>
    </section>
    </body>
  )
}