import AddButton from "../AddButton";
import TextField from "../TextField";


export default function AddProducerForm() {
    return (
        <AddButton title="Add New Producer">
            <form className="px-1 py-1 w-full text-left">
                <TextField label="Name" type="text" />
                <TextField label="No. of Movies" type="number" />
                <TextField label="No. of Awards" type="number" />
                <TextField label="Image Url" type="text" />
            </form>
        </AddButton>
    )
}
