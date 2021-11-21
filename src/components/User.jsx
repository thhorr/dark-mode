
import styled from "styled-components";


const User = ({data}) => {



    const Wrapper = styled.div`
        
        
        
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px #E5E9F2;
        border-radius: 5px;
        display: grid;
        grid-template-rows: 80% 20%;
        grid-gap: 10px;
        padding-top: 30px;
        padding-bottom: 30px;
    `

    const Top_container = styled.div`
        display: grid;
        grid-template-columns: 10% 80% 0%;

    `
    const Image = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-repead : no-repeat;
        background-size : 40px 40px;

    `
    const Name_add = styled.div`
        display: flex;
        flex-direction: column;

    `
    const ThreeDot = styled.div`
        width: 40px;
        height: 40px;
        background : url("https://pbs.twimg.com/profile_images/821080734102220800/PANTqUmu.jpg");
        border-radius: 50%;
        background-repead : no-repeat;
        background-size : 40px 40px;
    `
    const Bottom_container = styled.div`
        width: 100%;
    `

    return (
        <Wrapper>
            <Top_container>
                <Image style = {{background : `url(${data.image})`, backgroundRepeat : "no-repeat", backgroundSize :" 40px 40px"}}></Image>
                <Name_add>
                    <div>{data.name}</div>
                    <div style = {{color: "gray"}}>{data.add}</div>
                </Name_add>
                <ThreeDot></ThreeDot>
            </Top_container>
            <Bottom_container>
                <div style = {{width: "100%"}}>
                    <div style = {{width: "100%", height: "5px", backgroundColor: "#E5E9F2", borderRadius: "3px"}}></div>
                    <div style = {{width: `${data.width}`, height: "6px", backgroundColor: `${data.color}`, borderRadius: "3px", marginTop: "-5px"}}></div>
                    
                </div>
                <div>
                    <div style= {{float: "left"}}>{data.level}</div>
                    <div style = {{fontWeight: "bolder", float : "right"}}>{data.points} points</div>
                </div>
            </Bottom_container>

        </Wrapper>
    )
}
export {User};