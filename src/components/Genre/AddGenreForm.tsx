import React from 'react'
import AddButton from '../AddButton'
import TextField from '../TextField';

export default function AddGenreForm() {
    return (
        <AddButton title="Add New Genre" >
            <form className="px-1 py-1 w-full text-left">
                <TextField label="Title" type="text" />
                <TextField label="Image Url" type="text" />
                <TextField label="No. of Movies" type="number" />
            </form>
        </AddButton>
    );
  
}
