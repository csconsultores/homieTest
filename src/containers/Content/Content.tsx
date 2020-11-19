import React from 'react'
import FilterSvg from '../../SVG/FilterSvg';
import DepartmentList from '../DepartmentsList/DepartmentList';
import * as styles from './Content_Style';

import Map from '../Map/Map';
import { connect } from 'react-redux';

const Content = ({ ...props }) => {
    return (
        <styles.ContentContainer>
            <styles.DepartmentsSection>
                <styles.Filter>
                    <styles.Box>
                        <styles.PurpleFont>
                            Ciudad de México
                    </styles.PurpleFont>
                        <styles.TotalDepartments>
                           {props.totalHomes} departamentos
                    </styles.TotalDepartments>
                    </styles.Box>
               
                <styles.FilterButton>
                    <FilterSvg /> Filtros
                </styles.FilterButton> 
                </styles.Filter>

                <DepartmentList />
            </styles.DepartmentsSection>

            <styles.MapSection >
                <Map />
            </styles.MapSection>
        </styles.ContentContainer>
    )

}

const mapState = (state: any) => {
    return {
      totalHomes: state.totalHomes,
    }
  }
  
  export default connect(mapState)(Content);

