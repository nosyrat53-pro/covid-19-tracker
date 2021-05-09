import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import './App.css';
import "./InfoBox.css" ;

import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import { sortData , prettyPrintStat } from './util';
import LineGraph from './LineGraph';
import 'leaflet/dist/leaflet.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: '#fff',
    boxShadow:'0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    borderRadius: '4px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  flag: {
    width: 28,
    height: 22,
    marginRight: 10,
  },
}));


const casesTypeColors = {
  cases: {
      hex: "#cc1034",
  },
  recovered: {
      hex: "#7dd71d",
  },
  deaths: {
      hex: "#fb4443",
  },
}


function App() {

  const classes = useStyles();
  const [country, setCountry] = useState('worldwide');
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter , setMapCenter] = useState({lat: 34.80746 , lng: -40.4796});
  const [mapZoom , setMapZoom] = useState(3);
  const [mapCountries , setMapCountries] = useState([]);
  const [casesType , setCasesType] = useState('cases') ;
  const [color, setColor] = useState('#cc1034');

  useEffect(()=>{
    setColor(casesTypeColors[casesType].hex) ;
  },[casesType]);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then(res => res.json())
      .then(data =>
        setCountryInfo(data)
      )
  }, []);

  useEffect(() => {

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then(response => response.json())
        .then(data => {
          const cs = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo
            }
          ));
          
          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(cs);

        })
        .catch(err => console.log(err))
    }

    getCountriesData()

  }, []);


  const handleChange = async (event) => {
    const countryCode = event.target.value;

    // Move to new point on the map to show the country wich we get the countryCode of it from the dropdown
    // setMapCenter(findLanLng(countryCode)) ;

    const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode)
        setCountryInfo(data)
        setMapCenter([data.countryInfo.lat , data.countryInfo.long]);
        setMapZoom(4)
      }
      )
      .catch(err => console.log(err));
  }

  return (
    <div className="app">

      <div className="app__left">

        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className={classes.formControl}>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={country}
              onChange={handleChange}
            >
              <MenuItem value="worldwide" style={{ paddingLeft: 55, fontWeight: 600 }}>WorldWide</MenuItem>
              {countries.map((coun, index) => {

                return (
                  <MenuItem value={coun.value.iso2} key={index}>
                    <img src={coun.value.flag} className={classes.flag} />
                    { coun.name}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>

        </div>


        <div className="app__stats">

          <InfoBox 
          isRed
          active={casesType === 'cases'}
          onClick={(e) => setCasesType('cases')}
          title="Coronavirus Cases" 
          cases={prettyPrintStat(countryInfo.todayCases)} 
          total={countryInfo.cases} 
          />
          
          <InfoBox 
          active={casesType === 'recovered'}
          onClick={(e) => setCasesType('recovered')}
          title="Recovered" 
          cases={prettyPrintStat(countryInfo.todayRecovered)} 
          total={countryInfo.recovered} 
          />
          
          <InfoBox 
          isRed
          active={casesType === 'deaths'}
          onClick={(e) => setCasesType('deaths')}
          className="lastBox" 
          title="Deaths" 
          cases={prettyPrintStat(countryInfo.todayDeaths)} 
          total={countryInfo.deaths} 
          />

        </div>

        <Map 
        countries={mapCountries}
        center={mapCenter}
        zoom={mapZoom}
        casesType={casesType}
        color={color}
        />

      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>

          <Table countries={tableData} />

          <h3 style={{paddingTop: '10px', borderTop: '1px solid black'}}>WorldWide {casesType}</h3>
          
          <LineGraph casesType={casesType} color={color}/>

        </CardContent>

      </Card>


    </div>
  );
}

export default App;
