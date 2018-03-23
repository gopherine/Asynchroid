import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import 'draft-js-emoji-plugin/lib/plugin.css'

const emojiPlugin = createEmojiPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();

const { EmojiSuggestions } = emojiPlugin;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  }

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={[emojiPlugin, inlineToolbarPlugin  ]}
        />
        <EmojiSuggestions />
      </div>
    );
  }
}

export default App;