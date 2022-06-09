import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";



const Filter = ({ category, setCategory }) => {


  return (
    <div>
      <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <FormControlLabel value="pot" control={<Radio />} label="Pot plants" />
        <FormControlLabel value="exotic" control={<Radio />} label="Exotic flowers" />
        <FormControlLabel value="wedding" control={<Radio />} label="Wedding bouquets" />
        <FormControlLabel value="all" control={<Radio />} label="All flowers" />
        <FormControlLabel value="gift" control={<Radio />} label="Gift certificates" />

      </RadioGroup>
    </FormControl>

    </div>
  );
};

export default Filter;