// React
import React from 'react'

// Third-party
import BootstrapTable, {BootstrapTableProps, ColumnFormatter, ExpandRowProps}
    from 'react-bootstrap-table-next'
import ToolkitProvider from 'react-bootstrap-table2-toolkit'

interface expandRow<T extends object = any, E = any> {
    dataField: string,
    text: string,
    formatter?: ColumnFormatter<T, E>
}

interface IAutoTable extends BootstrapTableProps {
    button?: {
        link: string;
        text: string
    } | undefined,
    expandRowTable?: expandRow[] | undefined
}

const AutoTable: React.FC<IAutoTable> =
    ({
         data,
         columns,
         keyField,
         button,
         expandRowTable = undefined
     }) => {
        const expandRow: ExpandRowProps<any> = {
            expandColumnPosition: 'right',
            renderer: renderer,
            showExpandColumn: true,
            expandHeaderColumnRenderer: expandHeaderColumnRenderer,
            expandColumnRenderer: expandColumnRenderer
        }

        function renderer(row: any, rowIndex: number) {
            const tableHead = expandRowTable
                ?.map((item, index) => {
                    return (
                        <th key={`${item.text}-${index}`}>
                            {item.text}
                        </th>
                    )
                })
            const tableBody = expandRowTable
                ?.map((item, index) => {
                    return (
                        <td key={`${item.dataField}-${index}`}>
                            {row[item.dataField]}
                        </td>
                    )
                })
            return (
                <table className='table'>
                    <thead>
                    <tr>
                        {tableHead}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {tableBody}
                    </tr>
                    </tbody>
                </table>
            )
        }

        function expandHeaderColumnRenderer() {
            return <span>{null}</span>
        }

        function expandColumnRenderer({expanded}) {
            if (expanded) {
                return (
                    <svg width="5" height="17" viewBox="0 0 5 17" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.75" cy="2.75" r="1.75" stroke="#3A405F"/><circle cx="2.75" cy="8.75" r="1.75" stroke="#3A405F"/><circle cx="2.75" cy="14.75" r="1.75" stroke="#3A405F"/></svg>

                )
            }
            return (
                <svg width="5" height="17" viewBox="0 0 5 17" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.75" cy="2.75" r="1.75" fill="#3A405F" stroke="#3A405F"/><circle cx="2.75" cy="8.75" r="1.75" fill="#3A405F" stroke="#3A405F"/><circle cx="2.75" cy="14.75" r="1.75" fill="#3A405F" stroke="#3A405F"/></svg>
            )
        }

        return (
            <ToolkitProvider
                bootstrap4
                keyField={keyField}
                data={data}
                columns={columns}
            >
                {props => (
                    <div>
                                <BootstrapTable
                                    bordered={false}
                                    expandRow={expandRowTable
                                        ? expandRow
                                        : undefined}
                                    {...props.baseProps}
                                />
                    </div>
                )}
            </ToolkitProvider>
        )
    }

export default AutoTable
