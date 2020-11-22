import styled from 'styled-components'

interface IDepartment {
    background?: any;
}

export const DepartmentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 224px;
    margin-right: 26px;
    margin-bottom: 17px;
    background-image: url(${(props: IDepartment) => props.background});
    &:first-child {
        margin-right: 26px;
        margin-left: 0px;
    }
    position: relative;
`;

export const Price = styled.div`
    position: relative;
    width: 108px;
    height: 32px;
    background-color: white;
    padding: 5px 0 0 11px;
    color: #ff1555;
    font-size: 16px;
    font-weight: 900;
    font-face: "Open Sans", sans-serif;
    display: flex;
    flex-direction: row;
    .heart {
        margin: -1px 0 0 17px;
        color: #535455;
        width: 22px;
    }
`;

export const Exclusive = styled.div`
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

export const Description = styled.div`
    background-color: white;
    height:70px;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    width: 100%
`;

export const Address = styled.div`
    padding: 9px 0 0 7px;
`;

export const Details = styled.div`
    width: 100%;
    height:24px;
    bottom: 0;
    display: table;
    position: absolute;
    padding-bottom: 11px;
`;

export const Row = styled.div`
    display: table-row;
    `;

interface ICell {
    car?: boolean;
    lastCell?: boolean;
    bedroom?: boolean;
    pet?: boolean;
}

export const Cell = styled.div`
    width: 20%;
    display: table-cell;
    padding: 0;
    border-right: ${(props: ICell) => props.lastCell ? 0 : "1px solid #ddd"};
    position:relative;
    div {
        float:left;
        position: absolute;
        margin-left:8px;
        display: block;
        margin-top: 3px;

    }        
    .pet{
        margin: 5px 0 0 1px;
    }
    .mts {
        margin-top: 3px;
        margin-left: 4px;
    }
    svg {
        margin: 5px 0 0 18px;
    }
    `;
