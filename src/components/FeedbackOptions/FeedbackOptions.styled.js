import styled from '@emotion/styled';

export const List = styled.ul`
    padding-left: 20px;
    display: flex;
    gap: 10px;
`;
export const Button = styled.button`
    font-size: 17px;
    padding: 10px 20px;
    color: white;
    background-color: blue;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 250ms ease-in-out; 

    &:hover {
        background-color: red;
        transform: scale(1.1);
    }
`

