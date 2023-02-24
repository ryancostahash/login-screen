import Image from 'next/image'
import Link from 'next/link'
import CustomInput from '../Common/CustomInput'
import { IconLocker, IconUser } from "../Icons/icons";
import { 
    Banner, 
    Container, 
    Content, 
    Title, 
    BoxTitle, 
    BoxContent, 
    BoxInputs, 
    Input, 
    Label,
    Button,
    CopyRight,
} from './style'

export default function Login(){
    return (
        <Container>
            <Banner>
                <BoxTitle>
                    <Title>Cliente</Title>
                </BoxTitle>
                <Image src="/assets/logo.png" alt="logo" width={396} height={88} />
            </Banner>
            <Content>
                <BoxContent>
                    <p>Login</p>
                    <BoxInputs>
                        <Label htmlFor="user">Usuário</Label>
                        <CustomInput type="text" icon={IconUser} />
                        <Label style={{ marginTop: '24px' }} htmlFor="password">Senha</Label>
                        <CustomInput type="password" icon={IconLocker} />
                    </BoxInputs>
                    <Link style={{ textDecoration: 'underline', color: '#5B8DEF' }} href="#">Esqueceu sua senha?</Link>
                    <Button>Entrar</Button>
                    <CopyRight style={{ fontSize: '16px' }}>@2022 Hashsys. Todos os direitos reservados</CopyRight>
                </BoxContent>
            </Content>
        </Container>
    )
}