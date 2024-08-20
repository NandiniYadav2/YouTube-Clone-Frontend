import { SearchBar } from "./SearchBar"
export const AppBar = () => {
    return <div className="flex justify-between pl-3 pr-3 pt-4">
        <div>
            Youtube
        </div>
        <div>
           <SearchBar/>
        </div>
        <div>
            Sign In
            
        </div>

    </div>
}