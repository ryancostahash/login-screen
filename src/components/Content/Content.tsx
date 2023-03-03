import { ContentBox } from "./style";

interface ContentProps {
    children?: any;
}

export default function Content(props: ContentProps){
    return (
        <ContentBox>{props.children}</ContentBox>
    )
}