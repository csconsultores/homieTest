import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { IHomes } from '../../containers/DepartmentsList/store/departmentsTypes';
import BathroomsSvg from '../../SVG/BathroomsSvg';
import BedroomsSvg from '../../SVG/BedroomSvg';
import ParkingSvg from '../../SVG/ParkingSvg';
import PetSvg from '../../SVG/PetSvg';
import * as style from './Department_Style';
import { formatter } from '../../utils';


interface IProps {
    home: IHomes,
    setSelectedId: any
}

const Department = ({ home, setSelectedId }: IProps) => {
    const photos = home.photos;
    const firstPhoto = photos[0];

    const mouseOver=()=>{
        setSelectedId(home.id)
    }

    return (
        <style.DepartmentContainer onMouseOver={mouseOver} id={home.id} background={firstPhoto}>
            <style.Price>
                <div>{formatter.format(home.price).substring(0, formatter.format(home.price).length - 3)}</div>
                <FavoriteBorderIcon className="heart"/>
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
                    <div>{home.bedrooms}</div><BedroomsSvg />
                </style.Cell>
                <style.Cell>
                    <div className="bathrooms">{home.bathrooms}</div><BathroomsSvg />
                </style.Cell>
                <style.Cell>
                    <div>{home.parkings}</div><ParkingSvg />
                </style.Cell>
                <style.Cell >
                    <div className="pet">{home.pet_friendly ? "Si": "No"}</div><PetSvg />
                </style.Cell>
                <style.Cell lastCell={true}>
                    <div className="mts">{home.sqare_mts} m<sup style={{top:"-0.5em"}}>2</sup></div>
                </style.Cell>
                </style.Row>
                </style.Details>
            </style.Description>

        </style.DepartmentContainer>
    )

}

export default Department;