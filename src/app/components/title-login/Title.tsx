import './title.css'
export default function Title ({content, description}){
    return (
        <>
            <div className="title-login">
                <h2>{content}</h2>
                <p>{description}</p>
            </div>
        </>
    )
}