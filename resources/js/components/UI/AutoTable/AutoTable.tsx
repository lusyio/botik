// React
import React from 'react';

// Third-party
import {NavLink} from 'react-router-dom';
import BootstrapTable, {BootstrapTableProps} from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';

interface IAutoTable extends BootstrapTableProps {
    button: {
        link: string;
        text: string
    }
}

const AutoTable: React.FC<IAutoTable> = ({data, columns, keyField, button}) => {
    const {SearchBar} = Search;
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
                        <div className="col-lg-6">
                            <NavLink to={`/${button.link}`}>
                                {button.text}
                            </NavLink>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-body text-muted">
                            <BootstrapTable
                                pagination={paginationFactory({})}
                                bordered={false}
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
