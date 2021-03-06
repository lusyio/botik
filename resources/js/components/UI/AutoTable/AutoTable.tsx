// React
import React from 'react'

// Third-party
import {NavLink} from 'react-router-dom'
import BootstrapTable, {BootstrapTableProps, ColumnFormatter, ExpandRowProps}
    from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit'

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
        const {SearchBar} = Search


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
                search
            >
                {props => (
                    <div>
                        <div className="d-flex justify-content-between mb-2">
                            <div className="searchBar">
                                {/* eslint-disable-next-line max-len */}
                                <SearchBar {...props.searchProps} placeholder="Поиск по названию"/>
                            </div>
                            {button
                                ?
                                <NavLink to={`/${button.link}`}
                                         className='btn addButton'>
                                    {button.text}
                                </NavLink>
                                : null
                            }
                        </div>
                        <div className='card'>
                            <div className="card-body text-muted">
                                <BootstrapTable
                                    pagination={paginationFactory({})}
                                    bordered={false}
                                    expandRow={expandRowTable
                                        ? expandRow
                                        : undefined}
                                    {...props.baseProps}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </ToolkitProvider>
        )
    }

export default AutoTable
