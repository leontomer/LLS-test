exports.users = [
  {
    userId: 0,
    userName: "Tomer",
    courses: [
      {
        courseId: 0,
        courseName: "Math",
        status: "available",
        courseOverview: {
          description: "welcome to math course",
          instructor: "Dr. Yehudit Bat Sheva",
        },
        lessons: [false, false, false, false, false],
      },
      {
        courseId: 1,
        courseName: "Physics",
        status: "in progress",
        courseOverview: {
          description: "welcome to Physics course",
          instructor: "Dr. Some Example",
        },
        lessons: [true, false, false, false, false],
      },
      {
        courseId: 3,
        courseName: "Computer science intro",
        status: "in progress",
        courseOverview: {
          description: "welcome to Computer science intro course",
          instructor: "Dr. Some Example",
        },
        lessons: [true, false, false, false, false],
      },
      {
        courseId: 4,
        courseName: "Data Structures",
        status: "completed",
        courseOverview: {
          description: "welcome to Data Structures course",
          instructor: "Mr. Some one",
        },
        lessons: [true, true, true, true, true],
      },
    ],
  },
  {
    userId: 1,
    userName: "Ronen",
    courses: [
      {
        courseId: 0,
        courseName: "Psychology ",
        status: "available",
        courseOverview: {
          description: "welcome to Psychology course",
          instructor: "Mr. Some one",
        },
        lessons: [false, false, false, false, false],
      },
      {
        courseId: 1,
        courseName: "Algebra",
        status: "in progress",
        courseOverview: {
          description: "welcome to Algebra course",
          instructor: "Mr. Tomer Levi",
        },
        lessons: [true, false, false, false, false],
      },
      {
        courseId: 2,
        courseName: "Computer science adv",
        status: "in progress",
        courseOverview: {
          description: "welcome to Computer science adv course",
          instructor: "Dr. Karin Levi",
        },
        lessons: [true, false, false, false, false],
      },
      {
        courseId: 3,
        courseName: "Tennis",
        status: "completed",
        courseOverview: {
          description: "welcome to Tennis course",
          instructor: "Mr. Nadal",
        },
        lessons: [true, true, true, true, true],
      },
    ],
  },
  {
    userId: 2,
    userName: "Yossi",
    courses: [
      {
        courseId: 0,
        courseName: "Math 2",
        status: "available",
        courseOverview: {
          description: "welcome to Math 2 course",
          instructor: "Dr. Karin Levi",
        },
        lessons: [false, false, false, false, false],
      },
      {
        courseId: 1,
        courseName: "Physics 2",
        status: "in progress",
        courseOverview: {
          description: "welcome to Physics 2 course",
          instructor: "Dr. Karim abed",
        },
        lessons: [true, false, false, false, false],
      },
      {
        courseId: 2,
        courseName: "Computer science intro",
        status: "in progress",
        courseOverview: {
          description: "welcome to Computer science intro course",
          instructor: "Dr. Karim abed",
        },
        lessons: [true, false, false, false, false],
      },
      {
        courseId: 3,
        courseName: "Data Structures 2",
        status: "completed",
        courseOverview: {
          description: "welcome to Data Structures 2 course",
          instructor: "Dr. Karim abed",
        },
        lessons: [true, true, true, true, true],
      },
    ],
  },
  {
    userId: 3,
    userName: "Eliot",
    courses: [
      {
        courseId: 0,
        courseName: "Math 3",
        status: "available",
        courseOverview: {
          description: "Math 3 course, very important course!",
          instructor: "Dr. Karim abed",
        },
        lessons: [false, false, false, false, false],
      },
      {
        courseId: 1,
        courseName: "Physics 3",
        status: "in progress",
        courseOverview: {
          description: "Physics 3 course, very important course!",
          instructor: "Dr. Karim abed",
        },
        lessons: [true, false, false, false, false],
      },
      {
        courseId: 2,
        courseName: "Computer science intro",
        status: "in progress",
        courseOverview: {
          description:
            "Computer science intro course, very important course! mandatory for every software engineer",
          instructor: "Dr. Karim abed",
        },
        lessons: [true, false, false, false, false],
      },
      {
        courseId: 3,
        courseName: "Algorithms",
        status: "completed",
        courseOverview: {
          description:
            "Algo course, very important course! mandatory for every software engineer",
          instructor: "Dr. Karim abed",
        },
        lessons: [true, true, true, true, true],
      },
    ],
  },
];
