import { React, useRef, useState, useEffect } from "react";
import exportAsImage from "./exportAsImage"
import styles from "./screenshotContainer.module.css"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function ScreenshotContainer() {
    const [title, setTitle] = useState("");

    /*Image logic - square*/
    const exportRef = useRef();
    const [ImageSquares, setImageSquares] = useState([]);
    const [ImageSquareURLs, setImageSquareURLs] = useState([]);

    useEffect(() => {
        if(title.length <1) {
            setTitle("Sed ut perspiciatis unde omnis is");
        }
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
        if(title.length <1) {
            setTitle("Sed ut perspiciatis unde omnis is");
        }
        if (ImageLandscapes.length < 1) return;
        const newImageLandscapeURLs = [];
        ImageLandscapes.forEach(ImageLandscape => newImageLandscapeURLs.push(URL.createObjectURL(ImageLandscape)));
        setImageLandscapeURLs(newImageLandscapeURLs);
    }, [ImageLandscapes]);

    function onImageLandscapeChange(e) {
        setImageLandscapes([...e.target.files]);
    }

   // function handleTextChange(event) {
        //setTitle(event.target.value)
    //}

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
        <Container fluid>
            <Row>
            <br></br>&nbsp;
                <Col>
            <br></br>&nbsp;
                Title:
                <input className={styles.input} type="text" name="title" onChange={event => setTitle(event.target.value)} value={title}/>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col md={4}>
                    <input type="file" accept="image/*" onChange={onImageSquareChange} />
                </Col>
                <Col md={4}>
                    <input type="file" accept="image/*" onChange={onImageLandscapeChange} />
                </Col>
                <Col md={4}>
                    <button onClick={() => exportAsImage(exportRef.current, "CoverTest_" + Math.floor(Math.random() * 9999))}>
                        Download screenshot
                    </button>
                </Col>
            </Row>
            <div className={styles.exportContainer} ref={exportRef}>
                <div className={styles.previewContainer + " pt-3 pb-3"}>
                    <Row>
                        <h2>
                            Card preview 
                        </h2>
                    </Row>
                    {ImageSquareURLs.map(ImageSquareSrc =>
                        <Row key={ImageSquareURLs} className={styles.cardsContainer}>
                            <CardMedium background={ImageSquareSrc} title={title+""}></CardMedium>
                            <CardSmall background={ImageSquareSrc} title={title+""}></CardSmall>
                            <CardSmall background={ImageSquareSrc} title="Ut enim ad minima veniam, quis nostrum exercitationem ullam"></CardSmall>
                            {window.innerWidth < 1745 ? <></> : <CardSmall background={ImageSquareSrc} title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"></CardSmall>}
                        </Row>)}
                    {ImageSquareURLs.length > 0 ? "" : <p><i>Cards will appear here once you upload an image</i></p>}
                </div>
                <br></br>
                <div className={styles.previewContainer + " pt-3 pb-3"}>
                    <Row>
                        <h2>
                        Hero with titles and button:
                        </h2>
                    </Row>
                    {ImageLandscapeURLs.map(ImageLandscapeURLs =>
                        <Row key={ImageLandscapeURLs} className={styles.cards_container_big}>
                            <CardBig showTitle={true} background={ImageLandscapeURLs} title={title+""}></CardBig>
                        </Row>)}
                    {ImageLandscapeURLs.length > 0 ? "" : <p><i>Cards will appear here once you upload an image</i></p>}


                    <Row>&nbsp;<br></br>
                        <h2>Empty hero:</h2>
                    </Row>
                    {ImageLandscapeURLs.map(ImageLandscapeURLs =>
                        <Row key={ImageLandscapeURLs} className={styles.cards_container_big}>
                            <CardBig showTitle={false} background={ImageLandscapeURLs} title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"></CardBig>
                        </Row>)}
                    {ImageLandscapeURLs.length > 0 ? "" : <p><i>Cards will appear here once you upload an image</i></p>}
                </div>
            </div>
        </Container >
    )
}



function CardSmall(props) {
    let image = "https://via.placeholder.com/50x50"
    if (props.background !== undefined) {
        image = props.background;
    }
    return (
        <div className={styles.card}>
            <img className={styles.card_background} src={image} alt=""></img>
            <div className={styles.card_content}>
                <img className={styles.icon} src="../../../icon.png" alt="icon"></img>
                <h3 className={styles.card_title}>{props.title}</h3>
            </div>
        </div>
    )
}
function CardMedium(props) {
    let image = "https://via.placeholder.com/50x50"
    if (props.background !== undefined) {
        image = props.background;
    }
    return (
        <div className={styles.card_medium}>
            <img className={styles.card_background_medium} src={image} alt=""></img>
            <div className={styles.card_content}>
                <img className={styles.icon} src="../../../icon.png" alt="icon"></img>
                <h3 className={styles.card_title}>{props.title}</h3>
            </div>
        </div>
    )
}
function CardBig(props) {
    let image = "https://via.placeholder.com/50x50"
    if (props.background !== undefined) {
        image = props.background;
    }

    let cardContent;
    if (props.showTitle){
        cardContent=<div className={styles.card_content_big}><h3 className={styles.card_title_big}>{props.title}</h3><p className={styles.card_subtitle_big}><img className={styles.icon} src="../../../icon.png" alt="icon"></img> Little description</p><div className={styles.card_button}>I am a button</div></div>
    } else {
        cardContent = <></>
    }

    return (
        <div className={styles.card_big}>
            <img className={styles.card_background_big} src={image} alt=""></img>
            {cardContent}
        </div>
    )
}


