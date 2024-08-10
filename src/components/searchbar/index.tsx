import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input'

const SearchBar = () => {

    const placeholders = [
        "Search for a specific medical test.",
        "Find tests related to a health condition.",
        "All available medical tests",
        "Search for a specific medical test.",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
        />
    )
}

export default SearchBar
