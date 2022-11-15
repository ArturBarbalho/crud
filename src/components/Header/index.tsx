import * as S from './styles'
import Link from 'next/link'
import { UserContext } from '../../context/Context';
import {useContext} from 'react'
import { destroyCookie } from 'nookies';
import { useRouter } from 'next/router';

const Header = () => {
const {logado}=useContext(UserContext)
const router = useRouter()
function logoff(){
destroyCookie(null,'token')
destroyCookie(null,'id')
router.reload()
}
return(
  <S.Wrapper logado={logado}>
    
    <Link href="/" >
    Home
    </Link>
    <Link href="/cadastro" >
    Cadastrar Produto
    </Link>

    <Link href='#' onClick={()=>{logoff()}}>Sair</Link>

  </S.Wrapper>
)
}
export default Header