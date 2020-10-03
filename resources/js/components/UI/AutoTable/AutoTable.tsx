// React
import React from 'react';

// Third-party
import {NavLink} from 'react-router-dom';
import BootstrapTable, {BootstrapTableProps, ColumnFormatter}
    from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';

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
        const {SearchBar} = Search;

        let expandRow = {}

        if (expandRowTable) {
            expandRow = {
                expandColumnPosition: 'right',
                renderer: renderer,
                showExpandColumn: true,
                expandHeaderColumnRenderer: expandHeaderColumnRenderer,
                expandColumnRenderer: expandColumnRenderer
            };
        }

        function renderer(row) {
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
            );
        }

        function expandHeaderColumnRenderer() {
            return '';
        }

        function expandColumnRenderer({expanded}) {
            if (expanded) {
                return (
                    <b>-</b>
                );
            }
            return (
                <b>...</b>
            );
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
                        <div className="row">
                            <div className="col-lg-6">
                                <SearchBar {...props.searchProps} />
                            </div>
                            {button
                                ? <div className="col-lg-6">
                                    <NavLink to={`/${button.link}`}>
                                        {button.text}
                                    </NavLink>
                                </div>
                                : null
                            }
                        </div>
                        <div className='card'>
                            <div className="card-body text-muted">
                                <BootstrapTable
                                    pagination={paginationFactory({})}
                                    bordered={false}
                                    // @ts-ignore
                                    expandRow={expandRow}
                                    {...props.baseProps}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </ToolkitProvider>
        )
    }

export default AutoTable;
