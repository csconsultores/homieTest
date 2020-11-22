import React from 'react'
import FilterSvg from '../../SVG/FilterSvg';
import DepartmentList from '../DepartmentsList/DepartmentList';
import * as styles from './Content_Style';

import Map from '../Map/Map';
import { connect } from 'react-redux';
import { Found, OtherOptions, Want } from './Content_Style';
import Button from '@material-ui/core/Button/Button';

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

                <OtherOptions>
                    <Found>No encuentras depa?</Found>
                    <Want>Dinos qué quieres y nosotros te lo buscamos</Want>
                    <Button variant="contained" color="secondary">
                        Encuéntrenme un depa
                    </Button>
                </OtherOptions>
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

