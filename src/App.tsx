import React, {ChangeEvent, useEffect, useState} from 'react';
import styled from "styled-components";
import {Pagination, List, Input} from "antd";
import debounce from 'lodash/debounce';
import {useDispatch, useSelector} from "react-redux";
import {getAllNames} from "./module/nameAsyncAction";
import {typeGlobalState} from "./core/redux/store";

export const App = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState<number>(0);
    const [search, setSearch] = useState<string>("");
    const {names} = useSelector((state: typeGlobalState) => state.nameSlice);

    useEffect(() => {
        dispatch(getAllNames());
    }, []);

    const handleChangePage = (page: number) => {
        setPage(page-1);
    };
    const handleChangeSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      setPage(0);
    }, 400);

    const searchItems = names.filter(u => u.toLowerCase().indexOf(search.toLowerCase()) > -1);
    const pageItems = searchItems.slice(page*10, (page+1)*10);
    return (
        <Main>
            <Input placeholder="Search..." onChange={handleChangeSearch}/>
            <List
                style={{border: 'none'}}
                size="large"
                bordered
                dataSource={pageItems}
                renderItem={(item: any) => <List.Item>{item}</List.Item>}
            />
            {Math.ceil(searchItems.length/10) > 1 &&
                <Pagination defaultCurrent={1} total={Math.ceil(searchItems.length)} showSizeChanger={false} onChange={handleChangePage}/>}
        </Main>
    );
}

const Main = styled.div`
  margin: 10px;
`;
