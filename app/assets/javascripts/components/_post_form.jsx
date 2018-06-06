class PostForm extends React.Component {
  constructor(props) { //props define immutale state
    super(props); //allows access the constructor method of the parent class
    this.state = { //from where data comes from
      //props.post is our Rails post record.
      title: props.post.title || ' ',
      content: props.post.content || ' '
    };
    //binding actions
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  };

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

  render() {
    var myStyle = {
         width: '180px',
         float: 'left'
      }
    return (
      <div>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="post[title]"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />

          <label>Content</label>
          <input
            type="text"
            name="post[content]"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
        </div>
        <div style = {myStyle}><b>Title: </b>{this.state.title}</div>
        <div><b>Content: </b>{this.state.content}</div>
        <input type="submit" value="Submit" />
      </div>

    );
  }
}