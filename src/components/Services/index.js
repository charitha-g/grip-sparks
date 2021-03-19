import React from 'react'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon, ServicesP} from './ServicesElements'
import Icon1 from '../../images/development.svg';
import Icon2 from '../../images/team.svg';
import Icon3 from '../../images/website.svg';
import Icon4 from '../../images/webdeveloper.svg';
import Icon5 from '../../images/programming.svg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Programs</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Content Development</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Campus Ambassador</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Digital Marketing</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Talent Acquisition</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>IoT and Computer Vision</ServicesH2>
                    <ServicesP></ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
