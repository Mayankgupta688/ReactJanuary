import HeaderComponent from "./HeaderComponent"

export default function SendingPropsComponent(props) {
    return (
        <div>
            <HeaderComponent userInfo={props.userName}></HeaderComponent>
            <h1>Hello {props.userName}</h1>
            <h1>Age of Employee is: {props.userAge}</h1>
            <h2>Designation is {props.userDesignation}</h2>
        </div>
    )
}