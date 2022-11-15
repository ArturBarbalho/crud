import styled from 'styled-components'
//import media from 'styled-media-query'
export const Wrapper = styled.main`
display: flex;
flex-direction: column;
align-items: center;
background-image:url('mountain.jpg');
height:100vh;
justify-content:center;

h1{
    margin-bottom:20px;
    font-size:50px;
    font-family: arial;
    color: darkgreen;
    text-shadow:1px 1px black;
}
input{
    width:100%;
    max-width:500px;
    height: 40px;
    border-radius:20px;
    padding:20px;
    margin: 10px;
}
`
export const Buttons=styled.div`
display: flex;
justify-content:space-between;
width:400px;
button{
    background-color:green ;
    border: none;
    padding: 15px;
    border-radius:30px;
    color: white;
    width:150px;
    :Hover{
        cursor:pointer;
    }
}
`

export const Res = styled.p`
background-color: #FF9494 ;
margin-top:30px;
`