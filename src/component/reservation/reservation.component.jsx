import React from "react";

import Firebase from "firebase";
import config from "../firebase/firebase";
import './reservation.style.scss'

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    this.getUserData();
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

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
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

  removeData = developer => {
    const { developers } = this.state;
    const newState = developers.filter(data => {
      return data.uid !== developer.uid;
    });
    this.setState({ developers: newState });
  };

  updateData = developer => {
    this.refs.uid.value = developer.uid;
    this.refs.name.value = developer.name;
    this.refs.email.value = developer.email;
    this.refs.mobileno.value = developer.mobileno;
    this.refs.address.value = developer.address;
    this.refs.phoneno.value = developer.phoneno;
    
  };

  render() {
    const { developers } = this.state;
    return (
      <React.Fragment>
      <div className='reservation'>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Booked</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {developers.map(developer => (
                <div
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body" >
                    <h5 className="card-title">{developer.name}</h5>
                    <p className="card-text">{developer.email}</p>
                    <p className="card-text">{developer.mobileno}</p>
                    <p className="card-text">{developer.address}</p>
                    <p className="card-text">{developer.phoneno}</p>
                    
                    <button
                      onClick={() => this.removeData(developer)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    {/* <button
                      onClick={() => this.updateData(developer)}
                      className="btn btn-link"
                    >
                      Edit
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h1>book now</h1>
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
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      ref="email"
                      className="form-control"
                      placeholder="email"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Mobile No</label>
                    <input
                      type="tel"
                      ref="mobileno"
                      className="form-control"
                      placeholder="Mobile no"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Address</label>
                    <input
                      type="text"
                      ref="address"
                      className="form-control"
                      placeholder="Address"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Phone No</label>
                    <input
                      type="tel"
                      ref="phoneno"
                      className="form-control"
                      placeholder="Phone no"
                      
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
         </div> 
        </div>
      </React.Fragment>
    );
  }
}

export default Reservation;
