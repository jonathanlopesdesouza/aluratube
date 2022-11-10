import React from "react";
import { StyledRegisterVideo } from "./styles";

//Custom Hook
function useForm(propsDoForm){
    const [values,setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (evento) => {
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name;
               setValues({
                ...values,
                [name]: value,
                });
            },
            clearForm(){
                setValues ({ })
            }
     };
}

export default function RegisterVideo(){
    const formCadastro = useForm({
        initialValues: { título: "", url: ""}
    });
    const[formVisivel, setFormVisivel] = React.useState(false);
    // [x]Falta o botão para adicionar
    // [x]Modal
    // []-> Precisamos controlar o state
    // -> Formulário em si

    return(
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>  
            {/* {Ternário} */}
            {/* {Operadores de curto-circuito} */}
            {formVisivel ? (
                <form onSubmit = {(evento) => {
                    evento.preventDefault();
                    console.log(formCadastro.values);

                    setFormVisivel (false);
                    formCadastro.clearForm();
                }}>
                <div>
                <button type="button" className="close-modal" onClick={( )=>setFormVisivel(false)}>
                    X
                </button>
                <input 
                    placeholder="Título do vídeo" 
                    name="título"
                    value={formCadastro.values.título} 
                    onChange={formCadastro.handleChange}
                />
                <input 
                
                placeholder="URL"
                name="url"
                value={formCadastro.values.url} 
                onChange={formCadastro.handleChange}
                />
                <button type="submit">
                    Cadastrar
                </button>
                </div>
            </form>
                
            )
        : false}
            
        </StyledRegisterVideo>
    )
}

