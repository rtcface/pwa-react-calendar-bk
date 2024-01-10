db.createUser({
    user: "calendar-user",
    pwd: "123456",
    roles: [
      {
        role: "readWrite",
        db: "mern_calendar",
      },
    ],
  });
  