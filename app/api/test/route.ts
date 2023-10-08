export async function GET() {
  const users = [
    {
      id: 1,
      username: "john_doe",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      username: "jane_doe",
      email: "jane.doe@example.com",
    },
    {
      id: 3,
      username: "sam_smith",
      email: "sam.smith@example.com",
    },
    {
      id: 4,
      username: "lisa_jones",
      email: "lisa.jones@example.com",
    },
    {
      id: 5,
      username: "mike_jackson",
      email: "mike.jackson@example.com",
    },
    {
      id: 6,
      username: "susan_williams",
      email: "susan.williams@example.com",
    },
    {
      id: 7,
      username: "david_brown",
      email: "david.brown@example.com",
    },
    {
      id: 8,
      username: "mary_davis",
      email: "mary.davis@example.com",
    },
    {
      id: 9,
      username: "peter_wilson",
      email: "peter.wilson@example.com",
    },
    {
      id: 10,
      username: "sara_taylor",
      email: "sara.taylor@example.com",
    },
  ];

  return Response.json(users);
}
