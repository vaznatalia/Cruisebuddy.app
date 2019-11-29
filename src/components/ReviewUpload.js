import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'your_upload_preset_id';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/your_cloudinary_app_name/upload';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          uploadedFileCloudinaryUrl: ''
        };
      }

    render() {
      <Dropzone
        multiple={false}
        accept="image/*"
        onDrop={this.onImageDrop.bind(this)}>
        <p>Drop an image or click to select a file to upload.</p>
      </Dropzone>
    }
    <Dropzone
  onDrop={this.onImageDrop.bind(this)}
  accept="image/*"
  multiple={false}>
    {({getRootProps, getInputProps}) => {
      return (
        <div
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {
          <p>Try dropping some files here, or click to select files to upload.</p>
          }
        </div>
      )
  }}
</Dropzone>