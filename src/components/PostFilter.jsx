import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput 
                placeholder="Search..." 
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                defaultValue="Sort by"
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: 'title', name: "По названию"},
                    {value: 'body', name: "По описанию"}
                ]}
            />
        </div>
    )
}

export default PostFilter
