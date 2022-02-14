import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const Search = ({ data, searchableField, handleChange, placeholder }) => {

    return (
        <>
            {/* <Autocomplete
                disablePortal
                id="combo-box-demo"
                fullWidth
                onChange={(e, item) => handleChange(item)}
                options={data}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} placeholder="Search title..." />}
            /> */}
            <TextField fullWidth type="search" onChange={e => handleChange(e.target.value)}
                placeholder={placeholder} />
        </>
    )
}
export default Search;