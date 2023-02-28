export default function Footer({doneCards, totalCards}){
    return(
        <div className="Footer">
            <p>{doneCards}/{totalCards} CONCLUÍDOS</p>
        </div>
    );
}