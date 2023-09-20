import React from 'react';

const RenderTextRight = ({ item, key, matchesmd }) => {
    const renderPadding = () => {
        if (matchesmd) {
            return item.id === "01" ? "42px 0px 30px" : item.id === "02" ? "30px 0px" : "30px 0px 58px"
        }
        return item.id === "01" ? "59px 0px 56px" : item.id === "02" ? "53px 0px 56px" : "80px 0px 98px"
    }
    return (
        <div key={key} style={{ padding: renderPadding() }}>
            <div className='flex-center' style={{ marginBottom: item.id === "01" ? "31px" : "21px" }}>
                <div>
                    <div className='number-id'>{item.id}</div>
                    <div className={item.id === "03" ? "number-id-border-bgdark" : 'number-id-border'} />
                </div>
                <div className={item.id === "03" ? "title-bgdark" : "title"} style={{ marginLeft: item.id === "03" ? "9px" : "10px" }}>{item.title}</div>
            </div>
            <div className={item.id === "03" ? "description-bgdark" : "description"}>{item.description}</div>
        </div>
    );
}
export default RenderTextRight