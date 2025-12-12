import { useSearchParams } from "react-router-dom";

function WatchPage(props) {
    let [searchParamsObj, setSearchParamsObj] = useSearchParams();
    return (
        <h1>Watch video ID {searchParamsObj.get("video")}</h1>
    )
}

export default WatchPage;