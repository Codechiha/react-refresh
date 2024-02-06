import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/*      Using React Hook Form to handle form information
    register - variable that holds the form object information
    handleSubmit - function that handles the form information

    yup library allows for form input DATA validation
*/

export const Form = () => {
    
    // Schema creation for how the form should look
    // yup.object -> our schema should look like an object
    const schema = yup.object().shape({
        fullName: yup.string().required("Your full name is required"),
        email: yup.string().email("must be in email format").required("must not be empty"),
        age: yup.number("message").positive().integer().min(18, "Must be 18 or older to continue").required("Cannot be empty"),
        password: yup.string().min(4, "Passwords must be 4 - 20 characters").max(20, "Passwords must be 4 - 20 characters").required("Password Required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password do not match").required("Passwords do not match")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });

    const submitFunc = (data) => {
        console.log(data)
    }
    return(
        <div>
            <form onSubmit={handleSubmit(submitFunc)}>
                <input type="text" placeholder="Full Name..." {...register("fullName")} />
                <p>{errors.fullName?.message}</p>
                <input type="text" placeholder="Email..." {...register("email")}/>
                <p>{errors.email?.message}</p>
                <input type="number" placeholder="Age" {...register("age")}/>
                <p>{errors.age?.message}</p>
                <input type="text" placeholder="Password" {...register("password")}/>
                <p>{errors.password?.message}</p>
                <input type="text" placeholder="Confirm Password" {...register("confirmPassword")}/>
                <p>{errors.confirmPassword?.message}</p>
                <input type="submit" />
            </form> 
        </div>

        
    )
}