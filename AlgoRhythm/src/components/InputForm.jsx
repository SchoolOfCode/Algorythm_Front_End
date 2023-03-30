import {useForm} from "react-hook-form";


export default function InputForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({})
  return (
    <>
    <form
    onSubmit={handleSubmit(data => {
        console.log(data)
    })}
    >
    <input
    type="date"
    placeholder="Start Date"
    {...register('startDate', {required: 'Start Date is required'})}
     />
     <p>{errors.startDate?.message}</p>
     <input
    type="date"
    placeholder="End Date"
    {...register('endDate', {required: 'End Date is required'})}
     />
     <p>{errors.endDate?.message}</p>
     <input
    type="text"
    placeholder="Contact"
    {...register('contact', {required: 'contact is required'})}
     />
     <p>{errors.contact?.message}</p>
     <input
    type="text"
    placeholder="Contract name"
    {...register('contractName', {required: 'contract name is required'})}
     />
     <p>{errors.contractName?.message}</p>
     <input
    type="text"
    placeholder="Role"
    {...register('role', {required: 'Role is required'})}
     />
     <p>{errors.role?.message}</p>
     <select
     {...register("skill", {required: 'please select a skill'})}
     >
    <option value="">Skill</option>
    <option value="JavaScript">JavaScript</option>
    <option value="TypeScript">TypeScript</option>
    <option value="AWS">AWS</option>
    <option value="PostGreSQL">PostGreSQL</option>
     </select>
    <p>{errors.skill?.message}</p>
    <input type="submit" />

    </form>
    <form
    onSubmit={handleSubmit(data => {
        console.log(data)
    })}
    >
    <select
    {...register("skillFind", {required: "please select a skill to search"})}
    >
    <option value="">Skill To Search</option>
    <option value="JavaScript">JavaScript</option>
    <option value="TypeScript">TypeScript</option>
    <option value="AWS">AWS</option>
    <option value="PostGreSQL">PostGreSQL</option>

    </select>
    <p>{errors.skillFind?.message}</p>
    <input type="submit" />
        
    </form>
    </>


  )
}
