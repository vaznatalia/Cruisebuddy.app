import React from 'react'
import axios from 'axios'


class  MyDropzone extends React.Component {
  state ={
    selectedFile: null
  }
   fileSelectedHandler = event =>{
     this.setState({selectedFile: event.target.files[0]
    })
  }
  uploadHandler = () => {
    const formData = new FormData()
    formData.append(
      'myFile',
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    axios.post('http://localhost:4000", //&& "http://zip.thruhere.net:3001', formData)
  }
  
  
  render() {
      return (

  
       <div className="box" method="post"  >     
        <input  style={{display: 'none'}} className="box" type="file"  onChange={this.fileSelectedHandler } 
        ref={fileInput => this.fileInput = fileInput}/>
        <button  class="btn btn-light" onClick={() => this.fileInput.click()} >Attach photo</button>
         <button class="btn btn-light" onClick={this.UploadHandler}>Upload</button>
         
        </div>
      )
     }
}
     export default MyDropzone