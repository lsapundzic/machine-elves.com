import axios from "axios";

import {useEffect, useState} from "react";

const Body = () => {
    const [note, newNote] = useState([]);

    return (
        <div>
            <p>Hello from the body. This is where the API call will be</p>
        </div>);
};

export default Body;
