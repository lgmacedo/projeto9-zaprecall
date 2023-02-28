export default function Flashcard({numero}){
    const num = 1;
    return(
        <div className={`Flashcard${num}`}>Pergunta {numero + 1}</div>
    );
}