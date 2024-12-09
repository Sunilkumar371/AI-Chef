import ReactMarkdown from "react-markdown"
export default function ClaudRecipe(props){
    return(
        <>
            
            <section>
                <h2>AI chef recommends:</h2>
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </section>
            
        </>
    )
}