import styled from 'styled-components'
import {css} from 'styled-components'
type props = {logado:boolean}
export const Wrapper = styled.header<props>`
${({logado})=>css`
display: ${logado?'flex':'none'};
justify-content: space-around;
padding-top:30px;
padding-bottom:20px;
background-color:green;
a{
    color:white;
    text-decoration: none ;
    font-size:larger;
}
`}
`
