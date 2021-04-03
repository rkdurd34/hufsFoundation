import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Title from "./components/Title";
import Header from "./components/Header";
import Footer from './components/Footer';

import IntroScreen from './container/IntroScreen';
import Home from './container/Home';
import Board from './container/Board';

import CreatePost from "./components/Summernote";
import ImageUpload from './components/ImageUpload';
import Post from './container/Post';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <main>
        <Route path="/create/:id" component={CreatePost} />
        <Route path="/image/upload" exact component={ImageUpload} />
        <Route path='/' exact component={Home} />
        <Route path='/intro' exact component={IntroScreen} />
        <Route path='/board' exact component={Board} />
        <Route path="/board/:id" exact component={Post} />
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
