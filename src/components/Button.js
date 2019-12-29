import styled from 'styled-components';

export const ButtonContainer = styled.button`
    font-size: 1rem;
    background: transparent; 
    border: 0.05rem solid var(--lightBlue);
    color: var(--mainWhite);
    border-radius: 0.5rem;
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0rem;
    transition: all 0.2s ease-in-out;

&:hover{
    background-color : var(--mainWhite);
    color: var(--mainBlue);
}
&:focus{
    outline: none;
}
`;

export const WhiteBgbtn = styled.button`
    font-size: 1rem;
    background: transparent; 
    border: 0.05rem solid var(--lightBlue);
    border-color:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color:${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainDark);
    border-radius: 0.5rem;
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0rem;
    transition: all 0.2s ease-in-out;

&:hover{
    background: ${props => 
        props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainWhite);
}
&:focus{
    outline: none;
}
`;