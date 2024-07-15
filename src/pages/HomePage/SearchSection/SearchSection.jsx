import React from "react";
import { IoMdSearch } from "react-icons/io";
import styles from './SearchSection.module.css';
import TextInput from "../../../components/TextInput/TextInput";
import Button from "../../../components/Button/Button";
import SearchCard from "../../../components/SearchCard/SearchCard";
import { SearchCardOptions } from "../../../helper/helper";

const SearchSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searchBox}>
                <TextInput IconComponent={IoMdSearch} placeholder='State' />
                <TextInput IconComponent={IoMdSearch} placeholder='City' />
                <Button>
                    <IoMdSearch style={{
                    fontSize: '26px'
                }} /> Search
                </Button>
            </div>
            <div>
                <h3 className={styles.tilesHeading}>You may be looking for</h3>
                <div className={styles.cardContainer}>
                    {
                        SearchCardOptions.map((card) => <SearchCard key={card['title']} image={card['image']} title={card['title']} />)
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default SearchSection;