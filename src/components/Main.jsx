
import {Light} from "./Light";
import {Dark} from "./Dark";
import {Left} from "./Left";
import {DarkLeft} from "./DarkLeft"
import ToggleButton from "react-toggle-button";
import {useState} from "react";
import styled from "styled-components";

const Main = () => {
    const [state, setState] = useState({
        ParentOn: false,
    })
    const Div = styled.div`
    background-color: black`
    return (
        <div>

            {
                !state.ParentOn ? (
                    <Div>
                    <Left></Left>
                    <div style = {{marginLeft: "200px"}}>
        
                        <h2 style = {{float: "left"}}>My Dashboard</h2>
                        <div style = {{float: "left", marginTop: "30px", marginLeft: "200px"}}>
                            <ToggleButton inactiveLabel = "Dark" activeLabel = "Light" value = {state.ParentOn} onToggle = {value => {setState({...state, ParentOn: !value})}} />
                        </div>
                        
                    </div>
        
        
                    <Light></Light>
                    </Div>
                ) : (
                    <Div>
                        <DarkLeft></DarkLeft>
                        <div style = {{marginLeft: "200px"}}>
            
                            <h2 style = {{float: "left"}}>My Dashboard</h2>
                            <div style = {{float: "left", marginTop: "30px", marginLeft: "200px"}}>
                                <ToggleButton inactiveLabel = "Dark" activeLabel = "Light" value = {state.ParentOn} onToggle = {value => {setState({...state, ParentOn: !value})}} />
                            </div>
                            
                        </div>
            
            
                        <Dark></Dark>
                    </Div>
                )
            }


           </div> 

        
    )
}

export {Main};