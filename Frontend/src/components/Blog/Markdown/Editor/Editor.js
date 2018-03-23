import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons';

import 'draft-js-emoji-plugin/lib/plugin.css'
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';

import './Editor.css';

const emojiPlugin = createEmojiPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    CodeButton,
    Separator,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton
  ],
});

const { EmojiSuggestions } = emojiPlugin;
const { InlineToolbar } = inlineToolbarPlugin;

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

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={[emojiPlugin, inlineToolbarPlugin  ]}
          ref={(element) => { this.editor = element; }}
        />

        <EmojiSuggestions />
        <InlineToolbar/>
      </div>
    );
  }
}

export default App;