import { Outlet, useNavigate } from "react-router-dom";

export default function Contact() {

    const navigate = useNavigate();

    return (
        <>
            <div
                style={{
                    padding: "40px",
                    textAlign: "center",
                }}
            >
                <h1 style={{ color: "#0f132a" }}>
                    Contact Us
                </h1>

                <p style={{ fontSize: "18px", color: "gray" }}>
                    We'd love to hear from you. Choose any option below to contact us.
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "40px",
                        flexWrap: "wrap",
                    }}
                >
                    <button
                        onClick={() => navigate("tp")}
                        style={{
                            padding: "15px 25px",
                            backgroundColor: "#0f132a",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                        }}
                    >
                        Telephone
                    </button>

                    <button
                        onClick={() => navigate("ig")}
                        style={{
                            padding: "15px 25px",
                            backgroundColor: "#0f132a",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                        }}
                    >
                        Instagram
                    </button>

                    <button
                        onClick={() => navigate("fb")}
                        style={{
                            padding: "15px 25px",
                            backgroundColor: "#0f132a",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                        }}
                    >
                        Facebook
                    </button>
                </div>

                <div
                    style={{
                        marginTop: "50px",
                    }}
                >
                    <Outlet />
                </div>
            </div>
        </>
    );
}