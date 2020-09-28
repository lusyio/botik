import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="HeaderBlock d-flex justify-content-between">
                <div>
                    <h1>Заголовок страницы</h1>
                </div>
                <div className="d-flex">
                    <span className="HeaderBlockUserPic">И</span>
                    <div className="HeaderBlockUserNameRole">
                        <span className="HeaderBlockUserName">Иванов И.И.</span>
                        <span className="HeaderBlockUserRole">Администратор</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;