import { isValidLength, isValidStation, isDuplicatedStation, checkOptionValue } from "../check.js";

const onClickSearchButton = (departureStationName, arrivalStationName) => {
  const searchButton = document.querySelector("#search-button");
  searchButton.addEventListener("click", () => {
    console.log(departureStationName, arrivalStationName);
  })
}

const getArrivalStationName = (departureStationName) => {
  const arrivalStationName = document.querySelector("#arrival-station-name-input");
  arrivalStationName.addEventListener("change", () => {
    if (isValidLength(arrivalStationName.value) && isValidStation(arrivalStationName.value) && !isDuplicatedStation(arrivalStationName.value)) {
      onClickSearchButton(departureStationName, arrivalStationName.value);
    } else {
      const ALERT_MESSAGE = "출발역과 중복되지 않는 이름을 입력해 주세요. 또는 출발역과 도착역이 연결되어 있는 역을 입력해 주세요."
      alert(ALERT_MESSAGE);
    }
  })
}

const getDepartureStationName = () => {
  const departureStationName = document.querySelector("#departure-station-name-input");
  departureStationName.addEventListener("change", () => {
    if (isValidLength(departureStationName.value) && isValidStation(departureStationName.value)) {
      getArrivalStationName(departureStationName.value);
    }
    else {
      const ALERT_MESSAGE = "노선에 존재하는 2글자 이상의 역 이름을 입력해 주세요.";
      alert(ALERT_MESSAGE);
    }
  })
}

const init = () => {
  getDepartureStationName();
}

init();

export { getDepartureStationName };