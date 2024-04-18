
import AddButton from '../AddButton'
import TextField from '../TextField'

export default function AddActorForm() {
    return (
        <AddButton title="Add New Actor">
            <form className="px-1 py-1 w-full text-left">
                <TextField label="Name" type="text" />
                <TextField label="No. of Movies" type="number" />
                <TextField label="Rating" type="number"/>
                <TextField label="Image Url" type="text" />
            </form>
        </AddButton>
    )
}
