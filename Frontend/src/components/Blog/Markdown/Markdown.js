import React from "react";
import MdAddCircleOutline from "react-icons/lib/md/add-circle-outline";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./Markdown.css";
let marked = require("marked");

const Markdown= (props) =>{
    const input = `# This is a header <a href="#">Hello World</a> And this is a paragraph`
    return (
        <Container>
            <Row>
                <Col  sm={{ size: 'auto', offset: 0 }}><MdAddCircleOutline className="addIconTitle"/>
                </Col>
                <Col ><div contentEditable="true" onInput={props.onChange("title")} className="input-lg"></div></Col>
            </Row>

            <Row>
                <Col  sm={{ size: 'auto', offset: 0 }}><MdAddCircleOutline className="addIconTitle"/></Col>
                <Col ><div contentEditable="true" 
                onInput={props.onChange("body")} 
                className="input-textarea"></div></Col>
            </Row>
            <Row>
                <Col>
                <Input style={{width:"50%",marginTop:20}} name="file" placeholder="Image URL" />
                <FormText color="muted">
                    Please copy an image URL here preferrably from imgur to add an image at the top 
                    of your blog post
                </FormText>
                </Col>
            </Row>
            <hr/>
            <div dangerouslySetInnerHTML = {{__html:marked(props.input)}}>
            </div>
            </Container>
    )
}

export default Markdown;