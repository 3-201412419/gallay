/* eslint-disable */
import { useState, createContext, useEffect, lazy, Suspense } from "react";
import {
	BrowserRouter,
	Link,
	Route,
	Routes,
	useNavigate,
	useLocation,
} from "react-router-dom";
import "./App.css";
import Modal from 'react-modal';
import Plan from "./gallay/Plan.js";
import { Plan_modal, Plan_keyword_modal } from "./gallay/Plan_modal.js";
import Slider from 'react-slider-modal';
import 'animate.css/animate.min.css'

const sliderStyle = {
	width:"100%",
	height:"400px",
	right:"100px",
	top:"50px"
};

function App() {

	let navigate = useNavigate();
	let [Plan_Check, plan_set_check] = useState("true");
	let [Plan_Keyword_Check, Plan_set_check] = useState("true");
	

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Images />
							<Fashions />
							<Community />
							<Sns />
						</>
					}
				/>
				<Route
					path="/react_ci/plan"
					exact
					element={
						<>
							<Header />
							<Plan name="plan" />
							<Footer />
						</>
					}
				/>
				<Route
					path="/react_ci/plan_modal"
					exact
					element={
						<>
							<Header Plan_Check={Plan_Check} navigate={navigate} />
							<Plan name="modal" />
							<Plan_modal />
							<Footer />{" "}
						</>
					}
				/>
				<Route
					path="/react_ci/Plan_keyword_modal"
					exact
					element={
						<>
							<Header Plan_Keyword_Check={Plan_Check} navigate={navigate} />
							<Plan name="keyword" />
							<Plan_keyword_modal />
							<Footer />
						</>
					}
				></Route>
				<Route
					path="/react_ci/Plan_fabric_modal"
					exact
					element={
						<>
							<Header Plan_fabric_Check={Plan_Check} navigate={navigate} />
							<Plan name="fabric" />
							<Footer />
						</>
					}
				></Route>
				<Route
					path="/react_ci/Plan_fabric_modal_detail"
					exact
					element={
						<>
							<Header
								Plan_fabric_Check_detail={Plan_Check}
								navigate={navigate}
							></Header>
							<Plan name="fabric_detail" />
						</>
					}
				></Route>
			</Routes>
		</div>
	);
}

let Header = (props) => {



	const [slideShow, setSlideShow] = useState(false);
	if (props.Plan_Check == "true") {
		return (
			<div className="plan_header">
				<img
					onClick={() => {
						props.navigate(-1);
					}}
					src={process.env.PUBLIC_URL + "/images/left_arrow_white.png"}
				></img>
				<p>
					<span className="header_allow">플랜 갤러리</span>{" "}
					<button className="header_button">asdasd</button>
				</p>
			</div>
		);
	} else if (props.Plan_Keyword_Check == "true") {
		return (
			<div className="plan_header">
				<img
					onClick={() => {
						props.navigate(-1);
					}}
					src={process.env.PUBLIC_URL + "/images/left_arrow_white.png"}
				></img>
				<p>
					<button className="header_left_button">123</button>
					<span>플랜 갤러리</span>
					<button className="header_button">asdasd</button>
				</p>
			</div>
		);
	} else if (props.Plan_fabric_Check == "true") {
		return (
			<div className="plan_header">
				<img
					onClick={() => {
						setSlideShow(!slideShow);
					}}
					src={process.env.PUBLIC_URL + "/images/menu_white.png"}
				></img>
				<p style={{ marginRight: "20px" }}>
					플랜 갤러리<button className="header_button">asdasd</button>
				</p>

				<Slider
        id="demoID1313"
        className=""
        direction="left"
        size="small"
        animation="slide"
        closeModal={(e) => {
          setSlideShow(e);
        }}
        toggle={slideShow}
     
       
      >
        <div className="slider-container"  style={{background:"black"}}>
			<Fashions></Fashions>
			<Community></Community>
			<Sns></Sns>
        </div>
      </Slider>
			</div>
		);
	} else if (props.Plan_fabric_Check_detail == "true") {
		const location = useLocation();
		const state = location.state.title;
		{
			/* Plan 에서 Navigate 를 사용해서 링크를 이쪽으로 보내주면 dom의 useLocation를 사용해서 파라미터를 불러올수 있다 */
		}

		return (
			
			<div className="plan_header">
				<img
					onClick={() => {
						props.navigate(-1);
						
					}}
					src={process.env.PUBLIC_URL + "/images/left_arrow_white.png"}
				></img>
				<p style={{ marginRight: "20px" }}>{state}</p>
			</div>
		);
	} else {
		return (
			<div className="plan_header">
				<span style={{ float: "left", margin: "10px" }}>
					<img src={process.env.PUBLIC_URL + "/images/menu_white.png"} onClick = {() => {
						setSlideShow(!slideShow);
					}}></img>
				</span>

	<Slider
        id="demoID1313"
        className=""
        direction="left"
        size="small"
        animation="slide"
        closeModal={(e) => {
          setSlideShow(e);
        }}
        toggle={slideShow}
     
       
      >
        <div className="slider-container"  style={{background:"black"}}>
			<Fashions></Fashions>
			<Community></Community>
			<Sns></Sns>
        </div>
      </Slider>

				<p style={{ marginRight: "20px" }}>플랜 갤러리</p>
			</div>
		);
	}
};

let Footer = () => {
	return (
		<div className="footer">
			<div className="footer_home">
				<img
					className="footer_home_set"
					src={process.env.PUBLIC_URL + "/images/home.png"}
				></img>
			</div>
			<div className="footer_bar">
				<img
					className="footer_bar_set"
					src={process.env.PUBLIC_URL + "/images/menu2.png"}
				></img>
			</div>
			<div className="footer_human">
				<img
					className="footer_human_set"
					src={process.env.PUBLIC_URL + "/images/human.png"}
				></img>
			</div>
			<div className="footer_more">
				<img
					className="footer_more_set"
					src={process.env.PUBLIC_URL + "/images/more.png"}
				></img>
			</div>
		</div>
	);
};

let Fashions = () => {
	return (
		<div className="Fashions">
			<p>Fashion</p>
			<p>Cosmetics</p>
			<p>SNS</p>
		</div>
	);
};

let Images = () => {
	return (
		<div
			className="img_src"
			style={{
				backgroundImage: `url(${
					process.env.PUBLIC_URL + "/images/react_intro_image.png"
				})`,
			}}
		/>
	);
};

let Community = () => {
	return (
		<div className="Community">
			<p className="Community_s">Community</p>
		</div>
	);
};

let Sns = () => {
	return (
		<div className="Sns">
			<Link to="/react_ci/plan">
				<p>Facebook</p>
			</Link>
			<p>Twitter</p>
			<p>Instagram</p>
			<p>Youtube</p>
			<p>Tiktok</p>
		</div>
	);
};

export default App;
