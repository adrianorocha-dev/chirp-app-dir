import { PostView } from "./PostView";

export const Feed = () => {
  const posts = [
    {
      id: "0b5d4bc0-719a-56a8-bcf9-85bd668488c3",
      content: "🐦",
      authorId: "",
      createdAt: new Date("2023-08-22T23:06:41-03:00"),
      author: {
        username: "example",
        profileImageUrl: "https://picsum.photos/400/400",
      },
    },
    {
      id: "4987860e-3f28-5e7a-9f97-4097df4224a5",
      content: "🚀🚀🚀",
      authorId: "",
      createdAt: new Date("2023-03-25T19:23:22-03:00"),
      author: {
        username: "example",
        profileImageUrl: "https://picsum.photos/400/400",
      },
    },
    {
      id: "8f293cb8-da2d-506a-81e2-0e6bed493734",
      content: "😎",
      authorId: "",
      createdAt: new Date("2023-12-27T07:59:22-03:00"),
      author: {
        username: "example",
        profileImageUrl: "https://picsum.photos/400/400",
      },
    },
    {
      id: "3d432264-23ce-516f-915b-4807c52526e0",
      content: "🐦",
      authorId: "",
      createdAt: new Date("2023-08-07T03:07:24-03:00"),
      author: {
        username: "example",
        profileImageUrl: "https://picsum.photos/400/400",
      },
    },
  ];

  return (
    <div className="flex grow flex-col overflow-y-scroll">
      {posts.map((post) => (
        <PostView key={post.id} post={post} />
      ))}
    </div>
  );
};
