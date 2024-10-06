import { Button } from "./styles"

function MyButton({myText} : { myText: string} ) {
    return (
        <div>
            <Button>{myText}</Button>
        </div>
    )
}

export default MyButton;