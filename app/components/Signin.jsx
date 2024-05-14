import Link from "next/link";

const Signin = () => {
    return (
        <div>
            <Link
                href={"/api/auth/signin"}
                className="bg-sky-500 rounded py-2 px-3"
            >
                Login
            </Link>
        </div>
    );
};

export default Signin;
