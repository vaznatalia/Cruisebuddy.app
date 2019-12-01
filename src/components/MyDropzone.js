import React, { Component } from 'react'


class MyDropzone extends Component {
  
  render() {
    const { fileSelectedHandler } = this.props;
      return (
       <div className="box" method="post"  > 
          <input  style={{display: 'none'}} className="box" type="file"  onChange={fileSelectedHandler} 
          ref={fileInput => this.fileInput = fileInput}/>
          <button  class="btn btn-light" onClick={() => this.fileInput.click()} >Attach photo</button>
          <button class="btn btn-light">Upload</button>     
        </div>
      )
     }
}

export default MyDropzone