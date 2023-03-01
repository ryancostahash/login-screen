import Menu from "../Menu/Menu";
import { Container } from "./style";
import Content from "../Content/Content";

interface LayoutProps {
    children?: any;
}


export default function Layout(props: LayoutProps){
    return (
        <Container>
            <Menu />
            <Content>{props.children}</Content>
        </Container>
    )
}