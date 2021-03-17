import {useState} from 'react';


const Header = () => {
    const [state, setstate] = useState("coucou");

    const callback = ()=>{
        if(state === "coucou")
            setstate("hello")
        else
            setstate("coucou")
    }



    return (
        <div>
            <button onClick={callback}>Clique-moi !</button>
            {state}
        </div>
    );
}

export default Header;
