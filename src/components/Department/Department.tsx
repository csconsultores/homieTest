import React from 'react';
import { IHomes } from '../../containers/DepartmentsList/store/departmentsTypes';
import { DepartmentContainer } from './Department_Style';

interface IProps {
    home: IHomes
}

const Department = ({ home }: IProps) => {
    const photos=home.photos;
    const firstPhoto=photos[0];
    return (
        <DepartmentContainer background={firstPhoto}>
                hola
  
        </DepartmentContainer>
    )

}

export default Department;