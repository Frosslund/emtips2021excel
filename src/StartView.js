
const StartView = () => {


    let myJSON = [
        {name: "Per Kivijärvi", points: 0},
        {name: "William Laahanen", points: 0},
        {name: "Johannes Karlsson", points: 0},
        {name: "Adam Laahanen", points: 0},
        {name: "Filip Lidhammar", points: 0},
        {name: "Jennifer Johansson", points: 0},
        {name: "Lukas Frösslund", points: 0},
        {name: "Albin Thurén", points: 0},
        {name: "William Magnusson", points: 0},
        {name: "Hugo Arvidsson", points: 0},
        {name: "Erik Gustafsson", points: 0},
        {name: "Robert Lidhammar", points: 0},
        {name: "Cajsa Eriksson", points: 0},
        {name: "Patric Hjorth", points: 0},
        {name: "Jacob Hjorth", points: 0},
        {name: "Andreas Eriksson", points: 0},
        {name: "Valdemar Gezelius", points: 0},
        {name: "Viktor Hansson", points: 0},
        {name: "Isabella Johannesson", points: 0},
        {name: "Pontus Lundgren", points: 0},
        {name: "Anton Wårdell", points: 0},
        {name: "Oscar Andersson", points: 0},
        {name: "David Berg", points: 0},
        {name: "Kenneth Runnman", points: 0},
        {name: "Sebastian Brånemark", points: 0},
        {name: "Ted Karlsson", points: 0},
        {name: "Linnéa Amundson", points: 0},
        {name: "Alexander Jarlenäs", points: 0},
        {name: "Andreas Schill", points: 0},
        {name: "Hedvig Fahlstedt", points: 0},
        {name: "Patricia Correia", points: 0},
        {name: "Adam de Lancey", points: 0},
        {name: "Amanda Nilsson", points: 0},
        {name: "Tor Simmons", points: 0},
        {name: "Alicia Brånemark", points: 0},
        {name: "Filip Mälberg", points: 0},
        {name: "Noel Milleskog", points: 0},
        {name: "Hanna Milleskog", points: 0},
        {name: "Jonny Frösslund", points: 0},
        {name: "Joel Fahlstedt", points: 0},
        {name: "Anna Brånemark", points: 0},
        {name: "Rickard Brånemark", points: 0}
    ]

    function compare( a, b ) {
        if ( a.points < b.points ){
          return -1;
        }
        if ( a.points > b.points ){
          return 1;
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
