import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";

type Station = {
  id: string;
  commonName: string;
};

type RouteInstruction = {
  instruction: {
    summary: string;
  };
};

const SearchBar: React.FC<{
  placeholder: string;
  onSelectStation: (stationName: string) => void;
}> = ({ placeholder, onSelectStation }) => {
  const [stations, setStations] = useState<Station[]>([]);
  const [query, setQuery] = useState<string>("");
  const [filteredStations, setFilteredStations] = useState<Station[]>([]);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get(
          "https://api.tfl.gov.uk/StopPoint/Mode/tube"
        );

        const uniqueStationsMap: { [name: string]: Station } = {};
        response.data.stopPoints.forEach((station: any) => {
          uniqueStationsMap[station.commonName] = {
            id: station.id,
            commonName: station.commonName,
          };
        });

        const uniqueStations = Object.values(uniqueStationsMap);
        setStations(uniqueStations);
      } catch (error) {
        console.error("Error fetching station data:", error);
      }
    };

    fetchStations();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value;
    setQuery(userInput);

    if (userInput.length > 0) {
      const matches = stations.filter((station) =>
        station.commonName.toLowerCase().startsWith(userInput.toLowerCase())
      );
      setFilteredStations(matches);
    } else {
      setFilteredStations([]);
    }
  };

  const handleStationClick = (stationName: string) => {
    setQuery(stationName);
    onSelectStation(stationName);
    setFilteredStations([]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="search-input"
      />
      {filteredStations.length > 0 && (
        <ul className="search-dropdown">
          {filteredStations.map((station) => (
            <li
              key={station.id}
              onClick={() => handleStationClick(station.commonName)}
              className="search-item"
            >
              {station.commonName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Search: React.FC = () => {
  const [startStation, setStartStation] = useState<string | null>(null);
  const [endStation, setEndStation] = useState<string | null>(null);
  const [routeInstructions, setRouteInstructions] = useState<
    RouteInstruction[]
  >([]);

  const [isWheelchairAccessible, setIsWheelchairAccessible] = useState(false);
  const [isFastest, setIsFastest] = useState(false);
  const [isLeastChanges, setIsLeastChanges] = useState(false);

  return (
    <div className="app-container">
      <div className="search-section">
        <SearchBar
          placeholder="Select Start Station"
          onSelectStation={(station) => setStartStation(station)}
        />
        <SearchBar
          placeholder="Select End Station"
          onSelectStation={(station) => setEndStation(station)}
        />
      </div>

      <div className="filters-section">
        <h2>Filters</h2>
        <label>
          <input
            type="checkbox"
            checked={isWheelchairAccessible}
            onChange={() => setIsWheelchairAccessible(!isWheelchairAccessible)}
          />
          Wheelchair Accessible
        </label>

        <label>
          <input
            type="checkbox"
            checked={isLeastChanges}
            onChange={() => setIsLeastChanges(!isLeastChanges)}
          />
          Least Changeovers
        </label>
      </div>
    </div>
  );
};

export default Search;
