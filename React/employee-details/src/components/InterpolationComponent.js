

export default function InterpolationComponent() {
    var userName = "Mayank";
    var userSurname = "Gupta"

    var details = {
        name: "Mayank Gupta",
        id: 1,
        avatar: "https://www.thebalancesmb.com/thmb/z4qcSGAg17ehrRjDriSVTndqEwY=/3865x2576/filters:fill(auto,1)/business-colleagues-talking-while-using-laptop-at-office-875611350-5aeb587c0e23d9003773a5e0.jpg",
        createdAt: "Today"
    }
    

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100);
    }

    return (
        <div>
            <h1>User Name is { userName + " " + userSurname}</h1><hr/>
            <h2>The Random Number is: { generateRandomNumber() }</h2>
        </div>
    )
}