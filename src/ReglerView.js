import React from 'react'

const ReglerView = () => {
    return (
        <div className="regler-page parent">
            <div className="item">
                <h2>Poängräkning:</h2>

                <ul>
                    <li className="first-li">Samtliga matcher:</li>
                    <li>Rätt antal mål per lag: 2 poäng</li>
                    <li>Rätt tecken (1x2): 2 poäng</li>
                    <span>6 poäng kan alltså delas ut i varje match!</span>
                </ul>

                <ul>
                    <li className="first-li">Prediction:</li>
                    <li>Rätt lag i åttondelsfinal: 2 poäng</li>
                    <li>Rätt lag i kvartsfinal: 4 poäng</li>
                    <li>Rätt lag i semifinal: 6 poäng</li>
                    <li>Rätt lag i final: 8 poäng</li>
                </ul>

                <ul>
                    <li className="first-li">Bonusfrågor:</li>
                    <li>Skyttekung: 20 poäng</li>
                    <li>Europamästare: 20 poäng</li>
                </ul>
            </div>
            <div className="item last">
                <h2>Instruktioner:</h2>
                <p>Förutsättningarna är enkla. Den som har flest poäng efter mästerskapets slut vinner! Totalvinnaren tar 60% av potten, tvåan får 30% och trean 10%.</p>
                <p>VIKTIGT! Kom ihåg att under det utslagsgivande slutspelet (från åttondelsfinalerna och framåt) så räknar vi med resultat efter ordinare tid, det vill säga inte efter förlängning eller straffar. Således kan även matcher här sluta oavgjort. Om du tippar oavgjort i en utslagsmatch måste du efter tippat resultat göra ett val i kolumnen "Vinnare oavgjort" till höger om resultatkolumnerna, vilket då är valet på vilka du tror vinner efter förlängning (eller förlängning + straffar).</p>
                <p>I kategorin "Skyttekung" så utgår vi efter UEFAs officiella räkning, vilket högst antagligen inte räknar med mål som spelare gör på straff i en straffsparksläggning. Vanliga straffar under ordinarie matchtid eller i förlängning räknas dock!</p>
                <p>Som ni möjligen har sett i exceldokumentet under "Resultat & Tabell" så kan inte tipset ta tillhanda till dom gula/röda kort som delas ut i gruppspelet, vilket kan påverka vilka lag som går vidare till åttondelsfinal, då dom 4 bästa treorna går vidare och gula/röda kort kan bli en utslagsgivande faktor där. Således kan den tråkiga situationen uppstå där du tippat helt rätt sett till det faktiska matchresultatet, men ändå inte får in rätt lag i åttondelen. Vi hoppas dock att ett futtigt kort inte ska vara utslagsgivande, känns ju lite ovärdigt!</p>

                <p>Om ni inte vill visa era tippade resultat så kan ni, så fort ni fyllt i allt, klicka på pilen vid erat blad och välja "Dölj blad". Bladet kommer då vara dolt för alla, och bara du kan välja att göra det synligt igen. När deadline har passerat kommer vi dock klicka i så att alla blad syns, och allas redigeringsrättigheter kommer även tas bort vid det skedet!</p>

                <p>Kör järnet. Håll en hetsig men god ton, så ska vi ha en alldels förträfflig månad här tillsammas!</p>
            </div>
        </div>
    )
}

export default ReglerView
