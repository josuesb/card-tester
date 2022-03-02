import { React, useRef, useState, useEffect } from "react";
import exportAsImage from "./exportAsImage"
import styles from "./screenshotContainer.module.css"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ScreenshotContainer() {
    /*Image logic - square*/
    const exportRef = useRef();
    const [ImageSquares, setImageSquares] = useState([]);
    const [ImageSquareURLs, setImageSquareURLs] = useState([]);

    useEffect(() => {
        if (ImageSquares.length < 1) return;
        const newImageSquareURLs = [];
        ImageSquares.forEach(ImageSquare => newImageSquareURLs.push(URL.createObjectURL(ImageSquare)));
        setImageSquareURLs(newImageSquareURLs);
    }, [ImageSquares]);

    function onImageSquareChange(e) {
        setImageSquares([...e.target.files]);
    }
    /*Image logic - landscape*/
    const [ImageLandscapes, setImageLandscapes] = useState([]);
    const [ImageLandscapeURLs, setImageLandscapeURLs] = useState([]);

    useEffect(() => {
        if (ImageLandscapes.length < 1) return;
        const newImageLandscapeURLs = [];
        ImageLandscapes.forEach(ImageLandscape => newImageLandscapeURLs.push(URL.createObjectURL(ImageLandscape)));
        setImageLandscapeURLs(newImageLandscapeURLs);
    }, [ImageLandscapes]);

    function onImageLandscapeChange(e) {
        setImageLandscapes([...e.target.files]);
    }

    return (
        /*<Container>
                <Row className={"parent "+styles.tests}>
                    <h1>Cover test tool</h1>
                    <p><b>How to use:</b> load the images you want to preview and then click on the ...</p>
                    <input type="file" accept="image/*" onChange={onImageSquareChange} />
                    <input type="file" accept="image/*" onChange={onImageLandscapeChange} />

                    <div ref={exportRef}>
                        <CardMedium></CardMedium>
                        <CardSmall></CardSmall>
                        <CardSmall></CardSmall>
                        <CardSmall></CardSmall>
                        <br></br>
                        <CardBig></CardBig>
                        {ImageSquareURLs.map(ImageSquareSrc => <img alt="a" src={ImageSquareSrc} key={ImageSquareSrc} />)}
                        {ImageLandscapeURLs.map(ImageSquareSrc => <img alt="b" src={ImageSquareSrc} key={ImageSquareSrc} />)}
                    </div>
                </Row>
                <Row>
                <button onClick={() => exportAsImage(exportRef.current, "CoverTest_" + Math.floor(Math.random() * 9999))}>
                    Download screenshot
                </button>
                <br></br><i>Download not working?</i> Try disabling Grammarly for Chrome and use the Desktop app instead.
                </Row>
            </Container>*/
        <Container>
            <Row>
                <Col md={4}>1</Col>
                <Col md={4}>2</Col>
                <Col md={4}>
                    <button onClick={() => exportAsImage(exportRef.current, "CoverTest_" + Math.floor(Math.random() * 9999))}>
                        Download screenshot
                    </button>
                </Col>
            </Row>
            <div className={styles.exportContainer} ref={exportRef}>
                <Row className={styles.previewContainer + " pt-3 pb-3"}>
                    <Row>
                        <h2>
                            Card preview
                        </h2>
                    </Row>
                    <Row>
                        <Col md="4">
                              <CardMedium test={"dsfsf"}></CardMedium>
                        </Col>
                        <Col md={"8"}>
                            <Row>
                                <Col>
                                    <CardSmall background={'url("https://via.placeholder.com/800x800")'}></CardSmall>
                                </Col>
                                <Col>
                                    <CardSmall background="blue"></CardSmall>
                                </Col>
                                <Col>
                                    <CardSmall></CardSmall>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                <br></br>fgdfss<hr></hr>
                fdgdfg 
                   
                </Row>
            </div>
        </Container>
    )
}



function CardSmall(props) {
    return (
        <Col className={styles.card}>
            <div className={styles.card_content+" pt-4"} style={{background: props.background}}>
                <img className={styles.icon} src="icon.png" alt=""></img>
                <h3>One line title</h3>
            </div>
        </Col>
    )
}
function CardMedium(props) {
    return (
        <Col className={styles.card}>
            <div className={styles.card_content+" pt-4"} style={{background: props.background}}>
                <img className={styles.icon} src="icon.png" alt=""></img>
                <h3>One line title</h3>
            </div>
        </Col>
    )
}
function CardBig() {
    return (
        <>bigcard -</>
    )
}


