import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
    const navigate = useNavigate();
    const [response, setResponse] = useState("");

    let token = window.localStorage.getItem("token");
    useEffect(() => {

        if (!token) {
            navigate("/");
            return;
        }

        fetch("https://perfume-store-backend.vercel.app/checkauth", {
            method: "GET",
            headers: {
                authorization: "bearer " + token
            }
        })
            .then((response) => {
                setResponse(response)
            })
            .catch((error) => {
                console.error(error)
                setResponse(false)
            })

    }, [navigate])

    if (response.status == 200) {
        return <>{children}</>
    }
    else if (response.status == 403) {
        window.localStorage.removeItem("token")
        navigate("/")
    }
}