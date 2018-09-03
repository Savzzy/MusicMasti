import React,{Component} from 'react';
import './App.css';
import {FormGroup,FormControl,InputGroup,Glyphicon} from 'react-bootstrap';
class App extends Component{
    render(){
        return (
        <div className ="App">
            <div className="App-title">
                Music Master
            </div>
            <FormGroup>
                <InputGroup>
                    <FormControl
                            type="text"
                            placeholder="Search for artists"
                    /> 
                    <InputGroup.Addon>
                        <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>
                </InputGroup>
            </FormGroup>
            <div className="Profiles">
            <div>Artist Picture</div>
            <div>Artist Nmae</div>
            </div>
            <div className="Gallery">
            Gallery
            </div>

            
        </div> 
    );
    }
   

}
export default App;
