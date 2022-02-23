// Components, etc.
import React, {useState, useEffect} from 'react';
import {getBeers, getFoods, getDesserts} from "../apis.js";
import EmailFoodCrew from './EmailFoodCrew';
import Chip from '@mui/material/Chip';
import '../App.css'

// Chip colors - create a simple materialui theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        main: grey[900]
      },
      secondary: {
        main: grey[500],
      },
    },
});

// Component showing chips and list info
const ListView = (props) => {

  const [beers, setBeers] = useState([]);
  const [foods, setFoods] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [viewing, setViewing] = useState("foods"); // keeps track of which chip is selected

  const updateItems = async () => {
    const newBeers = await getBeers(4);
    setBeers(newBeers);

    const newFoods = await getFoods(4);
    setFoods(newFoods);

    const newDesserts = await getDesserts(4);
    setDesserts(newDesserts);
  }

  useEffect(updateItems, []);

  return (
    <div className="menu-content">
        <h4 className="menu-subtitle">Delicious Treats</h4>
        <div className="menu-chips">
            <ThemeProvider theme={theme}>
                <MenuChip label="Food" category="foods" clickFunc={setViewing} viewing={viewing} icon="🍔"/>
                <MenuChip label="Dessert" category="desserts" clickFunc={setViewing} viewing={viewing} icon={"🧁"}/>
                <MenuChip label="Beer" category="beers" clickFunc={setViewing} viewing={viewing} icon={"🍺"}/>
            </ThemeProvider>
        </div>
        <div className="list">
            <ul>
                {(viewing === "desserts" ? desserts : (viewing === "beers" ? beers : foods)).map((item) =>
                    <li key={item.id} className="list-item">
                        <a href={`https://www.google.com/search?q=${item.name}%20${item.description}`} rel="noopener" target="_blank">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </a>
                    </li>
                )}
            </ul>
        </div>
        <hr className="dashed-line"/>
        <EmailFoodCrew/>
    </div>
  );
}

export default ListView;

// Component for one chip
const MenuChip = ({label, category, clickFunc, viewing, icon}) => {
    return (
        <Chip
            sx={styles.chip}
            label={
                <div style={styles.chipDiv}>
                    <p style={styles.chipIcon}>{icon}</p>
                    <p style={styles.chipLabel}>{label}</p>
                </div>
            } 
            variant="outlined"
            color={viewing === category ? "primary" : "secondary"}
            onClick={()=>clickFunc(category)}
        />
    )
}

// Styles for chip - complicated to put in app.css
const styles = {
    chip: {
        minWidth: '90px',
        width: '26%',
        maxWidth: '130px',
        margin: '5px',
        padding: 0,
    },
    chipDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        width: '100%',
    },
    chipIcon: {
        backgroundColor: 'transparent',
        fontSize: 21,
    },
    chipLabel: {
        marginLeft: '8px',
        fontSize: '12px'
    }
}