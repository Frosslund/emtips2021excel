import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_SHEET_API_KEY;
const SHEET_ID = "1BgP_mbAc7kn1rxV6_ROBbG-WOoVBX5hD5xfgFbqxQDU";
const RANGE = "Resultat & Tabell!GJ4:GK71";

const StartView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        setData(response.data.values);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // Optionally, you can set an interval to refresh the data periodically
    const intervalId = setInterval(fetchData, 180000); // Refresh every 3rd minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="start-page">
      <div className="top-list">
        <h2>TOPPLISTA</h2>
        {loading ? (
          <div className="loader"></div>
        ) : (
          <ol>
            {error ? (
              <p style={{ fontSize: "20px" }}>Kunde inte hämta data</p>
            ) : (
              data.map((participant, index) => {
                let topThree = index < 3;
                return (
                  <li
                    key={index}
                    style={{
                      fontSize: topThree ? "22px" : "18px",
                      fontWeight: topThree ? "bold" : "normal",
                    }}
                    className="top-list-item"
                  >
                    <span style={{ paddingLeft: topThree ? "0" : "6px" }}>
                      {!topThree && index + 1 + ". "}
                      {index < 1 && "🥇 "}
                      {index === 1 && "🥈 "}
                      {index === 2 && "🥉 "}
                      {participant[0]}
                    </span>{" "}
                    <span>{participant[1]} poäng </span>
                  </li>
                );
              })
            )}
          </ol>
        )}
      </div>
    </div>
  );
};
export default StartView;
