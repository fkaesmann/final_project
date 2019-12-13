import React from "react";
import axios from "axios";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      starsign: "",
      age: 0,
      img: "",
      ltl: true
    };
    // t.string "name"
    // t.string "starsign"
    // t.integer "age"
    // t.string "img"
    // t.boolean "ltl"
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    // this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleChange(event) {
    // console.log("change event");
    this.setState({ [event.target.id]: event.target.value });
  }
  componentDidMount() {
    if (this.props.notice) {
      // this.setState({
      //   title: this.props.notice.title || "",
      //   author: this.props.notice.author || "",
      //   phone: this.props.notice.phone || "",
      //   id: this.props.notice.id || ""
      // });
    }
  }

  async handleAdd(event) {
    event.preventDefault();
    const obj = {
      name: this.state.name,
      age: this.state.age,
      starsign: this.state.starsign
    };
    console.log(obj);

    await axios.post("/users", obj);

    // this.getNotices();
  }
  handleSubmit(event) {
    event.preventDefault();
    // if (this.props.notice) {
    this.props.handleSubmit(event, {
      title: this.title,
      author: this.author,
      phone: this.phone,
      id: this.props.notice.id
    });
    // this.props.toggleForm();
    // } else {
    //   this.props.handleSubmit(event, {
    //     title: this.state.title,
    //     author: this.state.author,
    //     phone: this.state.phone
    //   }
    //   );
    // }

    // clear out form
    // this.setState({
    //   formInputs: {
    //     author: "",
    //     title: "",
    //     phone: ""
    //   }
    // });
  }
  render() {
    return (
      <footer>
        <center>
          <h2>Footer</h2>
        </center>
      </footer>
    );
  }
}

export default Footer;
