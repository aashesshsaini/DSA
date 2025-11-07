let shows = [{ id: 1, movie: "Thron", seats: new Array(10).fill(false) }];

const bookTicket = function (userId, showId, seatNo) {
  const show = shows.find((show) => show.id === showId);
  if (!show || show.seats[seatNo]) {
    return `Movie ${show.movie} is already booked for seat number ${seatNo} `;
  }
  console.log(shows);
  show.seats[seatNo] = true;
  console.log(shows);

  return `Movie ${show.movie} is booked for ${seatNo}`;
};

console.log(bookTicket("a", 1, 0));
