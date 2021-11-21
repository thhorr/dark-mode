import styled from "styled-components";


const Left = () => {

    const Wrapper = styled.div`
    position: absolute;
    left: 0%;
    right: 94.38%;
    top: 0%;
    bottom: 0%;
    width: 81px;
    height: 1024px;
    
    background: #FFFFFF;
    box-shadow: 0px 0px 5px #E5E9F2;
    `
    const Image = styled.div`
    width: 40px;
    height: 40px;

     background : url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzBpnouxDuF063trW5gZOyXtyuQaExCQVMYA&usqp=CAU");
    border-radius: 50%;
    background-repead : no-repeat;
    background-size : 40px 40px;
    margin-left: 20px;
    margin-top: 20px;
    float: left;
    `
    const Top = styled.div`
    
    `
    const Middle = styled.div`
        margin-top: 200px;
        
    `





    const Bottom = styled.div`
        margin-top: 200px;
    `
    return (
        <Wrapper>
            <Top>
                <Image />

            </Top>
            <Middle>
                <div style = {{textAlign: 'center'}}><img style = {{ width: "51px", height: "40px", borderRadius: "5px"}} src = "https://t4.ftcdn.net/jpg/01/26/09/55/240_F_126095599_eFIP8OFYe2lZXCeaAqKsDFBWIoUqqqxL.jpg" alt = "network" /></div>
                <div style = {{textAlign: 'center'}}><img style = {{ width: "51px", height: "40px", borderRadius: "5px"}} src = "https://t4.ftcdn.net/jpg/01/13/94/83/240_F_113948390_gRY4UwSTxm2bNX8jD2oIjpEuwJPELTTr.jpg" alt = "network" /></div>
            </Middle>
            <Bottom>
            <div style = {{textAlign: 'center'}}><img style = {{ width: "40px", height: "40px", borderRadius: "5px"}} src = "https://cdn-icons-png.flaticon.com/128/190/190250.png" alt = "network" /></div>

            </Bottom>
        
        </Wrapper>
    )
}

export {Left};