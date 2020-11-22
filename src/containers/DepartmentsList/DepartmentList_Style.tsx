import styled from 'styled-components'

export const DepartmentListContainer = styled.div`
    padding: 30px 0px;
    background-color: #f4f4f4;
    display: flex;
    margin-left: 39px;
    margin-rigth: 20px;
    flex-wrap: wrap;
    div[id^="mui-"]{
        display: none;
    }
    .MuiTablePagination-input{
        display: none;
    }
`;

export const Pagination = styled.div`
    margin-top: 30px;
    margin: 15px auto;
    text-align: center;
`;