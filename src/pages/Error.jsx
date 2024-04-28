import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="flex justify-center items-center my-5">
                <img src="https://i.ibb.co/8YH7WX6/Screenshot-2024-04-28-124904.jpg" alt="" />
            </div>
            <div className="flex justify-center items-center  text-center">
                <div>
                    <p>Go to home page</p>
                    <Link to="/"><button className="text-blue-400 underline font-bold">Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;