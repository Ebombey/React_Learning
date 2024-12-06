interface WeatherProps {
  temp: number;
}

const Weather = ({ temp }: WeatherProps) => {
  return (
    <>
      {temp < 15 && <p>It's cold outside</p>}
      {temp < 25 && <p>It's nice outside</p>}
      {temp > 25 && <p>It's hot outside</p>}
    </>
  );
};

export default Weather;
