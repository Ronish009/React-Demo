import React, {Fragment} from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component{
   constructor(props){
    super(props)   
   this.state={
       users:[],
       show: false
   }
   }

   componentDidMount(){
       UserService.getUser().then((respose)=>{
           console.log(respose)
          this.setState({users: respose.data})
          this.setState({show: true})
       });
   }

   render(){
   return (
   <div>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
       <h1 className="text-center">User List</h1>
       <table className="table table-striped"> 
            <thead>
              <tr class="text-primary">
                  <th>User Id:</th>
                  <th>User First Name:</th>
                  <th>User Last Name:</th>
                  <th>User Email Id:</th>
              </tr>
            </thead>
            <tbody class="text-center text-success">
           {    this.state.show ? (
                this.state.users.map(
                        user =>
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        </tr>

                )
            ) : (
                <br />
            )
            
           }
           
            </tbody>
            
       </table>
       {    !this.state.show ? (
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <div class="spinner-border text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            ) : (
                <br />
            )
        }
   </div>
   )
   }
}

export default UserComponent;