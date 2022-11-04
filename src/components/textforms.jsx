import React,{useState} from "react";

function Textforms(props){
    
     const handleUpclick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
    }

    const handleExtraSpace=()=>{
      let newText=text.replace(/\s{2,}/g, ' ').trim() ;
setText(newText)
    }

    const handlechange=(event)=>{
        setText(event.target.value);
    }

    const handlefont=()=>{
      setFontv("true")
      setFonttext(text)
        }
        const handleCopyText=()=>{
          var copyGfGText = document.getElementById("mybox");
  
          /* Select the text field */
          copyGfGText.select();
          document.execCommand("copy");
          document.getSelection().removeAllRanges()
          /* Copy the text inside the text field */
            }

    const[text,setText]=useState("");
    const[fontv,setFontv]=useState('false');
    const[fonttext,setFonttext]=useState("");

    return(
        <div >
<div className="mb-3">
<textarea name="richTextField" className="form-control" onChange={handlechange} style={{backgroundColor: props.mode==='dark'?'#cfd9e3':'white', color: props.mode==='dark'?'black':'#042743'}} value={text} id="mybox" rows="6" ></textarea>
</div>

<div>
<button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleLoClick}>Convert to LowerCase</button> 
<button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleUpclick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace} disabled={text.length===0}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2 my-2" onClick={handlefont} disabled={text.length===0}>click for fonts</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCopyText} disabled={text.length===0}>CopyText</button>
</div>

<div className="container text-light my-3 " >
<p style={{ color: props.mode==='dark'?'white':'#042743'}}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

  <h1 className="preview-heading" style={{ color: props.mode==='dark'?'white':'#042743'}}>Fonts</h1>
  <p style={{ fontFamily: fontv==='true'? 'cursive':'Goudy Bookletter 1911, sans-serif',color: props.mode==='dark'?'white':'#042743'}} > {fonttext}</p>
  <p style={{ fontFamily: fontv==='true'? "Trebuchet MS":'Goudy Bookletter 1911, sans-serif',color: props.mode==='dark'?'white':'#042743'}}> {fonttext}</p>
  <p style={{ fontFamily: fontv==='true'? "Bodoni MT":'Goudy Bookletter 1911, sans-serif',color: props.mode==='dark'?'white':'#042743'}}> {fonttext}</p>
  <p style={{ fontFamily: fontv==='true'? "Goudy Old Style":'Goudy Bookletter 1911, sans-serif',color: props.mode==='dark'?'white':'#042743'}}> {fonttext}</p>
  <p style={{ fontFamily: fontv==='true'? "Courier New":'Goudy Bookletter 1911, sans-serif',color: props.mode==='dark'?'white':'#042743'}}> {fonttext}</p>
  <p style={{ fontFamily: fontv==='true'? "Brush Script MT":'Goudy Bookletter 1911, sans-serif',color: props.mode==='dark'?'white':'#042743'}}> {fonttext}</p>
</div>
</div>
    )
}

export default Textforms;