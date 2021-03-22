import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Title from "./components/Title";
import Header from "./components/Header";
import Footer from './components/Footer';
function App() {
  const [content, setContent] = useState("");
  const [uploadedImg, setUploadedImg] = useState({
    fileName: "",
    fillPath: ""
  });
  const onChange = e => {
    setContent(e.target.files[0]);
  };
  const onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", content);
    axios
      .post("/board/upload", formData)
      .then(res => {
        const { fileName } = res.data;
        console.log(fileName);
        setUploadedImg({ fileName, filePath: `${BASE_URL}/img/${fileName}` });
        alert("The file is successfully uploaded");
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <BrowserRouter>
      <Header />
      <Title />
      <main>
        <div>
          <>
            <form onSubmit={onSubmit}>
              {uploadedImg ? (
                <>
                  <img src={uploadedImg.filePath} alt="" />
                  <h3>{uploadedImg.fileName}</h3>
                </>
              ) : (
                ""
              )}
              <input type="file" onChange={onChange} />
              <button type="submit">Upload</button>
            </form>
          </>
        </div>
        {/* <Route path="/map" component={MapScreen} />
        <Route path="/business" component={BusinessScreen} />
        <Route path="/group" component={GroupScreen} />
        <Route path="/funding" component={FundingScreen} />
        <Route path="/association" component={AssociationScreen} />
        <Route path="/history" component={HistoryScreen} />
        <Route path="/foundation" component={FoundationScreen} />
        <Route path="/greeting" component={GreetingScreen} />

        <Route path="/update/:id/:board" component={UpdatePost} />
        <Route path="/create/:id" component={CreatePost} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />

        <Route path="/news" component={NewsScreen} />
        <Route path="/events" component={EventsScreen} />
        <Route path="/postdetail/:id/:board" exact={true} component={PostDetail} />
        <Route path="/community" exact={true} component={CommunityScreen} />
        
        <Route path="/archive" exact={true} component={ArchiveScreen} />

        <Route path="/about" component={AboutScreen} />
        <Route path="/plan" component={PlanScreen} />
        <Route path="/studies" exact={true} component={StudyScreen} />

        <Route path="/pastmento" component={pMentoScreen} />
        <Route path="/paststory" component={pStoryScreen} />
        <Route path="/past" component={PastScreen} />
        <Route path="/story" component={StoryScreen} />
        <Route path="/mento" component={MentoScreen} />
        <Route path="/programs" component={ProgramScreen} />

        <Route path="/under" exact={true} component={UnderConstruction} />
        <Route path="/" exact={true} component={HomeScreen} /> */}
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
