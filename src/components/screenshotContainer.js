import { React, useRef, useState, useEffect } from "react";
import exportAsImage from "./exportAsImage"

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
        <>
            <div className="parent">
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
                    {ImageSquareURLs.map(ImageSquareSrc => <img src={ImageSquareSrc} key={ImageSquareSrc} />)}
                    {ImageLandscapeURLs.map(ImageSquareSrc => <img src={ImageSquareSrc} key={ImageSquareSrc} />)}
                </div>
            </div>
            <button onClick={() => exportAsImage(exportRef.current, "CoverTest_" + Math.floor(Math.random() * 9999))}>
                Download screenshot
            </button>
        </>
    )
}



function CardSmall() {
    return (
        <>smallxscard -</>
    )
}
function CardMedium() {
    return (
        <>medcard -</>
    )
}
function CardBig() {
    return (
        <>bigcard -</>
    )
}


