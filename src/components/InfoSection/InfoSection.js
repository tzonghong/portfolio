import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Container, Button } from '../../globalStyles'
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'

const InfoSection = ({lightBg, imgStart, lightTopLine, 
                     lightText, lightTextDesc, buttonLabel, 
                     description, headline, topLine, primary,
                     img, alt, start}) => {
                    const Location = useLocation();
    
                    const onButtonClick = () => {
                        // using Java Script method to get PDF file
                        fetch('TANZONGHONG_RESUME.pdf').then(response => {
                            response.blob().then(blob => {
                                // Creating new object of PDF file
                                const fileURL = window.URL.createObjectURL(blob);
                                // Setting various property values
                                let alink = document.createElement('a');
                                alink.href = fileURL;
                                alink.download = 'TANZONGHONG_RESUME.pdf';
                                alink.click();
                            })
                        })
                    }

return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                {Location.pathname !== '/resume' ? 
                                    <Link to='/resume'>
                                        <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                        </Button>
                                    </Link> : 
                                    <Link to='/'>
                                        <Button big fontBig primary={primary} onClick={onButtonClick}>
                                        {buttonLabel}
                                        </Button>
                                    </Link>}
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default InfoSection
