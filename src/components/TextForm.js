import React ,{ useState }from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
    console.log("UpperCase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UperCase!" , "success")
    }
    const handleLoClick=()=>{
      
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowerCase!" , "success")
      }
      const handleClearClick=()=>{
       
        let newText = '';
        setText(newText)
        props.showAlert("Cleared TextArea!" , "success")
        }
        const handleCopy=()=>{
        
          navigator.clipboard.writeText(text);
         
          props.showAlert("Copied!" , "success")
        }
        const handleExtraSpaces = () =>{
          let newText = text.split(/[ ]+/);
          setText(newText.join(" "))
          props.showAlert("Removed ExtraSpaces!" , "success")
        }
    const handelOnChange=(event)=>{
    console.log("On Change")
    setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white' : '#042743'}}>
        <h2 className="mb-2">{props.heading}</h2>
    <div class="mb-3">
     <textarea className="form-control" value={text}  onChange={handelOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e' : 'white' , color: props.mode==='dark'?'white' : '#042743'}} id='mybox' rows="4"></textarea>
    </div>
    <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Covert UpperCase </button>
    <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Covert lowercase </button>
    <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}> Clear Text </button>
    <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}> Copy Text </button>
    <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}> Remove Extra Spaces</button>
  </div>
  <div className='container my-2' style={{color: props.mode==='dark'?'white' : '#042743'}}>
    <h2>your text summery</h2>
    <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} <b> Minutes read </b></p>
    <h3>Preview</h3>
    <p>{text.length>0? text:"Nothing To Preview!"}</p>
  </div>
  </>
  )
}