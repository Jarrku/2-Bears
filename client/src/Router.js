import React, { Component} from 'react';
import { connect } from 'react-redux';

import { Stack, Scene, Router, Drawer } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CategoriesList from './components/CategoriesList';
import CategoryXList from './components/CategoryXList';
import DrawerContent from './components/drawer/DrawerContent';
import About from './components/About';
import Cart from './components/Cart';
import Stats from './components/admin/Stats';
import DrinkStatus from './components/admin/DrinkStatus';
import KitchenStatus from './components/admin/KitchenStatus';
import Settings from './components/admin/Settings';
import Scan from './components/admin/Scan';

class RouterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render(){
        const { dispatch, errorMessage, isAuthenticated } = this.props
        return (
<Router>

      <Stack key="root" hideNavBar>
        <Drawer
          hideNavBar
          key="drawer"
          contentComponent={DrawerContent}
          drawerWidth={300}
          title={"2 Bears"}
        >
          <Scene key="auth" title={"2 Bears"}>
            <Scene key="login" component={LoginForm} hideNavBar isAuthenticated={isAuthenticated} errorMessage={errorMessage} dispatch={dispatch} initial />
          </Scene>

          <Scene key="main" title={"2 Bears"}>
            <Scene key="categoriesList" component={ CategoriesList } initial />
            <Scene key="categoryXList" component={ CategoryXList } />
            <Scene key="cart" component={ Cart } />
            <Scene key="about" component={ About } />
          </Scene>

          <Scene key="admin" title={"2 Bears"}>
            <Scene key="scan" component={ Scan } />
            <Scene key="stats" component={ Stats }  initial />
            <Scene key="drinks" component={ DrinkStatus } />
            <Scene key="kitchen" component={ KitchenStatus } />
            <Scene key="settings" component={ Settings } />
          </Scene>

        </Drawer>
      </Stack>
    </Router>
    );

    }

};

const mapsStateToProps = (state) => {
    const { auth } = state;
    const { isAuthenticated, errorMessage } = auth;

    return {
        isAuthenticated,
        errorMessage
    }
}

export default connect(mapsStateToProps)(RouterComponent);