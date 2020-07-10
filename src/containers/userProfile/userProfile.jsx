
import React from "react";

import axios from "axios";


class Profile extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            profile : [],
            isLoading: true,
            phone: ""
        }
        
    };

    async componentDidMount(){
        //El componente se ha montado

        let email = "pruebad@prueba.com"

        try {
            //Procedo a llamar al endpoint que me trae los datos del usuario para su perfil
            let res = await axios.get( `http://aquiintroducimoselendpoint/perfil/get?email=${email}` );

            this.setState({profile : res});
        } catch (err) {

        }

        this.setState({isLoading: false});

    }

    async modifyProfile(){

        try {

            let body = {
                username: this.state.profile.username,
                surname: this.state.profile.surname,
                phone: this.state.phone
            }

            await axios.post('/product/edit?token=${sessionData.token}', body);

        } catch (err) {

        }
    }
    
    render() {

        if(this.state.isLoading === true){
            
            return(<div>
                <img src="img/91.gif" alt=""/>
            </div>
            );
        }else {
            if(this.state.profile == null){
                return(
                    <div>
                        Lo sentimos pero no hemos encontrado los datos;
                    </div>
                );
            }
                
            return(
                <div>
                    {this.state.profile}
                    <button onClick={this.modifyProfile}>Modificar</button>
                </div>
            );
            
        }
        
    };
    
};


export default Profile;