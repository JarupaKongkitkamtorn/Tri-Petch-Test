import React from 'react';

const RenderTextLeft = ({ item, key, matchesmd }) => {
    const renderPadding = () => {
        if (matchesmd) {
            return item.id === "01" ? "34px 0px 10px 0px" : item.id === "02" ? "51px 0px 65px 0px" : "44px 0px 72px 0px"
        }
        return item.id === "01" ? "68px 0px 69px 0px" : item.id === "02" ? "52px 0px 102px 0px" : "87px 0px 72px 0px"
    }
    return (
        <div key={key} style={{ padding: renderPadding() }}>
            <div className='flex-center' style={{ marginBottom: "21px" }}>
                <div>
                    <div className={item.id === "03" ? "number-id-bgdark" : 'number-id'}>{item.id}</div>
                    <div className={item.id === "03" ? "number-id-border-bgdark" : 'number-id-border'} />
                </div>
                <div className={item.id === "03" ? "title-bgdark" : "title"} style={{ marginLeft: "10px" }}>{item.title}</div>
            </div>
            <div className={item.id === "03" ? "description-bgdark" : "description"}>{item.description}</div>
        </div>
    );
}
export default RenderTextLeft