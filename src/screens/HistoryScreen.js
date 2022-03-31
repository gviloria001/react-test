
import WeatherScreen from "./WeatherScreen";

export default function HistoryScreen({ historyArray }) {
    return (
        <div key={historyArray.id} className>
            {historyArray.map((k) => (
                <WeatherScreen params={k} />
            ))}
        </div>
    )
}
