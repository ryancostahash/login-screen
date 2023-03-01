import Link from "next/link";
import { BoxIcon } from "./style";

interface MenuItemProps {
    url?: string
    icon: any;
    text: string;
}

export default function MenuItem(props: MenuItemProps){
    function renderLink(){
        return (
            <>
                <p>
                    {props.icon}
                </p>
                <span>{props.text}</span>
            </>
        )
    }
    
    return (
        <BoxIcon>
            {props.url ? (
                <Link href={props.url}>{renderLink()}</Link>
            ) : (
                renderLink()
            )}
        </BoxIcon>
    )
}