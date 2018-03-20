import React from "react";
import ReactMarkdown from "react-markdown";

const Markdown= (props) =>{
    const input = '# This is a header\n\nAnd this is a paragraph'
    return (
        <div className="container-fluid">
            <h1>
                This is markdown
            </h1>
            <ReactMarkdown source={input}/>
        </div>
    )
}

export default Markdown;