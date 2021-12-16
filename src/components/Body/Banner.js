import React from "react";
import backgrounds from "../../assets/churchname.png";

class Banner extends React.Component {
render (){
    
    return(

    <div className="p-12">
        <img src={backgrounds} alt="Logo" />
        <br/>
    </div>
    );
    }


};


export default Banner;
