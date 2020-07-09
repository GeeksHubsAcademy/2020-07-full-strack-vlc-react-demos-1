
import React from "react";

import './register.css';


class Register extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            password: "",
            password2: "",
            msgError: "",

            isRegistered: false
        }
        //bindeamos la funcion al estado
        this.createRegister = this.createRegister.bind(this);
        
    };

    //aqui desarrollamos nuestras funciones
    handleChange = (ev) =>{
         
        this.setState({[ev.target.name]: ev.target.type === 'number' ? +ev.target.value : ev.target.value});
                            
    }

    createRegister (){
        
        //1 control de errores
        
        if(this.state.password !== this.state.password2){
            this.setState({msgError: "Los dos passwords deben coincidir"});
            return;
        }
        
        if(this.state.username === ""){
            
            return;
        }
        
        //2 aqui ya hemos comprobado todos los errores y procedemos a enviar al back
        

        //3 comunicación con el back y el back nos responde positivamente

        this.setState({isRegistered: true}, () => {
            //4 Redirección ...saliendo de aqui
            setTimeout(() => {
            
                this.props.history.push("/");
                
            }, 2000);
        });
        
        
        
    }

    //componentDidMount - el componente se ha montado
    componentDidMount(){
        console.log("El componente se ha montado");
    }

    //componentDidUpdate - el componente se ha actualizado
    componentDidUpdate(prevProps,prevState){   
        //console.log("El username es: ",this.state.username, "el username antes era: ", prevState.username);
    }

    //render
    render() {

        const isRegistered = this.state.isRegistered;

        if(isRegistered){
            return(
                <div>
                    TE HAS REGISTRADO {this.state.username}
                </div>
            );
        }else{
            return(

                <div className="containerRegister">
                    <div className="regLeft">
                        <input className="inputReg" type="text" placeholder="Nombre de usuario" name="username" value={this.state.username}  onChange={this.handleChange} ></input>
                        <input className="inputReg" type="text" placeholder="E-mail"  name="email" value={this.state.email}  onChange={this.handleChange} ></input>
                        <input className="inputReg" type="password" placeholder="Password"  name="password" value={this.state.password}  onChange={this.handleChange} ></input>
                        <span>{this.state.msgError}</span>
                        <input className="inputReg" type="password" placeholder="Repite password"  name="password2" value={this.state.password2}  onChange={this.handleChange} ></input>
                        <button onClick={this.createRegister}>REGISTER</button>
                    </div>
                    <div className="regRight">
                        <pre>{JSON.stringify(this.state, null,2)}</pre>
                    </div>
                </div>
            );
        }

        
    };
    
    
};


export default Register;