interface ContentProps {
    children?: any;
}

export default function Content(props: ContentProps){
    return (
        <div style={{ flex: '1', marginLeft: '62px' }}>{props.children}</div>
    )
}