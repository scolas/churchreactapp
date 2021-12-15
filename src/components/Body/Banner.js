import React from "react";
import backgrounds from "/Users/scott/Documents/workspace/churchwebapp/src/assets/churchname.png";

class Banner extends React.Component {
render (){
    
    return(

    <div className="p-12">
        <img src={backgrounds} alt="Logo" />
        <br/>
    </div>
    
/*<div className="h-screen box-border border-4"  style={{ background: `url(${backgrounds})`, }}>
    <div className=" p-4  ">
        <div className="churchName">
            <h1 className="font-semibold text-blue-500 text-7xl">L'EGLISE PENTECOTE DE LA NOUVELLE GENERATION</h1>
        </div>
        <br/><br/>
        <div className=" text-blue-500 text-4xl pentecostal">
            Pentecostal Church of The New Generation
            <hr className=" text-red-500"/>
        </div>
        
        <br/><br/><br/>
        <div className="text-blue-500 text-4xl address">
            Pastor John & Jacqueline Celestin
        </div>
        
        <div className="text-blue-500 text-4xl address">
            Phone number (203) 450 - 8861
        </div>
    </div>

</div>*/);
    }


};


export default Banner;
