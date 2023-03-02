interface ContentProps {
    children?: any;
}

export default function Content(props: ContentProps){
    return (
        <div style={{ flex: '1', marginLeft: '160px', zIndex: '0' }}>{props.children}</div>
    )
}