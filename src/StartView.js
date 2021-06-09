import Countdown from 'react-countdown';

const StartView = () => {

    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <span>0{days}:{hours}:{minutes}:{seconds}</span>;
    }
    };
    return (
        <div className="start-page">
            <h2>DEADLINE</h2>
            <Countdown
                date={'2021-06-11T21:00:00'}
                intervalDelay={0}
                precision={3}
                renderer={renderer}
            />
        </div>
    )
}

export default StartView
