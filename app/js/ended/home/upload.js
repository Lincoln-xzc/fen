/**
 * Created by Lincoln on 2016/8/23.
 */
import React from 'react';
import {render} from 'react-dom';
import Dropzone from 'react-dropzone';
import 'whatwg-fetch';
import  SERVICE from '../../../api/config';

export default class Upload extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file: {
                'name':''
            },
            message: '',
            files: ''
        };
    }

    onImageDrop = (files) => {
        files.forEach((file)=> {
            var data = new FormData();
            data.append('file', file);
            fetch(SERVICE.END.IMAGES.UPLOAD, {
                method: 'POST',
                body: data
            }).then((response) => {
                return response.json();
            }).then((result) => {
               if(result.success){
                   document.getElementsByClassName('tip-3')[0].style.display = 'block';
                   this.setState({'message':'上传成功'});
               } else {
                   this.setState({'message': '上传失败'});
               }
            });
        });
    };


    onOpenClick(){
        this.refs.dropzone.open();
    }
    render(){
        return (
            <form encType="multipart/form-data">
                <h5 className="tip-3">{this.state.message}</h5>
                <Dropzone ref="dropzone" multiple={false} accept="image/*" onDrop={this.onImageDrop}>
                    <div>Try dropping some files here</div>
                </Dropzone>
                <button type="button" onClick={this.onOpenClick.bind(this)} style={{marginTop:20+'px'}}>
                    {this.state.files.length}Open Dropzone
                </button>
                {this.state.files.length > 0 ? <div>
                    <h2>Uploading {this.state.files.length} files...</h2>
                    <div>{this.state.files.map((file,i) => <img src={file.preview} key={i+1} /> )}</div>
                </div> : null}
            </form>
        )
    }
}