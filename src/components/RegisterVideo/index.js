import React from "react";
import { StyledRegisterVideo } from "./styles";
import {createClient} from "@supabase/supabase-js";


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

const PROJECT_URL = "https://zripqjqhpoqxxafzgpqv.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyaXBxanFocG9xeHhhZnpncHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzIyMjMsImV4cCI6MTk4Mzc0ODIyM30.2cz5kQbKpKe5e3z6oMpzbDbJePcr2lI0FoJ2n6aOBKs";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

//get youtube thumbnail from video url
function getThumbnail(){
    return `https://img.youtube.com/vi/${url.split("v=" [1])}/hqdefault.jpg`;
}



export default function RegisterVideo(){
    const formCadastro = useForm({
        initialValues: { título: "", url: ""}
    });
    const[formVisivel, setFormVisivel] = React.useState(false);
    console.log();

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

                    //Contrato entre o nosso Front e o BackEnd
                    supabase.from("video").insert({
                        title: formCadastro.values.título,
                        url: formCadastro.values.url,
                        thumb: getThumbnail(formCadastro.values.url),
                        playlist: "jogos",
                    })
                    .then((oqueveio)=>{
                        console.log(oqueveio);
                    })
                    
                    .catch(()=>{
                        console.log(err);
                    })

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

