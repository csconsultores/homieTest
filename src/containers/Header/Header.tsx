import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

import HomieLogo from '../../SVG/HomieLogo';
import * as style from './Header_Style';

const Header = ({ ...props }) => {
    return (
        <style.HeaderContainer>
            <div style={{ width: '25%' }}>
                <HomieLogo />
            </div>
            <style.Favorites>
                <div><FavoriteIcon style={{color: 'red', paddingTop: '10px'}}/></div>
                <style.FavoriteText> Favoritos</style.FavoriteText>
                
           
            </style.Favorites>

            <style.Menu>
                <style.MenuItem>
                    ¿Cómo funciona?
                    </style.MenuItem>
                <style.MenuItem>
                    Soy propietario
                    </style.MenuItem>
                <style.MenuItem>
                    Iniciar sesion
                    </style.MenuItem>
            </style.Menu>
        </style.HeaderContainer>
    )
}

export default Header;