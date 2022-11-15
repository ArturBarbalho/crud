import styled,{css} from 'styled-components'


export const Wrapper = styled.main`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-top:20px;
`

export const Produto = styled.tr`
background-color:whitesmoke;
text-align:center;
:Hover{
 cursor:pointer;
 background-color: black;
 color: white;
}

`

export const Table = styled.table`
border-collapse:collapse;
max-width: 1400px;
width: 100%;
td, th{
padding:20px;
border-bottom: 1px solid rgba(0,0,0,0.2);    
}
`

export const Button = styled.button`
background-color: red ;
border: none;
color: white;
padding: 10px;
width: 70px;
border-radius:5px;
:Hover{
    color: black;
    cursor: pointer;
}
`
type display={display:boolean}
export const Desc = styled.div<display>`
${({display})=>css`
display:${display?'block':'none'} ;
position:absolute;
background-color:black;
color:white;
max-width:700px;
height:300px;
width:100%;
border-radius:50px;
padding:30px;
font-size:larger;
p{
    margin-top:30px;
    margin-left:20px;
    max-width:600px;
    word-break: break-all
}

span{:Hover{
    cursor:pointer;
}}
`}
`

export const Input = styled.input`
width: 300px;
height: 40px;
border-radius:30px;
padding: 10px;
`
export const Seach = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
width: 100%;
max-width:400px;
`

export const Pagination = styled.div`
margin-top:50px;
button{
    width: 30px;
    background-color:darkgreen;
    border: none;
    padding: 10px;
    margin-left:5px;
    color: white;
    :Hover{
        cursor: pointer;
    }
}
`