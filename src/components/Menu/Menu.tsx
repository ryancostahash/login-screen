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
        <Link href="/home">
          <li>
            <Link href="" style={{ marginLeft: "22px" }}>
              {IconHome}
            </Link>
            <p>Home</p>
          </li>
        </Link>
        <Link href="/services" >
          <li>
            <Link href="" style={{ marginLeft: "21.5px" }}>
              {IconSpanner}
            </Link>
            <p style={{ marginLeft: "0.5px" }}>Serviços</p>
          </li>
        </Link>
        <Link href="/tickets" >
          <li>
            <Link href="" style={{ marginLeft: "19px" }}>
              {IconTicket}
            </Link>
            <p style={{ marginLeft: "3px" }}>Ticket</p>
          </li>
        </Link>

        <Link href="/invoicings" >
          <li>
            <Link href="" style={{ marginLeft: "11px" }}>
              {IconHandUsd}
            </Link>
            <p style={{ marginLeft: "11px" }}>Invoicing</p>
          </li>
        </Link>
      </ul>
      <ul>
        <Link href="/logon">
          <li>
            <Link href="" style={{ marginLeft: "22px" }}>
              {IconLogout}
            </Link>
            <p>Sair</p>
          </li>
        </Link>
      </ul>
    </Aside>
  );
}
