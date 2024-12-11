import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase clicked" + text);
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase", "success")
    }
    
    const handleLoClick = () => {
        // console.log("Uppercase clicked" + text);
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase", "success")
    }
    
    const handleClearClick = () => {
        let newtext = ""
        setText(newtext)
        props.showAlert("Text cleared", "success")
    }
    
    const handleAlternateClick = () => {
        var chars = text.toLowerCase().split("");
        for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
        }
        setText(chars.join(""));
        props.showAlert("Converted to Alternating case", "success")
    }
    
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to your clipboard", "success")
    }
    
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra space removed", "success")
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    return (
        <>
            <div className='container' style={{color: props.mode==='light'? 'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'? 'white':'purple', color: props.mode==='light'? 'black':'white'}} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <button className="btn mx-2 my-1" disabled={text.length===0} style={{backgroundColor: props.mode==='light'? 'grey':'purple', color: props.mode==='light'? 'black':'white'}} onClick={handleUpClick}>UPPERCASE</button>
                <button className="btn mx-2 my-1" disabled={text.length===0} style={{backgroundColor: props.mode==='light'? 'grey':'purple', color: props.mode==='light'? 'black':'white'}} onClick={handleLoClick}>lowercase</button>
                <button className="btn mx-2 my-1" disabled={text.length===0} style={{backgroundColor: props.mode==='light'? 'grey':'purple', color: props.mode==='light'? 'black':'white'}} onClick={handleAlternateClick}>AlTeRnAtInG CaSe</button>
                <button className="btn mx-2 my-1" disabled={text.length===0} style={{backgroundColor: props.mode==='light'? 'grey':'purple', color: props.mode==='light'? 'black':'white'}} onClick={handleClearClick}>Clear Text</button>
                <button className="btn mx-2 my-1" disabled={text.length===0} style={{backgroundColor: props.mode==='light'? 'grey':'purple', color: props.mode==='light'? 'black':'white'}} onClick={handleCopyClick}>Copy Text</button>
                <button className="btn mx-2 my-1" disabled={text.length===0} style={{backgroundColor: props.mode==='light'? 'grey':'purple', color: props.mode==='light'? 'black':'white'}} onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'? 'black':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
