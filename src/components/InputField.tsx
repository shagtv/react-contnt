import './styles.css'
import {Dispatch, SetStateAction} from "react";

interface Props {
    todo: string,
    setTodo: Dispatch<SetStateAction<string>>
}

const InputField = ({todo, setTodo}: Props) => {
    return (
        <form className="input">
            <input
                type="input"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Enter a task"
                className="input__box"
            />
            <button className="input__submit" type='submit'>
                Go
            </button>
        </form>
    );
}
export default InputField;