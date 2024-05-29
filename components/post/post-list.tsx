import { PostCard } from "./post-card";

export const PostList = () => {
    return (
        <div className="w-full lg:w-[1024px] min-h-[calc(100vh_-_78px)] flex flex-col items-center py-4 gap-4">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    );
};
