import React from "react";
import styles from './SearchSection.module.css';
import SearchCard from "../../../components/SearchCard/SearchCard";
import { SearchCardOptions } from "../../../helper/helper";
import SearchHospital from "../../../components/SearchHospital/SearchHospital";

const SearchSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.searchBox}>
                <SearchHospital />
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