import mainContainer, { userAge as age, userName as name } from "../components/HeaderComponent";
import ContentComponent from "../components/ContentComponent";
import FooterComponent from "../components/FooterComponent";

alert(age);
alert(name);

export default function MainContainer() {
    return (
        <div>
            <mainContainer></mainContainer>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </div>
    )   
}