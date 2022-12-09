import { useEffect, useState } from "react";
import { Goal } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import {FaUser} from 'react-icons/fa'
import { update_goal_requested } from "../redux/slices/goal";
import { delete_goal_requested } from "../redux/slices/goal";
import { FDv, HDv, INp, RBt, SEp } from "./styles";
import { Item } from "semantic-ui-react";
import { useParams } from "react-router-dom";



export default function Update() {
    // const goal: Goal[] = useSelector(
    //     (state: RootState) => state.goalReducer.goals
    //   );



      let [name, setName] = useState("");
      let [gender, setGender] = useState("");
      let [dateOfBirth, setDateOfBirth] = useState("");
      let [salary, setSalary] = useState("");

      let dispatch = useDispatch();
      let params = useParams();
      let idnumber = params.id ? params.id.toString() : "empty";

      function updateGoal() {
        dispatch(
            update_goal_requested({
            Name: name,
            Gender: gender,
            DateOfBirth: dateOfBirth,
            Salary: salary,
            _id: idnumber,
          })
        );
      }

      

      return (
        <>
            <section>
              <HDv>
                <h1>
                    <FaUser/>Update
                </h1>
                <p>Please update an employee</p>
              </HDv>
                
            </section>
            <section>
                <form onSubmit={updateGoal}>
                  <FDv>
                    <label htmlFor="name"><b>Name</b></label>
                    <INp type="text" name='name'  id='name' placeholder='Enter employee name' value={name} onChange={(e) => setName(e.target.value)} required/><br />
                    <label htmlFor="dateOfBirth"><b>Birthdate</b></label>
                    <INp type="date" name='dateOfBirth'  id='dateOfBirth'  value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required/><br />
                    <div className="field">
                    <label className="label"><b>Gender</b></label>
                    <SEp
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option>Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </SEp>
                    </div>
                    {/* <label htmlFor="gender"><b>Gender</b></label>
                    <INp type="gender" name='gender'  id='gender' placeholder='Enter employee gender'  value={gender} onChange={(e) => setGender(e.target.value)}/><br /> */}
                    <label htmlFor="salary"><b>Salary</b></label>
                    <INp type="number" name='salary' id='salary' placeholder='Enter employee salary'  value={salary} onChange={(e) => setSalary(e.target.value)}/><br />
                    <RBt type='submit' value={'submit'}/>
                  </FDv>
                </form>
            </section>
        </>
      )
      
}