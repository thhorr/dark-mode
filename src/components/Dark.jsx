
import styled from "styled-components";
import {DarkUser} from "./DarkUser";

const Dark = () => {



    const Wrapper = styled.div`
        position: absolute;
        left: 8.47%;
        right: 70.14%;
        top: 11.04%;
        bottom: 38.77%;
        width: 500px;
        padding: 30px;
        box-shadow: 0px 1px 4px #E5E9F2;
        border-radius: 5px;
    `
    let obj = {
        name : "Nrupul",
        add : "Bangalore, India",
        level : "Professional Level 15",
        points : "4773",
        color: "#29CB97",
        width: "70%", 
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBpnouxDuF063trW5gZOyXtyuQaExCQVMYA&usqp=CAU"
    }
    let obj2 = {
        name : "Prateek",
        add : "Bangalore, India",
        level : "Professional Level 11",
        points : "3223",
        color : "#4072EE",
        width: "50%", 
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4h1B8CMfadXgfKeNcNleBEARIvHzdnjZRw&usqp=CAU"
    }
    let obj3 = {
        name : "Aman",
        add : "Bangalore, India",
        level : "Professional Level 11",
        points : "233",
        width: "30%", 
        color: "#B558F6",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-p9ThJctQTssrg3-NP4nUFYT_BH-AVQXOw&usqp=CAU"
    }
    const Active = styled.div`
        width: 88%;
        height: 100px;
        padding: 30px;
        color: white;
        background-color: black;
    `

    return (
        <Wrapper>
            <Active>
                <div style = {{float: "left"}}>Active Users</div>
                <div style = {{float : "right"}}>for August 2020</div>
            </Active>
            <div style = {{marginTop: "-100px"}}>
                <DarkUser data = {obj} />
                <DarkUser data = {obj2}/>
                <DarkUser data = {obj3} />
            </div>

        </Wrapper>
    )
}
export {Dark};