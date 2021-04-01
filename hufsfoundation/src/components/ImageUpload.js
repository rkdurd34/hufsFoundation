import React, { useState } from 'react';
import axios from 'axios';
const BASE_URL = "http://localhost:5000";
axios.defaults.baseURL = "http://localhost:5000";


export default function ImageUpload() {
  const [content, setContent] = useState("");
  const [uploadedImg, setUploadedImg] = useState({
    fileName: "",
    fillPath: ""
  });
  const onChange = e => {
    console.log(e.target.files[0]);
    setContent(e.target.files[0]);
  };
  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", content);
    console.log('맞음...?');
    axios
      .post(`/board/upload`, formData)
      .then(res => {
        const { fileName } = res.data;
        console.log(fileName);
        setUploadedImg({ fileName, filePath: `${BASE_URL}/img/${fileName}` });
        // alert("The file is successfully uploaded");
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div>
      <>
        <form onSubmit={onSubmit} encType="multipart/form-data">
          {uploadedImg ? (
            <>
              <img style={{ width: "100px" }} src={uploadedImg.filePath} alt="" />
              <h3>{uploadedImg.fileName}</h3>
            </>
          ) : (
            ""
          )}
          <input type="file" name='img' onChange={onChange} />
          <button type="submit" >Upload</button>
        </form>
      </>
    </div>
  );
}
