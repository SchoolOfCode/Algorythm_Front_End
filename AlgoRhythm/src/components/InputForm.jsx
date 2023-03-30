import {useForm} from "react-hook-form";
import { useState } from "react";
import axios from 'axios';



export default function InputForm() {
    const [skill, setSkill] = useState("")
    const [candidate, setCandidate] = useState("")
    const [contract, setContract] = useState({}); 
    console.log(contract)
    const getUsers = async (skill) => {
        try {
          const result = await axios.get(
            `http://localhost:3000/api/candidates/skill/${skill}`
          );
          setCandidate(result.data.payload)
         
          return result.data.payload;
        } catch (error) {
          console.error("Error fetching data:", error);
          throw error;
        }
      };

function onSubmit(e){
    e.preventDefault()
    // console.log(skill)
    console.log(candidate)
    getUsers(skill)
}

function onChange(e){
    setSkill(e.target.value)
}

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({})
  return (
    <div className='full-container'>
    <h3>Add Contract</h3>
    <div className='form-container'>
    <form
    onSubmit={handleSubmit(data => {
        console.log(data)
        // const { name, value } = e.target;
    setContract({
      //Spread the state to copy it's properties before replace them
      ...contract,
      //Prevents a possible empty string (falsy value) to break the app
      data
      
    })
    getUsers(data.skill);
    })
    }
    className='contract-input-form'
    >
    <p className="input-p">Please Enter Start Date</p>
    <input
    type="date"
    {...register('startDate', {required: 'Start Date is required'})}
     />
     <p>{errors.startDate?.message}</p>
     <p>Please Enter End Date</p>
     <input
    type="date"
    {...register('endDate', {required: 'End Date is required'})}
     />
     <p>{errors.endDate?.message}</p>
     <p>Please Enter Contact Name</p>
     <input
    type="text"
    placeholder="Contact"
    {...register('contact', {required: 'contact is required'})}
     />
     <p>{errors.contact?.message}</p>
     <p>Please Enter Contract Provider</p>
     <input
    type="text"
    placeholder="Contract name"
    {...register('contractName', {required: 'contract name is required'})}
     />
     <p>{errors.contractName?.message}</p>
     <p>Please Enter Role</p>
     <input
    type="text"
    placeholder="Role"
    {...register('role', {required: 'Role is required'})}
     />
     <p>{errors.role?.message}</p>
     <p>Please Enter Skill</p>
     <select
     {...register("skill", {required: 'please select a skill'})}
     >
    <option value="">Skill</option>
    <option value="Javascript">JavaScript</option>
    <option value="React">React</option>
    <option value="Ruby">Ruby</option>
    <option value="Java">Java</option>
    <option value="Node.js">Node.js</option>
     </select>
    <p>{errors.skill?.message}</p>
    <div className='submit-button-container'>
    <input className="submit-btn" type="submit" />
    </div>

    </form>
    <br />
    <form
    className="skill-search-input"
    onSubmit={(e)=>onSubmit(e)}
    >
    <h2>Search For Candidate by Skill</h2>
    
    <input type='text' onChange={(e)=>onChange(e)} />
    {/* <input type="text" /> */}
    <input className="submit-btn" type="submit"  />
    </form>
    <br />
</div>
<div className='table-container'>
    { candidate &&
    <table className="app-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Role</th>
                <th>Skill</th>
              </tr>
            </thead>
            <tbody>
              {candidate.map((candidate, index) => (
                <tr key={index}>
                  <td>{candidate.id}</td>
                  <td>{candidate.name}</td>
                  <td>{candidate.role}</td>
                  <td>{candidate.skill}</td>
                </tr>
              ))}
            </tbody>
          </table>
    }
    </div>
    </div>
    


  )
}
