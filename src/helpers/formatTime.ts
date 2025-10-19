export const formatHMMSS = (time: number): string => {
  const hours = Math.trunc(time / 3600);
  const seconds = (time % 3600) % 60;
  const minutes = Math.trunc((time % 3600) / 60);

  let timeString: string;
  const minutesStr: string = minutes.toString().padStart(2, "0");
  const secondsStr: string = seconds.toString().padStart(2, "0");

  if (hours > 0) {
    timeString = `${hours}:${minutesStr}:${secondsStr}`;
  } else {
    timeString = `${minutesStr}:${secondsStr}`;
  }

  return timeString;
};
