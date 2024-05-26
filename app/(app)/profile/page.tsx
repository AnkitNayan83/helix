import { auth } from "@/auth";

const ProfilePage = async () => {
    const session = await auth();
    return (
        <div>
            <p>{JSON.stringify(session)}</p>
        </div>
    );
};

export default ProfilePage;