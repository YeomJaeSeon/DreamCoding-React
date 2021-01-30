import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthService from './services/authService'
import UploadService from './services/uploadService'
import FileInputComponent from './components/FileInput/FileInput'
import Database from './services/databaseService'

const authService = new AuthService();
const uploadService = new UploadService();
const database = new Database();

const FileInput = (props) => <FileInputComponent {...props} uploadService={uploadService} />

ReactDOM.render(
  <React.StrictMode>
    <App database={database} authService={authService} uploadService={uploadService} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById("root")
);
