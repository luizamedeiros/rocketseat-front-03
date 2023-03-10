import { SearchFormContainer } from "./styles";
import {MagnifyingGlass} from 'phosphor-react';

export function SearchForm(){
    return(
        <div>
            <SearchFormContainer>
                <input type='text' placeholder="Search transactions"/>
                <button type='submit'>
                    <MagnifyingGlass size={20}/>
                    Search
                </button>
            </SearchFormContainer>
        </div>
    )
}