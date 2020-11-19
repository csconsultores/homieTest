import React, { useEffect, useState } from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import Department from '../../components/Department/Department';
import { connect, useDispatch } from 'react-redux';
import { getDepartments } from './store/departmentsActions';
import { DepartmentListContainer } from './DepartmentList_Style';

const DepartmentList = ({ homes, totalHomes, page, rowsPerPage }: any) => {
  const [homesPerPage, setHomePerPage] = useState<any>([])

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDepartments())
  }, [dispatch])

  useEffect(() => {
    if (homes.length > 0){
        setHomePerPage(homes.splice(0, 12)) 
    }
 
  }, [homes])

  const handleChangePage = (event:any, newPage:any) => {
  };

  const handleChangeRowsPerPage = (event:any) => {
  };

  return (
    <DepartmentListContainer>
      {homesPerPage.map((home: any) => (
        <Department home={home} />
      ))}

      <TablePagination
        component="div"
        count={totalHomes}
        page={page | 0}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage | 12}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />

    </DepartmentListContainer>
  )
}

const mapState = (state: any) => {
  return {
    homes: state.homes,
    totalHomes: state.totalHomes,
    page: state.page,
    rowsPerPage: state.rowsPerPage
  }
}

export default connect(mapState)(DepartmentList);