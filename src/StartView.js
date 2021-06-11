
const StartView = () => {


    let myJSON = [
        {name: "Per Kivijärvi", points: 0},
        {name: "William Laahanen", points: 2},
        {name: "Johannes Karlsson", points: 2},
        {name: "Adam Laahanen", points: 2},
        {name: "Filip Lidhammar", points: 2},
        {name: "Jennifer Johansson", points: 4},
        {name: "Lukas Frösslund", points: 4},
        {name: "Albin Thurén", points: 4},
        {name: "William Magnusson", points: 2},
        {name: "Hugo Arvidsson", points: 2},
        {name: "Erik Gustafsson", points: 4},
        {name: "Robert Lidhammar", points: 2},
        {name: "Cajsa Eriksson", points: 4},
        {name: "Patric Hjorth", points: 4},
        {name: "Jacob Hjorth", points: 4},
        {name: "Andreas Eriksson", points: 4},
        {name: "Valdemar Gezelius", points: 0},
        {name: "Viktor Hansson", points: 2},
        {name: "Isabella Johannesson", points: 2},
        {name: "Pontus Lundgren", points: 2},
        {name: "Anton Wårdell", points: 4},
        {name: "Oscar Andersson", points: 2},
        {name: "David Berg", points: 4},
        {name: "Kenneth Runnman", points: 2},
        {name: "Sebastian Brånemark", points: 0},
        {name: "Ted Karlsson", points: 4},
        {name: "Linnéa Amundson", points: 0},
        {name: "Alexander Jarlenäs", points: 4},
        {name: "Andreas Schill", points: 0},
        {name: "Hedvig Fahlstedt", points: 4},
        {name: "Patricia Correia", points: 2},
        {name: "Adam de Lancey", points: 4},
        {name: "Amanda Nilsson", points: 2},
        {name: "Tor Simmons", points: 4},
        {name: "Alicia Brånemark", points: 2},
        {name: "Filip Mälberg", points: 2},
        {name: "Noel Milleskog", points: 4},
        {name: "Hanna Milleskog", points: 4},
        {name: "Jonny Frösslund", points: 2},
        {name: "Joel Fahlstedt", points: 2},
        {name: "Anna Brånemark", points: 2},
        {name: "Rickard Brånemark", points: 4}
    ]

    function compare( a, b ) {
        if ( a.points < b.points ){
          return 1;
        }
        if ( a.points > b.points ){
          return -1;
        }
        if ( a.name < b.name ){
            return -1;
          }
          if ( a.name > b.name ){
            return 1;
          }
        return 0;
      }

    return (
        <div className="start-page">
            <h2>TOPPLISTA</h2>
            <ol>
                {myJSON.sort(compare).map((participant, index) => {
                    return (
                        <li key={index}>{index+1}: {participant.name}: {participant.points} poäng</li>
                    )
                })}
            </ol>
            <span></span>
        </div>
    )
}

export default StartView
