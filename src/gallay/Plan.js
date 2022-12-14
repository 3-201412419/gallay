/*eslint-disable*/
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import {useNavigate} from "react-router-dom";
import styled, {keyframes,css} from "styled-components";
import "./Plan.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { list } from "postcss";
import Modal from "react-modal";

const modalStyle = {

	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.4)'
		
	  },
	  content: {
		position: 'absolute',
		left: '0px',
		right: '0px',
		bottom: '0px',
		background: '#fff',
		border : 'none',
		overflow: 'auto',
		WebkitOverflowScrolling: 'touch',
		borderRadius: '4px',
		color:'white',
		top:'62%',
		outline: 'none',
		height: '300px',
		padding: '20px',
		backgroundColor : '#171717',
		
	  }
}

function Plan(props) {
	let modal_check = props.name;
	let navigate = useNavigate();
	let notShow = useState(true);

	let array_modal = [
		"차양",
		"목공",
		"주방",
		"벽지",
		"욕실",
		"거실",
		"마당",
		"다락",
	];
	let map_modal = [
		"이모션",
		"올립스",
		"한솥IMB",
		"우드트렉",
		"이모션2",
		"올립스2",
		"한솥IMB2",
		"우드트렉2",
	];
	let map_modal_sub = [
		"수입커튼 전문",
		"블라인드 전문",
		"국내커튼 전문",
		"우드블라인드 전문",
		"수입커튼 전문2",
		"블라인드 전문2",
		"국내커튼 전문2",
		"우드블라인드 전문2",
	];
	let map_fabric_modal = [
		"아르카디아",
		"모다코",
		"세븐크리스7종",
		"아레나암막",
		"아이린",
		"6라인메탈그라데이션",
		"소피아",
		"바이오투톤",
		"코딘",
		"아르카디아2",
		"모다코2",
		"세븐크리스7종2",
		"아레나암막2",
		"아이린2",
		"6라인메탈그라데이션2",
	];
	let modal_use = useState("true");

	if (modal_check === "modal") {
		return (
			<div className="plan_main">
				<Main_con
					navigate={navigate}
					modal_check={modal_check}
					map_modal={map_modal}
					map_modal_sub={map_modal_sub}
				/>
			</div>
		);
	} else if (modal_check === "keyword") {
		return (
			<div className="plan_main">
				<Main_con
					navigate={navigate}
					modal_check={modal_check}
					map_modal={["콤비블라인드", "롤스크린", "허니콤", "우드블라인드"]}
				/>
			</div>
		);
	} else if (modal_check === "fabric") {
		return (
			<div className="plan_main">
				<Main_con
					navigate={navigate}
					modal_check={modal_check}
					map_modal={map_fabric_modal}
				/>
			</div>
		);
	} else if (modal_check === "fabric_detail") {
		
		return (
			<div className="plan_main">
				<Main_con_detail
					navigate={navigate}
					modal_check={modal_check}
					map_modal={["1,2"]}
					view={notShow}
				/>
			</div>
		);
	} else {
		map_modal = array_modal;
		return (
			<div className = "plan_main">
				<Main_con
					navigate={navigate}
					modal_check="plan"
					map_modal={map_modal}
				/>
			</div>
		);
	}
}

let Part_plan = (props) => {
	return (
		<div className="part_plan">
			<div className="image_div_plan">
				<img
					className="images_plan"
					src={process.env.PUBLIC_URL + "/images/b_man.jpg"}
				></img>
			</div>
			<p>{props.name}</p>
			<span>{props.subtitle}</span>
		</div>
	);
};

let Part_plan_keyword = (props) => {
	let image_id = props.id;

	return (
		<>
			<div
				className="part_plan_keyword"
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL + "/images/image_" + image_id + ".png"
					})`,
				}}
			>
				<p className="keyword_title">{props.name}</p>
			</div>
		</>
	);
};

let Part_plan_fabric = (props) => {
	let image_id = props.id;

	return (
		<>
			<div
				className="part_plan_fabric"
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL +
						"/images/image_" +
						props.ids[image_id] +
						".png"
					})`,
				}}
			>
				<p className="fabric_title">{props.name}</p>
			</div>
		</>
	);
};

let Main_con_detail = (props) => {

	let [change_div, setChange_div] = useState('detail_image_0');
	const [modalIsOpen, setModalIsOpen] = useState(false);

	let sliderItem = ["1", "2", "3", "4", "5"];
	const [pageNum, setPageNum] = useState(1);
	const settings = {
		dots: true,
		infinite: sliderItem.length > 5,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: "0px",
		afterChange: (pageNum) => setPageNum(pageNum + 1),
	};

	screen.orientation.addEventListener('change', function(){
		let change_type = screen.orientation.type;
		

		if(change_type == 'portrait-primary')
		{
		
			setChange_div('detail_image_0')
			
		}
		else
		{
			
			setChange_div('detail_image_1');
		

		}
		
	});
	
	return (
		<div className="part_plan_detail">
			<div style={{ textAlign: "right" }}>
				<span className="detail_spec" onClick={() => setModalIsOpen(true)}>spec</span>
			</div>

				<Modal style={modalStyle} isOpen = {modalIsOpen} onRequestClose = {() => setModalIsOpen(false)}>
				<p>NO. kr 202104010851000</p>
				<p>커버 풀커버 알루미늄</p>
				<p>암막율 68%</p>
				<p>재구성 23%</p>
				<p>재질 pory 100% </p>
				<p>재료 Made in Korea</p>
				<p>생산 Made in Korea</p>
				<p>특징</p>
				
				</Modal>

		

			<Slider {...settings}>
				
				{sliderItem.map((item,key) => {
					return (
						<div key = {key}>
							<div
								className="detail_image"
								id={change_div}
								style={{
									backgroundImage: `url(${
										process.env.PUBLIC_URL + "/images/image_2.png"
									})`,
								}}
							>
								<span className="images_num">
									{pageNum}/{sliderItem.length}
								</span>
							</div>
						</div>
					);
				})}
			</Slider>
			<Colors/>
		</div>
	);
};

let Colors = (props) => {

	const [change,setChange] = useState('');

	const color_array = [
	{
		id: 1,
		index: "화이트",
		color: "white"

	},

	{
		id: 2,
		index: "아이보리",
		color:"ivory"
	},

	{
		id: 3,
		index : "그레이",
		color: "gray"
	},

	{
		id: 4,
		index : "옐로우",
		color: "yellow"
	},

	{
		id: 5,
		index : "브라운",
		color:"brown"
	}


]


	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 2,
		centerPadding: "0px"
	};

	return (
		<div style={{ position: 'relative' ,top: '40px'}}>
			{
				color_array.map((index,key) => {
					return (
						
							<span  className = "colors_name" id = {change} onClick= { () => {
								setChange(index.color);
								console.log(index.color);
							}}
								
							  key = {key}>{index.index}</span>
						
					)
				})
			}
			</div>
	)
}



let Main_con = (props) => {
	return (
		<>
			{props.modal_check === "keyword" ? (
				<div className="input_Line">
					<input
						type="text"
						placeholder="아르카디아"
						style={{
							backgroundImage: `url(${
								process.env.PUBLIC_URL + "/images/sc_icon.png"
							})`,
							float: "left",
							marginLeft: "5%",
						}}
					/>
				</div>
			) : null}
			{props.modal_check !== "keyword" ? (
				<div className="input_Line" {...props.notShow}>
					<input
						type="text"
						placeholder="제품명을 검색해 주세요"
						style={{
							backgroundImage: `url(${
								process.env.PUBLIC_URL + "/images/sc_icon.png"
							})`,
							float: "left",
							marginLeft: "5%",
						}}
					/>
				</div>
			) : null}

			{props.map_modal.map((a, i) => {
				return (
					<div
						key={a}
						className={props.plan}
						onClick={() => {
							props.modal_check == "modal"
								? props.navigate("/react_ci/plan_keyword_modal")
								: null;
							props.modal_check == "plan"
								? props.navigate("/react_ci/plan_modal")
								: null;
							props.modal_check == "keyword"
								? props.navigate("/react_ci/plan_fabric_modal")
								: null;
							// props.modal_check == "fabric" ?
							// props.navigate('/react_ci/plan_fabric_modal_detail')
							// :null
							if (props.modal_check == "fabric") {
								props.navigate("/react_ci/plan_fabric_modal_detail", {
									state: {
										title: a,
									},
								});
							}
						}}
					>
						{props.modal_check == "modal" && (
							<Part_plan name={a} subtitle={props.map_modal_sub[i]} />
						)}
						{props.modal_check == "keyword" && (
							<>
								<Part_plan_keyword name={a} id={i} />{" "}
							</>
						)}
						{props.modal_check == "plan" && <Part_plan name={a} />}
						{props.modal_check == "fabric" && (
							<>
								<Part_plan_fabric
									name={a}
									id={i}
									ids={[
										"0",
										"1",
										"2",
										"0",
										"1",
										"2",
										"0",
										"1",
										"2",
										"0",
										"1",
										"2",
										"0",
										"1",
										"2",
									]}
								/>{" "}
							</>
						)}

						{/* ↑ 컴포넌트 별로 페이지 나눌때 이런 방식이면 괜찮을듯 */}
					</div>
				);
			})}
		</>
	);
};
Modal.setAppElement('#root')
export default Plan;
