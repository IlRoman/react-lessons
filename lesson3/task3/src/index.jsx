import React from "react";
import ReactDOM from 'react-dom';
import "./styles.css";
import "./index.scss";
import Comment from "./Comment";

const rootElem = document.querySelector('#root');

const userInfo = {
    name: 'Tom',
    avatarUrl: 'https://lh3.googleusercontent.com/proxy/oUb1FZ-xyAkM1cFjtpv4EjnVZc2Iij15owdtTSWwd0GaTO178biRcH-RI1LjifIZCDft6Ipr77d-Ojn-PaZ4-dzNc2ao-fdHNbp5Ehvra9HEnz8WSUt_MRHiNtTzP2fomViB3KQIXWg'
};

ReactDOM.render(
    <Comment
        user={userInfo}
        text="Good job!"
        date={new Date("2019-01-05T15:32:19.566Z")}
    />,
    rootElem
);