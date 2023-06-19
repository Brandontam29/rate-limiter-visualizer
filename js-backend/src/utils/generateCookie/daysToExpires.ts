const daysToExpires = (daysToLive: number | null) => {
  if (daysToLive === null) return null;

  const daysToMilliseconds = (days: number) => {
    return days * 24 * 60 * 60 * 1000;
  };

  const date = new Date();
  date.setTime(date.getTime() + daysToMilliseconds(daysToLive));

  return date.toUTCString();
};

export default daysToExpires;
