import React, { useEffect, useState } from 'react';
import Department from '../../components/Department/Department';
import { connect, useDispatch } from 'react-redux';
import { getDepartments, selectId } from './store/departmentsActions';
import { DepartmentListContainer, Pagination } from './DepartmentList_Style';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const DepartmentList = ({ homes, totalHomes, page, rowsPerPage }: any) => {
  const [homesPerPage, setHomePerPage] = useState<any>([])

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDepartments())
  }, [dispatch])

  useEffect(() => {
    if (homes && homes.length > 0){
        setHomePerPage(homes.splice(0, 12)) 
    }
 
  }, [homes]);

  const setSelectId =(id: any)=>{
    dispatch(selectId(id)) 
  }

  return (
    <DepartmentListContainer>
      {homesPerPage.map((home: any) => (
        <Department 
          home={home}
          setSelectedId={setSelectId}
          key={home.id}
        />
      ))}
      <Pagination>
              <span>1 a 12 de {totalHomes}</span> <NavigateNextIcon />
      
      </Pagination>


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