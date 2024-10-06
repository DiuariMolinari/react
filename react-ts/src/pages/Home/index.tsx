import { Title } from "./styles.ts"
import { useState } from "react";
import MyButton from "../../components/Button";
import MyInput from "../../components/Input/index.tsx";
import {Element} from "../../utils/element.ts";

interface HomeProps {
    instancia: Element;
}

function Home({instancia} : HomeProps)  {
    const [user, userName] = useState('');

    if (instancia.countSubElements > 0) {
        //todo
    }
    return (
        <div>
            <Title>Home {user}</Title>
            <MyInput onChange={userName} onClick={() =>{ alert(`Olá ${user}`) }}></MyInput>
            <MyButton myText={"salvar"} />
        </div>
    )
}

export default Home;