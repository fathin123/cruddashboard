import React, {Component} from "react";
import './Dashboard.css';
import Post from "../../component/Dashboard/Admin";

class Dashboard extends Component{
    state ={
        dataAdmin: []
    }

    ambilDataDariSErverAPI = () => {
        fetch('http://localhost:3001/admin')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI => {
            this.setState({
                dataAdmin: jsonHasilAmbilDariAPI
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariSErverAPI()
    }

    render() {
        return(
             <div>
                 <h2>Daftar Admin</h2>
                 {
                     this.state.dataAdmin.map(admin => {
                         return <Post key={admin.id} nama={admin.nama} alamat={admin.alamat} nohp={admin.nohp}/>
                     })
                 }
             </div>

        )
    }
}

export default Dashboard;