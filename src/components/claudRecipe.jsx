import ReactMarkdown from "react-markdown"
export default function ClaudRecipe(props){
    return(
        <>
            <h2>AI chef recommends:</h2>
            <section>
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </section>
            
        </>
    )
}