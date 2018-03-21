import React, { Component } from 'react';
import Markdown from "../../components/Blog/Markdown/Markdown";

const initialSource = `
# Live demo
Changes are automatically rendered as you type.
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>
## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`
Pretty neat, eh?
## Tables?
| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal
`

class BlogPost extends Component {
  state={
    title:`Title`,
    body:initialSource
  }

  
  handleChange=identify=>event=>{
    const state={
      ...this.state
    }
    state[identify]= event.target.innerText
    this.setState({[identify]:state[identify]})
  }


  render() {
    const input=`# ${this.state.title} \n\n ${this.state.body}`;
    return (
      <div style={{marginTop:20}}>
      <div className="container">
        <h1> Write your own Story</h1>
        <hr/>
        </div>
          <Markdown onChange={this.handleChange} input={input}/>
      </div>
    );
  }
}

export default BlogPost;