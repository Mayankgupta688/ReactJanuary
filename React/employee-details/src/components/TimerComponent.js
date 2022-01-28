export default function TimerComponent() {
    
    var time = "";

    function getLatestTime() {
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    time = getLatestTime();

    return (
        <h1>Current Time is {time}</h1>
    )
}