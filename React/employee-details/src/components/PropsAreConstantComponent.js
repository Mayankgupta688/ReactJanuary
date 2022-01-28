export default function PropsAreConstantComponent(props) {
    return (
        <div>
            <h2>Simple User Name string is {props.userName}</h2>
            <h2>Simple User Age string is {props.userAge}</h2>
            <h2>Simple User Designation ame string is {props.userDesignation}</h2>
            <SampleComponents {...props}></SampleComponents>
        </div>
    )
}


function SampleComponents(props) {
    return <h1>User Name is {props.userName}</h1>
}