import React from "react";

import Firebase from "firebase";
import config from "../firebase/firebase";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      developers: []
    };
  }

  

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let mobileno= this.refs.mobileno.value;
    let address = this.refs.address.value;
    let phoneno= this.refs.phoneno.value;
    let uid = this.refs.uid.value;

    if (uid && name && email && mobileno && address &&phoneno) {
      const { developers } = this.state;
      const devIndex = developers.findIndex(data => {
        return data.uid === uid;
      });
      developers[devIndex].name = name;
      developers[devIndex].email = email;
      developers[devIndex].mobileno = mobileno;
      developers[devIndex].address= address;
      developers[devIndex].phoneno= phoneno;
      this.setState({ developers });
    } else if (name && email && mobileno && address &&phoneno)  {
      const uid = new Date().getTime().toString();
      const { developers } = this.state;
      developers.push({ uid, name, email, mobileno, address, phoneno  });
      this.setState({ developers });
    }

    this.refs.name.value = "";
    this.refs.email.value ="";
    this.refs.mobileno.value="";
    this.refs.address.value="";
    this.refs.phoneno.value="";
    this.refs.uid.value="";
  };

  

//  

  render() {
    
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>book now</h1>
            </div>
          </div>
          
          <div className="row">
            <div className="col-xl-12">
              
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      ref="email"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Mobile No</label>
                    <input
                      type="number"
                      ref="mobileno"
                      className="form-control"
                      placeholder="Mobile no"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Address</label>
                    <input
                      type="text"
                      ref="address"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Phone No</label>
                    <input
                      type="number"
                      ref="phoneno"
                      className="form-control"
                      placeholder="Phone no"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  book
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </React.Fragment>
    );
  }
}

export default Reservation;
