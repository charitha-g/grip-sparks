import React, {useState} from 'react';
import Video from '../../videos/bits.mp4';
import {Button} from '../ButtonElements';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='videos/bits.mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Graduate Rotational Internship Program</HeroH1>
                <HeroP>
                    Register 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="register" smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                       Get started{hover ? <ArrowForward />:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
