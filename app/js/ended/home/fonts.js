/**
 * Created by Lincoln on 2016/8/23.
 */
import React from 'react';
import {render} from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';
import {Button, FormGroup, FormControl, Col, ControlLabel, Table, Modal, Form} from 'react-bootstrap';
import 'whatwg-fetch';
import  SERVICE from '../../../api/config';

export default class Fonts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            showModal: false,
            title: '',
            content: '',
            contents: []
        };

        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => this.setState({editorState});
        this.handleKeyCommand = (command) => this._handleKeyCommand(command);
        this.onTab = (e) => this._onTab(e);
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    }

    componentDidMount(){
        let contents = [];
        fetch(SERVICE.END.FONTS.LIST,{
            method: 'POST',
            headers: SERVICE.HEADERS
        }).then((response) => {
            return response.json();
        }).then((result) => {
            contents = result.data;
            this.setState({'contents': contents});
        });

    }
    _handleKeyCommand(command) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _onTab(e) {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    close =() => {
        this.setState({showModal: false});
    };

    cancel =() => {
        this.setState({showDetail: false});
    };

    add =() => {
        this.setState({showModal: true});
    };

    open =(content) => {
        this.setState({title: content.title});
        this.setState({showDetail: true});
    };

    handleTitleChange = (e) => {
        let title = e.target.value;
        this.setState({'title': title})
    };

    commit =()=> {
        console.log(this.state.editorState);
        const public_content =  document.getElementsByClassName("public-DraftEditor-content")[0].children;
        const ele = public_content[0].innerHTML;
        fetch(SERVICE.END.FONTS.ADD,{
            method: 'POST',
            headers: SERVICE.HEADERS,
            body: JSON.stringify({
                'title': this.state.title,
                'element': ele,
                'content': this.state.content
            })
        }).then((response) =>{
            return response.json();
        }).then((result) => {
            this.setState({showModal: false});
        })
    };

    deleteBy = (id) =>{
        fetch(SERVICE.END.FONTS.DELETE+id, {
            method: 'POST',
            headers: SERVICE.HEADERS
        }).then((response) => {
            return response.json();
        }).then((result) => {
            console.log(result);
        })
    };

    render() {
        const {editorState} = this.state;

        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }
        return (
            <div>
                <h4>文章列表</h4>
                <div>
                    <Button bsStyle="success" bsSize="small"  style={{marginBottom:5+'px',display:'block'}} onClick={(e) => this.add()}>新增</Button>
                </div>
                <Table responsive hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>标题</th>
                        <th>内容</th>
                        <th>创建人</th>
                        <th>创建时间</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.contents.map((content, i) => <tr key={i+1}>
                        <td>{i+1}</td>
                        <td>{content.title}</td>
                        <td>{content.content}</td>
                        <td>{content.create_time}</td>
                        <td>{content.create_name}</td>
                        <td>
                            <Button bsStyle="danger" bsSize="small" onClick={(e) => this.deleteBy(content.id)}>删除</Button>
                        </td>
                    </tr>)}
                    </tbody>
                </Table>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>新增详情</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FormGroup style={{paddingBottom:0,paddingTop:10 +'px'}}>
                                <Col componentClass={ControlLabel}>
                                    <FormControl type="text" value={this.state.title}  placeholder = '请输入文章标题' onChange={this.handleTitleChange} size="30" style={{display:'inline'}}/>
                                </Col>
                            </FormGroup>
                            <div className="RichEditor-root">
                                <BlockStyleControls
                                    editorState={editorState}
                                    onToggle={this.toggleBlockType}
                                    />
                                <InlineStyleControls
                                    editorState={editorState}
                                    onToggle={this.toggleInlineStyle}
                                    />
                                <div className={className} onClick={this.focus}>
                                    <Editor
                                        blockStyleFn={getBlockStyle}
                                        customStyleMap={styleMap}
                                        editorState={editorState}
                                        handleKeyCommand={this.handleKeyCommand}
                                        onChange={this.onChange}
                                        onTab={this.onTab}
                                        placeholder="请输入文章内容"
                                        ref="editor"
                                        value={this.state.content}
                                        spellCheck={true}
                                        />
                                </div>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>关闭</Button>
                        <Button onClick={this.commit}>新增</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2
    }
};

function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        default: return null;
    }
}

class StyleButton extends React.Component {
    constructor() {
        super();
        this.onToggle = (e) => {
            e.preventDefault();
            this.props.onToggle(this.props.style);
        };
    }

    render() {
        let className = 'RichEditor-styleButton';
        if (this.props.active) {
            className += ' RichEditor-activeButton';
        }

        return (
            <span className={className} onMouseDown={this.onToggle}>
              {this.props.label}
            </span>
        );
    }
}

const BLOCK_TYPES = [
    {label: 'H1', style: 'header-one'},
    {label: 'H2', style: 'header-two'},
    {label: 'H3', style: 'header-three'},
    {label: 'H4', style: 'header-four'},
    {label: 'H5', style: 'header-five'},
    {label: 'H6', style: 'header-six'},
    {label: 'Blockquote', style: 'blockquote'},
    {label: 'UL', style: 'unordered-list-item'},
    {label: 'OL', style: 'ordered-list-item'},
    {label: 'Code Block', style: 'code-block'},
];

const BlockStyleControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
                    <StyleButton
                        key={type.label}
                        active={type.style === blockType}
                        label={type.label}
                        onToggle={props.onToggle}
                        style={type.style}
                        />
            )}
        </div>
    );
};

var INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
    {label: 'Monospace', style: 'CODE'},
];

const InlineStyleControls = (props) => {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div className="RichEditor-controls">
            {INLINE_STYLES.map(type =>
                    <StyleButton
                        key={type.label}
                        active={currentStyle.has(type.style)}
                        label={type.label}
                        onToggle={props.onToggle}
                        style={type.style}
                        />
            )}
        </div>
    );
};
const styles = {
    root: {
        fontFamily: '\'Helvetica\', sans-serif',
        padding: 20,
        width: 600,
    },
    editor: {
        border: '1px solid #ccc',
        cursor: 'text',
        minHeight: 80,
        padding: 10,
    },
    button: {
        marginTop: 10,
        textAlign: 'center',
    },
};