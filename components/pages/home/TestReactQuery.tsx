import React from "react";

const TestReactQuery = ({
  users,
}: {
  users: { id: string; username: string; email: string }[];
}) => {
  // const { data: users, isLoading } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await axios("http://localhost:3000/api/test");
  //     return res.data;
  //   },
  // });

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
};

export default TestReactQuery;
