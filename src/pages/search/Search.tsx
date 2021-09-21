import React, { useEffect, useMemo, useRef, useState } from 'react';
import MyButton from '../../components/UI/myButton/MyButton';
import MySearch from '../../components/UI/mySearch/MySearch';
import MySelect from '../../components/UI/mySelect/MySelect';
import SearchService from '../../services/SearchService';
import './search.scss';

const Search = () => {
    const [region, setRegion] = useState<string>('Выберите регион');
    const [age, setAge] = useState<string>('Выберите возраст');
    const [search, setSearch] = useState<string>('');
    const [desiases, setDesiases] = useState<any>([]);
    const [code, setCode] = useState<string>('');

    async function desiaseSearch(str: string) {
        const response = await SearchService.desiaseSearch(str);
        setDesiases(response.data.results);
    }

    async function medicalSearch(str: string, e: any) {
        e.preventDefault();
        const response = await SearchService.medicalSearch(str);
        console.log(response);
    }

    return (
        <div className="search">
            <div className="search__inner">
                <div className="search__title">
                    <h1 className="search__h1">
                        Найдите ближайший центр
                    </h1>
                    <p className="search__p">
                        Выберите параметры и мы найдем ближайший к вам центр
                    </p>
                </div>
                <form action="#" className="search__form">
                    <MySelect style={{maxWidth: '310px', marginRight: '8px'}} value={region} setAction={setRegion}>
                        <option>Нижний Новгород</option>
                        <option>Казань</option>
                    </MySelect>
                    <MySearch actionSearch={desiaseSearch} style={{maxWidth: '400px', marginRight: '8px'}} placeholder='Заболевание' search={search} setAction={setSearch}>
                        {desiases.map((el: any) => (
                            <div onClick={() => {
                                setCode(el.code);
                                setSearch(el.name);
                            }}
                                key={el.code} 
                                className="search__desiase">
                                {el.name}
                            </div>
                        ))}
                    </MySearch>
                    <MySelect style={{maxWidth: '310px', marginRight: '8px'}} value={age} setAction={setAge}>
                        <option>До 1 года</option>
                        <option>От 1 года</option>
                    </MySelect>
                    <MyButton onClick={(e: any) => medicalSearch(code, e)} style={{maxWidth: '186px', width: '100%', height: '56px'}}>Найти</MyButton>
                </form>
            </div>
        </div>
    );
}

export default Search;
