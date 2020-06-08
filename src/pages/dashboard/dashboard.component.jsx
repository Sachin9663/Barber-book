import React from 'react';
import Firebase from "firebase";
import config from "../../component/firebase/firebase";

class DashBoard extends React.Component{
    constructor(props){
        super(props);
        Firebase.initializeApp(config);


        this.state = {
            developers: []
          };
    }

    




    componentDidMount() {
        this.getUserData();
      };




    getUserData = () => {
        let ref = Firebase.database().ref("/");
        ref.on("value", snapshot => {
          const state = snapshot.val();
          this.setState(state);
        });
      };





    removeData = developer => {
        const { developers } = this.state;
        const newState = developers.filter(data => {
          return data.uid !== developer.uid;
        });
        this.setState({ developers: newState });
      };
        
    

    render(){
        const { developers } = this.state;
        return(
            <div>
            <div className="row">
            <div className="col-xl-12">
              {developers.map(developer => (
                <div
                  key={developer.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
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
            </div>
        )
    }
}
export default DashBoard;