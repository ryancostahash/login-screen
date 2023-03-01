import Image from "next/image";
import { Aside, Logo } from "./style";
import logolarge from "../../../public/assets/logolarge.png";
import logosmall from "../../../public/assets/logosmall.png";
import MenuItem from "../MenuItem/MenuItem";
import {
  IconHandUsd,
  IconHome,
  IconLogout,
  IconSpanner,
  IconTicket,
} from "../Icons/icons";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Aside onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href="/home">
        <Image
          src={isHovered ? logolarge : logosmall}
          alt="Logomarca"
          width={isHovered ? 200 : 70}
          height={48}
          style={{ marginLeft: "15px" }}
        ></Image>
      </Link>
      <ul>
        <li>
          <Link href="/home">{IconHome}</Link>
        </li>
        <li>
          <Link href="/services">{IconSpanner}</Link>
        </li>
        <li>
          <Link href="/tickets">{IconTicket}</Link>
        </li>

        <li>
          <Link href="/invoicings">{IconHandUsd}</Link>
        </li>
        {/* <MenuItem text={isHovered ? 'Home' : ''} url="/home" icon={IconHome} />
                <MenuItem text={isHovered ? 'Serviços' : ''} url="/services" icon={IconSpanner} />
                <MenuItem text={isHovered ? 'Ticket' : ''} url="/tickets" icon={IconTicket} />
                <MenuItem text={isHovered ? 'Faturas' : ''} url="/invoicings" icon={IconHandUsd} /> */}
      </ul>
      <ul>
        <li>
          <Link href="/logon">{IconLogout}</Link>
        </li>
      </ul>
    </Aside>
  );
}
