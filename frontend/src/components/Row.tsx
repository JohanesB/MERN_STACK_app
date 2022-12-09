import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Goal } from "../redux/types";
import { BBu, BSn, STBodyTR, STD } from "./styles";
import { delete_goal_requested } from "../redux/slices/goal";
import {Link} from 'react-router-dom'

type TableRowProps = {
  item: Goal;
};



export default function Row({ item }: TableRowProps) {
    const dispatch = useDispatch();
  function deleteGoal() {
    dispatch(delete_goal_requested(item));
  }
  let i = 0;
  return (
    <STBodyTR>
      <STD>{i + 1}</STD>
      <STD>{item.Name}</STD>
      <STD>{item.DateOfBirth}</STD>
      <STD>{item.Gender}</STD>
      <STD>{item.Salary}</STD>
      <STD>
        <BBu><Link to={`/update/${item._id}`}><BSn>Update</BSn></Link></BBu>
        <span> </span>
        <BBu onClick={deleteGoal}>Delete</BBu>
      </STD>
    </STBodyTR>
  );
};