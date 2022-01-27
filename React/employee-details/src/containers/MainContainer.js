import HeaderComponent from "../components/HeaderComponent";
import ContentComponent from "../components/ContentComponent";
import FooterComponent from "../components/FooterComponent";

export default function MainContainer() {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <ContentComponent></ContentComponent>
            <FooterComponent></FooterComponent>
        </div>
    )   
}