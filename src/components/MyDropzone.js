import React, { Component } from 'react'


class MyDropzone extends Component {
   
  render() {
    const { fileSelectedHandler } = this.props;
      return (
        
        <div >
         
          <div >
          <h5 style={{padding: '1rem', }}> Write your review</h5>
         <textarea style={{ width: '582px',
          height: '330px'}} 
        
          aria-label="With textarea">

          </textarea>
           </div>
          <h5 style={{padding: '1.5rem', }}> Attach photos:</h5>
         <div className="box" method="post"  > 
          
          <input  style={{display: 'none'}}  type="file"  onChange={fileSelectedHandler} 
          ref={fileInput => this.fileInput = fileInput}/>
          <button  class="btn btn-light" onClick={() => this.fileInput.click()} >Upload photo</button>
          <button  style={{display: 'none'}} class="btn btn-light">Upload</button>   
       
        </div>
        <button  class="btn btn-primary" onClick={() => this.fileInput.click()} >Post    Review</button>
        </div>
      )
     }
}

export default MyDropzone