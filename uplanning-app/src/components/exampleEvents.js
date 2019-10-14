const now = new Date();

export default [
  {
    id: 0,
    title: "CC1000 - Control 1",
    allDay: true,
    start: new Date(2019, 9, 0),
    end: new Date(2019, 9, 1)
  },
  {
    id: 1,
    title: "CC1002 - Tarea 2",
    start: new Date(2019, 9, 7),
    end: new Date(2019, 9, 10)
  },
  {
    id: 2,
    title: "CC3001 - Examen",
    start: new Date(2019, 9, 12, 0, 0, 0),
    end: new Date(2019, 9, 12, 0, 0, 0),
    desc: "Big conference for important people"
  },
  {
    id: 4,
    title: "CC3001 - Examen 2",
    start: new Date(2019, 9, 15, 0, 0, 0),
    end: new Date(2019, 9, 15, 0, 0, 0),
    desc: "Big conference for important people"
  },
  {
    id: 3,
    title: "CC3101 - Control 3",
    start: new Date(2019, 10, 6, 0, 0, 0),
    end: new Date(2019, 10, 13, 0, 0, 0)
  },
  {
    id: 14,
    title: "CC3001 - Control 2",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3))
  },
  {
    id: 15,
    title: "CC1000 - Control 0  ",
    start: now,
    end: now
  }
];

