import styled from 'styled-components'

export const HeaderContainer = styled.div`
    padding: 30px 0px 0px 20px;
    background: white;
    height: 61px;
    border-bottom: 1px solid rgb(255, 216, 231);
    display: flex;
    flex-direction: row;
    width: 100%;
    
    `;

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    `;

export const MenuItem = styled.div`
 padding: 8px 10px 0;
 color: black;
`;

export const Favorites = styled.div`
display: flex;
flex-direction: row;
width: 25%;
margin-top: -2px;
`;
export const FavoriteText = styled.div`
margin-top: 10px;
padding: 0 5px;
color: black;
`;