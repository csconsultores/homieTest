import styled from 'styled-components'

interface IDepartment {
    background?: any;
}

export const DepartmentContainer= styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 224px;
    margin-right: 26px;
    margin-bottom: 17px;
    background-image: url(${(props:IDepartment) => props.background});
    &:first-child {
        margin-right: 26px;
        margin-left: 0px;
    }
    position: relative;
`;

export const Price= styled.div`
    width: 108px;
    height: 32px;
    background-color: white;
    padding-left: 11px;
    color: #ff1555;
    font-size: 16px;
    font-weight: 900;
    font-face: "Open Sans", sans-serif;
`;

export const Exclusive= styled.div`
    text-align: center;
    height: 22px;
    width: 100%;
    transform: rotate(360deg);
    background-color: rgba(255, 3, 100, 0.49);
    margin-top: 100px;
    span {
        color: white;
        font-weight: 900;
    }
    `;

export const Description= styled.div`
    background-color: white;
    height:70px;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    width: 100%
`;

export const Address= styled.div`

`;

export const Details= styled.div`
    width: 100%;
    height:50px;
    bottom: 0;
    display: table;
`;

export const Row= styled.div`
    display: table-row;
    `;

export const Cell= styled.div`
    display: table-cell;
    padding: 12px;
    background: #ddd;
    `;
