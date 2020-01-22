
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Switch, Route } from 'react-router-dom';

const App = () => (
  <div className='app'>
    <Main />
   </div>
);


const display = {
  display: 'block'
};
const hide = {
  display: 'none'
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      toggle: false
    }
  }

  toggle(event) {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  }
  render() {
    var modal = [];
    modal.push(
      <div className="modal modal-delete" style={this.state.toggle ? display : hide}>
        <div className="modal-body">
          <div className="modal-content">
            <h4>Delete Merchant</h4>
            <p>Are you sure you want to delete this merchant?</p>
          </div>
          <div className="modal-footer">
            <a className="btn-flat" onClick={this.toggle}>No</a>
            <a className="btn-flat" onClick={this.toggle}>Yes</a>
          </div>
        </div>
    </div>
    );
    return (
      <div className="delete-btn in-blk in-blk-mid">
        <a className="btn" onClick={this.toggle}>
          <img className="img-fluid" alt="Delete" src="img/bin.png" />
          <span className="tooltip-txt">Delete</span>
        </a>
        {modal}
      </div>
    );
  }
}

class MobileMenu extends React.Component {
  toggleMenu() {
    
  }
  render() {
    return (
      <button onClick={this.toggleMenu}>Menu</button>
    );
  }
}

const Navigation = () => (
  <div className="sidenav-panel">
    <div className="sidenav-logo">
      <img src="/img/quadxlogow.png" alt="Logo" className="img-fluid"/>
    </div>
    <div className="sidenav-main">
      <h2>Navigation</h2>
      <nav>
        <ul>
          <li><NavLink className="fast-ease" exact activeClassName="current" to='/dashboard'>Dashboard</NavLink></li>
          <li><NavLink className="fast-ease" exact activeClassName="current" to='/page-2'>Page 2</NavLink></li>
          <li><NavLink className="fast-ease" exact activeClassName="current" to='/page-3'>Page 3</NavLink></li>
        </ul>
      </nav>
    </div>
  </div>
);



const Header = () => (

  <header className="header-wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="search-bar">
              <input className="search-field fast-ease" type="text" placeholder="Search" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="user">
              <div className="user-btn user-blk">
                <MobileMenu />
              </div>
              <div className="user-details user-blk">
                Hi <span>Aldrin</span>
              </div>
              <div className="user-settings user-blk">
                <NavLink exact activeClassName="current" to='/'>
                  <img className="img-fluid" src="/img/sign-out.png" alt="Logout"/>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
  </header>
);

const Login = () => (
  <div className='login-wrap'>
    <div className="container">
      
      <div className="login-form">
        <img src="/img/quadxlogo.png" alt="Logo" className="img-fluid"/>
        <form>
          <div className="form-field form-field-username">
            <label htmlFor="username" className="hide">Username</label>
            <input className="fast-ease" type="text" placeholder="Username" name="username" required />
          </div>
          <div className="form-field form-field-password">
            <label htmlFor="password" className="hide">Password</label>
            <input className="fast-ease" type="password" placeholder="Password" name="password" required />
          </div>
        </form>
        <NavLink className="login-btn fast-ease" exact activeClassName="current" to='/dashboard'>Sign In</NavLink>
      </div>
   
    
    </div>
  </div>
);

const ContentList = () => (
  <div className="content-main">

   <div className="content-header">
     <h2 className="in-blk in-blk-mid">List of Merchants</h2>
     <div className="content-header-btn in-blk in-blk-mid">
        <NavLink className="fast-ease" exact activeClassName="current" to='/add'>
          <i className="fast-ease">&#43;</i>
          <span>Add Merchant</span>
        </NavLink>
     </div>
   </div>
   <div className="content-list">
    <table>
      <thead>
        <tr>
          <th>Merchant Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Merchant Name One</td>
          <td>
            <NavLink className="edit-btn fast-ease  in-blk in-blk-mid" exact activeClassName="current" to='/edit'>
              <img className="img-fluid" alt="Edit" src="/img/edit.png" />
              <span className="tooltip-txt">Edit</span>
            </NavLink>
            <Modal />
          </td>
        </tr>
        <tr>
          <td>Merchant Name Two</td>
          <td>
            <NavLink className="edit-btn fast-ease" exact activeClassName="current" to='/edit'>
              <img className="img-fluid" alt="Edit" src="/img/edit.png" />
              <span className="tooltip-txt">Edit</span>
            </NavLink>
            <button className="delete-btn fast-ease">
              <img className="img-fluid" alt="Delete" src="img/bin.png" />
              <span className="tooltip-txt">Delete</span>
            </button>
          </td>
        </tr>
        <tr>
          <td>Merchant Name Three</td>
          <td>
            <NavLink className="edit-btn fast-ease" exact activeClassName="current" to='/edit'>
              <img className="img-fluid" alt="Edit" src="/img/edit.png" />
              <span className="tooltip-txt">Edit</span>
            </NavLink>
            <button className="delete-btn fast-ease">
              <img className="img-fluid" alt="Delete" src="img/bin.png" />
              <span className="tooltip-txt">Delete</span>
            </button>
          </td>
        </tr>
        <tr>
          <td>Merchant Name Four</td>
          <td>
            <NavLink className="edit-btn fast-ease" exact activeClassName="current" to='/edit'>
              <img className="img-fluid" alt="Edit" src="/img/edit.png" />
              <span className="tooltip-txt">Edit</span>
            </NavLink>
            <button className="delete-btn fast-ease">
              <img className="img-fluid" alt="Delete" src="img/bin.png" />
              <span className="tooltip-txt">Delete</span>
            </button>
          </td>
        </tr>
        <tr>
          <td>Merchant Name Five</td>
          <td>
            <NavLink className="edit-btn fast-ease" exact activeClassName="current" to='/edit'>
              <img className="img-fluid" alt="Edit" src="/img/edit.png" />
              <span className="tooltip-txt">Edit</span>
            </NavLink>
            <button className="delete-btn fast-ease">
              <img className="img-fluid" alt="Delete" src="img/bin.png" />
              <span className="tooltip-txt">Delete</span>
            </button>
          </td>
        </tr>
        <tr>
          <td>Merchant Name Six</td>
          <td>
            <NavLink className="edit-btn fast-ease" exact activeClassName="current" to='/edit'>
              <img className="img-fluid" alt="Edit" src="/img/edit.png" />
              <span className="tooltip-txt">Edit</span>
            </NavLink>
            <button className="delete-btn fast-ease">
              <img className="img-fluid" alt="Delete" src="img/bin.png" />
              <span className="tooltip-txt">Delete</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
   </div>
    
  </div>
);

const ContentEdit = () => (
  <div className="content-edit content-main">
    
    <div className="content-header">
      <h2>Edit Merchant Details</h2>
    </div>
    <div className="content-fullname-field">
      <label htmlFor="fullname" >Merchant Name</label>
      <input className="fast-ease" type="text" placeholder="" name="fullname" required />
    </div>

    <h2 className="content-edit-label">Shipping Fee</h2>
    <div className="content-edit-table content-blk-table">
      <h3>Metro Manila</h3>
      <div className="content-edit-main content-blk-main">
        <div className="content-edit-row content-blk-row">
          <div className="content-edit-col content-blk-col in-blk in-blk-mid">
            <label className="in-blk in-blk-mid" htmlFor="contentbox" >Box</label>
            <input className="fast-ease" type="text" placeholder="" name="contentbox" />
          </div>
          <div className="content-edit-col content-blk-col in-blk in-blk-mid">
            <label className="in-blk in-blk-mid" htmlFor="contentoversized" >Oversized</label>
            <input className="fast-ease" type="text" placeholder="" name="contentoversized" />
          </div>
          <div className="content-edit-col content-blk-col in-blk in-blk-mid">
            <label className="in-blk in-blk-mid" htmlFor="contentbigpouch" >Big Pouch</label>
            <input className="fast-ease" type="text" placeholder="" name="contentbigpouch" />
          </div>
          <div className="content-edit-col content-blk-col in-blk in-blk-mid">
            <label className="in-blk in-blk-mid" htmlFor="contentsmallpouch" >Small Pouch</label>
            <input className="fast-ease" type="text" placeholder="" name="contentsmallpouch" />
          </div>
        </div>
      </div>
      <div className="content-address-prov">
        <p>Provincial</p>
      </div>
      <div className="content-address-intraprov">
        <p>Intra Provincial</p>
      </div>
    </div>

    <div className="content-edit-btns content-blk-btns">
      <button className="update-btn">Update</button>
      <button className="cancel-btn">Cancel</button>
    </div>

  </div>
);

const ContentAdd = () => (
  <div className="content-edit content-main">
    
    <div className="content-header">
      <h2>Add New Merchant</h2>
    </div>
    <div className="content-fullname-field">
      <label htmlFor="fullname" >Merchant Name</label>
      <input className="fast-ease" type="text" placeholder="" name="fullname" required />
    </div>

    <h2 className="content-edit-label">Shipping Fee</h2>
    <div className="content-edit-table content-blk-table">
      <h3>Metro Manila</h3>
      <div className="content-edit-main content-blk-main">
        <div className="content-edit-row content-blk-row">
          <div className="content-edit-col content-blk-col in-blk in-blk-mid">
            <label className="in-blk in-blk-mid" htmlFor="contentbox" >Box</label>
            <input className="fast-ease" type="text" placeholder="" name="contentbox" />
          </div>
          <div className="content-edit-col content-blk-col in-blk in-blk-mid">
            <label className="in-blk in-blk-mid" htmlFor="contentoversized" >Oversized</label>
            <input className="fast-ease" type="text" placeholder="" name="contentoversized" />
          </div>
          <div className="content-edit-col content-blk-col in-blk in-blk-mid">
            <label className="in-blk in-blk-mid" htmlFor="contentbigpouch" >Big Pouch</label>
            <input className="fast-ease" type="text" placeholder="" name="contentbigpouch" />
          </div>
          <div className="content-edit-col content-blk-col in-blk in-blk-mid">
            <label className="in-blk in-blk-mid" htmlFor="contentsmallpouch" >Small Pouch</label>
            <input className="fast-ease" type="text" placeholder="" name="contentsmallpouch" />
          </div>
        </div>
      </div>
      <div className="content-address-prov">
        <p>Provincial</p>
      </div>
      <div className="content-address-intraprov">
        <p>Intra Provincial</p>
      </div>
    </div>

    <div className="content-edit-btns content-blk-btns">
      <button className="save-btn">Save</button>
      <button className="cancel-btn">Cancel</button>
    </div>
    
  </div>
);

const Dashboard = () => (
  <div className='dashboard-wrap'>

      <Navigation />
      <div className="content-panel">
        <Header />
        <ContentList />
      </div>
   
  </div>
);

const Edit = () => (
  <div className='edit'>
    <Navigation />
      <div className="content-panel">
        <Header />
        <ContentEdit />
      </div>
  </div>
);

const Add = () => (
  <div className='add'>
    <Navigation />
      <div className="content-panel">
        <Header />
        <ContentAdd />
      </div>
  </div>
);

const ContentPage = () => (
  <div className="container-fluid">
    <p>Coming Soon...</p>
  </div>
);

const Page2 = () => (
  <div className='page2'>
    <Navigation />
    <div className="content-panel">
      <Header />
      <ContentPage />
    </div>
  </div>
);

const Page3 = () => (
  <div className='page3'>
    <Navigation />
    <div className="content-panel">
      <Header />
      <ContentPage />
    </div>
  </div>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Login}></Route>
    <Route exact path='/dashboard' component={Dashboard}></Route>
    <Route exact path='/page-2' component={Page2}></Route>
    <Route exact path='/page-3' component={Page3}></Route>
    <Route exact path='/edit' component={Edit}></Route>
    <Route exact path='/add' component={Add}></Route>
  </Switch>
);

export default App;