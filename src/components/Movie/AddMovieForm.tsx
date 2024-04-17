
import AddButton from '../AddButton';
import TextField from '../TextField';

export default function AddMovieForm() {
    return (
        <AddButton title="Add New Movie" >
            <form className="px-1 py-1 w-full text-left">
                <TextField label="Title" type="text" />
                <TextField label="Rating" type="number" />
                <TextField label="Poster Image Url" type="text" />
            </form>
        </AddButton>
    )
}
