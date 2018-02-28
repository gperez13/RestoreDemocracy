import React, { Component } from 'react'
import './Header.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';



class Header extends Component{

	render(){



		return(
			<div>
				<div id="nav">

						<div class="container">
							<div class="row">

								<div class="col-1">
									<img id="nav-logo" src="./RD1.jpg"/>

								</div>



								<div class="col-1">
									<h4 class="header">Restore Democracy</h4>

								</div>



								<div class="col-10">
				                  <Link to="/home"><span class="smoothScroll btn btn-default link">Home</span></Link>
				                  <Link to="/about"><span class="smoothScroll btn btn-default link">About</span></Link>
				                  <Link to="/philosophy"><span class="smoothScroll btn btn-default link">Philosophy</span></Link>
				                  <Link to="/mission"><span class="smoothScroll btn btn-default link">Mission</span></Link>
				                  <Link to="/donate"><span class="smoothScroll btn btn-default link">Donate</span></Link>
				                  <Link to="/contact"><span class="smoothScroll btn btn-default link">Contact</span></Link>

								</div>
							




							</div>
						</div>


				</div>
			</div>

			)
	}
}






export default Header;