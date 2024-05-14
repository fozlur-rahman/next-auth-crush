import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Signin from "./Signin";
import Signout from "./Signout";

const Header = async () => {
    const session = await auth();
    console.log(session);
    return (
        <nav className=" bg-white py-2 text-black">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo ">Fozlur</div>
                {session?.user ? (
                    <div className="flex gap-4 items-center">
                        <h3>{session?.user?.name}</h3> |{" "}
                        <Image
                            src={session?.user?.image}
                            alt="image"
                            height={50}
                            width={50}
                            className="rounded-full"
                        />
                        <Signout />
                    </div>
                ) : (
                    <Signin />
                )}
            </div>
        </nav>
    );
};

export default Header;
