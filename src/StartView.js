import myData from './scores.json';

const StartView = () => {

    let scores = myData.scores

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
                {scores.sort(compare).map((participant, index) => {
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
