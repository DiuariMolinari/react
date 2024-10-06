import { MyStyleInput } from "./styles"

interface ButtonProps {
    onChange?: (value: string) => void;
    onClick?: React.MouseEventHandler;
}

function MyInput({ onChange, onClick} : ButtonProps) {
    return (
        <div>
            <MyStyleInput onChange={(event) => {
                if (onChange){
                    onChange(event.target.value)
                }
            }} 
            onClick={onClick}
        />
        </div>
    )
}

export default MyInput;