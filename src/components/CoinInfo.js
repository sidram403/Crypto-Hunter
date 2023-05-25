import React, { useEffect, useState } from "react";
import { CryptoState } from "../CryptoContext";
import { HistoricalChart } from "../config/api";
import axios from "axios";
import { CircularProgress, ThemeProvider, createTheme } from "@mui/material";
import "../App.css";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'
import { chartDays } from "../config/data";
import SelectButton from "./SelectButton";

function CoinInfo({ coin }) {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);

  const { currency } = CryptoState();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="info-container">
        {!historicData ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>  
          <Line
            data={{
              labels: historicData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days===1?time:date.toLocaleDateString()
                }),

                datasets:[
                    {
                        data: historicData.map((coin) => coin[1]),
                        label: `Price ( Past ${days} Days ) in ${currency}`,
                        borderColor:"#EEBC1D"
                    }
                ],
                
            }}
            options={{
                elements:{
                    point:{
                        radius:1,
                    }
                }
            }}
          />
          <div style={{ display:"flex", marginTop:20, justifyContent:"space-around", width:"100%"}}>
            {chartDays.map(day =>(
                <SelectButton key={day.value} onClick={() => setDays(day.value)} selected={day.value === days}>{day.label}</SelectButton>
            ))}
          </div>

        </>  
        )}
      </div>
    </ThemeProvider>
  );
}

export default CoinInfo;
