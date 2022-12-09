import { useEffect, useState } from "react";
import { Goal } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { Table } from "semantic-ui-react";
import { BBu, DVs, STable, STBody, STBodyTR, STD, STH, STHead, STHeadTR } from "./styles";
import { delete_goal_requested } from "../redux/slices/goal";
import { deleteGoal } from "../utils";
import  Row from "./Row";

export default function Tables() {
  let [search,setSearch] = useState("")
  const goal: Goal[] = useSelector(
    (state: RootState) => state.goalReducer.goals
  );
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch({
      type: "goals/fetch_goal",
    });
  }, []);


  
  //const keys = Object.keys(goal[0])
  return (
    <div>
      <DVs className="ui search">
        <div className="ui icon input">
          <input className="prompt" type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="search by name..."/>
          <i className="search icon"></i>
        </div>
      </DVs>

    <STable>
        <STHead>
          <STHeadTR>
            {/* <Table.HeaderCell>Id</Table.HeaderCell> */}
            <STH>#</STH>
            <STH>Name</STH>
            <STH>DateOfBirth</STH>
            <STH>Gender</STH>
            <STH>Salary</STH>
            <STH>Action</STH>
          </STHeadTR>
        </STHead>
            <STBody>
              {goal.filter((item,index)=> search ? item.Name.toLowerCase().includes(search.toLowerCase()): item)
              .map((item, index) => (
                <Row item={item} key={index}></Row>
              ))}
            </STBody>
        </STable>
    </div>
  );
}


