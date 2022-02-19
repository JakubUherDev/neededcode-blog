import React, {useState} from 'react';




const PostDetailTable = ({ tableData }) => {


    const tableHeader = tableData.children.find(t => t.type === "table_head")
    const tableRows = tableData.children.find(t => t.type === "table_body")
    const tableHeaderValue = tableHeader
        .children.map(child => child.children)[0]
        .map(child => child.children)
        .map(child => child[0].children[0].text)

    return (
        <table className="mb-8 w-full table-auto border rounded bg-pink-shadow">
            {tableHeader != null ?
                <thead className="border-b">
                    <tr>
                        {tableHeaderValue.map((value, index) => {
                            return <th key={index} className="p-5">{value}</th>
                        })}
                    </tr>
                </thead> : <></>
            }
            <tbody>
                {
                    tableRows.children.map((r, index) => {
                        return <tr key={index}>
                            {r.children.map((el, index) => {
                                    return <td key={index} className="p-5">{el.children[0].children[0].text}</td>
                                })
                            }
                        </tr>
                    })
                }

            </tbody>
        </table>
    );
};

export default PostDetailTable;



// const TableRow = (rx) => {
//     return (
//
//     );
// };

