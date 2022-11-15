import styled,{css} from 'styled-components'

export const Wrapper = styled.main`
display: flex;
flex-direction: column;
align-items: center;
input, textarea{
    width:400px;
    height:40px;
    border-radius:10px;
    border: 1px solid black;
    margin:5px;
    padding:10px;
}
textarea{
height: 80px;
}
button{
    background-color:green ;
    border: none;
    color: white;
    padding: 15px;
    border-radius:20px;
    margin-bottom: 20px ;
    width: 150px;
    margin-top:10px;
    :Hover{
        cursor:pointer
    }
}
h1{
    color: green;
    text-shadow:1px 0px gray;
    margin-top:30px;
    margin-bottom:20px;
}
`

type display = {bgcolor:boolean}

export const Response = styled.p<display>`
${({bgcolor})=>css`
 background-color:${bgcolor?'lightgreen':'#F8A3A9'};
`}
`
