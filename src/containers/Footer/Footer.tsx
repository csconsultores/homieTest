import React from 'react';
import HomieLogo from '../../SVG/HomieLogo';
import { FooterContainer } from './Footer_Style';

const Footer = ({ ...props }) => {
    return (
        <FooterContainer>
            <div className="Footer-h84djn-0">
                <div><HomieLogo /></div>
                <div>
                    <div className="Layout__FlexColumn-sc-1fk2s25-1 cBWzZW">
                        <div className="Footer__Item-h84djn-6 fVbBOk">
                            Te buscamos depa</div>
                        <div className="Footer__Item-h84djn-6 fVbBOk">Blog</div>
                        <div className="Footer__Item-h84djn-6 fVbBOk">
                            Únete al equipo</div></div>
                    <div className="Layout__FlexColumn-sc-1fk2s25-1 cBWzZW">
                        <div className="Footer__Item-h84djn-6 fVbBOk">
                            Aviso de privacidad</div>
                        <div className="Footer__Item-h84djn-6 fVbBOk">
                            Términos y condiciones</div></div>

                </div>


            </div >
        </FooterContainer >
    )

}

export default Footer;