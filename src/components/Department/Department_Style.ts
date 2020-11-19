import styled from 'styled-components'

interface IDepartment {
    background?: any;
}

export const DepartmentContainer= styled.div`
display: flex;
flex-direction: row;
width: 250px;
height: 221px;
margin-right: 26px;
margin-bottom: 17px;
background-image: url(${(props:IDepartment) => props.background});
&:first-child {
    margin-right: 26px;
    margin-left: 0px;
}

`;