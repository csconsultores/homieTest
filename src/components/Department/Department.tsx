import React from 'react';
import { IHomes } from '../../containers/DepartmentsList/store/departmentsTypes';
import * as style from './Department_Style';

interface IProps {
    home: IHomes
}

const Department = ({ home }: IProps) => {
    const photos = home.photos;
    const firstPhoto = photos[0];
    console.log(home);

    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0,
        //maximumFractionDigits: 0,
    });

    return (
        <style.DepartmentContainer background={firstPhoto}>
            <style.Price>
                {formatter.format(home.price).substring(0, formatter.format(home.price).length - 3)}
            </style.Price>

            {home.is_homie_exclusive &&
                <style.Exclusive>
                    <span>
                        Exclusivo de Homie
                </span>

                </style.Exclusive>
            }

            <style.Description>
                <style.Address>
                    {home.abbr_address}
                </style.Address>
                <style.Details>
                <style.Row>
                <style.Cell>
                    uno
                </style.Cell>
                <style.Cell>
                    uno
                </style.Cell>
                <style.Cell>
                    uno
                </style.Cell>
                <style.Cell>
                    uno
                </style.Cell>
                <style.Cell>
                    uno
                </style.Cell>
                </style.Row>
                </style.Details>
            </style.Description>

        </style.DepartmentContainer>
    )

}

export default Department;