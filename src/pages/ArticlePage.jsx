import { useParams } from "react-router-dom";

function ArticlePage(props) {
    let {id} = useParams();
    return (
        <h1>Article ID {id}</h1>
    )
}

export default ArticlePage;